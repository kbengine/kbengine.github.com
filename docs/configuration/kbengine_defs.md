---
layout: docs
title: Server Configuration · Docs · KBEngine
tab: docs
docsitem: configuration-kbengine-defs
---

Server Configuration(kbe/res/server/kbengine_defs.xml)
====================

If you need to change the configuration of the engine, as long as the inheritance ({newproject}[/res/server/kbengine.xml]) 
this configuration file and overwrite the corresponding section kbengine_defs.xml, but doing so will not damage the engine settings, 
there is no conflict in the development along with updated engine or multiple projects.


-----------------------------------------------------
###Detailed configuration:


	<root>
		<!-- Update frequency process -->
		<gameUpdateHertz> 10 </gameUpdateHertz>

		<!-- The data sent to the client, the second bandwidth limit (bit) -->
		<bitsPerSecondToClient> 20000 </bitsPerSecondToClient> <!-- Type: Integer -->
		
		<!-- Non-0 is not optimized, Force all packets contain length information, Some convenient docking protocol client.
		What of data packet length information does not? All packages can be calculated in advance 
		and never change the size of the package with no length information. -->
		<packetAlwaysContainLength>0</packetAlwaysContainLength>
		
		<!-- Whether the contents of the log output packet
			debug_type:
				0: Not output
				1: 16 hexadecimal output
				2: Stringstream output
				3: 10 hexadecimal output
			use_logfile:
				Whether the use of other log files ? such as:
				appname_packetlogs.log
			disable_msgs:
				Some messages are not output
		-->
		<trace_packet>
			<debug_type>0</debug_type>
			<use_logfile>false</use_logfile>
			<disables>
				<item>Baseappmgr::updateBaseapp</item>
				<item>Cellapp::onUpdateDataFromClient</item>
				<item>Baseapp::onUpdateDataFromClient</item>
				<item>Baseapp::forwardMessageToClientFromCellapp</item>
				<item>Client::onUpdateVolatileData</item>
				<item>Client::onUpdateData</item>
				<item>Client::onUpdateBasePos</item>
				<item>Client::onUpdateData_xz</item>
				<item>Client::onUpdateData_xyz</item>
				<item>Client::onUpdateData_y</item>
				<item>Client::onUpdateData_r</item>
				<item>Client::onUpdateData_p</item>
				<item>Client::onUpdateData_ypr</item>
				<item>Client::onUpdateData_yp</item>
				<item>Client::onUpdateData_yr</item>
				<item>Client::onUpdateData_pr</item>
				<item>Client::onUpdateData_xz_y</item>
				<item>Client::onUpdateData_xz_p</item>
				<item>Client::onUpdateData_xz_r</item>
				<item>Client::onUpdateData_xz_yr</item>
				<item>Client::onUpdateData_xz_yp</item>
				<item>Client::onUpdateData_xz_pr</item>
				<item>Client::onUpdateData_xz_ypr</item>
				<item>Client::onUpdateData_xyz_y</item>
				<item>Client::onUpdateData_xyz_p</item>
				<item>Client::onUpdateData_xyz_r</item>
				<item>Client::onUpdateData_xyz_yr</item>
				<item>Client::onUpdateData_xyz_yp</item>
				<item>Client::onUpdateData_xyz_pr</item>
				<item>Client::onUpdateData_xyz_ypr</item>
			</disables>
		</trace_packet>
		
		<!-- Whether the output the logs: create the entity, Script get attributes, 
			Initialization attributes information, Def information. -->
		<debugEntity>0</debugEntity>

		<!-- apps released state, This value can be obtained in the script
			Type: Integer8
			0 : debug
			1 : release
			Other custom
		-->
		<app_publish>0</app_publish>
		
		<cellapps> 1 </cellapps>
		<baseapps> 1 </baseapps>
		
		<channelCommon> 
			<!-- If long (configurable value) no communication, channel will be kicked out of the server. -->
			<timeout> 
				<internal> 60.0 </internal>
				<external> 60.0 </external>
			</timeout>

			<!-- Send retry max-time and max-count -->
			<resend> 
				<internal> 
					<interval> 10 </interval>					<!-- Millisecond -->
					<retries> 0 </retries>						<!-- Retry count, 0 is unlimited -->
				</internal>
				<external>
					<interval> 10 </interval>					<!-- Millisecond -->
					<retries> 3 </retries>						<!-- Retry count, 0 is unlimited -->
				</external>
			</resend>
			
			<!-- socket读写缓冲大小 -->
			<readBufferSize> 
				<internal>	16777216	</internal> 				<!-- 16M -->
				<external>	0		</external>				<!-- system default -->
			</readBufferSize>
			<writeBufferSize> 
				<internal>	16777216	</internal>				<!-- 16M -->
				<external>	0		</external>				<!-- system default -->
			</writeBufferSize>
			
			<!-- A tick, the value of the receive window overflow, 0 is unlimited -->
			<receiveWindowOverflow>
				<messages>
					<critical>	32			</critical>
					<internal>	65535			</internal>
					<external>	256			</external>
				</messages>
				<bytes>
					<internal>	0			</internal>
					<external>	65535			</external>
				</bytes>
			</receiveWindowOverflow>
			
			<!-- Encrypted communication, channel-external only
				Optional encryption:
					0: No Encryption
					1: Blowfish
					2: RSA (res\key\kbengine_private.key)
			 -->
			<encrypt_type> 1 </encrypt_type>
		</channelCommon> 
		
		<!-- Countdown to shutdown the server(seconds) -->
		<shutdown_time> 60.0 </shutdown_time>

		<!-- Shutdown the server, if you have not completed the task, the server needs to wait for the end of the mission.
		Time(seconds) for each waiting. -->
		<shutdown_waittick> 1.0 </shutdown_waittick>
		
		<!-- The callback: default timeout(seconds) -->
		<callback_timeout> 300.0 </callback_timeout>
		
		<thread_pool>
			<!-- default timeout(seconds) -->
			<timeout> 300.0 </timeout>
			
			<init_create> 1 </init_create>
			<pre_create> 2 </pre_create>
			<max_create> 8 </max_create>
		</thread_pool>
		
		<!-- Email services, providing the account verification, password recovery, etc. -->
		<email_service_config>server/email_service.xml</email_service_config>
			
		<billingSystem>
			<!-- 
				Account Type:
				normal: default handling the current process, 
				thirdparty: handled by third-party service providers 
			-->
			<accountType> normal </accountType>
			
			<!-- 
				Charge Type:
				normal: default handling the current process, 
				thirdparty: handled by third-party service providers 
			-->
			<chargeType> normal </chargeType>
			
			<!-- billingSystem address, multiple gameserver can share a billingSystem -->
			<host> localhost </host>
			<port> 30099 	</port>
			
			<!-- Orders timeout(seconds) -->
			<orders_timeout> 3600 	</orders_timeout>
			
			<!-- Third-party account service interfaces, such as: www.google.com, 
				When the accountType is thirdparty, is valid.
			-->
			<thirdpartyAccountService_addr></thirdpartyAccountService_addr>
			<thirdpartyAccountService_port> 80 </thirdpartyAccountService_port>
			
			<!-- Third-party charge service interfaces, such as: www.google.com, 
				When the chargeType is thirdparty, is valid. 
			-->
			<thirdpartyChargeService_addr></thirdpartyChargeService_addr>
			<thirdpartyChargeService_port> 80 </thirdpartyChargeService_port>
			
			<!-- billingSystem and third-party service providers collaborate callback address-->
			<thirdpartyService_cbport> 30040 </thirdpartyService_cbport>
			
			<!-- listen: Maximum listen queue -->
			<SOMAXCONN> 128 </SOMAXCONN>
		</billingSystem>
		
		<dbmgr>
			<!-- Name of AccountEntity -->
			<dbAccountEntityScriptType>	Account	</dbAccountEntityScriptType>
			
			<!-- Do not check defs-MD5 -->
			<allowEmptyDigest> false </allowEmptyDigest>								<!-- Type: Boolean -->
			
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
			
			<!-- Default flags a new account, Can be combined, Fill in decimal format when
				normal flag	= 0x00000000
				lock flag	= 0x000000001
				normal flag	= 0x000000002
			-->
			<accountDefaultFlags> 0 </accountDefaultFlags>								<!-- Type: Integer -->

			<!-- New account default expiration time (seconds, the engine will add the current time) -->
			<accountDefaultDeadline> 0 </accountDefaultDeadline>							<!-- Type: Integer -->
			
			<!-- Database type -->
			<type> mysql </type>											<!-- Type: String -->

			<!-- Database address -->
			<host> localhost </host>										<!-- Type: String -->
			<port> 0 </port>											<!-- Type: Integer -->
			
			<!-- Database auth -->
			<auth>  
				<username> kbe </username>									<!-- Type: String -->
				<password> kbe </password>									<!-- Type: String -->

				<!-- is true, password is RSA -->
				<encrypt> true </encrypt>
			</auth>
			
			<!-- Database name -->
			<databaseName> kbe </databaseName> 									<!-- Type: String -->

			<!-- Number of connections allowed by the database -->
			<numConnections> 5 </numConnections>									<!-- Type: Integer -->
			
			<!-- Character encoding type -->
			<unicodeString>
				<characterSet> utf8 </characterSet> 								<!-- Type: String -->
				<collation> utf8_bin </collation> 								<!-- Type: String -->
			</unicodeString>
			
			<!-- When logged in, the game database can not find the game account is automatically created -->
			<notFoundAccountAutoCreate> true </notFoundAccountAutoCreate>
		</dbmgr>
		
		<cellapp>
			<!-- Entry module, like the main-function -->
			<entryScriptFile> kbengine </entryScriptFile>
			
			<!-- Default AOI radius, the script can change it -->
			<defaultAoIRadius>			
				<radius> 80.0 </radius>
				<hysteresisArea> 5.0 </hysteresisArea>
			</defaultAoIRadius>
			
			<!-- Optimization EntityID，AOI the Entity is less than 255, 
			use an aliasID(1byte) transmitted to the client -->
			<aliasEntityID> true </aliasEntityID>
			
			<!-- Entity client (property or a method) is less than 256, using 1 byte transmission. -->
			<entitydefAliasID>true</entitydefAliasID>
			
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
			
			<!-- The entityID allocator, enter the overflow area will get the new ID's. -->
			<ids>
				<criticallyLowSize> 500 </criticallyLowSize>				<!-- Type: Integer -->
			</ids>
			
			<!-- Analysis of program performance -->
			<profiles>
				<!-- if is true, Engine start is completed, start to record profile information, 
					Process exit will export a report.
				-->
				<cprofile> false </cprofile>
				<pyprofile> false </pyprofile>
				<eventprofile> false </eventprofile>
				<mercuryprofile> false </mercuryprofile>
			</profiles>
			
			<ghostDistance> 500.0 </ghostDistance>
			<ghostingMaxPerCheck> 64 </ghostingMaxPerCheck> <!-- Type: Integer -->
			<ghostUpdateHertz> 50 </ghostUpdateHertz> <!-- Type: Integer -->
			
			<!-- Whether the use of coordinate-system, if is false, 
			AOI, Trap, Move and other functions will not be available -->
			<coordinate_system> 
				<enable> true </enable>
				
				<!-- is maintenance Y axis? Note: Management y axis, AOI、Trap and other functions with the height,
				When the entity space within little more useful when, Otherwise, 
				the management of the y-axis will produce some consumption 
				-->
				<rangemgr_y> false </rangemgr_y>
			</coordinate_system>
			
			<!-- Telnet service, if the port is occupied backwards to try 50001 -->
			<telnet_service>
				<port> 50000 </port>
				<password> kbe </password>
				<!-- layer of default the command -->
				<default_layer> python </default_layer>
			</telnet_service>
			
			<!-- Parameter server shutdown process -->
			<shutdown>
				<!-- In per-seconds, The destruction of the number of entity's(has base) -->
				<perSecsDestroyEntitySize> 15 </perSecsDestroyEntitySize>
			</shutdown>
			
			<!-- Who is witness? Player is witness, The observed information will be synchronized to the client -->
			<witness>
				<!-- 观察者 timeout超时(秒) Integer-->
				<timeout> 15 </timeout>
			</witness>
		</cellapp>
		
		<baseapp>
			<entryScriptFile> kbengine </entryScriptFile>
			
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
			<externalInterface>  </externalInterface>						<!-- Type: String -->

			<externalPorts_min> 20015 </externalPorts_min>					<!-- Type: Integer -->
			<externalPorts_max> 20019 </externalPorts_max>					<!-- Type: Integer -->
			
			<archivePeriod> 100 </archivePeriod> 							<!-- Type: Float -->
			<backupPeriod> 10 </backupPeriod>								<!-- Type: Float -->
			<backUpUndefinedProperties> 0 </backUpUndefinedProperties>		<!-- Type: Boolean -->
			
			<loadSmoothingBias> 0.01 </loadSmoothingBias>
			
			<downloadStreaming>
				<bitsPerSecondTotal> 1000000 </bitsPerSecondTotal>			<!-- Type: Int -->
				<bitsPerSecondPerClient> 100000 </bitsPerSecondPerClient>	<!-- Type: Int -->
			</downloadStreaming>
			
			<!-- The entityID allocator, enter the overflow area will get the new ID's. -->
			<ids>
				<criticallyLowSize> 500 </criticallyLowSize>				<!-- Type: Integer -->
			</ids>
			
			<!-- entity restore每tick数量 -->
			<entityRestoreSize> 32 </entityRestoreSize>
			
			<profiles>
				<!-- 如果设置为true，引擎启动时就会开始记录相关profile信息， 退出时导出一份记录 -->
				<cprofile> false </cprofile>
				<pyprofile> false </pyprofile>
				<eventprofile> false </eventprofile>
				<mercuryprofile> false </mercuryprofile>
			</profiles>
			
			<!-- listen: Maximum listen queue -->
			<SOMAXCONN> 128 </SOMAXCONN>
			
			<!-- 如果被占用则向后尝试40001.. -->
			<telnet_service>
				<port> 40000 </port>
				<password> kbe </password>
				<!-- 命令默认层 -->
				<default_layer> python </default_layer>
			</telnet_service>
			
			<!-- Parameter server shutdown process -->
			<shutdown>
				<!-- In per-seconds, The destruction of the number of base's -->
				<perSecsDestroyEntitySize> 15 </perSecsDestroyEntitySize>
			</shutdown>
			
			<respool>
				<!-- 缓冲区大小也等于资源大小， 在这个KB大小范围以内的资源才可以进入资源池 -->
				<buffer_size> 1024 </buffer_size>

				<!-- 资源池中的资源超过这个时间未被访问则销毁(秒) -->
				<timeout> 600 </timeout>

				<!-- 资源池检查tick(秒) -->
				<checktick>60</checktick>
			</respool>
		</baseapp>
		
		<cellappmgr>
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
		</cellappmgr>
		
		<baseappmgr>
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
		</baseappmgr>
		
		<loginapp>
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
			<externalInterface>  </externalInterface>						<!-- Type: String -->

			<externalPorts_min> 20013 </externalPorts_min>					<!-- Type: Integer -->
			<externalPorts_max> 0 </externalPorts_max>						<!-- Type: Integer -->
			
			<!-- The encrypted user login information
				Optional encryption:
					0: No Encryption
					1: Blowfish
					2: RSA (res\key\kbengine_private.key)
			 -->
			<encrypt_login> 2 </encrypt_login>
			
			<!-- listen: Maximum listen queue -->
			<SOMAXCONN> 128 </SOMAXCONN>
			
			<!-- 
				1: 普通账号
				2: email账号(需要激活)
				3: 智能账号(自动识别email， 普通号码等) 
			-->
			<account_type> 3 </account_type>
			
			<!-- 用户http回调接口，处理认证、密码重置等 -->
			<http_cbhost> localhost </http_cbhost>
			<http_cbport> 21103 </http_cbport>
		</loginapp>		
		
		<kbmachine>
			<externalPorts_min> 20099 </externalPorts_min>					<!-- Type: Integer -->
			<externalPorts_max> 0 </externalPorts_max>						<!-- Type: Integer -->
		</kbmachine>
		
		<bots>
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>

			<!-- loginapp address -->
			<host> localhost </host>										<!-- Type: String -->
			<port> 20013 </port>											<!-- Type: Integer -->
			
			<!-- 默认启动进程后自动添加这么多个bots 
				totalcount： 添加总数量
				ticktime： 每次添加所用时间(s)
				tickcount： 每次添加数量
			-->
			<defaultAddBots> 
				<totalcount> 10  </totalcount> <!-- Type: Integer -->
				<ticktime> 0.1  </ticktime> <!-- Type: Float -->
				<tickcount> 2  </tickcount> <!-- Type: Integer -->
			</defaultAddBots>							
		</bots>
		
		<messagelog>
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
		</messagelog>
		
		<resourcemgr>
			<!-- Name of the interface(NIC) -->
			<internalInterface>  </internalInterface>
			
			<downloadStreaming>
				<bitsPerSecondTotal> 1000000 </bitsPerSecondTotal>			<!-- Type: Int -->
				<bitsPerSecondPerClient> 100000 </bitsPerSecondPerClient>	<!-- Type: Int -->
			</downloadStreaming>
			
			<!-- listen: Maximum listen queue -->
			<SOMAXCONN> 128 </SOMAXCONN>
			
			<respool>
				<!-- 缓冲区大小也等于资源大小， 在这个KB大小范围以内的资源才可以进入资源池 -->
				<buffer_size> 1024 </buffer_size>
				<!-- 资源池中的资源超过这个时间未被访问则销毁(秒) -->
				<timeout> 600 </timeout>
				<!-- 资源池检查tick(秒) -->
				<checktick>60</checktick>
			</respool>
		</resourcemgr>
	</root>


[kbengine.xml]: {{ site.baseurl }}/docs/configuration/kbengine.html