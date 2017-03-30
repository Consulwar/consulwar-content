initCardsContentBackReward = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
  engName: 'br1',
  cardType: 'backReward',
  cardGroup: 'backRewards',
  name: 'За возврат 1',
  description: '',
  durationTime: 60 * 60 * 24 * 30,
  fromDay: 30,
  effect: [new Game.Effect.Price({
    pretext: 'Здания строятся быстрее на ',
    aftertext: '%',
    condition: {
      type: 'building'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Price({
    pretext: 'Исследования проходят быстрее на ',
    aftertext: '%',
    condition: {
      type: 'research'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Price({
    pretext: 'Войска подготавливаются быстрее на ',
    aftertext: '%',
    condition: {
      type: 'unit'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }),new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '%',
    priority: 4,
    affect: 'metals',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '%',
    priority: 4,
    affect: 'crystals',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Income({
    pretext: 'Приток людей +',
    aftertext: '%',
    priority: 4,
    affect: 'humans',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Income({
    pretext: 'Честь от статуи +',
    aftertext: '%',
    priority: 4,
    affect: 'honor',
    result: function(level) {
      return 30;
    }
  }), new Game.Effect.Military({
    pretext: '+',
    aftertext: '% к урону флота',
    condition: {
      type: 'unit',
      group: 'fleet'
    },
    priority: 4,
    affect: 'damage',
    result: function(level) {
      return 15;
    }
  }), new Game.Effect.Military({
    pretext: '+',
    aftertext: '% к броне флота',
    condition: {
      type: 'unit',
      group: 'fleet'
    },
    priority: 4,
    affect: 'life',
    result: function(level) {
      return 20;
    }
  }), new Game.Effect.Special({
    pretext: '+',
    aftertext: ' ежедневный бесплатный контейнер',
    priority: 1,
    condition: {
      engName: 'dailyFreeContainer'
    },
    result: function(level) {
      return 1;
    }
  })]
});

new game.Card({
  engName: 'br2',
  cardType: 'backReward',
  cardGroup: 'backRewards',
  name: 'Награда за возврат 2',
  fromDay: 60 * 24 * 3600,
  description: 'Скорость развития вашей Империи - это очень важный показатель. Кто раньше достигнет высот, тому проще будет контролировать не только саму военную ситуацию галактики, но и других консулов. Иногда можно иметь бесконечное количество денег или ресурсов, но самое дорогое всё ещё это время. Быстрая застройка поможет сэкономить этот ценный ресурс.',
  durationTime: 60,
  effect: [new Game.Effect.Price({
    pretext: 'Здания строятся быстрее на ',
    aftertext: '%',
    condition: {
      type: 'building'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Price({
    pretext: 'Исследования проходят быстрее на ',
    aftertext: '%',
    condition: {
      type: 'research'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Price({
    pretext: 'Войска подготавливаются быстрее на ',
    aftertext: '%',
    condition: {
      type: 'unit'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  })]
});

};