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
	currentLevel: function() {
		var value = Game.Statistic.getUserValue('building.total');
		if (value < 100) {
			return 0;
		} else if (value < 250) {
			return 1;
		} else if (value < 500) {
			return 2;
		} else if (value < 750) {
			return 3;
		} else if (value < 1000) {
			return 4;
		}
		return 5;
	},
	effect: new Game.Effect.Income({
		pretext: 'Приток населения +',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
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
	currentLevel: function() {
		var value = Game.Statistic.getUserValue('chat.sepukku');
		if (value < 50) {
			return 0;
		} else if (value < 100) {
			return 1;
		} else if (value < 200) {
			return 2;
		}
		return 3;
	},
	effect: new Game.Effect.Price({
		pretext: 'Сообщения в общий чат дешевле на ',
		aftertext: '%',
		priority: 2,
		condition: {
			name: 'message'
		},
		affect: 'crystals',
		result: function(level) {
			return [10, 20, 30][level - 1];
		}
	})
});

new game.Achievement({
	engName: 'coldblooded',
	name: 'Хладнокровных хладнокровно',
	description: 'Уничтожил 100 000 Клинков',
	currentLevel: function() {
		var value = Game.Statistic.getUserValue('reptiles.killed.reptiles.fleet.blade');
		return (value < 100000 ? 0 : 1);
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
			return 5;
		}
	})
});

};