initEntranceRewardsContent = function() {

initEntranceRewardRanksContent();

new game.EntranceReward({
	day: 0,
	profit: 'white'
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
		units: { ground: { fathers: 42 } }
	}
});

new game.EntranceReward({
	day: [6, 10],
	profit: {
		units: { ground: { horizontalbarman: 42 } }
	}
});

new game.EntranceReward({
	day: [11, 14],
	profit: {
		units: { ground: { mothertank: 42 } }
	}
});

new game.EntranceReward({
	day: [15, 20],
	profit: {
		units: { ground: { horizontalbarman: 42 } }
	}
});

new game.EntranceReward({
	day: 21,
	profit: {
		resources: { silver_plasmoid: 50 }
	}
});

new game.EntranceReward({
	day: 22,
	profit: {
		resources: { secret_technology: 40 }
	}
});

new game.EntranceReward({
	day: 23,
	profit: {
		resources: { quad_cooler: 30 }
	}
});

new game.EntranceReward({
	day: 24,
	profit: {
		resources: { keanureevesium: 20 }
	}
});

new game.EntranceReward({
	day: 25,
	profit: {
		resources: { ancient_technology: 12 }
	}
});

new game.EntranceReward({
	day: 26,
	profit: 'white'
});

new game.EntranceReward({
	day: 27,
	profit: 'green'
});

new game.EntranceReward({
	day: 28,
	profit: { resources: { metals: 5000 } }
});

new game.EntranceReward({
	day: 29,
	profit: { resources: { crystals: 8000 } }
});

new game.EntranceReward({
	day: 30,
	profit: { resources: { humans: 31000 } }
});

new game.EntranceReward({
	day: 31,
	profit: { resources: { honor: 15000 } }
});

new game.EntranceReward({
	day: 32,
	profit: { resources: { credits: 531 } }
});

new game.EntranceReward({
	day: 33,
	profit: {
		units: { fleet: { gammadrone: 15 } }
	}
});

new game.EntranceReward({
	day: 34,
	profit: {
		units: { fleet: { flagship: 1500000 } }
	}
});

new game.EntranceReward({
	day: 35,
	profit: {
		cards: { uncleBuilder: 3 }
	}
});

new game.EntranceReward({
	day: 36,
	profit: {
		houseItems: { tron: { gameofthrones: 1 } }
	}
});

new game.EntranceReward({
	day: [37, 79],
	profit: 'blue'
});

new game.EntranceReward({
	day: 'default',
	profit: 'purple'
});

};