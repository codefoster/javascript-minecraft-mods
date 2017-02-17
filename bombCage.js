exports.bombCage = function (size) {
    size = size || 8;

    var HEIGHT = 3;
    var BOMB_SIZE_FACTOR = 0.25;
    var bombSize = size * BOMB_SIZE_FACTOR;

    // set home
    up()
        .fwd(size/2)
        .chkpt('home');

    // make the wall
    move('home')
        .back(size)
        .left(size)
        .cylinder0(blocks.iron, size, HEIGHT);

    // make the bomb
    move('home')
        .back(bombSize)
        .left(bombSize)
        .cylinder(blocks.tnt, bombSize, HEIGHT);

    // make the triggers
    move('home')
        .back(bombSize + 1)
        .left(bombSize + 1)
        .cylinder0(blocks.pressure_plate_wood, bombSize + 1, 1);

}

