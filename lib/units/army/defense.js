initUnitsArmyContentDefense = function () {
'use strict';

game.setToMenu = 'army';
game.setToSide = 'defense';

new game.Unit({
	name: 'Мины',
	// Сигнатура орудий: Термовоздействие - 200 урон, сигнатура 100. Сигнатура установки - 20.
	engName: 'bomb',
	description: 'Мины — прекрасное средство против кораблей среднего размера. Огромные минные поля устанавливаются в местах, приоритетных для варп-прыжка. Крупные корабли без проблем могут выдерживать урон таких мин, зато корабли поменьше будут уничтожены сразу по прибытии.',
	battleEffects: [{
		pretext: 'принимают на себя ',
		aftertext: '% урона первой атаки',
		result: function(level) {
			return 40;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}
			return Game.Unit.battleEffects.takeFriendsDamage(this.result(), unit, friends);
		}
	}],
	basePrice: {
		metals: 500,
		time: 5
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
		];	
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 1]
		];
	}
});

new game.Unit({
	name: 'Ионные Мины',
	// Сигнатура орудий: Ионный взрыв - 500 урон, сигнатура 300. Сигнатура установки - 50.
	engName: 'ionbomb',
	description: 'О, это очень крутая штука, Консул. Ионная Мина притягивается к кораблям противника с помощью магнита. После детонации возникает несколько волн, которые воздействуют на корабли Рептилоидов: первая волна пробивает щиты, вторая прошивает корпус, а третья повреждает электронику. Отличный повод построить купол из таких мин вокруг своей планеты.',
	battleEffects: [{
		pretext: 'наносит ',
		aftertext: '% урона по приоритетным целям',
		result: function(level) {
			return 200;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			var keys = ['reptiles.fleet.blade', 'reptiles.fleet.blade', 'reptiles.fleet.lacertian'];
			return Game.Unit.battleEffects.moreDamageTargets(2, unit, enemies, keys);
		}
	}],
	basePrice: {
		credits: 5,
		time: 5
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
			Game.Unit.items.reptiles.fleet.sphero,
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.lacertian
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 10]
		];
	}
});

new game.Unit({
	name: 'Турель',
	// Сигнатура орудий: Лазерная пушка - 500 урон, сигнатура 20. Сигнатура установки - 200.
	engName: 'turret',
	description: 'Эти специализированные Турели, Консул, устанавливаются на дальних рубежах. Они не требуют перезарядки, так как заряжаются от солнечной энергии, и имеют угол обзора 360 градусов, осуществляемый за счет гравитационных двигателей. В основном Турели используются для уничтожения небольших и шустрых кораблей.',
	battleEffects: [{
		pretext: 'шанс нанести двойной урон ',
		aftertext: '%',
		result: function(level) {
			return 10;
		},
		onRoundStart: function(unit, friends, enemies, round, options) {
			if (!Game.Random.chance(this.result())) {
				return false;
			}
			return Game.Unit.battleEffects.multiplyCalculatedDamage(2, unit);
		}
	}],
	basePrice: {
		metals: 3000,
		crystals: 500,
		time: 60
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 20],
			[Game.Research.items.evolution.engineering,    5]
		];
	}
});

new game.Unit({
	name: 'Лазерная Турель',
	// Сигнатура орудий: Лазерная пушка - 1500 урон, сигнатура 50. Сигнатура установки - 350.
	engName: 'laserturret',
	description: 'Лазерные Турели — это следующая модификация обычных Турелей, принцип действия тот же. Находясь в отдалённой точке космоса, эти орудия способны крайне быстро и эффективно уничтожать небольшие корабли противника, ухитрившиеся подобраться слишком близко к вашей планете. Очень полезная штука, Консул.',
	battleEffects: [{
		pretext: 'наносит ',
		aftertext: '% урон одной из приоритетных целей',
		result: function(level) {
			return 100;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			var keys = ['reptiles.fleet.blade', 'reptiles.fleet.lacertian', 'reptiles.fleet.wyvern'];
			return Game.Unit.battleEffects.redirectDamageToTargets(1, unit, enemies, keys);
		}
	}],
	basePrice: {
		credits: 50,
		time: 60
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 30],
			[Game.Research.items.evolution.engineering,   20]
		];
	}
});

