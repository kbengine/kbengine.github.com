---
layout: docs_cn
title: Guiconsole Tools · Docs · KBEngine
tab: docs
docsitem: tools-guiconsole
---

GUIConsole 工具
===============

目录地址: 
	kbe/tools/server/guiconsole/guiconsole.exe

这个图形工具只能在Windows运行

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_debug.jpg">


描述
------------------------------------------

* Status选项卡, 服务端组件列表, 提供一些简单的系统信息。

* Debug选项卡, 你可以在服务端运行的时候使用Python语句进行动态的调试与输出。

* Log选项卡, 实时的查看服务端运行log.

* Profile选项卡, 你可以在服务端运行状态下动态的获得一段时间内的程序性能分析。

	* pyprofile: 提供了逻辑层Python程序的性能分析

	* cprofile: 提供引擎层c/c++程序的性能分析

	* eventprofile: 在一段时间内发生的事件的数据统计

	* mercuryprofile: 在一段时间内的网络数据分析

* Watcher选项卡, 你可以实时的观查服务端在运行的一些被监视的参数变化。

* SpaceView选项卡, 实时的查看服务端对一个完整的场景进行动态负载平衡的情况。



