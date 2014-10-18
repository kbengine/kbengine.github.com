---
layout: docs_cn
title: Type the alias · Docs · KBEngine
tab: docs
docsitem: documentation-alias
---

类型别名
====================

脚本基础类型
------------------------------------------

	[Name]			[Size]

	UINT8			1
	UINT16			2
	UINT32			4
	UINT64			8

	INT8			1
	INT16			2
	INT32			4
	INT64			8

	FLOAT			4
	DOUBLE			8

	VECTOR2			12
	VECTOR3			16
	VECTOR4			20

	STRING			N
	UNICODE			N
	PYTHON			N
	PY_DICT			N
	PY_TUPLE		N
	PY_LIST			N
	MAILBOX			N
	BLOB			N



定义一个类型别名
------------------------------------------

为什么要使用类型别名?


* 开发人员可以更容易的理解类型的含义

* 您可以定义复杂的自定义类型

* 引擎可以自动识别数据类型进行网络传输和存储


文件目录地址 : `demo/res/scripts/entity_defs/alias.xml`

------------------------------------------
### 简单的别名

	<BOOL> 		UINT8	</BOOL>
	<ENTITY_ID>	INT32	</ENTITY_ID>

	<ENTITY_FORBID_COUNTER> ARRAY <of> INT8		</of>		</ENTITY_FORBID_COUNTER>
	<ENTITYID_LIST> 	ARRAY <of> ENTITY_ID	</of>		</ENTITYID_LIST>

### 定义固定字典类型(FIXED_DICT)

数据结构可以是一个类似于Python字典的结构，引擎可以根据用户的定义将这样一个结构的数据通过网络传输到目的地并还原成该结构，或者存储到数据库中以及从数据库中还原。

基本格式如下:

	<类型名称> FIXED_DICT

	       // (可选实现)
	       // 使用此模块(xxx.inst)允许用户重定义该数据结构在内存中存在的形式，
	       // 当引擎进行数据存储或进行网络传输时必须还原成引擎原本的数据结构，引擎才可以识别和进行相关操作。
	       <implementedBy> xxx.inst </implementedBy>

	      // 这个数据结构的成员
	       <Properties>

			// 字典的key
			<keyName> 
				// 字典的值
				<Type> 类型名称 </Type>
			</keyName>

	       </Properties>
	</类型名称>
	
关于implementedBy机制:
参看: [自定义类型]

----------------------------------------------

### 例子1:

	<AVATAR_INFOS>	FIXED_DICT
		<Properties>
			<dbid>
				<Type>	DBID	</Type>
			</dbid>
			<name>
				<Type>	UNICODE	</Type>
			</name>
			<roleType>
				<Type>	UINT8	</Type>
			</roleType>
			<level>
				<Type>	UINT16	</Type>
			</level>
		</Properties>
	</AVATAR_INFOS>	
	
在内存中的默认形式:

        AVATAR_INFOS = {"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}

-----------------------------------------------

### 例子2:

	<AVATAR_INFOS_LIST>	FIXED_DICT
		<implementedBy>AVATAR_INFOS.inst</implementedBy>
		<Properties>
			<values>
				<Type>	ARRAY <of> AVATAR_INFOS </of>	</Type>
			</values>
		</Properties>
	</AVATAR_INFOS_LIST>	
	
在内存中的默认形式(如果没有实现implementedBy):

        AVATAR_INFOS_LIST = {"values" : [{"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}, 
				{"dbid" : 2, "name" : "kbengine1", "roleType" : 2, "level" : 1}]}
	
如果实现implementedBy， 用户可以将其在内存中存储为如下:

        AVATAR_INFOS_LIST = {"kbengine" : {"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}, 
				"kbengine1" : {"dbid" : 2, "name" : "kbengine1", "roleType" : 2, "level" : 1}}

-----------------------------------------------

### 例子3:

	<BAG>	FIXED_DICT
		<Properties>
			<values>
				<Type>	ARRAY <of> ARRAY <of>INT64 </of> </of>	</Type>
			</values>
		</Properties>
	</BAG>	

在内存中的默认形式(如果没有实现implementedBy):

        BAG = {"values" : [[1,2,3], [4,5,6], [7,8,9]]}




[自定义类型]: {{ site.baseurl }}/cn/docs/programming/customtypes.html