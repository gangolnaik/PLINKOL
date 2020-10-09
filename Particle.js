class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.5,
            friction: 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(0, 255,100), random(0, 255,70), random(0, 255));
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        noStroke();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}