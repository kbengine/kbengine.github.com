---
layout: docs
title: Online debugging · Docs · KBEngine
tab: docs
docsitem: documentation-online-debugging
---



Online debugging tools:
====================


Use visualization tools[GUIConsole]:

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_debug.jpg">



Use script tools[Cluster Controller]:

* you can use this tool to view status information for running the server (see: [Information query servers][Cluster Controller])

* You can enter the python command line tools for debugging (see: [Console][Cluster Controller])



The use of Telnet services[kbengine_defs.xml]->telnet_service:

	cellapp	: telnet localhost 50000
	baseapp	: telnet localhost 40000
	client	: telnet localhost 51000



------------------------------------------------------------------------------------------------------------



Debugging skills:
====================


###Allows the generation of core files(Linux only):

	Adding ~/.bashrc file:
		ulimit -c unlimited
	
	Require root privileges:
		[root@gameserver ~]# echo '%e.core.%p' > /proc/sys/kernel/core_pattern



------------------------------------------------------------------------------------------------------------



###Breakpoint debugging:

Only engine layer c + + code can use breakpoint debugging, Turn off the breakpoint debugging server heartbeat[kbengine_defs.xml]->channelCommon->timeout.

Script layer can only view the output log, or use the Python command line to debug, Because it is a distributed service program, so I do not support breakpoint.

------------------------------------------------------------------------------------------------------------

###Python debugging the game logic(Python command line input):

Print all entities:

	>>> KBEngine.entities.items()
	[1: Space at 0x4D3040, 2: Monster at 0x4D3038]

	>>> for entityID, entity in KBEngine.entities.items(): print("entityID:%i, entity=%s")
	1, Space at 0x4D3040
	2, Monster at 0x4D3038


Change the position of Entity:

	>>> KBEngine.entities[entityID].position
	(10.0, 0, 10.0)


Change the direction of Entity:

	>>> KBEngine.entities[entityID].direction.z = math.pi


Entity call method:

	>>> KBEngine.entities[entityID].funcXXX()


Create a Entity manual(cellapp):

	>>> e = KBEngine.createEntity("Monster", spaceID, (10.0, 0, 10.0), (0.0, 0, 0.0), {})


Remote-method call of Entity(cellapp):

	>>> KBEngine.entities[entityID].base.func()
	>>> KBEngine.entities[entityID].client.func()


You can be in the Python command line, the execution of any Python code.



------------------------------------------------------------------------------------------------------------


###The performance analysis:

Engine performance analysis

* [GUIConsole]->profile-tab	: use cprofile.
* [Cluster Controller]		: use":cprofile"command.

Script performance analysis

* [GUIConsole]->profile-tab	: use pyprofile.
* [Cluster Controller]		: use":pyprofile"command.

Network state analysis

* [GUIConsole]->profile-tab	: use mercuryprofile.
* [Cluster Controller]		: use":mercuryprofile"command.

Event processing analysis

* [GUIConsole]->profile-tab	: use eventprofile.
* [Cluster Controller]		: use":eventprofile"command.


<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_pyprofile.jpg">
<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_cprofile.jpg">



------------------------------------------------------------------------------------------------------------


### Watch variables:

Engine allows the use of tools to monitor the current process variables(Example: the total number of send-packets, the current number of players),
Users can also add a variable to be monitored in the script.

see also: [GUIConsole]->watcher-tab.

Examples: add a variable to be monitored in the script(the current number of players):
	
	baseapp->kbengine.py:
		...
		...
		def countPlayers():
			i = 0
			for e in KBEngine.entities.values():
				if e.__class__.__name__ == "Avatar":
					i += 1
			return i

		...
		...

			KBEngine.addWatcher("scripts/countPlayers", "UINT32", countPlayers)

		...
		...



<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_watcher.jpg">




[GUIConsole]: {{ site.baseurl }}/docs/commands/guiconsole.html
[Cluster Controller]: {{ site.baseurl }}/docs/commands/pycluster.html
[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html