initResearchContentFleetUps = function () {

game.setToMenu = 'research';
game.setToSide = 'fleetups';

new game.Research({
	name: 'Оружейные стабилизаторы',
	engName: 'stabilizers',
	description: 'Разработка новых стабилизаторов для кораблей класса Оса началась ещё несколько лет назад по программе усиления боевых возможностей флота. Бывшие власти людей считали быстрые и манёвренные корабли самым перспективным направлениям развития флота, так как не было более опасной угрозы. Таким образом более точные орудия могли быть полезными в исследовании и уничтожении опасности на расстоянии. На данный момент эти исследования снова среди приоритетных задач.',
	effect: new Game.Effect.Military({
		pretext: 'Урон ос +',
		condition: {
			type: 'unit',
			name: 'wasp'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level; 
			return level * 1 * 5;
		}
	}),
	basePrice: {
		honor: 12000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 5],
			[Game.Building.items.military.shipyard, 5]
		]
	}
});

new game.Research({
	name: 'Антипригарное покрытие',
	engName: 'coating',
	description: 'Во время исследований космоса лёгким кораблям вроде Осы приходилось сталкиваться с различными перепадами температур. Для исследования газовых облаков космического пространства было предложено усиление обшивки кораблей антипригарным покрытием, повышающим устойчивость к высоким температурам. Сегодня, в условиях войны с Рептилиями, эти исследования могут быть полезны против высокоточных плазменных орудий противника. Такое покрытие усилит выживаемость Осы.',
	effect: new Game.Effect.Military({
		pretext: 'Жизни ос +',
		condition: {
			type: 'unit',
			name: 'wasp'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 1 * 5;
		}
	}),
	basePrice: {
		honor: 10000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 5],
			[Game.Building.items.military.shipyard, 5]
		]
	}
});

new game.Research({
	name: 'Энергетическое балансирование',
	engName: 'balancing',
	description: 'Крейсер — относительно новый корабль флота, ранее применялся для других целей. В военное время на него были установлены новые системы вооружения, однако не до конца доработана электроника корабля. Энергия используется неравномерно, что вызывает частые скачки энергии и сбои в оружейном аппарате. Энергетическое балансирование поможет решить вопрос с переключением различного вооружения корабля и более рационально использовать энергореактор Крейсеров.',
	effect: new Game.Effect.Military({
		pretext: 'Урон крейсера +',
		condition: {
			type: 'unit',
			name: 'cruiser'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level; 
			return level * 2 * 5;
		}
	}),
	basePrice: {
		honor: 25000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 8],
			[Game.Building.items.military.shipyard, 7]
		]
	}
});

new game.Research({
	name: 'Система контроля щитов',
	engName: 'shieldcontrol',
	description: 'Впервые система щитов была использована именно на крейсерах. Их щиты старого образца, однако их польза может быть неоценимой в бою, ведь сам корабль не отличается серьёзной бронёй. В то же время страдает та же часть, что и с вооружением — электроника. Энергореакторы Крейсеров очень мощные для такого корабля, а это значит, что правильно научившись распределять эту энергию в бою, можно значительно повысить выживаемость Крейсеров.',
	effect: new Game.Effect.Military({
		pretext: 'Жизни крейсера +',
		condition: {
			type: 'unit',
			name: 'cruiser'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 3 * 5;
		}
	}),
	basePrice: {
		honor: 20000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 8],
			[Game.Building.items.military.shipyard, 7]
		]
	}
});

new game.Research({
	name: 'Ионные орудия',
	engName: 'ionweapon',
	description: 'На базовой сборке Линкоров установлены лазерные орудия для ведения боя в условиях космоса и кинетическое вооружение для ведения боёв на околоземной орбите. Белыми халатами была предложена новая система вооружения — замена всех типов орудий на новые ионные пушки, которые будут одинаково хорошо работать во всех условиях, потреблять меньше энергии, а урон значительно увеличится.',
	effect: new Game.Effect.Military({
		pretext: 'Урон линкора +',
		condition: {
			type: 'unit',
			name: 'battleship'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level; 
			return level * 4 * 5;
		}
	}),
	basePrice: {
		honor: 45000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],
			[Game.Building.items.military.shipyard, 9],

			[Game.Research.items.evolution.hyperdrive, 1]
		]
	}
});

