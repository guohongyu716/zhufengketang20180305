[TOC]

# CSS继承
## 不可以继承的属性
- 1.display 相关的属性不可以继承;
	  - display:inline;
	  - display:block;
	 -  display:inline-block;
- 2.文本类型属性
	- 下划线不可以继承  text-decoration:none 必须加a上
- 3.盒子模型所有属性都不可以继承
	  - width/height
	  - padding 
	  - border  
	  - margin   
- 4.背景类
  - background-color 背景颜色
	 -  *** 給父元素加背景颜色 子元素视觉是受到影响  但不是继承
- 5.定位属性
	  - float 浮动
	  - clear 清除浮动
	  -  overflow:hidden

## 可以继承的样式属性
- 1.字体相关的属性
	 - color  字体颜色
	 - font-size  字体大小
	 - font-weight 字体粗细
	 - font-style  字体风格类型
	 - font-family  字体的类型   宋体/微软雅黑

- 2.文本相关
	- line-height  行高
	- text-align  文本对齐的方式
	- text-indent  首段缩进