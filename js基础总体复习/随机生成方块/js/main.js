var container = document.getElementById('container');

var array = [];
for(var i=0; i<10; i++){
    var r = Tools.getRandom(0,255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);
    
    var box = new Box(container,{ backgroundColor: 'rgb('+ r +','+ g +','+ b +')'});
    array.push(box);
}

// 设置随机位置,开启定时器
setInterval(randomBox, 500);

randomBox();

function randomBox(){
    // 随机生成方块的坐标
    for(var i=0; i<array.length; i++){
        var box = array[i];
        box.random();
    }
}