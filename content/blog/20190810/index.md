---
title: NativeBaseのButtonでAndroidが落ちる
date: 2019-08-10
tags: ["ReactNative", "NativeBase", "npm", "Android"]
path: /20190810
---

## 内容
32bit端末で  
(ABIがarmeabi-v7a/armeabiの端末)

```
Fatal Exception: com.facebook.react.bridge.NoSuchKeyException
backgroundColor
```

のエラーが起きていた。

[native-base/Button.js theme backgroundColor: null crashing on RN 0.59.1 Android NoSuchKey Exception: backgroundColor #2673](https://github.com/GeekyAnts/NativeBase/issues/2673)  
このissueに原因があった。  
Buttonにtransparentのpropsを渡していると落ちる様で  
package側のbackgorundColorがnullのせいっぽくとりあえず`backgroundColor: 'transparent'`を入れて対処した。

UIライブラリ系少しずつ無くしていく様にしたい。。。
