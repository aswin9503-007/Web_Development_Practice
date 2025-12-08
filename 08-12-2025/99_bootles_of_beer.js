function beer (beercount){
    var count = beercount;

    while(count > 0 ){
        console.log(count + " bottles of beer on the wall, " + "bottles of beer.")
        count --;
        if(count > 0){
            console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.")
        }else{
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
        
    }console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + beercount + "bottles of beer on the wall.");
    
}

beer(99);