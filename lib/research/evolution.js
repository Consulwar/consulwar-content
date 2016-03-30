initResearchContentEvolution = function () {

game.setToMenu = 'research';
game.setToSide = 'evolution';

new game.Research({
	name: 'Энергетика',
	engName: 'energy',
	description: 'Пожалуй, ни у кого не возникнет вопросов, почему энергия считается важнейшим из ресурсов в век научно-технического прогресса. И уж тем более во времена жестокой войны с инопланетной расой. Осваиваются всё новые и новые колонии, заводы работают на полную мощность и, хотя открытие жидкого кристалла коренным образом повлияло на энергетику, вопрос всё же остаётся открытым. Дальнейшее изучение свойств кристаллической энергии может существенно снизить затраты средств на армию и уж тем более является совершенно необходимым для большинства производств.',
	effect: [new Game.Effect.Special({
		pretext: 'Бонусы с предметов палаты консула дают на ',
		aftertext: '% больше',		
		result: function(level) {
			level = level || this.level; 
			return level * 0.4;
		}
	}), new Game.Effect.Special({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 20, 30, 40, 60][Math.floor(level / 20)]
		}
	}),],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [10, Game.functions.slowExponentialGrow, 0],
				crystals: [20, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [100, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.silver_plasmoid = [3, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.batteries = [5, Game.functions.slowLinearGrow, 61];
			} else {
				price.sapphire_plasmoid = [6, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,   5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  15],
				[Game.Research.items.evolution.science,    10]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,    25],
				[Game.Research.items.evolution.science,      15],
				[Game.Building.items.military.powerstation,  20]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,    35],
				[Game.Research.items.evolution.science,      25],
				[Game.Building.items.military.powerstation,  40]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,    45],
				[Game.Research.items.evolution.science,      45],
				[Game.Building.items.military.powerstation,  65]
			]
		}
	}	
});

new game.Research({
	name: 'Особые сплавы',
	engName: 'alloy',
	description: 'Специальная технология сплава составных компонентов металла плюс так называемое «Металлическое плетение» — особый процесс отливки, позволяющий получить волокнистую молекулярную структуру, дают возможность изготавливать невероятно прочные металлические структуры. Подобная технология может пригодиться как в строительстве, так и в военном деле. Не мне вам говорить, Великий Консул, как важно для нас время… Как говорится, нет времени объяснять, времени вообще нет! Особые сплавы помогут сэкономить огромное количество такого наиважнейшего ресурса, как время. Не говоря уже о том, что строительство некоторых зданий является чересчур сложным, и без данной технологии строительство будет попросту невозможно.',
	effect: [new Game.Effect.Price({
		pretext: 'Строительство всех зданий на ',
		aftertext: '% быстрее',
		condition: {
			type: 'building'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 0.1;
		}
	}), new Game.Effect.Price({
		pretext: 'Дополнительное ускорение ',
		aftertext: '%',
		condition: {
			type: 'building'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return [0, 3, 5, 8, 10, 15][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [20, Game.functions.slowExponentialGrow, 0],
				crystals: [10, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [110, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.meteor_fragments = [4, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.reptile_technology = [4, Game.functions.slowLinearGrow, 61];
			} else {
				price.plasma_transistors = [5, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  10]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  20],
				[Game.Research.items.evolution.science,    10]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,  30],
				[Game.Research.items.evolution.science,    20]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,  40],
				[Game.Research.items.evolution.science,    40]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,      50],
				[Game.Research.items.evolution.science,        50],
				[Game.Building.items.evolution.nanotechnology, 20]
			]
		}
	}
});

new game.Research({
	name: 'Научный отдел',
	engName: 'science',
	description: 'Любая достаточно развитая технология неотличима от магии. И для подобной магии вовсе не обязательно воздерживаться до тридцати лет, достаточно просто быть довольно умным, начитанным и пытливым сукиным сыном в белом халате. Более того, во времена нынешнего научного прогресса стало возможным создавать учёных из просто умных ребят путём изменения их кода ДНК, что в последствии добавляет им ещё несколько пунктов IQ. Ну или они умирают в страшных мучениях… Но что же поделать, это наука, детка. Хочешь быть гением — рискни! Редкое изобретение работает с первого раза, особенно это касается генетики. Но не стоит расстраиваться. Через тернии к звёздам, Консул.',
	effect: [new Game.Effect.Special({
		pretext: 'Продлевает действие любой временной карточки на ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return level * 0.5;
		}
	}), new Game.Effect.Special({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 20, 30, 40, 50][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [10, Game.functions.slowExponentialGrow, 0],
				crystals: [20, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [120, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.silver_plasmoid = [3, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.secret_technology = [4, Game.functions.slowLinearGrow, 61];
			} else {
				price.quad_cooler = [6, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  15]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  25],
				[Game.Building.items.evolution.ikea,       20]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,  35],
				[Game.Building.items.evolution.ikea,       40]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,  45],
				[Game.Building.items.evolution.ikea,       60]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,  55],
				[Game.Building.items.evolution.ikea,       70]
			]
		}
	}
});

