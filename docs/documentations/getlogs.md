---
layout: docs
title: Get the runtime logs · Docs · KBEngine
tab: docs
docsitem: documentation-getlogs
---

Get the runtime logs
====================

###There are two ways to view the server running log: 

1. Use visualization console tool [GUIConsole], must be open [logger] Service.
<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_log.jpg">



- - - 



2. View log files([KBE_BIN_PATH]/[logs]/xxx.log). 
<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/windows_getlogs.png">

	Note: if the logger service is started, then the logs will be forwarded to the logger process, 
	logger process will logs write "logger_<process name>.*.log".
	Start logger, you can modify the startup script or modify tools start-layout.
	http://www.kbengine.org/cn/docs/startup_shutdown.html


-----------------------------------------------------------------------------------------------

###Log types: 

	DEBUG		: Debug Log 
	WARRING		: Warning log 
	ERROR		: Error Log 
	INFO		: general log 
	S_DBG		: Script-layer debug log 
	S_ERR		: Script-layer error log 
	S_INFO		: Script-layer general log 






[GUIConsole]: {{ site.baseurl }}/docs/tools/guiconsole.html
[logger]: {{ site.baseurl }}/docs/concepts/layout.html
[logs]: {{ site.baseurl }}/docs/concepts/directorys.html
[KBE_BIN_PATH]: {{ site.baseurl }}/docs/installation.html