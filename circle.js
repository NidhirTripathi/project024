class Circle{
    constructor(x,y,radius){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
this.radius=radius;
}
display(){
var pos =this.body.position;
ellipseMode(RADIUS)
fill("orange")
ellipse(pos.x,pos.y,this.radius)
}
}