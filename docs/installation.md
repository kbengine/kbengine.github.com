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

1. To set environment variables:

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

2. Set up the database:

	1. Install mysql:

		If the windows system then add the following code to make my.ini mysql case sensitive


		[mysqld]

		lower_case_table_names = 2


	2. Create a database account, assuming the user name password are "kbe"

		grant all privileges on * * to kbe @ '%' identified by 'kbe';

		grant select, insert, update, delete, create, drop on * * to kbe @ '%' identified by 'kbe';

		FLUSH PRIVILEGES;


	3. Create a new database, the database name is "demo"

		create database demo;


	4. Modify the databaseName in res\server\kbengine_defs.xml of dbmgr section (recommended demo\res\server\kbengine.xml overloaded modifications).

Check Out The Commands
----------------------

If stuck, you can always type `KBEngine help` for a quick list of all commands, or if you want to know more about a command read the [command documentation][commands].

[config]: {{ site.baseurl }}/docs/configuration/
[commands]: {{ site.baseurl }}/docs/commands/
[versions]: https://github.com/kbengine/kbengine/blob/latest/versioning/versions.txt
[layout]: {{ site.baseurl }}/docs/concepts/layout.html
[issues]: https://github.com/kbengine/kbengine/issues
