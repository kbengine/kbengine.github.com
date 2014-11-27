---
layout: docs
title: FAQ · Docs · KBEngine
tab: docs
docsitem: faq
---

FAQ
========

VS 2010 - error LNK1123: failure during conversion to COFF: file invalid or corrupt:
-----------------

	* Either disable incremental linking, by going to 
		Project Properties 
		   -> Configuration Properties 
		       -> Linker (General) 
		          -> Enable Incremental Linking -> "No (/INCREMENTAL:NO)"

	* or install VS2010 SP1.
	


	https://social.msdn.microsoft.com/Forums/vstudio/en-US/eb4a7699-0f3c-4701-9790-199787f1b359/vs-2010-error-lnk1123-failure-during-conversion-to-coff-file-invalid-or-corrupt?forum=vcgeneral

	http://stackoverflow.com/questions/10888391/error-link-fatal-error-lnk1123-failure-during-conversion-to-coff-file-inval

	http://msdn.microsoft.com/en-us/library/7dz62kfh.aspx