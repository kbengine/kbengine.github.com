---
layout: docs_cn
title: FAQ · Docs · KBEngine
tab: docs
docsitem: faq
---

FAQ
========

-----------------------------------------------------

[编译相关]:
========


◇ VS 2010 - error LNK1123: failure during conversion to COFF: file invalid or corrupt:
-----------------

	请安装vs2010 SP1补丁。
	


	https://social.msdn.microsoft.com/Forums/vstudio/en-US/eb4a7699-0f3c-4701-9790-199787f1b359/vs-2010-error-lnk1123-failure-during-conversion-to-coff-file-invalid-or-corrupt?forum=vcgeneral

	http://stackoverflow.com/questions/10888391/error-link-fatal-error-lnk1123-failure-during-conversion-to-coff-file-inval

	http://msdn.microsoft.com/en-us/library/7dz62kfh.aspx


-----------------------------------------------------



◇ kbengine\kbe\src\lib\dependencies\apr\encoding\apr_escape.c(109): error C2065: “test_char_table”: undeclared identifier
--------------------

	* 通常是360等杀毒软件杀掉了apr用于产生头文件的exe(kbengine\kbe\src\lib\dependencies\apr\LibD\gen_test_char.exe)，请恢复KBE项目文件并关掉360重新编译试试。
	* 或者去360中调整策略忽略检查这个exe。


-----------------------------------------------------



◇ clientapp.cs(30,94): error CS1729: The type KBEngine.KBEngineApp* does not contain a constructor that takes 3* arguments
-------------------

	* 更新kbengine插件库(https://github.com/kbengine/kbengine_unity3d_plugins):
		* 使用git命令行，进入到kbengine_unity3d_warring目录执行：
			git submodule update --init

		* 或者使用 TortoiseGit(选择菜单): TortoiseGit -> Submodule Update:

	* 也可以手动更新kbengine插件
		git clone https://github.com/kbengine/kbengine_unity3d_plugins.git
		插件源码请放置在: Assets/plugins/kbengine/kbengine_unity3d_plugins


-----------------------------------------------------

◇ if_Entity_error_use______git_submodule_update_____kbengine_plugins_______open_this_file_and_I_will_tell_you.cs(9,128): error CS0246: The type or namespace name Entity* could not be found. Are you missing a using directive or an assembly reference?
----------------------

	* 更新kbengine插件库(https://github.com/kbengine/kbengine_unity3d_plugins):
		* 使用git命令行，进入到kbengine_unity3d_warring目录执行：
			git submodule update --init

		* 或者使用 TortoiseGit(选择菜单): TortoiseGit -> Submodule Update:

	* 也可以手动更新kbengine插件
		git clone https://github.com/kbengine/kbengine_unity3d_plugins.git
		插件源码请放置在: Assets/plugins/kbengine/kbengine_unity3d_plugins


-----------------------------------------------------


-----------------------------------------------------

[运行时相关]:
========


◇ ERROR loginapp [2014-11-04 11:40:08,780] - BundleBroadcast::receive: is failed(please check {firewall rule => broadcastaddr not is LAN ?})!
---------------------

	请检查防火墙是否导致内网UDP广播不能正确接收，可尝试先关闭防火墙重新启动一次服务端，如果关闭防火墙后能够正确运行起来说明就是防火墙问题。
	如果不是防火墙问题请检查是否存在多块网卡，如果存在多块网卡的情况需要对使用的网卡进行配置。其他任何情况检查网络是否通顺等等。
	参考：https://kbengine.github.io//cn/docs/installation.html


-----------------------------------------------------


◇ WARN loginapp [2014-11-05 09:22:47,199] - PacketReader::processMessages: invalide msgID=25702, msglen=1, from 127.0.0.1:5631/0/0/0.
--------------------

ERROR loginapp [2014-11-05 09:22:47,199] - Channel::condemn[0x4aa81d8]: channel(127.0.0.1:5631/0/1/0).
--------------------

	登录时loginapp日志出现类似的错误，这种情况很有可能是服务端和客户端的版本不匹配而造成的，请确保服务端与客户端版本一致。
	服务端与demo客户端都能够在此下载到源码：https://github.com/kbengine/





-----------------------------------------------------


-----------------------------------------------------

[其他]:
========

◇ KBEngine使用什么网络协议？
---------------------

	集群组建使用UDP协议，其他使用TCP协议。



-----------------------------------------------------

◇ KBEngine使用什么网络模型？
---------------------

	由于正式运营环境在Linux下，所以网络模型选择了epoll, 生产环境在Windows比较方便所以KBEngine也支持了Windows系统，但是网络模型只是简单的select。



-----------------------------------------------------

◇ KBEngine同时在线的承载上限？
---------------------

	经常被问到承载上限，KBEngine底层架构被设计为多进程分布式动态负载均衡方案，理论上只需要不断扩展硬件就能够不断增加承载上限，单台机器的承载上限取决于游戏逻辑本身的复杂度。



-----------------------------------------------------
