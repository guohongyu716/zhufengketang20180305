~function (pro) {
    pro.plus = function plus(val) {
        return this + Number(val);
    };
    pro.minus = function minus(val) {
        return this - Number(val);
    };
}(Number.prototype);
var n = 5;
var res = n.plus(3).minus(2);//=>res=6
console.log(res);
