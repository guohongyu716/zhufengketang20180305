var ary = [1, 2, 2, 2, 1, 2, 3, 2, 3, 2, 1];
var obj = {};
for (var i = 0; i < ary.length; i++) {
  var item = ary[i];
  if (obj[item] !== undefined) {
    ary.splice(i, 1);
    i--;
  } else {
    obj[item] = item;
  }
}
console.log(ary);
