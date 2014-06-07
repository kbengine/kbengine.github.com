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

* Need to manage and monitor its engines, such as: AOI, Trap, etc...

* When a disaster recovery server can automatically recover


You need to perform the following steps:
-----------------------------------------

1. Registration of Entity

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


2. Def file to create a directory in `res/scripts/entity_defs`

	For example: Account.def


3. You may also need to define some properties and methods

	1. In the `demo/res/scripts/` directory has three subdirectories (base, cell, client), you can add Account.py needed.

	2. Not every entity needs to create three parts(client, base, cell), press need to select.


-----------------------------------------


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

				// Mysql Identifier (optional)
				<Identifier>		true				</Identifier>
			</accountName>
			
			...
			...
		</Properties>

		<ClientMethods>
			// Remote Method name of the Client exposure
			<onReqAvatarList>
				// remote method args type
				<Arg>	AVATAR_INFOS_LIST	</Arg>
			</onReqAvatarList>

			...
			...
		</ClientMethods>

		<BaseMethods>
			// Remote Method name of the Baseapp exposure
			<reqAvatarList>
				<Exposed/> // cell exposure method must exist this tag
			</reqAvatarList>
			
			...
			...
		</BaseMethods>

		<CellMethods>
			// Remote Method name of the Cellapp exposure
			<hello>
			</hello>
		</CellMethods>

	</root>

For example: Call the base method in the client to get a list of roles (Account.py):

	 self.base.reqAvatarList()


-----------------------------------------


Propertie Scope
-----------------------------------------

	[type]			[client]		[base]			[cell]
	BASE			-			*			-
	BASE_AND_CLIENT		*			*			-
	CELL_PRIVATE		-			-			*(cell)
	CELL_PUBLIC		-			-			*(cells)
	CELL_PUBLIC_AND_OWN	*(client)		-			*(cells)
	ALL_CLIENTS		*(clients)		-			*(cells)
	OWN_CLIENT		*(client)		-			*(cell)
	OTHER_CLIENTS		*(other clients)	-			*(cells)



-----------------------------------------------

download(example): 
[rpgdemo_project.tar]



[rpgdemo_project.tar]: {{ site.baseurl }}/assets/other/rpgdemo_project.tar