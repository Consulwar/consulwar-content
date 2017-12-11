import SpecialEffect from '/imports/modules/Effect/lib/SpecialEffect';

initCardsContentInstantCollectArtefacts = function() {
'use strict';

new game.InstantCard({
  name: 'Субботник',
  engName: 'sabbatarian',
  cardType: 'instant',
  group: 'collectArtefacts',
  effect: new SpecialEffect({
    textBefore: 'сбор артефактов ',
    textAfter: ' цикл',
    priority: 1,
    condition: {
      engName: 'instantCollectArtefacts'
    },
    affect: 'cycles',
    result: function() { return 1; }
  })/*,
  price: {
    credits: 10000
  }*/
});

};
