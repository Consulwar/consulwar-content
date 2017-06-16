initAchievementsContentCosmos = function() {
'use strict';

new game.Achievement({
	engName: 'pirateraid',
	group: 'cosmos',
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
	group: 'cosmos',
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
	group: 'cosmos',
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
	group: 'cosmos',
	name: 'Убийца леприконов',
	description: '10 раз уничтожить караван',
	field: 'battle.tradefleet.victory',
	levels: [10],
	effect: new Game.Effect.Special({
		notImplemented: true,
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
	group: 'cosmos',
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
	group: 'cosmos',
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
	group: 'cosmos',
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

};