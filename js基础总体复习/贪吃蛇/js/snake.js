(function(){
    var elements = [];
    function Snake(options){
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        // 蛇的移动方向
        this.direction = options.direction || 'right';
        this.body = [
            {x:3, y:2, color:'red'},
            {x:2, y:2, color:'blue'},
            {x:1, y:2, color:'blue'}
        ];
    }

    Snake.prototype.render = function(map){
        remove();
        for(var i=0; i<this.body.length; i++){
            var object = this.body[i];
            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            // 设置样式
            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    }
    // 私有成员
    // 走一步删除一个蛇节
    function remove(){
        for(var i=elements.length -1; i>=0; i-- ){
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i,1);
        }
    }


    // 控制蛇移动的方法
    Snake.prototype.move = function(){
        // 控制蛇的身体移动(当前蛇节 到上一个蛇节的位置)
        for(var i=this.body.length - 1; i>0; i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        // 控制蛇头移动
        // 判断蛇移动的方向
        var head = this.body[0];
        switch(this.direction){
            case 'right':
            head.x +=1;
            break;
            case 'left':
            head.x -=1;
            break;
            case 'top':
            head.y -=1;
            break;
            case 'bottom':
            head.y +=1;
            break;

    }

    }

    // 暴露构造函数给外部
    window.Snake = Snake;
})()

// var map = document.getElementById('map');
// var snake = new Snake();
// snake.render(map);