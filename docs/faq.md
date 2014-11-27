---
layout: docs
title: FAQ · Docs · KBEngine
tab: docs
docsitem: faq
---

FAQ
========

VS 2010 - error LNK1123: failure during conversion to COFF: file invalid or corrupt:
-----------------

	* Either disable incremental linking, by going to 
		Project Properties 
		   -> Configuration Properties 
		       -> Linker (General) 
		          -> Enable Incremental Linking -> "No (/INCREMENTAL:NO)"

	* or install VS2010 SP1.
	


	https://social.msdn.microsoft.com/Forums/vstudio/en-US/eb4a7699-0f3c-4701-9790-199787f1b359/vs-2010-error-lnk1123-failure-during-conversion-to-coff-file-invalid-or-corrupt?forum=vcgeneral

	http://stackoverflow.com/questions/10888391/error-link-fatal-error-lnk1123-failure-during-conversion-to-coff-file-inval

	http://msdn.microsoft.com/en-us/library/7dz62kfh.aspx



clientapp.cs(30,94): error CS1729: The type `KBEngine.KBEngineApp* does not contain a constructor that takes `3* arguments
-------------------

	1: Use git to update the KBE plugin(https://github.com/kbengine/kbengine_unity3d_plugins):
		In the kbengine_unity3d_** directory:
		* Git command: git submodule update --init
		* Or use TortoiseGit(menu): TortoiseGit -> Submodule Update:

	2: Or manually update the plugin
		git clone https://github.com/kbengine/kbengine_unity3d_plugins.git
		clone to Assets/plugins/kbengine/kbengine_unity3d_plugins

	3: Build:
		Unity Editor -> File -> Build Settings -> PC, MAC & Linux Standalone.


if_Entity_error_use______git_submodule_update_____kbengine_plugins_______open_this_file_and_I_will_tell_you.cs(9,128): error CS0246: The type or namespace name `Entity* could not be found. Are you missing a using directive or an assembly reference?
----------------------

	1: Use git to update the KBE plugin(https://github.com/kbengine/kbengine_unity3d_plugins):
		In the kbengine_unity3d_** directory:
		* Git command: git submodule update --init
		* Or use TortoiseGit(menu): TortoiseGit -> Submodule Update:

	2: Or manually update the plugin
		git clone https://github.com/kbengine/kbengine_unity3d_plugins.git
		clone to Assets/plugins/kbengine/kbengine_unity3d_plugins

	3: Build:
		Unity Editor -> File -> Build Settings -> PC, MAC & Linux Standalone.


ERROR loginapp [2014-11-04 11:40:07,277] - Bundle::basicSendWithRetries: packet discarded(reason=REASON_GENERAL_NETWORK).

ERROR loginapp [2014-11-04 11:40:08,780] - BundleBroadcast::receive: is failed(please check {firewall rule => broadcastaddr not is LAN ?})!
---------------------

	请检查防火墙是否导致内网UDP广播不能正确接收，可尝试先关闭防火墙重新启动一次服务端，如果关闭防火墙后能够正确运行起来说明就是防火墙问题。如果不是防火墙问题请检查是否存在多块网卡，如果存在多块网卡的情况需要对使用的网卡进行配置。其他任何情况检查网络是否通顺等等。
	参考：http://www.kbengine.org/cn/docs/installation.html


WARN loginapp [2014-11-05 09:22:47,199] - PacketReader::processMessages: invalide msgID=25702, msglen=1, from 127.0.0.1:5631/0/0/0.
ERROR loginapp [2014-11-05 09:22:47,199] - Channel::condemn[0x4aa81d8]: channel(127.0.0.1:5631/0/1/0).
--------------------

	登录时loginapp日志出现类似的错误，这种情况很有可能是服务端和客户端的版本不匹配而造成的，请确保服务端与客户端版本一致。服务端与demo客户端都能够在此下载到源码：https://github.com/kbengine/



kbengine\kbe\src\lib\dependencies\apr\encoding\apr_escape.c(109): error C2065: “test_char_table”: undeclared identifier
--------------------

	你的360杀掉了apr产生一个头文件的exe，你恢复kbe项目关掉360重新编译试试。
	或者你去360中调整忽略。