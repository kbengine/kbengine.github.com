---
layout: docs_cn
title: Entities · Docs · KBEngine
tab: docs
docsitem: configuration-entities
---

实体注册文件(kbengine/<你的资产库，默认是assets>/scripts/entities.xml)
===================

	要新增一个实体类型必须在这个配置文件中注册该实体，通常注册一个实体只需要如：<Avatar/>。

	在一些情况下需要额外的增加一些标记来描述实体是否存在某个部分(例如：client)。
	引擎判断实体是否存在某个部分默认只是检查是否包含某个部分的属性或者方法，如果实体不存在该部分的任何属性或者方法(但实体是包含此部分的)，引擎判断该实体不包含此部分，那么当一些插件从服务端
	去导入注册的实体描述时，很可能不是想要的结果，那么可以强制指定标记来标明实体包含了某部分。

	(注意：如果cell、base、client下存在某个实体的模块，引擎也判定为包含某部分。因此标签通常只用来设置是否包含client部分)
	 <root>
	     <Account hasClient="true"></Account><!-- <Account hasCell="true", hasBase="true", hasClient="true"></Account> -->
	     <Avatar/>
	     <Spaces/>
	     <Space/>
	     <Monster/>
	     <NPC/>
	 </root>

