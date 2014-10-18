---
layout: docs
title: Type the alias · Docs · KBEngine
tab: docs
docsitem: documentation-alias
---

Type the alias
====================

Base Script Types
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



Define an alias
------------------------------------------

Why use a type alias?

* Developers can more easily understand the meaning of a type

* You can define complex custom type

* Engine can automatically identify the type of data for network transmission and storage


Path definition file : `demo/res/scripts/entity_defs/alias.xml`

------------------------------------------
### Simple type alias

	<BOOL> 		UINT8	</BOOL>
	<ENTITY_ID>	INT32	</ENTITY_ID>

	<ENTITY_FORBID_COUNTER> ARRAY <of> INT8		</of>		</ENTITY_FORBID_COUNTER>
	<ENTITYID_LIST> 	ARRAY <of> ENTITY_ID	</of>		</ENTITYID_LIST>

### Fixed dictionary type alias(FIXED_DICT)

Data structures can be used as a dictionary like Python, the engine can be identified in the storage and network transmission based on the definition.

The basic format:

	<typename> FIXED_DICT

	       // (Optional implementation)
	       // Allows the user to re-define the data structure in memory in the form of existence, 
	       // When the engine for data storage or network transmission of this data structure must be restored
	       <implementedBy> xxx.inst </implementedBy>

	      // This data structure member
	       <Properties>

			// dictionary of key
			<keyName> 
				// dictionary of value
				<Type> typename </Type>
			</keyName>

	       </Properties>
	</typename>
	
About implementedBy
see also :[Custom types]

----------------------------------------------

### Example1:

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
	
The default format in memory(If you do not implementedBy):

        AVATAR_INFOS = {"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}

-----------------------------------------------

### Example2:

	<AVATAR_INFOS_LIST>	FIXED_DICT
		<implementedBy>AVATAR_INFOS.inst</implementedBy>
		<Properties>
			<values>
				<Type>	ARRAY <of> AVATAR_INFOS </of>	</Type>
			</values>
		</Properties>
	</AVATAR_INFOS_LIST>	
	
The default format in memory(If you do not implementedBy):

        AVATAR_INFOS_LIST = {"values" : [{"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}, 
				{"dbid" : 2, "name" : "kbengine1", "roleType" : 2, "level" : 1}]}
	
	
If you have implementedBy may become, Specific implementations look.
Here we assume that the dictionary is implemented as

        AVATAR_INFOS_LIST = {"kbengine" : {"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}, 
				"kbengine1" : {"dbid" : 2, "name" : "kbengine1", "roleType" : 2, "level" : 1}}

-----------------------------------------------

### Example3:

	<BAG>	FIXED_DICT
		<Properties>
			<values>
				<Type>	ARRAY <of> ARRAY <of>INT64 </of> </of>	</Type>
			</values>
		</Properties>
	</BAG>	

The default format in memory(If you do not implementedBy):

        BAG = {"values" : [[1,2,3], [4,5,6], [7,8,9]]}




[Custom types]: {{ site.baseurl }}/docs/programming/customtypes.html