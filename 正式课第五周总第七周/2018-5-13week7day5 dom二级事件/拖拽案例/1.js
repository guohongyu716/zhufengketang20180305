$(function () {
    let $diaLogMark = $('.diaLogMark'),
        $diaLogBox = $('.diaLogBox'),
        $boxTitle = $diaLogBox.find('.title'),
        $closeBtn = $boxTitle.find('i');

    //=>1.先让DIALOG-BOX在屏幕中间
    let winW = document.documentElement.clientWidth,
        winH = document.documentElement.clientHeight,
        boxW = $diaLogBox[0].offsetWidth,  
        boxH = $diaLogBox[0].offsetHeight;
    $diaLogBox.css({
        top: (winH - boxH) / 2,
        left: (winW - boxW) / 2
    });

    //=>2.点击关闭按钮让DIALOG消失
    $closeBtn.on('click', function () {
        //=>FADE-OUT:JQ中提供的渐隐动画
        $diaLogBox.stop().fadeOut(200, () => {
            //=>动画完成
            $diaLogMark.css('display', 'none');
        });
    });

    
    let dragStart = function dragStart(ev) {
        

        //=>基于普通对象的方式设置自定义属性,获取的时候THIS.XXX获取即可
        this.starX = ev.clientX;
        this.starY = ev.clientY;
        this.starL = parseFloat($diaLogBox.css('left'));
        this.starT = parseFloat($diaLogBox.css('top'));

        $boxTitle.on('mousemove', dragMove);//=>只有按下后才会给MOVE行为绑定方法（在H3中移动鼠标才会让其做一些事情）
    };

    //=>鼠标移动处理的事情:让盒子跟随鼠标一起移动(边界判断)
    let dragMove = function dragMove(ev) {
        //=>this:H3
        //=>随时根据鼠标的当前位置，减去起始的鼠标位置，计算出鼠标的偏移值，用偏移值加上盒子的起始位置，算出盒子的当前位置
        let {starX, starY, starL, starT} = this;
        let curL = ev.clientX - starX + starL,
            curT = ev.clientY - starY + starT;
        $diaLogBox.css({
            left: curL,
            top: curT
        });
    };

    //=>鼠标离开处理的事情
    let dragEnd = function dragEnd() {
        $boxTitle.off('mousemove', dragMove);//=>手指在H3中抬起，证明结束拖拽，我们把给MOVE绑定的方法移除，这样让标再运动的时候，盒子也不会处理
    };
    $boxTitle.mousedown(dragStart);
    $boxTitle.mouseup(dragEnd);
});