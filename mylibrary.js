function detectollision(stone1,mango1){

    if(stone1.x-mango1.x < (stone1.width+mango1.width)/2 &&
    mango1.x-stone1.x < (stone1.width+mango1.width)/2 &&
    stone1.y-mango1.y < (stone1.height+mango1.height)/2 &&
    mango1.y-stone1.y < (stone1.height+mango1.height)/2 )
{
Matter.Body.setStatic(mango1.body,false)

    }
    
}