function Fn() {
    var n = 10;
    this.m = 20;
    this.aa = function () {
        console.log(this.m);
    }
}
Fn.prototype.bb = function () {
    console.log(this.n);
};
var f1=new Fn;

Fn.prototype={
    aa:function(){
        console.log(this.m+10);
    }
};
var f2=new Fn;
console.log(f1.constructor);
console.log(f2.constructor);
f1.bb();
f1.aa();
f2.bb();
f2.aa();
f2.__proto__.aa();