new game.Research({
	name: 'Мебель из Икеа',
	engName: 'ikea',
	description: 'Удобство в каждой мелочи… Это же сраное будущее, чёрт возьми! Ну, технически на дворе тот же год, что и у нас, но ведь нельзя не признать, что ребята из параллельной вселенной смогли достичь гораздо большего за тот же промежуток времени. Уверен, новые виды оружия массового поражения придумывали сидя именно на таких прекрасных, крайне удобных и эргономичных стульях из Икеа. Люди любят удобство, Консул. В благоприятной обстановке они лучше работают, лучше думают и лучше взаимодействуют. Не даром слоган этой известной компании гласит: «Каждый десятый европеец сделан на нашей кровати». Вы несомненно сможете улучшить показатели рождаемости в вашей колонии, оснастив подобной мебелью всех своих жителей.',
	effect: [new Game.Effect.Income({
		pretext: 'Прирост населения на ',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 0.4;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return [0, 3, 5, 8, 10, 15][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [35, Game.functions.slowExponentialGrow, 0],
				crystals: [10, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [130, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.ship_details = [4, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.rotary_amplifier = [5, Game.functions.slowLinearGrow, 61];
			} else {
				price.nanowires = [6, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory, 20]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory, 30]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory, 40]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory, 50]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory, 60]
			]
		}
	}
});

new game.Research({
	name: 'Бурильный бур',
	engName: 'drill',
	description: 'Бурильный бур обрабатывает горные породы лазером, ультразвуком, использует термическую обработку породы, на месте перерабатывает шлак в энергию и попутно устанавливает высокотехнологичные сваи, прокладывая туннель в кратчайшие сроки. И всё это с невероятной для такой махины скоростью. Да… Подобные технологии ни на каждом сверхсовременном боевом корабле не встретишь… Самое интересное, что учёные до сих пор до конца не понимают как работает этот бур. Дело в том, что его схему 10 лет назад увидел во сне обычный учитель физики. Правда теперь его останки покоятся где-то на захваченной Рептилоидами Земле, но его детище живёт и исправно служит человечеству. На данный момент эта технология активно применяется в добыче металла и показывает себя с лучшей стороны. Ещё бы кофе мог заваривать, и цены б ему не было…',
	effect: [new Game.Effect.Income({
		pretext: 'Прирост металла на ',
		aftertext: '%',
		priority: 2,
		affect: 'metals',
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',
		priority: 2,
		affect: 'metals',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 25, 50, 65, 80][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [30, Game.functions.slowExponentialGrow, 0],
				crystals: [5, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [140, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.rotary_amplifier = [5, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.quad_cooler = [6, Game.functions.slowLinearGrow, 61];
			} else {
				price.garyoldmanium = [5, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  25]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  35],
				[Game.Building.items.residential.metal,    15]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,  45],
				[Game.Building.items.residential.metal,    35]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,  55],
				[Game.Building.items.residential.metal,    55]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,  65],
				[Game.Building.items.residential.metal,    75]
			]
		}
	}
});

