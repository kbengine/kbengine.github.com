---
layout: docs
title: Script Programming · Docs · KBEngine
tab: docs
docsitem: sdk-client-programming
---

Client-SDK Programming
====================


###Client Types

	Defined in kbengine/kbe/src/lib/common/common.hpp:
	enum COMPONENT_CLIENT_TYPE
	{
		// Mobile(Phone, Pad)
		CLIENT_TYPE_MOBILE				= 1,

		// Windows/Linux/Mac Application program
		// Contains the Python-scripts, entitydefs parsing and check entitydefs-MD5, Native
		CLIENT_TYPE_PC					= 2,

		// Web，HTML5，Flash
		// not contain Python-scripts and entitydefs analysis, can be imported protocol from network
		CLIENT_TYPE_BROWSER				= 3,

		// bots(Contains the Python-scripts, entitydefs parsing and check entitydefs-MD5, Native)
		CLIENT_TYPE_BOTS				= 4,

		// Mini-Client
		// Allowing does not contain Python-scripts and entitydefs analysis, can be imported protocol from network
		CLIENT_TYPE_MINI				= 5,
		...
	};


- - -


###Server errors:
Please to see: [server_errors.xml]




- - -


###Docking server engine protocol interfaces

The following is the client needs to be provided to the server call protocol-interfaces: 

	onVersionNotMatch
		
		Engine version mismatch

	onScriptVersionNotMatch
		
		脚本版本不匹配

	onKicked
		
		Script version mismatch

	onImportServerErrorsDescr
		
		Import server error code description table callback

	onImportClientEntityDef
		
		Import server entitydef description table callback

	onImportClientMessages
		
		Import the client protocol table callback

	onHelloCB
		
		Shake hands with the server callback

	onLoginFailed
		
		login to loginapp failed.

	onLoginSuccessfully
		
		Login loginapp success

	onLoginGatewayFailed
		
		login to baseapp failed.

	onReLoginGatewayFailed
		
		relogin to baseapp failed.


	onCreatedProxies
		
		服务端通知客户端创建一个能与服务端通讯的代理实体

	onUpdatePropertysOptimized
		
		更新entity属性(优化的)

	onUpdatePropertys
		
		更新entity属性(非优化的)

	onRemoteMethodCallOptimized
		
		服务端调用entity的方法(优化的)

	onRemoteMethodCall
		
		服务端调用entity的方法(非优化的)

	onEntityEnterWorld
		
		entity进入世界, entity第一次在cellapp上的被创建

	onEntityLeaveWorld
		
		entity离开世界了(非优化的)

	onEntityLeaveWorldOptimized
		
		entity离开世界了(优化的)

	onEntityEnterSpace
		
		entity进入空间了(进入了cellapp中的场景或者副本房间等)

	onEntityLeaveSpace
		
		entity离开空间了

	onCreateAccountResult
		
		创建账号返回结果

	initSpaceData
		
		当entity进入某个空间后，服务端初始化空间数据

	setSpaceData
		
		服务端设置空间数据

	delSpaceData
		
		服务端删除空间数据

	onEntityDestroyed
		
		某个entity销毁了

	onUpdateBasePos
		
		服务端更新客户端player基础位置(x, y, z)

	onUpdateBasePosXZ
		
		服务端更新客户端player基础位置(x, z)

	onSetEntityPosAndDir
		
		服务端设置客户端player位置和朝向

	onUpdateData_***
		
		服务端更新客户端player位置(x, y, z)或朝向(yaw, pitch, roll)

	onStreamDataStarted
		
		流数据开始下载(streamFileToClient， streamStringToClient)

	onStreamDataRecv
		
		接收到流数据

	onStreamDataCompleted
		
		流数据下载完成

	onReqAccountResetPasswordCB
		
		请求重置账号密码回调

	onReqAccountBindEmailCB
		
		请求绑定账号E-MAIL回调

	onReqAccountNewPasswordCB
		
		请求账号新密码回调(忘记密码类功能)


The following is the protocol-interfaces server allows clients to invoke:

	loginapp:
		hello
			客户端请求与loginapp握手

		onClientActiveTick
			客户端向服务端发送tick心跳

		login
			请求登录loginapp

		importClientMessages
			请求从loginapp导入引擎协议

		importServerErrorsDescr
			请求导入服务端错误描述表

		reqAccountResetPassword
			请求重置账号的密码

		reqCreateAccount
			请求创建账号

	baseapp:
		hello
			客户端请求与baseapp握手

		onClientActiveTick
			客户端向服务端发送tick心跳

		loginGateway
			请求登录网关baseapp

		importClientMessages
			请求从baseapp导入引擎级协议

		importClientEntityDef
			请求从baseapp导入脚本定义产生的协议

		reLoginGateway
			请求重登陆baseapp(断线重连)

		reqAccountBindEmail
			请求绑定账号E-MAIL

		reqAccountNewPassword
			请求账号新密码(忘记密码类功能)

		onUpdateDataFromClient
			更新客户端数据到服务端(player的位置，朝向等)

		onRemoteMethodCall
			客户端请求调用服务端baseapp-entity方法

		onRemoteCallCellMethodFromClient
			客户端请求调用服务端cellapp-entity方法



[server_errors.xml]: {{ site.baseurl }}/docs/configuration/server_errors.html
[message format]: {{ site.baseurl }}/docs/programming/kbe_message_format.html