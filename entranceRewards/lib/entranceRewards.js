initEntranceRewardsContent = function() {

new game.EntranceReward({
	day: 0,
	profit: {
		resource: { metals: 600 }
	}
});

new game.EntranceReward({
	day: 1,
	profit: {
		resource: { crystals: 200 }
	}
});

new game.EntranceReward({
	day: 2,
	profit: {
		resource: { crystals: 300 }
	}
});

new game.EntranceReward({
	day: [3, 5],
	profit: {
		resource: { crystals: 350 }
	}
});

new game.EntranceReward({
	day: [6, 10],
	profit: {
		resource: { humans: 40 }
	}
});

new game.EntranceReward({
	day: [11, 14],
	profit: {
		unit: { ground: { fathers: 42 } }
	}
});

new game.EntranceReward({
	day: [15, 25],
	profit: {
		unit: { ground: { horizontalbarman: 42 } }
	}
});

new game.EntranceReward({
	day: 'default',
	profit: {
		unit: { ground: { fathers: 42 } }
	}
});

};