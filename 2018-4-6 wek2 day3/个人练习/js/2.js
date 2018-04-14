var ary = [1, 2, 2, 2, 1, 2, 3, 2, 3, 2, 1];
var obj = {};
for (var i = 0; i < ary.length; i++) {
  var item = ary[i];
  if (obj[item] !== undefined) {
    ary[i] = ary[ary.length - 1];
    ary.length--;//去掉最后一行方法ary.pop
    i--;
    continue;
  }
  obj[item] = item;
}
console.log(ary);
