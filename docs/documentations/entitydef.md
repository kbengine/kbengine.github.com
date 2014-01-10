---
layout: docs
title: Defining the Entity · Docs · KBEngine
tab: docs
docsitem: documentation-entitydef
---

Defining the Entity
====================

What needs to be defined Entity:

* Stored in the database

* Ability to facilitate remote access

* Need to manage and monitor its engines, such as: AOI, Trap wait

* When a disaster recovery server can automatically recover


You need to perform the following steps:
-----------------------------------------

### 1: Registration

Path definition file : `demo/res/scripts/entities.xml`

Example:

	<root>
		<Account/>
		<Avatar/>
		<Spaces/>
		<Space/>
		<Monster/>
		<NPC/>
		<Gate/>
	</root>


### 2: Def file to create a directory in [`res/scripts/entity_defs`]

For example: Account.def


### 3: You may also need to define some properties and methods







-----------------------------------------------

Def file format
-----------------------------------------

	<root>
		<Properties>
			// Property Name
			<accountName>
				// Property type
				<Type>			UNICODE				</Type>

				// Property Scopes
				<Flags>			BASE				</Flags>

				// Is stored in the database (optional)
				<Persistent>		true				</Persistent>

				// The maximum length is stored in the database (optional)
				<DatabaseLength> 	100				</DatabaseLength>

				// Default value (optional)
				<Default>		kbengine			</Default>

				// mysql Identifier (optional)
				<Identifier>		true				</Identifier>
			</accountName>
			
			...
			...
		</Properties>

		<ClientMethods>
			// remote method Name
			<onReqAvatarList>
				// remote method args type
				<Arg>	AVATAR_INFOS_LIST	</Arg>
			</onReqAvatarList>

			...
			...
		</ClientMethods>

		<BaseMethods>
			// remote method Name
			<reqAvatarList>
				<Exposed/>
			</reqAvatarList>
			
			...
			...
		</BaseMethods>

		<CellMethods>
			<hello>
			</hello>
		</CellMethods>

	</root>

For example: In a client to get a list of server roles(Account.py):

	 self.base.reqAvatarList()


-----------------------------------------------
download: 
[rpgdemo_project.tar]



[rpgdemo_project.tar]: {{ site.baseurl }}/assets/other/rpgdemo_project.tar