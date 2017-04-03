initAchievementsContentGeneral = function() {
'use strict';

new game.Achievement({
	engName: 'builder',
	group: 'general',
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
	engName: 'rainbow',
	group: 'general',
	name: 'Радужный',
	description: 'Нашёл баг в игре и пользовался им, не сообщив, был наказан',
	effect: new Game.Effect.Income({
		aftertext: '% от добычи ресурсов',
		priority: 6,
		affect: ['humans', 'metals', 'crystals', 'honor', 'credits'],
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? -10 : 0;
		}
	})
});

new game.Achievement({
	engName: 'slaver',
	group: 'general',
	name: 'Работорговец',
	description: 'Потратить 100 000К людей',
	field: 'resources.spent.humans',
	levels: [100000000],
	effect: new Game.Effect.Income({
		pretext: 'Приток населения +',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 3000 : 0;
		}
	})
});

new game.Achievement({
	engName: 'metallurg',
	group: 'general',
	name: 'Металлург',
	description: 'Потратить 100 000К металла',
	field: 'resources.spent.metals',
	levels: [100000000],
	effect: new Game.Effect.Income({
		pretext: '+',
		aftertext: ' металла в час',
		priority: 1,
		affect: 'metals',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 2500 : 0;
		}
	})
});

new game.Achievement({
	engName: 'crystalking',
	group: 'general',
	name: 'Кристальный Король',
	description: 'Потратить 100 000К кристаллов',
	field: 'resources.spent.crystals',
	levels: [100000000],
	effect: new Game.Effect.Income({
		pretext: '+',
		aftertext: ' кристаллов в час',
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 2000 : 0;
		}
	})
});

new game.Achievement({
	engName: 'respected',
	group: 'general',
	name: 'Почитаемый',
	description: 'Потратить 10 000К чести',
	field: 'resources.spent.honor',
	levels: [10000000],
	effect: new Game.Effect.Income({
		pretext: '+',
		aftertext: ' чести в час',
		priority: 1,
		affect: 'honor',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 100 : 0;
		}
	})
});

new game.Achievement({
	engName: 'richman',
	group: 'general',
	name: 'Богач',
	description: 'Потратить 100 000 ГГК',
	field: 'resources.spent.credits',
	levels: [100000],
	effect: new Game.Effect.Income({
		pretext: '+',
		aftertext: ' ГГК в час',
		priority: 1,
		affect: 'credits',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 1 : 0;
		}
	})
});

new game.Achievement({
	engName: 'trader',
	group: 'general',
	name: 'Торговец',
	description: 'Выторговать любых ресурсов на 100 000К за всё время',
	field: 'resources.bought.total',
	levels: [100000000],
	effect: new Game.Effect.Special({
		pretext: '+',
		aftertext: '% к выгодной сделке',
		priority: 2,
		condition: {
			engName: 'tradingBonus'
		},
		affect: 'amount',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 10 : 0;
		}
	})
});

new game.Achievement({
	engName: 'boomstarter',
	group: 'general',
	name: 'Бумстартер',
	description: 'Помогал проекту на бумстартере',
	effect: [new Game.Effect.Income({
		pretext: '+',
		aftertext: ' металла в час',
		priority: 1,
		affect: 'metals',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 1000 : 0;
		}
	}), new Game.Effect.Income({
		pretext: '+',
		aftertext: ' кристаллов в час',
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 300 : 0;
		}
	})],
});

new game.Achievement({
	engName: 'helper',
	group: 'general',
	name: 'Помощь проекту',
	description: 'Помогал проекту',
	effect: [
		new Game.Effect.Income({
			pretext: '+',
			aftertext: ' чести в час',
			priority: 1,
			affect: 'honor',
			result: function(level) {
				level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 10 : 0;
			}
		}),
		new Game.Effect.Price({
			pretext: 'Чат дешевле на ',
			aftertext: '%',
			priority: 6,
			condition: {
				engName: 'message'
			},
			affect: 'crystals',
			result: function(level) {
				level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 100 : 0;
			}
		})
	]
});

