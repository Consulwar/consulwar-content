initCosmosContentServerPlanets = function() {
'use strict';

_.extend(Game.Planets.types.jungle, {
	chance: 8,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.silver_plasmoid, 91],
			[Game.Artefacts.items.ship_details, 81],
			[Game.Artefacts.items.crystal_fragments, 83],
			// green
			[Game.Artefacts.items.rotary_amplifier, 77],
			[Game.Artefacts.items.reptile_technology, 75],
			[Game.Artefacts.items.batteries, 61],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 43],
			[Game.Artefacts.items.quad_cooler, 58],
			[Game.Artefacts.items.plasma_transistors, 68],
			// purple
			[Game.Artefacts.items.nicolascagium, 33],
			[Game.Artefacts.items.jimcarrium, 42],
			[Game.Artefacts.items.amethyst_plasmoid, 43],
			// orange
			[Game.Artefacts.items.ancient_technology, 36],
			[Game.Artefacts.items.ancient_scheme, 41],
			[Game.Artefacts.items.ancient_knowledge, 44]
		];
	}
});

_.extend(Game.Planets.types.terran, {
	chance: 5,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 99],
			[Game.Artefacts.items.ship_details, 76],
			[Game.Artefacts.items.crystal_fragments, 83],
			// green
			[Game.Artefacts.items.secret_technology, 68],
			[Game.Artefacts.items.rotary_amplifier, 61],
			[Game.Artefacts.items.batteries, 80],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 40],
			[Game.Artefacts.items.nanowires, 53],
			[Game.Artefacts.items.chip, 64],
			// purple
			[Game.Artefacts.items.keanureevesium, 45],
			[Game.Artefacts.items.jimcarrium, 40],
			[Game.Artefacts.items.garyoldmanium, 32],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 31],
			[Game.Artefacts.items.ancient_technology, 48],
			[Game.Artefacts.items.ancient_artefact, 37]
		];
	}
});

_.extend(Game.Planets.types.ocean, {
	chance: 12,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 80],
			[Game.Artefacts.items.silver_plasmoid, 95],
			[Game.Artefacts.items.crystal_fragments, 83],
			// green
			[Game.Artefacts.items.secret_technology, 78],
			[Game.Artefacts.items.reptile_technology, 66],
			[Game.Artefacts.items.batteries, 61],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 59],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 58],
			// purple
			[Game.Artefacts.items.nicolascagium, 30],
			[Game.Artefacts.items.keanureevesium, 32],
			[Game.Artefacts.items.amethyst_plasmoid, 42],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 32],
			[Game.Artefacts.items.ancient_technology, 30],
			[Game.Artefacts.items.ancient_artefact, 31]
		];
	}
});

_.extend(Game.Planets.types.arid, {
	chance: 10,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 78],
			[Game.Artefacts.items.ship_details, 89],
			[Game.Artefacts.items.meteor_fragments, 70],
			// green
			[Game.Artefacts.items.secret_technology, 71],
			[Game.Artefacts.items.reptile_technology, 62],
			[Game.Artefacts.items.batteries, 61],
			// blue
			[Game.Artefacts.items.quad_cooler, 42],
			[Game.Artefacts.items.sapphire_plasmoid, 45],
			[Game.Artefacts.items.nanowires, 62],
			// purple
			[Game.Artefacts.items.nicolascagium, 40],
			[Game.Artefacts.items.keanureevesium, 35],
			[Game.Artefacts.items.amethyst_plasmoid, 49],
			// orange
			[Game.Artefacts.items.ancient_technology, 36],
			[Game.Artefacts.items.ancient_knowledge, 32],
			[Game.Artefacts.items.ancient_artefact, 32]
		];
	}
});

_.extend(Game.Planets.types.tundra, {
	chance: 10,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 83],
			[Game.Artefacts.items.silver_plasmoid, 85],
			[Game.Artefacts.items.meteor_fragments, 77],
			// green
			[Game.Artefacts.items.secret_technology, 65],
			[Game.Artefacts.items.emerald_plasmoid, 76],
			[Game.Artefacts.items.batteries, 68],
			// blue
			[Game.Artefacts.items.plasma_transistors, 55],
			[Game.Artefacts.items.nanowires, 58],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 39],
			[Game.Artefacts.items.keanureevesium, 37],
			[Game.Artefacts.items.jimcarrium, 41],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 32],
			[Game.Artefacts.items.ancient_technology, 40],
			[Game.Artefacts.items.ancient_scheme, 35]
		];
	}
});

