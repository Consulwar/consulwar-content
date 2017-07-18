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

new game.HouseItem({
	subgroup: 'avatar',
	engName: 'strawman',
	name: 'Соломенный человек',
	description: 'На самом деле все системы связи вселенной Консулов и вселенной 42 работают через портал и напрямую передают сигнал в нейросети. Аватар Консула, как физическое тело в принципе может не участвовать. Так почему бы не заменить его соломой? ',
	overlay: {
		x: 844, 
		y: 319
	},
	effect: new Game.Effect.Price({
		pretext: 'Снижает стоимость постройки на ',
		aftertext: '%',
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			return 1;
		}
	}),
	isUnique: true
})

};