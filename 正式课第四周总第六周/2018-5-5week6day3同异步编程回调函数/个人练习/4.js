//回调函数
//=>OBJ:我们需要迭代的数组、类数组、对象
let each = function (obj, callback) {
    //=>验证是数组(类数组)还是对象
    let flag = 'length' in obj;//=>我们先简单验证：有LENGTH是数组或者类数组，没有是对象
    if (flag) {
        for (let i = 0; i < obj.length; i++) {
            let item = obj[i];
            let res = callback && callback.call(item, i, item);//=>接收回调函数的返回值，如果返回的是FALSE，我们结束循环即可
            if (res === false) {
                break;
            }
        }
    } else {

    }
};
each([12, 23, 34], function (index, item) {
    //=>this:item
    // console.log(index, item, this);
    // return false;//=>如果回调函数返回FALSE，我们让其代表：结束当前迭代
    console.log(item);
    if (index >= 1) {
        return false;
    }
});




//=>OBJ:我们需要迭代的数组、类数组、对象
let each = function (obj, callback) {
    //=>验证是数组(类数组)还是对象
    let flag = 'length' in obj;//=>我们先简单验证：有LENGTH是数组或者类数组，没有是对象
    if (flag) {
        for (let i = 0; i < obj.length; i++) {
            let item = obj[i];
            let res = callback && callback.call(item, i, item);//=>接收回调函数的返回值，如果返回的是FALSE，我们结束循环即可
            if (res === false) {
                break;
            }
        }
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key],
                    res = callback && callback.call(value, key, value);
                if (res === false) {
                    break;
                }
            }
        }
    }
};
each([12, 23, 34], function (index, item) {
    //=>this:item
    // console.log(index, item, this);
    // return false;//=>如果回调函数返回FALSE，我们让其代表：结束当前迭代
    console.log(item);
    if (index >= 1) {
        return false;
    }
});
each({name: 'xxx', age: 12, sex: 0}, function (key, value) {
    console.log(key, value, this);
    if (key === 'age') {
        return false;
    }
});
