initColosseumContent = function() {

new game.ColosseumTournament({
	engName: 'green_ring',
	level: 1,
	price: {
		honor: 500
	},
	drop: {
		itemGroup: 'white',
		minAmount: 1,
		maxAmount: 100,
		chance: 90
	}
});

new game.ColosseumTournament({
	engName: 'bloody_mess',
	level: 20,
	price: {
		honor: 1000
	},
	drop: {
		itemGroup: 'green',
		minAmount: 1,
		maxAmount: 80,
		chance: 75
	}
});

new game.ColosseumTournament({
	engName: 'extermination',
	level: 40,
	price: {
		honor: 5000
	},
	drop: {
		itemGroup: 'blue',
		minAmount: 1,
		maxAmount: 60,
		chance: 55
	}
});

new game.ColosseumTournament({
	engName: 'mortal_combat',
	level: 60,
	price: {
		honor: 10000
	},
	drop: {
		itemGroup: 'purple',
		minAmount: 1,
		maxAmount: 40,
		chance: 40
	}
});

new game.ColosseumTournament({
	engName: 'mad_race',
	level: 80,
	price: {
		honor: 25000
	},
	drop: {
		itemGroup: 'orange',
		minAmount: 1,
		maxAmount: 20,
		chance: 25
	}
});

new game.ColosseumTournament({
	engName: 'fire_dragon',
	level: 100,
	price: {
		honor: 50000
	},
	drop: {
		itemGroup: 'red',
		minAmount: 1,
		maxAmount: 5,
		chance: 10
	}
});


};