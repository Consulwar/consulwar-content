initCardsContentInstantDamage = function() {
'use strict';

new game.InstantCard({
	name: 'Единоразовое нанесение урона №1',
	engName: 'damage1',
	cardType: 'instant',
	group: 'damage',
	effect: [new Game.Effect.Special({
		pretext: 'единоразовое нанесение урона ',
		aftertext: '',
		priority: 1,
		condition: {
			engName: 'instantDamage'
		},
		affect: 'army/fleet/gammadrone',
		result: function(level) {
			return 25;
		}
	}), new Game.Effect.Special({
		pretext: 'единоразовое нанесение урона ',
		aftertext: '',
		priority: 1,
		condition: {
			engName: 'instantDamage'
		},
		affect: 'army/fleet/mirage',
		result: function(level) {
			return 10;
		}
	}), new Game.Effect.Special({
		pretext: 'единоразовое нанесение урона ',
		aftertext: '',
		priority: 1,
		condition: {
			engName: 'instantDamage'
		},
		affect: 'army/instant/instantDamage1',
		result: function(level) {
			return 10;
		}
	}), new Game.Effect.Special({
		pretext: 'единоразовое нанесение урона ',
		aftertext: '',
		priority: 1,
		condition: {
			engName: 'instantDamage'
		},
		affect: 'army/ground/psimans',
		result: function(level) {
			return 33;
		}
	})],
	price: {
		credits: 10000
	}
});

};