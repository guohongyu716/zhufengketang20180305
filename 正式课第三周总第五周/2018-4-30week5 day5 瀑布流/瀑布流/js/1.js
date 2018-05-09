//瀑布流原理
//效果: 多列不规则排列,每一列很多内容,每一项高度不固定,最后按照规则排列,三列之间不能相差太多高度
// 实现:首先获取需要的数据(假设有50条供3列)把50条数据中的前三条依次插入三列中(目前有的裂高,有的列低),接下来在拿出三条数据,但是本次插入不是依次插入,而是需要先把当前三列进行高矮排列,

//第一种方法
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

  // 数据绑定
  // 插入对象
  let queryHTML = ({ id, pic, link, title } = {}) => {
    if (typeof id === "undefined") {
      return "";
    }
    return `<a href="${link}">
        <div><img src="${pic}" alt=""></div>
        <span>${title}</span>
    </a>`;
  };

  let $boxList = $(".flowBox > li"),
    boxList = [].slice.call($boxList);
  for (let i = 0; i < imgData.length; i += 3) {
    let item1 = imgData[i],
      item2 = imgData[i + 1],
      item3 = imgData[i + 2];
    boxList
      .sort((a, b) => {
        return a.offsetHeight - b.offsetHeight;
      })
      .forEach((curLi, index) => {
        curLi.innerHTML += queryHTML(eval("item" + (index + 1)));
      });
  }
});
