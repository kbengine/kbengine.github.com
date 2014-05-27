---
layout: docs
title: Linux firewall settings · Docs · KBEngine
tab: docs
docsitem: documentation-linuxfirewall
---

Linux firewall settings
====================

Example:

	server1: kbmachine(20099), loginapp(20013, 21103), baseapp x N(externalPorts_min->externalPorts_max, 40000->40000 + N)
	server2: kbmachine(20099), cellapp x N(40000->40000 + N)
	server3: kbmachine(20099), cellappmgr, baseappmgr, dbmgr, billing(30040)

	UDP broadcast: (20086-20088)

Download: 
[Centos_Firewall.tar]



[Centos_Firewall.tar]: {{ site.baseurl }}/assets/other/centos_firewall.tar