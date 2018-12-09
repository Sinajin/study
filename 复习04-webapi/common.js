function my$(id){
    return document.getElementById(id);
}

// 获取鼠标在页面的位置,处理浏览器兼容性问题
function getPage(e){
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;
    return{
        pageX:pageX,
        pageY:pageY
    }
}

// 获取两个日期的时间差
function getInterval(start, end){
    var interval = end - start;
    var day, hour, minute, second;
    interval /= 1000;
    day = Math.round(interval/60/60/24);
    hour = Math.round(interval/60/60%24);
    minute = Math.round(interval/60%60);
    second = Math.round(interval%60);
    return {
        day:day,
        hour:hour,
        minute:minute,
        second:second
    }
}