class Mango {
    constructor(x,y){
      var options={
isStatic:true,
restitution:0,
friction:1

      }
      this.width=50;
      this.height=50;
      this.body=Bodies.rectangle(x,y,this.width,this.height,options)
      this.image=loadImage("mango.png")
      World.add(world,this.body)
    }
    

    display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
pop()
    }
  }
  