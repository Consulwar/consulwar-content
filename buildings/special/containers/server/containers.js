initBuildingsSpecialContainersContentServer = function() {

_.extend(Game.Containers.items.defaultContainer, {
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
		chance: 4,
		profit: { units: { fleet: { carrier: 1 } } }
	}, {
		chance: 1,
		profit: { units: { fleet: { dreadnought: 1 } } }
	}]
});

};