initUnitsArmyContentDefence = function () {

game.setToMenu = 'army';
game.setToSide = 'defence';

new game.Unit({
	name: 'Мины',
	// Спецспособность: принимает на себя 40% урона первой атаки
	// Сигнатура орудий: Термовоздействие - 200 урон, сигнатура 100. Сигнатура установки - 20.
	engName: 'bomb',
	description: 'Описание мин',
	effect: [new Game.Effect.Special({
		pretext: 'Принимают на себя ',
		aftertext: '% урона первой атаки',		
		result: 40
		})]
	basePrice: {		
		metals: 500,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 160,
			max: 200
		},
		life: 5
	},
	targets: function() {
		return [
		// нет приоритетной цели, рандом
		]	
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 1]
		]
	}
});

new game.Unit({
	name: 'Ионные мины',
	// Спецспособность: игнорирует любые защитные способности (урон могут получить даже корабли, имунные к таким видам атак)
	// Сигнатура орудий: Ионный взрыв - 500 урон, сигнатура 300. Сигнатура установки - 50.
	engName: 'ionbomb',
	description: 'Описание ионных мин',
	effect: [new Game.Effect.Special({
		pretext: 'Все цели получают ',
		aftertext: '% урон, даже имунные к таким видам атак',		
		result: 100
		})]
	basePrice: {		
		credits: 5,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 400,
			max: 500
		},
		life: 10
	},
	targets: function() {
		return [
		// нет приоритетной цели, рандом
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 10]
		]
	}
});

new game.Unit({
	name: 'Турель',
	// Спецспособность: 10% шанс нанести двойной урон в одной из атак
	// Сигнатура орудий: Лазерная пушка - 500 урон, сигнатура 20. Сигнатура установки - 200.
	engName: 'turret',
	description: 'Описание турели',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс нанести двойной урон — ',
		aftertext: '%',		
		result: 10
		})]
	basePrice: {		
		metals: 3000,
		crystals: 500,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 400,
			max: 500
		},
		life: 2000
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
			[Game.Building.items.military.defensecomplex, 20],
			[Game.Research.items.evolution.engineering,    5]
		]
	}
});

new game.Unit({
	name: 'Лазерная Турель',
	// Спецспособность: наносит полный урон даже не приоритетным целям
	// Сигнатура орудий: Лазерная пушка - 1500 урон, сигнатура 50. Сигнатура установки - 350.
	engName: 'laserturret',
	description: 'Описание лазерной турели',
	effect: [new Game.Effect.Special({
		pretext: 'Урон даже не приоритетным целям — ',
		aftertext: '%',		
		result: 100
		})]
	basePrice: {		
		credits: 50,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 1200,
			max: 1500
		},
		life: 5000
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
			[Game.Building.items.military.defensecomplex, 30],
			[Game.Research.items.evolution.engineering,   20]
		]
	}
});

new game.Unit({
	name: 'Снайпер Ган',
	// Спецспособность: 20% шанс не получить урон в первом раунде
	// Сигнатура орудий: Импульсный луч - 3000 урон, сигнатура 150. Сигнатура установки - 500.
	engName: 'snipergun',
	description: 'Описание снайпер гана',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс не получить урон в первом раунде — ',
		aftertext: '%',		
		result: 20
		})]
	basePrice: {		
		metals: 20000,
		crystals: 10000,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 2400,
			max: 3000
		},
		life: 20000
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
			[Game.Building.items.military.defensecomplex, 40],
			[Game.Research.items.evolution.engineering,   35]
		]
	}
});

new game.Unit({
	name: 'Рельсовая Пушка',
	// Спецспособность: 40% уничтоженных пушек восстанавливается после боя
	// Сигнатура орудий: Импульсный луч - 12000 урон, сигнатура 300. Сигнатура установки - 1000.
	engName: 'railcannon',
	description: 'Описание рельсовой пушки',
	effect: [new Game.Effect.Special({
		pretext: 'После боя восстанавливается ',
		aftertext: '% уничтоженных пушек',		
		result: 40
		})]
	basePrice: {		
		credits: 300,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 9600,
			max: 12000
		},
		life: 50000
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
			[Game.Building.items.military.defensecomplex, 50],
			[Game.Research.items.evolution.engineering,   45]
		]
	}
});

new game.Unit({
	name: 'Плазменный Убийца',
	// Спецспособность: 30% шанс уничтожить 1-го Дракона до боя
	// Сигнатура орудий: Плазменный резак - 8000 урон, сигнатура 100. Сигнатура установки - 2000.
	engName: 'plasmakiller',
	description: 'Описание рельсовой пушки',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс уничтожить 1 Дракон до боя — ',
		aftertext: '%',		
		result: 30
		})]
	basePrice: {		
		metals: 80000,
		crystals: 20000,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 6400,
			max: 8000
		},
		life: 100000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.dragon,
			Game.Unit.items.reptiles.fleet.wyvern,
			Game.Unit.items.reptiles.fleet.lacertian			
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 60],
			[Game.Research.items.evolution.engineering,   55]
		]
	}
});

