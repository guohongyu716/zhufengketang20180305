var ary = [1, 2, 1, 2, 3, 4, 3, 4, 5, 6, 5, 7, 8, 6, 9];
var obj = {};
for (var i = 0; i < ary.length; i++) {
  var item = ary[i];
  if (obj[item] !== undefined) {
    ary[i] = ary[ary.length - 1];
    ary.pop();
    i--;
    continue;
  }
  obj[item] = item;
}
console.log(ary);
