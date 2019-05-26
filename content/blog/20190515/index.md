---
title: huskyのprecommitが動作しない対処法
date: 2019-05-15
tags: ["npm", "husky", "precommit", "git", ""]
path: /20190515
---

新しく入った人でhuskyのpreccomitでESLintやPrettierが動いてない人が出たので対処方メモ
なぜprecommitに入らなかったのかは不明...


1. `$git config —list` をターミナルで叩いてhooksPathがあるかどうか
あればhooksPathを消す  
[Hooks not working #326](https://github.com/typicode/husky/issues/326#issuecomment-481260801)

2. projectの`root_dir/.git/hooks/pre-commit`ファイルがあるかどうか

```sh
$ yarn
や
$ node node_modules/husky/bin/install.js
した際に
$ husky
$ setting up Git hooks
$ skippingpre-commit hook (existing user hook)
$ done
```

あれば`husky …`みたいな記載があるか  
記述が無くほぼ空のファイルだけがあれば`$ rm -rf ./git/hooks/pre-commit`でhooks内を全部削除してから

```sh
$ yarn
か
$ node node_modules/husky/bin/install.js
```
でinstallし直してskipping ~~の記述がなくなる事を確認して  
適当にコミットして確認してみる。