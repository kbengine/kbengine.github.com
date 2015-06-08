---
layout: docs_cn
title: Stress Test · Docs · KBEngine
tab: docs
docsitem: documentation-stresstest
---

压力测试
====================

使用虚拟的客户端，并使用相同的游戏逻辑，让大量的机器人模拟玩家登陆服务器进行游戏，
我们可以观察到在服务器运行状况，使用调试来发现瓶颈。


手动启动机器人
--------------------------------------

	[kbe@gameserver ~]$ ./bots &

或者使用脚本启动:
--------------------------------------

	kbe/bin/server/!(win)start_bots.bat
	kbe/bin/server/bots_start.sh



配置机器人程序
--------------------------------------

参考: [kbengine_defs.xml]->`bots`





------------------------------------------------------------------------------------------------------------


机器人编程
====================

参考: assets/scripts/[bots]脚本源代码（https://github.com/kbengine/kbengine_demos_assets）。


[kbengine_defs.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html
[bots]: {{ site.baseurl }}/cn/docs/concepts/directorys.html
