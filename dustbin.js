
  class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
        
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x
      this.y=y
     // this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      
      push();
      //translate(this.body.position.x, this.body.position.y);
      
     // imageMode(CENTER);
      //image( 0, 0, this.width, this.height);
      
      fill("white");
        rect(this.x, this.y, this.width, this.height);
      pop();
    }
}
  
 