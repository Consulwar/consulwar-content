initBuildingContentResidential = function () {

game.setToMenu = 'planet';
game.setToSide = 'residential';

new game.Building({
	name: 'Жилой комплекс',
	engName: 'house',
	effect: [new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 40;
		}
	}), new Game.Effect.Special({
		pretext: 'Укрытия для ',
		aftertext: '% населения планеты',
		result: function(level) {
			level = level || this.level; 
			return [0, 5, 15, 25, 40, 60][Math.floor(level / 20)]
		}
	})],
	description: 'Жилые комплексы — это дешёвые портативные системы для жизни. Изобретённые ещё в 90-е годы по системе Лайфтэк в рамках проекта «Венера», жилые комплексы стали основной системой строительства на дальних колониях. Налаженное производство позволяет с минимальными затратами и в кратчайшие сроки изготовить и установить десятки тысяч подобных комплексов. В сочетании друг с другом подобные комплексы могут превращаться в целый город буквально за недели. Вашей империи ведь нужны подданные, не так ли, правитель?',
	basePrice: {
		// 40+ Обломки метеорита
		// 60+ элементы питания
		// 80+ квадрокуллер
		metals: 20,
		crystals: 10
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [];
		} else if (level < 41) {
			return [
				[Game.Research.items.evolution.alloy, 10]
			]
		} else if (level < 61) {
			return [
				[Game.Research.items.evolution.alloy,  25],
				[Game.Research.items.evolution.energy, 20]
			]
		} else if (level < 81) {
			return [
				[Game.Research.items.evolution.alloy,  50],
				[Game.Research.items.evolution.energy, 45],
				[Game.Research.items.evolution.ikea,   45]
			]
		} else {
			return [
				[Game.Research.items.evolution.alloy,          75],
				[Game.Research.items.evolution.energy,         70],
				[Game.Research.items.evolution.ikea,           60],
				[Game.Research.items.evolution.nanotechnology, 60],
			]
		}	
	}
});


