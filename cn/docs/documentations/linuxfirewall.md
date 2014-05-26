---
layout: docs_cn
title: Linux firewall settings · Docs · KBEngine
tab: docs
docsitem: documentation-linuxfirewall
---

Linux防火墙设置
====================

例子:

	服务器1: kbmachine(20099), loginapp(20013, 21103), baseapp x N(externalPorts_min->externalPorts_max, 40000->40000 + N)
	服务器2: kbmachine(20099), cellapp x N(40000->40000 + N)
	服务器3: kbmachine(20099), cellappmgr, baseappmgr, dbmgr, billing(30040)

	UDP 广播端口: (20086-20088)

下载: 
[centos_firewall.tar]



[centos_firewall.tar]: {{ site.baseurl }}/assets/other/centos_firewall.tar