 var i=[12,23,34]
 //=> 获取数组中的每一项(数组长度不固定)


// for (var i = 0; i< ary.length; i++) {
    console.log(ary[i])
//     // =>第一次循环:i=0 i<3 
// }
// =>第一次循环:i=0 i<3 
//    console.log(ary[0])
//     i++ -> i=1
// i=1 i<3 第二轮
// console.log(ary[1])
//     i++ -> i=2
//for 循环的语法组成
//1.定义初始值(var i = 0)
//2,设定循环成立的条件(条件成立循环继续,不成立循环结束)
//3.条件成立会执行循环体中的内容(大括号里面包裹的就是循环体)
//4. 执行步长累加的操作

// 到着这输出
for (var i = ary.length - 1; i >= 0; i--) {
    console.log(ary[i])
//     // =>第一次循环:i=0 i<3 
 }

//=>输出数组中的内容：输出奇数项的内容
/*for (var i = 0; i < ary.length; i++) {
    /!*i=0 第一项 奇数项
    i=1 第二项 偶数项
    i=2 第三项 奇数项
    索引为偶数，代表的是奇数项,如何判断当前i的值是奇数还是偶数？
    12%5:%称为模，用12除以5去余数*!/
    if (i % 2 === 0) {
        console.log(ary[i]);
    }
    //i % 2 === 0 ? console.log(ary[i] :null;
}*/
for (var i = 0; i < ary.length; i += 2) {
    console.log(ary[i]);
}
