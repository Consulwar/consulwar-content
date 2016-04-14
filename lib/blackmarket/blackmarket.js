initBlackmarketContent = function() {

// TODO: Заполнить сундуки!

new game.BlackmarketPack({
	engName: 'blackmarketPack1',
	name: 'Четкий сундук',
	description: 'Описание четкого сундука',
	price: {
		credits: 110
	},
	drop: [{
		chance: 20,
		profit: { units: { fleet: { gammadrone: 1 } } }
	}, {
		chance: 19,
		profit: { units: { fleet: { wasp: 1 } } }
	}, {
		chance: 15,
		profit: { units: { fleet: { mirage: 1 } } }
	}, {
		chance: 14,
		profit: { units: { fleet: { frigate: 1 } } }
	}, {
		chance: 12,
		profit: { units: { fleet: { truckc: 1 } } }
	}, {
		chance: 8,
		profit: { units: { fleet: { cruiser: 1 } } }
	}, {
		chance: 6,
		profit: { units: { fleet: { battleship: 1 } } }
	}, {
		chance: 3,
		profit: { units: { fleet: { carrier: 1 } } }
	}, {
		chance: 1,
		profit: { units: { fleet: { dreadnought: 1 } } }
	}, {
		chance: 1,
		profit: { resources: { honor: 1000 } }
	}]
});

};