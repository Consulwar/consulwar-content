initEntranceRewardRanksContent = function() {
'use strict';

new game.EntranceRewardRank({
  engName: 'white',
  rewards: [{
    chance: 1,
    profit: { units: { 'Unit/Human/Space/Frigate': 1 } },
  }, {
    chance: 9,
    profit: { units: { 'Unit/Human/Space/Gammadrone': 8 } },
  }, {
    chance: 20,
    profit: { units: { 'Unit/Human/Ground/Infantry/Father': 3 } },
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
    profit: { units: { 'Unit/Human/Ground/Enginery/EasyTank': 1 } },
  }, {
    chance: 19,
    profit: { units: { 'Unit/Human/Space/Wasp': 12 } },
  }, {
    chance: 20,
    profit: { units: { 'Unit/Human/Ground/Enginery/Agmogedcar': 1 } },
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
    profit: { units: { 'Unit/Human/Ground/Air/Xynlet': 1 } },
  }, {
    chance: 3,
    profit: { units: { 'Unit/Human/Space/Cruiser': 1 } },
  }, {
    chance: 15,
    profit: { units: { 'Unit/Human/Space/Mirage': 16 } },
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
    profit: { units: { 'Unit/Human/Space/Battleship': 1 } },
  }, {
    chance: 9,
    profit: { units: { 'Unit/Human/Ground/Enginery/MotherTank': 1 } },
  }, {
    chance: 25,
    profit: { units: { 'Unit/Human/Defense/Mine': 375 } },
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
    profit: { units: { 'Unit/Human/Ground/Enginery/EasyTank': 1 } },
  }, {
    chance: 19,
    profit: { units: { 'Unit/Human/Space/Wasp': 12 } },
  }, {
    chance: 20,
    profit: { units: { 'Unit/Human/Ground/Enginery/Agmogedcar': 1 } },
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
    profit: { units: { 'Unit/Human/Ground/Enginery/EasyTank': 1 } },
  }, {
    chance: 19,
    profit: { units: { 'Unit/Human/Space/Wasp': 12 } },
  }, {
    chance: 20,
    profit: { units: { 'Unit/Human/Ground/Enginery/Agmogedcar': 1 } },
  }, {
    chance: 30,
    profit: { resources: { crystals: 100 } }
  }, {
    chance: 30,
    profit: { resources: { metals: 250 } }
  }]
});

};