~function () {
    let link = document.querySelector('#link');

    //=>当页面在滚动的时候(鼠标滚轮/键盘按键/手动拖动滚动条/基于JS控制页面滚动的时候...)我们随时获取当前页面卷去的高度,如果卷去的高度>一屏幕的高度,让LINK显示,否则隐藏
    //=>window.onscroll:当页面滚动的时候触发的事件
    window.onscroll = function () {
        let scrollT = document.documentElement.scrollTop,
            winH = document.documentElement.clientHeight;
        if (scrollT > winH) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    };

    //=>给当前的按钮绑定点击事件，当点击的时候控制页面的SCROLL-TOP=0即可
    let isRun = false;//=>记录当前是否正在运动，默认FALSE没有运动，当点击A标签开启动画的时候，让其变为TRUE，动画结束让其变为FALSE，在它为TRUE的时候，我们点击A标签不会在做任何事情，防止重复点击
    link.onclick = function () {
        if (isRun) {
            //=>动画正在运行中，再次点击不做任何的处理
            return;
        }
        isRun = true;
        // document.documentElement.scrollTop = 0;//=>立即回到顶部
        //动画：再指定时间内（1S），匀速运动到顶部
        //1.每间隔多长时间走一步(在原有的SCROLL-TOP基础上减去步长)
        //2.规定时间内完成动画，我们需要根据距离和总时间算出步长
        let change = document.documentElement.scrollTop - 0,//=>总距离
            duration = 500,//=>总时间
            interval = 17,//=>频率：多久走一次
            step = change / duration * interval;
        let timer = setInterval(() => {
            let curT = document.documentElement.scrollTop;
            //=>当我们已经运动到顶部位置了，我们需要清除定时器：TIMER代表的就是当前这个定时器，我们需要把这个定时器清除掉
            if (curT === 0) {
                isRun = false;
                clearInterval(timer);
                return;
            }
            //=>基于定时器完成动画：每间隔17MS都执行一次这个方法，方法中在当前SCROLL-TOP的基础上减去STEP步长，即可完成动画
            curT = curT - step;
            document.documentElement.scrollTop = curT;
        }, interval);
    };
}();