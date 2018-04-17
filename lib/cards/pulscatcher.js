import MilitaryEffect from '/imports/modules/Effect/lib/MilitaryEffect';
import IncomeEffect from '/imports/modules/Effect/lib/IncomeEffect';

let PulseCatcher;
if (Meteor.isClient) {
  PulseCatcher = require('/imports/content/Building/Residential/client/PulseCatcher').default;
} else {
  PulseCatcher = require('/imports/content/Building/Residential/server/PulseCatcher').default;
}

initCardsContentPulsecatcher = function() {
'use strict';

new game.Card({
  cardType: 'pulsecatcher',
  engName: 'pulsecatcher_fleet_damage',
  name: 'Импульсный уловитель',
  description: '',
  durationTime: 60 * 60 * 24,
  effect: new MilitaryEffect({
    textBefore: 'Урон флота +',
    textAfter: '%',
    condition: 'Unit/Human/Space',
    priority: 2,
    affect: 'damage',
    result: function(options) {
      let level = PulseCatcher.getCurrentLevel(options);
      return 8 + ((8 / 100) * level * 0.5);
    }
  })
});

new game.Card({
  cardType: 'pulsecatcher',
  engName: 'pulsecatcher_fleet_life',
  name: 'Импульсный уловитель',
  description: '',
  durationTime: 60 * 60 * 24,
  effect: new MilitaryEffect({
    textBefore: 'Броня флота +',
    textAfter: '%',
    condition: 'Unit/Human/Space',
    priority: 2,
    affect: 'life',
    result: function(options) {
      let level = PulseCatcher.getCurrentLevel(options);
      return 5 + ((5 / 100) * level * 0.5);
    }
  })
});

new game.Card({
  cardType: 'pulsecatcher',
  engName: 'pulsecatcher_resources_metal',
  name: 'Импульсный уловитель',
  description: '',
  durationTime: 60 * 60 * 24,
  effect: new IncomeEffect({
    textBefore: 'Добыча металла +',
    textAfter: '%',
    priority: 2,
    affect: 'metals',
    result: function(options) {
      let level = PulseCatcher.getCurrentLevel(options);
      return 9 + ((9 / 100) * level * 0.5);
    }
  })
});

new game.Card({
  cardType: 'pulsecatcher',
  engName: 'pulsecatcher_resources_crystal',
  name: 'Импульсный уловитель',
  description: '',
  durationTime: 60 * 60 * 24,
  effect: new IncomeEffect({
    textBefore: 'Добыча кристалла +',
    textAfter: '%',
    priority: 2,
    affect: 'crystals',
    result: function(options) {
      let level = PulseCatcher.getCurrentLevel(options);
      return 6 + ((6 / 100) * level * 0.5);
    }
  })
});


new game.Card({
  cardType: 'pulsecatcher',
  engName: 'pulsecatcher_resources_honor',
  name: 'Импульсный уловитель',
  description: '',
  durationTime: 60 * 60 * 24,
  effect: new IncomeEffect({
    textBefore: 'Честь в час +',
    textAfter: '',
    priority: 1,
    affect: 'honor',
    result: function(options) {
      let level = PulseCatcher.getCurrentLevel(options);
      return 10 + (level * 0.05);
    }
  })
});

};