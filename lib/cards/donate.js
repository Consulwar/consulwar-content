import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';
import PriceEffect from '/imports/modules/Effect/lib/PriceEffect';
import MilitaryEffect from '/imports/modules/Effect/lib/MilitaryEffect';
import SpecialEffect from '/imports/modules/Effect/lib/SpecialEffect';

initCardsContentDonate = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
  cardType: 'donate',
  cardGroup: 'generalDonate',
  engName: 'Crazy',
  name: 'Совет ебанулся',
  description: '',
  durationTime: 60 * 60 * 24 * 30,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся быстрее на ',
    textAfter: '%',
    condition: 'Building',
    priority: 100,
    affect: 'time',
    result: function(level) {
      return 100;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят быстрее на ',
    textAfter: '%',
    condition: 'Research',
    priority: 100,
    affect: 'time',
    result: function(level) {
      return 100;
    }
  }), new PriceEffect({
    textBefore: 'Войска подготавливаются быстрее на ',
    textAfter: '%',
    condition: 'Unit',
    priority: 100,
    affect: 'time',
    result: function(level) {
      return 100;
    }
  }),new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 100,
    affect: 'metals',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 100,
    affect: 'crystals',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей +',
    textAfter: '%',
    priority: 100,
    affect: 'humans',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи +',
    textAfter: '%',
    priority: 100,
    affect: 'honor',
    result: function(level) {
      return 30;
    }
  }), new MilitaryEffect({
    textBefore: '+',
    textAfter: '% к урону флота',
    condition: 'Unit/Human/Space',
    priority: 100,
    affect: 'damage',
    result: function(level) {
      return 15;
    }
  }), new MilitaryEffect({
    textBefore: '+',
    textAfter: '% к броне флота',
    condition: 'Unit/Human/Space',
    priority: 100,
    affect: 'life',
    result: function(level) {
      return 20;
    }
  }), new SpecialEffect({
    textBefore: '+',
    textAfter: ' ежедневный бесплатный контейнер',
    priority: 1,
    condition: 'Unique/dailyFreeContainer',
    result: function(level) {
      return 1;
    }
  })],
  price: {
    credits: 2500
  }
});

new game.Card({
  cardType: 'donate',
  cardGroup: 'generalDonate',
  engName: 'uncleBuilder',
  name: 'Дядя застройщик',
  description: 'Скорость развития вашей Империи - это очень важный показатель. Кто раньше достигнет высот, тому проще будет контролировать не только саму военную ситуацию галактики, но и других консулов. Иногда можно иметь бесконечное количество денег или ресурсов, но самое дорогое всё ещё это время. Быстрая застройка поможет сэкономить этот ценный ресурс.',
  durationTime: 60 * 60 * 24 * 30,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся быстрее на ',
    textAfter: '%',
    condition: {
      type: 'building'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 33;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят быстрее на ',
    textAfter: '%',
    condition: {
      type: 'research'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 33;
    }
  }), new PriceEffect({
    textBefore: 'Войска подготавливаются быстрее на ',
    textAfter: '%',
    condition: {
      type: 'unit'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 33;
    }
  })],
  price: {
    credits: 2000
  }
});

new game.Card({
  cardType: 'donate',
  cardGroup: 'generalDonate',
  engName: 'nuclearComplex',
  name: 'Ядерный комплекс',
  description: 'Крайне важно понимать, что чем выше добыча ресурсов, тем больше возможностей у вас, Консул, развивать вашу колонию, вашу армию, ваш флот, и тем большее влияние вы можете оказывать на эту галактику. Ядерный комплекс штука дорогая, но чрезвычайно полезная для вашего обогащения.',
  durationTime: 60 * 60 * 24 * 30,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 4,
    affect: 'metals',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 4,
    affect: 'crystals',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей +',
    textAfter: '%',
    priority: 4,
    affect: 'humans',
    result: function(level) {
      return 30;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи +',
    textAfter: '%',
    priority: 4,
    affect: 'honor',
    result: function(level) {
      return 30;
    }
  })],
  price: {
    credits: 3000
  }
});

new game.Card({
  cardType: 'donate',
  cardGroup: 'generalDonate',
  engName: 'robotsPilots',
  name: 'Роботы Пилоты',
  description: 'Важно не только иметь мощный флот, но и иметь возможность правильно его использовать. К сожалению, действительно хороших пилотов ещё надо поискать, да и тех рано или поздно ждёт рептилоидная ракета в лицо. Учёные разработали новый вид роботов, мощнейшее ИИ, эти роботы способны крайне эффективно пилотировать любые корабли, что увеличивает мощность вашего флота. Увеличивает вашу власть в небе, Консул.',
  durationTime: 60 * 60 * 24 * 30,
  effect: [new MilitaryEffect({
    textBefore: '+',
    textAfter: '% к урону флота',
    condition: {
      type: 'unit',
      group: 'fleet'
    },
    priority: 4,
    affect: 'damage',
    result: function(level) {
      return 15;
    }
  }), new MilitaryEffect({
    textBefore: '+',
    textAfter: '% к броне флота',
    condition: {
      type: 'unit',
      group: 'fleet'
    },
    priority: 4,
    affect: 'life',
    result: function(level) {
      return 20;
    }
  })],
  price: {
    credits: 4000
  }
});

};