new game.Achievement({
	engName: 'withoutrules',
	group: 'general',
	name: 'Без правил',
	description: 'Провести 250 турниров в колизее',
	field: 'colosseum.tournaments.total',
	levels: [250],
	effect: new Game.Effect.Special({
		notImplemented: true,
		pretext: 'Уменьшает время подготовки турнира на ',
		aftertext: '%',
		affect: 'tournamentsCooldownPeriod',
		priority: 2,
		condition: {
			engName: 'tournamentsCooldownBonus'
		},
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return (level > 0) ? 10 : 0;
		}
	})
});

new game.Achievement({
	notImplemented: true,
	engName: 'ruler',
	group: 'general',
	name: 'Вождь',
	description: 'Заработать 1 000К чести от статуи консула',
	//field: 'statue.gained.honor',
	levels: [1000000],
	effect: new Game.Effect.Special({
		notImplemented: true,
		aftertext: ' рандомный белый итем в день',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 1 : 0;
		}
	})
});

new game.Achievement({
	engName: 'freeloader',
	group: 'general',
	name: 'Халявщик',
	description: 'Набивал карманы казённым золотом',
	field: 'promocode.total',
	levels: [100],
	effect: new Game.Effect.ProfitOnce({
		notImplemented: true,
		pretext: 'Все донатные усиления включаются на ',
		aftertext: ' месяц',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 1 : 0;
		}
	})
});

new game.Achievement({
	notImplemented: true,
	engName: 'secretsociety',
	group: 'general',
	name: 'Тайное общество',
	description: 'Знает то, чего не знают другие',
	effect: new Game.Effect.ProfitOnce({
		notImplemented: true,
		aftertext: ' рубиновых плазмоидов',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 50 : 0;
		}
	})
});

new game.Achievement({
	notImplemented: true,
	engName: 'satanminister',
	group: 'general',
	name: 'Служитель Сатаны',
	description: '100 раз устраивал турнир Кровавое Месиво и больше никаких других турниров',
	effect: [
		new Game.Effect.ProfitOnce({
			notImplemented: true,
			aftertext: ' рандомных синих итемов',
			result: function(level) {
				level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 50 : 0;
			}
		}),
		new Game.Effect.ProfitOnce({
			notImplemented: true,
			aftertext: ' фиолетовых итемов',
			result: function(level) {
				level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 30 : 0;
			}
		}),
		new Game.Effect.ProfitOnce({
			notImplemented: true,
			aftertext: ' оранжевых',
			result: function(level) {
				level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 10 : 0;
			}
		}),
		new Game.Effect.ProfitOnce({
			notImplemented: true,
			aftertext: ' рубиновый плазмоид',
			result: function(level) {
				level = (level !== undefined) ? level : this.level;
				return (level > 0) ? 1 : 0;
			}
		})
	]
});

new game.Achievement({
	notImplemented: true,
	engName: 'tits',
	group: 'general',
	name: 'Сиськи',
	description: 'Нашёл все сиськи в игре',
	effect: new Game.Effect.Special({
		notImplemented: true,
		pretext: 'у Тамили появляется особый диалог'
	})
});

new game.Achievement({
	notImplemented: true,
	engName: 'lossloss',
	group: 'general',
	name: 'Потеря потерь',
	description: 'Загнать любой ресурс в минус 100 000 или больший минус',
	effect: new Game.Effect.ProfitOnce({
		notImplemented: true,
		aftertext: ' ГГК',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 250 : 0;
		}
	})
});

new game.Achievement({
	engName: 'tolstoy',
	group: 'general',
	name: 'Лев Толстой',
	description: 'Не на словах, а на деле!',
	effect: new Game.Effect.Military({
		pretext: '+',
		aftertext: '% к урону флагмана',
		condition: {
			type: 'unit',
			group: 'fleet',
			engName: 'flagship'
		},
		priority: 4,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return level ? 10 : 0;
		}
	})
});

new game.Achievement({
	engName: 'newyear',
	group: 'general',
	name: 'В новую эру',
	description: 'Провёл новый год в Консулах',
	effect: new Game.Effect.Special({
		pretext: 'С ',
		aftertext: '% шансом каждый караван становится новогодним',
		condition: {
			engName: 'fleetBattleAddCreditsChance'
		},
		priority: 1,
		affect: 'chance',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 5 : 0;
		}
	})
});

};