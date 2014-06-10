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

如果你不信任脚本， 你也可以选择手动安装:

手动安装
-------------------




### 1. 设置环境变量:

KBEngine会读取系统中设置的(KBE_ROOT, KBE_RES_PATH, KBE_HYBRID_PATH)环境变量, 按照如下步骤设置环境变量.

	Linux: (假如kbe被安装在~/目录)

		[kbe@localhost ~]# vim ~/.bashrc

		ulimit -c unlimited
		export KBE_ROOT=~/kbengine/
		export KBE_RES_PATH=$KBE_ROOT/kbe/res/:$KBE_ROOT/demo/:$KBE_ROOT/demo/res/
		export KBE_HYBRID_PATH=$KBE_ROOT/kbe/bin/Hybrid64/

		[root@localhost ~]# vim /etc/passwd
		
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


### 2. 安装数据库:

安装Mysql:
	2.1 Linux CentOS MySQL 安装和配置
		2.1.1 安装MySql
		yum install mysql-server mysql
		(命令解释 yum install 包名 ，安装mysql,如果之前执行了安装mysql,那么命令行会提示已经安装了最新版本)

		2.1.2 启动和停止MySQL
		启动mysql
		/etc/rc.d/init.d/mysqld start

		停止mysql
		/etc/rc.d/init.d/mysqld stop
		(在搭建安装kbengine服务端引擎的时候，不要停止Mysql)

		2.1.3 启动系统时运行MySQL
		chkconfig mysqld on

		2.1.4 使用mysqladmin验证服务器是否正在运行
		mysqladmin version
		(如果看到命令行提示MySQL版本号，则表示安装成功)

		2.1.5 启动MySQL客户端
		mysql -u root
		(第一次启动MySQL客户端只能使用MySQL管理员权限，即root用户，root用户密码为空，所以我们必须把空密码修改)

		2.1.6 修改root密码
		SET PASSWORD FOR 'root'@'localhost' = PASSWORD('mySetNewPassword');
		(请注意，把上述命令中的mySetNewPassword替换成你想要设置的密码)

2.2 Windows MySQL

		如果是Windows环境，Mysql默认是忽略大小写的，请在my.ini添加如下命令设置大小写敏感

		[mysqld]
		lower_case_table_names = 0

		(重启Mysql, CMD输入如下命令:)
		net stop mysql
		net start mysql

		检查Mysql变量 lower_case_table_names必须等于0, 使用如下命令检查:
		mysql> SHOW VARIABLES like "lower_case_table_names";
		+------------------------+-------+
		| Variable_name          | Value |
		+------------------------+-------+
		| lower_case_table_names | 0     |
		+------------------------+-------+
		1 row in set (0.00 sec)

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



### 3. 优化操作系统(仅Linux) (可选)

设置允许打开的最大文件数 /etc/security/limits.conf:

		soft nofile 65535
		hard nofile 65535

修改socket发送窗口与接收窗口最大缓冲:

		[root@localhost ~]# echo 524288 > /proc/sys/net/core/rmem_max
		[root@localhost ~]# echo 524288 > /proc/sys/net/core/wmem_max

参考: [高性能Linux服务器配置]



### 4: 多网卡环境配置: (可选)

如果eth0是外部网卡地址, eth1是内部网卡地址执行如下命令设置广播地址为内部网卡地址:

		/sbin/ip route del broadcast 255.255.255.255 dev eth0
		/sbin/ip route add broadcast 255.255.255.255 dev eth1

同时请设置引擎配置([kbengine.xml] | [kbengine_defs.xml])中的相关选项为如下:

		baseapp 	: externalInterface = eth0, internalInterface = eth1
		loginapp	: externalInterface = eth0, internalInterface = eth1
		billingsystem 	: externalInterface = eth0, internalInterface = eth1
		[others]	: externalInterface = eth1, internalInterface = eth1



### 5. Linux 防火墙设置: (可选)

参考: [Linux防火墙设置]



[config]: {{ site.baseurl }}/docs/configuration/
[commands]: {{ site.baseurl }}/docs/commands/
[versions]: https://github.com/kbengine/kbengine/blob/latest/versioning/versions.txt
[layout]: {{ site.baseurl }}/docs/concepts/layout.html
[issues]: https://github.com/kbengine/kbengine/issues
[高性能Linux服务器配置]: {{ site.baseurl }}/docs/documentations/linuxosconfig.html
[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html
[Linux防火墙设置]: {{ site.baseurl }}/docs/documentations/linuxfirewall.html