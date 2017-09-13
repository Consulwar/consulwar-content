initUnitsArmyContentFleet = function () {
'use strict';

game.setToMenu = 'army';
game.setToSide = 'fleet';

new game.Unit({
  name: 'Гаммадрон',
  // Бетадрон - (1 урон, 2 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Альфадрон - (2 урон, 3 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'gammadrone',
  description: 'Гаммадроны – это шустрые беспилотные убийцы. Их задачи – ловить на себя часть урона и уничтожать небольшие быстрые корабли Рептилоидов. Конечно, имея целый рой таких аппаратов, можно навалять даже самому крупному кораблю. Но, наверное, это всё же не самая лучшая тактика. Хотя кто знает, Консул, всё зависит только от вас. Тем не менее гаммадроны – дешёвые и крайне полезные единицы.',
  fleetup: 'gammabetaalpha',
  battleEffects: [{
    pretext: 'принимает на себя ',
    aftertext: '% урона первой атаки',
    result: function(level) {
      level = level || Game.Research.items.fleetups.gammabetaalpha.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 15;
      } else if (level < 100) {
        return 30;
      } else {
        return 50;
      }
    },
    onAttack: function(unit, friends, enemies, round, options) {
      if (round != 1) {
        return false;
      }
      return Game.Unit.battleEffects.takeFriendsDamage(this.result(), unit, friends);
    }
  }],
  basePrice: {
    metals: 600,
    crystals: 250,
    time: 30
  },
  characteristics: {
    damage: {
      min: 80,
      max: 100
    },
    life: 200
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.sphero,
      Game.Unit.items.reptiles.fleet.blade,
      Game.Unit.items.reptiles.fleet.lacertian
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.shipyard, 1]
    ];
  }
});

new game.Unit({
  name: 'Оса',
  // Королевская Оса - (2 урон, 3 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Шершень - (4 урон, 5 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'wasp',
  description: 'Оса — это быстрый штурмовой корабль. Она способна вести бой как на дальнем, так и на близком расстоянии. Также её особенностью является то, что устройство данного корабля позволяет ему цепляться с помощью хвоста за обшивку кораблей противника, после чего Оса разделяется на две части. Пилотируемая капсула отправляется на ближайший крупный боевой корабль, а «жало» вместе с двигателями остаётся в обшивке корабля противника. Благодаря дистанционному управлению хвостовыми двигателями, несколько тысяч Ос могут взять под контроль движения любого корабля. Ну, или просто взорвать его к херам вместе с капитаном-неудачником, подпустившим Ос слишком близко к своему кораблю.',
  fleetup: 'royalwasphornet',
  battleEffects: [{
    pretext: '',
    aftertext: '% шанс уничтожить Дракон перед своей смертью',
    result: function(level) {
      level = level || Game.Research.items.fleetups.royalwasphornet.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 0.5;
      } else if (level < 100) {
        return 1;
      } else {
        return 2;
      }
    },
    onRoundEnd: function(unit, friends, enemies, round, options) {
      return Game.Unit.battleEffects.killOnDeath(this.result(), unit, enemies['reptiles.fleet.dragon']);
    }
  }],
  basePrice: {
    humans: 10,
    metals: 1500,
    crystals: 750,
    time: 60 + 45
  },
  characteristics: {
    damage: {
      min: 240,
      max: 300
    },
    life: 500
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.sphero,
      Game.Unit.items.reptiles.fleet.blade,
      Game.Unit.items.reptiles.fleet.lacertian
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield, 10],
      [Game.Building.items.military.shipyard, 10]
    ];
  }
});

