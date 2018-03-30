//=>1.获取box中的所有li.(我们首先要获取box.)
console.log( document)

var oBox = document.getElementById('box');

//=> 修改box的样式
//1.通过STYLE修改行内样式
oBox.style.backgroundColor = 'pink';

//2.基于CLASS-NAME属性修改BOX的样式类,从而改变样式
//oBox['className'] = 'box bgColor';
oBox['className'] += ' bgColor';
