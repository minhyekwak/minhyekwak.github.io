var vrr = 247;
var vgg = 242;
var vbb = 200;

var vx = 1440;
var vy = 840;
var vxDirection = 3;
var vyDirection = 3;

var brr = 150;
var bgg = 0;
var bbb = 255;

var bx = 0;
var by = 0;
var bxDirection = 1;
var byDirection = 1;

function setup() {
    createCanvas(1440,840)
}

function draw() {
    
    ellipse(vx,vy,80,80);
    fill(vrr,vgg,vbb);
    vx = vx + (4 * vxDirection);
    vy = vy + (10 * vyDirection);
    
    if(vx > 1440 || vx < 0) {
        vxDirection = vxDirection * -1;
    }
    if (vy > 840 || vy < 0) {
        vyDirection = vyDirection * -1;
    }
    
    ellipse(bx,by,80,80);
    fill(brr,bgg,bbb);
    bx = bx + (4 * bxDirection);
    by = by + (10 * byDirection);
    
    if(bx > 1440 || bx < 0) {
        bxDirection = bxDirection * -1;
    }
    if (by > 840 || by < 0) {
        byDirection = byDirection * -1;
    }
    
    
    
}