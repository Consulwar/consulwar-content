import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';

initCardsContentPenalty = function() {
'use strict';

new game.Card({
  cardType: 'penalty',
  engName: 'penaltyHumans',
  name: 'Любовь к Рептилоидам',
  durationTime: 60 * 60,
  reloadTime: 1,
  effect: [new IncomeEffect({
    textBefore: 'Приток людей ',
    textAfter: '%',
    priority: 6,
    affect: 'humans',
    result: function({ level }) {
      return -100;
    }
  })]
});

};