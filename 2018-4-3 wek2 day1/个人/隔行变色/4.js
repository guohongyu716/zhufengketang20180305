// 三种方案
//1，依次遍历每一个Li，通过索引除以3取余数，让当前的Li有不同颜色
//2，第一次



var oBox = document.getElementById('box'),
    liList = oBox.getElementsByTagName('li');
var max = liList.length - 1;
for (var i = 0; i < liList.length; i += 3) {
    //=>我们每一组循环一次，在循环体中，我们把当前这一组的样式都设置好即可（可能出现当前这一组不够三个,这样会报错）
    liList[i].style.background = '#46aa55';
    i + 1 <= max ? liList[i + 1].style.background = '#aa6053' : null;
    i + 2 <= max ? liList[i + 2].style.background = '#5477aa' : null;
}
