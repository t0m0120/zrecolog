---
title: ReactNativeで定期購読の編集ページに飛ばす
date: '2019-01-26'
tags: ['ReactNative', 'JavaScript', 'iOS', 'Memo']
path: "/20190126"
---

Subscription編集ページに飛ばすLink

[ios - Link to app manage subscriptions in app store - Stack Overflow](https://stackoverflow.com/questions/15530794/link-to-app-manage-subscriptions-in-app-store)



`itms-apps://apps.apple.com/account/subscriptions`で飛ばす。

```jsx
<Button
  style={[s.upgrade_button, s.current_plan_button]}
  onPress={() =>
    Linking.openURL('itms-apps://apps.apple.com/account/subscriptions')
  }
>
  <Text style={s.current_plan_button_text}>定期購読を管理する</Text>
</Button>
```
