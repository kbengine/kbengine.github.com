---
layout: docs
title: Installer · Docs · KBEngine
tab: docs
docsitem: tools-installer
---

Installer tools
==============

Download installer: 
-----------------------

[installer.py]
[latest]


A simple Python script tools can be(installation, uninstallation, Update, Get the version, etc).
---------------------------------------------------------------------

###Commands:

	python installer.py install
		Install development environment (dependent, environment variables, etc.), From the KBE_ROOT search.

	python installer.py install=localsrc
		 Install from local-disk(Source code), From the KBE_ROOT search.

	python installer.py install=remotesrc
		Install from github(Source code).

	python installer.py install=remotebin
		Install from sourceforge(Binary releases).

	python installer.py install={xxx.zip, xxx.tar.gz}
		Install .zip/.tar.gz file.

	python installer.py uninstall
		Uninstall KBEngine.

	python installer.py evn
		The output of the KBEngine environment.

	python installer.py resetevn
		Reset the KBEngine environment.

	python installer.py version
		Get the KBEngine current version.

	python installer.py help
		List all of the command descriptions.

[installer.py]: {{ site.baseurl }}/assets/other/py/installer.py
[latest]: https://github.com/kbengine/kbengine/blob/master/kbe/tools/server/install/installer.py