exports.wool = function() {
    var wool = [blocks.wool.red, blocks.wool.orange, blocks.wool.yellow, blocks.wool.green, blocks.wool.blue, blocks.wool.magenta, blocks.wool.purple];
    var biglist = [];
    for(var i = 0; i < 100; i++) 
        biglist.push(wool[Math.random() * wool.length]);
    
    right(3).boxa(biglist,1,1,biglist.length);
    
    //create an array of boxes using all of the wool colors
    boxa(wool,1,1,wool.length);
    
    //slice out some of the wool blocks and lay them next to the first
    var wool_sliced = wool.slice(1,5);
    right(1)
        .boxa(wool_sliced,1,1,wool_sliced.length);

    //now reverse them and 
    var wool_reversed = wool.slice(0).reverse();
    right(2)
        .boxa(wool_reversed,1,1,wool_reversed.length);

}

//TASK: use the .filter() method to only show the purple ('35:10') block
//TASK: create an array of 100 wool blocks of random colors 