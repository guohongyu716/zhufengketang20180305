let productSort = (() => {
    let header = document.getElementById('header'),
        link = header.getElementsByTagName('a'),
        productBox = document.getElementById('productBox'),
        productList = null;
    let productData = null;
    let getData = () => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'json/product.json', false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                productData = JSON.parse(xhr.responseText);
            }
        };
        xhr.send(null);
    };
    let bindHTML = () => {
        let str=``;
        productData.forEach((curEle) => {
            let {
                hot,
                img = "img/1.jpg",
                price,
                time,
                title
            } = curEle;
            str+=` <li 
            data-time="${time}"
            data-price="${price}"
            data-hot="${hot}"
 >
            <a href="javascript:;">
                <img src="${img}" alt="">
                <h4>${title}</h4>
                <p>￥${price}</p>
                <p>时间:${time}</p>
                <p>热度:${hot}</p>
            </a>
        </li>
            
            `
        })
        productBox.innerHTML=str;
        productList=productBox.getElementsByTagName('li');
    };
    let linkClick=()=>{
        productList=[].slice.call(productList);
        [].forEach.call(link,(curLi,index)=>{
            curLi.flag=-1;
            curLi.onclick=()=>{
                [].forEach.call(link,(otherLi)=>{
                    if(curLi!==otherLi){
                        otherLi.flag=-1;

                    }
                })
                curLi.flag*=-1;
                let ary=['data-time','data-price','data-hot'];
                productList.sort((a,b)=>{
                    let aInn=a.getAttribute(ary[index]),
                      bInn=b.getAttribute(ary[index]);
                    if(index===0){
                        aInn=aInn.replace(/\D/g,'');
                        bInn=bInn.replace(/\D/g,'');
                    }
                    return (aInn-bInn)*curLi.flag;
                })
                let frag=document.createDocumentFragment();
                productList.forEach((curLi)=>{
                    frag.appendChild(curLi);
                });
                productBox.appendChild(frag);
                frag=null;
            }
        })
    }

    return {
        init: ()=> {
            getData();
            bindHTML();
            linkClick();
        }
    };
})();

productSort.init();