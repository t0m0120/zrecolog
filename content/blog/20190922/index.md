---
title: iOS標準アプリのダークモードを適当にスクリーンショットした
date: 2019-09-20
tags: ["iOS", "DarkMode", "iPhone", "アプリ", "デザイン"]
path: /20190922
---

## iOS13がついにきたので

とりあえず手持ちの開発用iPhone7をiOS13に変えてみた。<br>
ダークモードに対応しているアプリがSlackぐらいしか今のところないっぽい。<br>

またinfo.plistのUISuseｒInterfaceStyleをLightにすることでLight上書きする処理を、AppStoreに投げると怒られてアップ出来ない問題を8月末のチェック時に以下記事に書いたが<br>

[UIUserInterfaceStyleをLightにするとAppStoreにアップロードできない](recolog.tokyo/20190831)<br>

特にinfo.plistに何もしなくてもdarkMode対応してないアプリはそのままLightで表示される模様。
急いでDarkにせずに各社の対応とレビューでダークモードが必須になるぐらいでプロダクトのダークモード対応は良さそうかと。

せっかく即iOS13にしてダークモードが使えるので、ダークモード対応が必要になった際様にダークモードのスクリーンショット雑に撮ったのと色などについてメモる。

## iOS標準アプリでの全体的なスタイルとしては

[AppleDeveloper HumanInteface Guidelines / DarkMode](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/)

背景黒<br>
タイトル系の見出し文字白は共通<br>
文章はグレー

[AppleDeveloper HumanInterface Guidelines / VisualDesign/Color](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/)

決定やボタンの色はHumanInterface Guidelines / VisualDesign/ColorそのままLightからDarkになった状態。

雰囲気を一応下記CSSへ追加

### Blue

<p style='color:rgb(24,156,255)'>rgb(24,156,255)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(24,156,255);color:white'>rgb(24,156,255)</span>

### Green

<p style='color:rgb(48,219,91)'>rgb(48,219,91)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(48,219,91);color:white'>rgb(48,219,91)</span>

### Indigo

<p style='color:rgb(125,122,255)'>rgb(125,122,255)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(125,122,255);color:white'>rgb(125,122,255)</span>

### Orange

<p style='color:rgb(255,179,64)'>rgb(255,179,64)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(255,179,64);color:white'>rgb(255,179,64)</span>

### Pink

<p style='color:rgb(255,100,130)'>rgb(255,100,130)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(255,100,130);color:white'>rgb(255,100,130)</span>

### Purple

<p style='color:rgb(208,143,255)'>rgb(208,143,255)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(208,143,255);color:white'>rgb(208,143,255)</span>

### Red

<p style='color:rgb(255,105,97)'>rgb(255,105,97)</span>

<span style='border-radius:20px;padding:8px 20px;background:rgb(255,105,97);color:white'>rgb(255,105,97)</span>

### Teal
<p style='color:rgb(112,215,255)'>rgb(112,215,255)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(112,215,255);color:white'>rgb(112,215,255)</span>


## Yellow

<p style='color:rgb(255,212,38)'>rgb(255,212,38)</span>　

<span style='border-radius:20px;padding:8px 20px;background:rgb(255,212,38);color:white'>rgb(255,212,38)</span>



## カレンダー
| ![IMG_0848.png](./IMG_0848.png) | ![IMG_0849.png](./IMG_0849.png) |
| --- | --- |
| ![IMG_0850.png](./IMG_0850.png) | ![IMG_0851.png](./IMG_0851.png) |
| ![IMG_0852.png](./IMG_0852.png) | ![IMG_0853.png](./IMG_0853.png) |
| ![IMG_0854.png](./IMG_0854.png) |

## マップ
| ![IMG_0855.png](./IMG_0855.png) | ![IMG_0856.png](./IMG_0856.png) |
| --- | --- |
| ![IMG_0857.png](./IMG_0857.png) |

## メモ
| ![IMG_0858.png](./IMG_0858.png) | ![IMG_0859.png](./IMG_0859.png) |
| --- | --- |
| ![IMG_0860.png](./IMG_0860.png) | ![IMG_0861.png](./IMG_0861.png) |
| ![IMG_0863.png](./IMG_0863.png) |
| ![IMG_0862.png](./IMG_0864.png) | ![IMG_0863.png](./IMG_0865.png) |
| ![IMG_0862.png](./IMG_0866.png) |

## リマインダー
|  |  |
| --- | --- |
| ![IMG_0863.png](./IMG_0867.png) | ![IMG_0862.png](./IMG_0868.png) |


## 株価
|  |  |
| --- | --- |
| ![IMG_0863.png](./IMG_0869.png) | ![IMG_0860.png](./IMG_0870.png) |


## AppleTV
| ![IMG_0861.png](./IMG_0871.png) | ![IMG_0862.png](./IMG_0872.png) |
| --- | ---|
| ![IMG_0863.png](./IMG_0873.png) |


## AppStore

| ![IMG_0862.png](./IMG_0874.png) | ![IMG_0863.png](./IMG_0875.png) |
| --- | ---|
| ![IMG_0862.png](./IMG_0876.png) | ![IMG_0863.png](./IMG_0877.png) |
| ![IMG_0862.png](./IMG_0878.png) |

## ヘルスケア
|  |  |
| --- | ---|
| ![IMG_0863.png](./IMG_0879.png) | ![IMG_0860.png](./IMG_0880.png) |


## ホーム
|  |  |
| --- | ---|
｜![IMG_0861.png](./IMG_0881.png) | ![IMG_0862.png](./IMG_0882.png) |

##　Wallet
|  |  |
| --- | --- |
| ![IMG_0862.png](./IMG_0884.png) |  |

## 写真
| ![IMG_0863.png](./IMG_0885.png) | ![IMG_0862.png](./IMG_0886.png) |
| --- | --- |
| ![IMG_0863.png](./IMG_0887.png) |


## ミュージック
| ![IMG_0862.png](./IMG_0888.png) | ![IMG_0863.png](./IMG_0889.png) |
| --- | --- |
| ![IMG_0860.png](./IMG_0890.png) | ![IMG_0861.png](./IMG_0891.png) |

## 対応が必要になった際には

恐らく自社のイメージカラーでダークモードに合う色を上記の選択などのアクションやボタンの色に使ってダークモード化していく事になりそう。

このブログもそうだが個人的に黒と緑や黒とオレンジの組み合わせが大好きなので対応が迫られた際は楽しみ。