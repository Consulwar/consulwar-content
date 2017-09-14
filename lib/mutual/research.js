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
    priority: 1,
    affect: 'humans',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('humans');
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча металла +',
    aftertext: '',
    priority: 1,
    affect: 'metals',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('metals');
    }
  }), new Game.Effect.Income({
    pretext: 'Добыча кристалла +',
    aftertext: '',
    priority: 1,
    affect: 'crystals',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('crystals');
    }
  }), new Game.Effect.Income({
    pretext: 'Честь в час +',
    aftertext: '',
    priority: 1,
    affect: 'honor',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('honor');
    }
  }), new Game.Effect.Price({
    pretext: 'Все строится быстрее на ',
    aftertext: '%',
    priority: 2,
    affect: 'time',
    result: function(level) {
      return Game.BeginnerBoost.calculatePower('time');
    }
  })],
  investments: 0,
  maxLevel: 0
});

game.setToMenu = 'mutual';
game.setToSide = 'research';

new game.MutualResearch({
  name: 'Еноты-разведчики',
  engName: 'reccons',
  description: 'Еноты-разведчики — это мощное и стремительное подразделение смелых и сильных бойцов невидимого фронта, способных пробраться в тыл противника незамеченными и так же аккуратно слинять. Есть лишь одно «но»… Всё это хуйня! Они бесполезны, абсолютно. Это же грёбаные еноты… Они, вашу мать, ничего не умеют! Они просто добираются до ближайшей мусорки и начинают в ней копошиться, разбрасывая по округе всё, что найдут. А те самые сверхсекретные разведданные о рептилоидах мы получаем с микрокамер, установленных на этих самых енотах. Радует хотя бы то, что это крайне дешёвый способ проводить разведку местности. А самое главное — рептилоиды до сих пор не догадываются, как мы это делаем! Тупые ящерицы.',
  effect: new Game.Effect.Special({
    name: 'Видят ',
    result: function(level) {
      level = (level !== undefined ? level : this.level);

      if (level == 1) {
        return 'тип и количество войск на точке';
      }

      return 'тип армии на точке';
    }
  }),
  basePrice: {
    metals: 1000,
    crystals: 1000
  },
  investments: 1000,
  maxLevel: 1
});


};
