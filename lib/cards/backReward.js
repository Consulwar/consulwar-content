import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';
import PriceEffect from '/imports/modules/Effect/lib/PriceEffect';

initCardsContentBackReward = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.BackRewardCard({
  engName: 'backReward1Month',
  name: 'От местного бомжа',
  description: '',
  durationTime: 60 * 60 * 24 * 5,
  fromDay: 30,
  cardType: 'backReward',
  cardGroup: 'backRewards',
  effect: [new IncomeEffect({
    textBefore: 'Приток населения ',
    textAfter: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 10;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 10;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 10;
    }
  }), new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 10;
    }
  }), new PriceEffect({
    textBefore: 'Все строится быстрее на ',
    textAfter: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 10;
    }
  })]
});

new game.BackRewardCard({
  engName: 'backReward2Months',
  name: 'От вон того столика',
  description: '',
  durationTime: 60 * 60 * 24 * 9,
  fromDay: 60,
  cardType: 'backReward',
  cardGroup: 'backRewards',
  effect: [new IncomeEffect({
    textBefore: 'Приток населения ',
    textAfter: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 15;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 15;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 15;
    }
  }), new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 15;
    }
  }), new PriceEffect({
    textBefore: 'Все строится быстрее на ',
    textAfter: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 20;
    }
  })]
});

new game.BackRewardCard({
  engName: 'backReward3Months',
  name: 'На, покушай',
  description: '',
  durationTime: 60 * 60 * 24 * 14,
  fromDay: 90,
  cardType: 'backReward',
  cardGroup: 'backRewards',
  effect: [new IncomeEffect({
    textBefore: 'Приток населения ',
    textAfter: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 20;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 20;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 20;
    }
  }), new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 20;
    }
  }), new PriceEffect({
    textBefore: 'Все строится быстрее на ',
    textAfter: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  })]
});

new game.BackRewardCard({
  engName: 'backRewardHalfYear',
  name: 'Догоняй остальных',
  description: '',
  durationTime: 60 * 60 * 24 * 21,
  fromDay: 182,
  cardType: 'backReward',
  cardGroup: 'backRewards',
  effect: [new IncomeEffect({
    textBefore: 'Приток населения ',
    textAfter: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 25;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 25;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 25;
    }
  }), new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 25;
    }
  }), new PriceEffect({
    textBefore: 'Все строится быстрее на ',
    textAfter: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 33;
    }
  })]
});

new game.BackRewardCard({
  engName: 'backRewardYear',
  name: 'С возвращением, Сынок',
  description: '',
  durationTime: 60 * 60 * 24 * 30,
  fromDay: 365,
  cardType: 'backReward',
  cardGroup: 'backRewards',
  effect: [new IncomeEffect({
    textBefore: 'Приток населения ',
    textAfter: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 30;
    }
  }), new PriceEffect({
    textBefore: 'Все строится быстрее на ',
    textAfter: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 42;
    }
  })]
});


};