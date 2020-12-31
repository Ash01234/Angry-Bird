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
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    drawline(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB= this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
}