new game.Building({
	name: 'Шахта металла', 
	engName: 'metal',
	description: 'Металл — один из основных ресурсов. Он необходим абсолютно для всего. Для строительства зданий, армий, флота, исследований и так далее. Современные шахты металла способны добывать и обрабатывать его в огромных количествах. И хоть люди больше не спускаются в шахты, данное здание нуждается в постоянном управлении и технических настройках, поэтому требует постоянный приток новых кадров. Процесс добычи металла крайне трудоёмкий, однако ничего не сравнится с блеском новенького космического корабля или хорошо бронированного танка.',
	effect: [new Game.Effect.Income({
		pretext: 'Добыча металла: ',
		aftertext: ' килограмм в час',
		priority: 1,
		affect: 'metals',
		result: function(level) {
			level = level || this.level; 
			return [0, 44, 51, 58, 65, 73, 81, 89, 98, 106, 116, 125, 135, 145, 155, 166, 176, 186, 197, 207, 193, 248, 317, 403, 508, 634, 787, 968, 1181, 1429, 1702, 2010, 2354, 2733, 3147, 3592, 4065, 4559, 5069, 5587, 6044, 7141, 8297, 9557, 10914, 12248, 13624, 15020, 16410, 17767, 17949, 20683, 23629, 26761, 29777, 32544, 34275, 35419, 35899, 36030, 36058, 43001, 50214, 57392, 62746, 67355, 71636, 74767, 76552, 77621, 79186, 90531, 100805, 110245, 116188, 121300, 124229, 125998, 127796, 128353, 128205, 141522, 154818, 166290, 173656, 179626, 184020, 186697, 187560, 188434, 192308, 210431, 217709, 223078, 224147, 225228, 226320, 227422, 228537, 229662, 230770][level];
		}
	}), new Game.Effect.Special({
		pretext: 'Скрытые хранилища для ',
		aftertext: '% металлов',
		result: function(level) {
			level = level || this.level; 
			return [0, 5, 15, 25, 40, 60][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ Обломки метеорита
		// 60+ роторный усилитель
		// 80+ плазменные транзисторы
		metals: 100,
		crystals: 10
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [];
		} else if (level < 41) {
			return [
				[Game.Research.items.evolution.energy, 10]
			]
		} else if (level < 61) {
			return [
				[Game.Research.items.evolution.energy, 25],
				[Game.Research.items.evolution.alloy,  15]
			]
		} else if (level < 81) {
			return [
				[Game.Research.items.evolution.energy,  55],
				[Game.Research.items.evolution.alloy,   25],
				[Game.Research.items.evolution.science, 35]
			]
		} else {
			return [
				[Game.Research.items.evolution.energy,  75],
				[Game.Research.items.evolution.alloy,   50],
				[Game.Research.items.evolution.science, 60],
				[Game.Research.items.evolution.drill,   40],
			]
		}	
	}
});

new game.Building({
	name: 'Шахта кристалла',
	engName: 'crystal',
	effect: [new Game.Effect.Income({
		pretext: 'Добыча кристалла: ',
		aftertext: ' грамм в час',
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			level = level || this.level; 
			return [0, 15, 17, 19, 22, 24, 27, 30, 33, 35, 39, 42, 45, 48, 52, 55, 59, 62, 66, 69, 64, 83, 106, 134, 169, 211, 262, 323, 394, 476, 567, 670, 785, 911, 1049, 1197, 1355, 1520, 1690, 1862, 2015, 2380, 2766, 3186, 3638, 4083, 4541, 5007, 5470, 5922, 5983, 6894, 7876, 8920, 9926, 10848, 11425, 11806, 11966, 12010, 12019, 14334, 16738, 19131, 20915, 22452, 23879, 24922, 25517, 25874, 26395, 30177, 33602, 36748, 38729, 40433, 41410, 41999, 42599, 42784, 42735, 47174, 51606, 55430, 57885, 59875, 61340, 62232, 62520, 62811, 64103, 70144, 72570, 74359, 74716, 75076, 75440, 75807, 76179, 76554, 76923][level];
		}
	}), new Game.Effect.Special({
		pretext: 'Скрытые хранилища для ',
		aftertext: '% кристаллов',
		result: function(level) {
			level = level || this.level; 
			return [0, 5, 15, 25, 40, 60][Math.floor(level / 20)]
		}
	})],
	description: 'Данный вид кристалла крайне заинтересовал учёных в 70-е годы прошлого века. Этот ресурс никогда не встречался на нашей родной планете — Земле, однако его находили абсолютно на всех колониях, куда отправляли экспедиции. Подобные ресурсы попадают на планеты из космоса и крайне странно, что на Земле данный ресурс отсутствовал вовсе. Но гораздо более интересно другое: оказалось, что в жидком состоянии кристалл — абсолютно уникальное явление, он может быть биостимулятором, энергетическим ресурсом, основным элементом вооружения и даже усиливает потенцию! В общем, если вы ходите обеспечить весёлый вечер себе или рептилоиду, постройка данной шахты просто необходима для вашей колонии, Консул.',
	basePrice: {
		// 40+ Осколки кристалла
		// 60+ роторный усилитель
		// 80+ нанопроводка
		metals: 140,
		crystals: 75
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [];
		} else if (level < 41) {
			return [
				[Game.Research.items.evolution.energy, 10]
			]
		} else if (level < 61) {
			return [
				[Game.Research.items.evolution.energy, 25],
				[Game.Research.items.evolution.alloy,  15]
			]
		} else if (level < 81) {
			return [
				[Game.Research.items.evolution.energy,  55],
				[Game.Research.items.evolution.alloy,   25],
				[Game.Research.items.evolution.science, 35]
			]
		} else {
			return [
				[Game.Research.items.evolution.energy,          75],
				[Game.Research.items.evolution.alloy,           50],
				[Game.Research.items.evolution.science,         60],
				[Game.Research.items.evolution.crystallization, 40],
			]
		}	
	}
});

/*
new game.Building({
	name: 'Мегаполис',
	engName: 'megalopolis',
	description: 'Жилой комплекс, конечно, крайне полезная система, но эй… Планета не резиновая! Когда нужно делать ставки по крупному: производить серьёзное вооружение, обеспечивать своей колонии мощнейший флот и помогать людям из Вселенной 42 отбить свою родную планету у поганых Рептилий, самый важный ресурс — это, несомненно, люди. Люди любят жить в больших городах, и Мегаполис — именно то, что нужно. Мегаполис сообщает всем о вашем статусе. Он говорит, что вы развиваетесь, что ваша колония — это мощный и богатый плацдарм. Стройте мегаполисы, Консул, и люди к вам потянутся…',
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 30;
		}
	}),
	basePrice: {
		metals: 750,
		crystals: 390
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.residential.house, 10],

			[Game.Research.items.evolution.alloy, 3],
			[Game.Research.items.evolution.ikea, 3]
		]
	}
});*/

new game.Building({
	name: 'Космопорт',
	engName: 'spaceport',
	description: 'Описание космопорта',
	effect: [new Game.Effect.Special({
		pretext: '+',
		aftertext: '% шанса добыть карту в бою',
		result: function(level) {
			level = level || this.level; 
			return level * 0.1;
		}
	}), new Game.Effect.Special({
		pretext: '',
		aftertext: '',
		result: function(level) {
			level = level || this.level; 
			return [
				'',
				'+10% шанс выпадения белых карт',
				'+10% шанс выпадения белых и зеленых карт',
				'+10% шанс выпадения белых, зеленых и синих карт',
				'+10% шанс выпадения белых, зеленых, синих и фиолетовых карт',
				'+10% шанс выпадения всех видов карт'
			][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// Детали корабля
		// Технологии рептилий
		// Микросхемы
		metals: 750,
		crystals: 390
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.residential.house, 20]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.residential.house, 30],
				[Game.Research.items.evolution.alloy,   15]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.residential.house, 40],
				[Game.Research.items.evolution.alloy,   25],
				[Game.Research.items.evolution.energy,  30]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.residential.house, 50],
				[Game.Research.items.evolution.alloy,   35],
				[Game.Research.items.evolution.science, 50],
				[Game.Building.items.military.airfield, 40]
			]
		} else {
			return [
				[Game.Building.items.residential.house, 70],
				[Game.Research.items.evolution.alloy,   45],
				[Game.Research.items.evolution.science, 70],
				[Game.Building.items.military.airfield, 70]
			]
		}	
	}
});

