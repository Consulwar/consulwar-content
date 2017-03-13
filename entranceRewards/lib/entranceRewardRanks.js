initEntranceRewardRanksContent = function() {

new game.EntranceRewardRank({
	engName: 'white',
	rewards: [{
		chance: 1,
		profit: { cards: { uncleBuilder: 3 } }
	}, {
		chance: 9,
		profit: { units: { fleet: { gammadrone: 20 } } }
	}, {
		chance: 20,
		profit: { units: { ground: { fathers: 50 } } }
	}, {
		chance: 30,
		profit: { resources: { crystals: 300 } }
	}, {
		chance: 40,
		profit: { resources: { metals: 600 } }
	}]
});

new game.EntranceRewardRank({
	engName: 'green',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	engName: 'blue',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	engName: 'purple',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	engName: 'orange',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

new game.EntranceRewardRank({
	engName: 'red',
	rewards: [{
		chance: 50,
		profit: { resources: { metals: 600 } }
	}, {
		chance: 50,
		profit: { units: { ground: { fathers: 42 } } }
	}]
});

};