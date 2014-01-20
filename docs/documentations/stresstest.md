---
layout: docs
title: Stress Test · Docs · KBEngine
tab: docs
docsitem: documentation-stresstest
---

Stress Test
====================

Allows the generation of core files:
--------------------------------------

	Adding ~/.bashrc file:
		ulimit -c unlimited
	
	Require root privileges:
		[root@gameserver ~]# echo '%e.core.%p' > /proc/sys/kernel/core_pattern


Use visualization tools([GuiConsole]):
--------------------------------------

* Enter debug tab, where you can use the python command line when running the server dynamically (output, change).

* Into the profile tab, where you can use the python command line when running the server analysis program.

	* pyprofile: provide deterministic profiling of Python programs

	* cprofile: provide deterministic profiling of c / c + + programs

	* eventprofile: Events that occurred within a period of time statistics

	* mercuryprofile: Processing of the network within a period of time for analysis

* Enter watcher tab, where you can monitor the status of various runtime server.

For details, please see: [GuiConsole]

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_debug.jpg">

Use script tools([Cluster Controller]):
--------------------------------------

* you can use this tool to view status information for running the server (see: [Information query servers][Cluster Controller])

* You can enter the python command line tools for debugging (see: [Console][Cluster Controller])


[GuiConsole]: {{ site.baseurl }}/docs/commands/guiconsole.html
[Cluster Controller]: {{ site.baseurl }}/docs/commands/pycluster.html