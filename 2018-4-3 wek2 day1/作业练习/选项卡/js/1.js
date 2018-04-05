var oTab = document.getElementById("tab");
tabList = oTab.getElementsByTagName("li");
divList = oTab.getElementsByTagName("div");

for (var i = 0; i < tabList.length; i++) {
  tabList[i].myIndex = i;
  tabList[i].onmouseover = function() {
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].className = divList[j].className = "";
    }
    this.className = "active";
    divList[this.myIndex].className = "active";
  }
}
