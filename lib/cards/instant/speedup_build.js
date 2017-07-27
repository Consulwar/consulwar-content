initCardsContentInstantSpeedupBuild = function() {
'use strict';

new game.InstantCard({
  name: 'Нелегалы',
  engName: 'Illegals',
  cardType: 'instant',
  group: 'speedupBuild',
  effect: new Game.Effect.Price({
    pretext: 'Ускорение строительства на 5 минут',
    aftertext: '',
    priority: 9,
    affect: 'time',
    result: function(level) {
      return 300;
    }
  })/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Еноты помощники',
  engName: 'RaccoonAssistants',
  cardType: 'instant',
  group: 'speedupBuild',
  effect: new Game.Effect.Price({
    pretext: 'Ускорение строительства на 30 минут',
    aftertext: '',
    priority: 9,
    affect: 'time',
    result: function(level) {
      return 1800;
    }
  })/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Рептилии рабо-строители',
  engName: 'ReptileSlaveWorkers',
  cardType: 'instant',
  group: 'speedupBuild',
  effect: new Game.Effect.Price({
    pretext: 'Ускорение строительства на 4 часа',
    aftertext: '',
    priority: 9,
    affect: 'time',
    result: function(level) {
      return 14400;
    }
  })/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Мех-Рабочий',
  engName: 'MechWorker',
  cardType: 'instant',
  group: 'speedupBuild',
  effect: new Game.Effect.Price({
    pretext: 'Ускорение строительства на 20 часов',
    aftertext: '',
    priority: 9,
    affect: 'time',
    result: function(level) {
      return 72000;
    }
  })/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Воздушный бульдозер',
  engName: 'AirBulldozer',
  cardType: 'instant',
  group: 'speedupBuild',
  effect: new Game.Effect.Price({
    pretext: 'Ускорение строительства на 50 часов',
    aftertext: '',
    priority: 9,
    affect: 'time',
    result: function(level) {
      return 180000;
    }
  })/*,
  price: {
    credits: 10000
  }*/
});

new game.InstantCard({
  name: 'Капсула Трансформер',
  engName: 'TransformerCapsule',
  cardType: 'instant',
  group: 'speedupBuild',
  effect: new Game.Effect.Price({
    pretext: 'Ускорение строительства на 200 часов',
    aftertext: '',
    priority: 9,
    affect: 'time',
    result: function(level) {
      return 720000;
    }
  })/*,
  price: {
    credits: 10000
  }*/
});

};