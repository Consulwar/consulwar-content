initCardsContent = function() {

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
	engName: 'testCard1',
	group: 'resourceCard',
	name: 'Карточка на металл',
	description: 'Описание карточки номер один на металл',
	durationTime: 90,
	effect: new Game.Effect.Income({
		pretext: '',
		aftertext: ' килограмм металла в час',
		priority: 1,
		affect: 'metals',
		result: function(level) {
			return 150;
		}
	}),
	price: {
		credits: 42
	}
});

new game.Card({
	engName: 'testCard2',
	group: 'resourceCard',
	name: 'Карточка на людей',
	description: 'Описания карточки номер два на людей',
	durationTime: 120,
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 200,
		affect: 'humans',
		result: function(level) {
			return 2;
		}
	}),
	price: {
		credits: 150
	}
});

new game.Card({
	engName: 'testCard3',
	group: 'fleetCard',
	name: 'Карточка на броню',
	description: 'Описания карточки на броню',
	durationTime: 120,
	reloadTime: 60,
	effect: new Game.Effect.Military({
		pretext: 'Броня флота +',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 2,
		affect: 'life',
		result: function(level) {
			return 3;
		}
	}),
	price: {
		credits: 200
	}
});

}