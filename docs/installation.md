---
layout: docs
title: Installation · Docs · KBEngine
tab: docs
docsitem: installation
---

Installation
============

(Note: use this way to install must have been completed [build] steps)


Install KBEngine on a (Windows/Centos/Redhat/Debian/Ubuntu etc.) server, in your terminal input:

	python kbengine/kbe/tools/server/install/installer.py install=remotesrc

if you don't want to trust a script, install KBEngine manually.

- - -


Manual Installation
-------------------



### 1. Create user kbe(optional)

Create a separate user to run KBEngine will be more secure and reliable, and easy to maintain. 

If you have a better understanding, you can ignore this section, the direct use of your current user. 

	Linux:

		[root @ localhost ~] # useradd kbe
		[root @ localhost ~] # passwd kbe

		New UNIX password: ******
		Retype new UNIX password: ******
		passwd: all authentication tokens updated successfully

	Windows:

		"Control Panel" -> "User Accounts" -> "Create a new account"


- - -


### 2. To set environment variables:

KBEngine can read KBE_ROOT, KBE_RES_PATH, KBE_BIN_PATH system environment variables to do something.

Environment variables description:

	UID:
		uid is used to distinguish between different server groups, 
		if multiple servers distributed server maintenance KBE then uid must be the same on each server, 
		uid must be greater than 0 and less than 32767.
		(Note: Windows system account no UID attribute, Users need to add this environment variable)

	KBE_ROOT:

		kbe root directory path.


	KBE_RES_PATH:

		Related Resources path with ':' or ';' separated, the first "respath" is kbe engine "respath", 
		the second "respath" must be the root user scripts, others without limitation.


	KBE_BIN_PATH:

		kbe binary file directory path.



To set environment variables:

	Linux: (if kbe be installed in ~/ directory)

		[kbe@localhost ~]# vim ~/.bashrc

		ulimit -c unlimited
		export KBE_ROOT=~/kbengine/
		export KBE_RES_PATH=$KBE_ROOT/kbe/res/:$KBE_ROOT/demo/:$KBE_ROOT/demo/scripts/:$KBE_ROOT/demo/res/
		export KBE_BIN_PATH=$KBE_ROOT/kbe/bin/server/

		The environmental variables are available:
		[kbe@localhost ~]$ source ~/.bashrc

		Root to set the user-kbe uid:
		[root@localhost ~]# usermod -u 10103 kbe
		
		uid is used to distinguish between different server groups, 
		if multiple servers distributed server maintenance KBE then uid must be the same on each server, 
		uid must be greater than 0 and less than 32767.

	Windows:

		The right mouse button: "My Computer"->"Advanced"->"Environment Variables" Set up(If installed in C drive).

		KBE_ROOT = C:/kbengine/
		KBE_RES_PATH = %KBE_ROOT%/kbe/res;%KBE_ROOT%/demo/;%KBE_ROOT%/demo/scripts;%KBE_ROOT%/demo/res/
		KBE_BIN_PATH = %KBE_ROOT%/kbe/bin/server/

		uid is used to distinguish between different server groups, 
		if multiple servers distributed server maintenance KBE then uid must be the same on each server, 
		uid must be greater than 0 and less than 32767.

		(Note: Windows system account no UID attribute, Users need to add this environment variable, 
		UID must be greater than 0 and less than 32767)
		
		UID = 10103


- - -


### 3. Setup the database:

Install Mysql:

	Linux:

		Install
		[root @ localhost ~]# yum install mysql-server
		
		Set to start automatically
		[root @ localhost ~]# chkconfig mysqld on

		Service mysql start
		[root @ localhost ~]# /etc/init.d/mysqld start

		Check the status of the service
		[root@localhost ~]# /etc/init.d/mysqld status
		mysqld (pid  9234) is running...

	Windows:

		Download and install the latest version of:
		http://dev.mysql.com/downloads/windows/

		If the Windows then add the following code to make my.ini Mysql case sensitive

		[mysqld]
		lower_case_table_names = 0

		(Service MySQL restart, CMD input:)
		net stop mysql
		net start mysql

		Check whether Mysql case sensitive:
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


Create a database, name is "kbe"

		mysql> create database kbe;


Delete anonymous user
		
		mysql> use mysql 
		mysql> delete from user where user=''; 
		mysql> FLUSH PRIVILEGES;


Create a database account, username and password is "kbe"

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


If you want to modify the database name, Modify the databaseName in res\server\[kbengine_defs.xml] of dbmgr section 
  (recommended demo\res\server\[kbengine.xml] overloaded modifications).


- - -


### 4. Optimization of the operating system(Linux) (Optional)

