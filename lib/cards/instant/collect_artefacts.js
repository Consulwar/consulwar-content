initCardsContentInstantCollectArtefacts = function() {
'use strict';

new game.InstantCard({
	name: 'Сбор артефактов №1',
	engName: 'collectArtefacts1',
	cardType: 'instant',
	group: 'collectArtefacts',
	effect: new Game.Effect.Special({
		pretext: 'сбор артефактов ',
		aftertext: '',
		priority: 1,
		condition: {
			engName: 'instantCollectArtefacts'
		},
		affect: 'count',
		result: function() { return 3; }
	}),
	price: {
		credits: 10000
	}
});

};
