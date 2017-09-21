initMutualContentResearch = function () {
'use strict';

game.setToMenu = 'mutual';
game.setToSide = 'council';

new game.MutualResearch({
  name: 'Субсидии совета',
  engName: 'councilssubsidy',
  description: '',
  effect: [new Game.Effect.Income({
    pretext: 'Приток населения ',
    aftertext: ' человек в час',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('humans');
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('metals');
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('crystals');
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('honor');
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
    priority: 8,
    affect: 'time',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('time');
    }
  })],
  investments: 0,
  maxLevel: 0
});

};