new game.Unit({
  name: 'Мираж',
  // Призрак - (3 урон, 5 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Фантом - (6 урон, 10 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'mirage',
  description: 'В рамках поиска новых технологий, повышающих уровень защиты от Рептилий, на основе системы «стелс» атмосферных истребителей был разработан новый аппарат. Мираж отражает большинство сигналов, и он практически невидим на радарах противника. Однако же всё это не позволяет кораблю быть полностью неуловимым, а лишь усложняет наведение на цель. Тем не менее этого достаточно, чтобы он выполнял свою задачу. Удачных манёвров мираж выполняет больше, хотя по урону и броне соответствует Осе.',
  fleetup: 'mirageghostphantom',
  battleEffects: [{
    pretext: '',
    aftertext: '% шанс не получить урон во время первой атаки',
    result: function(level) {
      level = level || Game.Research.items.fleetups.mirageghostphantom.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 15;
      } else if (level < 100) {
        return 30;
      } else {
        return 50;
      }
    },
    onAttack: function(unit, friends, enemies, round, options) {
      if (round != 1) {
        return false;
      }
      return Game.Unit.battleEffects.evadeTakenDamage(this.result(), unit);
    }
  }],
  basePrice: {
    humans: 50,
    metals: 3300,
    crystals: 1375,
    time: 200
  },
  characteristics: {
    damage: {
      min: 400,
      max: 500
    },
    life: 1000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.lacertian,
      Game.Unit.items.reptiles.fleet.blade,
      Game.Unit.items.reptiles.fleet.sphero
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield, 20],
      [Game.Building.items.military.shipyard, 15]
    ];
  }
});

new game.Unit({
  name: 'Фрегат',
  // Фрегат поддержки - (8 урон, 20 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Боевой фрегат - (6 урон, 10 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'frigate',
  description: 'Фрегаты – это корабли лёгкого класса. Достаточно небольшой сам по себе, Фрегат, однако же, обладает неплохим вооружением и бронёй, а также высокой скоростью стрельбы; способен уничтожать небольшие корабли противника. Фрегаты часто используются в качестве небольших мобильных оборонных кораблей. Идти в авангарде флота Фрегат не сможет, зато он вполне способен прикрывать крупные союзные корабли от истребителей Рептилоидов, и он отлично справляется с этой задачей.',
  fleetup: 'frigatesupportbattle',
  battleEffects: [{
    pretext: 'на ',
    aftertext: '% больше урона по Клинкам',
    result: function(level) {
      level = level || Game.Research.items.fleetups.frigatesupportbattle.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 7.5;
      } else if (level < 100) {
        return 15;
      } else {
        return 35;
      }
    },
    onAttack: function(unit, friends, enemies, round, options) {
      return Game.Unit.battleEffects.moreDamage(1 + this.result() / 100, unit, enemies['reptiles.fleet.blade']);
    }
  }],
  basePrice: {
    humans: 100,
    metals: 13500,
    crystals: 4500,
    time: 500
  },
  characteristics: {
    damage: {
      min: 1200,
      max: 1500
    },
    life: 4000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.blade,
      Game.Unit.items.reptiles.fleet.lacertian,
      Game.Unit.items.reptiles.fleet.wyvern
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield, 25],
      [Game.Building.items.military.shipyard, 20]
    ];
  }
});

new game.Unit({
  name: 'Трак C',
  // Трак B - (+100 ресов за уровень) умножает на 2 полученные за усиления статы (1-50 ур)
  // Трак A - (+200 ресов за уровень) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'truckc',
  description: 'Траки не обладают серьёзным вооружением, и могут сбить разве что парочку дронов. Но надо понимать, что Траки – это небоевые корабли, они нужны для того, чтобы собирать полезный лом после боя. Трюмы у обычных кораблей гораздо больше, однако трак имеет особые системы сканирования и технические устройства, благодаря которым только он может находить среди лома уничтоженных кораблей небольшие, но рабочие и полезные элементы. Так или иначе, имея Траки в своём флоте, вы получите больше ресурсов после победы.',
  fleetup: 'truckctruckbtrucka',
  battleEffects: [{
    pretext: '',
    aftertext: '% шанс вообще не получить урон',
    result: function(level) {
      level = level || Game.Research.items.fleetups.truckctruckbtrucka.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 20;
      } else if (level < 100) {
        return 40;
      } else {
        return 80;
      }
    },
    onAttack: function(unit, friends, enemies, round, options) {
      return Game.Unit.battleEffects.evadeTakenDamage(this.result(), unit);
    }
  }],
  basePrice: {
    humans: 150,
    metals: 15000,
    crystals: 3000,
    time: 1200
  },
  power: 0,
  characteristics: {
    damage: {
      min: 40,
      max: 50
    },
    life: 2500
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.sphero,
      Game.Unit.items.reptiles.fleet.blade,
      Game.Unit.items.reptiles.fleet.lacertian
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield, 30],
      [Game.Building.items.military.shipyard, 25]
    ];
  }
});

