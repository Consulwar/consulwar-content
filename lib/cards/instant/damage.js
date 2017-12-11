import SpecialEffect from '/imports/modules/Effect/lib/SpecialEffect';

initCardsContentInstantDamage = function() {
'use strict';

new game.InstantCard({
  name: 'Выброс тепло-мин',
  engName: 'HeatMinesDrop',
  cardType: 'instant',
  group: 'damage',
  effect: [new SpecialEffect({
    textBefore: 'единоразовое нанесение урона ',
    textAfter: '',
    priority: 1,
    condition: {
      engName: 'instantDamage'
    },
    affect: 'army.instant.HeatMines',
    result: function(level) {
      return 1;
    }
  })]/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Ракетный Залп',
  engName: 'TheRocketVolley',
  cardType: 'instant',
  group: 'damage',
  effect: [new SpecialEffect({
    textBefore: 'единоразовое нанесение урона ',
    textAfter: '',
    priority: 1,
    condition: {
      engName: 'instantDamage'
    },
    affect: 'army.instant.rocket',
    result: function(level) {
      return 1;
    }
  })]/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Лазерный обстрел',
  engName: 'LaserShelling',
  cardType: 'instant',
  group: 'damage',
  effect: [new SpecialEffect({
    textBefore: 'единоразовое нанесение урона ',
    textAfter: '',
    priority: 1,
    condition: {
      engName: 'instantDamage'
    },
    affect: 'army.instant.laser',
    result: function(level) {
      return 1;
    }
  })]/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Ионная волна',
  engName: 'IonWave',
  cardType: 'instant',
  group: 'damage',
  effect: [new SpecialEffect({
    textBefore: 'единоразовое нанесение урона ',
    textAfter: '',
    priority: 1,
    condition: {
      engName: 'instantDamage'
    },
    affect: 'army.instant.ions',
    result: function(level) {
      return 1;
    }
  })]/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Плазменная капля',
  engName: 'PlasmaDrop',
  cardType: 'instant',
  group: 'damage',
  effect: [new SpecialEffect({
    textBefore: 'единоразовое нанесение урона ',
    textAfter: '',
    priority: 1,
    condition: {
      engName: 'instantDamage'
    },
    affect: 'army.instant.purePlasma',
    result: function(level) {
      return 1;
    }
  })]/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Тёмная материя',
  engName: 'DarkMatter',
  cardType: 'instant',
  group: 'damage',
  effect: [new SpecialEffect({
    textBefore: 'единоразовое нанесение урона ',
    textAfter: '',
    priority: 1,
    condition: {
      engName: 'instantDamage'
    },
    affect: 'army.instant.xMatter',
    result: function(level) {
      return 1;
    }
  })]/*,
  price: {
    credits: 10000
  }*/
});

};