new game.Research({
	name: 'Кристаллизация',
	engName: 'crystallization',
	description: 'Жидкие кристаллы являются важнейшим элементом энергетических комплексов и вооружения. До недавнего времени кристаллов хватало сполна, однако с началом войны потребность в этом веществе выросла многократно и учёные были вынуждены искать новый способ получения этого ценного ресурса. Кристаллизация — это промышленный способ синтеза вещества, подобного Кристалину, в лаборатории. Замечу, подобного. Это не совсем те же самые кристаллы, хотя они и имеют схожую структуру. Но на их производство уходит не в пример меньше средств. Более того, на испытаниях некоторые адаптивные элементы вооружения показывают лучшие результаты, если в них используется искусственно синтезированный вид кристалла, а не природный. Так что без хорошего вооружения мы точно не останемся, Консул.',
	effect: [new Game.Effect.Income({
		pretext: 'Прирост кристалла на ',
		aftertext: '%',
		priority: 2,
		affect: 'crystals',
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',	
		priority: 2,
		affect: 'crystals',	
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 25, 50, 65, 80][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [5, Game.functions.slowExponentialGrow, 0],
				crystals: [30, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [150, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.emerald_plasmoid = [4, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.sapphire_plasmoid = [6, Game.functions.slowLinearGrow, 61];
			} else {
				price.jimcarrium = [4, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  30]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  40],
				[Game.Building.items.residential.crystal,  15]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,  50],
				[Game.Building.items.residential.crystal,  35]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,  60],
				[Game.Building.items.residential.crystal,  55]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,  70],
				[Game.Building.items.residential.crystal,  75]
			]
		}
	}
});

/*
new game.Research({
	name: 'Умно-кивающий мужик',
	engName: 'man',
	description: 'Есть корпорации, есть миллионеры, есть власть имущие или даже почти Императоры, как вы, Консул, но обычно все эти люди, имеющие реальную, весомую власть, остаются в тени. Но кто-то же должен донести их мысль народу. И вот тут на помощь приходит «массовка» — умно кивающие мужики в пиджаках. Они повсюду: на радио, на экранах телевизоров, в газетах, в интернете. Люди думают, что именно эти товарищи принимают законы, и именно им все высказывают своё недовольство. Они — лицо политики. Наглые, жадные и хитрые твари в пиджаках, шестёрки власти. Их задача проста — сидеть и попёздывать, с умным лицом кивать и делать вид, что они понимают о чём идёт речь. Они почти как собаки, разве что не такие умные.',
	effect: new Game.Effect.Special({
		pretext: 'Сообщения в общий чат дешевле на ',
		aftertext: '%',
		priority: 2,
		condition: {
			name: 'message'
		},
		affect: 'price',
		result: function(level) {
			level = level || this.level; 
			return level * 2;
		}
	}),
	basePrice: {
		metals: 100,
		crystals: 100,
		humans: 5
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.laboratory, 14],

			[Game.Research.items.evolution.science, 14]
		]
	}
}); */

new game.Research({
	name: 'Оборонная инженерия',
	engName: 'engineering',
	description: 'Описание оборонной инженерии',
	effect: [new Game.Effect.Military({
		pretext: 'Броня всех оборонных сооружений увеличена на ',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'defence'
		},
		priority: 2,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 0.1;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return [0, 3, 5, 8, 10, 15][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [120, Game.functions.slowExponentialGrow, 0],
				crystals: [80, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [250, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [10, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.chip = [6, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.keanureevesium = [4, Game.functions.slowLinearGrow, 61];
			} else {
				price.ancient_technology = [3, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  35]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  45],
				[Game.Research.items.evolution.energy,     20]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,  55],
				[Game.Research.items.evolution.energy,     40]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,  65],
				[Game.Research.items.evolution.energy,     60]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,  75],
				[Game.Research.items.evolution.energy,     80]
			]
		}
	}
});