new game.Unit({
  name: 'Крейсер',
  // Линейный крейсер - (15 урон, 35 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Нелинейный крейсер - (30 урон, 70 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'cruiser',
  description: 'Крейсер, как понятно из названия, универсальный боевой корабль, способный выполнять практически любые задачи независимо от основного флота. Оснащён высокоточным ионным орудием, способным вывести из строя почти любые щиты противника. Крейсер также отлично подходит для уничтожения небольших и шустрых целей. Его нельзя назвать основным оружием в космических баталиях против Рептилоидов, однако же и нельзя недооценивать его потенциал. Если флот противника состоит преимущественно из кораблей класса «штурмовик», то несколько таких машинок расправятся с ними гораздо быстрее, чем сотня Ос.',
  fleetup: 'cruiserlinearnonlinear',
  battleEffects: [{
    pretext: '',
    notImplemented: true,
    aftertext: '% шанс на 4-ой атаке нанести 100% урон',
    result: function(level) {
      level = level || Game.Research.items.fleetups.cruiserlinearnonlinear.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 10;
      } else if (level < 100) {
        return 20;
      } else {
        return 50;
      }
    },
    onRoundStart: function(unit, friends, enemies, round, options) {
      if (round == 4 && Game.Random.chance(this.result())) {
        return Game.Unit.battleEffects.maximizeCalculatedDamage(unit);
      }
    }
  }],
  basePrice: {
    humans: 1500,
    metals: 30000,
    crystals: 10000,
    time: 600
  },
  characteristics: {
    damage: {
      min: 2400,
      max: 3000
    },
    life: 7000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.wyvern,
      Game.Unit.items.reptiles.fleet.dragon,
      Game.Unit.items.reptiles.fleet.hydra
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield, 35],
      [Game.Building.items.military.shipyard, 30],
      [Game.Research.items.evolution.science, 25]
    ];
  }
});

new game.Unit({
  name: 'Линкор',
  // Квадракор - (25 урон, 70 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Гексакор - (50 урон, 140 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'battleship',
  description: 'Линкор или Линейный корабль — основная боевая единица в космосе. Сам Адмирал Стил Болз назвал эти Линкоры величайшим космическим орудием. Понятно, что есть корабли и мощнее, однако же сочетание серьёзного вооружения, крепкой брони, относительно невысокой стоимости и прекрасных показателей приоритетов атаки делают Линкоры самым полезным кораблём на поле боя, способным дать отпор даже крайне Ебучим Флотилиям Рептилоидов.',
  fleetup: 'battleshipquadhex',
  battleEffects: [{
    notImplemented: true,
    pretext: '',
    aftertext: '',
    result: function(level) {
      level = level || Game.Research.items.fleetups.battleshipquadhex.currentLevel();
      if (level < 10) {
        return '';
      } else if (level < 50) {
        return '5% шанс в каждой атаке получить на 20% меньше урона';
      } else if (level < 100) {
        return '10% шанс в каждой атаке получить на 40% меньше урона';
      } else {
        return '20% шанс в каждой атаке получить на 80% меньше урона';
      }
    }/*,
    onAttack: function(unit, friends, enemies, round, options) {
      var level = Game.Research.items.fleetups.battleshipquadhex.currentLevel();
      if (level < 10) {
        return false;
      } else if (level < 50) {
        if (Game.Random.chance(5)) {
          return Game.Unit.battleEffects.reduceTakenDamage(20, unit);
        }
      } else if (level < 100) {
        if (Game.Random.chance(10)) {
          return Game.Unit.battleEffects.reduceTakenDamage(40, unit);
        }
      } else {
        if (Game.Random.chance(20)) {
          return Game.Unit.battleEffects.reduceTakenDamage(80, unit);
        }
      }
    }*/
  }],
  basePrice: {
    humans: 7500,
    metals: 65000,
    crystals: 14000,
    time: 60 * 20
  },
  characteristics: {
    damage: {
      min: 4000,
      max: 5000
    },
    life: 15000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.hydra,
      Game.Unit.items.reptiles.fleet.dragon,
      Game.Unit.items.reptiles.fleet.wyvern
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield,   45],
      [Game.Building.items.military.shipyard,   40],
      [Game.Research.items.evolution.alloy,     40],
      [Game.Research.items.evolution.hyperdrive, 1]
    ];
  }
});