new game.Building({
	name: 'Центры развлечений',
	engName: 'entertainment',
	effect: [new Game.Effect.Price({
		pretext: 'Снижает стоимость всех строений на ',
		aftertext: '%',
		condition: {
			type: 'building'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.1;
		}
	}), new Game.Effect.Price({
		pretext: 'Дополнительно снижает стоимость строений на ',
		aftertext: '%',
		condition: {
			type: 'building'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return [0, 5, 10, 20, 30, 40][Math.floor(level / 20)]
		}
	})],
	description: 'Земля захвачена, правительство уничтожено, погибли миллиарды людей, оставшиеся колонии постоянно подвергаются нападению со стороны Рептилоидов, еноты-разведчики приносят дурные вести о растущих армиях рептилий, новая власть в виде Консулов требует полного подчинения… При таких обстоятельствах немудрено и ебануться. Но ситуацию легко исправят Блэкджек и шлюхи! Центры развлечений могут принести много удовольствия не только вашим подданным, но и вам, Консул.',
	basePrice: {
		// осколки кристалла
		// элементы питания
		// плазменные транзисторы
		metals: 300,
		crystals: 400
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.residential.spaceport, 10]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.residential.spaceport, 20],
				[Game.Research.items.evolution.science,     15],
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.residential.spaceport, 30],
				[Game.Research.items.evolution.science,     30],
				[Game.Building.items.military.airfield,     30]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.residential.spaceport, 40],
				[Game.Research.items.evolution.science,     40],
				[Game.Building.items.military.airfield,     40],
				[Game.Research.items.evolution.animalworld, 40],
			]
		} else {
			return [
				[Game.Building.items.residential.spaceport, 50],
				[Game.Research.items.evolution.science,     50],
				[Game.Building.items.military.airfield,     50],
				[Game.Research.items.evolution.animalworld, 50]
			]
		}	
	}
});

