---
title: UIUserInterfaceStyleをLightにするとAppStoreにアップロードできない
date: 2019-08-31
tags: ["iOS13", "AppStore", "iOS"]
path: /20190831
---

# !この記事は古い記事です。<br>

詳細は以下記事参考
[ReactNativeでiOS13のDarkModeを無効化する。](https://recolog.tokyo/20191104)

前回の記事でinfo.plistを

```
	<key>UIUserInterfaceStyle</key>
	<string>Light</string>
```

に変更してDarkModeをLightModeに強制的に変えて喜んでいたが
AppStoreにReleaseBuildを投げると

```
Error Messages:
    ERROR ITMS-90190: "Invalid Info.plist Key.
    The key 'UIUserInterfaceStyle' in the hogehoge.plist file is not valid."
```

と怒られてアップロード出来なかった。

appleのForumにも書かれており８月前半までは出来ていたようだが<br>
急に怒られだしたっぽい?

引き続きプロダクトでは様子見でとりあえずDarkModeになってしまうままリリースするが<br>
これDarkMode対応が必須になるのが近いってことですかね？？？

[https://forums.developer.apple.com/thread/121052](https://forums.developer.apple.com/thread/121052)