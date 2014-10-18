---
layout: docs_cn
title: Custom types · Docs · KBEngine
tab: docs
docsitem: documentation-customtypes
---

自定义类型
====================

允许用户重定义底层数据结构在内存中存在的形式，这样能够便于用户在内存访问复杂的数据结构，甚至能够提高代码执行的效率。
所有数据类型中只有FIXED_DICT能够被用户重定义，C++底层只能识别这个类型为FIXED_DICT, 在进行识别时会依次检查字典中的key与value, 
C++底层通常都不会去干涉内存里存储的是什么, 但当进行网络传输和存储操作时，C++会从脚本层获取数据，
用户如果重定义了内存中的存在形式，那么在此时只要能恢复原本的形式则底层依然能够正确的识别。

重定义固定字典(FIXED_DICT)
-----------------------

alias.xml中基本声明格式类似如下:

	<类型名称> FIXED_DICT

		// (必须实现)
		// 使用此模块(xxx.inst)允许用户重定义该数据结构在内存中存在的形式，
		// 当引擎进行数据存储或进行网络传输时必须还原成引擎原本的数据结构，引擎才可以识别和进行相关操作。
		// implementedBy中指定的模块可以实现在res\scripts\user_type目录中
		<implementedBy> XXX_PICKLER.inst </implementedBy>

		// 这个数据结构的成员
		<Properties>
			// 字典的key
			<keyName> 
				// 字典的值
				<Type> 类型名称 </Type>
			</keyName>
		</Properties>
	</类型名称>


一个例子:

res\scripts\entity_defs\alias.xml:

	<XXX> FIXED_DICT
	       <implementedBy> XXX_PICKLER.inst </implementedBy>
	       <Properties>
			<k1> 
				<Type> INT32 </Type>
			</k1>
			<k2> 
				<Type> INT32 </Type>
			</k2>
	       </Properties>
	</XXX>

res\scripts\user_type\XXX_PICKLER.py:

	// 内存中的类型
	class XXX_TYPE(list):
		"""
		"""
		def __init__(self):
			"""
			"""
			list.__init__(self)
			
		def asDict(self):
			data = {
				"k1"			: self[0],
				"k2"			: self[1],
			}
			
			return data

		def createFromDict(self, dictData):
			self.extend([dictData["k1"], dictData["k2"]])
			return self

	class XXX_PICKLER:
		def __init__(self):
			pass
		
		// 此接口被C++底层调用
		// 引擎将数据交给脚本层管理，脚本层可以将这个字典重定义为任意类型
		// dct中的数据为 {"k1" : 0, "k2" : 0}, 它就是一个字典，包含了2个固定的key
		// 且值一定是符合alias.xml中定义的类型
		// XXX_TYPE().createFromDict接口调用后，返回的是一个list([0, 0])
		// createObjFromDict被调用后，返回的数据将直接赋值到脚本中的变量
		def createObjFromDict(self, dct):
			return XXX_TYPE().createFromDict(dct)
		
		// 此接口被C++底层调用
		// 底层需要从脚本层中获取数据，脚本层此时应该将数据结构还原为固定字典
		// list([0, 0]) => {"k1" : 0, "k2" : 0}
		def getDictFromObj(self, obj):
			return obj.asDict()

		def isSameType(self, obj):
			return isinstance(obj, XXX_TYPE)

	inst = XXX_PICKLER()