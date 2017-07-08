initHouseContentAvatarItems = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'avatar';

new game.HouseItem({
	subgroup: 'avatar',
	engName: 'consul',
	name: 'Аватар Консула',
	description: 'Так как сам Консул находится в другой вселенной, его физическое тело во Вселенной 42 представляет специальный робот-аватар. Именно через него идёт всё личное общение с Консулом, и именно этот аватар сидит на троне в Палате Консула.',
	overlay: {
		x: 850, 
		y: 353
	},
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			return 60;
		}
	})
});

new game.HouseItem({
	subgroup: 'avatar',
	engName: 'czar',
	name: 'Аватар Царя',
	description: 'Какой образ правителя будет лучше всего подходить вашему тронному залу, Консул? Конечно же аватар Царя. Это замечательный аватар настоящего Царя из одной вселенной. Как ни странно, но челядь любит царей, а значит, вам обеспечен приток новых людей.',
	overlay: {
		x: 854, 
		y: 352
	},
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			return 100;
		}
	}),
	price: {
		credits: 10000
	}
});

new game.HouseItem({
	subgroup: 'avatar',
	engName: 'johnsnow',
	name: 'Аватар Джона Сноу',
	description: 'Консул может заказать себе любой робот-аватар. Так почему бы не заказать себе Аватар – точную копию Джона Сноу, брата ночного дозора, сильного, смелого. Подобный аватар вполне может улучшить броню вашего флота. И не спрашивайте как.',
	overlay: {
		x: 838, 
		y: 336
	},
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
			return 2;
		}
	}),
	isUnique: true
});

};