initAchievementsContent = function() {

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

//Радужный - нашёл баг в игре и пользовался им, не сообщив, был наказан. ( новое )
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

//Работорговец - потратить 100.000.000 людей - награда: +3000 людей в час( новая )
new game.Achievement({
	engName: 'slaver',
	group: 'general',
	name: 'Работорговец',
	description: 'Потратить 100.000.000 людей',
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

//Металлург - потратить 100.000.000 металла - награда: + 2500 металла в час( новая )
new game.Achievement({
	engName: 'metallurg',
	group: 'general',
	name: 'Металлург',
	description: 'Потратить 100.000.000 металла',
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

//Кристальный Король - потратить 100.000.000 кристалла - награда: + 2000 кристалла в час( новая )
new game.Achievement({
	engName: 'crystalking',
	group: 'general',
	name: 'Кристальный Король',
	description: 'Потратить 100.000.000 кристаллов',
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

//Почитаемый - потратить 10.000.000 чести - награда: + 100 чести в час ( новая )
new game.Achievement({
	engName: 'respected',
	group: 'general',
	name: 'Почитаемый',
	description: 'Потратить 10.000.000 чести',
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

//Богач - потратить 100.000 ГГК - награда: + 1 ГГК в час ( новая )
new game.Achievement({
	engName: 'richman',
	group: 'general',
	name: 'Богач',
	description: 'Потратить 100.000 ГГК',
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

//Торговец - выторговать любых ресурсов на 100.000.000 за всё время
//награда: +10% к выгодной сделке( само собой ) ( новая )
new game.Achievement({
	engName: 'trader',
	group: 'general',
	name: 'Торговец',
	description: 'Выторговать любых ресурсов на 100.000.000 за всё время',
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

//Бумстартер - тем, кто помогал проекту на бумстартере
//субсидии совета по добыче увеличены в 2 раза. ( новая )
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

//Помощь проекту - тем кто помогал проекту другими способами 
//бесплатный чат в игре и возможность добавить свою иконку бесплатно. так же +10 чести в час ( новая )
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

//******* notImplemented **********//
//Без правил - провести 250 турниров в колизее. - награда минус 10% времени между турнирами ( новая )
new game.Achievement({
	engName: 'withoutrules',
	group: 'general',
	name: 'Без правил',
	description: 'Провести 250 турниров в колизее',
	field: 'colosseum.tournaments.total',
	effect: new Game.Effect.Special({
		notImplemented: true,
		aftertext: '% времени между турнирами',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return (level > 0) ? -10 : 0;
		}
	})
});

//нет сбора статистики по статуи консула
//Вождь - заработать 1.000.000 чести от статуи консула. - 1 рандомный белый итем в день ( новая )
new game.Achievement({
	notImplemented: true,
	engName: 'ruler',
	group: 'general',
	name: 'Вождь',
	description: 'Заработать 1.000.000 чести от статуи консула',
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

//Халявщик - набивал карманы казённым золотом. ( это написать ) 
//на самом деле даётся за 100 любых использованных промо кодов. 
//Награда: все усиления донатные на 1 месяц включаются ( новое )
new game.Achievement({
	engName: 'freeloader',
	group: 'general',
	name: 'Халявщик',
	description: 'Набивал карманы казённым золотом',
	field: 'promocode.total',
	levels: [1],
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

//Тайное Общество - знает то, чего не знают другие ( это писать на иконке ) 
//на самом деле чтобы её получить надо: построить чёрный рынок 1 уровня, 
//не пройдя ни одного квэста ( даже обучение )
//награда: 50 рубиновых плазмоидов ( новое )
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

//Служитель Сатаны - 100 раз устраивал турнир Кровавое Месиво и больше никаких других турниров.
//награда: 50 рандомных синих итемов, 30 фиолетовых, 10 оранжевых, 1 рубиновый плазмоид. ( новое )
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

//Сиськи - нашёл все сиськи в игре ( это то, что писать )
//на самом деле надо купить все элементы в палату консула, где есть девушки голые 
//награда - У Тамили появляется особый диалог. ( где её можно будет уговорить раздеться ) ( новое - сейчас такого диалога нету )
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

//Потеря потерь - загнать любой ресурс в минус 100.000 или больший минус
//награда: 250 ГГК ( новое )
new game.Achievement({
	notImplemented: true,
	engName: 'lossloss',
	group: 'general',
	name: 'Потеря потерь',
	description: 'Загнать любой ресурс в минус 100.000 или больший минус',
	effect: new Game.Effect.ProfitOnce({
		notImplemented: true,
		aftertext: ' ГГК',
		result: function(level) {
			level = (level !== undefined) ? level : this.level;
			return (level > 0) ? 250 : 0;
		}
	})
});

};