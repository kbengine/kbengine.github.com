---
layout: docs
title: Build · Docs · KBEngine
tab: docs
docsitem: build
---

build
==============

Download sources:

[https://github.com/kbengine/kbengine/releases/latest](https://github.com/kbengine/kbengine/releases/latest)

You can also join the KBEngine project at any time to get the update.[stargazers](https://github.com/kbengine/kbengine/stargazers),[fork](https://github.com/kbengine/kbengine/fork)


- - -


You can easily build:

Linux:

	Test System (x32/x64): Centos >= 5.x, Debian >= 5.x, Redhat, Ubuntu
	The compiler GCC: >= 4.4.x

	[root @ localhost ~]# yum install openssl-devel (On Ubuntu, use "apt-get install libssl-dev")
	[root @ localhost ~]# yum install mysql-server (On Ubuntu, use "apt-get install mysql-server")
	[root @ localhost ~]# yum install mysql-devel  (On Ubuntu, use "apt-get install libmysqld-dev")

	[root @ localhost ~]# cd kbengine/kbe/src
	[root @ localhost/ src]# chmod -R 755 .
	[root @ localhost/ src]# make

Windows:

	kbengine\kbe\src\kbengine_vs**.sln


Note: 

	1: If using other versions of the compiler is best to openssl, log4cxx (kbengine/kbe/src/libs/*a.) Have to be recompiled.


	2: mysql path on some platforms may not /usr/bin/mysql_config

		Modify kbengine/kbe/src/build/common.mak the MYSQL_CONFIG_PATH=/usr/bin/mysql_config


	3: On Linux compiled as python Unable to initialize because the situation can not be normal operation (this is a bug http://bugs.python.org/issue11320):
		
		You can execute the following command to solve this problem

		[root @ localhost ~] cd kbengine/kbe/src/lib/python
		[root @ localhost ~] ./configure
		[root @ localhost ~] make
		[root @ localhost ~] make install

