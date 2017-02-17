exports.greetPlayer = function (player) {
    player = player || self;
    echo('Hi, ' + player.name);
}