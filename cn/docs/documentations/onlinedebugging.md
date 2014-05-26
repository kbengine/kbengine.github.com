---
layout: docs_cn
title: Online debugging · Docs · KBEngine
tab: docs
docsitem: documentation-online-debugging
---

在线调试
====================

允许系统产生core文件(仅Linux):
--------------------------------------

	在~/.bashrc中添加如下命令:
		ulimit -c unlimited
	
	需要root权限执行:
		[root@gameserver ~]# echo '%e.core.%p' > /proc/sys/kernel/core_pattern


使用可视化工具 ([GUIConsole]):
--------------------------------------

详细请参考: [GUIConsole]

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_debug.jpg">

使用脚本命令工具([Cluster Controller]):
--------------------------------------

* 你可以使用这个工具查看服务端运行的一些状态信息 (参看: [Information query servers][Cluster Controller])

* 你可以使用这个工具进入Python命令行调试 (参看: [Console][Cluster Controller])


[GUIConsole]: {{ site.baseurl }}/cn/docs/commands/guiconsole.html
[Cluster Controller]: {{ site.baseurl }}/cn/docs/commands/pycluster.html