new game.Unit({
	name: 'Жидкоплазменный Тиран',
	// Спецспособность: 20% шанс уничтожить 1 Броненосец до боя
	// Сигнатура орудий: Плазменный резак - 45000 урон, сигнатура 200. Сигнатура установки - 5000.
	engName: 'tyrant',
	description: 'Описание Жидкоплазменного Тирана',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс уничтожить 1 Броненосец до боя — ',
		aftertext: '%',		
		result: 20
		})]
	basePrice: {		
		credits: 1000,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 36000,
			max: 45000
		},
		life: 250000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.armadillo,
			Game.Unit.items.reptiles.fleet.prism,
			Game.Unit.items.reptiles.fleet.hydra			
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 70],
			[Game.Research.items.evolution.engineering,   65]
		]
	}
});

new game.Unit({
	name: 'Кристалл-Ган',
	// Спецспособность: Годзилла получает 150% урона
	// Сигнатура орудий: Кристаллическая пушка - 20000 урон, сигнатура 500. Сигнатура установки - 8000.
	engName: 'crystalgun',
	description: 'Описание Жидкоплазменного Тирана',
	effect: [new Game.Effect.Special({
		pretext: 'Годзилла получает ',
		aftertext: '% урона',		
		result: 150
		})]
	basePrice: {		
		metals: 100000,
		crystals: 50000,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 16000,
			max: 20000
		},
		life: 120000
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
			[Game.Building.items.military.defensecomplex, 75],
			[Game.Research.items.evolution.engineering,   70]
		]
	}
});

new game.Unit({
	name: 'Трилинейный Кристалл-Ган',
	// Спецспособность: Тень получает 200% урона
	// Сигнатура орудий: Кристаллическая пушка - 250000 урон, сигнатура 1000. Сигнатура установки - 15000.
	engName: 'trilinear',
	description: 'Описание Трилинейного Кристалл-Гана',
	effect: [new Game.Effect.Special({
		pretext: 'Тень получает ',
		aftertext: '% урона',		
		result: 200
		})]
	basePrice: {		
		credits: 5000,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 200000,
			max: 250000
		},
		life: 1500000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.shadow,
			Game.Unit.items.reptiles.fleet.godzilla,
			Game.Unit.items.reptiles.fleet.octopus			
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 80],
			[Game.Research.items.evolution.engineering,   75]
		]
	}
});

new game.Unit({
	name: 'Орбитальная Станция Обороны',
	// Спецспособность: 10% шанс увеличить броню всей обороны на 50% перед первым раундом атаки
	// Сигнатура орудий: Турели - 10000 урон, сигнатура 50; Плазменные орудия - 50000 урон, сигнатура 300; Бортовые орудия - 200000 урон, сигнатура 1000. Сигнатура установки - 50000.
	engName: 'deforbital',
	description: 'Описание Орбитальной Станции Обороны',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс увеличить броню всей обороны — ',
		aftertext: '%',		
		result: 10
		}
	}), new Game.Effect.Special({
		pretext: 'Броня увеличивается на ',
		aftertext: '% перед атакой',		
		result: 50
		})]
	basePrice: {		
		metals: 1200000,
		crystals: 350000,		
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 160000,
			max: 200000
		},
		life: 800000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.armadillo,
			Game.Unit.items.reptiles.fleet.shadow,
			Game.Unit.items.reptiles.fleet.blade			
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 90],
			[Game.Research.items.evolution.engineering,   85],
			[Game.Research.items.evolution.converter,     70],
			[Game.Building.items.military.oscd,           10]
		]
	}
});

new game.Unit({
	name: 'Орудие Судного Дня',
	// Уничтожает любую планету, кроме главной планеты любого консула. Перезарядка - месяц.
	// Спецспособность: 70% шанс нанести 1000000 урона флоту возле планеты (даже если это был флот другого консула или самого игрока), а также 40% шанс нанести дополнительно 5000000 урона.
	// Сигнатуры нет
	engName: 'doomsdaygun',
	description: 'Описание Орудия Судного Дня',
	effect: [new Game.Effect.Special({
		pretext: 'Шанс нанести 1 000 000 урона — ',
		aftertext: '%',		
		result: 70
		}
	}), new Game.Effect.Special({
		pretext: 'Шанс нанести дополнительно 5 000 000 урона — ',
		aftertext: '%',		
		result: 40
		})]
	basePrice: {		
		ruby_plasmoid: 500,
		time: 60 + 45
	},],
	characteristics: {
		damage: {
			min: 800000,
			max: 1000000
		},
		life: 0
	},
	targets: function() {
		return [
		// нет приоритетной цели, рандом
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 100],
			[Game.Research.items.evolution.engineering,   100],
			[Game.Research.items.military.void,            80],
			[Game.Building.items.evolution.doomsdaysizing, 10]
		]
	}
});

}