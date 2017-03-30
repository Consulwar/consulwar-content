initCardsContentPulsecatcher = function() {
'use strict';

new game.Card({
	cardType: 'pulsecatcher',
	engName: 'pulsecatcher_fleet_damage',
	name: 'Импульсный уловитель',
	description: '',
	durationTime: 60 * 60 * 24,
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
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 8 + ((8 / 100) * level * 0.5);
		}
	})
});

new game.Card({
	cardType: 'pulsecatcher',
	engName: 'pulsecatcher_fleet_life',
	name: 'Импульсный уловитель',
	description: '',
	durationTime: 60 * 60 * 24,
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
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 5 + ((5 / 100) * level * 0.5);
		}
	})
});

new game.Card({
	cardType: 'pulsecatcher',
	engName: 'pulsecatcher_resources_metal',
	name: 'Импульсный уловитель',
	description: '',
	durationTime: 60 * 60 * 24,
	effect: new Game.Effect.Income({
		pretext: 'Добыча металла +',
		aftertext: '%',
		priority: 2,
		affect: 'metals',
		result: function(level) {
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 9 + ((9 / 100) * level * 0.5);
		}
	})
});

new game.Card({
	cardType: 'pulsecatcher',
	engName: 'pulsecatcher_resources_crystal',
	name: 'Импульсный уловитель',
	description: '',
	durationTime: 60 * 60 * 24,
	effect: new Game.Effect.Income({
		pretext: 'Добыча кристалла +',
		aftertext: '%',
		priority: 2,
		affect: 'crystals',
		result: function(level) {
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 6 + ((6 / 100) * level * 0.5);
		}
	})
});


new game.Card({
	cardType: 'pulsecatcher',
	engName: 'pulsecatcher_resources_honor',
	name: 'Импульсный уловитель',
	description: '',
	durationTime: 60 * 60 * 24,
	effect: new Game.Effect.Income({
		pretext: 'Честь в час +',
		aftertext: '',
		priority: 1,
		affect: 'honor',
		result: function(level) {
			level = Game.Building.items.residential.pulsecatcher.currentLevel();
			return 100 + ((100 / 100) * level * 0.5);
		}
	})
});

};