var oTab = document.getElementById("tab");
liList = oTab.getElementsByTagName("li");
divList = oTab.getElementsByClassName("div");
for (i = 0; i < liList.length; i++) {
  liList[i].myIndex = i;
  liList[i].onmouseover = function() {
    for (var j = 0; j < liList.length; j++) {
      liList[j].className = divList[j].className = "";
    }
    this.className = "active"
    divList[this.myIndex].className = "active";
  }
}
