var oBox = document.getElementById("box");
var ulList = document.getElementsByClassName("li");

for (i = 0; i < ulList.length; i++) {
  ulList[i].className = ulList[i].myOldClass = "bg" + (i % 3);
  ulList[i].onmouseover = function () {
    this.className = 'hover';
};
ulList[i].onmouseout = function () {
    this.className = this.myOldClass;
};
}
