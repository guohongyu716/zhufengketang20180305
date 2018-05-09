[TOC]

# 正式可第三周第一天 DOM 数据数据绑定

## 数据绑定的方式
### 字符串拼接
**普通字符字符串拼接**
**ES6 模板字符串**
**模板引擎**
### dom 操作
**DOM 的回流(reflow)和重绘(repaint)** 
1.计算 DOM 结构
 2.加载 CSS 
 3.生成渲染树(render tree),渲染树是和样式相关的 
 4.浏览器基于 CPU(显卡)开始按照 RENDER TREE 画页面

> 重绘:当某一个 DOM 元素样式更改(位置没变只是样式更改,例如颜色变为红色..)浏览器会重新渲染这个元素
```Javascript
box.style.color='red'
   //...还有一些其它代码
  box.style.fontSize='16px'

   上面的操作触发了两次重绘，性能上有所消耗，真实项目中为了优化这个性能，我们最好一次性把需要修改的样式搞定，例如：
   .xxx{
       color:'red',
       fontSize:'16px'
   }
   box.className='xxx'
```
> 回流:当 DOM 元素的结构或者位置发生改变(删除,增加,改变位置,改变大小等)都会引发回流,所谓回流就是浏览器抛弃原有计算的结构和样式,从新进行 DOM TREE 或作 REDUE TREE非常非常非常...消耗性能

> 基于文档碎片(虚拟内存中开辟的一个容器)可以解决这个问题：每当创建一个LI，我们首先把它存放到文档碎片中（千万不要放到页面中，避免回流），当我们把需要的元素都创建完成，并且都添加到文档碎片中，在统一把文档碎片放到页面中（只会引发一次回流操作）
**DOM 分离 读写**
//[引发两次回流]
// box.style.top = '100px';
// console.log(box.style.top);//=>'100px'
// box.style.left = '100px';

//[引发一次回流]
box.style.top = '100px';
box.style.left = '100px';
console.log(box.style.top);//=>'100px'

### 复习操作 DOM 的属性和方法

#### [获取元素或者元素集合]

* getElementById
*      ->上下文只能是document（只有document这个实例的原型链上才能找到这个方法，其它实例都找不到）
*      ->ID重复了获取第一个
*      ->IE6~7中会把表单元素的name当做id使用
* getElementsByTagName
*      ->获取当前上下文中，所有子子孙孙中标签名叫做XXX的元素
* getElementsByClassName
*      ->IE6~8中不兼容
* getElementsByName
*      ->在IE浏览器中只对表单元素的name起作用
*      ->上下文也只能是document
* querySelector
* querySelectorAll
*      ->不兼容IE6~8
*      ->没有DOM映射
* document.documentElement
* document.body
* document.head
* ...


#### [描述节点和节点之间关系的属性]

*          nodeType nodeName  nodeValue
*     元素节点  1  大写标签名  null
*     文本节点  3  #text     文本内容
*     注释节点  8  #comment  注释内容
*     文档节点  9  #document null
*
* childNodes：所有子节点
* children：所有元素子节点（IE6~8 中会把注释当做元素节点）
* parentNode
* previousSibling / previousElementSibling
* nextSibling
* firstChild
* lastChild
*

#### [动态操作 DOM]

*     createElement
*     createDocumentFragment
*     appendChild
*     insertBefore
*     cloneNode(true/false)
*     removeChild
*     set/get/removeAttribute
*

#### [散]

 xxx.style.xxx=xxx  设置行内样式

=>xxx.style.xxx 获取行内样式
xxx.className='xxx'
xxx.onclick=function...
...

### JS 中的盒子模式属性

> 在 JS 中通过相关的属性可以获取(设置)元素的样式信息,这些属性就是盒子模型属性(基本都是关于样式的)

**获取盒模型获取值特点** 1.获取都是数字没有单位 2.获取的都是整数,不会出现小数(一般都会四舍五入,尤其是获取的偏移量) 3.获取的结果都是复合样式值(好几个元素样式组合在一起的值)如果只想获取单一样式值(例如只想获取 padding),我们的盒子模型就操作不了了(这不能说没用,真实项目中,有时候我们就是需要获取组合的值来完成一些操作)

