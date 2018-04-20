function a() {
  var num = 0;
  return function() {
    var num2 = 0;
    console.log(num2++);
    console.log(++num);
    console.log(++num2);
  };
}
var b=a();
b(); // 
b(); // 


var a = 12,
  b = 13,
  c = 14;

function fn(a) {
  console.log(a, b, c);
  var b = (c = a = 20);
  console.log(a, b, c);
}
fn(a);
console.log(a, b, c);

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = (function(i) {
    //
    return function() {
      return i;
    };
  })(i);
}
a[6]();
a[7]();

function aa() {
  var a = 0;
}

var foo = "hello";
(function(foo) {
  console.log(foo);
  var foo = foo || "world";
  console.log(foo);
})(foo);
console.log(foo);

// 自执行函数  =  立即执行函数
(function fn(foo) {
  console.log(foo);
  var foo = foo || "world";
  console.log(foo);
})()(function() {})()(
  // fn()

  function(foo) {
    console.log(foo);
    var foo = foo || "world";
    console.log(foo);
  }
)()()()(
  //
  function(foo) {
    console.log(foo);
    var foo = foo || "world";
    console.log(foo);
  }
)(foo);

var a = (1 + 2) * 3(function() {})();
