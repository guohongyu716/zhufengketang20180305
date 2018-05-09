$(function() {
    let page = 0,
      imgData = null;
    let queryData = () => {
      page++;
      $.ajax({
        url: `json/data.json?page=${page}`,
        method: "get",
        async: false,
        dataType: "json",
        success: result => {
          imgData = result;
        }
      });
    };
    queryData();
    console.log(imgData);
  
    // 数据绑定 方法一  
    // 插入对象
    // let queryHTML = ({ id, pic, link, title } = {}) => {
    //   if (typeof id === "undefined") {
    //     return "";
    //   }
    //   return `<a href="${link}">
    //       <div><img src="${pic}" alt=""></div>
    //       <span>${title}</span>
    //   </a>`;
    // };
  
    // let $boxList = $(".flowBox > li"),
    //   boxList = [].slice.call($boxList);
    // for (let i = 0; i < imgData.length; i += 3) {
    //   let item1 = imgData[i],
    //     item2 = imgData[i + 1],
    //     item3 = imgData[i + 2];
    //   boxList
    //     .sort((a, b) => {
    //       return a.offsetHeight - b.offsetHeight;
    //     })
    //     .forEach((curLi, index) => {
    //       curLi.innerHTML += queryHTML(eval("item" + (index + 1)));
    //     });
    // }
    // let bindHTML =() => {
    //     let $boxList = $('.flowBox > li');
    //     for (let i = 0; i < imgData.length; i += 3){
    //         $boxList.sort((a,b) => {
    //             return $(a).outerHeight() -$(b).outerHeight();
    //         }).each((index, curLi) => {

    //         })
    //     }
    // }
  

// 数据绑定方法二纯用JQuery
  let bindHTML = () => {
    let $boxList = $('.flowBox > li');
    for (let i = 0; i < imgData.length; i += 3) {
        $boxList.sort((a, b) => {
            return $(a).outerHeight() - $(b).outerHeight();
        }).each((index, curLi) => {
            //第一个LI索引0  index  =>imgData[i+0]
            //第二个LI索引1  index  =>imgData[i+1]
            let item = imgData[i + index];
            if (!item) return;
            let {id, pic, link, title} = item;
            $(`<a href="${link}">
                <div><img src="${pic}" alt=""></div>
                <span>${title}</span>
            </a>`).appendTo($(curLi));
        });
    }
};
bindHTML();

//加载更多的数据
$(window).on('scroll', () =>{
    let winH = $(window).outerHeight(),
    pagEH = document.documentElement.scrollHeight || document.body.scrollHeight,
    scrollT = $(window).scrollTop();
    if ((scrollYT + 100)>= (pageH - winH)){
        if(isRun) return;
        isRun = true;
        if (page >5) {
            alert('没有更多数据了');
            return;
        }
        queryData();
        bindHTML();
    }
})
});
