---
title: ReactNativeを0.57.8から0.59.10に上げた感じ
date: 2019-07-23
tags: ['ReactNative', 'iOS', 'Android']
path: /20190723
---

今回はAndroidの64bit対応が2019年の8月1日までに必須だったので  
Android版をリリースして落ち着いたタイミングでアップデート作業してみた。  
[react-native-community/rn-diff-purge](https://github.com/react-native-community/rn-diff-purge)を見ながら0.57.8から0.59.10に上げた


## バージョンアップで修正が必要になった点

react-native-svgが古いとsvg使ってる部分で怒られる  
`TypeError: TypeError: method.bind is not a function`
https://github.com/JesperLekland/react-native-svg-charts/issues/303

```json
"react-native-svg": "^6.3.1",
```
を
```json
"react-native-svg": "^9.3.1",
```
へ上げて解決

## 恩恵
- Androidの64bit対応
- Androidで文字入力する際に変換の薄青マーカーがチラつくのがなくなった


起動自体はiOS/Android共に1発で通ってreact-native-svgで落ちた感じなので今回のアップデート作業は楽で良かった。