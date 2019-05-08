---
title: Android9のシミュレーターでlocalhostに繋がらない
date: '2019-05-08'
tags: [ 'ReactNative', 'Android']
path: "/20190508"
---

## 解決方法

0.59ぐらいで追加されているが
[rn-diff-purge v0.59](https://github.com/react-native-community/rn-diff-purge/blob/e6bbd3e52536ce461e09f466177a5bba48839635/RnDiffApp/android/app/src/debug/AndroidManifest.xml#L7)

`android:usesCleartextTraffic="true"`
をtrueにしないとhttp通信が拒否されてlocalのmetrobundlerに繋がらないっぽい

[developer_android #usesCleartextTraffic](https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic)

## 余談

全世界で見るとAndroid5-9が対応必須そう
[Android OS Share](https://developer.android.com/about/dashboards/?hl=ja)

[DOCOMO Andorid9対応予定端末リスト](https://www.nttdocomo.co.jp/info/notice/pages/181017_00.html)

[au Android9対応予定端末リスト](https://www.au.com/information/topic/mobile/2018-079/)

[Android Q BetaDevices](https://developer.android.com/preview/devices)


現状Zenfone3Max/iPhone7の2台持ちなんだけど
Zenefone3Maxが不調すぎてDMMの交換を使うかpixel3aに乗り換えるか悩む...