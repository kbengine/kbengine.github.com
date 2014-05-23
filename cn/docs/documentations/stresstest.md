---
layout: docs_cn
title: Stress Test · Docs · KBEngine
tab: docs
docsitem: documentation-stresstest
---

Stress Test
====================

Use virtual client and use the same game logic, so a large number of robots login server for the game, 
we can observe that the server is running condition, with debug to find bottlenecks.


Start bots
--------------------------------------

	[kbe@gameserver ~]$ ./bots &

Or use script:

	kbe/bin/Hybrid/!warringstart_bots.bat
	kbe/bin/Hybrid64/bots_start.sh



Configuration Bots
--------------------------------------

see also [kbengine_defs.xml]->`bots`



[kbengine_defs.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html
