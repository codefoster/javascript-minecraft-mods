
exports.boom = function () {

	// sets a default value for the strength of the explosion
	var strength = 5;

	// create a drone at the player's location
	var d = new Drone(self.location);

	// send the drone forward 5
	d.fwd(6);
	var loc = d.getLocation(); 

	// get the full 3D location of the drone as a location object
	// the location object contains a reference to a world object which has a 
	// createExplosion method. We'll invoke it.
	loc.world.createExplosion(d.x, d.y, d.z, strength, false, true);
}
