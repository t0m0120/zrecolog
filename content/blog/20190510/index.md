---
title: keyboardAvoidingViewが2個分上に上がる
date: '2019-05-10'
tags: [ 'ReactNative', 'Android']
path: "/20190510"
---

## 問題点

Zenfone3Max/Android8.1で
TextAreaにFocusした際にKeyboardの高さがキーボード1個分？余計に上がってしまう

<img src='https://cloud.githubusercontent.com/assets/1051229/21565199/47256b5e-ce95-11e6-8e19-69a112fd06f3.png' width='30%'>



## 解決方法

[Bug in KeyboardAvoidingView on Android #11681](https://github.com/facebook/react-native/issues/11681#issuecomment-297031159)
にある`project/android/app/src/main/AndroidManifest.xml`のwindowSSoftInputModeを`adjustPan`へ

```xml
    android:windowSoftInputMode="adjustPan"
```


`KeyboardAvoidingView`の`behavior=`を`undefined`にすると治った。

## Android

最近仕事で作っているSocialDogのAndroid版対応の調査を開発メンバーと行ったが
iOSとロジックは共通なので致命的なバグは無さそうで
Androidのジェスチャーや今回のような対応ぐらいで済みそうで感動した。

~~ただ自分のZenfone3Maxが重さが限界すぎて辛い~~
