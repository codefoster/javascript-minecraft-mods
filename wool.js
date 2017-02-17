exports.wool = function() {
    // var materials = [blocks.wool.black, blocks.wool.white];
    // var materials_reversed = materials.slice(0).reverse();
    // this
    //     .boxa(materials,1,1,10)
    //     .right()
    //     .boxa(materials_reversed,1,1,10)
    //     .right()
    //     .times(5);

    var wool = [blocks.wool.red, blocks.wool.orange, blocks.wool.yellow, blocks.wool.green, blocks.wool.blue, blocks.wool.magenta, blocks.wool.purple];
    
    boxa(wool,1,1,wool.length);
    
    var wool_sliced = wool.slice(1,5);
    right(1)
        .boxa(wool_sliced,1,1,wool_sliced.length);

    var wool_reversed = wool.slice(0).reverse();
    right(2)
        .boxa(wool_reversed,1,1,wool_reversed.length);

    var wool_filtered = wool.slice(0).filter(function(w) { return w == '35:10'; });
    right(3)
        .boxa(wool_filtered,1,1,wool_filtered.length);
}