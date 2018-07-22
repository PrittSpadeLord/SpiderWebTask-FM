var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var mouse = {
    x: undefined,
    y: undefined
}

var mousedown = false;

var radius = 10;

var bdown = false;
var rdown = false;
var gdown = false;
var kdown = false;
var ydown = false;
var edown = false;

var bcircle = new Circle(10, 10, 10);

window.addEventListener("mousedown", (event) => {
    mousedown = true;
});

window.addEventListener("mouseup", (event) => {
    mousedown = false;
});

window.addEventListener("keydown", (event) => {
    if(event.key == "b") {
        if(bdown == false) {
            bdown = true;
            rdown = false;
            gdown = false;
            kdown = false;
            ydown = false;
            edown = false;
            bcircle.draw("blue", "blue");
        }
        else {
            bdown = false;
            c.clearRect(0, 0, 21, 21);
        }
    }
    
    if(event.key == "r") {
        if(rdown == false) {
            rdown = true;
            bdown = false;
            gdown = false;
            kdown = false;
            ydown = false;
            edown = false;
            bcircle.draw("red", "red");
        }
        else {
            rdown = false;
            c.clearRect(0, 0, 21, 21);
        }
    }
    
    if(event.key == "g") {
        if(gdown == false) {
            gdown = true;
            bdown = false;
            rdown = false;
            kdown = false;
            ydown = false;
            edown = false;
            bcircle.draw("green", "green");
        }
        else {
            gdown = false;
            c.clearRect(0, 0, 21, 21);
        }
    }
    
    if(event.key == "k") {
        if(kdown == false) {
            kdown = true;
            bdown = false;
            rdown = false;
            gdown = false;
            ydown = false;
            edown = false;
            bcircle.draw("black", "black");
        }
        else {
            kdown = false;
            c.clearRect(0, 0, 21, 21);
        }
    }
    
    if(event.key == "y") {
        if(ydown == false) {
            ydown = true;
            bdown = false;
            rdown = false;
            gdown = false;
            kdown = false;
            edown = false;
            bcircle.draw("yellow", "yellow");
        }
        else {
            ydown = false;
            c.clearRect(0, 0, 21, 21);
        }
    }

    if(event.key == "e") {
        if(edown == false) {
            edown = true;
            bdown = false;
            rdown = false;
            gdown = false;
            kdown = false;
            ydown = false;
            bcircle.draw("black", "white");
        }
        else {
            edown = false;
            c.clearRect(0, 0, 21, 21);
        }
    }

    if(event.key == '1') {
        radius = 2;
        var circle = new Circle(mouse.x, mouse.y, radius);
    }

    if(event.key == '2') {
        radius = 4;
        var circle = new Circle(mouse.x, mouse.y, radius);
    }

    if(event.key == '3') {
        radius = 6;
        var circle = new Circle(mouse.x, mouse.y, radius);
    }

    if(event.key == '4') {
        radius = 8;
        var circle = new Circle(mouse.x, mouse.y, radius);
    }

    if(event.key == '5') {
        radius = 10;
        var circle = new Circle(mouse.x, mouse.y, radius);
    }
});

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y - canvas.offsetTop;

    var circle = new Circle(mouse.x, mouse.y, radius);

    if(mousedown == true) {
        if(bdown == true) {
            circle.draw("blue", "blue");
        }
    
        if(gdown == true) {
            circle.draw("green", "green");
        }
    
        if(rdown == true) {
            circle.draw("red", "red");
        }
    
        if(kdown == true) {
            circle.draw("black", "black");
        }
    
        if(ydown == true) {
            circle.draw("yellow", "yellow");
        }

        if(edown == true) {
            circle.draw("white", "white");
        }
    }
});

function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.draw = function(outline, fill) {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
        c.strokeStyle = outline;
        c.stroke();
        c.fillStyle = fill;
        c.fill();
    }
}