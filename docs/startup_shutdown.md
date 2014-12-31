---
layout: docs
title: Startup and Shutdown · Docs · KBEngine
tab: docs
docsitem: startup-shutdown
---


The server project assets Library
-------------------

	Developers to create a new game project, need a folder to store the project on the "script code", "resource file" and etc, 
	this folder is the game project assets library.

	Engine root directory has a default "assets" Asset Library folder, the asset library is a minimum of KBE projects, 
	folders and files contained in it are essential.

	If the user does not set any environment variables, the engine will automatically linked to the "assets" startup.

	(you can also in the root directory of the engine to create a new project assets, copy "assets" and name it "your_assets")


Startup(nonsupport)
-------------------

	Windows:
		%KBE_ROOT%/<your assets>/safe_start.bat

	Linux:
		$KBE_ROOT/<your assets>/safe_start.sh


	(Note: The initial start mysql server will automatically build the table, you may need to wait for some time.)


- - -


Shutdown
-------------------

	Windows:
		%KBE_ROOT%/<your assets>/safe_kill.bat

	Linux:
		$KBE_ROOT/<your assets>/safe_kill.sh


- - -


Quick Startup and Shutdown
-------------------

	Linux:
		[kbe @gameserver ~]$ cd $KBE_ROOT/<your assets>
		[kbe @gameserver ~]$ sh start_server_fixed.sh
		[kbe @gameserver ~]$ sh kill_server.sh

	Windows:
		cd %KBE_ROOT%/<your assets>
		start_server_fixed.bat
		kill_server.bat


- - -


Check the startup status(KBEngine > v0.2.15)
-------------------

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/startup_status.png">

	If successful will find log "Components::process(): Found all the components!".
	Otherwise, please search the "ERROR" keyword in logs, according to the error description to try to solve.

	FAQ: http://www.kbengine.org/docs/faq.html
	Get runtime logs: http://www.kbengine.org/docs/documentations/getlogs.html


- - -


Starting the process parameters of mean:
-------------------

	start %KBE_BIN_PATH%/machine.exe	--cid=2129652375332859700 --grouporder=1  --globalorder=1
	start %KBE_BIN_PATH%/logger.exe		--cid=1129653375331859700 --grouporder=1 --globalorder=2
	start %KBE_BIN_PATH%/interfaces.exe	--cid=1129652375332859700 --grouporder=1 --globalorder=3
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

	(Note: if there is no incidental parameters when starting, the process will generate a random CID, grouporder and globalorder can be obtained from the machine.)