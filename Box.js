class Box{
   constructor(x,y,width,height){
       var obtion = {
           restitution:0.5,
           friction:0.3,
           density:1.0
       }
       this.body = Bodies.rectangle(x,y,width,height,obtion)
       this.width =width;
       this.height = height;
       World.add(world,this.body)
   }
   display(){
       push();
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
  rectMode(CENTER)
fill(255)
rect(0,0,this.width,this.height)
pop();
   }
}