---
layout: docs
title: FAQ · Docs · KBEngine
tab: docs
docsitem: faq
---

FAQ
========

-----------------------------------------------------

[BUILD]:
========


◇ VS 2010 - error LNK1123: failure during conversion to COFF: file invalid or corrupt:
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


◇ kbengine\kbe\src\lib\dependencies\apr\encoding\apr_escape.c(109): error C2065: “test_char_table”: undeclared identifier
--------------------

	May be the anti-virus software to kill kbengine\kbe\src\lib\dependencies\apr\LibD\gen_test_char.exe (APR for the generation of header files).
	Please make sure that the safety, adjustment of antivirus software, ignore the check gen_test_char.exe.

-----------------------------------------------------


-----------------------------------------------------

◇ clientapp.cs(30,94): error CS1729: The type KBEngine.KBEngineApp* does not contain a constructor that takes 3* arguments
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

-----------------------------------------------------

◇ if_Entity_error_use______git_submodule_update_____kbengine_plugins_______open_this_file_and_I_will_tell_you.cs(9,128): error CS0246: The type or namespace name Entity* could not be found. Are you missing a using directive or an assembly reference?
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


-----------------------------------------------------


-----------------------------------------------------

[RUNTIME]:
========


◇ ERROR loginapp [2014-11-04 11:40:08,780] - BundleBroadcast::receive: is failed(please check {firewall rule => broadcastaddr not is LAN ?})!
---------------------
	* Turn off the firewall.
	* Firewall settings, to ensure that the internal network can receive and send UDP packets.
	* If multiple card(NIC) environment, you need to set up KBEngine.
		see also：http://www.kbengine.org/docs/installation.html


-----------------------------------------------------


◇ WARN loginapp [2014-11-05 09:22:47,199] - PacketReader::processMessages: invalide msgID=25702, msglen=1, from 127.0.0.1:5631/0/0/0.
--------------------

ERROR loginapp [2014-11-05 09:22:47,199] - Channel::condemn[0x4aa81d8]: channel(127.0.0.1:5631/0/1/0).
--------------------

	This error occurred during logon，Very has the possibility is the server and the client version mismatch，Please ensure consistent version. 
	The server and the demo source code: https://github.com/kbengine/


-----------------------------------------------------





