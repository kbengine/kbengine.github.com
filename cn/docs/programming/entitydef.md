---
layout: docs_cn
title: Defining the Entity · Docs · KBEngine
tab: docs
docsitem: documentation-entitydef
---

定义实体
====================

什么时候需要定义实体:

	需要进行数据存储。
	能够方便的远程访问。
	需要引擎管理和监控, 例如: AOI、Trap、等等。
	当灾难发生后服务端可以自动进行灾难的恢复。


什么时候需要定义实体的属性:

	需要进行数据存储。
	实体被迁移后数据仍然有效(仅cellapp会迁移实体，比如跳转场景)。
	当灾难发生后服务端可以自动进行灾难的恢复。


什么时候需要定义实体的方法:

	能够方便的远程访问。


您需要执行以下步骤：
-----------------------------------------

1. 注册实体（详细请参考：[entities.xml]）

	目录地址 : `assets/scripts/entities.xml`

	例子:

		<root>
			<Account hasClient="true"></Account> <!-- <Account hasCell="true", hasBase="true", hasClient="true"></Account> -->
			<Avatar/>
			<Spaces/>
			<Space/>
			<Monster/>
			<NPC/>
			<Gate/>
		</root>


2. 在`assets/scripts/entity_defs`目录下创建一个定义文件

	例子: Account.def


3. 你可能需要定义一些属性和方法

	1. 在`assets/scripts/`目录下有三个子目录(base、cell、client)，你可以根据需要添加Account.py。

	2. 不是每个实体都存在(client, base, cell)这三个部分, 你可以根据需要做出一些选择。


-----------------------------------------


定义文件的格式
-----------------------------------------

	<root>
		// 该实体的父类def
		// 这个标签只在Entity.def中有效，如果本身就是一个接口def则该标签被忽略
		<Parent>	Avatar		</Parent>

		// 易变属性同步控制
		<Volatile>
			// 这样设置则总是同步到客户端
			<position/>
			
			// 没有显式的设置则总是同步到客户端
			<!-- <yaw/> -->

			// 设置为0则不同步到客户端
			<pitch> 0 </pitch>
			
			// 距离10米及以内同步到客户端
			<roll> 10 </roll>
		</Volatile>

		// 注册接口def，类似于C#中的接口
		// 这个标签只在Entity.def中有效，如果本身就是一个接口def则该标签被忽略
		<Implements>
			// 所有的接口def必须写在entity_defs/interfaces中
			<Interface>	GameObject		</Interface>
		</Implements>

		<Properties>
			// 属性名称
			<accountName>
				// 属性类型
				<Type>			UNICODE				</Type>
				
				// (可选)
				// 属性的自定义协议ID，如果客户端不使用kbe配套的SDK来开发，客户端需要开发跟kbe对接的协议,
				// 开发者可以定义属性的ID便于识别，c++协议层使用一个uint16来描述，如果不定义ID则引擎会使用
				// 自身规则所生成的协议ID, 这个ID必须所有def文件中唯一
				<Utype>			1000				</Utype>

				// 属性的作用域 (参考下方:属性作用域章节)
				<Flags>			BASE				</Flags>
				
				// (可选)
				// 是否存储到数据库 
				<Persistent>		true				</Persistent>
				
				// (可选)
				// 存储到数据库中的最大长度 
				<DatabaseLength> 	100				</DatabaseLength>
				
				// (可选， 不清楚最好不要设置)
				// 默认值 
				<Default>		kbengine			</Default>
				
				// (可选)
				// 数据库索引， 支持UNIQUE与INDEX
				<Index>			UNIQUE				</Index>
			</accountName>
			
			...
			...
		</Properties>

		<ClientMethods>
			// 客户端暴露的远程方法名称
			<onReqAvatarList>
				// 远程方法的参数
				<Arg>			AVATAR_INFOS_LIST		</Arg>

				// (可选)
				// 方法的自定义协议ID，如果客户端不使用kbe配套的SDK来开发，客户端需要开发跟kbe对接的协议,
				// 开发者可以定义属性的ID便于识别，c++协议层使用一个uint16来描述，如果不定义ID则引擎会使用
				// 自身规则所生成的协议ID, 这个ID必须所有def文件中唯一
				<Utype>			1001				</Utype>
			</onReqAvatarList>

			...
			...
		</ClientMethods>

		<BaseMethods>
			// Baseapp暴露的远程方法名称
			<reqAvatarList>
				// (可选)
				// 定义了此标记则允许客户端调用,否则仅服务端内部暴露
				<Exposed/> 

				// (可选)
				// 方法的自定义协议ID，如果客户端不使用kbe配套的SDK来开发，客户端需要开发跟kbe对接的协议,
				// 开发者可以定义属性的ID便于识别，c++协议层使用一个uint16来描述，如果不定义ID则引擎会使用
				// 自身规则所生成的协议ID, 这个ID必须所有def文件中唯一
				<Utype>			1002				</Utype>
			</reqAvatarList>
			
			...
			...
		</BaseMethods>

		<CellMethods>
			// Cellapp暴露的远程方法名称
			<hello>
				// (可选)
				// 定义了此标记则允许客户端调用,否则仅服务端内部暴露
				<Exposed/> 

				// (可选)
				// 方法的自定义协议ID，如果客户端不使用kbe配套的SDK来开发，客户端需要开发跟kbe对接的协议,
				// 开发者可以定义属性的ID便于识别，c++协议层使用一个uint16来描述，如果不定义ID则引擎会使用
				// 自身规则所生成的协议ID, 这个ID必须所有def文件中唯一
				<Utype>			1003				</Utype>
			</hello>
		</CellMethods>

	</root>

例子: 在客户端中调用base方法获得角色列表(Account.py):

	 self.base.reqAvatarList()


-----------------------------------------


属性作用域
-----------------------------------------

如果一个属性的作用域分为多个部分，那么在实体的对应部分都存在该属性。

存在于实体多个部分的属性只能从属性的源头进行修改，其他部分会得到同步。

请参考如下表：（S与SC或者C都代表属性包含这个部分，不同的是S代表属性的源头，C代表数据由源头同步，SC代表实体的real部分才是源头，ghosts部分也是被同步过去的）

	[类型]			[ClientEntity]		[BaseEntity]		[CellEntity]
	BASE			-			S			-
	BASE_AND_CLIENT		C			S			-
	CELL_PRIVATE		-			-			S
	CELL_PUBLIC		-			-			SC
	CELL_PUBLIC_AND_OWN	C			-			SC
	ALL_CLIENTS		C(All Clients)		-			SC
	OWN_CLIENT		C			-			S
	OTHER_CLIENTS		C(Other Clients)	-			SC



-----------------------------------------------

下载例子代码: 
[rpgdemo_project.tar]

https://github.com/kbengine/kbengine_demos_assets



[rpgdemo_project.tar]: {{ site.baseurl }}/assets/other/rpgdemo_project.tar
[entities.xml]: {{ site.baseurl }}/cn/docs/configuration/entities.html
