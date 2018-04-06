//生成一个四位随机验证码
// 数字+字母
// 找图片
// 滑动拼图
// 问答类
// 点击汉字拼成语
// 把倒着的文字或图片正过来

var codeBox = document.getElementById("codeBox");
var link = document.getElementById("link");
function queryCode() {
  var codeArea =
    "qwertyuiopasdfghjklzxcvbnm" + "QWERTYUIOPASDFGHJKLZXCVBNM" + "1234567890";

  var result = "";
  for (var i = 0; i < 4; i++) {
    var n = Math.round(Math.random() * 61),
      char = codeArea.charAt(n);
    result += char;
  }
  return result;
}
codeBox.innerHTML = queryCode();
link.onclick = function () {
    codeBox.innerHTML = queryCode();
};
