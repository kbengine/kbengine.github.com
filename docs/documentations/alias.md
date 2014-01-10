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

	VECTOR2			8
	VECTOR3			12
	VECTOR4			16

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

The main use type alias:

* Developers can more easily understand the meaning of a type

* You can define complex custom type

* Engine can automatically identify the network transmission and storage


Path definition file : `demo/res/scripts/entity_defs/alias.xml`

------------------------------------------
### Simple type alias

	<BOOL> 		UINT8	</BOOL>
	<ENTITY_ID>	INT32	</ENTITY_ID>

	<ENTITY_FORBID_COUNTER> ARRAY <of> INT8		</of>		</ENTITY_FORBID_COUNTER>
	<ENTITYID_LIST> 	ARRAY <of> ENTITY_ID	</of>		</ENTITYID_LIST>

### Fixed dictionary type alias

Data structures can be used as a dictionary like python, the engine can be identified in the storage and network transmission based on the definition.

The basic format:

	<typename> FIXED_DICT

	       // (Optional implementation)
	       // By the user decides: Use this module (xxx.inst) to this data structure in the memory data structure
	       // When the engine for data storage or network transmission of this data structure must be restored
	       <implementedBy> xxx.inst </implementedBy>

	      //This data structure member
	       <Properties>

			// dictionary of key
			<typeAliasName> 
				// dictionary of value
				<Type> typename </Type>
			</typeAliasName>

	       </Properties>
	</typename>
	
About implementedBy
see also :[Custom types]

### Example:

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
	
Memory in the form:

        AVATAR_INFOS = {"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}

-----------------------------------------------

	<AVATAR_INFOS_LIST>	FIXED_DICT
		<implementedBy>AVATAR_INFOS.inst</implementedBy>
		<Properties>
			<values>
				<Type>	ARRAY <of> AVATAR_INFOS </of>	</Type>
			</values>
		</Properties>
	</AVATAR_INFOS_LIST>	
	
Memory in the form:

If you do not implementedBy

        AVATAR_INFOS_LIST = {"values" : [{"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}, 
				{"dbid" : 2, "name" : "kbengine1", "roleType" : 2, "level" : 1}]
	
	
If you have implementedBy may become, Specific implementations look.
Here we assume that the dictionary is implemented as

        AVATAR_INFOS_LIST = {"kbengine" : {"dbid" : 1, "name" : "kbengine", "roleType" : 1, "level" : 0}, 
				"kbengine1" : {"dbid" : 2, "name" : "kbengine1", "roleType" : 2, "level" : 1}}

-----------------------------------------------

	<BAG>	FIXED_DICT
		<Properties>
			<values>
				<Type>	ARRAY <of> ARRAY <of>INT64 </of> </of>	</Type>
			</values>
		</Properties>
	</BAG>	

Memory in the form:

        BAG = {"values" : [[1,2,3], [4,5,6], [7,8,9]]}




[Custom types]: {{ site.baseurl }}/docs/documentations/customtypes.html