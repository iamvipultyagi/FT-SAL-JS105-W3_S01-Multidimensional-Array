function applyBreak(distance,time){
    if(time<0|| distance<0){
        console.log("Invalid Output")
    }else
    {
        let speed= distance/time;
        if(speed>40)
            console.log("Apply break");
        else 
            console.log("Keep Going");
    }
    
}
applyBreak(100,2);
applyBreak(72,2);