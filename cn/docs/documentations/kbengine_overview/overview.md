---
layout: docs_cn
title: KBEngine Overview · Docs · KBEngine
tab: docs
docsitem: documentation-kbengineoverview-overview
---

KBEngine 服务器概览
====================


服务器架构
--------------------------------------------

<img class="screenshots-img" src="{{ site.baseurl }}/assets/img/kbengine_overview/kbengine_server.png">



--------------------------------------------



服务端必要组件描述
----------------------------------

	· loginapp:
	登录验证、注册、接入口。
	可在多台机器部署多个loginapp进程来负载。 


	· dbmgr:
	高性能多线程的数据存取。
	默认使用Mysql作为数据库。


	· baseappmgr:
	协调所有baseapp的工作，包括baseapp负载均衡处理等。


	· baseapp:
	客户端与服务端的交互只能通过loginapp分配的baseapp来完成。
	定时写entity的数据到数据库、baseapp数据相互备份、灾难恢复。
	可在多台机器部署多个baseapp进程来均衡负载。
	脚本层通常会选择在baseapp上实现如：社交系统、广播聊天、排行、游戏大厅、等等逻辑系统。


	· cellappmgr:
	负责协调所有cellapp的工作，包括负载均衡处理等。


	· cellapp:
	处理游戏与空间和位置有关的逻辑，如：AOI、Navigate、AI、战斗等等。
	可在多台机器部署多个cellapp进程来动态均衡负载。 


	· client:
	客户端我们将提供基础框架，这个框架不包括渲染部分和输入输出部分的具体实现, 
	我们将提供一个lib文件和一套API接口，开发者可以选择使用自己比较适合的图形渲染引擎与输入输出控制部分。
	Unity3D, HTML5, Cocos2d等技术我们提供了相关插件，能够快速的和服务端对接。


	· machine:
	抽象出一个服务端硬件节点(一台硬件服务器只能存在一个这样的进程)。主要用途是接收远程指令处理本机上的组件启动与关闭, 
	提供本机上运行组件的接入口以及收集当前机器上的一些信息， 
	如：CPU、内存等。 这些信息会提供给一些对此比较感兴趣的组件。 



--------------------------------------------



服务端工具组件描述
----------------------------------

	· interfaces: 
	支持快速接入第三方计费、第三方账号、第三方数据， 快速与运营系统耦合。


	· logger: 
	收集和备份各个组件的运行日志。



[config-server]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html