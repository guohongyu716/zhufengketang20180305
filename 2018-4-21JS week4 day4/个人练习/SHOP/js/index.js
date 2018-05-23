//1.获取数据和数据据绑定
//=> 真实项目中,页面大部分数据都不是写死的,而是动态绑定的
//A:从服务器端获取到数据(基于AJAX/JSONP等技术,通过服务器端提供的数据API接口地址,把数据请求回来)
//B: 把获取的数据进行解析
//C:把数据绑定在HTML页面中(数据绑定):ES6的模板字符串


let listBox = document.getElementById('list'),
    headerBox = document.getElementById('header'),
    linkList = headerBox.getElementsByTagName('a'),
    productList = listBox.getElementsByTagName('li');
let roductData = null;


let productData = null;

let xhr = new XMLHttpRequest();//创建AJAX实例
xhr.open('GET','json/product.json',false); //打开一个请求的地址（一般地址都是服务器提供好的，会给我们一个API文档接口），最后一个参数都是设置同步还是异步（false：同步，true：异步），真实项目中 最常使用异步，我们今天为了简单使用同步
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        productData = xhr.responseText;
    }
};
xhr.send(null);


// 获取的结果是一个字符串：'json格式的字符串'
// JSON格式：JSON不是一种数据类型，而是一种数据格式，只要把对象的属性名用双引号括起来，此时的对象就不再称之为普通对象，而是叫做 JSON格式的对象
// 从服务器端获取的数据格式一般都是JSON格式的(大部分都是JSON格式字符串)
//  window.JSON
//      1.parse：把JSON格式的字符串转换为对象
//    2.stringify：把对象转换为JSON格式的字符串
//
// window.JSON.parse()
//   JSON.parse()
//
// let obj = {"name": "xxx"};//=>OBJ是JSON格式对象（操作起来和普通对象没啥太大区别）
// let str = '{"name": "xxx"}';//=>JSON格式的字符串

productData=JSON.parse(productData);
////=>数据绑定（DOM数据绑定）：依托获取的数据，把页面中需要展示的数据和结构都搞出来，然后把创建好的数据和结构放到页面指定容器中
/*
 * 1.字符串拼接
 *   ->传统字符串拼接
 *   ->ES6模板字符串拼接
 *   ->模板引擎:原理也是字符串拼接
 *
 * 2.动态创建DOM
 *   ->createElement
 *   ->appendChild
 *   弊端：操作起来太麻烦，而且性能消耗更大（DOM回流）
 */


let list = document.getElementById('list');
let str = ``;//=>这是两个撇(TAB上边按键) ES6模板字符串
for (let i = 0; i < productData.length; i++) {
    let {
        title,
        img = 'img/1.jpg',//=>没有返回IMG,我们用默认图占位
        price
    } = productData[i];

    str += `<li><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>${price}</span>
        </a></li>`;
}
list.innerHTML = str;
<<<<<<< HEAD


// let sortList = () => {
//     //=>按照价格升序排列
//     //1.基于GET-ELEMENTS-BY-TAG-NAME获取的元素集合是一个类数组，不能直接使用数组中的SORT方法(我们首先把它转换为数组,然后在排序)
//     let productAry = [].slice.call(productList);//=>用这种借用SLICE方式操作元素集合或者节点集合，在IE6~8中不兼容

//     //2.基于SORT给所有的LI按照其价格进行排序
//     productAry.sort((a, b) => {
//         //=>a:数组中的当前项
//         //=>b:数组中的下一项
//         // return a-b; 数组当前项减去下一项，如果返回的值大于零，则A/B交换位置，否则小于等于零什么都不做

//         //=>A是当前LI,B下一个LI,我们应该获取出每个LI的价格,让价格相减从而实现排序（首先数据绑定的时候，我们可以把后面需要用到的“价格/日期/销量”等信息存储到LI的自定义属性上[在结构中显示 后期只能基于GET-ATTRIBUTE这种模式获取到]，后期需要用到这个值的时候，我们基于自定义属性获取到即可）
//         let aP = a.getAttribute('data-price'),
//             bP = b.getAttribute('data-price');
//         return aP - bP;
//     });

//     //3.按照排好序的数组，我们把LI重新增加到页面中
//     for (let i = 0; i < productAry.length; i++) {
//         let curLi = productAry[i];
//         listBox.appendChild(curLi);
//     }
// };
// sortList();

// ~function () {
//     let sortList = function () {
//         //=>this:当前操作的A
//         let productAry = [].slice.call(productList);
//         /*
//          let _this=this;
//          productAry.sort(function(a,b){
//              //this:window
//              _this.flag
//          });*/
//         productAry.sort((a, b) => {
//             //=>this:当前操作的A
//             let aP = a.getAttribute('data-price'),
//                 bP = b.getAttribute('data-price');
//             return (aP - bP) * this.flag;
//         });
//         for (let i = 0; i < productAry.length; i++) {
//             let curLi = productAry[i];
//             listBox.appendChild(curLi);
//         }
//     };

//     linkList[1].flag = -1;
//     linkList[1].onclick = function () {
//         //=>this:当前操作的A标签(价格A标签)
//         this.flag *= -1;//=>每一次点击可以让FLAG的值从1~-1来回切换(第一次点击变为1,第二次变为-1...)
//         sortList.call(this);//=>执行SORT-LIST，让方法中的THIS关键字改为操作的A标签  (箭头函数虽然很强大，但是不可以乱用，尤其是在需要改变函数中THIS的情况下，箭头函数中的THIS不受我们管控，都是默认继承上下文中的，我们基于call也改不了)
//     };
// }();





=======
>>>>>>> 0c500c49e8d5b45cdf48bc32408b3eb3d907b534
