initColosseumContent = function() {

new game.ColosseumTournament({
	engName: 'green_ring',
	name: 'Зеленый ринг',
	description: 'Шанс получить белый артефакт',
	level: 1,
	price: {
		honor: 500
	},
	drop: {
		itemGroup: 'white',
		minAmount: 1,
		maxAmount: 100,
		chance: 90
	},
	reward: {
		metals: 25000,
		crystals: 25000
	}
});

new game.ColosseumTournament({
	engName: 'bloody_mess',
	name: 'Кровавое месиво',
	description: 'Шанс получить зеленый артефакт',
	level: 20,
	price: {
		honor: 1000
	},
	drop: {
		itemGroup: 'green',
		minAmount: 1,
		maxAmount: 80,
		chance: 75
	},
	reward: {
		metals: 50000,
		crystals: 50000
	}
});

new game.ColosseumTournament({
	engName: 'extermination',
	name: 'Рептилоидное истребление',
	description: 'Шанс получить синий артефакт',
	level: 40,
	price: {
		honor: 5000
	},
	drop: {
		itemGroup: 'blue',
		minAmount: 1,
		maxAmount: 60,
		chance: 55
	},
	reward: {
		metals: 250000,
		crystals: 250000
	}
});

new game.ColosseumTournament({
	engName: 'mortal_combat',
	name: 'Смертельная битва',
	description: 'Шанс получить фиолетовый артефакт',
	level: 60,
	price: {
		honor: 10000
	},
	drop: {
		itemGroup: 'purple',
		minAmount: 1,
		maxAmount: 40,
		chance: 40
	},
	reward: {
		metals: 500000,
		crystals: 500000
	}
});

new game.ColosseumTournament({
	engName: 'mad_race',
	name: 'Бешеная гонка',
	description: 'Шанс получить оранжевый артефакт',
	level: 80,
	price: {
		honor: 25000
	},
	drop: {
		itemGroup: 'orange',
		minAmount: 1,
		maxAmount: 20,
		chance: 25
	},
	reward: {
		metals: 1000000,
		crystals: 1000000
	}
});

new game.ColosseumTournament({
	engName: 'fire_dragon',
	name: 'Огненный дракон',
	description: 'Шанс получить красный артефакт',
	level: 100,
	price: {
		honor: 50000
	},
	drop: {
		itemGroup: 'red',
		minAmount: 1,
		maxAmount: 5,
		chance: 10
	},
	reward: {
		metals: 2000000,
		crystals: 2000000
	}
});


};