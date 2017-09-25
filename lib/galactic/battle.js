initGalacticContentBattle = function () {
'use strict';

new game.Battle({
  name: 'Патруль',
  engName: 'patrolfleet',
  description: 'В галактике наблюдается серьёзная активность Рептилоидов по всем фронтам. Наши корабли держат оборону, но колонии Консулов и даже Планеты-Города, а также Сенат находятся в опасности. Не говоря уже о том, что наша родная планета Земля захвачена. Рептилиям надо дать бой не только на Земле, но и в космосе. Самый безопасный вариант — это совершить нападение на патруль Рептилий. Силы патруля не малочисленны, как и ваша награда за подобную атаку, Консул. И тем не менее, чем меньше Рептилий, тем… Меньше Рептилий, как ни странно.',
  honor: 30,
  level: {
    1: {
      enemies: {
        sphero: 'few',
      },
    },
    2: {
      enemies: {
        sphero: 'several',
        blade: 'few',
      },
    },
    3: {
      enemies: {
        blade: 'pack',
        lacertian: 'few',
      },
    },
    4: {
      enemies: {
        sphero: 'zounds',
      },
    },
    5: {
      enemies: {
        lacertian: 'several',
        dragon: 'few',
      },
    },
    6: {
      enemies: {
        wyvern: 'pack',
        dragon: 'several',
        armadillo: 1,
      },
    },
    7: {
      enemies: {
        blade: 'lots',
        octopus: 1,
      },
    },
  },
});

new game.Battle({
  name: 'Ряды обороны',
  engName: 'defencefleet',
  description: 'Некоторые особо важные космические объекты, вроде шахт для добычи металла из пояса астероидов или специальных научных центров, Рептилии охраняют более серьёзными силами, чем они отправляют в патруль. Совершив нападение на один из таких объектов, вы серьёзно навредите рептилиям, а значит и вызовете их гнев. Но ведь это нам и нужно, не так ли, Правитель?',
  honor: 30,
  level: {
    1: {
      enemies: {
        blade: 'several',
      },
    },
    2: {
      enemies: {
        sphero: 'pack',
        blade: 'several',
        lacertian: 'few',
      },
    },
    3: {
      enemies: {
        sphero: 'throng',
        wyvern: 1,
      },
    },
    4: {
      enemies: {
        wyvern: 'few',
        dragon: 1,
      },
    },
    5: {
      enemies: {
        dragon: 'few',
        hydra: 1,
      },
    },
    6: {
      enemies: {
        lacertian: 'lots',
        armadillo: 1,
        prism: 1,
      },
    },
    7: {
      enemies: {
        hydra: 'several',
        armadillo: 1,
        godzilla: 1,
      },
    },
  },
});

new game.Battle({
  name: 'Боевой флот',
  engName: 'battlefleet',
  description: 'Совершить атаку на целый боевой флот Рептилий сможет далеко не каждый Консул. Естественно, лететь небольшим отрядом на серьёзный флот чешуйчатых нету никакого смысла, поэтому ваша небольшая эскадрилья нападёт лишь на небольшую группу кораблей Рептилий. Однако же, если у вас серьёзный флот — готовьтесь, Консул, битва будет не из простых и может стоить жизни многим вашим солдатам и кораблям. Но ведь это война, а на войне всегда есть жертвы.',
  honor: 30,
  level: {
    1: {
      enemies: {
        lacertian: 'several',
      },
    },
    2: {
      enemies: {
        lacertian: 'pack',
        wyvern: 'few',
      },
    },
    3: {
      enemies: {
        blade: 'throng',
        dragon: 1,
      },
    },
    4: {
      enemies: {
        sphero: 'zounds',
        wyvern: 'several',
        hydra: 1,
      },
    },
    5: {
      enemies: {
        blade: 'pack',
        dragon: 'few',
        hydra: 'few',
        armadillo: 1,
      },
    },
    6: {
      enemies: {
        wyvern: 'lots',
        armadillo: 1,
        godzilla: 1,
      },
    },
    7: {
      enemies: {
        sphero: 'swarm',
        lacertian: 'throng',
        armadillo: 'few',
        octopus: 1,
        godzilla: 1,
      },
    },
  },
});

new game.Battle({
  name: 'Караван',
  engName: 'tradefleet',
  description: 'Как и у людей, у рептилий есть особые торговые маршруты, по которым они перевозят различные ресурсы. Вы когда-нибудь мечтали зарабатывать тем, что будете грабить караваны Рептилий? Если да, то это отличная возможность для вас, Консул. Конечно, есть шанс, что Рептили узнают о вашей вылазке и изменят путь следования, однако же, пусть небольшой… Мизерный, но у вас есть шанс отбить у них ценные ресурсы. Хотя за такую коварную засаду очков чести вы и не получите.',
  honor: 10,
  level: {
    1: {
      enemies: {
        trioniks: 1,
      },
      reward: {
        metals: 40,
        crystals: 10,
      },
    },
    2: {
      enemies: {
        sphero: 'several',
        trioniks: 2,
      },
      reward: {
        metals: 100,
        crystals: 30,
      },
    },
    3: {
      enemies: {
        sphero: 'pack',
        blade: 'several',
        trioniks: 4,
      },
      reward: {
        metals: 200,
        crystals: 100,
      },
    },
    4: {
      enemies: {
        lacertian: 'several',
        wyvern: 'few',
        trioniks: 8,
      },
      reward: {
        metals: 1000,
        crystals: 250,
      },
    },
    5: {
      enemies: {
        blade: 'lots',
        dragon: 'few',
        trioniks: 16,
      },
      reward: {
        metals: 15000,
        crystals: 3300,
      },
    },
    6: {
      enemies: {
        sphero: 'throng',
        dragon: 'several',
        armadillo: 1,
        trioniks: 32,
      },
      reward: {
        metals: 40000,
        crystals: 20000,
      },
    },
    7: {
      enemies: {
        sphero: 'swarm',
        armadillo: 1,
        octopus: 1,
        trioniks: 64,
      },
      reward: {
        metals: 100000,
        crystals: 35000,
      },
    },
  }
});

new game.Battle({
  name: 'Ты готов?!',
  engName: 'prepearedfleet',
  description: 'Вам пиздец.',
  honor: 0,
  level: {
    508: {
      enemies: {
        sphero: 'front',
        blade: 'group',
        lacertian: 'army',
        wyvern: 'corps',
        dragon: 'division',
        hydra: 'legion',
        armadillo: 'zounds',
        prism: 'swarm',
        octopus: 'throng',
        godzilla: 'horde',
        shadow: 1,
      },
      reward: {
        metals: 0,
        crystals: 0,
      },
    },
  },
});

Game.Helpers.deepFreeze(Game.Battle.items);
};