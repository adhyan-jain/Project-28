class Stone{

  constructor(x,y,r){

    var options = {

     isStatic: false,
     restitution: 0,
     friction: 1,
     desity: 1.2,
    } 

   this.x = x;
   this.y = y;
   this.r = r;
   this.body = Bodies.rectangle(this.x, this.y, this.r, options);
   this.image = loadImage("stone.png");
   World.add(world, this.body);
  }

  display(){

   var angle = this.body.angle;
   push();
   translate(this.body.position.x, this.body.position.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image, this.x, this.y, this.r, this.r);
   pop();
  }
}