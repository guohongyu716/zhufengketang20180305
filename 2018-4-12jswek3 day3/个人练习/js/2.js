// 在当前作用域下不管条件是否成立都要进行变量提升
// => 带var的还是只声明
// => 带function的在老版本浏览器渲染机制下,声明加定义都处理,但是为了迎合ES6中的块级作用域,新版浏览器对于函数(在条件判断中的函数)不管条件是否成立都是先声明,没有定义类似于var

f = function () {
    return true;
};
g = function () {
    return false;
};
~function () {
    if (g() && [] == ![]) {
        f = function () {
            return false;
        };

        function g() {
            return true;
        }
    }
}();
console.log(f());
console.log(g());
