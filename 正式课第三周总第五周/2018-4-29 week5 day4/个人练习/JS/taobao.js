~function () {
    let link = document.querySelector('#link');
    window.onscroll = function () {
        let scrollT = document.documentElement.scrollTop,
            winH = document.documentElement.clientHeight;
        if (scrollT > winH) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    };
    let isRun = false;
    link.onclick = function () {
        if (isRun) {
            return;
        }
        isRun = true;
        let change = document.documentElement.scrollTop - 0,//=>总距离
            duration = 500,//=>总时间
            interval = 17,//=>频率：多久走一次
            step = change / duration * interval;
        let timer = setInterval(() => {
            let curT = document.documentElement.scrollTop;
            if (curT === 0) {
                isRun = false;
                clearInterval(timer);
                return;
            }
            curT = curT - step;
            document.documentElement.scrollTop = curT;
        }, interval);
    };
}();
