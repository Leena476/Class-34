class Slingshot {

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:400
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }
        
    display(){

        var posA = this.sling.bodyA.position;
        var posB = this.pointB;

        push ();
        strokeWeight(5);
        stroke(255);
        line(posA.x,posA.y,posB.x,posB.y);
        pop ();

    }

}