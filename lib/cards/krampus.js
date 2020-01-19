import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';
import PriceEffect from '/imports/modules/Effect/lib/PriceEffect';
import MilitaryEffect from '/imports/modules/Effect/lib/MilitaryEffect';
import SpecialEffect from '/imports/modules/Effect/lib/SpecialEffect';

initCardsKrampusCards = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
  cardType: 'buff',
  cardGroup: 'krampus',
  engName: 'KrampusGold',
  name: 'Благословение золотого крампуса',
  description: '',
  durationTime: 60 * 60,
  reloadTime: 60 * 60,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся быстрее на ',
    textAfter: '%',
    condition: 'Building',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 400;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят быстрее на ',
    textAfter: '%',
    condition: 'Research',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 400;
    }
  }), new SpecialEffect({
    textBefore: '',
    textAfter: '% к выгодной сделке',
    priority: 2,
    condition: 'Unique/tradingBonus',
    affect: 'amount',
    result({ level }) {
      return 5;
    },
  }), new SpecialEffect({
      condition: 'Unique/spaceEngine',
      textBefore: '',
      textAfter: ' уровень движителей',
      result({ level }) {
        return 120;
      },
  })]
});

new game.Card({
  cardType: 'buff',
  cardGroup: 'krampusFast',
  engName: 'KrampusFastGold',
  name: 'Благословение золотого крампуса',
  description: '',
  durationTime: 60,
  reloadTime: 60 * 60,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 8,
    affect: 'metals',
    result: function({ level }) {
      return 100000;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 8,
    affect: 'crystals',
    result: function({ level }) {
      return 100000;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей +',
    textAfter: '%',
    priority: 8,
    affect: 'humans',
    result: function({ level }) {
      return 100000;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи +',
    textAfter: '%',
    priority: 100,
    affect: 'honor',
    result: function({ level }) {
      return 100000;
    }
  })]
});




new game.Card({
  cardType: 'buff',
  cardGroup: 'krampus',
  engName: 'KrampusSilver',
  name: 'Благословение серебряного крампуса',
  description: '',
  durationTime: 60 * 60,
  reloadTime: 60 * 60,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся быстрее на ',
    textAfter: '%',
    condition: 'Building',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 200;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят быстрее на ',
    textAfter: '%',
    condition: 'Research',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 200;
    }
  }), new SpecialEffect({
    textBefore: '',
    textAfter: '% к выгодной сделке',
    priority: 2,
    condition: 'Unique/tradingBonus',
    affect: 'amount',
    result({ level }) {
      return 5;
    },
  }), new SpecialEffect({
      condition: 'Unique/spaceEngine',
      textBefore: '',
      textAfter: ' уровень движителей',
      result({ level }) {
        return 100;
      },
  })]
});

new game.Card({
  cardType: 'buff',
  cardGroup: 'krampusFast',
  engName: 'KrampusFastSilver',
  name: 'Благословение серебряного крампуса',
  description: '',
  durationTime: 60,
  reloadTime: 60 * 60,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 8,
    affect: 'metals',
    result: function({ level }) {
      return 60000;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 8,
    affect: 'crystals',
    result: function({ level }) {
      return 60000;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей +',
    textAfter: '%',
    priority: 8,
    affect: 'humans',
    result: function({ level }) {
      return 60000;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи +',
    textAfter: '%',
    priority: 100,
    affect: 'honor',
    result: function({ level }) {
      return 60000;
    }
  })]
});




new game.Card({
  cardType: 'buff',
  cardGroup: 'krampus',
  engName: 'KrampusBronze',
  name: 'Благословение бронзового крампуса',
  description: '',
  durationTime: 60 * 60,
  reloadTime: 60 * 60,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся быстрее на ',
    textAfter: '%',
    condition: 'Building',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 100;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят быстрее на ',
    textAfter: '%',
    condition: 'Research',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 100;
    }
  }), new SpecialEffect({
    textBefore: '',
    textAfter: '% к выгодной сделке',
    priority: 2,
    condition: 'Unique/tradingBonus',
    affect: 'amount',
    result({ level }) {
      return 5;
    },
  }), new SpecialEffect({
      condition: 'Unique/spaceEngine',
      textBefore: '',
      textAfter: ' уровень движителей',
      result({ level }) {
        return 80;
      },
  })]
});

new game.Card({
  cardType: 'buff',
  cardGroup: 'krampusFast',
  engName: 'KrampusFastBronze',
  name: 'Благословение бронзового крампуса',
  description: '',
  durationTime: 60,
  reloadTime: 60 * 60,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 8,
    affect: 'metals',
    result: function({ level }) {
      return 30000;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 8,
    affect: 'crystals',
    result: function({ level }) {
      return 30000;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей +',
    textAfter: '%',
    priority: 8,
    affect: 'humans',
    result: function({ level }) {
      return 30000;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи +',
    textAfter: '%',
    priority: 100,
    affect: 'honor',
    result: function({ level }) {
      return 30000;
    }
  })]
});




