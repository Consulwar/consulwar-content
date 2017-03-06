initEntranceRewardsContent = function() {

new game.EntranceReward({
	day: 0,
	reward: {
		metals: 600
	}
});

new game.EntranceReward({
	day: 1,
	reward: {
		crystals: 200
	}
});

new game.EntranceReward({
	day: 2,
	reward: {
		crystals: 300
	}
});

new game.EntranceReward({
	day: [3, 5],
	reward: {
		crystals: 350
	}
});

new game.EntranceReward({
	day: [6, 10],
	reward: {
		humans: 40
	}
});

new game.EntranceReward({
	day: 'default',
	reward: {
		fathers: 42
	}
});

};