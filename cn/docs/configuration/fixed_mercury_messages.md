---
layout: docs_cn
title: Global Configuration · Docs · KBEngine
tab: docs
docsitem: configuration-fixedmercurymessages
---

kbengine/kbe/res/server/fixed_mercury_messages.xml
===================

由于KBEngine中的网络协议ID都由系统自动生成，如果不是用配套的SDK将很难与服务端对接协议。

因此kbe提供了一种机制允许用户自定义网络协议的ID。

这在某些情况下是比较好用的(例如: 传统协议对接方式都会有一个协议表，客户端匹配协议表中的协议然后解析)