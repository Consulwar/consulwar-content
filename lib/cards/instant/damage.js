initCardsContentInstantDamage = function() {
'use strict';

new game.InstantCard({
	name: 'Единоразовое нанесение урона №1',
	engName: 'damage1',
	cardType: 'instant',
	group: 'damage',
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

};