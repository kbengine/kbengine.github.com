---
layout: docs
title: Build · Docs · KBEngine
tab: docs
docsitem: build
---

build
==============

You can easily build:

linux:

	Test System (x32 & x64): centos >= 5.x, debian >= 5.x
	The compiler gcc: >= 4.4.x

	[root @ localhost ~]# yum install gcc  
	[root @ localhost ~]# yum install glib  
	[root @ localhost ~]# yum install gcc-c++  
	[root @ localhost ~]# yum install esound-devel  
	[root @ localhost ~]# yum install ncurses-devel 
	[root @ localhost ~]# yum install perl 
	[root @ localhost ~]# yum install openssl-devel 
	[root @ localhost ~]# yum install zlib-devel 
	[root @ localhost ~]# yum install mysql-server
	[root @ localhost ~]# yum install mysql-devel 

	[root @ localhost ~]# cd $KBE_ROOT/kbe/src
	[root @ localhost/ src]# make

windows:

	KBE_ROOT\kbengine\kbe\src\kbengine_vs90.sln


Note: 

	1: If using other versions of the compiler is best to openssl, log4cxx (kbe\src\libs\*a.) Have to be recompiled.


	2: mysql path on some platforms may not /usr/lib64/mysql/mysql_config

		Modify kbe\src\build\common.mak the MYSQL_CONFIG_PATH=/usr/lib64/mysql/mysql_config


	3: On linux compiled as python Unable to initialize because the situation can not be normal operation (this is a bug http://bugs.python.org/issue11320):

		[root @ localhost ~] cd src\lib\python
		[root @ localhost ~] ./configure
		[root @ localhost ~] make
		[root @ localhost ~] make install

