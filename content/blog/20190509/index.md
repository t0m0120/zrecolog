---
title: react-native-sentryがAndroidのremotedebugで落ちる
date: '2019-05-09'
tags: [ 'ReactNative', 'Android']
path: "/20190509"
---

Sentryを入れたままAndroidでremote_debugすると落ちる

## 解決方法

[Couldn't find key stacktrace in dynamic #438](https://github.com/getsentry/react-native-sentry/issues/438#issuecomment-414977799)

AndroidがDebugBuildのときにsentryを起動しない様に変更して対応
