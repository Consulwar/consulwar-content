initCardsContentInstantPlanetDiscover = function() {
'use strict';

new game.InstantCard({
	name: 'Разведка космоса №1',
	engName: 'planetDiscover1',
	cardType: 'instant',
	group: 'planetDiscover',
	effect: new Game.Effect.Special({
		pretext: 'разведка космоса ',
		aftertext: '',
		priority: 1
	}),
	price: {
		credits: 10
	}
});

};
