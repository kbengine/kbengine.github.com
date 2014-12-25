---
layout: docs
title: Startup and Shutdown · Docs · KBEngine
tab: docs
docsitem: startup-shutdown
---

Startup(nonsupport)
-------------------

	Windows:
		python %KBE_ROOT%/kbe/tools/server/pycluster/cluster_controller.py start

	Linux:
		python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py start


	(Note: The initial start mysql server will automatically build the table, you may need to wait for some time.)


- - -


Shutdown
-------------------

	Windows:
		python %KBE_ROOT%/kbe/tools/server/pycluster/cluster_controller.py stop

	Linux:
		python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py stop


- - -


Quick Startup and Shutdown
-------------------

	Linux:
		[kbe @gameserver ~]$ cd $KBE_BIN_PATH
		[kbe @gameserver ~]$ sh start.sh
		[kbe @gameserver ~]$ sh kill.sh

	Windows:
		cd KBE_BIN_PATH
		!(win)fixedstart.bat
		!(win)kill.bat


- - -


启动参数的意义:
-------------------

打开!(win)fixedstart.bat可以看到进程启动时附带了一些参数:

	start %KBE_BIN_PATH%/kbmachine.exe	--cid=2129652375332859700 --grouporder=1  --globalorder=1
	start %KBE_BIN_PATH%/messagelog.exe	--cid=1129653375331859700 --grouporder=1 --globalorder=2
	start %KBE_BIN_PATH%/billingsystem.exe	--cid=1129652375332859700 --grouporder=1 --globalorder=3
	start %KBE_BIN_PATH%/dbmgr.exe		--cid=3129652375332859700 --grouporder=1 --globalorder=4
	start %KBE_BIN_PATH%/baseappmgr.exe	--cid=4129652375332859700 --grouporder=1  --globalorder=5
	start %KBE_BIN_PATH%/cellappmgr.exe	--cid=5129652375332859700 --grouporder=1  --globalorder=6
	start %KBE_BIN_PATH%/baseapp.exe	--cid=6129652375332859700 --grouporder=1  --globalorder=7
	start %KBE_BIN_PATH%/baseapp.exe	--cid=6129652375332859701 --grouporder=2  --globalorder=8
	start %KBE_BIN_PATH%/cellapp.exe	--cid=7129652375332859700 --grouporder=1  --globalorder=9
	start %KBE_BIN_PATH%/cellapp.exe	--cid=7129652375332859701 --grouporder=2  --globalorder=10
	start %KBE_BIN_PATH%/loginapp.exe	--cid=8129652375332859700 --grouporder=1  --globalorder=11

	--cid:
		每个进程都有一个唯一ID，唯一ID在合适的使用用于区分他们之间的身份。

	--grouporder:
		多个相同名称的进程能形成一个进程组，这个参数描述了进程启动的先后顺序。
		这个顺序在脚本中也会用到，例如：在第一个启动的baseapp进程上创建某个实体。

	--globalorder:
		全局启动顺序，描述了该进程在该服务组内启动的顺序，这个值也会被引擎genUUID64之类的函数用到。
		这个顺序如果能在多个服务组内唯一那么在合服的时候能够带来一定的便利性。
		例如：游戏服A和游戏服B中的道具在数据库中存储的ID都使用genUUID64生成，那么在合服的时候能够直接向一张表中合并数据。