---
title: NativeBaseのButtonのDisable状態に変な影がつく
date: '2019-05-07'
tags: [ 'ReactNative', 'Android', 'NativeBase']
path: "/20190507"
---

## ボタンのdisabled状態で変な影がつく
disabledの際のスタイルに
```
  elevation: 0
```
を追加する。

参考:[GeekyAnts/NativeBase#1141 (comment)](https://github.com/GeekyAnts/NativeBase/issues/1141#issuecomment-425016787)
[react-native/view-style-props(elevation)](https://facebook.github.io/react-native/docs/view-style-props#elevation)


Webの時から~~アンチ~~UIComponent好きじゃなかったけど
NativeBase正直使いにくいなと思うことが多い
- styled-componentsにしていく際にNativeBaseが残っているとstyleの上書き方法でいくしかない
- 自分達で作ったcomponentの方がAndroidでスタイル維持している場合がある
- 別に一緒でよく無い？ってComponentがOSによって微妙にスタイル違ったり
- XCUITestのTestIDの取得阻害したりTouchableFeedbackのせいっぽいが...

仕事のプロジェクトでも変更多そうかつスタイルこだわってるとこからは消してしまいたい...
設定画面はiOS公式感とAndroid公式感が出ていいなーとかは思うので
設定画面とかの重要度が低くて適当でいいとこに使っていく感じですかね?