new game.Research({
	name: 'В мире животных',
	engName: 'animalworld',
	description: 'Описание В мире животных',
	effect: [new Game.Effect.Special({
		pretext: 'Сообщения в общий чат дешевле на ',
		aftertext: '%',
		priority: 2,
		condition: {
			name: 'message'
		},
		affect: 'price',
		result: function(level) {
			level = level || this.level; 
			return level * 0.1;
		}
	}), new Game.Effect.Special({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',	
		condition: {
			name: 'message'
		},	
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 15, 20, 30, 40][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [100, Game.functions.slowExponentialGrow, 0],
				crystals: [100, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [200, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [5, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.nanowires = [6, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.nicolascagium = [5, Game.functions.slowLinearGrow, 61];
			} else {
				price.ancient_scheme = [3, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  40]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  50],
				[Game.Building.items.evolution.ikea,       25]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,  60],
				[Game.Building.items.evolution.ikea,       45]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,  70],
				[Game.Building.items.evolution.ikea,       65]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,  80],
				[Game.Building.items.evolution.ikea,       75]
			]
		}
	}
});

new game.Research({
	name: 'Гипердвигатели',
	engName: 'hyperdrive',
	description: '«Эй, Рулевой! Заряжай-ка движок!» — «А зачем, Адмирал?» — «Гиперпрыжок! Гиперпрыжок! Мы совершаем… гиперпрыжок!» Мне кажется, что именно такие песни должны петь на космических кораблях перед отправкой в гиперпространство. Вы только представьте себе, Консул, двигатель не разгоняет корабль путём стандартной тяги. Двигатель открывает портал, червоточину… Это, по сути, является искривлением пространства вселенной. Это воздействие на материю на квантовом уровне! Всегда интересовало: вот если мы можем совершать такие манипуляции с материей, почему мы ещё не научились создавать вещи из воздуха?',
	effect: [new Game.Effect.Special({
		pretext: 'Скорость зарядки гипердвигателей быстрее на ',
		aftertext: '%',
		result: function(level) {
			level = level || this.level;
			return level * 0.3;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 20, 30, 40, 50][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [30, Game.functions.slowExponentialGrow, 0],
				crystals: [200, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [300, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [12, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.crystal_fragments = [4, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.amethyst_plasmoid = [4, Game.functions.slowLinearGrow, 61];
			} else {
				price.ancient_knowledge = [4, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  45]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,       55],
				[Game.Building.items.evolution.crystallization, 20]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,       65],
				[Game.Building.items.evolution.crystallization, 40]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,       75],
				[Game.Building.items.evolution.crystallization, 60]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,       85],
				[Game.Building.items.evolution.crystallization, 80]
			]
		}
	}
});

new game.Research({
	name: 'Нанотехнологии',
	engName: 'nanotechnology',
	description: 'Вопреки расхожему мнению, нанотехнологии представляют собой не рой милипиздрических роботов, а специальные технологии, позволяющие создавать крайне точные, мелкие и чрезвычайно удобные микросхемы, которые в свою очередь вставляются во всё подряд. Вооружение, танки, броня, системы защиты, щиты, умная броня, очень умная броня, здания, мой тостер, Консул, ваш тостер… Нанотехнологии везде. Несомненно, самое важное место их применения — это боевой космический флот. Возможность крайне быстро рассчитать движение противника и максимально точно нацелить на него орудия, учитывая все необходимые условия, позволит вашему флоту, Консул, действовать намного эффективнее.',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс добыть карту в бою увеличен на ',
		aftertext: '%',
		result: function(level) {
			level = level || this.level; 
			return level * 0.7;
		}
	}), new Game.Effect.Special({
		pretext: '',
		aftertext: ' в день',
		result: function(level) {
			level = level || this.level; 
			return [
				'2 карточки', 
				'3 карточки', 
				'4 карточки', 
				'5 карточек', 
				'6 карточек'				
			][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [120, Game.functions.slowExponentialGrow, 0],
				crystals: [80, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [200, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [10, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.weapon_parts = [3, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.nicolascagium = [5, Game.functions.slowLinearGrow, 61];
			} else {
				price.ancient_artefact = [3, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory, 50]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory, 60],
				[Game.Research.items.evolution.alloy,     20]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory, 70],
				[Game.Research.items.evolution.alloy,     40]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory, 80],
				[Game.Research.items.evolution.alloy,     60]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory, 90],
				[Game.Research.items.evolution.alloy,     80]
			]
		}
	}
});

