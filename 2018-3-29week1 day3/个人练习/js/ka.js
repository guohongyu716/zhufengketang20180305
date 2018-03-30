/*

思路:
1,给所有的li绑定点击事件,当点击任何一个li 时,都做第三步操作
2.可以让所有的LI和DIV的class都为空(XXX.className=''),再让当前点击的这个li和DIV有CTIVE这个样式类即可


*/
var tabBox=document.getElementById('tobBox')
var tabList = tabBox.getElementsByTagName('li')
var tabList = tabBox.getElementsByTagName('div')

for (var i = 0; i < tabList.length; i++){

tabList[i].onclick =function(){


}


}
//=>封装一个方法完成页卡切换
function changeTab(){

//=>1.所有都没有选中样式

for (var i = 0; i < tabList.length; i++){
    tabList[i].className = ''
    divList[i].className = ''
}

}






