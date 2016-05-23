initResearchContentFleetUps = function () {

game.setToMenu = 'research';
game.setToSide = 'fleetups';

new game.Research({
	name: 'Усиление Гаммадрона',
	notImplemented: true,
	engName: 'gammabetaalpha',
	description: 'Описание усиления',
	//На 50-м уровне усиления Гаммадрон превращается в Бетадрон, на 100-м уровне Бетадрон превращается в Альфадрон
	effect: [new Game.Effect.Military({
		pretext: 'Урон Гаммадрона +',
		condition: {
			type: 'unit',
			engName: 'gammadrone'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level;
			} else if (level < 100) {
				return level * 2;
			} else {
				return level * 4;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Гаммадрона +',
		condition: {
			type: 'unit',
			engName: 'gammadrone'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 2;
			} else if (level < 100) {
				return level * 3;
			} else {
				return level * 6;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [100, Game.functions.slowExponentialGrow, 0]
		};	
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [			
			[Game.Building.items.military.shipyard, 1]
		];
	}
});

new game.Research({
	name: 'Усиление Осы',
	notImplemented: true,
	engName: 'royalwasphornet',
	description: 'Описание усиления',
	//На 50-м уровне усиления Оса превращается в Королевскую Осу, на 100-м уровне Королевская Оса превращается в Шершня
	effect: [new Game.Effect.Military({
		pretext: 'Урон Осы +',
		condition: {
			type: 'unit',
			engName: 'wasp'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 2;
			} else if (level < 100) {
				return level * 4;
			} else {
				return level * 8;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Осы +',
		condition: {
			type: 'unit',
			engName: 'wasp'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 3;
			} else if (level < 100) {
				return level * 5;
			} else {
				return level * 10;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [150, Game.functions.slowExponentialGrow, 0]
		};	
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],
			[Game.Building.items.military.shipyard, 10]
		];
	}
});

new game.Research({
	name: 'Усиление Миража',
	notImplemented: true,
	engName: 'mirageghostphantom',
	description: 'Описание усиления',
	//На 50-м уровне усиления Мираж превращается в Призрак, на 100-м уровне Королевская Оса превращается в Фантом
	effect: [new Game.Effect.Military({
		pretext: 'Урон Миража +',
		condition: {
			type: 'unit',
			engName: 'mirage'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 3;
			} else if (level < 100) {
				return level * 6;
			} else {
				return level * 12;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Миража +',
		condition: {
			type: 'unit',
			engName: 'mirage'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 5;
			} else if (level < 100) {
				return level * 10;
			} else {
				return level * 20;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [200, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 20],
			[Game.Building.items.military.shipyard, 15]
		];
	}
});

new game.Research({
	name: 'Усиление Фрегата',
	notImplemented: true,
	engName: 'frigatesupportbattle',
	description: 'Описание усиления',
	//На 50-м уровне усиления Фрегат превращается во Фрегат Поддержки, на 100-м уровне Фрегат Поддержки превращается в Боевой Фрегат
	effect: [new Game.Effect.Military({
		pretext: 'Урон Фрегата +',
		condition: {
			type: 'unit',
			engName: 'frigate'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 8;
			} else if (level < 100) {
				return level * 15;
			} else {
				return level * 30;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Фрегата +',
		condition: {
			type: 'unit',
			engName: 'frigate'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 20;
			} else if (level < 100) {
				return level * 40;
			} else {
				return level * 80;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [300, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},	
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 25],
			[Game.Building.items.military.shipyard, 20]
		];
	}
});

new game.Research({
	name: 'Усиление Трака С',
	notImplemented: true,
	engName: 'truckctruckbtrucka',
	description: 'Описание усиления',
	//На 50-м уровне усиления Трак С превращается в Трак В, на 100-м уровне Трак В превращается в Трак А
	effect: [new Game.Effect.Special({
		pretext: 'Добыча Трака ',
		aftertext: ' металла',
		condition: {
			engName: 'truckCapacity'
		},
		priority: 1,
		affect: 'metals',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 10) {
				return 2000 + level * 20;
			} else if (level < 50) {
				return 2000 + level * 40;
			} else if (level < 100) {
				return 2000 + level * 80;
			} else {
				return 2000 + level * 160;
			}
		}
	}),
	new Game.Effect.Special({
		pretext: 'Добыча Трака ',
		aftertext: ' кристалла',
		condition: {
			engName: 'truckCapacity'
		},
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 10) {
				return 1000 + level * 10;
			} else if (level < 50) {
				return 1000 + level * 20;
			} else if (level < 100) {
				return 1000 + level * 40;
			} else {
				return 1000 + level * 80;
			}
		}
	})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [400, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 30],
			[Game.Building.items.military.shipyard, 25]
		];
	}
});

new game.Research({
	name: 'Усиление Крейсера',
	notImplemented: true,
	engName: 'cruiserlinearnonlinear',
	description: 'Описание усиления',
	//На 50-м уровне усиления Крейсер превращается в Линейный Крейсер, на 100-м уровне Линейный Крейсер превращается в Нелинейный Крейсер
	effect: [new Game.Effect.Military({
		pretext: 'Урон Крейсера +',
		condition: {
			type: 'unit',
			engName: 'cruiser'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 15;
			} else if (level < 100) {
				return level * 30;
			} else {
				return level * 60;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Крейсера +',
		condition: {
			type: 'unit',
			engName: 'cruiser'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 35;
			} else if (level < 100) {
				return level * 70;
			} else {
				return level * 140;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [600, Game.functions.slowExponentialGrow, 0]
		};	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 35],
			[Game.Building.items.military.shipyard, 30],
			[Game.Research.items.evolution.science, 25]
		];
	}
});

new game.Research({
	name: 'Усиление Линкора',
	notImplemented: true,
	engName: 'battleshipquadhex',
	description: 'Описание усиления',
	//На 50-м уровне усиления Линкор превращается в Квадракор, на 100-м уровне Квадракор превращается в Гексакор
	effect: [new Game.Effect.Military({
		pretext: 'Урон Линкора +',
		condition: {
			type: 'unit',
			engName: 'battleship'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 25;
			} else if (level < 100) {
				return level * 50;
			} else {
				return level * 100;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Линкора +',
		condition: {
			type: 'unit',
			engName: 'battleship'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 70;
			} else if (level < 100) {
				return level * 140;
			} else {
				return level * 280;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [800, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,   45],
			[Game.Building.items.military.shipyard,   40],
			[Game.Research.items.evolution.alloy,     40],
			[Game.Research.items.evolution.hyperdrive, 1]
		];
	}
});

new game.Research({
	name: 'Усиление Авианосца',
	notImplemented: true,
	engName: 'carrierbaseprojectx',
	description: 'Описание усиления',
	//На 50-м уровне усиления Авианосец превращается в Боевую базу, на 100-м уровне Боевая база превращается в Проект Х
	effect: [new Game.Effect.Military({
		pretext: 'Урон Авианосца +',
		condition: {
			type: 'unit',
			engName: 'carrier'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 40;
			} else if (level < 100) {
				return level * 80;
			} else {
				return level * 160;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Авианосца +',
		condition: {
			type: 'unit',
			engName: 'carrier'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 90;
			} else if (level < 100) {
				return level * 180;
			} else {
				return level * 360;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [1200, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    50],
			[Game.Building.items.military.shipyard,    45],
			[Game.Research.items.evolution.alloy,      45],
			[Game.Research.items.evolution.hyperdrive, 30]
		];
	}
});

new game.Research({
	name: 'Усиление Дредноута',
	notImplemented: true,
	engName: 'dreadnoughtbeamplasma',
	description: 'Описание усиления',
	//На 50-м уровне усиления Дредноут превращается в Лучевой Дредноут, на 100-м уровне Лучевой Дредноут превращается в Плазменный Дредноут
	effect: [new Game.Effect.Military({
		pretext: 'Урон Дредноута +',
		condition: {
			type: 'unit',
			engName: 'dreadnought'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 100;
			} else if (level < 100) {
				return level * 200;
			} else {
				return level * 400;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Дредноута +',
		condition: {
			type: 'unit',
			engName: 'dreadnought'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 200;
			} else if (level < 100) {
				return level * 400;
			} else {
				return level * 800;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [1500, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    55],
			[Game.Building.items.military.shipyard,    50],
			[Game.Research.items.evolution.alloy,      50],
			[Game.Research.items.evolution.hyperdrive, 45]
		];
	}
});

new game.Research({
	name: 'Усиление Рейлгана',
	notImplemented: true,
	engName: 'railgunsniperartillery',
	description: 'Описание усиления',
	//На 50-м уровне усиления Рейлган превращается в Снайперский Рейлган, на 100-м уровне Снайперский Рейлган превращается в Артиллерийский Рейлган.
	effect: [new Game.Effect.Military({
		pretext: 'Урон Рейлгана +',
		condition: {
			type: 'unit',
			engName: 'railgun'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 250;
			} else if (level < 100) {
				return level * 500;
			} else {
				return level * 1000;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Рейлгана +',
		condition: {
			type: 'unit',
			engName: 'railgun'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 100;
			} else if (level < 100) {
				return level * 200;
			} else {
				return level * 400;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [1800, Game.functions.slowExponentialGrow, 0]
		};
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    60],
			[Game.Building.items.military.shipyard,    55],
			[Game.Research.items.evolution.energy,     60],
			[Game.Research.items.evolution.hyperdrive, 55]
		];
	}
});

new game.Research({
	name: 'Усиление Пожинателя',
	notImplemented: true,
	engName: 'reaperancientmythical',
	description: 'Описание усиления',
	//На 50-м уровне усиления Пожинатель превращается в Древний Пожинатель, на 100-м уровне Древний Пожинатель превращается в Мифический Пожинатель
		effect: [new Game.Effect.Military({
		pretext: 'Урон Пожинателя +',
		condition: {
			type: 'unit',
			engName: 'reaper'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 300;
			} else if (level < 100) {
				return level * 600;
			} else {
				return level * 1200;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Пожинателя +',
		condition: {
			type: 'unit',
			engName: 'reaper'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 600;
			} else if (level < 100) {
				return level * 1200;
			} else {
				return level * 2400;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [2200, Game.functions.slowExponentialGrow, 0]
		};	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 65],
			[Game.Building.items.military.gates,    80],
			[Game.Building.items.military.void,     60]
		];
	}
});

new game.Research({
	name: 'Усиление Флагмана',
	notImplemented: true,
	engName: 'flagshiproyalimperial',
	description: 'Описание усиления',
	//На 50-м уровне усиления Флагман превращается в Королевский Флагман, на 100-м уровне Королевский Флагман превращается в Императорский Флагман
		effect: [new Game.Effect.Military({
		pretext: 'Урон Флагмана +',
		condition: {
			type: 'unit',
			engName: 'flagship'
		},
		priority: 1,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 750;
			} else if (level < 100) {
				return level * 1500;
			} else {
				return level * 3000;
			}
	}}), new Game.Effect.Military({
		pretext: 'Броня Флагмана +',
		condition: {
			type: 'unit',
			engName: 'flagship'
		},
		priority: 1,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level);
			if (level < 50) {
				return level * 2500;
			} else if (level < 100) {
				return level * 5000;
			} else {
				return level * 10000;
			}
	}})],
	basePrice: function(level) {
		level = level || this.currentLevel();

		var price = {
			honor: [3000, Game.functions.slowExponentialGrow, 0]
		};	
		return price;
	},
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard,        65],
			[Game.Research.items.evolution.alloy,          70],
			[Game.Research.items.evolution.nanotechnology, 60],
			[Game.Research.items.evolution.hyperdrive,     60]
		];
	}
});

};