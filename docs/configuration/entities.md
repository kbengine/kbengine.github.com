---
layout: docs
title: Entities · Docs · KBEngine
tab: docs
docsitem: configuration-entities
---

Entity registration file( <<your_assets>>/scripts/entities.xml )
===================

	To add an entity type must be registered here, usually registered an entity only needs such as: <Avatar/>.

	An entity may contain three part(cell, base, client), when the engine to determine whether the entity contains a part, 
	Engine checks include property or method of a part and also check the relevant directory(cell, base, client) the existence of an entity module,
	If checked any of the properties, methods, entity module, then the engine to determine the entities included in this part.

	In some cases, need to be clearly marked to indicate whether the set contains a part.

	For example: 
		In the Unity3D plugin game programming environment, the client part of the entity and not written scripts/client directory, 
		and some parts of the entity client may indeed be no property or method, but entities need to be synchronized to the client, such as: Transfer gate
		Then when the plug from the server to import registered entity description, the results are not likely to want, you can force the specified tag to indicate the entity that contains a certain part.

		<Account hasClient="true"></Account>
		hasClient indicate whether to include the client part of the entity.

	 <root>
	     <Account hasClient="true"></Account><!-- <Account hasCell="true", hasBase="true", hasClient="true"></Account> -->
	     <Avatar/>
	     <Spaces/>
	     <Space/>
	     <Monster/>
	     <NPC/>
	 </root>

