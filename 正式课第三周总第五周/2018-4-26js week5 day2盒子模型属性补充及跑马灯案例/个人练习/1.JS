let css = function (...arg){
    let len = arg.length;
    if(len>=3) {
        setCss (...arg);
        return;
    }

    if (len === 3 && typeof arg[1] === 'object' && arg[1] !==null) {
        setGroupCss(...arg);
        return;
    }
    return getCss(...arg);
};