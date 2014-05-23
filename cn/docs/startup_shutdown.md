---
layout: docs_cn
title: Startup and Shutdown · Docs · KBEngine
tab: docs
docsitem: startup-shutdown
---

Startup
==============

	python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py start
	(Note: The initial start mysql server will automatically build the table, you may need to wait for some time.)

Shutdown
-------------------

	python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py stop


Quick Startup and Shutdown
-------------------

	[Linux]:
		[kbe @gameserver ~]$ cd $KBE_HYBRID_PATH
		[kbe @gameserver ~]$ sh start.sh
		[kbe @gameserver ~]$ sh kill.sh

	[Windows]:
		cd KBE_HYBRID_PATH
		!(win)fixedstart.bat
		!(win)kill.bat