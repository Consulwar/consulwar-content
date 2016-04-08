initCardsContent = function() {

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
	engName: 'uncleBuilder',
	cardGroup: 'uncle',
	name: 'Дядя застройщик',
	description: 'Только один дядя застройщик может быть активен в момент времени',
	durationTime: 60 * 60 * 24 * 30,
	effect: new Game.Effect.Price({
		pretext: 'Скорость строительства всех зданий быстрее на ',
		aftertext: '% (сверх прочих бонусов)',
		condition: {
			type: 'building'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 10;
		}
	}),
	price: {
		credits: 1000
	}
});

new game.Card({
	engName: 'mustachioedUncleDeveloper',
	cardGroup: 'uncle',
	name: 'Усатый дядя застройщик',
	description: 'Только один дядя застройщик может быть активен в момент времени',
	durationTime: 60 * 60 * 24 * 30,
	effect: [new Game.Effect.Price({
		pretext: 'Скорость строительства всех зданий быстрее на ',
		aftertext: '% (сверх прочих бонусов)',
		condition: {
			type: 'building'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	}), new Game.Effect.Price({
		pretext: 'Скорость исследования быстрее на ',
		aftertext: '% (сверх прочих бонусов)',
		condition: {
			type: 'research'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	}), new Game.Effect.Price({
		pretext: 'Скорость подготовки войск на ',
		aftertext: '% (сверх прочих бонусов)',
		condition: {
			type: 'unit'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	})],
	price: {
		credits: 5000
	}
});

new game.Card({
	engName: 'energyComplex',
	cardGroup: 'complex',
	name: 'Энергетический комплекс',
	description: 'Только один комплекс может быть активен в момент времени',
	durationTime: 60 * 60 * 24 * 30,
	effect: [new Game.Effect.Income({
		pretext: 'Добыча металла +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 4,
		affect: 'metals',
		result: function(level) {
			return 20;
		}
	}), new Game.Effect.Income({
		pretext: 'Добыча кристалла +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 4,
		affect: 'crystals',
		result: function(level) {
			return 20;
		}
	})],
	price: {
		credits: 3000
	}
});

new game.Card({
	engName: 'nuclearComplex',
	cardGroup: 'complex',
	name: 'Ядерный комплекс',
	description: 'Только один комплекс может быть активен в момент времени',
	durationTime: 60 * 60 * 24 * 30,
	effect: [new Game.Effect.Income({
		pretext: 'Добыча металла +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 4,
		affect: 'metals',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: 'Добыча кристалла +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 4,
		affect: 'crystals',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: 'Приток людей +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 4,
		affect: 'humans',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: 'Честь +',
		aftertext: '% от статуи (сверх прочих бонусов)',
		priority: 4,
		affect: 'honor',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: '+',
		aftertext: ' ГГК в час',
		priority: 3,
		affect: 'credits',
		result: function(level) {
			return 5;
		}
	})],
	price: {
		credits: 7000
	}
});

new game.Card({
	engName: 'admiral',
	cardGroup: 'person',
	name: 'Адмирал Стилл Болз',
	description: 'Только один комплекс может быть активен в момент времени',
	durationTime: 60 * 60 * 24 * 30,
	effect: [new Game.Effect.Military({
		pretext: '+',
		aftertext: '% к урону флота',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 4,
		affect: 'damage',
		result: function(level) {
			return 15;
	}}, new Game.Effect.Military({
		pretext: '+',
		aftertext: '% к броне флота',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 4,
		affect: 'life',
		result: function(level) {
			return 20;
	}}],
	price: {
		credits: 7000
	}
});



new game.Card({
	engName: 'impulseScanner',
	cardGroup: 'baseIncomeBoost',
	name: 'Импульсное сканирование',
	description: 'Только один эффект из группы (Ипульсное сканирование, Химическая обработка или Розги) может быть активен в момент времени',
	durationTime: 60 * 60,
	effect: new Game.Effect.Income({
		pretext: 'Добыча металла +',
		aftertext: '%',
		priority: 2,
		affect: 'metals',
		result: function(level) {
			return 10;
		}
	}),
	price: {
		honor: 10000
	}
});

new game.Card({
	engName: 'chemicalTreatment',
	cardGroup: 'baseIncomeBoost',
	name: 'Химическая обработка',
	description: 'Только один эффект из группы (Ипульсное сканирование, Химическая обработка или Розги) может быть активен в момент времени',
	durationTime: 60 * 60,
	effect: new Game.Effect.Income({
		pretext: 'Добыча кристалла +',
		aftertext: '%',
		priority: 2,
		affect: 'crystals',
		result: function(level) {
			return 10;
		}
	}),
	price: {
		honor: 20000
	}
});

new game.Card({
	engName: 'twigs',
	cardGroup: 'baseIncomeBoost',
	name: 'Розги',
	description: 'Только один эффект из группы (Ипульсное сканирование, Химическая обработка или Розги) может быть активен в момент времени',
	durationTime: 60 * 60,
	effect: [new Game.Effect.Income({
		pretext: 'Добыча металла +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 2,
		affect: 'metals',
		result: function(level) {
			return 15;
		}
	}), new Game.Effect.Income({
		pretext: 'Добыча кристалла +',
		aftertext: '% (сверх прочих бонусов)',
		priority: 2,
		affect: 'crystals',
		result: function(level) {
			return 15;
		}
	})],
	price: {
		credits: 100
	}
});

new game.Card({
	engName: 'killSomeone',
	name: 'Расстрелять!',
	description: 'Спецслужбы найдут на улице обычного жителя, обвинят его в пособничестве Рептилиям и расстреляют. Это укрепляет веру с серьёзность намерений Консула.',
	durationTime: 60 * 60,
	effect: new Game.Effect.Income({
		pretext: 'Приток населения +',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			return 10;
		}
	}),
	price: {
		honor: 15000
	}
});

}