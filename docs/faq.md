---
layout: docs
title: FAQ · Docs · KBEngine
tab: docs
docsitem: faq
---

FAQ
========

Errors:
-----------------


VS 2010 - error LNK1123: failure during conversion to COFF: file invalid or corrupt:

	Causes:
		* this error appear because you have installed Visual C++ 2012 after you have actually installed Visual C++ 2010 in your system;
		* another cause is because .net Framework 4.5 replace .net Framework 4.0;
		* .net Framework corrupted files;

	How to solve:
		* Either disable incremental linking, by going to 
			Project Properties 
			   -> Configuration Properties 
			       -> Linker (General) 
			          -> Enable Incremental Linking -> "No (/INCREMENTAL:NO)"

		* or install VS2010 SP1.
		

	References:
		* https://social.msdn.microsoft.com/Forums/vstudio/en-US/eb4a7699-0f3c-4701-9790-199787f1b359/vs-2010-error-lnk1123-failure-during-conversion-to-coff-file-invalid-or-corrupt?forum=vcgeneral
		* http://stackoverflow.com/questions/10888391/error-link-fatal-error-lnk1123-failure-during-conversion-to-coff-file-inval
		* http://msdn.microsoft.com/en-us/library/7dz62kfh.aspx