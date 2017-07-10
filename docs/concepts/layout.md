---
layout: docs
title: Server Layout · Docs · KBE
tab: docs
docsitem: concepts-layout
---

Server Layout
=============


Server component
----------------------------------

			      |----------|
			      |  client  | x N
			      |----------|

	------------------------|-----|-------------------------------

	|----------|	     |----------|         |----------|
	| loginsrv | x N     |  basesrv | x N     |basesrvmgr| x 1
	|----------|         |----------|         |----------|

	------------------------|-----|-------------------------------


		|----------|            |----------|
		|  cellsrv | x N	|cellsrvmgr| x 1
		|----------|            |----------|

	------------------------|-----|-------------------------------


		|----------|            |----------|
		|  dbmgr   | x 1	|interfaces| x 1
		|----------|            |----------|

	------------------------|-----|-------------------------------

		|------------------------------|
		|  mysql | redis | mongodb   | x N
		|------------------------------|


Server component description
----------------------------------

	· loginapp:
	Login authentication, registration, access port. 
	Loginapp process can be deployed on multiple hardware. 


	· dbmgr:
	High performance multi-threaded access to data.
	Mysql as the default database. 


	· baseappmgr:
	Coordinate all baseapp work, including baseapp load balancing processing.


	· baseapp:
	client and server communicate only through baseapp(assigned by the loginapp).
	Scheduled Backup entity to the database, baseapp mutual backup, Disaster Recovery.
	Baseapp can deploy multiple processes on multiple machines, 
	Multiple processes can be automated load balancing.
	Script layer usually choose as implemented in baseapp: Social system, radio chat, games hall, etc.

	· cellappmgr:
	Coordinate all cellapp work, including load balancing processing.


	· cellapp:
	Real-time processing logic game, such as: AOI, Navigate, AI, Fighting, etc.
	Cellapp can deploy multiple processes on multiple machines, 
	Multiple processes can be automated load balancing.
	The game logic processing related to space and position.

	· client:
	Our client will provide the basic framework, Excluding rendering and input/output, 
	We offer a lib file and a set of API interfaces, Developers can choose to use your favorite graphics 
	rendering engine and the input and output control.
	Unity3D, HTML5, Cocos2d and other technologies, we provide a plug-in to quickly and server docking.


	· machine:
	Abstract a server hardware node(A hardware server can only exist one such process).
	Receive remote commands, Collect hardware information, Collection components status.
	such as: CPU, Memory, cellapp, etc. This information is provided to the component of interest. 


	· interfaces: 
	Quick access to third-party billing, third-party accounts, third-party datas.


	· guiconsole: 
	This is a visual GUI console tools, real-time observation of the server running, 
	real-time observation of the dynamics of different Space in Entity, 
	And supports dynamic debugging server-side Python logic,
	See server logs, Startup and Shutdown, etc.


	· logger: 
	Log collection and backup.


[config-server]: {{ site.baseurl }}/docs/configuration/kbengine.html