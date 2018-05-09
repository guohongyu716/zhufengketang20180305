[TOC]
# 正式课第二周第三天
### 所有函数改变某一个函数中this的指向 三个方法call/apply/bind
#### call
> 这个方法是浏览器内置方法
语法: [fn]].call([this],[param]...)
        fn.call:当前实例(函数FN)通过原型链的查找机制,找到Function.prototype上的call方法 => function call(){[native code]
        fn.call():把找到的call方法执行
        当call方法执行时内部处理了些事情
            1.首先把要操作函数中的THIS关键字变为CAll方法第一个传递的实参
            2.把CAll方法第二个及第二个以后的的实参获取到
            3.把要操作的函数执行,并且把第二个以后的传递进来实参传给函数
        call 细节;
        1.费严格模式下,如果参数不传,或者第一个传递的是null/undefined,THis都指向window 
        2. 在严格模式下,第一个参数是谁,this就指向谁
```Javascript
/*
 * call
 *  1. [fn].call([this],[param]...)
 *   fn.call：当前实例(函数FN)通过原型链的查找机制，找到Function.prototype上的call方法  =>function call(){[native code]}
 *   fn.call()：把找到的call方法执行
 *
 *   当call方法执行的时候，内部处理了一些事情
 *    =>首先把要操作函数中的THIS关键字变为CALL方法第一个传递的实参值
 *    =>把CALL方法第二个及第二个以后的实参获取到
 *    =>把要操作的函数执行，并且把第二个以后的传递进来的实参传给函数
 */
 fn.call(oo);//=>this:oo
 fn.call(obj,10,20,30);//=>this:obj

Function.prototype.call = function () {
    let param1 = arguments[0],
        paramOther = [];//=>把ARG中除了第一个以外的实参获取到

    //=>this:fn 当前要操作的函数(函数类的一个实例)
    //把FN中的THIS关键字修改为PARAM1 =>把THIS(CALL中)中的this关键字修改为param1

    //=>把fn执行，把paramOther分别传递给fn
    // this(paramOther)
};
fn.call(obj)

例子:
let sum=function(a,b){
    console.log(this);//=>opt
};
let opt={n:20};

// sum.call(opt,20,30);//=>call执行 call中的this是sum  把this(call中的)中的“this关键字”改为opt 把this(call中的)执行，把20,30分别传递给它 //=>sum中this:opt  a=20 b=30

sum.call.call(opt)
//1.sum.call 找到Function.prototype上的call方法(也是一个函数，也是函数类的一个实例，也可以继续调用call/apply等方法)  =>A（函数）
//2.A.call(opt)  继续找到原型上的call方法，把call方法执行：把A中的this关键字修改为opt，然后把A执行

```
变态题
```Javascript
/*
Function.prototype.call=function callAA(){
    //=>1.把THIS(FN)中的"THIS关键字"修改为第一个参数值(OBJ)
    //=>2.把THIS(FN)执行,把第二个及以后接受的参数值传递给函数(10,20)
    //this(10,20)
};
fn.call(obj,10,20)
*/
function fn1(){console.log(1);}
function fn2(){console.log(2);}
fn1.call(fn2);//=>找到CALL-AA把它执行,CALL-AA中的THIS是FN1,第一个参数传递的是FN2  =>在CALL-AA中执行的是FN1 =>1

fn1.call.call(fn2);//=>找到CALL-AA让它执行,CALL-AA中的THIS是FN1.CALL,第一个参数是FN2  (把FN1.CALL中的THIS变为FN2，再让FN1.CALL执行  =>先找到CALL-AA，把它执行，只不过此时它中的THIS是FN2 =>让FN2中的THIS变为UNDEFINED，因为执行FN1.CALL的时候没有传递参数值，然后让FN2执行)  =>2

Function.prototype.call(fn1);//=>先找到CALL-AA把它执行，它中的THIS是Function.prototype =>让F.P中的THIS变为FN1,然后让F.P执行,F.P是一个匿名函数也是一个空函数，执行没有任何的输出

Function.prototype.call.call(fn1);//=>先找到CALL-AA把它执行，它中的THIS是F.P.CALL =>把F.P.CALL中的THIS修改为FN1,让F.P.CALL执行  =>F.P.CALL(CALL-AA)第二次把它执行(此时它里面的THIS已经是FN1) =>这一次其实在CALL-AA中是让FN1执行 =>1
//<==> fn1.call.call(fn2)
//<==> fn1.call===Function.prototype.call ：true

fn1.call.call.call.call.call(fn2);
//=>fn1.call.call.call.call===Function.prototype.call

```

#### apply
> 和call基本上一摸一样,唯一区别在于传参方式
fn.call(obj,10,20)
fn.apply(obj,[10,20]):apply 是把需要传递给Fn的参数放到数组(或者类数组)中传递进去,虽然写的是一个数组,但也相当于给fn一个一个的传递

#### bind
> 语法和call一摸一样,唯一的区别在于立即执行还是等待执行(call立即执行,bind当前不执行等到条件符合在执行,属于预先处理机制)
 fn.call(obj,10,20) 改变FN中的THIS,并且把FN立即执行
   fn.bind(obj,10,20) 改变FN中的THIS,此时的FN并没有执行（不兼容IE6~8）


定时器
setTimeout(function(){
    console.log(1);
},1000;)

setTimeout(function bind(){
    console.log(1);
},1000;)


eval 把字符串转化为JS表达式
 括号表达式(小括号的应用)
    用小括号包裹起来,里面会有对项(每一项用逗号分隔),最后只获取最后一项的内容(但是会把其他的项过一遍)
    注意:不建议大家过多使用括号表达式,应为会改变THIs


***ES6中运算符:"..."含义***
1.剩余运算符
2.拓展运算符
3.展开运算符: 把数组(对象/类数组)中的每一项都展开
展开运算符
 

### ES6 中结结构赋值
解构赋值: 按照一个数据值的结构,快速解析获取到其中的内容
1.真实项目中一般都是针对于数组或者对象进行结构赋值
等号左边出现和右边形同的数据结构,左边可以创建一些变量快速获取到右侧对应位置的值(解构赋值)
let ary = [12,23,"珠峰"];
let [a,b,c]=ary;

对象解构赋值
**结构赋值的实际意义**
交换两个变量位置
let a=12,
    b= 23;
[b,a]=[a,b]

### ES6箭头函数
let fn = (x,y) =>{

};
fn(10,20);


如果函数体中只有

1.箭头函数当中没有arguments(可以使用剩余运算符代替而且ARG是个数组)
2.箭头函数中没有自己的执行主体(THIS),他的THIS都是继承上下文中的THIS

3.箭头函数执行和是否有点,点前面是谁都没有关系了,应为他没有自己的执行主体,在箭头函数中使用到的THIS都是直接找上下文中的THIS来使用

注意: 箭头函数虽然很强大,但是不可以乱用,尤其是要改变函数中的this



### LESS
> 他是CSS预编译语言,和他类似的还有sass/stylus...
> css 是标记语言,不是编程语言,没有类,实例,函数,变量等东西,而less等预编译语言就是让CSS具备面向对象编程的思想,但是浏览器不能直接识别和渲染LESS代码,需要我们把LESS代码预先编译为正常的css,再交给浏览器渲染解析

#### LESS编译
- 在开发环境下编译(产品没有开发完,正在开发中,这个是开发环境)
> 导入less.js即可
```
//=>rel="stylesheet/less" 这块有修改
<link rel="stylesheet/less" href="css/demo1.less">

//=>导入JS文件即可
<script src="js/less-2.5.3.min.js"></script>
``` 
- 再生产环境下编译(产品开发完成了,需要部署到服务器上)
> 项目上线,不能把Less部署,这样用户每一一次打开页面都需要重新编译,非常消耗性能,我们部署到服务器上的是编译后的cSS
```
1. 在电脑上的全局环境下安装less模块
$ npm install less -g

验证是否安装成功:$ lessc -v

2.基于命令把我们的less编译成css
  $ lessc xxx/xxx.less xxx/xxx.min.css -x

  把指定目录中的less编译成为css(并且实现了代码的压缩)，把编译后的css存入到具体指定路径中的文件中；上线前在HTML中导入的是css文件； 
```
- 目前基于webpack和框架实现工程化开发的时候,我们都是在webpack配置文件中,配置出less的编译,(需要安装less/less-loader等模块),这样不管是开发环境下的预览,还是部署到生产环境下,都是基于webpack中的less模块编译的

#### 超级简单的less语法
1. 变量:存储值
> 用变量存储一个公共值,后期需要使用这个值,直接调取变量即可,以后如果值需要修改,只需要更改变量的值,那么所有用到这个变量的地方都跟着修改了