new game.Building({
	name: 'Система связи',
	engName: 'alliance',
	effect: [new Game.Effect.Special({
		pretext: 'Возможность получать ',
		aftertext: '% альянсового бонуса',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}), new Game.Effect.Special({
		pretext: '',
		aftertext: '',
		result: function(level) {
			level = level || this.level; 
			return level == 0 ? '' : [
				'Можно вступить в альянс',
				'Можно создавать альянс численностью до 10 человек',
				'Можно создавать альянс численностью до 20 человек',
				'Можно создавать альянс численностью до 30 человек',
				'Можно создавать альянс численностью до 40 человек',
				'Можно создавать альянс численностью до 50 человек'
			][Math.floor(level / 20)]
		}
	})],
	description: '«Пшш-пшш. Алло, ёба. Это ты?» Система связи — уникальный комплекс. Он позволит вам крайне эффективно координировать действия с вашими союзниками по борьбе с рептилоидными захватчиками. Вступить в альянс или даже создать свой с Блэкджеком и… Консулами. Помните, правитель, люди рассчитывают на вас и ваш аватар здесь именно затем, чтобы помочь им. Сила Консулов действительно велика, однако лишь объединение усилий сделает их власть непоколебимой!',
	basePrice: {
		// Микросхемы
		// Николаскейджий
		// Технология древних
		metals: 10000,
		crystals: 10000
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Research.items.evolution.energy, 10]
			];
		} else if (level < 41) {
			return [
				[Game.Research.items.evolution.energy, 25],
				[Game.Research.items.evolution.alloy,  20],
			]
		} else if (level < 61) {
			return [
				[Game.Research.items.evolution.energy, 40],
				[Game.Research.items.evolution.alloy,  40],
				[Game.Building.items.military.storage, 10]
			]
		} else if (level < 81) {
			return [
				[Game.Research.items.evolution.energy,         60],
				[Game.Research.items.evolution.alloy,          60],
				[Game.Building.items.military.storage,         30],
				[Game.Research.items.evolution.nanotechnology, 25],
			]
		} else {
			return [
				[Game.Research.items.evolution.energy,         85],
				[Game.Research.items.evolution.alloy,          80],
				[Game.Building.items.military.storage,         60],
				[Game.Research.items.evolution.nanotechnology, 55]
			]
		}	
	}
});

new game.Building({
	name: 'Торговый порт',
	engName: 'tradingport',
	description: 'Описание торгового порта',
	effect: [new Game.Effect.Special({
		pretext: '',
		aftertext: '% к выгодной сделке',
		result: function(level) {
			level = level || this.level; 
			return level * 0.5;
		}
	}), new Game.Effect.Special({
		pretext: 'Бонусный склад вмещает на ',
		aftertext: '% больше ресурсов',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 25, 50, 75, 100][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// Части вооружения
		// Нанопроводка
		// Знания древних
		metals: 10000,
		crystals: 10000
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Research.items.evolution.alloy, 20]
			];
		} else if (level < 41) {
			return [
				[Game.Research.items.evolution.alloy,   35],
				[Game.Building.items.military.shipyard, 30],
			]
		} else if (level < 61) {
			return [
				[Game.Research.items.evolution.alloy,   65],
				[Game.Building.items.military.shipyard, 50],
				[Game.Building.items.military.storage,  40]
			]
		} else if (level < 81) {
			return [
				[Game.Research.items.evolution.alloy,          80],
				[Game.Building.items.military.shipyard,        70],
				[Game.Building.items.military.storage,         60],
				[Game.Research.items.evolution.nanotechnology, 70],
			]
		} else {
			return [
				[Game.Research.items.evolution.alloy,          90],
				[Game.Building.items.military.shipyard,        90],
				[Game.Building.items.military.storage,         80],
				[Game.Research.items.evolution.nanotechnology, 90]
			]
		}	
	}
});

