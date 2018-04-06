var str = "http://www.zhufengpeixun.cn/stu/?name=aa&age=20&sex=0#teacher";
var indexASK = str.indexOf("?");
var indexWELL = str.indexOf("=");
indexWELL === -1 ? (indexWELL = str.length) : null;
str = str.substring(indexASK + 1, indexWELL);
var ary = str.split('&'),
    obj={};
    for(var i =0 ;i<ary.length;i++){
        var item = ary[i],
        itemAry = item.split('=');
        var key = itemAry[0],
        value = itemAry[1];
    obj[key] = value;
    }
    console.log(obj);