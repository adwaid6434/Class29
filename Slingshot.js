class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("./sprites/sling1.png");
        this.sling2=loadImage("./sprites/sling2.png");
        this.sling3=loadImage("./sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,185,20);
        image(this.sling2,160,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(44,28,8);
            if(pointA.x<200){
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y-39);
            line(pointA.x-20, pointA.y, pointB.x+5, pointB.y-39);
            image(this.sling3,pointA.x-30,pointA.y-5,15,30);
            }else {
            line(pointA.x+25, pointA.y, pointB.x-15, pointB.y-39);
            line(pointA.x+25, pointA.y, pointB.x+5, pointB.y-39);
            image(this.sling3,pointA.x+25,pointA.y-5,15,30);   
            }
        }
    }
    
}