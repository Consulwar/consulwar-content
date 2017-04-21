initCardsContentInstantReinforcement = function() {
'use strict';

new game.InstantCard({
	name: 'Подкрепление без потерь №1',
	engName: 'reinforcement1',
	cardType: 'instant',
	group: 'reinforcement',
	effect: new Game.Effect.Special({
		pretext: 'подкрепление без потерь ',
		aftertext: '',
		priority: 1
	}),
	price: {
		credits: 10
	}
});

};
