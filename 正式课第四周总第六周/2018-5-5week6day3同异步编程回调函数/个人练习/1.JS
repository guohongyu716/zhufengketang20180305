// 执行一次
let count = 0;
setTimeout (() =>{
    count++;
  console.log(count);
},1000);

// 轮播定时器:每格一段时间执行一次
let count = 0;
setInterval (() =>{
    count++;
  console.log(count);
},1000);

// 清除定时器: 
//=> clearTimeout / clearInterval  :这两个方法中任何一个都可以清除用任何方法创建的定时器
//1.设置定时器会有一个返回值,这个值是一个数字,属于定时器编号,代表当前是第几个定时器(不管基于setTimeout还是etInterval创建定时器这个编号会累加)
//2.clearTimeout[序号] clearInterval[序号]: 根据序号清除浏览器中设定的定时器


