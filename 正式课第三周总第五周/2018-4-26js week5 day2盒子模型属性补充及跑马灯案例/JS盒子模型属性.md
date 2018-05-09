#正式课第三周第二天
### JS盒子模型
```Javascript
**设置当前元素某一个具体样式的属性值**
// 设置当前元素某一个具体样式的属性值
// js 中给元素设置样式只有两种
// 1.设置元素的样式类名(前提是:样式及对应的样式已处理完成)
// 2.通过行内样式设置 XXX.style.XXX=XXX

let setCss = function (curEle, attr, value) {
    /*
     * 细节处理
     *   1.如果需要考虑IE6~8兼容，透明度这个样式在低版本浏览器中不是使用opacity，而是filter（我们两套都要设置）
     *   2.如果传递进来的VALUE值没有带单位,我们根据情况设置PX单位
     *     ->某些样式属性才会加单位：WIDTH/HEIGHT/PADDING(LEFT...)/MARGIN(LEFT...)/FONT-SIZE/TOP/LEFT/BOTTOM/RIGHT...
     *     ->用户自己传递的VALUE值中是没有单位的
     */
    if (attr === 'opacity') {
        curEle.style.opacity = value;
        curEle.style.filter = `alpha(opacity=${value * 100})`;
        return;
    }

    if (!isNaN(value)) {
        //=>IS-NaN检测的结果是FALSE：说明VALUE是纯数字没单位
        let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
        reg.test(attr) ? value += 'px' : null;
    }
    curEle['style'][attr] = value;
};

**给元素批量设置样式**
let setGroupCss = function (curEle, options = {}) {
    //=>遍历传递的OPTIONS,有多少键值对,就循环多少次,每一次都调取SET-CSS方法逐一设置即可
    for (let attr in options) {
        if (!options.hasOwnProperty(attr)) break;
        //=>options:传递进来的需要修改的样式对象(集合)
        //=>attr:每一次遍历到的集合中的某一项(要操作的样式属性名)
        //=>options[attr]:传递的要操作的样式属性值
        setCss(curEle, attr, options[attr]);
    }
};
// setGroupCss(outer, {
//     width: 400,
//     height: 400,
//     padding: 30
// });


```
**知识点**
for in 循环
//=> 遍历一个对象的键值对的,有多少组键值对,我们就遍历多少次
// for in 循环只遍历对象可枚举(可遍历)的属性
/1.对象的私有属性(自己写的),是可枚举的
//2.浏览器内置的属性一般都不是可枚举的
//3.自己在类原型上设置的属性也是可枚举的,for-in循环的时候也会遍历出来(一般情况下我们是不想遍历到原型上的共有属性)

**封装一个CSS:集合GET/SET/SET-GROUP为一体的方法**
```javascript
// let css = function (...arg) {
//     //=>ARG:传递的实参集合
//     let len = arg.length;
//     if (len >= 3) {
//         //=>单一设置:SET-CSS
//         // arg=[outer, 'width', 500];
//         // setCss(outer, 'width', 500);
//         // setCss.apply(null,arg);
//         setCss(...arg);
//         return;
//     }

//     if (len === 2 && typeof arg[1] === 'object' && arg[1] !== null) {
//         //=>传递两个参数，第二个参数是一个对象(不是NULL)，说明想要操作的是批量设置
//         setGroupCss(...arg);
//         return;
//     }
//     //=>剩下的代表获取样式
//     return getCss(...arg);
// };
//=>公共方法库:项目中常用的一些方法,我们都封装到这里
let utils = (function () {
    //=>获取元素的样式
    let getCss = function (curEle, attr) {
        if (typeof window.getComputedStyle === 'undefined') {
            return;
        }
        let val = window.getComputedStyle(curEle, null)[attr],
            reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i;
        reg.test(val) ? val = parseFloat(val) : null;
        return val;
    };

    //=>设置元素样式
    let setCss = function (curEle, attr, value) {
        if (attr === 'opacity') {
            curEle.style.opacity = value;
            curEle.style.filter = `alpha(opacity=${value * 100})`;
            return;
        }
        if (!isNaN(value)) {
            let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
            reg.test(attr) ? value += 'px' : null;
        }
        curEle['style'][attr] = value;
    };

    //=>批量设置元素样式
    let setGroupCss = function (curEle, options = {}) {
        for (let attr in options) {
            if (!options.hasOwnProperty(attr)) break;
            setCss(curEle, attr, options[attr]);
        }
    };

    //=>CSS操作汇总
    let css = function (...arg) {
        let len = arg.length,
            fn = getCss;
        len >= 3 ? fn = setCss : null;
        len === 2 && (arg[1] instanceof Object) ? fn = setGroupCss : null;
        return fn(...arg);
    };

    //=>offset：获取当前元素距离BODY的偏移(左偏移和上偏移)
    let offset = function (curEle) {
        //1.先获取当前元素本身的左/上偏移
        let curLeft = curEle.offsetLeft,
            curTop = curEle.offsetTop,
            p = curEle.offsetParent;

        //2.累加父参照物的边框和偏移(一直向上找,找到BODY为止,每当找到一个父参照物都把它的边框和偏移累加起来,根据元素不一样,具体找几次也不知道)
        //TAG-NAME获取当前元素的标签名(大写的)
        while (p.tagName !== 'BODY') {//=>当找到的父参照物是BODY结束查找和累加操作
            //3.把找到的父参照物的边框和偏移值累加起来
            curLeft += p.clientLeft;
            curLeft += p.offsetLeft;
            curTop += p.clientTop;
            curTop += p.offsetTop;
            p = p.offsetParent;//=>基于当前找到的父参照物继续向上查找
        }

        return {
            top: curTop,
            left: curLeft
        };
    };
    //=>操作浏览器盒子模型属性的
    let winHandle = function (attr, value) {
        if (typeof value !== 'undefined') {
            //=>设置盒子模型属性值:SCROLL-TOP/LEFT
            document.documentElement[attr] = value;
            document.body[attr] = value;
            return;
        }
        return document.documentElement[attr] || document.body[attr];
    };


    return {
        css, //=>在ES6中直接这样写相当于 css:css
        offset
        winHandle
    }
})();
```

offsetParent:当前盒子的父级参照物
// 参照物:同一个平面中,元素的父级参照物和结构没有必然联系,默认他们的父级参照物都是BODY(当前平面最外层的盒子)body 的父级参照物是null
// 参照物可以改变:构建出不同的平面即可(使用zIndex,但是这个属性只对定位有作用),改变元素的定位()可以改变其父级参照物

offsetTop/offsetLeft: 获取当前盒子距离父级参照物的偏移量(上偏移/左偏移)


任意元素距离Boddy的偏移量(不管参照物)
1.首先

//scrollTop/scrollLeft:滚动条卷去的宽度或者高度
最小卷去值:0
最大卷去值:页面真实高度减去一屏幕的高度

操作浏览器的盒子模型属性,我们一般要写两套用来兼容各种模式下的浏览器
注意:在JS盒子模型13个属性中,只有scrollTop/scrollLeft是可以读写的,可以修改值,其余11个属性都是只读属性,只能获取不能修改.




### 基于js盒子模型属性完成跑马灯案例
现在一般是基于js动画或者cs3 动画来完城的