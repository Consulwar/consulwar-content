import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';
import PriceEffect from '/imports/modules/Effect/lib/PriceEffect';

initMutualContentResearch = function () {
'use strict';

game.setToMenu = 'mutual';
game.setToSide = 'council';

new game.MutualResearch({
  name: 'Субсидии совета',
  engName: 'councilssubsidy',
  description: '',
  effect: [new IncomeEffect({
    textBefore: 'Приток населения ',
    textAfter: ' человек в час',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('humans');
    }
  }), new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('metals');
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('crystals');
    }
  }), new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('honor');
    }
  }), new PriceEffect({
    textBefore: 'Все строится быстрее на ',
    textAfter: '%',
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
