---
title: 個人開発5日目
date: '2019-05-02'
tags: [ '個人開発', 'GW']
path: "/20190502"
---

テトリスとシャニマスしてたら昼間終わってた。

## 開発

- Android一旦捨ててiOSに注力しようと思った
- 裏返したらみたいな処理どうやってやろうか悩み中

```js
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main': 'Login')
    });
  }
```
とかでNavigationさせてそれっぽくなるのが早くて良い。

間に合うかギリギリな気がしてきたのと書くネタが尽きてきている。