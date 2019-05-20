---
title: androidでDrawerが全画面でタッチ反応してしまう
date: '2019-05-14'
tags: [ 'ReactNative', 'ReactNative', 'ReactNavigation', 'npm']
path: "/20190514"
---

Android対応の際にReactNavigationの[createDrawerNavigator](https://reactnavigation.org/docs/en/drawer-navigator.html)のDrawerの開閉が画面端だけでなく全画面でswipe反応してしまっていた。

## 対処法

[createDrawerNavigator](https://reactnavigation.org/docs/en/drawer-navigator.html)のプロパティにあるedgeWidthを調整すれば行けるかと思ったが
Androidで全く変化なかったのでissue等を検索した所

drawerのissueに  [drawer/issues/49#issuecomment](https://github.com/react-navigation/drawer/issues/49#issuecomment-477935582)

[react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler)のバグでedgeWidthに渡した値が逆に扱われてしまっていたようなのでreact-native-gesture-handlerをverupするかマイナス指定で解決した。

Android対応でAnimationやらStyleでこの手のissue見て解決が多い。..