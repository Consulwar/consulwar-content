initAchievementsContent = function() {

new game.Achievement({
	engName: 'builder',
	name: [
		'Градостроитель 1 степени',
		'Градостроитель 2 степени',
		'Градостроитель 3 степени',
		'Градостроитель 4 степени',
		'Градостроитель 5 степени'
	],
	description: [
		'Построить 100 зданий',
		'Построить 250 зданий',
		'Построить 500 зданий',
		'Построить 750 зданий',
		'Построить 1000 зданий'
	],
	field: 'building.total',
	levels: [100, 250, 500, 750, 1000],
	effect: new Game.Effect.Income({
		pretext: 'Приток населения +',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return [100, 250, 500, 750, 1000][level - 1];
		}
	})
});

new game.Achievement({
	engName: 'sepukku',
	name: [
		'Мастер сэппуку',
		'Живота батенька',
		'А что там внутри'
	],
	description: [
		'Выполнил 50 сэппуку в чате',
		'Выполнил 100 сэппуку в чате',
		'Выполнил 200 сэппуку в чате'
	],
	field: 'chat.sepukku',
	levels: [50, 100, 200],
	effect: new Game.Effect.Price({
		pretext: 'Сообщения в общий чат дешевле на ',
		aftertext: '%',
		priority: 2,
		condition: {
			engName: 'message'
		},
		affect: 'crystals',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return [10, 20, 30][level - 1];
		}
	})
});

new game.Achievement({
	engName: 'pirateraid',
	name: 'Пиратский рейд',
	description: 'Победить патруль 10 уровня',
	field: 'battle.patrolfleet.10.victory',
	levels: [1],
	effect: new Game.Effect.Special({
		pretext: 'Урон на третьей атаке +',
		aftertext: '%',
		priority: 2,
		condition: {
			engName: 'roundDamage3'
		},
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 5 : 0;
		}
	})
});

new game.Achievement({
	engName: 'bravecaptain',
	name: 'Смелый капитан',
	description: 'Победить оборону 10 уровня',
	field: 'battle.defencefleet.10.victory',
	levels: [1],
	effect: new Game.Effect.Special({
		pretext: 'Урон на второй атаке +',
		aftertext: '%',
		priority: 2,
		condition: {
			engName: 'roundDamage2'
		},
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 5 : 0;
		}
	})
});

new game.Achievement({
	engName: 'madadmiral',
	name: 'Безбашенный адмирал',
	description: 'Победить боевой флот 10 уровня',
	field: 'battle.battlefleet.10.victory',
	levels: [1],
	effect: new Game.Effect.Special({
		pretext: 'Урон на первой атаке +',
		aftertext: '%',
		priority: 2,
		condition: {
			engName: 'roundDamage1'
		},
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 5 : 0;
		}
	})
});

new game.Achievement({
	engName: 'leprechaunkiller',
	name: 'Убийца леприконов',
	description: '10 раз уничтожить караван',
	field: 'battle.tradefleet.victory',
	levels: [10],
	effect: new Game.Effect.Special({
		pretext: 'Награда за уничтожение каравана +',
		aftertext: '%',
		priority: 2,
		condition: {
			engName: 'tradefleetBonus'
		},
		affect: ['crystals', 'metals'],
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 10 : 0;
		}
	})
});

new game.Achievement({
	engName: 'carryinglight',
	name: 'Несущий свет',
	description: 'Уничтожить 10 кораблей Тень',
	field: 'reptiles.killed.reptiles.fleet.shadow',
	levels: [10],
	effect: new Game.Effect.Military({
		pretext: 'Урон Флагмана +',
		condition: {
			type: 'unit',
			engName: 'flagship'
		},
		priority: 2,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 2 : 0;
		}
	})
});

new game.Achievement({
	engName: 'coldblooded',
	name: 'Хладнокровных хладнокровно',
	description: 'Уничтожил 100 000 Клинков',
	field: 'reptiles.killed.reptiles.fleet.blade',
	levels: [100000],
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
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 5 : 0;
		}
	})
});

new game.Achievement({
	engName: 'winner',
	name: 'Победитель',
	description: 'Победить в любом конкурсе от Консулов',
	effect: new Game.Effect.Price({
		pretext: 'Стоимость подготовки наземных войск на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'ground'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 5 : 0;
		}
	})
});

new game.Achievement({
	engName: 'cheater',
	name: 'Багоюзер',
	description: 'Использовать баги в игре некоторое время',
	effect: new Game.Effect.Income({
		pretext: '',
		aftertext: '% от добычи ресурсов',
		priority: 6,
		affect: ['humans', 'metals', 'crystals', 'honor', 'credits'],
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? -10 : 0;
		}
	})
});

};