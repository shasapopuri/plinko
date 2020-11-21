class Particles {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.color=color(random(0,255),random(0,255),random(0,255))
      this.width = width;
      this.height = height;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
        push();
      translate(pos.x,pos.y);
      rotate(this.body,angle);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0, this.radius*2, this.radius*2);
      pop();
    }
  };
  