new game.Research({
	name: 'Бронелисты',
	engName: 'armorsheets',
	description: 'Линкоры укомплектованы четырёхслойной бронёй из особого сплава, которая позволяет кораблю выдерживать больший урон. Корпус при этом страдает, однако внутреннее строение корабля, состоящее из изолированных секций, позволяет ему долго находиться в бою, даже будучи сильно повреждённым. Ставить мощные щиты на Линкоры учёные считают неразумным, так как энергетику корабля лучше использовать для мощных атак по противнику. В свою очередь, линкор — корабль и так не особо поворотливый, ему приходится ловить весь урон в свой корпус, так почему бы не усилить броню ещё больше?',
	effect: new Game.Effect.Military({
		pretext: 'Жизни линкора +',
		condition: {
			type: 'unit',
			name: 'battleship'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 8 * 5;
		}
	}),
	basePrice: {
		honor: 40000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],
			[Game.Building.items.military.shipyard, 9],

			[Game.Research.items.evolution.hyperdrive, 1]
		]
	}
});

new game.Research({
	name: 'Плазменные турели',
	engName: 'plasmaturrets',
	description: 'Основной урон корабль наносит встроенными кораблями поддержки и в целом большую часть времени предпочитает находиться позади основного боевого флота. Однако, представляя серьёзную угрозу для противника, Авианосец стал чуть ли не основной целью серьёзных боевых кораблей Рептилоидов. Всё это привело к мысли, что Авианосец следует усилить и для ближнего боя. Установка Плазменных турелей на корабль как раз одно из таких усилений.',
	effect: new Game.Effect.Military({
		pretext: 'Урон авианосцев +',
		condition: {
			type: 'unit',
			name: 'carrier'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level; 
			return level * 10 * 5;
		}
	}),
	basePrice: {
		honor: 100000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 12],
			[Game.Building.items.military.shipyard, 11],

			[Game.Research.items.evolution.hyperdrive, 7]
		]
	}
});

new game.Research({
	name: 'Дроны заграждения',
	engName: 'dronebarrier',
	description: 'Броня Авианосца мощная, однако имеет много слабых мест, при этом корабль огромный, и может вмещать в себя немыслимое количество мелких кораблей. По сути, авианосец — это большой склад военных кораблей поменьше. Думаю, там найдётся место ещё для одного изобретения новой эры — Дронов. Во время боя Авианосец выпускает множество дронов, которые закрепляются недалеко от обшивки корабля в слабых местах и ловят на себя урон противника. Авианосец теряет дронов, но остаётся в строю. Довольно хитрый ход.',
	effect: new Game.Effect.Military({
		pretext: 'Жизни авианосцев +',
		condition: {
			type: 'unit',
			name: 'carrier'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 25 * 5;
		}
	}),
	basePrice: {
		honor: 80000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 12],
			[Game.Building.items.military.shipyard, 11],

			[Game.Research.items.evolution.hyperdrive, 7]
		]
	}
});

new game.Research({
	name: 'Разгон частиц',
	engName: 'particleacceleration',
	description: 'Основные орудия корабля — это высокоточные плазменные снайперские орудия, способные вести бой на большом расстоянии. В тоже время последние исследования в области боевых технологий могут сделать Флагман ещё сильнее, заменив плазменные орудия на специальные рейлганы, которые разгоняют частицы до сверхскоростей и прошибают броню кораблей противника, как нож прорезает масло.',
	effect: new Game.Effect.Military({
		pretext: 'Урон флагмана +',
		condition: {
			type: 'unit',
			name: 'flagship'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level; 
			return level * 200 * 5;
		}
	}),
	basePrice: {
		honor: 120000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 20],

			[Game.Research.items.evolution.alloy, 15],
			[Game.Research.items.evolution.nanotechnology, 15],
			[Game.Research.items.evolution.hyperdrive, 12]
		]
	}
});

new game.Research({
	name: 'Кристаллизованный сплав',
	engName: 'crystallizedalloy',
	description: 'Этот особый сплав научились создавать после более подробного изучения кристаллизации. Внедряемые в сплав металла кристаллические нанотрубки могут чрезвычайно усилить его прочность и сопротивляемость как высоким, так и низким температурам в разных слоях бронелистов на корпусе корабля. Это, к сожалению, не делает корабль бессмертным, но… Очень близко к тому.',
	effect: new Game.Effect.Military({
		pretext: 'Жизни флагмана +',
		condition: {
			type: 'unit',
			name: 'flagship'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 5000 * 5;
		}
	}),
	basePrice: {
		honor: 100000
	},
	maxLevel: 20,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 20],
			
			[Game.Research.items.evolution.alloy, 15],
			[Game.Research.items.evolution.nanotechnology, 15],
			[Game.Research.items.evolution.hyperdrive, 12]
		]
	}
});


}