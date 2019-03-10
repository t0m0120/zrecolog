---
title: 定期購読の実装で見たページ
date: '2019-02-23'
tags: [ 'iOS', 'Xcode', 'Deploy', 'AppStoreConnect', 'AppleDeveloper']
path: "/20190223"
---

[自動更新サブスクリプション - App Store - Apple Developer](https://developer.apple.com/jp/app-store/subscriptions/)
[App Store Reviewガイドライン - Apple Developer](https://developer.apple.com/jp/app-store/review/guidelines/#subscriptions)
[Human Interface Guidelines/Subscriptions](https://developer.apple.com/design/human-interface-guidelines/subscriptions/overview/)


ReactNativeのプロダクトAppStoreReview対策をしていくうちに  
最終的にはWebViewにしてA/Bテストとか容易にしたけど  
審査通ったのでWebViewのJSからReactNativeのreact-native-iap叩くのが一番柔軟な課金周りな気がする？