let fn = function(){


}
fn();



Array.prototype.mySlice= function(){
let newAry = {};
for (let i=0;i<this.length;i++){
    newAry.push(this[i]);
}
return newAry
}
let ary = [12,23,34];
ary.mySlice();