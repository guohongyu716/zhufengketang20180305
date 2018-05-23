let smallBox =document.querySelector('.smallBox'),
    mark = null;


    // 鼠标滑入
    smallBox.onmouseover = function(){
        mark = document.createElement('div');
        mark.className = 'mark';
        this.appendChild(mark)
    }