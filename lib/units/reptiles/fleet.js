initUnitsReptilesContentFleet = function () {

game.setToMenu = 'reptiles';
game.setToSide = 'fleet';

new game.ReptileUnit({
	name: 'Сферо',
	notImplemented: true,
	engName: 'sphero',
	description: 'Описание сферо',
	battleEffects: [{
		pretext: 'Спецспособность: наносит ',
		aftertext: '% урон по приоритетным целям',
		result: function(level) {
			return 200;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			var result = [];
			var keys = ['army.fleet.gammadrone', 'army.fleet.wasp', 'army.fleet.mirage'];
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (enemies[key] && enemies[key].life > 0) {
					var message = Game.Unit.battleEffects.moreDamage(2, unit, enemies[key]);
					if (message) {
						result.push(message);
					}
				}
			}
			return result.length > 0 ? result.join('\n') : false;
		}
	}],
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
		life: 150
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.gammadrone,
			Game.Unit.items.army.fleet.wasp,
			Game.Unit.items.army.fleet.mirage
		];
	}
});

new game.ReptileUnit({
	name: 'Клинок',
	engName: 'blade',
	description: 'Рептилии имеют очень мощный флот, а Клинок — самый быстрый космический истребитель-штурмовик из всех. В его классе нету иной техники равной ему. Клинок быстрый, он резок при манёврах и крайне опасен в ближнем бою. Ходят слухи, что пилотов этого аппарата Рептилии тренируют ещё с фазы яйца, воздействуя на развивающийся плод некими специальными волнами, меняющими цепочку ДНК. Ну или это наши пилоты такие криворукие по сравнению с пилотами Рептилий…',
	battleEffects: [{
		pretext: 'Спецспособность: ',
		aftertext: '% шанс не получить урон во время первой атаки',
		result: function(level) {
			return 20;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}
			return Game.Unit.battleEffects.evadeDamage(this.result(), unit);
		}
	}],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 320,
			max: 400
		},
		life: 700
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.gammadrone,
			Game.Unit.items.army.fleet.wasp,
			Game.Unit.items.army.fleet.mirage
		];
	}
});

new game.ReptileUnit({
	name: 'Ящер',
	notImplemented: true,
	engName: 'lacertian',
	description: 'Описание ящера',
	battleEffects: [{
		pretext: 'Спецспособность: ',
		aftertext: '% шанс уничтожить Мираж с 1 выстрела',
		result: function(level) {
			return 5;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.applyCriticalDamage(this.result(), unit, enemies['army.fleet.mirage']);
		}
	}],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 560,
			max: 700
		},
		life: 1500
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.mirage,
			Game.Unit.items.army.fleet.wasp,
			Game.Unit.items.army.fleet.gammadrone
		];
	}
});

new game.ReptileUnit({
	name: 'Виверна',
	notImplemented: true,
	engName: 'wyvern',
	description: 'Описание виверны',
	battleEffects: [{
		pretext: 'Спецспособность: на ',
		aftertext: '% больше урона наносит приоритетным целям (второе орудие)',
		result: function(level) {
			return 10;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			var result = [];
			var keys = ['army.fleet.frigate', 'army.fleet.truckc', 'army.fleet.cruiser'];
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (enemies[key] && enemies[key].life > 0) {
					var message = Game.Unit.battleEffects.moreDamage(1.1, unit, enemies[key]);
					if (message) {
						result.push(message);
					}
				}
			}
			return result.length > 0 ? result.join('\n') : false;
		}
	}],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: {
			min: 1600,
			max: 2000
		},
		life: 6000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.frigate,
			Game.Unit.items.army.fleet.truckc,
			Game.Unit.items.army.fleet.cruiser
		];
	}
});

new game.ReptileUnit({
	name: 'Трионикс',
	engName: 'trioniks',
	description: 'Триониксы — это грузовые корабли рептилий: вооружения на них практически нет, кроме парочки небольших турелей на корпусе. В тоже время у этих кораблей довольно серьёзная броня и вместительные трюмы, в которых может быть много интересных вещей. Кто знает, что там перевозят Рептилоиды… Ресурсы? Артефакты? Голых Аргонианских Дев? Всё может быть, Консул… Не проверишь — не узнаешь.',
	battleEffects: [{
		pretext: 'Спецспособность: получает на ',
		aftertext: '% меньше урона от Гаммадрона',
		result: function(level) {
			return 50;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.reduceDamage(this.result(), unit, 'army.fleet.gammadrone');
		}
	}],
	basePrice: {
		humans: 150000,
		metals: 1000000,
		crystals: 750000,
		time: 100 * 60 * 60
	},
	characteristics: {
		damage: {
			min: 80,
			max: 100
		},
		life: 3500
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.gammadrone,
			Game.Unit.items.army.fleet.wasp,
			Game.Unit.items.army.fleet.mirage
		];
	}
});

