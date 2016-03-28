initUnitsArmyContentFleet = function () {

game.setToMenu = 'army';
game.setToSide = 'fleet';

new game.Unit({
	name: 'Гаммадрон',
	// Бетадрон - (1 урон, 2 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Альфадрон - (2 урон, 3 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'gammadrone',
	description: 'Описание Гаммадрона',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: принимает на себя ',
		aftertext: '% урона первой атаки',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.gammabetaalpha.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 30;
			} else {
			return 50;
			}
	}})],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 80,
			max: 100
		},
		life: 200
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.sphero,
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.lacertian
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 1]
		]
	}
});

new game.Unit({
	name: 'Оса',
	// Королевская Оса - (2 урон, 3 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Шершень - (4 урон, 5 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'wasp',
	description: 'Оса — это быстрый штурмовой корабль. Она способна вести бой как на дальнем, так и на близком расстоянии. Также её особенностью является то, что устройство данного корабля позволяет ему цепляться с помощью хвоста за обшивку кораблей противника, после чего Оса разделяется на две части. Пилотируемая капсула отправляется на ближайший крупный боевой корабль, а «жало» вместе с двигателями остаётся в обшивке корабля противника. Благодаря дистанционному управлению хвостовыми двигателями, несколько тысяч Ос могут взять под контроль движения любого корабля. Ну, или просто взорвать его к херам вместе с капитаном-неудачником, подпустившим Ос слишком близко к своему кораблю.',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '% шанс уничтожить Дракон перед своей смертью',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.royalwasphornet.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 1;
			} else {
			return 2;
			}
	}})],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 240,
			max: 300
		},
		life: 500
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.sphero,
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.lacertian
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],
			[Game.Building.items.military.shipyard, 10]
		]
	}
});

new game.Unit({
	name: 'Мираж',
	// Призрак - (3 урон, 5 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Фантом - (6 урон, 10 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'mirage',
	description: 'Описание Миража',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '% шанс не получить урон во время первой атаки',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.mirageghostphantom.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 30;
			} else {
			return 50;
			}
	}})],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 400,
			max: 500
		},
		life: 1000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.lacertian,
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.sphero
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 20],
			[Game.Building.items.military.shipyard, 15]
		]
	}
});

new game.Unit({
	name: 'Фрегат',
	// Фрегат поддержки - (8 урон, 20 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Боевой фрегат - (6 урон, 10 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'frigate',
	description: 'Описание Фрегата',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: на ',
		aftertext: '% больше урона по Клинкам',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.frigatesupportbattle.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 15;
			} else {
			return 35;
			}
	}})],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 1200,
			max: 1500
		},
		life: 4000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.lacertian,
			Game.Unit.items.reptiles.fleet.wyvern
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 25],
			[Game.Building.items.military.shipyard, 20]
		]
	}
});

new game.Unit({
	name: 'Трак C',
	// Трак B - (+100 ресов за уровень) умножает на 2 полученные за усиления статы (1-50 ур)
	// Трак A - (+200 ресов за уровень) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'truckc',
	description: 'Описание Трака (несёт в себе до 5000 доп. ресов)',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '% шанс вообще не получить урон',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.truckctruckbtrucka.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 40;
			} else {
			return 80;
			}
	}})],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 40,
			max: 50
		},
		life: 2500
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.sphero,
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.lacertian
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 30],
			[Game.Building.items.military.shipyard, 25]
		]
	}
});