new game.Unit({
	name: 'Снайпер Ган',
	// Сигнатура орудий: Импульсный луч - 3000 урон, сигнатура 150. Сигнатура установки - 500.
	engName: 'snipergun',
	description: 'Такие орудия, как Снайпер Ган и Рельсовая Пушка, устанавливаются на специальных платформах на орбите вашей планеты. Они способны вести прицельный точечный огонь по хорошо бронированным кораблям. Дальность стрельбы позволяет этому орудию некоторое время избегать атак после начала боя.',
	battleEffects: [{
		pretext: 'шанс не получить урон в первом раунде ',
		aftertext: '%',
		result: function(level) {
			return 20;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}
			return Game.Unit.battleEffects.evadeTakenDamage(this.result(), unit);
		}
	}],
	basePrice: {
		metals: 20000,
		crystals: 10000,
		time: 60 * 5
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 40],
			[Game.Research.items.evolution.engineering,   35]
		];
	}
});

new game.Unit({
	name: 'Рельсовая Пушка',
	// Сигнатура орудий: Импульсный луч - 12000 урон, сигнатура 300. Сигнатура установки - 1000.
	engName: 'railcannon',
	description: 'Рельсовая Пушка просто необходима для любителей ваншот тактики. Корабли Рептилоидов средней мощности разлетаются в щепки от одного выстрела такого орудия, как Рельсовая Пушка. Эти орудия действительно могут перевернуть ход битвы несколькими залпами, Консул.',
	battleEffects: [{
		pretext: 'после боя восстанавливается ',
		aftertext: '% уничтоженных пушек',
		result: function(level) {
			return 40;
		},
		onBattleEnd: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.ressurectUnits(100, this.result() / 100, unit);
		}
	}],
	basePrice: {
		credits: 300,
		time: 60 * 5
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 50],
			[Game.Research.items.evolution.engineering,   45]
		];
	}
});

new game.Unit({
	name: 'Плазменный Убийца',
	// Сигнатура орудий: Плазменный резак - 8000 урон, сигнатура 100. Сигнатура установки - 2000.
	engName: 'plasmakiller',
	description: 'Мелкие и шустрые корабли Чешуйчатых постоянно обходят вашу оборону, потому что крупные орудия не могут по ним попасть, а простым пушкам не хватает урона, чтобы справиться с тысячами Истребителей? Это больше не проблема. Плазменный Убийца распидорасит на атомы этих надоедливых мошек, ведь у него просто превосходные параметры скорости атаки и урона.',
	battleEffects: [{
		pretext: 'шанс ',
		aftertext: '% уничтожить 1 Дракон до боя',
		result: function(level) {
			return 30;
		},
		onBattleStart: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.killUnit(this.result(), 1, unit, enemies['reptiles.fleet.dragon']);
		}
	}],
	basePrice: {
		metals: 80000,
		crystals: 20000,
		time: 60 * 20
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 60],
			[Game.Research.items.evolution.engineering,   55]
		];
	}
});

new game.Unit({
	name: 'Жидкоплазменный Тиран',
	// Сигнатура орудий: Плазменный резак - 45000 урон, сигнатура 200. Сигнатура установки - 5000.
	engName: 'tyrant',
	description: 'Когда Рептилии атакуют вас мощным флотом и выстраивают серьёзную оборону из крупных и тяжёлых кораблей, они точно не ожидают, что вы будете поливать их строй жидкой плазмой. Эта новейшая разработка в области вооружения способна, словно нож — масло, прорезать корабли ваших врагов насквозь. Изплазмительное орудие.',
	battleEffects: [{
		pretext: 'шанс ',
		aftertext: '% уничтожить 1 Броненосец до боя',
		result: function(level) {
			return 20;
		},
		onBattleStart: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.killUnit(this.result(), 1, unit, enemies['reptiles.fleet.armadillo']);
		}
	}],
	basePrice: {
		credits: 1000,
		time: 60 * 20
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 70],
			[Game.Research.items.evolution.engineering,   65]
		];
	}
});

new game.Unit({
	name: 'Кристалл-Ган',
	// Сигнатура орудий: Кристаллическая пушка - 20000 урон, сигнатура 500. Сигнатура установки - 8000.
	engName: 'crystalgun',
	description: 'Кристалл-Ган — это потрясающий пример оборонных технологий. Сам комплекс орудий устанавливается на планете, отчего уничтожить его становится довольно проблематично, при этом дальность атаки и точность этих орудий позволяют наносить огромный урон кораблям Зелёных тварей. Причём сконцентрированная в пушке энергия кристалла способна прошибать броню самых крупных кораблей.',
	battleEffects: [{
		pretext: 'Годзилла получает ',
		aftertext: '% урона',
		result: function(level) {
			return 150;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.moreDamage(1.5, unit, enemies['reptiles.fleet.godzilla']);
		}
	}],
	basePrice: {
		metals: 100000,
		crystals: 50000,
		time: 60 * 30
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 75],
			[Game.Research.items.evolution.engineering,   70]
		];
	}
});