new game.ReptileUnit({
	name: 'Дракон',
	engName: 'dragon',
	description: 'Я Драко-о-он! Простите, Консул, вырвалось… Дракон — довольно мощная машина уничтожения средних кораблей флота. Не могу сказать, что Дракон как-то разительно отличается от иных, подобных ему кораблей, однако это действительно сильный корабль: его урон высок, его броня крепка, а щиты работают бесперебойно и снять их очень сложно. Сам по себе дракон не очень опасен, небольшая армада Ос вполне может с ним справиться. Проблемы начинаются тогда, когда на вас движется флот Рептилий, где тысячи Драконов. Вот тогда уже становится далеко не до смеха.',
	battleEffects: [{
		pretext: 'Спецспособность: после смерти наносит ',
		aftertext: '% своего урона рандомной цели',
		result: function(level) {
			return 20;
		},
		onRoundEnd: function(unit, friends, enemies, round, options) {
			var damage = Math.floor(unit.model.characteristics.damage.max * 0.2);
			return Game.Unit.battleEffects.applyDamageToRandomTarget(damage, unit, enemies);
		}
	}],
	basePrice: {
		humans: 1500,
		metals: 30000,
		crystals: 10000,
		time: 3 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 3200,
			max: 4000
		},
		life: 11000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.battleship,
			Game.Unit.items.army.fleet.cruiser,
			Game.Unit.items.army.fleet.frigate
		];
	}
});

new game.ReptileUnit({
	name: 'Хайль-Гидра',
	engName: 'hydra',
	description: 'Хайль-Гидра, Консул, это крайне необычная херня, доложу я вам. Уж не знаю как рептилии до такого додумались, но при своих относительно невысоких показателях в броне или щитах, Гидра имеет целых 3 основных орудия и мощнейший энергетический комплекс, что позволяет ей разряжаться чуть ли не пулемётной очередью из всех орудий каждые несколько секунд. Хайль-Гидра наносит ужасающий урон по крупным кораблям, а мелкие просто испепеляет в ничто. Хайль-Гидра — это то, чего стоит бояться и избегать, я не шучу, Консул. Вы величайший правитель и мы все верим в вас, но наш противник тоже не слабак и этот страшный корабль тому отличный пример.',
	battleEffects: [{
		pretext: 'Спецспособность: во время первой атаки бьет только в одну цель, но со ',
		aftertext: '% урона',
		result: function(level) {
			return 150;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}

			var keys = ['army.fleet.dreadnought', 'army.fleet.carrier', 'army.fleet.battleship'];
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (enemies[key] && enemies[key].life > 0) {
					return Game.Unit.battleEffects.redirectDamageTo(1.5, unit, enemies[key], enemies);
				}
			}

			return false;
		}
	}],
	basePrice: {
		humans: 7500,
		metals: 70000,
		crystals: 5000,
		time: 5 * 60
	},
	characteristics: {
		damage: {
			min: 8000,
			max: 10000
		},
		life: 12000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.dreadnought,
			Game.Unit.items.army.fleet.carrier,
			Game.Unit.items.army.fleet.battleship
		];
	}
});

new game.ReptileUnit({
	name: 'Броненосец',
	engName: 'armadillo',
	description: 'Броненосцы — это корабли отвода огня, даже их суммарный урон не такой уж и высокий, зато это настоящие гигантские космические крепости с очень серьёзными показателями брони. Пробить Броненосца сможет далеко не каждый корабль нашего Флота и придётся серьёзно постараться, чтобы уничтожить Броненосец. Особенно если учесть, как они играют роль этакого фронтлайнера. Броненосцы вылетают вперёд своего флота и двигаются так, чтобы ловить на себя весь урон от ваших кораблей, при этом оставляя нетронутыми основные корабли-орудия флота Рептилий. Это крайне умный ход, Консул. Рептилии хитрые твари.',
	battleEffects: [{
		pretext: 'Спецспособность: во время первой атаки получает на ',
		aftertext: '% меньше урона',
		result: function(level) {
			return 90;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}
			return Game.Unit.battleEffects.reduceDamage(90, unit);
		}
	}],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 800,
			max: 1000
		},
		life: 50000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.wasp,
			Game.Unit.items.army.fleet.mirage,
			Game.Unit.items.army.fleet.frigate
		];
	}
});

