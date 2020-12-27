class Box {

    constructor(x,y,w,h){

        var options = {
            isStatic:false,
            restitution: 0.04,
            friction:1
        }

        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.color = color(random(50,255),random(50,255),random(50,255));
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill (this.color);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    }

}