new game.Card({
  cardType: 'buff',
  cardGroup: 'krampus',
  engName: 'KrampusNormal',
  name: 'Благословение обычного крампуса',
  description: '',
  durationTime: 60 * 60,
  reloadTime: 60 * 60,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся быстрее на ',
    textAfter: '%',
    condition: 'Building',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 50;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят быстрее на ',
    textAfter: '%',
    condition: 'Research',
    priority: 4,
    affect: 'time',
    result: function({ level }) {
      return 50;
    }
  }), new SpecialEffect({
    textBefore: '',
    textAfter: '% к выгодной сделке',
    priority: 2,
    condition: 'Unique/tradingBonus',
    affect: 'amount',
    result({ level }) {
      return 2;
    },
  }), new SpecialEffect({
    condition: 'Unique/spaceEngine',
    textBefore: '',
    textAfter: ' уровень движителей',
    result({ level }) {
      return 60;
    },
  })]
});

new game.Card({
  cardType: 'buff',
  cardGroup: 'krampusFast',
  engName: 'KrampusFastNormal',
  name: 'Благословение обычного крампуса',
  description: '',
  durationTime: 60,
  reloadTime: 60 * 60,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 8,
    affect: 'metals',
    result: function({ level }) {
      return 5000;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 8,
    affect: 'crystals',
    result: function({ level }) {
      return 5000;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей +',
    textAfter: '%',
    priority: 8,
    affect: 'humans',
    result: function({ level }) {
      return 5000;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи +',
    textAfter: '%',
    priority: 100,
    affect: 'honor',
    result: function({ level }) {
      return 5000;
    }
  })]
});




new game.Card({
  cardType: 'buff',
  cardGroup: 'krampus',
  engName: 'KrampusSelf',
  name: 'Усталось после дрочки',
  description: '',
  durationTime: 60 * 60,
  reloadTime: 60 * 60,
  effect: [new PriceEffect({
    textBefore: 'Здания строятся медленнее на ',
    textAfter: '%',
    condition: 'Building',
    priority: 200,
    affect: 'time',
    result: function({ level }) {
      return -1000;
    }
  }), new PriceEffect({
    textBefore: 'Исследования проходят медленнее на ',
    textAfter: '%',
    condition: 'Research',
    priority: 200,
    affect: 'time',
    result: function({ level }) {
      return -1000;
    }
  }), new SpecialEffect({
    textBefore: '',
    textAfter: '% к выгодной сделке',
    priority: 2,
    condition: 'Unique/tradingBonus',
    affect: 'amount',
    result({ level }) {
      return -100;
    },
  }), new PriceEffect({
    textBefore: 'Войска подготавливаются медленнее на ',
    textAfter: '%',
    condition: 'Unit',
    priority: 200,
    affect: 'time',
    result: function({ level }) {
      return -1000;
    }
  }), new MilitaryEffect({
    textBefore: '',
    textAfter: '% к урону флота',
    condition: 'Unit/Human/Space',
    priority: 200,
    affect: 'damage',
    result: function({ level }) {
      return -80;
    }
  }), new MilitaryEffect({
    textBefore: '',
    textAfter: '% к броне флота',
    condition: 'Unit/Human/Space',
    priority: 200,
    affect: 'life',
    result: function({ level }) {
      return -20;
    }
  })]
});

new game.Card({
  cardType: 'buff',
  cardGroup: 'krampusFast',
  engName: 'KrampusFastSelf',
  name: 'Усталось после дрочки',
  description: '',
  durationTime: 60,
  reloadTime: 60 * 60,
  effect: [new IncomeEffect({
    textBefore: 'Добыча металла ',
    textAfter: '%',
    priority: 8,
    affect: 'metals',
    result: function({ level }) {
      return -1000000;
    }
  }), new IncomeEffect({
    textBefore: 'Добыча кристалла ',
    textAfter: '%',
    priority: 8,
    affect: 'crystals',
    result: function({ level }) {
      return -1000000;
    }
  }), new IncomeEffect({
    textBefore: 'Приток людей ',
    textAfter: '%',
    priority: 8,
    affect: 'humans',
    result: function({ level }) {
      return -1000000;
    }
  }), new IncomeEffect({
    textBefore: 'Честь от статуи ',
    textAfter: '%',
    priority: 100,
    affect: 'honor',
    result: function({ level }) {
      return -1000000;
    }
  })]
});

};