new game.ReptileUnit({
	name: 'Призма',
	notImplemented: true,
	engName: 'prism',
	description: 'Описание призмы',
	battleEffects: [{
		pretext: 'Спецспособность: ',
		aftertext: '% шанс нанести урон еще 2-м целям во время первой атаки, каждая цель получит по 25% от начального урона',
		result: function(level) {
			return 50;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}
			return Game.Unit.battleEffects.prismAttack(this.result(), unit, enemies);
		}
	}],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 14400,
			max: 18000
		},
		life: 85000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.dreadnought,
			Game.Unit.items.army.fleet.railgun,
			Game.Unit.items.army.fleet.reaper
		];
	}
});

new game.ReptileUnit({
	name: 'Спрут',
	notImplemented: true,
	engName: 'octopus',
	description: 'Описание спрута',
	battleEffects: [{
		pretext: 'Спецспособность: наносит урон сразу по 3-м целям, и всем по ',
		aftertext: '% урона',
		result: function(level) {
			return 100;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.octopusAttack(unit, enemies);
		}
	}],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 12000,
			max: 15000
		},
		life: 100000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.cruiser,
			Game.Unit.items.army.fleet.frigate,
			Game.Unit.items.army.fleet.mirage
		];
	}
});

new game.ReptileUnit({
	name: 'Годзилла',
	notImplemented: true,
	engName: 'godzilla',
	description: 'Описание годзиллы',
	battleEffects: [{
		pretext: 'Спецспособность: ',
		aftertext: '',
		result: function(level) {
			return 'получает на 50% меньше урона в первой атаке, на 20% - во второй, на 5% - в третьей';
		},
		onAttack: function(unit, friends, enemies, round, options) {
			if (round == 1) {
				return Game.Unit.battleEffects.reduceDamage(50, unit);
			} else if (round == 2) {
				return Game.Unit.battleEffects.reduceDamage(20, unit);
			} else if (round == 3) {
				return Game.Unit.battleEffects.reduceDamage(5, unit);
			}
			return false;
		}
	}],
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: {
			min: 64000,
			max: 80000
		},
		life: 200000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.flagship,
			Game.Unit.items.army.fleet.reaper,
			Game.Unit.items.army.fleet.dreadnought
		];
	}
});

new game.ReptileUnit({
	name: 'Тень',
	engName: 'shadow',
	description: 'Тень. Честно говоря, Великий Консул, Тень Флота Рептилий встречали крайне мало людей, ещё меньше людей остались в живых, чтобы потом рассказать об этой встрече. Насколько нам известно, этот корабль вовсе не невидимый и не полностью чёрный или что-то вроде того, как могло показаться из его названия, вовсе нет. На самом деле Тень прозвали так из за его уникального основного орудия, которое создаёт небольшую гипердыру в центре вашего корабля. Эта гипердыра очень похожа на чёрную дыру, вот только она не затягивает в себя частицы и свет, а действует немного иначе… Создаёт этакий пузырь на стенках которого появляется некая энергия… Эх. Короче… Мы, блядь, понятия не имеем, что за хуетой стреляет этот корабль. Но она пиздец какая чёрная и разносит корабли на куски. Надеюсь вы никогда не встретите этот корабль Рептилий, Консул…',
	battleEffects: [{
		// Этот эффект не боевой, должен срабатывать после завершения боя при определенных условиях!
		notImplemented: true,
		pretext: 'Спецспособность: ',
		aftertext: '',
		result: function(level) {
			return '5% шанс уничтожить 1 уровень любого здания во время атаки на планету Консула';
		},
		onAttack: function(unit, friends, enemies, round, options) {
			return false; // TODO: implement later!
		}
	}],
	basePrice: {
		humans: 150000,
		metals: 1000000,
		crystals: 750000,
		time: 100 * 60 * 60
	},
	characteristics: {
		damage: {
			min: 400000,
			max: 500000
		},
		life: 1000000
	},
	targets: function() {
		return [
			Game.Unit.items.army.fleet.flagship,
			Game.Unit.items.army.fleet.reaper,
			Game.Unit.items.army.fleet.railgun
		];
	}
});

};