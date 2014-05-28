---
layout: docs_cn
title: Get the runtime logs · Docs · KBEngine
tab: docs
docsitem: documentation-getlogs
---

查看运行时日志
====================

###有二种办法查看服务端运行日志:

2: 使用可视化的控制台工具([GUIConsole]), 必须开启[messagelog]服务。

1: 查看log文件([KBE_HYBRID_PATH]/[logs]/xxx.log)。


-----------------------------------------------------------------------------------------------

###日志类型:

	DEBUG		: 调试日志
	WARRING		: 警告日志
	ERROR		: 错误日志
	INFO		: 常规日志
	S_DBG		: 脚本层调试日志
	S_ERR		: 脚本层错误日志
	S_INFO		: 脚本层常规日志



[GUIConsole]: {{ site.baseurl }}/cn/docs/commands/guiconsole.html
[messagelog]: {{ site.baseurl }}/cn/docs/concepts/layout.html
[logs]: {{ site.baseurl }}/cn/docs/concepts/directorys.html
[KBE_HYBRID_PATH]: {{ site.baseurl }}/cn/docs/installation.html

