---
title: react-native-rate導入に関して
date: '2019-05-12'
tags: [ 'ReactNative', 'iOS', 'NativeModule']
path: "/20190511"
---

プロダクトのレビュー施策に[KjellConnelly/react-native-rate](https://github.com/KjellConnelly/react-native-rate)を導入してみた。


## 導入手順

導入自体はyarn install -> linkしたら終わる
このjsしか気にしなくていい軽い~~objcとjavaはしらん~~感じ本当に開発体験としていいよなーと常々思う

READMEのまんま

```bash
$ yarn add react-native-rate
$ react-native link
```

```jsx
    <Button title="Rate App" onPress={()=>{
        let options = {
            AppleAppID:"2193813192",
            GooglePackageName:"com.mywebsite.myapp",
            AmazonPackageName:"com.mywebsite.myapp",
            OtherAndroidURL:"http://www.randomappstore.com/app/47172391",
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp:false,
            openAppStoreIfInAppFails:true,
            fallbackPlatformURL:"http://www.mywebsite.com/myapp.html",
        }
        Rate.rate(options, success=>{
            if (success) {
                // this technically only tells us if the user successfully went to the Review Page.
                // Whether they actually did anything, we do not know.
                this.setState({rated:true})
            }
        })
    } />
```


Apple/Google/Amazonに対応しておりサンプルはボタンを押したら表示されるが、
実際は何かが成功したReduxのActionのXX回目等にRate.rate()を叩いて表示させて様子を見ている。


## iOSの疑問

iOSでレビューリクエストする際に

[requestReview() - SKStoreReviewController | Apple Developer Documentation](https://developer.apple.com/documentation/storekit/skstorereviewcontroller/2851536-requestreview)
を叩く事になるが、

開発版では必ず表示されて
TestFlightでは表示されない記述があり
本番は`this method may or may not present an alert`とあって
表示する場合としない場合があるのでボタン押してレビューさせるみたいな動作は避けましょう的な記述がある。

更に[human-interface-guidelines/ratings-and-reviews](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/ratings-and-reviews/)には
`The system automatically limits the display of the prompt to three occurrences per app within a 365-day period.`
365日に３回までしか表示しないと書かれていて

実際プロダクトで１回表示する際にランダムなのか等思いながら実装して自分の実機で３回使い切ってみたが
叩かれる度にrequestReview()は確実に呼ばれるっぽい？？のでとりあえず自分の呼びたい成功回数などに突っ込んでおけば大丈夫そう？

表示されるかされないは３回制限のことを言っているっぽく？ボタン等で表示みたいな動作は避けろというニュアンスっぽい？
知ってる方いたらリプください...

