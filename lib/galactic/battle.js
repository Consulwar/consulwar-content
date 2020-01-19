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
        'Unit/Reptile/Space/Sphero': 'few',
      },
    },
    2: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'several',
        'Unit/Reptile/Space/Blade': 'few',
      },
    },
    3: {
      enemies: {
        'Unit/Reptile/Space/Blade': 'pack',
        'Unit/Reptile/Space/Lacertian': 'few',
      },
    },
    4: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'zounds',
      },
    },
    5: {
      enemies: {
        'Unit/Reptile/Space/Lacertian': 'several',
        'Unit/Reptile/Space/Dragon': 'few',
      },
    },
    6: {
      enemies: {
        'Unit/Reptile/Space/Wyvern': 'pack',
        'Unit/Reptile/Space/Dragon': 'several',
        'Unit/Reptile/Space/Armadillo': 1,
      },
    },
    7: {
      enemies: {
        'Unit/Reptile/Space/Blade': 'lots',
        'Unit/Reptile/Space/Octopus': 1,
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
        'Unit/Reptile/Space/Blade': 'several',
      },
    },
    2: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'pack',
        'Unit/Reptile/Space/Blade': 'several',
        'Unit/Reptile/Space/Lacertian': 'few',
      },
    },
    3: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'throng',
        'Unit/Reptile/Space/Wyvern': 1,
      },
    },
    4: {
      enemies: {
        'Unit/Reptile/Space/Wyvern': 'few',
        'Unit/Reptile/Space/Dragon': 1,
      },
    },
    5: {
      enemies: {
        'Unit/Reptile/Space/Dragon': 'few',
        'Unit/Reptile/Space/Hydra': 1,
      },
    },
    6: {
      enemies: {
        'Unit/Reptile/Space/Lacertian': 'lots',
        'Unit/Reptile/Space/Armadillo': 1,
        'Unit/Reptile/Space/Prism': 1,
      },
    },
    7: {
      enemies: {
        'Unit/Reptile/Space/Hydra': 'several',
        'Unit/Reptile/Space/Armadillo': 1,
        'Unit/Reptile/Space/Godzilla': 1,
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
        'Unit/Reptile/Space/Lacertian': 'several',
      },
    },
    2: {
      enemies: {
        'Unit/Reptile/Space/Lacertian': 'pack',
        'Unit/Reptile/Space/Wyvern': 'few',
      },
    },
    3: {
      enemies: {
        'Unit/Reptile/Space/Blade': 'throng',
        'Unit/Reptile/Space/Dragon': 1,
      },
    },
    4: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'zounds',
        'Unit/Reptile/Space/Wyvern': 'several',
        'Unit/Reptile/Space/Hydra': 1,
      },
    },
    5: {
      enemies: {
        'Unit/Reptile/Space/Blade': 'pack',
        'Unit/Reptile/Space/Dragon': 'few',
        'Unit/Reptile/Space/Hydra': 'few',
        'Unit/Reptile/Space/Armadillo': 1,
      },
    },
    6: {
      enemies: {
        'Unit/Reptile/Space/Wyvern': 'lots',
        'Unit/Reptile/Space/Armadillo': 1,
        'Unit/Reptile/Space/Godzilla': 1,
      },
    },
    7: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'swarm',
        'Unit/Reptile/Space/Lacertian': 'throng',
        'Unit/Reptile/Space/Armadillo': 'few',
        'Unit/Reptile/Space/Octopus': 1,
        'Unit/Reptile/Space/Godzilla': 1,
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
        'Unit/Reptile/Space/Trionyx': 1,
      },
      reward: {
        metals: 40,
        crystals: 10,
      },
    },
    2: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'several',
        'Unit/Reptile/Space/Trionyx': 2,
      },
      reward: {
        metals: 100,
        crystals: 30,
      },
    },
    3: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'pack',
        'Unit/Reptile/Space/Blade': 'several',
        'Unit/Reptile/Space/Trionyx': 4,
      },
      reward: {
        metals: 200,
        crystals: 100,
      },
    },
    4: {
      enemies: {
        'Unit/Reptile/Space/Lacertian': 'several',
        'Unit/Reptile/Space/Wyvern': 'few',
        'Unit/Reptile/Space/Trionyx': 8,
      },
      reward: {
        metals: 1000,
        crystals: 250,
      },
    },
    5: {
      enemies: {
        'Unit/Reptile/Space/Blade': 'lots',
        'Unit/Reptile/Space/Dragon': 'few',
        'Unit/Reptile/Space/Trionyx': 16,
      },
      reward: {
        metals: 15000,
        crystals: 3300,
      },
    },
    6: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'throng',
        'Unit/Reptile/Space/Dragon': 'several',
        'Unit/Reptile/Space/Armadillo': 1,
        'Unit/Reptile/Space/Trionyx': 32,
      },
      reward: {
        metals: 40000,
        crystals: 20000,
      },
    },
    7: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'swarm',
        'Unit/Reptile/Space/Armadillo': 1,
        'Unit/Reptile/Space/Octopus': 1,
        'Unit/Reptile/Space/Trionyx': 64,
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
        'Unit/Reptile/Space/Sphero': 'front',
        'Unit/Reptile/Space/Blade': 'group',
        'Unit/Reptile/Space/Lacertian': 'army',
        'Unit/Reptile/Space/Wyvern': 'corps',
        'Unit/Reptile/Space/Dragon': 'division',
        'Unit/Reptile/Space/Hydra': 'legion',
        'Unit/Reptile/Space/Armadillo': 'zounds',
        'Unit/Reptile/Space/Prism': 'swarm',
        'Unit/Reptile/Space/Octopus': 'throng',
        'Unit/Reptile/Space/Godzilla': 'horde',
        'Unit/Reptile/Space/Shadow': 1,
      },
      reward: {
        metals: 0,
        crystals: 0,
      },
    },
  },
});

new game.Battle({
  name: 'Ты готов?!',
  engName: 'raidfleet',
  description: 'Вам пиздец.',
  honor: 45,
  firstRoundDuration: 2 * 60 * 60000,
  level: {
    509: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'front',
        'Unit/Reptile/Space/Blade': 'group',
        'Unit/Reptile/Space/Lacertian': 'front',
        'Unit/Reptile/Space/Wyvern': 'group',
        'Unit/Reptile/Space/Dragon': 'army',
        'Unit/Reptile/Space/Hydra': 'legion',
        'Unit/Reptile/Space/Armadillo': 'zounds',
        'Unit/Reptile/Space/Prism': 'legion',
        'Unit/Reptile/Space/Octopus': 'zounds',
        'Unit/Reptile/Space/Godzilla': 'swarm',
        'Unit/Reptile/Space/Shadow': 'horde',
        'Unit/Reptile/Space/Trionyx': 'front',
      },
      reward: {
        metals: 0,
        crystals: 0,
      },
    },
  },
});

new game.Battle({
  name: 'Корабль-тюрьма',
  engName: 'prisoners',
  description: 'Перевозка заключенных',
  honor: 10,
  firstRoundDuration: 2 * 60 * 60000,
  level: {
    1: {
      enemies: {
        'Unit/Reptile/Space/Sphero': 'front',
        'Unit/Reptile/Space/Shadow': 1,
      },
      reward: {
        humans: 1000000,
      },
    },
  },
});

new game.Battle({
  name: 'Крампус',
  engName: 'krampus',
  description: '???',
  honor: 100,
  level: {
    1: {
      enemies: {
        'Unit/Reptile/Space/Krampus': 1,
      },
      reward: {
        honor: 200000,
      },
    },
  },
});

};