new game.Unit({
  name: 'Авианосец',
  // Боевая база - (40 урон, 90 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Проект Х - (80 урон, 180 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'carrier',
  description: 'Авианосец, или, как его ещё называют, Улей – это огромный боевой корабль-завод. Он способен производить и ремонтировать Гаммадронов прямо во время боя. Авианосец имеет серьёзное вооружение, однако же основной урон он наносит благодаря рою дронов, который всегда его сопровождает. Именно поэтому его и прозвали Ульем, хотя руководству по непонятной причине это название не слишком нравится.',
  fleetup: 'carrierbaseprojectx',
  battleEffects: [{
    pretext: 'восстанавливает ',
    aftertext: ' Гаммадронов после боя',
    result: function(level) {
      level = level || Game.Research.items.fleetups.carrierbaseprojectx.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 100;
      } else if (level < 100) {
        return 250;
      } else {
        return 500;
      }
    },
    onBattleEnd: function(unit, friends, enemies, round, options) {
      return Game.Unit.battleEffects.restoreUnits(this.result(), unit, friends['army.fleet.gammadrone']);
    }
  }],
  basePrice: {
    humans: 17000,
    metals: 82000,
    crystals: 25000,
    time: 30 * 60
  },
  characteristics: {
    damage: {
      min: 7200,
      max: 9000
    },
    life: 20000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.hydra,
      Game.Unit.items.reptiles.fleet.lacertian,
      Game.Unit.items.reptiles.fleet.blade
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield,    50],
      [Game.Building.items.military.shipyard,    45],
      [Game.Research.items.evolution.alloy,      45],
      [Game.Research.items.evolution.hyperdrive, 30]
    ];
  }
});

