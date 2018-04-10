var oBox = document.getElementById("box");
itemList = oBox.getElementsByTagName("li");

for (i = 0; i < itemList.length; i++) {
  itemList[i].className = "bg" + i % 2;

  itemList[i].onmouseover = function() {
    this.className += " hover";
  };
  itemList[i].onmouseout = function() {
    this.className = this.className.replace(" hover", "");
  };
}
