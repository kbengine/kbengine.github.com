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






-----------------------------------------------

download: 
[rpgdemo_project.tar]



[rpgdemo_project.tar]: {{ site.baseurl }}/assets/other/rpgdemo_project.tar