---
layout: docs
title: Communication protocol format · Docs · KBEngine
tab: docs
docsitem: kbe-engine-messages
---

Communication protocol format
====================

Client wants to communicate with KBEngine need KBEngine use the same protocol, KBEngine communication protocol into the following two types:

Fixed-length types:

		 |-----------------------------------------------------------------|
	Packet = |      Len: 2Bytes            |            Len: N                 |
		 |     (Packet_Head: uint16)   |   (Packet_Body: Binary-stream)    |
		 |-----------------------------------------------------------------|

Variable-length types:

		 |--------------------------------------------------------------------------------------------|
	Packet = |      Len: 2Bytes            |       Len: 2Bytes         |           Len: N                 |
		 |     (Packet_Head: uint16)   |   (Packet_Length: uint16) |   (Packet_Body: Binary-stream)   |
		 |--------------------------------------------------------------------------------------------|

(Note: The test protocol Turn off packet-encryption, modify[kbengine.xml]or[kbengine_defs.xml]->channelCommon->encrypt_type)


[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html