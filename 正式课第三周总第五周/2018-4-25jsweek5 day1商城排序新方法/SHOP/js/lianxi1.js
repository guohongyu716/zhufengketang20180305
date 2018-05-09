let productRender = (function () {
    let productData = null,
        productBox = document.querySelector('.productBox'),
        headerBox = document.querySelector('.headerBox'),
        linkList = headerBox.querySelector('a'),
        productList = null;

    let getData = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/product.json', false);
        xhr.onreadystatechange = function () {


        if (xhr.readyState === 4 && xhr.status === 200){
            productData = JSON.parse(xhr.responseText);
        }
        };
        xhr.send(null);
    };
    let bindHTML =function () {
        let str =``;
        productData.forEach(({title, price, hot, time, img},index) =>{
            str += `<li  data-time="${time}" data-hot="${hot}" data-price="${price}><a href="#">
            <img src="${img}" alt="">
            <p title="${title}">${title}</p>
            <span>￥${price}</span>
            <span>时间：${time}</span>
            <span>热度：${hot}</span>
        </a></li>`

        });
        productBox.innerHTML = str;
        productList = productBox.querySelectorAll('li');

    };
})();