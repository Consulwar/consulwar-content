import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';
import PriceEffect from '/imports/modules/Effect/lib/PriceEffect';
import MilitaryEffect from '/imports/modules/Effect/lib/MilitaryEffect';

initCardsContentGeneral = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
  cardType: 'general',
  engName: 'mustachioedUncleDeveloper',
  cardGroup: 'uncle',
  name: 'Усатый дядя застройщик',
  description: 'Только один дядя застройщик может быть активен в момент времени<br/>Срок действия: 30 дней',
  durationTime: 60 * 60 * 24 * 30,
  effect: [new PriceEffect({
    textBefore: 'Скорость строительства всех зданий быстрее на ',
    textAfter: '% (сверх прочих бонусов)',
    condition: {
      type: 'building'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }), new PriceEffect({
    textBefore: 'Скорость исследования быстрее на ',
    textAfter: '% (сверх прочих бонусов)',
    condition: {
      type: 'research'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  }), new PriceEffect({
    textBefore: 'Скорость подготовки войск на ',
    textAfter: '% (сверх прочих бонусов)',
    condition: {
      type: 'unit'
    },
    priority: 4,
    affect: 'time',
    result: function(level) {
      return 25;
    }
  })],
  price: {
    credits: 5000
  }
});

new game.Card({
  cardType: 'general',
  engName: 'energyComplex',
  cardGroup: 'complex',
  name: 'Энергетический комплекс',
  description: 'Только один комплекс может быть активен в момент времени<br/>Срок действия: 30 дней',
  durationTime: 60 * 60 * 24 * 30,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '% (сверх прочих бонусов)',
    priority: 4,
    affect: 'metals',
    result: function(level) {
      return 20;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '% (сверх прочих бонусов)',
    priority: 4,
    affect: 'crystals',
    result: function(level) {
      return 20;
    }
  })],
  price: {
    credits: 3000
  }
});

new game.Card({
  cardType: 'general',
  engName: 'admiral',
  cardGroup: 'person',
  name: 'Адмирал Стилл Болз',
  description: 'Срок действия: 30 дней',
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
    credits: 7000
  }
});



new game.Card({
  cardType: 'general',
  engName: 'impulseScanner',
  cardGroup: 'baseIncomeBoost',
  name: 'Импульсное сканирование',
  description: 'Только один эффект из группы (Ипульсное сканирование, Химическая обработка или Розги) может быть активен в момент времени<br/>Срок действия: 1 час',
  durationTime: 60 * 60,
  effect: new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 10;
    }
  }),
  price: {
    honor: 1000
  }
});

new game.Card({
  cardType: 'general',
  engName: 'chemicalTreatment',
  cardGroup: 'baseIncomeBoost',
  name: 'Химическая обработка',
  description: 'Только один эффект из группы (Ипульсное сканирование, Химическая обработка или Розги) может быть активен в момент времени<br/>Срок действия: 1 час',
  durationTime: 60 * 60,
  effect: new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 10;
    }
  }),
  price: {
    honor: 2000
  }
});

new game.Card({
  cardType: 'general',
  engName: 'twigs',
  cardGroup: 'baseIncomeBoost',
  name: 'Розги',
  description: 'Только один эффект из группы (Ипульсное сканирование, Химическая обработка или Розги) может быть активен в момент времени<br/>Срок действия: 1 час',
  durationTime: 60 * 60,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '% (сверх прочих бонусов)',
    priority: 2,
    affect: 'metals',
    result: function(level) {
      return 15;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '% (сверх прочих бонусов)',
    priority: 2,
    affect: 'crystals',
    result: function(level) {
      return 15;
    }
  })],
  price: {
    credits: 100
  }
});

new game.Card({
  cardType: 'general',
  engName: 'killSomeone',
  name: 'Расстрелять!',
  description: 'Спецслужбы найдут на улице обычного жителя, обвинят его в пособничестве Рептилиям и расстреляют. Это укрепляет веру с серьёзность намерений Консула.<br/>Срок действия: 1 час',
  durationTime: 60 * 60,
  effect: new IncomeEffect({
    textBefore: 'Приток населения +',
    textAfter: '%',
    priority: 2,
    affect: 'humans',
    result: function(level) {
      return 10;
    }
  }),
  price: {
    honor: 1500
  }
});

};