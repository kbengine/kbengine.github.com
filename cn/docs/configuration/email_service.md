---
layout: docs_cn
title: Global Configuration · Docs · KBEngine
tab: docs
docsitem: configuration-emailservice
---

kbengine/kbe/res/server/email_service.xml
===================

	<root>
		<smtp_server> smtp.163.com </smtp_server>

		<smtp_port> 25 </smtp_port>

		<!-- 认证模式 LOGIN=1, PLAIN=2-->
		<smtp_auth>2</smtp_auth>

		<username> xxx@163.com </username>
		<password> ****** </password>

		<email_activation>
			<subject>账号激活</subject>

			<!-- 邮件验证有效期 -->
			<deadline> 259200 </deadline>

			<message>
			</message>
			
			<backlink_hello_message></backlink_hello_message>
			
			<backlink_success_message>
			</backlink_success_message>
			
			<backlink_fail_message>
			</backlink_fail_message>
		</email_activation>
		
		<email_resetpassword>
			<subject>重置账号</subject>

			<!-- 邮件验证有效期 -->
			<deadline> 3600 </deadline>

			<message>
			</message>
			
			<backlink_hello_message>
			</backlink_hello_message>
			
			<backlink_fail_message>
			</backlink_fail_message>
		</email_resetpassword>
		
		<email_bind>
			<subject>邮箱绑定</subject>

			<!-- 邮件验证有效期 -->
			<deadline> 3600 </deadline>

			<message>
			</message>
			
			<backlink_hello_message></backlink_hello_message>
			
			<backlink_success_message>
			</backlink_success_message>
			
			<backlink_fail_message>
			</backlink_fail_message>
		</email_bind>
	</root>

