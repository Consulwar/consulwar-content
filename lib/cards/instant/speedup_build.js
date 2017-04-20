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

};