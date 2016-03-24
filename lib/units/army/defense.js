initUnitsArmyContentDefense = function () {

game.setToMenu = 'army';
game.setToSide = 'defense';

new game.Unit({
	name: 'Мины',
	// Спецспособность: принимает на себя 40% урона первой атаки
	// Сигнатура орудий: Термовоздействие - 200 урон, сигнатура 100. Сигнатура установки - 20.
	engName: 'bomb',
	description: 'Описание мин',
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
			[Game.Building.items.military.defensecomplex, 20]
			[Game.Building.items.evolution.engineering,    5]
		]
	}
});

new game.Unit({
	name: 'Лазерная Турель',
	// Спецспособность: наносит полный урон даже не приоритетным целям
	// Сигнатура орудий: Лазерная пушка - 1500 урон, сигнатура 50. Сигнатура установки - 350.
	engName: 'laserturret',
	description: 'Описание лазерной турели',
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
			[Game.Building.items.military.defensecomplex, 30]
			[Game.Building.items.evolution.engineering,   20]
		]
	}
});

new game.Unit({
	name: 'Снайпер Ган',
	// Спецспособность: 20% шанс не получить урон в первом раунде
	// Сигнатура орудий: Импульсный луч - 3000 урон, сигнатура 150. Сигнатура установки - 500.
	engName: 'snipergun',
	description: 'Описание снайпер гана',
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
			[Game.Building.items.military.defensecomplex, 40]
			[Game.Building.items.evolution.engineering,   35]
		]
	}
});

new game.Unit({
	name: 'Рельсовая Пушка',
	// Спецспособность: 40% уничтоженных пушек восстанавливается после боя
	// Сигнатура орудий: Импульсный луч - 12000 урон, сигнатура 300. Сигнатура установки - 1000.
	engName: 'railcannon',
	description: 'Описание рельсовой пушки',
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
			[Game.Building.items.military.defensecomplex, 50]
			[Game.Building.items.evolution.engineering,   45]
		]
	}
});

new game.Unit({
	name: 'Плазменный Убийца',
	// Спецспособность: 30% шанс уничтожить 1-го Дракона до боя
	// Сигнатура орудий: Плазменный резак - 8000 урон, сигнатура 100. Сигнатура установки - 2000.
	engName: 'railcannon',
	description: 'Описание рельсовой пушки',
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
			[Game.Building.items.military.defensecomplex, 50]
			[Game.Building.items.evolution.engineering,   45]
		]
	}
});

}