initEntranceRewardRanksContent = function() {
'use strict';

new game.EntranceRewardRank({
	engName: 'white',
	rewards: [{
		chance: 1,
		profit: { units: { fleet: { frigate: 10 } } }
	}, {
		chance: 9,
		profit: { units: { fleet: { gammadrone: 25 } } }
	}, {
		chance: 20,
		profit: { units: { ground: { fathers: 10 } } }
	}, {
		chance: 30,
		profit: { resources: { crystals: 3000 } }
	}, {
		chance: 40,
		profit: { resources: { metals: 6000 } }
	}]
});

new game.EntranceRewardRank({
	engName: 'green',
	rewards: [{
		chance: 1,
		profit: { units: { ground: { mothertank: 1 } } }
	}, {
		chance: 19,
		profit: { units: { fleet: { wasp: 50 } } }
	}, {
		chance: 20,
		profit: { units: { ground: { agmogedcar: 10 } } }
	}, {
		chance: 30,
		profit: { resources: { crystals: 10000 } }
	}, {
		chance: 30,
		profit: { resources: { metals: 25000 } }
	}]
});

new game.EntranceRewardRank({
	engName: 'blue',
	rewards: [{
		chance: 2,
		profit: { units: { ground: { relax: 1 } } }
	}, {
		chance: 3,
		profit: { units: { fleet: { cruiser: 40 } } }
	}, {
		chance: 15,
		profit: { units: { fleet: { mirage: 80 } } }
	}, {
		chance: 20,
		profit: { resources: { crystals: 40000 } }
	}, {
		chance: 60,
		profit: { resources: { metals: 75000 } }
	}]
});

// Not ready
new game.EntranceRewardRank({
	engName: 'purple',
	rewards: [{
		chance: 1,
		profit: { units: { ground: { mothertank: 1 } } }
	}, {
		chance: 19,
		profit: { units: { fleet: { wasp: 50 } } }
	}, {
		chance: 20,
		profit: { units: { ground: { agmogedcar: 10 } } }
	}, {
		chance: 30,
		profit: { resources: { crystals: 10000 } }
	}, {
		chance: 30,
		profit: { resources: { metals: 25000 } }
	}]
});

new game.EntranceRewardRank({
	engName: 'orange',
	rewards: [{
		chance: 1,
		profit: { units: { ground: { mothertank: 1 } } }
	}, {
		chance: 19,
		profit: { units: { fleet: { wasp: 50 } } }
	}, {
		chance: 20,
		profit: { units: { ground: { agmogedcar: 10 } } }
	}, {
		chance: 30,
		profit: { resources: { crystals: 10000 } }
	}, {
		chance: 30,
		profit: { resources: { metals: 25000 } }
	}]
});

new game.EntranceRewardRank({
	engName: 'red',
	rewards: [{
		chance: 1,
		profit: { units: { ground: { mothertank: 1 } } }
	}, {
		chance: 19,
		profit: { units: { fleet: { wasp: 50 } } }
	}, {
		chance: 20,
		profit: { units: { ground: { agmogedcar: 10 } } }
	}, {
		chance: 30,
		profit: { resources: { crystals: 10000 } }
	}, {
		chance: 30,
		profit: { resources: { metals: 25000 } }
	}]
});

Game.Helpers.deepFreeze(Game.EntranceReward.ranks);

};