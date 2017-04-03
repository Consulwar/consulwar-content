initAchievementsContentCommunication = function() {
'use strict';

new game.Achievement({
	engName: 'sepukku',
	group: 'communication',
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

};