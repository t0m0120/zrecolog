---
title: 初めてOSSに出したPRがmergeされた
date: '2019-05-11'
tags: [ 'ReactNative', 'Android']
path: "/20190511"
---

SocialDogのAndroid対応で
iOSは[datepickerios](https://facebook.github.io/react-native/docs/datepickerios)を使っていたが
Androidどうすっかなーと思ったときにiosはそのままでAndroidはiospickerに似せたpickerを表示するライブラリがあったので導入した。
![henninghall/react-native-date-picker](https://github.com/henninghall/react-native-date-picker)

モーダルとかに直接埋め込みたかったのでメジャーな[xgfe/react-native-datepicker](https://github.com/xgfe/react-native-datepicker)は使えなかった。
(押すとモーダルが開くタイプのため

ただ日付のpickerを使おうとした際に下記の様に`曜日月日`で順番が海外仕様のままだったので

![datepicker_image](https://user-images.githubusercontent.com/34805701/57358606-c54f4480-71b0-11e9-9842-e23786b394eb.png)

日本語の際には`月日曜日`になるように変更したPRを出して無事マージされていた
![new_datepicker_image](https://user-images.githubusercontent.com/34805701/57358691-f16ac580-71b0-11e9-90d3-b55ffedb6913.png)
