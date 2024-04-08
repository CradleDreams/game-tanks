const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = './image/grass/grass.jpg';
const tank1 = new Image();
tank1.src = './image/tank/tank_right.png';
const tank2 = new Image();
tank2.src = './image/tank/tank_left.png';
const tank3 = new Image();
tank3.src = './image/tank/tank_up.png';
const tank4 = new Image();
tank4.src = './image/tank/tank_down.png';
const wall = new Image();
wall.src = './image/wall.jpg';
const barrier = new Image();
barrier.src = './image/barrier.jpg';
const bullet1 = new Image();
bullet1.src = './image/bullet/bullet_right.png';
const bullet2 = new Image();
bullet2.src = './image/bullet/bullet_left.png';
const bullet3 = new Image();
bullet3.src = './image/bullet/bullet_up.png';
const bullet4 = new Image();
bullet4.src = './image/bullet/bullet_down.png';
a = tank1
let x = 0;
let y = 0;
let x1 = 30;
let y1 = 13;
let k = 0;
let p = 0;
let d = 0;
let c = 0;
document.addEventListener('keydown', direction);
let dir;
function direction(event) {
    if(event.keyCode == 68)
        dir = 'right';
    else if(event.keyCode == 65)
        dir = 'left';
    else if(event.keyCode == 87)
        dir = 'up';
    else if(event.keyCode == 83)
        dir = 'down';
    if (event.keyCode == 32)
        p = 1;
    if (event.keyCode == 13)
        if (d == 0) d = 1
        else d = 0

}
function drawGame() {
    if (p == 1 && c == 0)
        var right = setInterval(function () {
            k = 1
            x1+=100
            ctx.drawImage(bullet1, x1, y1,20,20);
            clearInterval(right)
            if (x1>1390) {
                x1=x+30
                y1=y+15
                p = 0
                k = 0

            }
        }, 1)
    else if (p == 1 && c == 1)
        var left = setInterval(function () {
            k = 1
            x1-=100
            ctx.drawImage(bullet2, x1, y1,20,20);
            clearInterval(left)
            if (x1<0) {
                x1=x+30
                y1=y+15
                p = 0
                k = 0
            }
        }, 1)
    else if (p == 1 && c == 2)
        var up = setInterval(function () {
            k = 1
            y1-=100
            ctx.drawImage(bullet3, x1, y1,20,20);
            clearInterval(up)
            if (y1<0) {
                x1=x+30
                y1=y+15
                p = 0
                k = 0
            }
        }, 1)
    else if (p == 1 && c == 3)
        var down = setInterval(function () {
            k = 1
            y1+=100
            ctx.drawImage(bullet4, x1, y1,20,20);
            clearInterval(down)
            if (y1>820) {
                x1=x+30
                y1=y+15
                p = 0
                k = 0
            }
        }, 1)
    ctx.drawImage(ground, 0, 0, 1440, 820);

    //танк
    ctx.drawImage(a, x, y, 50, 50);
    if (d==0)
        if(dir == 'left' && x>0) x-=10, a = tank2;
        else if(dir == 'right' && x<1390) x+=10, a = tank1;
        else if(dir == 'up' && y>0) y-=10, a = tank3;
        else if(dir == 'down' && y<770) y+=10, a = tank4;
        if (p == 0)
            if(dir == 'left' && k==0) c = 1, x1-=10;
            else if(dir == 'right' && k==0) x1+=10, c = 0;
            else if(dir == 'up' && k==0) y1-=10, c = 2;
            else if(dir == 'down' && k==0) y1+=10, c = 3;

    //пуля



}
let game = setInterval(drawGame, 40);



