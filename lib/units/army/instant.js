initUnitsArmyContentInstance = function () {
'use strict';

game.setToMenu = 'army';
game.setToSide = 'instant';

new game.Unit({
  name: 'Тепло-мины',
  engName: 'HeatMines',
  characteristics: {
    damage: {
      min: 5000,
      max: 5000
    },
    life: 1
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.sphero,
      Game.Unit.items.reptiles.fleet.blade,
      Game.Unit.items.reptiles.fleet.lacertian
    ];
  }
});

new game.Unit({
  name: 'Ракета',
  engName: 'rocket',
  characteristics: {
    damage: {
      min: 30000,
      max: 30000
    },
    life: 1
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.lacertian,
      Game.Unit.items.reptiles.fleet.wyvern,
      Game.Unit.items.reptiles.fleet.trioniks
    ];
  }
});

new game.Unit({
  name: 'Лазер',
  engName: 'laser',
  characteristics: {
    damage: {
      min: 250000,
      max: 250000
    },
    life: 1
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.wyvern,
      Game.Unit.items.reptiles.fleet.dragon,
      Game.Unit.items.reptiles.fleet.hydra
    ];
  }
});

new game.Unit({
  name: 'Ионы',
  engName: 'ions',
  characteristics: {
    damage: {
      min: 1000000,
      max: 1000000
    },
    life: 1
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.hydra,
      Game.Unit.items.reptiles.fleet.armadillo,
      Game.Unit.items.reptiles.fleet.prism
    ];
  }
});

new game.Unit({
  name: 'Чистая плазма',
  engName: 'purePlasma',
  characteristics: {
    damage: {
      min: 4000000,
      max: 4000000
    },
    life: 1
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.prism,
      Game.Unit.items.reptiles.fleet.octopus,
      Game.Unit.items.reptiles.fleet.godzilla
    ];
  }
});

new game.Unit({
  name: 'Материя X',
  engName: 'xMatter',
  characteristics: {
    damage: {
      min: 10000000,
      max: 10000000
    },
    life: 1
  },
  targets: function() {
    return [
      Game.Unit.items.reptiles.fleet.octopus,
      Game.Unit.items.reptiles.fleet.godzilla,
      Game.Unit.items.reptiles.fleet.shadow
    ];
  }
});

};