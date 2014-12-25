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


Starting the process parameters of mean:
-------------------

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
		Each process has a unique ID, used to distinguish between their identity.

	--grouporder:
		The same name process form a group, this parameter describes process startup order.
		This order will be used in the script, For example: create an entity in the first start the baseapp process.

	--globalorder:
		Global startup order, describes the process starts in the servers group within the sequence, 
		this value will be a function of engine such as genUUID64 use.

		This order if we can maintain the uniqueness in the multi service group, 
		then in the composite service can bring convenience for certain.
		For example: gameserver-A and gameserver-B items in the database storage of ID are generated using genUUID64, 
		so when the composite service can merge the data directly to a table.

	(Note: if there is no incidental parameters when starting, the process will generate a random CID, grouporder and globalorder can be obtained from the kbmachine.)