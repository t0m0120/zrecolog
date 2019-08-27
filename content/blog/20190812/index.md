---
title: ReactNativeで相対パスと戦う
date: 2019-08-12
tags: ["ReactNative", "npm", "webpack"]
path: /20190812
---

そういえば・・・
`../../../../../utility`みたいな相対パスがだるい。のでpath.resolveか何かで楽したい。

react-nativeだとbabelかなーと思っていたが

package.jsonをsrcにおいてmodule扱いにするの初めて知った

[Resolve src dir for imports in React Native](https://stackoverflow.com/questions/41610178/resolve-src-dir-for-imports-in-)


Webだとpath.resolveでやってたけど

ailiasのほうがもしかしたら良いかも...?

https://kitak.hatenablog.jp/entry/2017/09/04/192010