new game.Unit({
	name: 'Трилинейный Кристалл-Ган',
	// Сигнатура орудий: Кристаллическая пушка - 250000 урон, сигнатура 1000. Сигнатура установки - 15000.
	engName: 'trilinear',
	description: 'Вершина технологической эволюции. Мощность этого орудия просто колоссальна, его концентрированная кристаллическая плазма награждает моментальным загаром тысячи Рептилоидов, находящихся на бортах крупных кораблей. Щиты ТКГ могут выдерживать огромное количество урона, так что разрушить эти орудия практически невозможно.',
	battleEffects: [{
		pretext: 'Тень получает ',
		aftertext: '% урона',
		result: function(level) {
			return 200;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.moreDamage(2, unit, enemies['reptiles.fleet.shadow']);
		}
	}],
	basePrice: {
		credits: 5000,
		time: 60 * 30
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 80],
			[Game.Research.items.evolution.engineering,   75]
		];
	}
});

new game.Unit({
	name: 'Орбитальная Станция Обороны',
	// Сигнатура орудий: Турели - 10000 урон, сигнатура 50; Плазменные орудия - 50000 урон, сигнатура 300; Бортовые орудия - 200000 урон, сигнатура 1000. Сигнатура установки - 50000.
	engName: 'deforbital',
	description: 'Космическая Станция Обороны —это гигантский боевой комплекс на орбите планеты. Броня этого грандиозного сооружения почти непробиваема, а вооружение отличается невероятной точностью и мощностью. Имей вы такой объект на орбите своей колонии, Консул, Чешуйчатые подумали бы дважды, прежде чем нападать на вас.',
	battleEffects: [{
		notImplemented: true,
		pretext: '',
		aftertext: '% шанс увеличить броню всей обороны на 50% перед первым раундом атаки',		
		result: function(level) {
			return 10;
		}/*,
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1 || !Game.Random.chance(this.result())) {
				return false;
			}

			var result = [];
			for (var key in friends) {
				if (friends[key].group == 'defense') {
					var message = Game.Unit.battleEffects.reduceTakenDamage(50, friends[key]);
					if (message) {
						result.push(message);
					}
				}
			}

			return result.length > 0 ? result.join('\n') : false;
		}*/
	}],
	basePrice: {
		metals: 1200000,
		crystals: 350000,
		time: 60 * 60 * 24
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 90],
			[Game.Research.items.evolution.engineering,   85],
			[Game.Research.items.evolution.converter,     70],
			[Game.Building.items.military.oscd,           10]
		];
	}
});

new game.Unit({
	name: 'Орудие Судного Дня',
	// Пока не готов функционал
	// Уничтожает любую планету, кроме главной планеты любого консула. Перезарядка - месяц.
	// 70% шанс нанести 1000000 урона флоту возле планеты (даже если это был флот другого консула или самого игрока), а также 40% шанс нанести дополнительно 5000000 урона.
	// Сигнатуры нет
	engName: 'doomsdaygun',
	description: 'Раз, два, Орудие Судного Дня заберёт тебя… Это не шутки, Консул. Это уникальное строение способно уничтожать целые планеты и всё, что находится рядом с ними. Его орудия сокрушительны настолько, что на их перезарядку уходит целая прорва времени. И всё же, Консул, будьте осторожны — это оружие способно изменить ход истории.',
	battleEffects: [{
		notImplemented: true,
		pretext: '',
		aftertext: '% шанс нанести 1 000 000 урона',
		result: function(level) {
			return 70;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return false; // TODO: implement later!
		}
	}, {
		notImplemented: true,
		pretext: '',
		aftertext: '% шанс нанести дополнительно 5 000 000 урона',
		result: function(level) {
			return 40;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return false; // TODO: implement later!
		}
	}],
	basePrice: {
		ruby_plasmoid: 500,
		time: 60 * 60 * 24 * 7
	},
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
		];
	},
	requirements: function() {
		return [
			[Game.Building.items.military.defensecomplex, 100],
			[Game.Research.items.evolution.engineering,   100],
			[Game.Building.items.military.void,            80],
			[Game.Research.items.evolution.doomsdaysizing, 10]
		];
	}
});

};