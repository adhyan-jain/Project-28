class Mango{

  constructor(x,y,r){

    var options = {

      isStatic: true,
      restitution: 0,
      friction: 1
    } 

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.rectangle(this.x,this.y,this.r,options);
    this.image = loadImage("mango.png");
    World.add(world, this.body);
  }

  display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(RADIUS);
    image(this.image, this.x,this.y,this.r,this.r);
    pop();
  }
}