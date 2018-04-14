var oTab = document.getElementById("tab"),
tabList = oTab.getElementsByTagName("li"),
divList = oTab.getElementsByTagName("div");

function changeTab(n) {
  for (var i = 0; i < tabList.length; i++) {
    tabList[i].className = "";
    divList[i].className = "";
  }
  tabList[n].className = "active";
  divList[n].className = "active";
}
for (var i = 0; i < tabList.length; i++) {
  tabList[i]["zfIndex"] = i;
  tabList[i].onclick = function() {
    changeTab(this.zfIndex);
  }
}
// var oTab = document.getElementById('tab'),
//     tabList = oTab.getElementsByTagName('li'),
//     divList = oTab.getElementsByTagName('div');

//     for (var i = 0; i < tabList.length; i++) {
//       tabList[i].myIndex = i;
//       tabList[i].onmouseover = function () {
//           //=>清空所有
//           for (var j = 0; j < tabList.length; j++) {
//               tabList[j].className = divList[j].className = '';
//           }
//           //=>当前有选中
//           this.className = 'active';
//           divList[this.myIndex].className = 'active';
//       }
//   }