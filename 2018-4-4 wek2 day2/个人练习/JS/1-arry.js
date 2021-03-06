//数组去重
var ary = [1, 2, 2, 3, 4, 4, 3, 4, 5];
//解决方案1
//依次拿出数组中的每一项，（排除最后一项）
//当前拿出项和后面每一项依次比较
// 如果发现有重复的，我们把找到的重复项在原数组中删除掉（splice）
for (var i = 0; i < ary.length - 1; i++) {
  var item = ary[i];
  for (var k = i + 1; k < ary.length; k++) {
    if (item === ary[k]) {
      ary.splice(k, 1);
      k--;
    }
  }
}
console.log(ary);









// /*==数组去重==*/
// var ary = [1, 2, 3, 2, 2, 3, 4, 3, 4, 5];

// /*--解决方案一--*/
// /*
//  * 1.依次拿出数组中的每一项（排除最后一项：最后一项后面没有需要比较的内容）
//  * 2.和当前拿出项后面的每一项依次比较
//  * 3.如果发现有重复的，我们把找到的这个重复项在原有数组中删除掉（splice）
//  */
// //=>i<ary.length-1：不用拿最后一项
// for (var i = 0; i < ary.length - 1; i++) {
//     var item = ary[i];
//     //=>item：依次拿出的每一项
//     //=>i：当前拿出项的索引
//     //=>和当前项后面的每一项比较：起始索引应该是i+1  k < ary.length找到末尾依次比较
//     for (var k = i + 1; k < ary.length; k++) {
//         //ary[k]：后面需要拿出来和当前项比较的这个值
//         if (item === ary[k]) {
//             //=>相等：重复了,我们拿出来的K这个比较项在原有数组中删除
//             // ary.splice(k, 1);
//             /*
//              * 这样做会导致数组塌陷问题：当我们把当前项删除后，后面每一项都要向前进一位，也就是原有数组的索引发生了改变，此时我们k继续累加1，下一次在拿出来的结果就会跳过一位
//              * 原数组 [1,2,3,4]
//              * i=1 =>2 我们把这一项干掉，然后i++，i=2
//              * 原数组 [1,3,4]
//              * i=2这一项是4,3这一项就错过了
//              * ...
//              */
//             ary.splice(k, 1);//=>删除后不能让k累加了
//             k--;//=>删除后先减减，在加加的时候相当于没加没减
//         }
//     }
// }
// console.log(ary);
