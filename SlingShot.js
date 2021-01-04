class SlingShot{
    constructor(body1, pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB= pointB;
        this.sling= Constraint.create(options);
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    drawline(){
        image(this.sling1,200,20);
        image(this.sling2,170,15)
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB= this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(10);
                line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-15,15,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
           pop();
        }

    }
}