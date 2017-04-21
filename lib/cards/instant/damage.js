initCardsContentInstantDamage = function() {
'use strict';

new game.InstantCard({
	name: 'Единоразовое нанесение урона №1',
	engName: 'damage1',
	cardType: 'instant',
	group: 'damage',
	effect: new Game.Effect.Price({
		pretext: 'единоразовое нанесение урона ',
		aftertext: '',
		priority: 1,
		condition: {
			engName: 'instantDamage'
		},
		affect: 'unitName',
		result: function(level) {
			return 'instantDamage1';
		}
	}),
	price: {
		credits: 10000
	}
});

};