---
title: 個人開発8日目
date: '2019-05-04'
tags: [ '個人開発', 'GW']
path: "/20190504"
---

アプリで画面をスリープする方法がイマイチ？

[c19354837/react-native-system-setting](https://github.com/c19354837/react-native-system-setting)
から`getAppBrightness(0)`で画面光度最低まで落として  
下記の様にと`#000`のModal表示を合わせてとりあえず消えてる感じにした。  

```jsx
  <Modal>
    <StatusBar hidden={blackout} />
    ~~中身~~
  </Modal>
```

