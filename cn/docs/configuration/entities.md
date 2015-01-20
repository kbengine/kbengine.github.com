---
layout: docs_cn
title: Entities · Docs · KBEngine
tab: docs
docsitem: configuration-entities
---

实体注册文件(<你的资产库>/scripts/entities.xml)
===================

	要新增一个实体类型必须在这个配置文件中注册该实体，通常注册一个实体只需如：<Avatar/>。

	一个实体通常可能会包含cell、base、client三个部分，默认引擎判断实体是否包含某个部分时会检查是否包含某个部分的属性或者方法并且同时检查相关目录（cell、base、client）
	是否存在对应的实体模块，如果检查到任何属性、方法、实体模块，那么引擎判断该实体包含此部分。

	在一些情况下还需要明确设定标记来指明是否包含某个部分。
	例如：在Unity3D插件环境下游戏编程，客户端部分的实体并不会写到scripts/client目录下，而某些实体client部分可能确实没有属性或者方法，但实体需要同步到客户端，如：传送门
	
	那么当插件从服务端去导入注册的实体描述时，很可能不是想要的结果，那么可以强制指定标记来标明实体包含了某部分。

	例如：
		<Account hasClient="true"></Account>
		hasClient表示实体是否包含客户端部分。

	 <root>
	     <Account hasClient="true"></Account><!-- <Account hasCell="true", hasBase="true", hasClient="true"></Account> -->
	     <Avatar/>
	     <Spaces/>
	     <Space/>
	     <Monster/>
	     <NPC/>
	 </root>

