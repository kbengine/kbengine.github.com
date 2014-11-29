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
		 |     (Message-ID: uint16)    |   (Message-Body: Binary-stream)   |
		 |-----------------------------------------------------------------|

Variable-length types:

		 |--------------------------------------------------------------------------------------------|
	Packet = |      Len: 2Bytes            |       Len: 2Bytes          |           Len: N                |
		 |     (Message-ID: uint16)    |   (Message-Length: uint16) |   (Message-Body: Binary-stream) |
		 |--------------------------------------------------------------------------------------------|

(Note: If the message length of more than 65534, The Message-Length is fixed fill to 65535, Protocol layer in Message-Length segment after the extra 4 bytes, To describe the larger data)
(Note: The test protocol Turn off packet-encryption, modify[kbengine.xml]or[kbengine_defs.xml]->channelCommon->encrypt_type)



-------------------------------------------------------------------


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
	Packet = |      Len: 2Bytes                                |            Len: 1, 8         |
		 |     (Message-ID(client_funcXX): uint16)         |       (Message-Body: p1, p2) |
		 |--------------------------------------------------------------------------------|



-------------------------------------------------------------------


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
	Packet = |      Len: 2Bytes            |       Len: 2Bytes          |           Len: 1, 8, 7          |
		 |     (Message-ID: uint16)    |   (Message-Length: uint16) |   (Message-Body: p1, p2, p3)    |
		 |--------------------------------------------------------------------------------------------|



-------------------------------------------------------------------


[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html