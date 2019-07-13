---
title: Slackに通知して便利だなーって思ったやつ
date: 2019-07-02
tags: ["App", "Slack", "改善"]
path: /20190702
---

## AppStoreConnectからのリリースや審査待ちなどのメール通知
GAS->Mail監視->Slack通知

## アプリのレビュー通知
AppFollow
設定画面からWebhook突っ込むだけ


## リリースビルドの成功失敗通知
Bitrise
RELEASE IOSのWorkflowの失敗だけ通知している。
Workflowの最後にWebHookで設定してます。
通常のビルドで通知するとうるさそうなのでやってない。

## Sentry
うるさそうなので止めた。
リリース後の警戒監視と毎日の監視で十分そう。
クリティカルなやらかしがあった場合はクラッシュバウンダリーで
Intercomチャットが開くのでCSで気づくほうが早そう
