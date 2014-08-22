---
layout: docs_cn
title: Installation · Docs · KBEngine
tab: docs
docsitem: installation
---

安装
============

在Linux上安装(Centos/Debian/Ubuntu etc.) 服务端, 请在终端输入:

	python kbengine/kbe/tools/server/install/installer.py install

如果你不信任脚本， 你也可以选择手动安装。

- - -


手动安装
-------------------



### 1. 创建kbe系统用户

创建一个独立的用户来运行KBEngine将会更加安全可靠以及便于维护。

如果您对此比较了解也可以省略这一步, 直接使用您的当前用户。

	Linux:

		[root@localhost ~]# useradd kbe
		[root@localhost ~]# passwd kbe

		New UNIX password: ******
		Retype new UNIX password: ******
		passwd: all authentication tokens updated successfully 

	Windows:
		"控制面板" -> "用户帐户" -> "创建一个新帐户"


### 2. 设置环境变量:

KBEngine会读取系统中设置的(KBE_ROOT, KBE_RES_PATH, KBE_HYBRID_PATH)环境变量, 按照如下步骤设置环境变量。

	Linux: (假如kbe被安装在~/目录)

		[kbe@localhost ~]$ vim ~/.bashrc

		ulimit -c unlimited
		export KBE_ROOT=~/kbengine/
		export KBE_RES_PATH=$KBE_ROOT/kbe/res/:$KBE_ROOT/demo/:$KBE_ROOT/demo/res/
		export KBE_HYBRID_PATH=$KBE_ROOT/kbe/bin/Hybrid64/
		
		使环境变量生效:
		[kbe@localhost ~]$ source ~/.bashrc

		root权限设置用户kbe的uid:
		[root@localhost ~]# usermod -u 10103 kbe
		
		操作系统账号的uid将被用于不同的服务器组来区分， 如果是多台硬件服务器共同维护一组服务，
		那么每一台机器上的系统uid环境变量都应该保持一致，否则无法形成服务组。
		另外uid必须大于0, 小于32767.

	Windows:

		鼠标右键点击: "我的电脑"->"高级"->"环境变量"， 然后设置(假如安装在C盘)

		KBE_ROOT = C:/kbengine/
		KBE_RES_PATH =%KBE_ROOT%/kbe/res;%KBE_ROOT%/demo/;%KBE_ROOT%/demo/res/
		KBE_HYBRID_PATH = %KBE_ROOT%/kbe/bin/Hybrid64/

		(注意: Windows系统账号没有UID属性， 需要用户自己添加这个环境变量, UID必须大于0, 小于32767)

		UID = 1

环境变量的意义

	KBE_ROOT:

		引擎根目录。


	KBE_RES_PATH:

		不同路径使用':'或者';'分隔, Windows由于操作系统规则必须使用';'分隔，默认情况下资源路径中第一个资源路径
		是引擎的资源路径， 第二个资源路径是用户脚本的资源路径。


	KBE_HYBRID_PATH:

		引擎二进制文件所在目录。


### 3. 安装数据库:

安装Mysql:

	Linux:

		安装
		[root @ localhost ~]# yum install mysql-server
		
		设定为开机自动启动
		[root @ localhost ~]# chkconfig mysqld on

		启动mysql服务
		[root @ localhost ~]# /etc/init.d/mysqld start

		检查是否启动成功
		[root@localhost ~]# /etc/init.d/mysqld status
		mysqld (pid  9234) is running...

	Windows:

		下载并安装最新版本:
		http://dev.mysql.com/downloads/windows/

		Windows环境，Mysql默认是忽略大小写的，请在my.ini添加如下命令设置大小写敏感

		[mysqld]
		lower_case_table_names = 0

		(重启Mysql, CMD输入如下命令:)
		net stop mysql
		net start mysql

		检查Mysql大小写是否敏感:
		mysql> create database NEWTEST;
		mysql> show databases;
		+--------------------+
		| Database           |
		+--------------------+
		| information_schema |
		| NEWTEST            |
		| mysql              |
		| test               |
		+--------------------+
		4 row in set (0.00 sec)


