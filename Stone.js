class Stone {
    constructor(x,y){
      var options={
isStatic:false,
restiution:0,
friction:1,
density:1.2
      }
      this.body=Bodies.rectangle(x,y,30,30,options)
      this.image=loadImage("stone.png")
      World.add(world,this.body)
    }
    

    display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.image,0,0,30,30)
pop()
    }
  }