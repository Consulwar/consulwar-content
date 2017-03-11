initEntranceRewardRanksContent = function() {

new game.EntranceRewardRank({
	id: 'white',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: [1, 42] } } }
	}]
});

new game.EntranceRewardRank({
	id: 'green',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	id: 'blue',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	id: 'purple',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	id: 'orange',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	id: 'red',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

};