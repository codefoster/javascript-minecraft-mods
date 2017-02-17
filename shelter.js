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

    if(utils.time() >= 14000) //make this more readable by creating an isNight variable
        walls.box(blocks.glowstone, size, 1, size)
    else
        walls.box(blocks.iron, size, 1, size);
    //make the above simpler by using the ?: ternary operator

}