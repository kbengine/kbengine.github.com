---
layout: docs
title: Installer · Docs · KBEngine
tab: docs
docsitem: tools-installer
---

Installer tools
==============

Path: 
	kbengine/kbe/tools/server/install/installer.py



A simple Python script tools can be(installation, uninstallation, Update, Get the version, etc).
---------------------------------------------------------------------

###Commands:

	python kbengine/kbe/tools/server/install/installer.py install
		Install development environment (dependent, environment variables, etc.), From the KBE_ROOT search.

	python kbengine/kbe/tools/server/install/installer.py install=localsrc
		 Install from local-disk(Source code), From the KBE_ROOT search.

	python kbengine/kbe/tools/server/install/installer.py install=remotesrc
		Install from github(Source code).

	python kbengine/kbe/tools/server/install/installer.py install=remotebin
		Install from sourceforge(Binary releases).

	python kbengine/kbe/tools/server/install/installer.py install={xxx.zip, xxx.tar.gz}
		Install .zip/.tar.gz file.

	python kbengine/kbe/tools/server/install/installer.py uninstall
		Uninstall KBEngine.

	python kbengine/kbe/tools/server/install/installer.py evn
		The output of the KBEngine environment.

	python kbengine/kbe/tools/server/install/installer.py resetevn
		Reset the KBEngine environment.

	python kbengine/kbe/tools/server/install/installer.py version
		Get the KBEngine current version.

	python kbengine/kbe/tools/server/install/installer.py help
		List all of the command descriptions.
