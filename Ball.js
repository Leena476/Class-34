class Ball {

    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:0.04,
            density:5,
            friction:1
        }

        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        push ();
        ellipseMode(RADIUS);
        fill ("hotpink");
        ellipse(pos.x,pos.y,this.r,this.r);
        pop ();

    }

}