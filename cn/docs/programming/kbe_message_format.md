---
layout: docs
title: Communication protocol format · Docs · KBEngine
tab: docs
docsitem: kbe-engine-messages
---

通讯协议格式
====================

客户端想要与KBEngine进行通讯需要与KBEngine使用相同的协议，KBEngine通讯协议分为如下两种类型:

确定长度类型:

		 |-----------------------------------------------------------------|
	Packet = |      Len: 2Bytes            |            Len: N                 |
		 |     (Packet_Head: uint16)   |   (Packet_Body: Binary-stream)    |
		 |-----------------------------------------------------------------|

不固定长度类型:

		 |--------------------------------------------------------------------------------------------|
	Packet = |      Len: 2Bytes            |       Len: 2Bytes         |           Len: N                 |
		 |     (Packet_Head: uint16)   |   (Packet_Length: uint16) |   (Packet_Body: Binary-stream)   |
		 |--------------------------------------------------------------------------------------------|

(注意: 测试协议请关闭数据包加密, 修改[kbengine.xml]或[kbengine_defs.xml]->channelCommon->encrypt_type)


[kbengine_defs.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine.html
