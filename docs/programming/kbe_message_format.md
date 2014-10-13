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


Examples 1:
-----------------

	void client_funcXX(uint8 p1, int64 p2)
	     ...
	     ...
	
	void server_funcXXX()
		packet.newMessage(ClientInterface::client_funcXX);
		packet.writeUint8(1);
		packet.writeInt64(1);

		 |--------------------------------------------------------------------------------|
	Packet = |      Len: 2Bytes                           |            Len: 1, 8              |
		 |     (Packet_Head(client_funcXX): uint16)   |   (Packet_Body: p1, p2)           |
		 |--------------------------------------------------------------------------------|


Examples 2:
-----------------

	void client_funcXX(uint8 p1, int64 p2, string p3)
	     ...
	     ...
	
	void server_funcXXX()
		packet.newMessage(ClientInterface::client_funcXX);
		packet.writeUint8(1);
		packet.writeInt64(1);
		packet.writeString("123456");

		 |--------------------------------------------------------------------------------------------|
	Packet = |      Len: 2Bytes            |       Len: 2Bytes         |           Len: 1, 8, 7           |
		 |     (Packet_Head: uint16)   |   (Packet_Length: uint16) |   (Packet_Body: p1, p2, p3)      |
		 |--------------------------------------------------------------------------------------------|



[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html