initHouseContentTronItems = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'tron';

new game.HouseItem({
	subgroup: 'tron',
	engName: 'consul',
	name: 'Трон Консула',
	description: 'У каждого правителя должен быть свой Трон. Этот Трон был специально изготовлен для вашего аватара, Консул. Это один из символов вашей власти, вашей непоколебимой воли и справедливых решений. Вы уникальны, и этот трон – ваш.',
	overlay: {
		x: 668, 
		y: 208
	},
	effect: new Game.Effect.Income({
		pretext: '',
		aftertext: ' грамм кристалла в час',
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			return 10;
		}
	})
});

new game.HouseItem({
	subgroup: 'tron',
	engName: 'czar',
	name: 'Царский Трон',
	description: 'Царский трон был создан специально для очень важных задниц, нет, даже так: для самых важных задниц. На нашей планете, Консул, нет ни одной задницы важнее вашей. И у вас есть уникальный шанс подчеркнуть это. Укажите всем на ваше превосходство, установив этот Трон в свои покои.',
	overlay: {
		x: 689, 
		y: 238
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
		credits: 1000
	}
});

new game.HouseItem({
	subgroup: 'tron',
	engName: 'gameofthrones',
	name: 'Трон из Игры Престолов',
	description: 'Здесь не Вестерос, однако же проблем не меньше. Нужно управлять целой планетой, судьба всего человечества зависит от Консула, Рептилоиды продолжают атаковать по всем фронтам, и только самые стойкие из Консулов смогут устоять. Железный Трон уникален и изготавливается именно для таких правителей.',
	overlay: {
		x: 624, 
		y: 193
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
	subgroup: 'tron',
	engName: 'stool',
	name: 'Табурет',
	description: 'Вот не совсем понятно, если Аватар Консула во вселенной 42 – это специальный робот-аниматроник, тогда зачем ему удобства в виде всяких Тронов? Ради понтов? Пф! Консул выше этого.',
	overlay: {
		x: 600, 
		y: 137
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
});

};