new game.Unit({
  name: 'Дредноут',
  // Лучевой дредноут - (100 урон, 200 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Плазменный дредноут - (200 урон, 400 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'dreadnought',
  description: 'Дредноут – корабль среднего класса. По размеру он немного меньше авианосца, а грозное название получил благодаря особой конструкции: фронтальная броня Дредноута практически непробиваема, его орудия многочисленны и крайне точны, скорость стрельбы поражает. Крупные орудия на бортах способны сносить с одного залпа небольшие корабли врага, а особая система боковых двигателей позволяет Дредноуту крайне быстро разворачиваться носом в нужную сторону. Обойти его сверху или снизу не выйдет, крупный калибр не позволит. Очень мощный корабль людей, единственная его слабость – вражеский удар «в спину».',
  fleetup: 'dreadnoughtbeamplasma',
  battleEffects: [{
    pretext: 'на ',
    aftertext: ' атаке наносит двойной урон',
    result: function(level) {
      level = level || Game.Research.items.fleetups.dreadnoughtbeamplasma.currentLevel();
      if (level < 10) {
        return '';
      } else if (level < 50) {
        return '2-ой';
      } else if (level < 100) {
        return '2-ой и 3-ей';
      } else {
        return '2-ой, 3-ей и 4-ой';
      }
    },
    onRoundStart: function(unit, friends, enemies, round, options) {
      var level = Game.Research.items.fleetups.dreadnoughtbeamplasma.currentLevel();
      if (level < 10) {
        return false;
      } else if (level < 50) {
        return Game.Unit.battleEffects.multiplyCalculatedDamage(2, unit);
      } else if (level < 100 && round == 2) {
        return Game.Unit.battleEffects.multiplyCalculatedDamage(2, unit);
      } else if (round == 2 || round == 3) {
        return Game.Unit.battleEffects.multiplyCalculatedDamage(2, unit);
      }
    }
  }],
  basePrice: {
    humans: 25000,
    metals: 170000,
    crystals: 60000,
    time: 60 * 60
  },
  characteristics: {
    damage: {
      min: 16000,
      max: 20000
    },
    life: 50000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.octopus,
      Game.Unit.items.reptiles.fleet.prism,
      Game.Unit.items.reptiles.fleet.armadillo
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield,    55],
      [Game.Building.items.military.shipyard,    50],
      [Game.Research.items.evolution.alloy,      50],
      [Game.Research.items.evolution.hyperdrive, 45]
    ];
  }
});

new game.Unit({
  name: 'Рейлган',
  // Снайперский рейлган - (250 урон, 100 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Артиллерийский рейлган - (500 урон, 200 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'railgun',
  description: 'Рейлганы – это небольшие дальнобойные орудия, управляемые искусственным разумом; по размеру не больше стандартной Осы. Эти маленькие убийцы – настоящий прорыв ювелирно точных технологий людей. Специальные плазменные призмы преобразуют энергию кристаллов в особое вещество, которое со скоростью света вырывается в нужном направлении и на огромном расстоянии буквально разрезает корабли врага пополам, как нож – тёплое масло. Рейлганы не обладают серьёзной бронёй, их защита – то, что они находятся далеко от поля боя. К сожалению, они практически беззащитны в ближнем бою.',
  fleetup: 'railgunsniperartillery',
  battleEffects: [{
    pretext: '',
    aftertext: '% шанс нанести 300% урона Тени в первой атаке',
    result: function(level) {
      level = level || Game.Research.items.fleetups.railgunsniperartillery.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 20;
      } else if (level < 100) {
        return 40;
      } else {
        return 80;
      }
    },
    onAttack: function(unit, friends, enemies, round, options) {
      if (round != 1 || !Game.Random.chance(this.result())) {
        return false;
      }
      return Game.Unit.battleEffects.redirectDamageTo(3, unit, enemies['reptiles.fleet.shadow'], enemies);
    }
  }],
  basePrice: {
    metals: 100000,
    crystals: 200000,
    time: 60 * 60 * 4
  },
  characteristics: {
    damage: {
      min: 40000,
      max: 50000
    },
    life: 25000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.shadow,
      Game.Unit.items.reptiles.fleet.godzilla,
      Game.Unit.items.reptiles.fleet.prism
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.airfield,    60],
      [Game.Building.items.military.shipyard,    55],
      [Game.Research.items.evolution.energy,     60],
      [Game.Research.items.evolution.hyperdrive, 55]
    ];
  }
});