Set /etc/security/limits.conf:

		soft nofile 65535
		hard nofile 65535

Defines the maximum send/receive window size:

		[root@localhost ~]# echo 524288 > /proc/sys/net/core/rmem_max
		[root@localhost ~]# echo 524288 > /proc/sys/net/core/wmem_max

		Can be adjusted[kbengine_defs.xml]->channelCommon->***BufferSize

see: [High-performance Linux server configuration]


- - -


### 5: Multi-card(NIC) configurations: (Optional)

If eth0 is external, eth1 is the internal:

		/sbin/ip route del broadcast 255.255.255.255 dev eth0
		/sbin/ip route add broadcast 255.255.255.255 dev eth1

Please set ([kbengine.xml] | [kbengine_defs.xml]):

		baseapp 	: externalInterface = eth0, internalInterface = eth1
		loginapp	: externalInterface = eth0, internalInterface = eth1
		billingsystem 	: externalInterface = eth0, internalInterface = eth1
		[others]	: externalInterface = eth1, internalInterface = eth1


- - -


### 6. Linux firewall: (Optional)

see: [Linux firewall settings]


- - -


### 7. The LAN, the deployment of multiple KBE server settings: (optional)

What is the KBE server group? The maintenance of a game world server group, The server contains the entire [KBE-layout].

Multiple users in the same LAN, And they want to install KBE-server, Then they need to pay attention to:

	1: Environment variables UID must not be the same (see the system if there are set too UID)
		UID is used to distinguish between different server groups.

	2: cid startup script must be unique(kbengine\kbe\bin\server\start***)
		*** --cid=(must be unique) --grouporder=1  --globalorder=1
		cid is componentID, Used to identify a KBE-APP, If two different cid exist, will inevitably lead to conflict.


- - -


### 8. IP and port settings: (optional)
	
The detailed configuration:[kbengine.xml]

Database IP:

	[kbengine.xml]->dbmgr->ip

Database port:

	[kbengine.xml]->dbmgr->port

Login IP:

	[kbengine.xml]->loginapp->externalInterface
	（Because reading is the address of NIC, some reasons may not be able to obtain the correct IP address. For example, port mapping mode with the network interaction, this should be set to [kbengine_defs.xml]->loginapp->externalAddress）

Login port:

	[kbengine.xml]->loginapp->externalPorts_min

The HTTP callback (EMAIL authentication, the password reset, etc.):

	[kbengine.xml]->loginapp->externalPorts_min

Gateway IP:

	[kbengine.xml]->baseapp->externalInterface
	（Because reading is the address of NIC, some reasons may not be able to obtain the correct IP address. For example, port mapping mode with the network interaction, this should be set to [kbengine_defs.xml]->loginapp->externalAddress）

Gateway port:

	[kbengine.xml]->baseapp->externalPorts_min

The Telnet service port(baseapp):

	[kbengine.xml]->baseapp->telnet_service->port

The Telnet service port(cellapp):

	[kbengine.xml]->cellapp->telnet_service->port

Virtual client, log on to the server side IP (stress testing):

	[kbengine.xml]->bots->ip

Virtual client, log on to the server side port (stress testing):

	[kbengine.xml]->bots->port

Virtual client, Telnet service port:

	[kbengine.xml]->bots->telnet_service->port

Provide tools explicit connection port:

	[kbengine.xml]->kbmachine->externalPorts_min

Billing access system IP:

	[kbengine.xml]->billingSystem->ip

Billing access system port:

	[kbengine.xml]->billingSystem->port

Request address third party billing service (billing, login, etc.):

	[kbengine.xml]->billingSystem->thirdpartyChargeService_addr

Request port third party billing service (billing, login, etc.):

	[kbengine.xml]->billingSystem->thirdpartyChargeService_port

Third party service callback port (billing, login, etc.):

	[kbengine.xml]->billingSystem->thirdpartyService_cbport


[config]: {{ site.baseurl }}/docs/configuration/
[tools]: {{ site.baseurl }}/docs/tools/
[versions]: https://github.com/kbengine/kbengine/blob/latest/versioning/versions.txt
[layout]: {{ site.baseurl }}/docs/concepts/layout.html
[issues]: https://github.com/kbengine/kbengine/issues
[High-performance Linux server configuration]: {{ site.baseurl }}/docs/documentations/linuxosconfig.html
[kbengine_defs.xml]: {{ site.baseurl }}/docs/configuration/kbengine_defs.html
[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html
[Linux firewall settings]: {{ site.baseurl }}/docs/documentations/linuxfirewall.html
[KBE-layout]: {{ site.baseurl }}/docs/concepts/layout.html
[build]:{{ site.baseurl }}/docs/build.html
