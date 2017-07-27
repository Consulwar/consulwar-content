initCardsContentInstantCollectArtefacts = function() {
'use strict';

new game.InstantCard({
  name: 'Субботник',
  engName: 'sabbatarian',
  cardType: 'instant',
  group: 'collectArtefacts',
  effect: new Game.Effect.Special({
    pretext: 'сбор артефактов ',
    aftertext: ' цикл',
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
