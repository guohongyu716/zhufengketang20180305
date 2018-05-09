let getCss = function(ele, attr){
    let val = null;
    if('getComputeStyle' in window){
    val = window.getComputedStyle(ele) [attr];
    let reg = /^-?\d+(\.\d+)?(px|pt|em|rem)?$/i;
    reg.text(val) ? val = parseFloat (val) :null;
    }
    return val;
};

let setCss = function (ele, attr, value){
   ! isNaN(value) && !/^(zIndex|opacity)$/i.text(attr) ? value += 'px' : null;
   ele['style'][attr] = value;
};

let setGroupCss = function(ele, options){
for (let key in options){
    if (options.hasOwnProperty,(key)){
        setCss(ele, key, options[key]);
    }
}
};