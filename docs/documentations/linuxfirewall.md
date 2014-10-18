---
layout: docs
title: Linux firewall settings · Docs · KBEngine
tab: docs
docsitem: documentation-linuxfirewall
---

Linux firewall settings
====================

Example:

	server1: 
			kbmachine:
				internal(TCP) : 20099		// Tools to directly access interface

			loginapp:
				external(TCP) : 20013		// The login port
				external(TCP) : 21103		// The Email account activation, password reset, etc...

			baseapp x N:
				external(TCP) : 20015, ...	// The gateway ports(externalPorts_min->externalPorts_max)
				internal(TCP) : 40000		// Telnet service port

	server2: 
			kbmachine:
				internal(TCP) : 20099		// Tools to directly access interface

			cellapp x N
				internal(TCP) : 50000		// Telnet service port


	server3: 
			kbmachine:
				internal(TCP) : 20099		// Tools to directly access interface

			cellappmgr

			baseappmgr

			dbmgr

			billing
				internal(TCP) : 30040		// Third party callback, charge, third party account etc.

	UDP broadcast: 
		internal : 20086-20088				// Detection and perception of other components, To establish a network service group



Download: 
[Centos_Firewall.tar]



[Centos_Firewall.tar]: {{ site.baseurl }}/assets/other/centos_firewall.tar