//=>使用循环实现格三行变色
var oBox = document.getElementById("box");
var ulList = oBox.getElementsByTagName("li");

for (var i = 0; i < ulList.length; i++) {
  var n = i % 3,
    liColor = ulList[i];
  if (n === 0) {
    liColor.style.backgroundColor = "red";
  } else if (n === 1) {
    liColor.style.backgroundColor = "green";
  } else {
    liColor.style.backgroundColor = "yellow";
  }
}
