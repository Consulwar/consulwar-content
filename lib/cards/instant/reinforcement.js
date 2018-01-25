import SpecialEffect from '/imports/modules/Effect/lib/SpecialEffect';

initCardsContentInstantReinforcement = function() {
'use strict';

new game.InstantCard({
  name: 'Охранные дроны',
  engName: 'SecurityDrones',
  cardType: 'instant',
  group: 'reinforcement',
  effect: new SpecialEffect({
    textBefore: 'подкрепление без потерь на ',
    textAfter: ' чести',
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
