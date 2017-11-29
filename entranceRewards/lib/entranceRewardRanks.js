initEntranceRewardRanksContent = function() {
'use strict';

new game.EntranceRewardRank({
  engName: 'white',
  rewards: [{
    chance: 1,
    profit: { units: { fleet: { frigate: 1 } } }
  }, {
    chance: 9,
    profit: { units: { fleet: { gammadrone: 8 } } }
  }, {
    chance: 20,
    profit: { units: { ground: { fathers: 3 } } }
  }, {
    chance: 30,
    profit: { resources: { crystals: 30 } }
  }, {
    chance: 40,
    profit: { resources: { metals: 60 } }
  }]
});

new game.EntranceRewardRank({
  engName: 'green',
  rewards: [{
    chance: 1,
    profit: { units: { ground: { easytank: 1 } } }
  }, {
    chance: 19,
    profit: { units: { fleet: { wasp: 12 } } }
  }, {
    chance: 20,
    profit: { units: { ground: { agmogedcar: 1 } } }
  }, {
    chance: 30,
    profit: { resources: { crystals: 100 } }
  }, {
    chance: 30,
    profit: { resources: { metals: 250 } }
  }]
});

new game.EntranceRewardRank({
  engName: 'blue',
  rewards: [{
    chance: 2,
    profit: { units: { ground: { prickartillery: 1 } } }
  }, {
    chance: 3,
    profit: { units: { fleet: { cruiser: 1 } } }
  }, {
    chance: 15,
    profit: { units: { fleet: { mirage: 16 } } }
  }, {
    chance: 20,
    profit: { resources: { crystals: 400 } }
  }, {
    chance: 60,
    profit: { resources: { metals: 750 } }
  }]
});

new game.EntranceRewardRank({
  engName: 'purple',
  rewards: [{
    chance: 1,
    profit: { units: { fleet: { battleship: 1 } } }
  }, {
    chance: 9,
    profit: { units: { ground: { mothertank: 1 } } }
  }, {
    chance: 25,
    profit: { units: { defense: { bomb: 375 } } }
  }, {
    chance: 30,
    profit: { resources: { crystals: 1200 } }
  }, {
    chance: 35,
    profit: { resources: { metals: 2500 } }
  }]
});

// Not ready
new game.EntranceRewardRank({
  engName: 'orange',
  rewards: [{
    chance: 1,
    profit: { units: { ground: { easytank: 1 } } }
  }, {
    chance: 19,
    profit: { units: { fleet: { wasp: 12 } } }
  }, {
    chance: 20,
    profit: { units: { ground: { agmogedcar: 1 } } }
  }, {
    chance: 30,
    profit: { resources: { crystals: 100 } }
  }, {
    chance: 30,
    profit: { resources: { metals: 250 } }
  }]
});

new game.EntranceRewardRank({
  engName: 'red',
  rewards: [{
    chance: 1,
    profit: { units: { ground: { easytank: 1 } } }
  }, {
    chance: 19,
    profit: { units: { fleet: { wasp: 12 } } }
  }, {
    chance: 20,
    profit: { units: { ground: { agmogedcar: 1 } } }
  }, {
    chance: 30,
    profit: { resources: { crystals: 100 } }
  }, {
    chance: 30,
    profit: { resources: { metals: 250 } }
  }]
});

Game.Helpers.deepFreeze(Game.EntranceReward.ranks);

};