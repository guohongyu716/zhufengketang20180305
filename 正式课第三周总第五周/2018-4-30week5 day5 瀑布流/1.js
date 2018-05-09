RegExp.prototype.myExecAll = function (str) {
    //=>this:reg 当前操作的正则
    //=>str:我们要捕获的字符串
    //=>执行EXEC开始捕获，具体捕获多少次不定，但是一直到捕获不到内容(NULL)为止，期间把捕获到的内容存储到数组中即可
    //=>为了防止出现死循环：我们检测一下正则是否加G，没有加G只把第一次捕获的结果返回即可
    if (!this.global) {
        return this.exec(str);
    }
    let result = [],
        valAry = this.exec(str);
    while (valAry) {//=>this.lastIndex < str.length
        result.push(valAry[0]);//=>把每一次正则捕获到的结果第一项(具体捕获的内容)存储到容器中
        valAry = this.exec(str);
    }
    return result;
};



RegExp.prototype.myExecAll = function(str) {
    if(!this.global){
        return this.exec(str);

    }
    let result = [],
    valAry = this.exec(str);
    while (valAry) {
        result.push(valAry[0]);
        valAry = this.exec(str);
    }
    return result;
}
