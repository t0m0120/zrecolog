---
title: ネストしたテキストが親のOpacityを上書き出来ない
date: '2019-01-25'
---

ReactNativeでスタイルを書いていてネストしたテキストが親のOpacityを上書き出来ない

[Opacity in nested components doesn't work as expected · Issue #3183 · facebook/react-native · GitHub](https://github.com/facebook/react-native/issues/3183)

```js
<Text style="text">
  <Text style="link">利用規約</Text>に同意する
</TexT>

```


`opacityプロパティは適用しているビューの全体の不透明度を変更します。`  
どの子コンポーネントも親の不透明度を継承するようなのでcolorのrgbaで指定する必要があるっぽい？

NG
```css
  text: {
    color: '#fff',
    opacity: 0.7,
  },
  link: {
    color: '#fff',
    opacity: 1,
    textDecorationLine: 'underline',
  },
```

GOOD
```css
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  link: {
    color: 'rgba(255, 255, 255, 1)',
    textDecorationLine: 'underline',
  },
```