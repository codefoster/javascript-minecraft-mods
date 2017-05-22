var utils = require('utils');

exports.shelter = function () {
    var size = 6;
    var walls = move(self.location)
        .back(size/2)
        .left(size/2)
        .box0(blocks.iron, size, 1, size)
        .up()
        .box0(blocks.glass, size, 1, size)
        .up()
        .box0(blocks.iron, size, 1, size)
        .up();

    if(utils.time() >= 14000) 
        walls.box(blocks.glowstone, size, 1, size)
    else
        walls.box(blocks.iron, size, 1, size);

}

//TASK: make the if statement more readable by creating an isNight variable
//TAKS: simlify the if statement using the ?: ternary operator