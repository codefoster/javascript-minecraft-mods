exports.snake = function (distance, maxRun, blockType) {
    if (!distance) throw "hey, dummy, you need a distance parameter";

    //make defaults for the values passed in
    maxRun = maxRun || 5;
    blockType = blockType || blocks.oak;

    var d = up();
    var directions = [d.up, d.down, d.fwd, d.left, d.right];

    //distance
    for (var i = 0; i < distance; i++) {
        var randomDirection = getRandomIntInclusive(0, directions.length - 1);
        var randomDistance = getRandomIntInclusive(1, maxRun);

        //run
        for (var j = 0; j < randomDistance; j++) {
            directions[randomDirection].call(d);

            //create a single block
            d.box(blockType, 1, 1, 1);
        }
    }

}

//random number between min and max (inclusive)
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}