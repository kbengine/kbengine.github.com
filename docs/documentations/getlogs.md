---
layout: docs
title: Get the runtime logs · Docs · KBEngine
tab: docs
docsitem: documentation-getlogs
---

Get the runtime logs
====================

###There are two ways to view the server running log: 

1: Use visualization console tool ([GUIConsole]) (must be open [messagelog] Service).

2: View log files.
Path: /[logs]/*.log. 


-----------------------------------------------------------------------------------------------

###Log types: 

	DEBUG		: Debug Log 
	WARRING		: Warning log 
	ERROR		: Error Log 
	INFO		: general log 
	S_DBG		: Script-layer debug log 
	S_ERR		: Script-layer error log 
	S_INFO		: Script-layer general log 



[GUIConsole]: {{ site.baseurl }}/docs/commands/guiconsole.html
[messagelog]: {{ site.baseurl }}/docs/concepts/layout.html
[logs]: {{ site.baseurl }}/docs/concepts/directorys.html
[KBE_HYBRID_PATH]: {{ site.baseurl }}/docs/installation.html