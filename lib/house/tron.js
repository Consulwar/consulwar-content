initHouseContentTronItems = function() {

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.HouseItem({
	subgroup: 'tron',
	engName: 'consul',
	name: 'Трон Консула',
	description: 'У каждого правителя должен быть свой трон. Этот трон был специально изготовлен для вашего аватара, Консул. Это один из символов вашей власти, вашей непоколебимой воли и справедливых решений. Вы - уникальны, и этот трон - ваш.'
});

new game.HouseItem({
	subgroup: 'tron',
	engName: 'czar',
	name: 'Царский Трон',
	description: 'Царский трон был создан специально для очень важных задниц, для самых важных задниц. На вашей планете, Консул, нет ни одной задницы важнее вашей. У вас есть уникальный шанс подчеркнуть это. Укажите всем на ваше превосходство, установив этот трон в свои покои.',
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
	name: 'Трон Игра Престолов',
	description: 'Здесь не Вестерос, однако же проблем далеко не меньше. Нужно управлять целой планетой, судьба всего человечества зависит от Консула. Рептилоиды продолжают атаковать по всем фронтам и только самые стойкие из консулов смогут устоять. Железный Трон уникален и изготавливается именно для таких Правителей.',
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

}