/*
new game.Research({
	name: 'Спи спокойно, Рептилоид',
	engName: 'sleepsafe',
	description: 'ССР, или, как её прозвали ребята из научного сообщества, Спи Спокойно Рептилоид — это новейшая система вооружения, требующая огромного количества энергии для использования. В тоже время испытания на одной из планет показали на что способно ССР. К счастью, нам совершенно не нужно тратить столько энергии для каждого выстрела, можно разряжаться небольшими очередями, что существенно снижает потребление «жидкого кристалла». И всё же, подобное оружие требует гигантский энергетический комплекс, который попросту не установишь на обычный корабль. Решение было найдено: Космическая Орбитальная Станция Обороны.',
	effect: {
		name: 'К атаке и жизни орбитальной станции обороны',
		result: function(level) {
			level = (level == undefined ? this.level : level);
			return 1 + (level * 0.01);
		}
	},
	basePrice: {
		metals: 500,
		crystals: 300,
		humans: 100
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.laboratory, 20],

			[Game.Research.items.evolution.ikea, 25],
			[Game.Research.items.evolution.nanotechnology, 22],
			[Game.Research.items.evolution.hyperdrive, 20]
		]
	}
});*/

new game.Research({
	name: 'Преобразователь плазмоидов',
	engName: 'converter',
	description: 'Описание преобразователя плазмоидов',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс получить в 2 раза больше плазмоидов увеличен на ',
		aftertext: '%',
		result: function(level) {
			level = level || this.level; 
			return level * 0.7;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return [0, 3, 5, 8, 10, 15][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [240, Game.functions.slowExponentialGrow, 0],
				crystals: [160, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [500, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [20, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.keanureevesium = [4, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.topaz_plasmoid = [3, Game.functions.slowLinearGrow, 61];
			} else {
				price.ruby_plasmoid = [8, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,      55]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,      65],
				[Game.Building.items.evolution.nanotechnology, 60]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,      75],
				[Game.Building.items.evolution.nanotechnology, 70]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,      85],
				[Game.Building.items.evolution.nanotechnology, 80],
				[Game.Building.items.military.gates,           50]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,      95],
				[Game.Building.items.evolution.nanotechnology, 90],
				[Game.Building.items.military.gates,           80]
			]
		}
	}
});

new game.Research({
	name: 'Калибровка Судного дня',
	engName: 'doomsdaysizing',
	description: 'Описание калибровки Судного дня',
	effect: [new Game.Effect.Special({
		pretext: 'Время перезарядки орудия Судного дня уменьшено на ',
		aftertext: '%',
		result: function(level) {
			level = level || this.level; 
			return level * 0.3;
		}
	}), new Game.Effect.Income({
		pretext: 'Дополнительный бонус к спецспособности орудия Судного дня ',
		aftertext: '%',		
		result: function(level) {
			level = level || this.level; 
			return [0, 5, 10, 15, 20, 30][Math.floor(level / 20)]
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [500, Game.functions.slowExponentialGrow, 0],
				crystals: [300, Game.functions.slowExponentialGrow, 0]
			}

			if (level > 20) {
				price.honor = [800, Game.functions.slowLinearGrow, 21];
			}

			if (level < 21) {
				price.humans = [30, Game.functions.slowLinearGrow, 0];
			} else if (level < 41) {
				
			} else if (level < 61) {
				price.garyoldmanium = [5, Game.functions.slowLinearGrow, 41];
			} else if (level < 81) {
				price.ancient_knowledge = [4, Game.functions.slowLinearGrow, 61];
			} else {
				price.ruby_plasmoid = [8, Game.functions.slowLinearGrow, 81];
			}	
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.laboratory,  60]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.laboratory,  70],
				[Game.Building.items.evolution.hyperdrive, 60]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.laboratory,      80],
				[Game.Building.items.evolution.hyperdrive,     70],
				[Game.Building.items.evolution.nanotechnology, 65]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.laboratory,      90],
				[Game.Building.items.evolution.hyperdrive,     80],
				[Game.Building.items.evolution.nanotechnology, 75]
			]
		} else {
			return [
				[Game.Building.items.military.laboratory,     100],
				[Game.Building.items.evolution.hyperdrive,     90],
				[Game.Building.items.evolution.nanotechnology, 85],
				[Game.Building.items.evolution.converter,      80]
			]
		}
	}
});
}