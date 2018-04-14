/*

思路:
1,给所有的li绑定点击事件,当点击任何一个li 时,都做第三步操作
2.可以让所有的LI和DIV的class都为空(XXX.className=''),再让当前点击的这个li和DIV有CTIVE这个样式类即可


*/
var tabBox=document.getElementById('tobBox')
<<<<<<< HEAD
     tabList = tabBox.getElementsByTagName('li')
    divList = tabBox.getElementsByTagName('div')

// for (var i = 0; i < tabList.length; i++){

// tabList[i].onclick =function(){


// }


// }
//=>封装一个方法完成页卡切换
function changeTab(curIndex){
=======
var tabList = tabBox.getElementsByTagName('li')
var tabList = tabBox.getElementsByTagName('div')

for (var i = 0; i < tabList.length; i++){

tabList[i].onclick =function(){


}


}
//=>封装一个方法完成页卡切换
function changeTab(){
>>>>>>> da3a10d79f9a30ad3886456d723100e01304791f

//=>1.所有都没有选中样式

for (var i = 0; i < tabList.length; i++){
<<<<<<< HEAD
    tabList[i].className = '';
    divList[i].className = '';
}
//=>封装方法时不知道用户点击是谁,只有用户点击时才执行方法,此时我们应该给函数设置一个形参变量,当执行这个方法时让用户告诉我
//=>tabList
tabList[curIndex].className = 'active';
divList[curIndex].className = 'active';
=======
    tabList[i].className = ''
    divList[i].className = ''
}

>>>>>>> da3a10d79f9a30ad3886456d723100e01304791f
}






