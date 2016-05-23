initColosseumContent = function() {

new game.ColosseumTournament({
	engName: 'green_ring',
	name: 'Зеленый ринг',
	description: 'Шанс получить белый артефакт',
	level: 1,
	price: {
		honor: 500
	},
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

new game.ColosseumTournament({
	engName: 'bloody_mess',
	name: 'Кровавое месиво',
	description: 'Шанс получить зеленый артефакт',
	level: 20,
	price: {
		honor: 1000
	},
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
		profit: { resources: { batteries: [1, 80] } }
	}, {
		chance: 25,
		profit: { resources: { metals: 50000, crystals: 50000 } }
	}]
});

new game.ColosseumTournament({
	engName: 'extermination',
	name: 'Рептилоидное истребление',
	description: 'Шанс получить синий артефакт',
	level: 40,
	price: {
		honor: 5000
	},
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

new game.ColosseumTournament({
	engName: 'mortal_combat',
	name: 'Смертельная битва',
	description: 'Шанс получить фиолетовый артефакт',
	level: 60,
	price: {
		honor: 10000
	},
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

new game.ColosseumTournament({
	engName: 'mad_race',
	name: 'Бешеная гонка',
	description: 'Шанс получить оранжевый артефакт',
	level: 80,
	price: {
		honor: 25000
	},
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

new game.ColosseumTournament({
	engName: 'fire_dragon',
	name: 'Огненный дракон',
	description: 'Шанс получить красный артефакт',
	level: 100,
	price: {
		honor: 50000
	},
	drop: [{
		chance: 10,
		profit: { resources: { ruby_plasmoid: 1 } }
	}, {
		chance: 90,
		profit: { resources: { metals: 2000000, crystals: 2000000 } }
	}]
});


};