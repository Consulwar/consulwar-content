initCardsContentInstantReducePrice = function() {
'use strict';

new game.InstantCard({
	name: 'Уменьшение стоимости №1',
	engName: 'reducePrice1',
	cardType: 'instant',
	group: 'reducePrice',
	effect: new Game.Effect.Price({
		pretext: 'всех зданий на ',
		aftertext: '',
		condition: {
			type: 'building'
		},
		priority: 1,
		affect: 'metals',
		result: function(level) {
			return 1000;
		}
	}),
	price: {
		credits: 10
	}
});

new game.InstantCard({
	name: 'Уменьшение стоимости №2',
	engName: 'reducePrice2',
	cardType: 'instant',
	group: 'reducePrice',
	effect: new Game.Effect.Price({
		pretext: 'всех исследований на ',
		aftertext: '',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: 'metals',
		result: function(level) {
			return 20;
		}
	}),
	price: {
		credits: 20
	}
});

new game.InstantCard({
	name: 'Уменьшение стоимости №3',
	engName: 'reducePrice3',
	cardType: 'instant',
	group: 'reducePrice',
	effect: new Game.Effect.Price({
		pretext: 'всех исследований на ',
		aftertext: '',
		condition: {
			type: 'research'
		},
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			return 100;
		}
	}),
	price: {
		credits: 20
	}
});

new game.InstantCard({
	name: 'Уменьшение стоимости №4',
	engName: 'reducePrice4',
	cardType: 'instant',
	group: 'reducePrice',
	effect: new Game.Effect.Price({
		pretext: 'всех войск на ',
		aftertext: '',
		condition: {
			type: 'unit'
		},
		priority: 1,
		affect: 'metals',
		result: function(level) {
			return 1000;
		}
	}),
	price: {
		credits: 20
	}
});

};