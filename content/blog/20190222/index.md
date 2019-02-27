---
title: XCodeでアプリをデプロイする手順(1)
date: '2019-02-22'
tags: [ 'iOS', 'Xcode', 'Deploy', 'AppStoreConnect', 'AppleDeveloper']
path: "/20190222"
---

## 手順

作業しながらの殴り書き。  
Archive実行するまで。  
AppIDはアプリを実機ビルドする際に作っている物とする。

AppleDeveloperから  
`Certificates, Identifiers & Profiles`の＋ボタンを押す
![1.png](1.png)

証明書のタイプが聞かれるので`App Store and Ad Hoc`を選択
![2.png](2.png)

作成されるので`ios_distribution.cer`をダウンロード
![3.png](3.png)

`IosProviningProfiles`へ飛び＋ボタンを押す
![5.png](5.png)

ProvisioningProfileのタイプを聞かれるのでAppStoreを選択
![6.png](6.png)

使用するAppIDを選択する
![7.png](7.png)

作成されるので`AppName.mobileprovision`ダウンロードする。

これで`ios_distribution.cer`と`AppName.mobileprovision`が手に入るはず。

### Xcode

ProvisoningFileを変更したものに変更する  
ここでうまくいかない場合は  
- 個人開発の証明書を消す
- 入れた証明書が期限切れになっていないかなっていたら消して入れ直す。
- 自分の証明書にiPhone Distributionが入っていないか？

とかした。


![9.png](9.png)  

ビルド先を`Generic iOS Device`に変更してから
![10.png](10.png)
Archiveする。
![11.png](11.png)

