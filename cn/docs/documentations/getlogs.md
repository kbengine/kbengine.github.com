---
layout: docs_cn
title: Get the runtime logs · Docs · KBEngine
tab: docs
docsitem: documentation-getlogs
---

查看运行时日志
====================

###有二种办法查看服务端运行日志:

1: 使用可视化的控制台工具[GUIConsole], 必须开启[logger]服务。
<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_log.jpg">



- - - 



2: 查看log文件([KBE_BIN_PATH]/[logs]/xxx.log)。
<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/windows_getlogs.png">
	
	注意：如果开启了logger服务，那么日志将被转发到logger进程，logger进程最终会将日志写到message_<进程名称>.*.log中。
		开启logger可以通过修改启动脚本或者修改工具的启动方案来解决
		http://www.kbengine.org/cn/docs/startup_shutdown.html。


-----------------------------------------------------------------------------------------------

###日志类型:

	DEBUG		: 调试日志
	WARRING		: 警告日志
	ERROR		: 错误日志
	INFO		: 常规日志
	S_DBG		: 脚本层调试日志
	S_ERR		: 脚本层错误日志
	S_INFO		: 脚本层常规日志






[GUIConsole]: {{ site.baseurl }}/cn/docs/tools/guiconsole.html
[logger]: {{ site.baseurl }}/cn/docs/concepts/layout.html
[logs]: {{ site.baseurl }}/cn/docs/concepts/directorys.html
[KBE_BIN_PATH]: {{ site.baseurl }}/cn/docs/installation.html

