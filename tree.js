class Tree {
    constructor(x,y){
      var options={
isStatic:true,

      }
      this.body=Bodies.rectangle(x,y,30,30,options)
      this.image=loadImage("tree.png")
      World.add(world,this.body)
    }
    

    display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.image,0,0,500,500)
pop()
    }
  }