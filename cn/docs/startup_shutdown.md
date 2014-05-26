---
layout: docs_cn
title: Startup and Shutdown · Docs · KBEngine
tab: docs
docsitem: startup-shutdown
---

启动服务端
==============

	python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py start
	(注意: 初次启动kbe时，mysql需要初始化一些表结构， 可能会花上几分钟请耐心等待完成。)

关闭服务端
-------------------

	python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py stop


快速启动与关闭服务端
-------------------

	[Linux]:
		[kbe @gameserver ~]$ cd $KBE_HYBRID_PATH
		[kbe @gameserver ~]$ sh start.sh
		[kbe @gameserver ~]$ sh kill.sh

	[Windows]:
		cd KBE_HYBRID_PATH
		!(win)fixedstart.bat
		!(win)kill.bat