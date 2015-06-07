---
layout: docs_cn
title: Build · Docs · KBEngine
tab: docs
docsitem: build
---

建立
==============

源码下载:

[https://github.com/kbengine/kbengine/releases/latest](https://github.com/kbengine/kbengine/releases/latest)

还可以加入KBEngine项目随时获得更新哦。[stargazers](https://github.com/kbengine/kbengine/stargazers),[fork](https://github.com/kbengine/kbengine/fork)


- - -


只需简单的几步:

Linux:

	仅测试了(x32/x64): Centos >= 5.x, Debian >= 5.x
	GCC版本: >= 4.4.x

	[root @ localhost ~]# yum install openssl-devel 
	[root @ localhost ~]# yum install mysql-server
	[root @ localhost ~]# yum install mysql-devel 

	[root @ localhost ~]# cd kbengine/kbe/src
	[root @ localhost/ src]# chmod -R 755 .
	[root @ localhost/ src]# make

Windows:

	kbengine\kbe\src\kbengine_vs100.sln  
	(注意: vs2010 需要安装SP1(否则会出现错误: error LNK1123: 转换到 COFF 期间失败: 文件无效或损坏), 你也可以升级到高版本的VC编译器, 高版本已经包含了相关支持。)

	点击VC开始编译，等待完成即可。


注意: 

	1: 如果使用了其他版本的编译器最好重编译openssl、log4cxx与其他(kbengine/kbe/src/libs/*a.)。


	2: mysql_config在某些操作系统版本上可能不是这个路径地址 /usr/bin/mysql_config

		你可以手动修改kbengine/kbe/src/build/common.mak其中MYSQL_CONFIG_PATH=/usr/bin/mysql_config。


	3: 在Linux上编译之后可能会出现Python解释器无法初始化而导致无法启动服务端的问题 (这是一个Python的bug，参看:http://bugs.python.org/issue11320):
		
		你可以执行如下命令解决这个问题

		[root @ localhost ~] cd kbengine/src/lib/python
		[root @ localhost ~] ./configure
		[root @ localhost ~] make
		[root @ localhost ~] make install

