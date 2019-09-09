---
title: ReactNativeAndroidのJSCをv8に変える
date: 2019-09-09
tags: ["ReactNative", "Android", "JSC", "npm"]
path: /20190909
---

## 発端

参考Issue <br>
[signal 11 (SIGSEGV), code 1 (SEGV_MAPERR) libjsc.so still occuring on Caterpillar S41 (Android 8.0) #25494](https://github.com/facebook/react-native/issues/25494)<br>
[App Crash on Android OS 6 Samsung Galaxy S7 SM-G930FD (JSC Crash) 64 bit support A/libc: Fatal signal 11 (SIGSEGV) #24261](https://github.com/facebook/react-native/issues/24261)


```sh
signal 11 (SIGSEGV), code 1 (SEGV_MAPERR)
*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
pid: 0, tid: 0 >>> com.myapp <<<

backtrace:
  #00  pc 00000000000f7748  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #01  pc 0000000000143fe8  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #02  pc 000000000012f0a8  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #03  pc 0000000000139484  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #04  pc 000000000013900c  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #05  pc 00000000001fb9c4  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #06  pc 00000000001f8e90  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #07  pc 00000000001f96bc  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #08  pc 00000000001e41a0  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #09  pc 00000000006171ec  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #10  pc 0000000000617950  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #11  pc 000000000060de7c  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #12  pc 000000000061b084  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #13  pc 0000000000646dc8  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so
  #14  pc 0000000000066f34  /system/lib64/libc.so (_ZL15__pthread_startPv+36)
  #15  pc 000000000001eb94  /system/lib64/libc.so (__start_thread+68)
```

`signal 11 (SIGSEGV), code 1 (SEGV_MAPERR)`のエラーが端末を問わずに多発していた。<br>
実機やAWSのDeviceFarmなどで色々試してみたがクラッシュが起きない。。。


JSCが原因っぽく0.59以前のバージョンなら治るっぽいがAndroidが６４bit必須になっているので0.59以下にAndroidを下げられない。

代替案としてv0.60以上で実装される[Using Hermes/ReactNative](https://facebook.github.io/react-native/docs/hermes/)を使うか
ReactNativeでV8のRuntimeをサポートしたJSCに載せ替える[Kudo/react-native-v8](https://github.com/Kudo/react-native-v8)を使うの
２択っぽかった


SocialDogのversionは0.59.10だったのでどちらを試すか迷ったが<br>
Hermesはまだ出たばかりかつrealmなど対応していないライブラリがあるっぽく危険に感じたので<br>
[Kudo/react-native-v8](https://github.com/Kudo/react-native-v8)を試してみた。



0.59.10の場合はpatch2以下だと日本語がデバッグモードで文字化けしてしまうためpatch.2でyarn addする。<br>
すぐに対応してもらって助かった。。。
[Run code directly from dev server cause Non-Ascii characters garbled #13](https://github.com/Kudo/react-native-v8/issues/13)

```sh
yarn add 'react-native-v8@>=0.59.10-patch.2 <0.59.11'

```
<br>

```diff
--- a/android/app/build.gradle
+++ b/android/app/build.gradle
@@ -161,11 +161,18 @@ android {
             }
         }
     }
+
+    packagingOptions {
+        // Make sure libjsc.so does not packed in APK
+        exclude "**/libjsc.so"
+    }
 }

 dependencies {
     implementation fileTree(dir: "libs", include: ["*.jar"])
     implementation "com.facebook.react:react-native:+"  // From node_modules
+    // Add v8-android - prebuilt libv8.so into APK
+    implementation 'org.chromium:v8-android:+'

     // JSC from node_modules
     if (useIntlJsc) {
--- a/android/build.gradle
+++ b/android/build.gradle
@@ -24,8 +24,12 @@ allprojects {
     repositories {
         mavenLocal()
         maven {
-            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
-            url("$rootDir/../node_modules/react-native/android")
+            // Replace AAR from original RN with AAR from react-native-v8
+            url("$rootDir/../node_modules/react-native-v8/dist")
+        }
+        maven {
+            // prebuilt libv8.so
+            url("$rootDir/../node_modules/v8-android/dist")
         }
         maven {
             // Android JSC is installed from npm
```


これでDebugModeを立ち上げずに下記console.logを叩いて
Xcodeかadb logcatで確認する。
(DebugModeを立ち上げるとブラウザのjsエンジンになるので注意

```js
console.log(`V8 version is ${global._v8runtime().version}`);
```


プロダクションの方をreact-native-v8に載せ替えてリリースし１週間弱動かしてみているが<br>
`signal 11 (SIGSEGV), code 1 (SEGV_MAPERR)`のクラッシュは起きなくなったっぽい


この辺もあってAndroidのUITsetなど工数かけて行った感がある。<br>
issueは追いかけておくがとりあえずは解決・・・？