new game.Unit({
  name: 'Пожинатель',
  // Древний пожинатель - (300 урон, 600 броня) умножает на 2 полученные за усиления статы (1-50 ур)
  // Мифический пожинатель - (600 урон, 1200 броня) умножает на 2 полученные за усиления статы (1-100 ур)
  engName: 'reaper',
  description: 'Для получения технологии, по которой строился данный корабль, наши учёные годами изучали через портал космические войны в другой вселенной. К сожалению, пока что мы смогли понять не больше 10% от общего количества систем кораблей класса Пожинатель. Так или иначе, на основе этих знаний мы смогли построить нечто похожее на оригинал, и этого было достаточно, чтобы собрать самый мощный корабль серийного производства среди флотов человеческой расы. Его броня превосходна, а урон сложно переоценить. Сотни таких чудовищ разнесут практически любой флот противника.',
  fleetup: 'reaperancientmythical',
  battleEffects: [{
    pretext: 'после уничтожения наносит ',
    aftertext: ' урона вражескому флоту',
    result: function(level) {
      level = level || Game.Research.items.fleetups.reaperancientmythical.currentLevel();
      if (level < 10) {
        return 0;
      } else if (level < 50) {
        return 250000;
      } else if (level < 100) {
        return 500000;
      } else {
        return 1000000;
      }
    },
    onRoundEnd: function(unit, friends, enemies, round, options) {
      return Game.Unit.battleEffects.hitOnDeath(this.result(), unit, enemies);
    }
  }],
  basePrice: {
    humans: 100000,
    metals: 600000,
    crystals: 200000,
    time: 60 * 60 * 24
  },
  characteristics: {
    damage: {
      min: 48000,
      max: 60000
    },
    life: 150000
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.godzilla,
      Game.Unit.items.reptiles.fleet.octopus,
      Game.Unit.items.reptiles.fleet.prism
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.shipyard, 65],
      [Game.Building.items.military.gates,    80],
      [Game.Building.items.military.void,     60]
    ];
  }
});

new game.Unit({
  name: 'Императорский Флагман',
  // Королевский флагман - (750 урон, 2500 броня) умножает на 2 полученные за усиления статы (1-50 ур). 90% шанс вернуться домой несмотря на исход боя
  // Императорский флагман - (1500 урон, 5000 броня) умножает на 2 полученные за усиления статы (1-100 ур). 100% шанс вернуться домой несмотря на исход боя
  engName: 'flagship',
  description: 'Венец творения современной боевой космонавтики. Данный корабль производится лишь в одном экземпляре и лишь для Консулов. Разработки подобной боевой системы были начаты ещё 10 лет назад для особо рьяных и особо богатых милитаристов — членов галактического совета, однако война с Рептилиями расставила свои приоритеты и прототип был переоборудован специально для борьбы с чешуйчатыми, а после появления Консулов вопросов не осталось. Императорский Флагман — это символ силы его Правителя и это страх для его врагов! Рептилоиды стараются избегать боя с Императорским Флагманом, ибо даже им понятно, что лучше уйти сейчас и выжить, чем погибнуть в страшных муках и потерять половину флота.',
  fleetup: 'flagshiproyalimperial',
  battleEffects: [{
    pretext: '',
    aftertext: '% шанс вернуться домой несмотря на исход боя',
    result: function(level) {
      level = level || Game.Research.items.fleetups.flagshiproyalimperial.currentLevel();
      if (level < 10) {
        return 35;
      } else if (level < 50) {
        return 80;
      } else if (level < 100) {
        return 90;
      } else {
        return 100;
      }
    },
    onBattleEnd: function(unit, friends, enemies, round, options) {
      return Game.Unit.battleEffects.ressurectUnits(this.result(), 1, unit);
    }
  }],
  basePrice: {
    humans: 150000,
    metals: 3000000,
    crystals: 500000,
    time: 60 * 60 * 24 * 3
  },
  characteristics: {
    damage: {
      min: 120000,
      max: 150000
    },
    life: 600000
  },
  maxCount: 1,
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.shadow,
      Game.Unit.items.reptiles.fleet.prism,
      Game.Unit.items.reptiles.fleet.wyvern
    ];
  },
  requirements: function() {
    return [
      [Game.Building.items.military.shipyard,        65],
      [Game.Research.items.evolution.alloy,          70],
      [Game.Research.items.evolution.nanotechnology, 60],
      [Game.Research.items.evolution.hyperdrive,     60]
    ];
  }
});

};