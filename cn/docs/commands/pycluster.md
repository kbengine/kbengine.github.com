---
layout: docs_cn
title: Pycluster Commands · Docs · KBEngine
tab: docs
docsitem: commands-pycluster
---

集群控制命令
================

目录地址: 
	kbe/tools/server/pycluster/cluster_controller.py


-----------------------------------------------------
### 查询服务端信息:

	[kbe@gameserver ~]$ python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py
	[kbe@gameserver ~]$ python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py query

	/-----------------------------------------------------
	[kbmachine: %CPU:16.24, %MEM:13.54, %pCPU:0.00, pMem:11.79m, totalMem=1070.44m/7908.32m, addr=192.168.11.11]
	      proc              cid             uid     pid     gid     %CPU    %MEM    usedMem extra1          extra2          extra3
	|-    loginapp  1657324666764709631     500     2682    23      0.11    0.47    37.45m  0               0               0
	|-     baseapp1 1080863912448030096     500     27131   15      1.28    0.79    62.71m  bases=125               clients=60      proxices=120
	|-     baseapp2 1152921505798081463     500     27610   16      0.87    0.77    61.02m  bases=107               clients=52      proxices=104
	|-     baseapp3 1224979099450159447     500     28097   17      0.89    0.78    61.63m  bases=110               clients=53      proxices=107
	|-     baseapp4 1297036693135742534     500     28572   18      0.88    0.77    60.88m  bases=93                clients=45      proxices=90
	|-     baseapp5 1369094286838111473     500     29050   19      0.88    0.77    60.51m  bases=124               clients=61      proxices=121
	|-     baseapp6 1441151884785180883     500     29530   20      0.88    0.77    60.65m  bases=106               clients=52      proxices=103
	|-     baseapp7 1513209478470765373     500     29993   21      1.03    0.77    61.11m  bases=126               clients=62      proxices=124
	|-     baseapp8 1585267072156340434     500     30461   22      0.81    0.78    61.57m  bases=83                clients=40      proxices=80
	/-----------------------------------------------------
	[kbmachine: %CPU:5.29, %MEM:11.81, %pCPU:0.00, pMem:11.86m, totalMem=934.02m/7908.32m, addr=192.168.11.12]
	      proc              cid             uid     pid     gid     %CPU    %MEM    usedMem extra1          extra2          extra3
	|-       dbmgr  288230377158391198      500     17940   4       0.64    0.73    57.68m  0               0               0
	|-  baseappmgr  360287971162772698      500     17941   5       1.27    0.45    35.62m  0               0               0
	|-  cellappmgr  432345565217478829      500     17942   6       0.00    0.16    12.74m  0               0               0
	|-     billing  144115189132878121      500     17939   2       0.00    0.49    38.73m  0               0               0
	/-----------------------------------------------------
	[kbmachine: %CPU:2.48, %MEM:11.65, %pCPU:0.00, pMem:11.82m, totalMem=921.06m/7908.32m, addr=192.168.11.13]
	      proc              cid             uid     pid     gid     %CPU    %MEM    usedMem extra1          extra2          extra3
	|-     cellapp1 504403161688137595      500     30217   7       0.35    0.66    52.17m  entities=49     cells=0         0
	|-     cellapp2 576460755071688378      500     30221   8       0.35    0.64    50.66m  entities=47     cells=0         0
	|-     cellapp3 648518348774108774      500     30225   9       0.34    0.64    50.51m  entities=54     cells=0         0
	|-     cellapp4 720575942459711730      500     30229   10      0.38    0.64    50.85m  entities=55     cells=0         0
	|-     cellapp5 792633536145339277      500     30233   11      0.37    0.64    50.59m  entities=39     cells=0         0
	|-     cellapp6 864691129830946700      500     30237   12      0.33    0.64    50.61m  entities=56     cells=0         0
	|-     cellapp7 936748723516524832      500     30241   13      0.35    0.64    50.58m  entities=32     cells=0         0
	|-     cellapp8 1008806317202177300     500     30245   14      0.33    0.64    50.47m  entities=59     cells=0         0
	/-----------------------------------------------------
	machines: 3, components=21, numBases=874, numProxices=849, numClients=425, numEntities=391, numCells=0.


-----------------------------------------------------
### 启动服务端:

	[kbe@gameserver ~]$ python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py start
	[kbe@gameserver ~]$ python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py start dbmgr|baseappmgr|cellappmgr|baseapp|cellapp|cellapp|loginapp


-----------------------------------------------------
### 关闭服务端:

	[kbe@gameserver ~]$ python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py stop


-----------------------------------------------------
### 脚本控制台:

	[kbe@gameserver ~]$ python $KBE_ROOT/kbe/tools/server/pycluster/cluster_controller.py console cellapp1
	Trying 192.168.11.15...
	Connected to . (192.168.11.15).
	Escape character is '^]'.
	password:kbe	(Set in the [kbengine_defs.xml]->telnet_service->password)
	welcome to cellapp 
	Version: 0.0.1. Config: Hybrid64. Built: 10:53:47 Nov 20 2013. AppUID: 504403161688137595. UID: 500. PID: 30217
	/---------------------------------------------
	Command List:
	[:help          ]: list commands.
	[:quit          ]: quit the server.
	[:python        ]: python console.
	[:root          ]: return to the root layer.
	[:cprofile      ]: collects and reports the internal c++ profiles 
	                of a server process over a period of time.
	                 usage: ":cprofile 30"
	[:pyprofile     ]: collects and reports the python profiles 
	                of a server process over a period of time.
	                 usage: ":pyprofile 30"
	[:eventprofile  ]: a server process over a period of time, 
	                collects and reports the all non-volatile cummunication 
	                down to the client.
	                 usage: ":eventprofile 30"
	[:mercuryprofile]: collects and reports the mercury profiles 
	                of a server process over a period of time.
	                 usage: ":mercuryprofile 30"


	/--------------------------------------------- 
	[cellapp@python ~] >>> 
	[cellapp@python ~] >>> dir(KBEngine)

[kbengine_defs.xml]: {{ site.baseurl }}/cn/docs/configuration/kbengine_defs.html