let $container = $('.container'),
$imgList = $('.container>.imgBox>li'),
$mark = null;
$imgList.on('mouseover', function (ev) {
//=>创建MARK:根据经过的LI中的小图片,动态管控MARK中的大图片
let srcStr = $(this).children('img').attr('src');
srcStr = srcStr.replace(/_(\d+)/g, '_$1_bigger');
if (!$mark) {
    $mark = $(`<div class="mark">
        <img src="${srcStr}" alt="">
    </div>`);
    $container.append($mark);
}
}).on('mouseout', function (ev) {
//=>移除MARK
if ($mark) {
    $mark.remove();
    $mark = null;
}
}).on('mousemove', function (ev) {
//=>根据鼠标的位置计算出MARK的位置
let {top: conTop, left: conLeft} = $container.offset(),
    curL = ev.pageX - conLeft + 20,
    curT = ev.pageY - conTop + 20;
$mark.css({
    top: curT,
    left: curL
});
});
