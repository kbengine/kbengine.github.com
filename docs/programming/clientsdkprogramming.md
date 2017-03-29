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

		// Windows Application program
		CLIENT_TYPE_WIN					= 2,

		// Linux Application program
		CLIENT_TYPE_LINUX				= 3,
			
		// Mac Application program
		CLIENT_TYPE_MAC					= 4,
			
		// Web，HTML5，Flash
		CLIENT_TYPE_BROWSER				= 5,

		// bots
		CLIENT_TYPE_BOTS				= 6,

		// Mini-Client
		CLIENT_TYPE_MINI				= 7,
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
		
		Script version mismatch

	onKicked
		
		Kicked of the current server

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

	onReloginGatewayFailed
		
		relogin to baseapp failed.


	onCreatedProxies
		
		Server to create player(Proxy entity with server)

	onUpdatePropertysOptimized
		
		Update entity properties(Optimized)

	onUpdatePropertys
		
		Update entity properties

	onRemoteMethodCallOptimized
		
		Server call entity method(Optimized)

	onRemoteMethodCall
		
		Server call entity method

	onEntityEnterWorld
		
		Entity enter the client-world

	onEntityLeaveWorld
		
		Entity leave the client-world

	onEntityLeaveWorldOptimized
		
		Entity leave the client-world(Optimized)

	onEntityEnterSpace
		
		Player enter the new space

	onEntityLeaveSpace
		
		Player enter the space

	onCreateAccountResult
		
		Create account feedback results

	initSpaceData
		
		Server spaceData initialization data

	setSpaceData
		
		Server spaceData set data

	delSpaceData
		
		Server spaceData delete data

	onEntityDestroyed
		
		Entity is destroyed

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

		reloginGateway
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