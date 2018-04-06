var oTab = document.getElementById("tab");
var tabList = oTab.getElementsByTagName("li");
var divList = oTab.getElementsByTagName("div");
console.log(tabList,divList)

for (var i = 0; i < tabList.length; i++) {
  tabList[i].myIndex = i;
  tabList[i].onclick = function() {
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].className = divList[j].className = "";
    }
    this.className = "active";
    divList[this.myIndex].className = "active";
  };
}
