var ary = [1, 2, 2, 3, 4, 4, 3, 4, 5];
var obj = {};
for (var i = 0; i < ary.length; i++) {
  var item = ary[i];
  if (typeof obj[item] !== "undefined") {
    ary[i] = ary[ary.length - 1];
    ary.length--;
    i--;
    continue;
  }
  obj[item] = item;
}
console.log(ary);
