initEntranceRewardsContent = function() {

initEntranceRewardRanksContent();

new game.EntranceReward({
	day: 0,
	profit: {
		rank: 'white'
	}
});

new game.EntranceReward({
	day: 1,
	profit: {
		resources: { crystals: 200 }
	}
});

new game.EntranceReward({
	day: 2,
	profit: {
		resources: { crystals: 300 }
	}
});

new game.EntranceReward({
	day: [3, 5],
	profit: {
		resources: { crystals: 350 }
	}
});

new game.EntranceReward({
	day: [6, 10],
	profit: {
		resources: { humans: 40 }
	}
});

new game.EntranceReward({
	day: [11, 14],
	profit: {
		units: { ground: { fathers: 42 } }
	}
});

new game.EntranceReward({
	day: [15, 25],
	profit: {
		units: { ground: { horizontalbarman: 42 } }
	}
});

new game.EntranceReward({
	day: 26,
	profit: {
		rank: 'white'
	}
});

new game.EntranceReward({
	day: 27,
	profit: {
		rank: 'green'
	}
});

new game.EntranceReward({
	day: 'default',
	profit: {
		rank: 'purple'
	}
});

};