let bannerRender = (function () {
    let container = document.querySelector('#container'),
        wrapper = container.querySelector('.wrapper'),
        focus = container.querySelector('.focus'),
        arrowLeft = container.querySelector('.arrowLeft'),
        arrowRight = container.querySelector('.arrowRight'),
        slideList = null,
        focusList = null;

let stepIndex = 0,
    autoTimer = null,
    interval = 3000;

    let autoMove = function autoMove() {
        stepIndex++;
        if (stepIndex >= slideList.length) {
            stepIndex = 0;
        }
        animate(wrapper, {
            left: -stepIndex * 1000
        }, 200);
    };
    let changeFocus = function  changeFocus() {
        let tempIndex = stepIndex;
        tempIndex == slideList.length - 1 ? tempIndex = 0 : null;
        [].forEach.call(focusList, (item, index)=>{
            item.className = index === tempIndex  ?  'active' : '';
        })
    }

let queryData = function queryData() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/banner.json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                resolve(data);
            }
        };
        xhr.send(null);
    });
};
let bindHTML = function bindHTML(data) {
    let strSlide = ``,
        strFocus = ``;
    data.forEach((item, index) => {
        let {img = 'img/banner1.jpg', desc = '珠峰培训'} = item;
        strSlide += `<div class="slide">
            <img src="${img}" alt="${desc}">
        </div>`;
        strFocus += `<li class="${index === 0 ? 'active' : ''}">
        </li>`;
    });
    wrapper.innerHTML = strSlide;
    focus.innerHTML = strFocus;

    slideList = wrapper.querySelectorAll('.slide');
    focusList = focus.querySelectorAll('li');
    utils.css(wrapper, 'width', slideList.length * 1000);
};


return {
    init: function init() {
        let promise = queryData();
        promise.then(bindHTML).then(() => {
            autoTimer = setInterval(autoMove, interval);
        });
    }
}
})();
bannerRender.init();