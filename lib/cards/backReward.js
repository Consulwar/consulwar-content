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
  effect: [new Game.Effect.Income({
    pretext: 'Приток населения ',
    aftertext: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 10;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 10;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 10;
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 10;
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
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
  effect: [new Game.Effect.Income({
    pretext: 'Приток населения ',
    aftertext: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 15;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 15;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 15;
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 15;
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 15;
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
  effect: [new Game.Effect.Income({
    pretext: 'Приток населения ',
    aftertext: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 20;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 20;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 20;
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 20;
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 20;
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
  effect: [new Game.Effect.Income({
    pretext: 'Приток населения ',
    aftertext: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 25;
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
  effect: [new Game.Effect.Income({
    pretext: 'Приток населения ',
    aftertext: ' человек в час',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 2,
    affect: 'honor',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return 30;
    }
  })]
});


};