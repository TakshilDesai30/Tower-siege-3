class Blocks{
    constructor(x,y) {
        var options={
           'restitution':0.7,
           'density':0.02,
           'friction':0.1
        }

        this.body=Bodies.rectangle(x,y,40,60,options);
        this.width=40;
        this.height=60;
        this.visibility=255;
        World.add(world,this.body);
    }
    display() {
        if (this.body.speed<3) {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else {
            push ();
            World.remove(world,this.body);
            this.visibility=this.visibility-5;
            pop ();
        }
    }
    score() {
        if (this.visibility<0&&this.visibility>-105) {
            score++;
        }
    }
}