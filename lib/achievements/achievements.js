initAchievementsContent = function() {

new game.Achievement({
	engName: 'builder',
	name: [
		'Градостроитель 5 степени',
		'Градостроитель 4 степени',
		'Градостроитель 3 степени',
		'Градостроитель 2 степени',
		'Градостроитель 1 степени'
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
			name: 'message'
		},
		affect: 'crystals',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return [10, 20, 30][level - 1];
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
			return 5;
		}
	})
});

};