_.extend(Game.Planets.types.desert, {
	chance: 12,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 78],
			[Game.Artefacts.items.silver_plasmoid, 80],
			[Game.Artefacts.items.ship_details, 88],
			// green
			[Game.Artefacts.items.secret_technology, 75],
			[Game.Artefacts.items.emerald_plasmoid, 65],
			[Game.Artefacts.items.batteries, 71],
			// blue
			[Game.Artefacts.items.quad_cooler, 61],
			[Game.Artefacts.items.plasma_transistors, 42],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 31],
			[Game.Artefacts.items.keanureevesium, 35],
			[Game.Artefacts.items.garyoldmanium, 30],
			// orange
			[Game.Artefacts.items.ancient_scheme, 42],
			[Game.Artefacts.items.ancient_knowledge, 49],
			[Game.Artefacts.items.ancient_artefact, 30]
		];
	}
});

_.extend(Game.Planets.types.arctic, {
	chance: 8,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.silver_plasmoid, 76],
			[Game.Artefacts.items.ship_details, 82],
			[Game.Artefacts.items.crystal_fragments, 98],
			// green
			[Game.Artefacts.items.rotary_amplifier, 80],
			[Game.Artefacts.items.reptile_technology, 76],
			[Game.Artefacts.items.batteries, 74],
			// blue
			[Game.Artefacts.items.plasma_transistors, 63],
			[Game.Artefacts.items.nanowires, 63],
			[Game.Artefacts.items.chip, 56],
			// purple
			[Game.Artefacts.items.nicolascagium, 35],
			[Game.Artefacts.items.keanureevesium, 33],
			[Game.Artefacts.items.jimcarrium, 41],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 40],
			[Game.Artefacts.items.ancient_technology, 43],
			[Game.Artefacts.items.ancient_artefact, 44]
		];
	}
});

_.extend(Game.Planets.types.lava, {
	chance: 5,
	sizeMin: 1,
	sizeMax: 3,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.silver_plasmoid, 89],
			[Game.Artefacts.items.ship_details, 80],
			[Game.Artefacts.items.meteor_fragments, 88],
			// green
			[Game.Artefacts.items.secret_technology, 75],
			[Game.Artefacts.items.emerald_plasmoid, 62],
			[Game.Artefacts.items.batteries, 63],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 59],
			[Game.Artefacts.items.quad_cooler, 52],
			[Game.Artefacts.items.plasma_transistors, 70],
			// purple
			[Game.Artefacts.items.keanureevesium, 35],
			[Game.Artefacts.items.jimcarrium, 39],
			[Game.Artefacts.items.garyoldmanium, 30],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 49],
			[Game.Artefacts.items.ancient_scheme, 49],
			[Game.Artefacts.items.ancient_knowledge, 42]
		];
	}
});

_.extend(Game.Planets.types.barren, {
	chance: 10,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 89],
			[Game.Artefacts.items.silver_plasmoid, 90],
			[Game.Artefacts.items.meteor_fragments, 94],
			// green
			[Game.Artefacts.items.rotary_amplifier, 74],
			[Game.Artefacts.items.reptile_technology, 65],
			[Game.Artefacts.items.emerald_plasmoid, 78],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 56],
			[Game.Artefacts.items.quad_cooler, 57],
			[Game.Artefacts.items.chip, 70],
			// purple
			[Game.Artefacts.items.jimcarrium, 44],
			[Game.Artefacts.items.garyoldmanium, 34],
			[Game.Artefacts.items.amethyst_plasmoid, 32],
			// orange
			[Game.Artefacts.items.ancient_knowledge, 34],
			[Game.Artefacts.items.ancient_technology, 32],
			[Game.Artefacts.items.ancient_artefact, 44]
		];
	}
});

