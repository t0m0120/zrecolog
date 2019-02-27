---
title: react-nativeでSchemeを増やす
date: '2019-02-24'
tags: [ 'ReactNative', 'iOS', 'Xcode',]
path: "20190224"
---

ProjectからConfigurationsで  
Duplicate Relase ConfigurationからReleaseBuildを選択する。
![1.png](1.png)


Edit SchemeからコピーしたいSchemeを選びDuplicate
![2.png](2.png)



RunのBuildConfigurationを`Statging`に変える
![4.png](4.png)


編集後はEdit Scheme上でSharedにチェックを入れておく
![3.png](3.png)

Schemeによって変えたい箇所を修正する。
![5.png](5.png)



[thekevinbrown/react-native-schemes-manager](https://github.com/thekevinbrown/react-native-schemes-manager)
をREADME通りに導入する。

```sh
$ yarn add --dev react-native-schemes-manager
```

package.jsonのpostinstallにコピーしたいSchemeを追加しyarnを走らせると自動で設定周りがコピーされていく。
![6.png](6.png)


CircleCIなどでこのコピー処理がエラーを吐くと思うので  
ciでのyarn installは`yarn install --ignore-scripts`でpost-installを無効にする。

