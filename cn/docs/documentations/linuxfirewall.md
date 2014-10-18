---
layout: docs_cn
title: Linux firewall settings · Docs · KBEngine
tab: docs
docsitem: documentation-linuxfirewall
---

Linux防火墙设置
====================

例子:

	server1: 
			kbmachine:
				内部TCP端口 : 20099		// 工具直接访问端口

			loginapp:
				外部TCP端口 : 20013		// 登录端口
				外部TCP端口 : 21103		// Email账号激活、密码重置等等处理的回调接口

			baseapp x N:
				外部TCP端口 : 20015, ...		// 网关端口(externalPorts_min->externalPorts_max)
				内部TCP端口 : 40000		// Telnet服务端口(用于调试等)

	server2: 
			kbmachine:
				内部TCP端口 : 20099		// 工具直接访问端口

			cellapp x N
				内部TCP端口 : 50000		// Telnet服务端口(用于调试等)


	server3: 
			kbmachine:
				内部TCP端口 : 20099		// 工具直接访问端口

			cellappmgr

			baseappmgr

			dbmgr

			billing
				内部TCP端口 : 30040		// 第三方回调接口，用于计费、第三方账号等等

	UDP 广播端口: 
		internal : 20086-20088				// 探测和感知其他组件的存在, 组成为一个网络服务组

下载: 
[Centos_Firewall.tar]



[Centos_Firewall.tar]: {{ site.baseurl }}/assets/other/centos_firewall.tar