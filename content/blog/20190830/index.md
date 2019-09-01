---
title: ReactNativeでiOS13動かしてみた。
date: 2019-08-30
tags: ["ReactNative", "iOS","iOS13"]
path: /20190830
---

9月10日あたりにiOS13くるっぽく<br>
[iOS 13 beta, release date and feature list](https://www.techradar.com/news/ios-13-features)<br>

[iOS 13における必須対応について](https://techracho.bpsinc.jp/yoshi-k/2019_08_28/79514)など色々記事出始めてきているので


Xcode beta インストールして 自社のアプリのテストを行ってみた。


[https://developer.apple.com/download/](https://developer.apple.com/download/)から<br>
Xcode 11 beta 7をインストール。<br>
既存のXcodeとは別にインストールされBetaのタグがつくので開発環境が壊れることはない（はず。）

XcodeBetaのシミュレーターはすべてiOS13が入っているのでReactNativeをBuildしてインストールしてみる。

- 基本動作
- 画像投稿などのNativeな機能
- ダークモード無効化

を試してみたが特に問題なく動いていそうなのでiOS13で別途対応必要そうなものは無さそうか？？？

## ダークモードのテスト

info.plistから`User Interface Style`を`Ligth`にして

![info.plist](./infoplist.png)

シミュレーターを再起動するとダークモードの状態でもライトモードで表示されるのが確認できた。


|  変更前  |  変更後  |
| ---- | ---- |
| ![Simulator Screen Shot - iPhone Xʀ - 2019-08-30 at 13 36 04](https://user-images.githubusercontent.com/34805701/63993506-c9bab700-cb2b-11e9-9af3-930124124070.png) | ![Simulator Screen Shot - iPhone Xʀ - 2019-08-30 at 13 37 03](https://user-images.githubusercontent.com/34805701/63993503-c7585d00-cb2b-11e9-94cb-f960b4afec6b.png) |

