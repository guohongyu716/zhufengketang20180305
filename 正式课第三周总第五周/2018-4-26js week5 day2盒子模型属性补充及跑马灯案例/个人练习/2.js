// js 实现动画的思路
// 让WRAPPER每隔一段时间(最优动画时间13-17ms),在原有的LEFT值基础上减去步长(想让动画快一些,步长就大一些)
let wrapper = document.querySelector(".wrapper ");
wrapper.innerHTML += wrapper.innerHTML;
utils.css(wrapper, "width", utils.css(wrapper, "width") * 2);
setInterval(() => {
  let curL = utils.css(wrapper, "left");
  curL -= 2;
  utils.css(wrapper, {
    left: curL
  });
  if (Math.abs(wrapper.offsetLeft) >= utils.css(wrapper, "width") / 2) {
    utils.css(wrapper, "left", 0);
  }
}, 13);