new game.Unit({
	name: 'Крейсер',
	// Линейный крейсер - (15 урон, 35 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Нелинейный крейсер - (30 урон, 70 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'cruiser',
	description: 'Крейсер, как понятно из названия, универсальный боевой корабль, способный выполнять практически любые задачи независимо от основного флота. Оснащён высокоточным ионным орудием, способным вывести из строя почти любые щиты противника. Крейсер также отлично подходит для уничтожения небольших и шустрых целей. Его нельзя назвать основным оружием в космических баталиях против Рептилоидов, однако же и нельзя недооценивать его потенциал. Если флот противника состоит преимущественно из кораблей класса «штурмовик», то несколько таких машинок расправятся с ними гораздо быстрее, чем сотня Ос.',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '% шанс на 4-ой атаке нанести 100% урон',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.cruiserlinearnonlinear.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 20;
			} else {
			return 50;
			}
	}})],
	basePrice: {
		humans: 1500,
		metals: 30000,
		crystals: 10000,
		time: 3 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 2400,
			max: 3000
		},
		life: 7000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.wyvern,
			Game.Unit.items.reptiles.fleet.dragon,
			Game.Unit.items.reptiles.fleet.hydra
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 35],
			[Game.Building.items.military.shipyard, 30],
			[Game.Research.items.evolution.science, 25]
		]
	}
});

new game.Unit({
	name: 'Линкор',
	// Квадракор - (25 урон, 70 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Гексакор - (50 урон, 140 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'battleship',
	description: 'Линкор или Линейный корабль — основная боевая единица в космосе. Сам Адмирал Стил Болз назвал эти Линкоры величайшим космическим орудием. Понятно, что есть корабли и мощнее, однако же сочетание серьёзного вооружения, крепкой брони, относительно невысокой стоимости и прекрасных показателей приоритетов атаки делают Линкоры самым полезным кораблём на поле боя, способным дать отпор даже самым Ебучим Флотилиям Рептилоидов.',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.battleshipquadhex.currentLevel();
			if (level < 50) {
				return '';
			} else if (level < 100) {
				return '10% шанс в каждой атаке получить на 40% меньше урона';
			} else {
			return '20% шанс в каждой атаке получить на 80% меньше урона';
			}
	}})],
	basePrice: {
		humans: 7500,
		metals: 70000,
		crystals: 5000,
		time: 5 * 60
	},
	characteristics: {
		damage: {
			min: 4000,
			max: 5000
		},
		life: 15000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.hydra,
			Game.Unit.items.reptiles.fleet.dragon,
			Game.Unit.items.reptiles.fleet.wyvern
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,   45],
			[Game.Building.items.military.shipyard,   40],
			[Game.Research.items.evolution.alloy,     40],
			[Game.Research.items.evolution.hyperdrive, 1]
		]
	}
});

new game.Unit({
	name: 'Авианосец',
	// Боевая база - (40 урон, 90 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Проект Х - (80 урон, 180 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'carrier',
	description: 'Авианосец, или, как его называют пилоты Осы, Улей — это огромный боевой корабль-завод. Авианосец способен ремонтировать и производить штурмовики класса «Оса» прямо во время боя. Авианосец имеет серьёзное вооружение, однако же основной урон наносит благодаря штурмовым кораблям на борту. Именно поэтому его и прозвали Улей, но почему-то руководству не нравится это название, что даже немного странно…',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: восстанавливает ',
		aftertext: '% Ос после боя',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.carrierbaseprojectx.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 15;
			} else {
			return 30;
			}
	}})],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 7200,
			max: 9000
		},
		life: 20000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.hydra,
			Game.Unit.items.reptiles.fleet.lacertian,
			Game.Unit.items.reptiles.fleet.blade
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    50],
			[Game.Building.items.military.shipyard,    45],
			[Game.Research.items.evolution.alloy,      45],
			[Game.Research.items.evolution.hyperdrive, 30]
		]
	}
});

new game.Unit({
	name: 'Дредноут',
	// Лучевой дредноут - (100 урон, 200 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Плазменный дредноут - (200 урон, 400 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'dreadnought',
	description: 'Описание дредноута',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: на ',
		aftertext: ' атаке наносит 100% урон первой цели',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.dreadnoughtbeamplasma.currentLevel();
			if (level < 50) {
				return '';
			} else if (level < 100) {
				return '2-ой';
			} else {
			return '2-ой и 3-ей';
			}
	}})],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 7200,
			max: 9000
		},
		life: 20000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.octopus,
			Game.Unit.items.reptiles.fleet.prism,
			Game.Unit.items.reptiles.fleet.armadillo
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    55],
			[Game.Building.items.military.shipyard,    50],
			[Game.Research.items.evolution.alloy,      50],
			[Game.Research.items.evolution.hyperdrive, 45]
		]
	}
});

