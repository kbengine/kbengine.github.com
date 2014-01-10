---
layout: docs
title: Online debugging · Docs · KBEngine
tab: docs
docsitem: documentation-online-debugging
---

Online debugging
====================

Allows the generation of core files:


	Adding ~/.bashrc file:
		ulimit -c unlimited
	
	Require root privileges:
		[root@gameserver ~]# echo '%e.core.%p' > /proc/sys/kernel/core_pattern


Use visualization tools([GuiConsole]):
--------------------------------------
<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/pyconsole1.jpg">

[GuiConsole]: {{ site.baseurl }}/docs/commands/guiconsole.html
[ClusterController]: {{ site.baseurl }}/docs/commands/pycluster.html