exports.make10Bears = function () {
    var drone = up(2).fwd();
    for (var i = 0; i < 1000; i++) {
        drone = drone.right(2);
        drone.spawn('POLAR_BEAR');
    }
}

//TASK: make 100 creepers
//TASK: make the creatures 5 blocks up in the air