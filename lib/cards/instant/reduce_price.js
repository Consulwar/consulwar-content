initCardsContentInstantReducePrice = function() {
'use strict';

new game.InstantCard({
  name: 'Скидосики',
  engName: 'discount',
  cardType: 'instant',
  group: 'reducePrice',
  effect: [new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше людей',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return 500;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше металла',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return 50;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше кристалла',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return 25;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше чести',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return 2.5;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше ггк',
    priority: 9,
    affect: 'credits',
    result: function(level) {
      return 5;
    }
  })]/*,
  price: {
    credits: 10
  }*/
});

new game.InstantCard({
  name: 'Акция',
  engName: 'stock',
  cardType: 'instant',
  group: 'reducePrice',
  effect: [new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше людей',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return 3000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше металла',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return 300;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше кристалла',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return 150;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше чести',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return 15;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше ггк',
    priority: 9,
    affect: 'credits',
    result: function(level) {
      return 30;
    }
  })]/*,
  price: {
    credits: 20
  }*/
});

new game.InstantCard({
  name: 'Б/у материалы',
  engName: 'UsedMaterials',
  cardType: 'instant',
  group: 'reducePrice',
  effect: [new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше людей',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return 25000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше металла',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return 2500;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше кристалла',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return 1250;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше чести',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return 125;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше ггк',
    priority: 9,
    affect: 'credits',
    result: function(level) {
      return 250;
    }
  })]/*,
  price: {
    credits: 20
  }*/
});

new game.InstantCard({
  name: 'Краденые материалы',
  engName: 'StolenMaterials',
  cardType: 'instant',
  group: 'reducePrice',
  effect: [new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше людей',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return 100000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше металла',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return 10000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше кристалла',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return 5000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше чести',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return 500;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше ггк',
    priority: 9,
    affect: 'credits',
    result: function(level) {
      return 1000;
    }
  })]/*,
  price: {
    credits: 20
  }*/
});

new game.InstantCard({
  name: 'Импортозамещение',
  engName: 'ImportSubstitution',
  cardType: 'instant',
  group: 'reducePrice',
  effect: [new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше людей',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return 400000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше металла',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return 40000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше кристалла',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return 20000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше чести',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return 2000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше ггк',
    priority: 9,
    affect: 'credits',
    result: function(level) {
      return 4000;
    }
  })]/*,
  price: {
    credits: 20
  }*/
});

new game.InstantCard({
  name: 'Сын депутата',
  engName: 'SonOfADeputy',
  cardType: 'instant',
  group: 'reducePrice',
  effect: [new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше людей',
    priority: 9,
    affect: 'humans',
    result: function(level) {
      return 1000000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше металла',
    priority: 9,
    affect: 'metals',
    result: function(level) {
      return 100000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше кристалла',
    priority: 9,
    affect: 'crystals',
    result: function(level) {
      return 50000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше чести',
    priority: 9,
    affect: 'honor',
    result: function(level) {
      return 5000;
    }
  }), new Game.Effect.Price({
    pretext: 'на ',
    aftertext: ' меньше ггк',
    priority: 9,
    affect: 'credits',
    result: function(level) {
      return 10000;
    }
  })]/*,
  price: {
    credits: 20
  }*/
});

};