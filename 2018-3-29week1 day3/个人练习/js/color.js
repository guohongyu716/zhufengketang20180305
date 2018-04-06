//=>1.获取box中的所有li.(我们首先要获取box.)
<<<<<<< HEAD
var oBox = document.getElementById('box');
    boxList = oBox.getElementsByTagName('li')
=======
console.log( document)

var oBox = document.getElementById('box');
>>>>>>> da3a10d79f9a30ad3886456d723100e01304791f

//=> 修改box的样式
//1.通过STYLE修改行内样式
oBox.style.backgroundColor = 'pink';

//2.基于CLASS-NAME属性修改BOX的样式类,从而改变样式
//oBox['className'] = 'box bgColor';
oBox['className'] += ' bgColor';
<<<<<<< HEAD

for (var i = 0; i < boxList.length; i++){
//boxList[i]
//i=0 第一次循环 boxList[0]  0 第一行
//i=1 第二次循环 boxList[1]  1 第二行  (偶数行索引是奇数)
//   第一种方法
//     i % 2 !== 0 ? boxList[i].style.backgroundColor = 'red' : null;
boxList[i].style.backgroundColor = i % 2 !== 0 ? 'red' : ''; 
//=> 会把三元运算符的结果给等号左边的内容
}
=======
>>>>>>> da3a10d79f9a30ad3886456d723100e01304791f
