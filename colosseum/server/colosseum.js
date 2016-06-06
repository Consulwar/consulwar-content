initColosseumContentServer = function() {

_.extend(Game.Colosseum.tournaments.green_ring, {
	drop: [{
		chance: 18,
		profit: { resources: { weapon_parts: [1, 10] } }
	}, {
		chance: 18,
		profit: { resources: { silver_plasmoid: [1, 10] } }
	}, {
		chance: 18,
		profit: { resources: { ship_details: [1, 10] } }
	}, {
		chance: 18,
		profit: { resources: { meteor_fragments: [1, 10] } }
	}, {
		chance: 18,
		profit: { resources: { crystal_fragments: [1, 10] } }
	}, {
		chance: 10,
		profit: { resources: { metals: 25000, crystals: 25000 } }
	}]
});

_.extend(Game.Colosseum.tournaments.bloody_mess, {
	drop: [{
		chance: 15,
		profit: { resources: { secret_technology: [1, 8] } }
	}, {
		chance: 15,
		profit: { resources: { rotary_amplifier: [1, 8] } }
	}, {
		chance: 15,
		profit: { resources: { reptile_technology: [1, 8] } }
	}, {
		chance: 15,
		profit: { resources: { emerald_plasmoid: [1, 8] } }
	}, {
		chance: 15,
		profit: { resources: { batteries: [1, 8] } }
	}, {
		chance: 25,
		profit: { resources: { metals: 50000, crystals: 50000 } }
	}]
});

_.extend(Game.Colosseum.tournaments.extermination, {
	drop: [{
		chance: 11,
		profit: { resources: { sapphire_plasmoid: [1, 6] } }
	}, {
		chance: 11,
		profit: { resources: { quad_cooler: [1, 6] } }
	}, {
		chance: 11,
		profit: { resources: { plasma_transistors: [1, 6] } }
	}, {
		chance: 11,
		profit: { resources: { nanowires: [1, 6] } }
	}, {
		chance: 11,
		profit: { resources: { chip: [1, 6] } }
	}, {
		chance: 45,
		profit: { resources: { metals: 250000, crystals: 250000 } }
	}]
});

_.extend(Game.Colosseum.tournaments.mortal_combat, {
	drop: [{
		chance: 8,
		profit: { resources: { nicolascagium: [1, 4] } }
	}, {
		chance: 8,
		profit: { resources: { keanureevesium: [1, 4] } }
	}, {
		chance: 8,
		profit: { resources: { jimcarrium: [1, 4] } }
	}, {
		chance: 8,
		profit: { resources: { garyoldmanium: [1, 4] } }
	}, {
		chance: 8,
		profit: { resources: { amethyst_plasmoid: [1, 4] } }
	}, {
		chance: 60,
		profit: { resources: { metals: 500000, crystals: 500000 } }
	}]
});

_.extend(Game.Colosseum.tournaments.mad_race, {
	drop: [{
		chance: 5,
		profit: { resources: { topaz_plasmoid: [1, 2] } }
	}, {
		chance: 5,
		profit: { resources: { ancient_technology: [1, 2] } }
	}, {
		chance: 5,
		profit: { resources: { ancient_scheme: [1, 2] } }
	}, {
		chance: 5,
		profit: { resources: { ancient_knowledge: [1, 2] } }
	}, {
		chance: 5,
		profit: { resources: { ancient_artefact: [1, 2] } }
	}, {
		chance: 75,
		profit: { resources: { metals: 1000000, crystals: 1000000 } }
	}]
});

_.extend(Game.Colosseum.tournaments.fire_dragon, {
	drop: [{
		chance: 10,
		profit: { resources: { ruby_plasmoid: 1 } }
	}, {
		chance: 90,
		profit: { resources: { metals: 2000000, crystals: 2000000 } }
	}]
});
	
};