_.extend(Game.Planets.types.methane, {
	chance: 6,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 93],
			[Game.Artefacts.items.meteor_fragments, 77],
			[Game.Artefacts.items.crystal_fragments, 90],
			// green
			[Game.Artefacts.items.secret_technology, 64],
			[Game.Artefacts.items.rotary_amplifier, 66],
			[Game.Artefacts.items.batteries, 64],
			// blue
			[Game.Artefacts.items.plasma_transistors, 48],
			[Game.Artefacts.items.nanowires, 70],
			[Game.Artefacts.items.chip, 44],
			// purple
			[Game.Artefacts.items.nicolascagium, 33],
			[Game.Artefacts.items.keanureevesium, 43],
			[Game.Artefacts.items.jimcarrium, 30],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 45],
			[Game.Artefacts.items.ancient_scheme, 38],
			[Game.Artefacts.items.ancient_artefact, 45]
		];
	}
});

_.extend(Game.Planets.types.hydrogen, {
	chance: 6,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 80],
			[Game.Artefacts.items.ship_details, 83],
			[Game.Artefacts.items.meteor_fragments, 70],
			// green
			[Game.Artefacts.items.secret_technology, 65],
			[Game.Artefacts.items.rotary_amplifier, 77],
			[Game.Artefacts.items.emerald_plasmoid, 63],
			// blue
			[Game.Artefacts.items.plasma_transistors, 60],
			[Game.Artefacts.items.nanowires, 42],
			[Game.Artefacts.items.chip, 47],
			// purple
			[Game.Artefacts.items.nicolascagium, 49],
			[Game.Artefacts.items.garyoldmanium, 49],
			[Game.Artefacts.items.amethyst_plasmoid, 48],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 38],
			[Game.Artefacts.items.ancient_technology, 38],
			[Game.Artefacts.items.ancient_artefact, 35]
		];
	}
});

_.extend(Game.Planets.types.helium, {
	chance: 6,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 74],
			[Game.Artefacts.items.silver_plasmoid, 90],
			[Game.Artefacts.items.crystal_fragments, 90],
			// green
			[Game.Artefacts.items.reptile_technology, 75],
			[Game.Artefacts.items.emerald_plasmoid, 66],
			[Game.Artefacts.items.rotary_amplifier, 61],
			// blue
			[Game.Artefacts.items.plasma_transistors, 59],
			[Game.Artefacts.items.nanowires, 49],
			[Game.Artefacts.items.chip, 68],
			// purple
			[Game.Artefacts.items.nicolascagium, 43],
			[Game.Artefacts.items.garyoldmanium, 39],
			[Game.Artefacts.items.jimcarrium, 38],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 41],
			[Game.Artefacts.items.ancient_technology, 45],
			[Game.Artefacts.items.ancient_scheme, 37]
		];
	}
});

_.extend(Game.Planets.types.asteroids, {
	chance: 2,
	sizeMin: 1,
	sizeMax: 3,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 10],
			[Game.Artefacts.items.silver_plasmoid, 10],
			[Game.Artefacts.items.ship_details, 10],
			[Game.Artefacts.items.meteor_fragments, 10],
			[Game.Artefacts.items.crystal_fragments, 10],
			// green
			[Game.Artefacts.items.secret_technology, 10],
			[Game.Artefacts.items.rotary_amplifier, 10],
			[Game.Artefacts.items.reptile_technology, 10],
			[Game.Artefacts.items.emerald_plasmoid, 10],
			[Game.Artefacts.items.batteries, 10],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 10],
			[Game.Artefacts.items.quad_cooler, 10],
			[Game.Artefacts.items.plasma_transistors, 10],
			[Game.Artefacts.items.nanowires, 10],
			[Game.Artefacts.items.chip, 10],
			// purple
			[Game.Artefacts.items.nicolascagium, 10],
			[Game.Artefacts.items.keanureevesium, 10],
			[Game.Artefacts.items.jimcarrium, 10],
			[Game.Artefacts.items.garyoldmanium, 10],
			[Game.Artefacts.items.amethyst_plasmoid, 10],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 10],
			[Game.Artefacts.items.ancient_technology, 10],
			[Game.Artefacts.items.ancient_scheme, 10],
			[Game.Artefacts.items.ancient_knowledge, 10],
			[Game.Artefacts.items.ancient_artefact, 10]
		];
	}
});


};