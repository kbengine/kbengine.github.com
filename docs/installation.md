---
layout: docs
title: Installation · Docs · KBEngine
tab: docs
docsitem: installation
---

Installation
============

Install KBEngine on a (Centos/Debian/Ubuntu etc.) server by pasting this line in your terminal:

	python kbengine/kbe/tools/server/install/installer.py install

Or suggest a new platform.

You can paste the links in your browser to read the script that will be executed. Or, 
if you don't want to trust a script, install KBEngine manually:

Manual Installation
-------------------




### 1. To set environment variables:

KBEngine can read KBE_ROOT, KBE_RES_PATH, KBE_HYBRID_PATH system environment variables to do something.

	linux:

		[kbe@localhost ~]# vim ~/.bashrc

		ulimit -c unlimited

		export KBE_ROOT=/home/kbe/kbengine/

		export KBE_RES_PATH=$KBE_ROOT/kbe/res/:$KBE_ROOT/demo/:$KBE_ROOT/demo/res/

		export KBE_HYBRID_PATH=$KBE_ROOT/kbe/bin/Hybrid64/

		[root@localhost ~]# vim /etc/passwd
		
		uid is used to distinguish between different server groups, 
		if multiple servers distributed server maintenance KBE then uid must be the same on each server, 
		the value must be greater than 0.

	windows:

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

		If the windows system then add the following code to make my.ini mysql case sensitive

		[mysqld]
		lower_case_table_names = 0


Create a new database, the database name is "kbe"

		create database kbe;


Create a database account, assuming the user name password are "kbe"

		grant all privileges on *.* to kbe@'%' identified by 'kbe';

		grant select,insert,update,delete,create,drop on *.* to kbe@'%' identified by 'kbe';

		FLUSH PRIVILEGES;

. Modify the databaseName in res\server\[kbengine_defs.xml] of dbmgr section (recommended demo\res\server\[kbengine.xml] overloaded modifications).



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