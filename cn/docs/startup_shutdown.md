---
layout: docs_cn
title: Startup and Shutdown · Docs · KBEngine
tab: docs
docsitem: startup-shutdown
---

服务端项目资产库
-------------------

	开发者每创建一个新的游戏项目都需要一个文件夹来存放关于该项目的“脚本代码”、“资源文件”等等，这个文件夹称为服务端游戏项目资产库。
	引擎根目录有一个默认的"assets"资产库文件夹，该资产库是一个最小的KBE项目，其中包含的文件夹与文件都是必不可少的。
	如果用户没有设置任何环境变量，引擎会自动绑定到"assets"资产库启动。

	(你也可以在引擎根目录创建一个新的项目资产库，拷贝"assets"并命名为"your_assets")
	(如果想运行KBE的demos，需要下载demos的服务端资产库（https://github.com/kbengine/kbengine_demos_assets），详见项目说明)

启动服务端(暂不支持)
-------------------

	Windows:
		%KBE_ROOT%/<服务端项目资产库>/safe_start.bat

	Linux:
		$KBE_ROOT/<服务端项目资产库>/safe_start.sh

	(注意: 初次启动KBEngine时，mysql需要初始化一些表结构，可能会花上几分钟请耐心等待完成。)


- - -



关闭服务端
-------------------

	Windows:
		%KBE_ROOT%/<服务端项目资产库>/safe_kill.bat

	Linux:
		$KBE_ROOT/<服务端项目资产库>/safe_kill.sh


- - -


快速启动与关闭服务端
-------------------

	Linux:
		[kbe @gameserver ~]$ cd $KBE_ROOT/<服务端项目资产库>
		[kbe @gameserver ~]$ sh start_server.sh
		[kbe @gameserver ~]$ sh kill_server.sh

	Windows:
		cd %KBE_ROOT%/<服务端项目资产库>
		start_server.bat
		kill_server.bat


- - -


检查启动状态(KBEngine > v0.2.15)
-------------------

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/startup_status.png">

	如果启动成功将会在日志中找到"Components::process(): Found all the components!"。
	任何其他情况请在日志中搜索"ERROR"关键字，根据错误描述尝试解决。

	FAQ: http://www.kbengine.org/cn/docs/faq.html
	获得运行时日志: http://www.kbengine.org/cn/docs/documentations/getlogs.html


- - - 



启动参数的意义:
-------------------

打开<你的资产库>/start_server.bat可以看到进程启动时附带了一些参数:

	start %KBE_BIN_PATH%/machine.exe	--cid=2129652375332859700 --gus=1
	start %KBE_BIN_PATH%/logger.exe		--cid=1129653375331859700 --gus=2
	start %KBE_BIN_PATH%/interfaces.exe	--cid=1129652375332859700 --gus=3
	start %KBE_BIN_PATH%/dbmgr.exe		--cid=3129652375332859700 --gus=4
	start %KBE_BIN_PATH%/baseappmgr.exe	--cid=4129652375332859700 --gus=5
	start %KBE_BIN_PATH%/cellappmgr.exe	--cid=5129652375332859700 --gus=6
	start %KBE_BIN_PATH%/baseapp.exe	--cid=6129652375332859700 --gus=7
	start %KBE_BIN_PATH%/baseapp.exe	--cid=6129652375332859701 --gus=8
	start %KBE_BIN_PATH%/cellapp.exe	--cid=7129652375332859700 --gus=9
	start %KBE_BIN_PATH%/cellapp.exe	--cid=7129652375332859701 --gus=10
	start %KBE_BIN_PATH%/loginapp.exe	--cid=8129652375332859700 --gus=11

	--cid:(必须设置)
		类型为uint64, 全名component id, 每个进程都有一个唯一ID，唯一ID在合适的时候用于区分他们之间的身份。

	--gus:(可选设置)
		类型为uint16, 全名genUUID64 sections，这个值会被引擎KBEngine.genUUID64函数用到，设置为不同的值genUUID64将在
		不同的区间产生唯一uuid。

		这个值如果能在多个服务组进程之间保持唯一性，那么在合服的时候能够带来一定的便利性。

		例如：游戏服A和游戏服B中的物品在数据库中存储的ID都使用genUUID64生成，那么在合服的时候能够直接向一张表中合并数据。
		(注意：如果gus超过65535或者小于等于0，genUUID64将只能保证当前进程唯一)
