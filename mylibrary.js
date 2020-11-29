function detectollision(stone1,mango1){

    stonepos=stone1.body.position;
    mangopos=mango1.body.position

    if(stonepos.x-mangopos.x < (stone1.width+mango1.width)/2 &&
    mangopos.x-stonepos.x < (stone1.width+mango1.width)/2 &&
    stonepos.y-mangopos.y < (stone1.height+mango1.height)/2 &&
    mangopos.y-stonepos.y < (stone1.height+mango1.height)/2 )
{
Matter.Body.setStatic(mango1.body,false)

    }
    
}