new game.Unit({
	name: 'Рейлган',
	// Снайперский рейлган - (250 урон, 100 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Артиллерийский рейлган - (500 урон, 200 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'railgun',
	description: 'Описание рейлгана',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '% шанс нанести 300% урона Тени в первой атаке',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.railgunsniperartillery.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 40;
			} else {
			return 80;
			}
	}})],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 40000,
			max: 50000
		},
		life: 25000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.shadow,
			Game.Unit.items.reptiles.fleet.godzilla,
			Game.Unit.items.reptiles.fleet.prism
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield,    60],
			[Game.Building.items.military.shipyard,    55],
			[Game.Research.items.evolution.energy,     60],
			[Game.Research.items.evolution.hyperdrive, 55]
		]
	}
});

new game.Unit({
	name: 'Пожинатель',
	// Древний пожинатель - (300 урон, 600 броня) умножает на 2 полученные за усиления статы (1-50 ур)
	// Мифический пожинатель - (600 урон, 1200 броня) умножает на 2 полученные за усиления статы (1-100 ур)
	engName: 'reaper',
	description: 'Описание пожинателя',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: после уничтожения наносит ',
		aftertext: ' урона вражескому флоту',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.reaperancientmythical.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 500000;
			} else {
			return 1000000;
			}
	}})],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 48000,
			max: 60000
		},
		life: 150000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.godzilla,
			Game.Unit.items.reptiles.fleet.octopus,
			Game.Unit.items.reptiles.fleet.prism
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 65],
			[Game.Building.items.military.gates,    80],
			[Game.Building.items.military.void,     60]
		]
	}
});
new game.Unit({
	name: 'Императорский флагман',
	// Королевский флагман - (750 урон, 2500 броня) умножает на 2 полученные за усиления статы (1-50 ур). Спецспособность: 90% шанс вернуться домой несмотря на исход боя
	// Императорский флагман - (1500 урон, 5000 броня) умножает на 2 полученные за усиления статы (1-100 ур). Спецспособность: 100% шанс вернуться домой несмотря на исход боя
	engName: 'flagship',
	description: 'Венец творения современной боевой космонавтики. Данный корабль производится лишь в одном экземпляре и лишь для Консулов. Разработки подобной боевой системы были начаты ещё 10 лет назад для особо рьяных и особо богатых милитаристов — членов галактического совета, однако война с Рептилиями расставила свои приоритеты и прототип был переоборудован специально для борьбы с чешуйчатыми, а после появления Консулов вопросов не осталось. Императорский Флагман — это символ силы его Правителя и это страх для его врагов! Рептилоиды стараются избегать боя с Императорским Флагманом, ибо даже им понятно, что лучше уйти сейчас и выжить, чем погибнуть в страшных муках и потерять половину флота.',
	effect: [new Game.Effect.Special({
		pretext: 'Спецспособность: ',
		aftertext: '% шанс вернуться домой несмотря на исход боя',		
		result: function(level) {
			level = level || Game.Research.items.fleetups.flagshiproyalimperial.currentLevel();
			if (level < 50) {
				return 0;
			} else if (level < 100) {
				return 90;
			} else {
			return 100;
			}
	}})],
	basePrice: {
		humans: 150000,
		metals: 1000000,
		crystals: 750000,
		time: 100 * 60 * 60
	},
	characteristics: {
		damage: {
			min: 120000,
			max: 150000
		},
		life: 600000
	},

	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.shadow,
			Game.Unit.items.reptiles.fleet.prism,
			Game.Unit.items.reptiles.fleet.wyvern
		]
	},
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