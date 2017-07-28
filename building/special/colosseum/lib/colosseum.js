initBuildingSpecialColosseumContent = function() {
'use strict';

new game.ColosseumTournament({
  engName: 'green_ring',
  name: 'Зеленый ринг',
  description: 'Шанс получить белый артефакт',
  level: 1,
  price: {
    honor: 500
  }
});

new game.ColosseumTournament({
  engName: 'bloody_mess',
  name: 'Кровавое месиво',
  description: 'Шанс получить зеленый артефакт',
  level: 20,
  price: {
    honor: 1000
  }
});

new game.ColosseumTournament({
  engName: 'extermination',
  name: 'Рептилоидное истребление',
  description: 'Шанс получить синий артефакт',
  level: 40,
  price: {
    honor: 5000
  }
});

new game.ColosseumTournament({
  engName: 'mortal_combat',
  name: 'Смертельная битва',
  description: 'Шанс получить фиолетовый артефакт',
  level: 60,
  price: {
    honor: 10000
  }
});

new game.ColosseumTournament({
  engName: 'mad_race',
  name: 'Бешеная гонка',
  description: 'Шанс получить оранжевый артефакт',
  level: 80,
  price: {
    honor: 25000
  }
});

new game.ColosseumTournament({
  engName: 'fire_dragon',
  name: 'Огненный дракон',
  description: 'Шанс получить красный артефакт',
  level: 100,
  price: {
    honor: 50000
  }
});

};