创建数据库，假设是数据库名为"kbe"

		mysql> create database kbe;


删除匿名用户
		
		mysql> use mysql 
		mysql> delete from user where user=''; 
		mysql> FLUSH PRIVILEGES;


创建数据库用户，用户名和密码假设是"kbe"

		mysql> grant all privileges on *.* to kbe@'%' identified by 'kbe';
		mysql> grant select,insert,update,delete,create,drop on *.* to kbe@'%' identified by 'kbe';
		mysql> FLUSH PRIVILEGES;

		在CMD中测试一下是否能使用这个账号登陆Mysql(请注意默认Mysql端口为3306， 
		如不一致请修改kbengine_defs.xml->dbmgr-><port>330x</port>)， 
		如果没有提示错误则账号配置完毕， 有错误请google
		进入你的mysql安装目录找到mysql.exe所在目录, 然后cmd进入这个目录中执行如下语句:
		
		Windows:
			进入你的mysql安装目录找到mysql.exe, 然后在CMD执行如下命令:
			C:\mysql\bin> mysql -ukbe -pkbe -hlocalhost -P3306

		Linux:
			[root@localhost ~] mysql -ukbe -pkbe -hlocalhost -P3306


如果要修改数据库名称请修改res\server\[kbengine_defs.xml]配置中dbmgr段的databaseName参数 
  (建议在demo\res\server\[kbengine.xml]中进行重载修改，这样kbengine在做改动后开发者更新时不会发生冲突)。



### 4. 优化操作系统(仅Linux) (可选)

设置允许打开的最大文件数 /etc/security/limits.conf:

		soft nofile 65535
		hard nofile 65535

修改socket发送窗口与接收窗口最大缓冲:

		[root@localhost ~]# echo 524288 > /proc/sys/net/core/rmem_max
		[root@localhost ~]# echo 524288 > /proc/sys/net/core/wmem_max

参考: [高性能Linux服务器配置]



### 5: 多网卡环境配置: (可选)

如果eth0是外部网卡地址, eth1是内部网卡地址执行如下命令设置广播地址为内部网卡地址:

		/sbin/ip route del broadcast 255.255.255.255 dev eth0
		/sbin/ip route add broadcast 255.255.255.255 dev eth1

同时请设置引擎配置([kbengine.xml] | [kbengine_defs.xml])中的相关选项为如下:

		baseapp 	: externalInterface = eth0, internalInterface = eth1
		loginapp	: externalInterface = eth0, internalInterface = eth1
		billingsystem 	: externalInterface = eth0, internalInterface = eth1
		[others]	: externalInterface = eth1, internalInterface = eth1



### 6. Linux 防火墙设置: (可选)

参考: [Linux防火墙设置]

### 7. 局域网内部署多组KBE服务器设置: (可选)

何为一组KBE服务器? 共同维护一个游戏世界的服务器组, 这些服务器上包含了整个[KBE架构]。

多个用户在同一个局域网, 并且都想部署一套自己的KBE服务器，那么需要注意两个地方:

	1: 环境变量中的UID必须不能相同(查看系统中是否有设置过UID)
		UID用于区分不同的服务组。

	2: 启动脚本中的cid必须唯一(kbengine\kbe\bin\Hybrid\start***)
		*** --cid=必须唯一 --grouporder=1  --globalorder=1
		cid既componentID, 用于标识一个KBE-APP, 如果探测到2个一样的cid必然会引起冲突。


[config]: {{ site.baseurl }}/cn/docs/configuration/
[commands]: {{ site.baseurl }}/cn/docs/commands/
[versions]: https://github.com/kbengine/kbengine/blob/latest/versioning/versions.txt
[layout]: {{ site.baseurl }}/cn/docs/concepts/layout.html
[issues]: https://github.com/kbengine/kbengine/issues
[高性能Linux服务器配置]: {{ site.baseurl }}/cn/docs/documentations/linuxosconfig.html
[kbengine_defs.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine.html
[Linux防火墙设置]: {{ site.baseurl }}/cn/docs/documentations/linuxfirewall.html
[KBE架构]: {{ site.baseurl }}/cn/docs/concepts/layout.html
