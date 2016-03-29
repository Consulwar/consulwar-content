initResearchContentFleetUps = function () {

game.setToMenu = 'research';
game.setToSide = 'fleetups';

new game.Research({
	name: 'Усиление Гаммадрона',
	engName: 'gammabetaalpha',
	description: 'Описание усиления',
	//На 50-м уровне усиления Гаммадрон превращается в Бетадрон, на 100-м уровне Бетадрон превращается в Альфадрон
	effect: new Game.Effect.Military({
		pretext: 'Урон Гаммадрона +',
		condition: {
			type: 'unit',
			name: 'gammadrone'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level;
			} else if (level < 100) {
				return level * 2;
			} else {
				return level * 4;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Гаммадрона +',
		condition: {
			type: 'unit',
			name: 'gammadrone'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 2;
			} else if (level < 100) {
				return level * 3;
			} else {
				return level * 6;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [100, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [			
			[Game.Building.items.military.shipyard, 1]
		]
	}
});

new game.Research({
	name: 'Усиление Осы',
	engName: 'royalwasphornet',
	description: 'Описание усиления',
	//На 50-м уровне усиления Оса превращается в Королевскую Осу, на 100-м уровне Королевская Оса превращается в Шершня
	effect: new Game.Effect.Military({
		pretext: 'Урон Осы +',
		condition: {
			type: 'unit',
			name: 'wasp'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 2;
			} else if (level < 100) {
				return level * 4;
			} else {
				return level * 8;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Осы +',
		condition: {
			type: 'unit',
			name: 'wasp'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 3;
			} else if (level < 100) {
				return level * 5;
			} else {
				return level * 10;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [200, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],
			[Game.Building.items.military.shipyard, 10]
		]
	}
});

new game.Research({
	name: 'Усиление Миража',
	engName: 'mirageghostphantom',
	description: 'Описание усиления',
	//На 50-м уровне усиления Мираж превращается в Призрак, на 100-м уровне Королевская Оса превращается в Фантом
	effect: new Game.Effect.Military({
		pretext: 'Урон Миража +',
		condition: {
			type: 'unit',
			name: 'mirage'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 3;
			} else if (level < 100) {
				return level * 6;
			} else {
				return level * 12;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Миража +',
		condition: {
			type: 'unit',
			name: 'mirage'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 5;
			} else if (level < 100) {
				return level * 10;
			} else {
				return level * 20;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [400, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 20],
			[Game.Building.items.military.shipyard, 15]
		]
	}
});

new game.Research({
	name: 'Усиление Фрегата',
	engName: 'frigatesupportbattle',
	description: 'Описание усиления',
	//На 50-м уровне усиления Фрегат превращается во Фрегат Поддержки, на 100-м уровне Фрегат Поддержки превращается в Боевой Фрегат
	effect: new Game.Effect.Military({
		pretext: 'Урон Фрегата +',
		condition: {
			type: 'unit',
			name: 'frigate'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 8;
			} else if (level < 100) {
				return level * 15;
			} else {
				return level * 30;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Фрегата +',
		condition: {
			type: 'unit',
			name: 'frigate'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 20;
			} else if (level < 100) {
				return level * 40;
			} else {
				return level * 80;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [800, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 25],
			[Game.Building.items.military.shipyard, 20]
		]
	}
});

new game.Research({
	name: 'Усиление Трака С',
	engName: 'truckctruckbtrucka',
	description: 'Описание усиления',
	//На 50-м уровне усиления Трак С превращается в Трак В, на 100-м уровне Трак В превращается в Трак А
	effect: new Game.Effect.Income({
		pretext: 'Добыча Трака +',
		condition: {
			type: 'unit',
			name: 'truckc'
		},
		priority: 1,
		affect: 'metal, crystal',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 100;
			} else if (level < 100) {
				return level * 200;
			} else {
				return level * 400;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [1600, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 30],
			[Game.Building.items.military.shipyard, 25]
		]
	}
});

new game.Research({
	name: 'Усиление Крейсера',
	engName: 'cruiserlinearnonlinear',
	description: 'Описание усиления',
	//На 50-м уровне усиления Крейсер превращается в Линейный Крейсер, на 100-м уровне Линейный Крейсер превращается в Нелинейный Крейсер
	effect: new Game.Effect.Military({
		pretext: 'Урон Крейсера +',
		condition: {
			type: 'unit',
			name: 'cruiser'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 15;
			} else if (level < 100) {
				return level * 30;
			} else {
				return level * 60;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Крейсера +',
		condition: {
			type: 'unit',
			name: 'cruiser'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 35;
			} else if (level < 100) {
				return level * 70;
			} else {
				return level * 140;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [3200, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 35],
			[Game.Building.items.military.shipyard, 30],
			[Game.Research.items.evolution.science, 25]
		]
	}
});

new game.Research({
	name: 'Усиление Линкора',
	engName: 'battleshipquadhex',
	description: 'Описание усиления',
	//На 50-м уровне усиления Линкор превращается в Квадракор, на 100-м уровне Квадракор превращается в Гексакор
	effect: new Game.Effect.Military({
		pretext: 'Урон Линкора +',
		condition: {
			type: 'unit',
			name: 'battleship'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 25;
			} else if (level < 100) {
				return level * 50;
			} else {
				return level * 100;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Линкора +',
		condition: {
			type: 'unit',
			name: 'battleship'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 70;
			} else if (level < 100) {
				return level * 140;
			} else {
				return level * 280;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [6400, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,   45],
			[Game.Building.items.military.shipyard,   40],
			[Game.Research.items.evolution.alloy,     40],
			[Game.Research.items.evolution.hyperdrive, 1]
		]
	}
});

new game.Research({
	name: 'Усиление Авианосца',
	engName: 'carrierbaseprojectx',
	description: 'Описание усиления',
	//На 50-м уровне усиления Авианосец превращается в Боевую базу, на 100-м уровне Боевая база превращается в Проект Х
	effect: new Game.Effect.Military({
		pretext: 'Урон Авианосца +',
		condition: {
			type: 'unit',
			name: 'carrier'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 40;
			} else if (level < 100) {
				return level * 80;
			} else {
				return level * 160;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Авианосца +',
		condition: {
			type: 'unit',
			name: 'carrier'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 90;
			} else if (level < 100) {
				return level * 180;
			} else {
				return level * 360;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [12800, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    50],
			[Game.Building.items.military.shipyard,    45],
			[Game.Research.items.evolution.alloy,      45],
			[Game.Research.items.evolution.hyperdrive, 30]
		]
	}
});

new game.Research({
	name: 'Усиление Дредноута',
	engName: 'dreadnoughtbeamplasma',
	description: 'Описание усиления',
	//На 50-м уровне усиления Дредноут превращается в Лучевой Дредноут, на 100-м уровне Лучевой Дредноут превращается в Плазменный Дредноут
	effect: new Game.Effect.Military({
		pretext: 'Урон Дредноута +',
		condition: {
			type: 'unit',
			name: 'dreadnought'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 100;
			} else if (level < 100) {
				return level * 200;
			} else {
				return level * 400;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Дредноута +',
		condition: {
			type: 'unit',
			name: 'dreadnought'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 200;
			} else if (level < 100) {
				return level * 400;
			} else {
				return level * 800;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [25600, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    55],
			[Game.Building.items.military.shipyard,    50],
			[Game.Research.items.evolution.alloy,      50],
			[Game.Research.items.evolution.hyperdrive, 45]
		]
	}
});

new game.Research({
	name: 'Усиление Рейлгана',
	engName: 'railgunsniperartillery',
	description: 'Описание усиления',
	//На 50-м уровне усиления Рейлган превращается в Снайперский Рейлган, на 100-м уровне Снайперский Рейлган превращается в Артиллерийский Рейлган.
	effect: new Game.Effect.Military({
		pretext: 'Урон Рейлгана +',
		condition: {
			type: 'unit',
			name: 'railgun'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 250;
			} else if (level < 100) {
				return level * 500;
			} else {
				return level * 1000;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Рейлгана +',
		condition: {
			type: 'unit',
			name: 'railgun'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 100;
			} else if (level < 100) {
				return level * 200;
			} else {
				return level * 400;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [51200, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    60],
			[Game.Building.items.military.shipyard,    55],
			[Game.Research.items.evolution.energy,     60],
			[Game.Research.items.evolution.hyperdrive, 55]
		]
	}
});

new game.Research({
	name: 'Усиление Пожинателя',
	engName: 'reaperancientmythical',
	description: 'Описание усиления',
	//На 50-м уровне усиления Пожинатель превращается в Древний Пожинатель, на 100-м уровне Древний Пожинатель превращается в Мифический Пожинатель
		effect: new Game.Effect.Military({
		pretext: 'Урон Пожинателя +',
		condition: {
			type: 'unit',
			name: 'reaper'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 300;
			} else if (level < 100) {
				return level * 600;
			} else {
				return level * 1200;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Пожинателя +',
		condition: {
			type: 'unit',
			name: 'reaper'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 600;
			} else if (level < 100) {
				return level * 1200;
			} else {
				return level * 2400;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [102400, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 65],
			[Game.Building.items.military.gates,    80],
			[Game.Building.items.military.void,     60]
		]
	}
});

new game.Research({
	name: 'Усиление Флагмана',
	engName: 'flagshiproyalimperial',
	description: 'Описание усиления',
	//На 50-м уровне усиления Флагман превращается в Королевский Флагман, на 100-м уровне Королевский Флагман превращается в Императорский Флагман
		effect: new Game.Effect.Military({
		pretext: 'Урон Флагмана +',
		condition: {
			type: 'unit',
			name: 'flagship'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 750;
			} else if (level < 100) {
				return level * 1500;
			} else {
				return level * 3000;
			}
	}}),
	effect: new Game.Effect.Military({
		pretext: 'Броня Флагмана +',
		condition: {
			type: 'unit',
			name: 'flagship'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = level || this.level;
			if (level < 50) {
				return level * 2500;
			} else if (level < 100) {
				return level * 5000;
			} else {
				return level * 10000;
			}
	}}),
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [204800, Game.functions.slowExponentialGrow, 0]
		}	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard,        65],
			[Game.Research.items.evolution.alloy,          70],
			[Game.Research.items.evolution.nanotechnology, 60],
			[Game.Research.items.evolution.hyperdrive,     60]
		]
	}
});

}

/*
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
*/