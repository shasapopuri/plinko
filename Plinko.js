class Plinko {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.x = y;
      this.y = y;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
        push();
      translate(pos.x,pos.y);
      rotate(this.body);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0, this.radius*2, this.radius*2);
      pop();
    }
  };
  