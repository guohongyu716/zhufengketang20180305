~(function() {
  let effect = {
    Linear: (t, b, c, d) => t/d * c + b 
  };
  window.animate = function animate(ele,target, duration = 1000, callback) {
    if (typeof duration === 'function'){
        callback = duration;
        duration = 1000;
    }
  }
})();
