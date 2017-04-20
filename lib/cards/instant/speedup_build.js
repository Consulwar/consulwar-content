initCardsContentInstantSpeedupBuild = function() {
'use strict';

new game.InstantCard({
	name: 'Ускорение строительства №1',
	engName: 'speedupBuild1',
	cardType: 'instant',
	group: 'speedupBuild',
	effect: new Game.Effect.Price({
		pretext: 'всех зданий на ',
		aftertext: '',
		condition: {
			type: 'building'
		},
		priority: 1,
		affect: 'time',
		result: function(level) {
			return 60;
		}
	}),
	price: {
		credits: 10
	}
});

new game.InstantCard({
	name: 'Ускорение строительства №2',
	engName: 'speedupBuild2',
	cardType: 'instant',
	group: 'speedupBuild',
	effect: new Game.Effect.Price({
		pretext: 'всех исследований на ',
		aftertext: '',
		condition: {
			type: 'research'
		},
		priority: 1,
		affect: 'time',
		result: function(level) {
			return 60;
		}
	}),
	price: {
		credits: 10
	}
});

new game.InstantCard({
	name: 'Ускорение строительства №3',
	engName: 'speedupBuild3',
	cardType: 'instant',
	group: 'speedupBuild',
	effect: new Game.Effect.Price({
		pretext: 'всех войск на ',
		aftertext: '',
		condition: {
			type: 'unit'
		},
		priority: 1,
		affect: 'time',
		result: function(level) {
			return 60;
		}
	}),
	price: {
		credits: 10
	}
});

};