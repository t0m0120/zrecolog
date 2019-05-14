---
title: コードジェネレーターhygenでSFC作りを楽する
date: '2019-05-13'
tags: [ 'React', 'CLI', 'hygen', 'npm']
path: "/20190513"
---

iOS/Andorid対応する際にiOSをメインで作っていたので
それぞれのOS用のComponentに切り出す際に毎回`components/XXX/index.os.tsx`と`index.d.ts`を作成するのがめんどくさかったので
[jondot/hygen](https://github.com/jondot/hygen)を導入してみた。

## 導入手順

[hygen.io/quick-start](http://www.hygen.io/quick-start)

```bash
$ yarn add hygen -D
```

```bash
$ yarn hygen init self
```

でhygenが用意したhelloworldのテンプレートがroot/_templateに生成される。
生成された例とDoc参考に作れば大体いけるはず


`_template/generator/名前/`配下に
[hygen/templates](http://www.hygen.io/templates)を参考に`.ejs.t`でtemplateを作成し
`yarn hygen generator 名前`するとfrontmatterで指定した`to:`へフォルダ配下のファイルを作成してくれる。

今回は`.ios.tsx`を作成した後にfrontmatterの`sh:`でcpコマンドを叩き`.android.tsx`を作成している。
今回の例だとあまり恩恵無さそうだがReduxのreducer/actionなんかをtemplate化しておいたりして

```bash
$yarn hygen actiona_name
```
なんかでactions/name.js | reducer/name.jsを作るようにするしたりとかすると恩恵でかいと思う。


```
---
to: js/components/<%= name %>/index.ios.tsx
sh: cp js/components/<%= name %>/index.ios.tsx js/components/<%= name %>/index.android.tsx
---
import React from 'react';
import styled from 'styled-components/native';

export default function <%= name %>({
  props,
}: {
  props: any
}) {
  return (
    <TemplateText>SFC TEXT COMPONENT</TemplateText>
  );
}

const TemplateText = styled.Text`
  color: red;
`;
```
