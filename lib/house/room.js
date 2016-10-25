initHouseContentRoomItems = function() {

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.HouseItem({
	subgroup: 'room',
	engName: 'consul',
	name: 'Палата Консула',
	description: 'У каждого Консула есть своя планета, свой народ, и свой Высотный Дворец с Палатой Консула. Это Специальный Тронный Зал где расположена резиденция вашего робота-аватара, вашего физического воплощения во вселенной 42. Люди должны знать кто их Правитель.',
	effect: new Game.Effect.Income({
		pretext: '',
		aftertext: ' килограмм металла в час',
		priority: 1,
		affect: 'metals',
		result: function(level) {
			return 30;
		}
	})
});

new game.HouseItem({
	subgroup: 'room',
	engName: 'czar',
	name: 'Царский Тронный Зал',
	description: 'Долой скромность, вы Правитель целой планеты, вы спасаете чужую вселенную от коварных и опасных рептилоидов, вы управляете огромными армиями и флотом. неужели вы не достойны всего самого лучшего, за свои труды? Конечно достойны. Царский Тронный Зал, Консул. Так то.',
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
		credits: 1000
	}
});

new game.HouseItem({
	subgroup: 'room',
	engName: 'gameofthrones',
	name: 'Тронный Зал Игра Престолов',
	description: 'Как Великий Консул, вы можете спокойно потребовать заменить ваш стандартный тронный зал на любой другой. Может быть.. хмм... Да! Тронный Зал из игры престолов? Это сильный и смелый шаг. С таким тронным залом ваше правление станет крепче, как и броня вашего флота.',
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
	isUnique: true
});

new game.HouseItem({
	subgroup: 'room',
	engName: 'cruel',
	name: 'Тронный Зал Жестокости',
	description: 'Твоя душа принадлежит мне! Сказал Консул и проломил голову поганой Рептилоиду. именно такие фильмы показывают в ваших кинотеатрах. Что ж, жестокость важна для поддержания ненависти к Рептилиям. Похоже вам не помешало бы и тронный зал оформить в таком стиле.',
	effect: new Game.Effect.Military({
		pretext: 'Урон флота +',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 2,
		affect: 'damage',
		result: function(level) {
			return 2;
		}
	}),
	price: {
		credits: 1000
	}
});

};