class Log{
    constructor(x,y,height,angle){
        var obtion = {
            restitution:0.5,
            friction:0.3,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,20,height,obtion)
        this.width =20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
                World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
   rectMode(CENTER)
   strokeWeight(4)
   stroke("green")

 fill(255)
 rect(0,0,this.width,this.height)
 pop();
    }
}