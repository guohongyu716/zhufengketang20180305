var oBox = document.getElementById("box"),
    aList = oBox.getElementsByTagName('li');

function changeColor() {
    for (var i = 0; i < aList.length; i++) {
        aList[i].style.backgroundColor = i % 3 == 0 ? 'lightblue' : ((i % 3 == 1) ? 'lightgreen' : 'lightpink');
    }
}

changeColor();
