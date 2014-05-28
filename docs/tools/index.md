---
layout: docs
title: Tools Overview · Docs · KBEngine
tab: docs
docsitem: tools-overview
---

Tools
========

### Installation Assistant([installer]):

	python kbengine/kbe/tools/server/install/installer.py install
	python kbengine/kbe/tools/server/install/installer.py uninstall



### Python version of the cluster control([cluster_controller]):

	python cluster_controller.py query: 
		Information query servers

	python cluster_controller.py start: 
		Start the servers.

	python cluster_controller.py stop: 
		Shutdown the servers.

	python cluster_controller.py console: 
		Online debugging, python console.



### Visual console([GUIConsole]):

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/screenshots/guiconsole_debug.jpg">



[installer]: {{ site.baseurl }}/docs/tools/installer
[cluster_controller]: {{ site.baseurl }}/docs/tools/pycluster
[guiconsole]: {{ site.baseurl }}/docs/tools/guiconsole
	