---
layout: docs_cn
title: Global Configuration · Docs · KBEngine
tab: docs
docsitem: configuration-kbengine
---

服务端配置({assets}/res/server/kbengine.xml)
===================

如果你需要改变引擎设置, 请在({assets}/res/server/kbengine.xml)中覆盖kbe/res/server/[kbengine_defs.xml]的对应参数来修改, 
这样的好处是不会破坏引擎的默认设置，在你更新引擎时也不会产生冲突，以及在多个逻辑项目时不会影响到其他的项目设置。


----------------------------------------
###重载默认配置的例子:

	<root>
		<trace_packet>
			<debug_type>0</debug_type>
		</trace_packet>
		
		<app_publish>0</app_publish>
		
		<!-- defined => kbe/res/server/kbengine_defs.xml -->
		<dbmgr>
			<host> localhost </host>
			<databaseName> kbe </databaseName>
		</dbmgr>
	</root>


[kbengine_defs.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html