initCardsContentInstantReinforcement = function() {
'use strict';

new game.InstantCard({
  name: 'Охранные дроны',
  engName: 'SecurityDrones',
  cardType: 'instant',
  group: 'reinforcement',
  effect: new Game.Effect.Special({
    pretext: 'подкрепление без потерь на ',
    aftertext: ' чести',
    priority: 1,
    condition: {
      engName: 'instantReinforcement'
    },
    affect: 'protectedHonor',
    result: function() { return 100; }
  }),/*
  price: {
    credits: 10
  }*/
});

};
