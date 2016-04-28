initPulsecatcherContent = function() {

new game.Card({
	engName: 'pulsecatcherFleet',
	cardType: 'pulsecatcher',
	isHidden: true,
	name: 'Общее усиление флота',
	description: 'Бонус импульсного уловителя на усиление брони и атаки флота<br/>Срок действия: 1 день',
	durationTime: 60 * 60 * 24,
	effect: new Game.Effect.Military({
		pretext: '+',
		aftertext: '% к атаке и броне флота',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 2,
		affect: ['damage', 'life'],
		result: function(level) {
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 5 + (5 / 200 * level);
		}
	})
});

new game.Card({
	engName: 'pulsecatcherResearch',
	cardType: 'pulsecatcher',
	isHidden: true,
	name: 'Общее ускорение исследований',
	description: 'Бонус импульсного уловителя на ускорение исследований<br/>Срок действия: 1 день',
	durationTime: 60 * 60 * 24,
	effect: new Game.Effect.Price({
		pretext: '+',
		aftertext: '% к скорости исследований',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 7 + (7 / 100 * level);
		}
	})
});

new game.Card({
	engName: 'pulsecatcherResources',
	cardType: 'pulsecatcher',
	isHidden: true,
	name: 'Общее увеличение добычи',
	description: 'Бонус импульсного уловителя на увеличение добычи металла и кристалла<br/>Срок действия: 1 день',
	durationTime: 60 * 60 * 24,
	effect: new Game.Effect.Income({
		pretext: '+',
		aftertext: '% к добыче металла и кристалла',
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 10 + (10 / 100 * level);
		}
	})
});

};