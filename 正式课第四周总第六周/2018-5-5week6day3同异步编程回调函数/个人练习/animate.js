/*==ANIMATE动画库==*/
~function () {
    //=>准备操作CSS样式的方法 GET-CSS/SET-CSS/SET-GROUP-CSS/CSS
    let utils = (function () {
        //=>获取样式
        let getCss = (ele, attr) => {
            let val = null,
                reg = /^-?\d+(\.\d+)?(px|rem|em)?$/;
            if ('getComputedStyle' in window) {
                val = window.getComputedStyle(ele)[attr];
                if (reg.test(val)) {
                    val = parseFloat(val);
                }
            }
            return val;
        };

        //=>设置样式
        let setCss = (ele, attr, value) => {
            if (!isNaN(value)) {
                if (!/^(opacity|zIndex)$/.test(attr)) {
                    value += 'px';
                }
            }
            ele['style'][attr] = value;
        };

        //=>批量设置样式
        let setGroupCss = (ele, options) => {
            for (let attr in options) {
                if (options.hasOwnProperty(attr)) {
                    setCss(ele, attr, options[attr]);
                }
            }
        };

        //=>合并为一个
        let css = (...arg) => {
            let len = arg.length,
                fn = getCss;
            if (len >= 3) {
                fn = setCss;
            }
            if (len === 2 && typeof arg[1] === 'object') {
                fn = setGroupCss;
            }
            return fn(...arg);
        };

        return {css}
    })();

    //=>EFFECT：准备运动的公式
    let effect = {
        Linear: (t, b, c, d) => t / d * c + b
    };

    //=>封装动画库
    window.animate = function (ele, target = {}, duration = 1000) {
        //1.基于TARGET计算出BEGIN/CHANGE
        let begin = {},
            change = {},
            time = 0;
        for (let attr in target) {
            if (target.hasOwnProperty(attr)) {
                begin[attr] = utils.css(ele, attr);
                change[attr] = target[attr] - begin[attr];
            }
        }

        //2.实现动画
        clearInterval(ele.animteTimer);//=>在给当前元素设置新的动画之前,先清空原有正在运行的动画(防止多动画共存,把动画的返回值赋值给当前元素的自定义属性，这样只要元素不变，我们不管啥时候在哪执行都可以清除元素的动画)
        ele.animteTimer = setInterval(() => {
            time += 17;
            //=>边界判断
            if (time >= duration) {
                utils.css(ele, target);
                clearInterval(ele.animteTimer);
                return;
            }
            //=>依托TARGET计算出每个方向的当前位置
            let cur = {};
            for (let attr in target) {
                if (target.hasOwnProperty(attr)) {
                    cur[attr] = effect.Linear(time, begin[attr], change[attr], duration);
                }
            }
            utils.css(ele, cur);
        }, 17);
    };
}();
