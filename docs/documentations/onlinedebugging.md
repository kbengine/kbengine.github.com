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
