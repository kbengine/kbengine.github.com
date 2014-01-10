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


### 2: Def file to create a directory in `res/scripts/entity_defs`

For example: Account.def


### 3: You may also need to define some properties and methods


### 4: In the `demo/res/scripts/`, base and cell or client add xxx.py
Not every entity needs to create three parts(client, base, cell), press need to select.






-----------------------------------------------

download: 
[rpgdemo_project.tar]



[rpgdemo_project.tar]: {{ site.baseurl }}/assets/other/rpgdemo_project.tar