**注意获取某元素单一样式值操作** 1.[元素].style.XXX 操作获取
//=> 只能获取所有写在元素行内上的样式(不写在行内上,不管你写没写都获取不到,真实项目中我们很少会把样式写在行内上)
//=>outer.style.width =>'' (width 是写在样式表中的) 2.获取当前元素所有经过浏览器计算的样式
//> 经过浏览器计算的样式:只要当前元素可以再页面中呈现(或者浏览器渲染了他)那么他的样式都是被计算过得
//=> 不管写在哪
//> 不管你是否写了(浏览器会给元素设置一些默认样式)

标准浏览器(IE9+)
window.getComputedStyle([元素],[伪类,一般都写 null]) 获取到当前元素所有被浏览器计算过的样式(对象)

IE6~8
[元素].currentStyle 获取经过计算的样式

getCss：获取当前元素某一个样式属性值

@param
curEle[object]：当前要操作的元素
attr[string]：当前要获取的样式属性名

@return
获取的样式属性值

```Javascript
//注意获取某元素单一样式值操作
let getCss = function getCss(curEle, attr) {
    if ('getComputedStyle' in window) {
        if (window.getComputedStyle === 'undefined'){
            //验证是否兼容
            return;
        }
       // let val = window.getComputedStyle(curEle, null)[attr];
       let val = window.getComputedStyle(curEle, null)[attr];
        //=>把获取的结果去除单位（不是所有的值都能去单位的，例如：display\一些复合值都去不掉单位），只有符合 数字+单位 这种模式的结果才能基于PARSE-FLOAT去单位
        let reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i;
        reg.test(val) ? val = parseFloat(val) : null;
        return val;
    }
    //=>throw new SyntaxError：抛出一个错误(语法错误),让浏览器崩溃,不在继续执行JS
    throw new SyntaxError('您的浏览器版本过低，请升级到最新版本，谢谢配合！！');
};
console.log(getCss(outer, 'width'));


// 设置当前元素某一个具体样式的属性值
// js 中给元素设置样式只有两种
// 1.设置元素的样式类名(前提是:样式及对应的样式已处理完成)
// 2.通过行内样式设置 XXX.style.XXX=XXX
 let setCss = function (curEle, attr, value){
     if(attr === 'opacity'){
         curEle.style.opacity = value;
         curEle.style.filter = `alpha(opacity=${value*100})`;
         return;
     }
     if(!isNaN(value)) {
         let reg = /^(width|height|fontSize|(margin|padding)?(top|left|right|bottom)?)$/i;
         reg.test(attr)? value += 'px' : null;
     }
     curEle['style'][attr] = value;
 };
```

### client

top :获取上边框的宽度
left:获取左边框的宽度
// 注意只有上/左没有右/下
width: 获取当前元素可视区的宽(内容的宽高+左右/上下 PADDING)
height :获取当前元素可视区的高(内容的宽高+左右/上下 PADDING)

```javascript
//=>clientTop/Left/Width/Height
//1.clientWidth & clientHeight：获取当前元素可视区域的宽高（内容的宽高+左右/上下PADDING）
//=>和内容是否有溢出无关（和是否设置了OVERFLOW:HIDDEN也无关），就是我们自己设定的内容的宽高+PADDING

//=>获取当前页面一屏幕(可视区域)的宽度和高度
// document.documentElement.clientWidth || document.body.clientWidth
// document.documentElement.clientHeight || document.body.clientHeight

//2.clientTop & clientLeft：获取(上/左)边框的宽度
```

### offset

top
left

width
height
//offsoetWidth & offsetHeight：在 client 的基础上加上 border（和内容是否溢出也没有关系）

parent

### scroll

top
left
width
height
//scrollWidth & scrollHeight: 上述宽高时真实内容的宽高(不一定是自己设定的值,应为可能会存在内容溢出,有内容溢出的情况下,需要把溢出内容也算上)+左/上 PADDING,而且是一个约等于值 (没有溢出和 client 一样)
//=>在不同浏览器中，或者是否设置了 OVERFLOW:HIDDEN 都会对最后的结果产生影响，所以这个值仅仅做参考，属于约等于的值

//=>注意获取当前页面的真实宽高（包含溢出的部分）
// document.documentElement.scrollWidth || document.body.scrollWidth
// document.documentElement.scrollHeight || document.body.scrollHeight
