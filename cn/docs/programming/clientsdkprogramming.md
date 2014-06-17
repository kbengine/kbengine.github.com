---
layout: docs_cn
title: Script Programming · Docs · KBEngine
tab: docs
docsitem: sdk-client-programming
---

客户端SDK编程
====================

###客户端类型

	定义在kbengine/kbe/src/lib/cstdkbe/cstdkbe.hpp中:
	enum COMPONENT_CLIENT_TYPE
	{
		// 移动类，手机，平板电脑(可不包含Python脚本，entitydefs协议可使用网络导入)
		CLIENT_TYPE_MOBILE				= 1,

		// 独立的Windows/Linux/Mac应用程序(包含Python脚本，entitydefs解析与检查entitydefs的MD5，原生的)
		CLIENT_TYPE_PC					= 2,
		
		// Web，HTML5，Flash(不包含Python脚本，entitydefs协议可使用网络导入)
		CLIENT_TYPE_BROWSER				= 3,

		// 包含Python脚本，entitydefs解析与检查entitydefs的MD5，原生的
		CLIENT_TYPE_BOTS				= 4,

		// 轻端类，可不包含Python脚本，entitydefs协议可使用网络导入
		CLIENT_TYPE_MINI				= 5,
		...
	};



###服务端错误码
Please to see: [server_errors.xml]



[server_errors.xml]: {{ site.baseurl }}/cn/docs/configuration/server_errors.html
