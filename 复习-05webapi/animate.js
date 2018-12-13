
//   封装函数
function animate(element,target){
    if(element.timerId){
        clearInterval(element.timerId);
        // timerId = null;
    }
    element.timerId = setInterval(function(){
        var step = 30;
        // var target = 800;
        var current = element.offsetLeft;
        if(current>target){
            step = -Math.abs(step);
        }
        if(Math.abs(current - target) < Math.abs(step)){
            clearInterval(element.timerId);
            element.style.left = target + 'px';
            return;
        }
        current+= step;
        element.style.left = current + 'px';
    },10)
} 