---
layout: docs_cn
title: Installation · Docs · KBEngine
tab: docs
docsitem: installation
---

Installation
============

Install KBEngine on a (Centos/Debian/Ubuntu etc.) server, in your terminal input:

	python kbengine/kbe/tools/server/install/installer.py install

if you don't want to trust a script, install KBEngine manually:

Manual Installation
-------------------




### 1. To set environment variables:

KBEngine can read KBE_ROOT, KBE_RES_PATH, KBE_HYBRID_PATH system environment variables to do something.

	Linux: (assuming kbe be placed in the ~/ directory)

		[kbe@localhost ~]# vim ~/.bashrc

		ulimit -c unlimited

		export KBE_ROOT=~/kbengine/

		export KBE_RES_PATH=$KBE_ROOT/kbe/res/:$KBE_ROOT/demo/:$KBE_ROOT/demo/res/

		export KBE_HYBRID_PATH=$KBE_ROOT/kbe/bin/Hybrid64/

		[root@localhost ~]# vim /etc/passwd
		
		uid is used to distinguish between different server groups, 
		if multiple servers distributed server maintenance KBE then uid must be the same on each server, 
		the value must be greater than 0.

	Windows:

		The right mouse button: "My Computer"->"Advanced"->"Environment Variables" Set up.
		(Note: Need to add UID environment variable, the value must be greater than 0)

	KBE_ROOT:

		kbe root directory path.


	KBE_RES_PATH:

		Related Resources path with ':' or ';' separated, the first "respath" is kbe engine "respath", 
		the second "respath" must be the root user scripts, others without limitation.


	KBE_HYBRID_PATH:

		kbe binary file directory path.



### 2. Set up the database:

Install mysql:

		If the Windows then add the following code to make my.ini mysql case sensitive

		[mysqld]
		lower_case_table_names = 0

		(Service MySQL restart, CMD input:)
		net stop mysql
		net start mysql

		Check lower_case_table_names, must be is 0:
		mysql> SHOW VARIABLES like "lower_case_table_names";
		+------------------------+-------+
		| Variable_name          | Value |
		+------------------------+-------+
		| lower_case_table_names | 0     |
		+------------------------+-------+
		1 row in set (0.00 sec)

Create a database account, username and password is "kbe"

		mysql> create database kbe;


Delete anonymous user
		
		mysql> use mysql 
		mysql> delete from user where user=''; 
		mysql> FLUSH PRIVILEGES;


Create a database account, name is kbe

		mysql> grant all privileges on *.* to kbe@'%' identified by 'kbe';
		mysql> grant select,insert,update,delete,create,drop on *.* to kbe@'%' identified by 'kbe';
		mysql> FLUSH PRIVILEGES;

		Test whether the CMD can use this account login mysql(Note that the default mysql port is 3306, 
		you can modify kbengine_defs.xml->dbmgr-><port>330x</port>),
		If an error occurs, please google mysql error code.
		
		Windows:
			Enter your mysql installation directory to find mysql.exe, 
			enter the directory and then execute cmd following statement:

			C:\mysql\bin> mysql -ukbe -pkbe -hlocalhost -P3306

		Linux:

			[root@localhost ~] mysql -ukbe -pkbe -hlocalhost -P3306


. Modify the databaseName in res\server\[kbengine_defs.xml] of dbmgr section 
  (recommended demo\res\server\[kbengine.xml] overloaded modifications).



### 3. Optimization of the operating system(Linux) (Optional)

Set /etc/security/limits.conf:

		soft nofile 65535
		hard nofile 65535

Defines the maximum send/receive window size:

		[root@localhost ~]# echo 524288 > /proc/sys/net/core/rmem_max
		[root@localhost ~]# echo 524288 > /proc/sys/net/core/wmem_max

see: [High-performance linux server configuration]



### 4: Multi-card configurations: (Optional)

If eth0 is external, eth1 is the internal:

		/sbin/ip route del broadcast 255.255.255.255 dev eth0
		/sbin/ip route add broadcast 255.255.255.255 dev eth1

Please set ([kbengine.xml] | [kbengine_defs.xml]):

		baseapp 	: externalInterface = eth0, internalInterface = eth1
		loginapp	: externalInterface = eth0, internalInterface = eth1
		billingsystem 	: externalInterface = eth0, internalInterface = eth1
		[others]	: externalInterface = eth1, internalInterface = eth1



### 5. Linux firewall: (Optional)

see: [Linux firewall settings]



Check Out The Commands
----------------------

If stuck, you can always type `KBEngine help` for a quick list of all commands, or if you want to know more about a command read the [command documentation][commands].

[config]: {{ site.baseurl }}/docs/configuration/
[commands]: {{ site.baseurl }}/docs/commands/
[versions]: https://github.com/kbengine/kbengine/blob/latest/versioning/versions.txt
[layout]: {{ site.baseurl }}/docs/concepts/layout.html
[issues]: https://github.com/kbengine/kbengine/issues
[High-performance linux server configuration]: {{ site.baseurl }}/docs/documentations/linuxosconfig.html
[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html
[Linux firewall settings]: {{ site.baseurl }}/docs/documentations/linuxfirewall.html