new game.Building({
	name: 'Импульсный усилитель',
	engName: 'pulseamplifier',
	description: 'Описание импульсного усилителя',
	effect: [new Game.Effect.Special({
		pretext: '+',
		aftertext: '% увеличение ежедневного бонуса Консулов',
		result: function(level) {
			level = level || this.level; 
			return level * 0.5;
		}
	}), new Game.Effect.Special({
		pretext: '20% шанс при расчёте бонуса получить ещё металл и кристалл эквивалентно ',
		aftertext: ' добычи',
		result: function(level) {
			level = level || this.level; 
			return [
				0, 
				'1 часу', 
				'2 часам', 
				'3 часам', 
				'4 часам', 
				'5 часам'
			][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// ?
		// ?
		// ?
		metals: 10000,
		crystals: 10000
	},
	maxLevel: 100
	// requirements: ?
});

new game.Building({
	name: 'Статуя консула',
	engName: 'statue',
	description: 'Гигантская статуя Великого Правителя — самого Консула! Ваша двухсотметровая статуя прямо в центре жилого комплекса. Её величественный лик будет отбрасывать тень на город и каждое утро, просыпаясь, ваши жители будут мысленно благодарить вас за ваши труды, за ваше правление, вашу мудрость и непоколебимость в защите простого народа и борьбе с рептилоидами. Эта статуя не просто памятник при жизни — это статус вашего города, вашей планеты, это мораль вашего народа и маяк для новых людей, что перейдут под ваше командование и ринутся в бой по первому вашему зову, Великий Консул!',
	effect: [new Game.Effect.Income({
		pretext: '+',
		aftertext: ' чести в час',
		priority: 1,
		affect: 'honor',
		result: function(level) {
			level = level || this.level; 
			return level * 10;
		}
	}), new Game.Effect.Income({
		pretext: 'дополнительно +',
		aftertext: ' чести в час',
		priority: 1,
		affect: 'honor',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 30, 50, 100, 250][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// ?
		// ?
		// ?
		metals: 5000,
		crystals: 2000
	},
	maxLevel: 100
	//requirements: ?
});

new game.Building({
	name: 'Колизей',
	engName: 'colosseum',
	description: 'Хлеба и зрелищ. Не так ли? А что если бы можно было вернуть времена древнего Рима и устраивать настоящие кровавые битвы? Кровь, кишки… Мясо! Ах ну да… Тут же война с рептилоидами на дворе, да ещё и эти морально-культурные ценности… О! А что если устраивать битвы не между людьми, а между пленными Рептилиями?! Какая замечательная идея, Консул. Вы уже слышите как ликуют трибуны, наблюдая за тем, как чешуйчатые кромсают друг друга ради свободы… Которую они, кстати, не получат. Подобные развлечения могут привлечь в вашу колонию больше людей. Что скажете, Великий Консул?',
	effect: [new Game.Effect.Special({
		pretext: '+',
		aftertext: '% шанс награды',
		result: function(level) {
			level = level || this.level; 
			return level * 0.5;
		}
	}), new Game.Effect.Special({
		pretext: '',
		aftertext: ' турниров открыто',
		result: function(level) {
			level = level || this.level; 
			return level == 0 ? 0 : [
				'1 вид', 
				'2 вида', 
				'3 вида', 
				'4 вида', 
				'5 видов',
				'6 видов'
			][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// ?
		// ?
		// ?
		metals: 2000,
		crystals: 1500
	},
	maxLevel: 100
	// requirements: ?
});

new game.Building({
	name: 'Политический центр',
	engName: 'political',
	description: 'Ох, политика, политика… Казалось бы, кому нужны политики, когда есть единый правитель, император, его величество Консул! Однако же в мире столько вопросов, требующих внимания, а у великого правителя так мало времени. Не лучше ли, чтобы этим занимались маленькие никчёмные людишки в костюмах? Сидели там себе в кабинетах и спорили о том, в каком районе города установить новый светофор, пока вы, Консул, будете решать в каком районе Земли высаживать войска для битвы с Рептилоидами. Тем не менее, при всей своей никчёмности, политики довольно хитрые задницы и могут приносить реальную пользу вашему делу путём добычи небольшого количества Грязных Галактических Кредитов. А вот это уже кое-что. Согласитесь, Консул.',
	effect: [new Game.Effect.Income({
		pretext: 'Приносит ',
		aftertext: ' грязных галактических кредитов в час',
		priority: 1,
		affect: 'credits',
		result: function(level) {
			level = level || this.level; 
			return ((level * 0.5) / 24).toFixed(2);
		}
	}), new Game.Effect.Special({
		pretext: 'Единоразовый бонус ',
		aftertext: ' ГГК',
		result: function(level) {
			level = level || this.level; 
			switch(level) {
				case 20:
					return 500;
				case 40:
					return 1000;
				case 60:
					return 1500;
				case 80:
					return 2000;
				case 100:
					return 2500;
				default:
					return 0;
			}
		}
	})],
	basePrice: {
		// ?
		// ?
		// ?
		metals: 5000,
		crystals: 6000
	},
	maxLevel: 100
	//requirements: ?
});

new game.Building({
	name: 'Черный рынок',
	engName: 'blackmarket',
	description: 'Описание черного рынка',
	effect: [new Game.Effect.Special({
		pretext: 'Уменьшает цену контейнера на ',
		aftertext: ' ГГК',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}), new Game.Effect.Special({
		pretext: 'Единоразовый бонус: ',
		aftertext: '',
		result: function(level) {
			level = level || this.level; 
			switch(level) {
				case 20:
					return '1 рейлган';
				case 40:
					return '2 рейлгана';
				case 60:
					return '5 рейлганов';
				case 80:
					return '10 рейлганов';
				case 100:
					return '25 рейлганов';
				default:
					return '';
			}
		}
	})],
	basePrice: {
		// ?
		// ?
		// ?
		metals: 5000,
		crystals: 6000
	},
	maxLevel: 100
	//requirements: ?
});

/*
new game.Building({
	name: 'Пыточные камеры',
	engName: 'chambers',
	effect: {
		name: 'Особое меню',
		result: function(level) {
			level = (level == undefined ? this.level : level);

			if (level == 1) {
				return ': доступно';
			} 

			return ': какое особое меню?!';
		}
	},
	description: 'Среди Рептилоидов есть некоторые особи, именуемые в простонародье Ужасами. Эти твари проникают в мозг человека путём пси-воздействия и пугают наших солдат до смерти… В буквальном смысле до смерти. Однако же эти рептилии носят в своём сознании крайне важную информацию. Особое строение их мозга позволяет улавливать импульсы, которые появляются в местах разломов материи. Распознав и расшифровав колебания их мозговых волн в эти моменты, можно узнать многое об их культуре, исследованиях и технологиях. И, возможно, именно вы, Консул, сможете добыть эти данные. Но для начала нужно вскрыть мозг сраной пси-ящерицы и раздобыть эту информацию, так что пыточные камеры крайне важны в борьбе с врагом.',
	basePrice: {
		honor: 1000000,
		metals: 40000000,
		crystals: 15000000
	},
	maxLevel: 1,
	requirements: function() {
		return [
			[Game.Building.items.residential.political, 5],

			[Game.Research.items.evolution.ikea, 25]
		]
	}
});*/

}