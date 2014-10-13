---
layout: docs_cn
title: Installer · Docs · KBEngine
tab: docs
docsitem: tools-installer
---

安装命令
==============

###目录地址: 
	kbengine/kbe/tools/server/install/installer.py


一款简单的Python脚本工具, 能够进行安装、卸载、更新、查看版本等等。
---------------------------------------------------------------------

###命令:

	python kbengine/kbe/tools/server/install/installer.py install
		自动安装KBEngine环境(环境变量， 数据库设置等)。

	python kbengine/kbe/tools/server/install/installer.py install=remotesrc
		自动从github下载最新Release版本源码并自动解压安装。

	python kbengine/kbe/tools/server/install/installer.py install=remotebin
		自动从sourceforge下载最新Release版本二进制可执行版KBEngine(WIN32)并自动解压安装。

	python kbengine/kbe/tools/server/install/installer.py install=localsrc
		从本地源码安装KBEngine, 通常工具和源码都在默认的目录中, 例如：下载源码后用户从tools目录进行安装。

	python kbengine/kbe/tools/server/install/installer.py install={xxx.zip, xxx.tar.gz}
		自动从指定的压缩包解压并安装。

	python kbengine/kbe/tools/server/install/installer.py uninstall
		自动卸载KBEngine。

	python kbengine/kbe/tools/server/install/installer.py version
		查看KBEngine当前本地版本和github版本。

	python kbengine/kbe/tools/server/install/installer.py evn
		查看当前KBEngine环境变量。

	python kbengine/kbe/tools/server/install/installer.py resetevn
		重设KBEngine环境变量。

	python kbengine/kbe/tools/server/install/installer.py help
		查看帮助。
