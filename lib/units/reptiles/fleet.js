initUnitsReptilesContentFleet = function () {

game.setToMenu = 'reptiles';
game.setToSide = 'fleet';

new game.ReptileUnit({
	name: 'Сферо',
	notImplemented: true,
	engName: 'sphero',
	description: 'Сферо – это боевой дрон Рептилий особого назначения. Он достаточно быстрый, чтобы иметь возможность уворачиваться от огня противника, и достаточно мощный, чтобы наносить серьёзный урон небольшим кораблям. А самое опасное в Сферо – это его система наведения, которая откалибрована настолько хорошо, что часто он попадает в боеукладку с первого выстрела… Если вы понимаете, о чём я.',
	battleEffects: [{
		pretext: 'Спецспособность: наносит ',
		aftertext: '% урон по приоритетным целям',
		result: function(level) {
			return 200;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			var keys = ['army.fleet.gammadrone', 'army.fleet.wasp', 'army.fleet.mirage'];
			return Game.Unit.battleEffects.moreDamageTargets(2, unit, enemies, keys);
		}
	}],
	basePrice: {
		metals: 600,
		crystals: 250,
		time: 30
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
	description: 'Рептилии имеют очень мощный флот, а Клинок – самый быстрый космический истребитель-штурмовик из всех. В его классе нету иной техники равной ему. Клинок быстрый, он резок при манёврах и крайне опасен в ближнем бою. Ходят слухи, что пилотов этого аппарата Рептилии тренируют ещё с фазы яйца, воздействуя на развивающийся плод некими специальными волнами, меняющими цепочку ДНК. Ну, или это наши пилоты такие криворукие по сравнению с пилотами Рептилий…',
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
			return Game.Unit.battleEffects.evadeTakenDamage(this.result(), unit);
		}
	}],
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 750,
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
	description: 'Один из самых быстрых штурмовых кораблей Рептилоидов – это Ящер. Способен вести бой как в космосе, так и в условиях атмосферы. Его манёвренность вкупе со скоростью, бронёй и уроном делает его одним из лучших кораблей данного класса в галактике. И несомненно, лучшим среди массового производства. Без усиленного флота, заточенного под уничтожение манёвренных кораблей, столкнуться с эскадрой Ящеров – это неминуемая смерть.',
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
		humans: 50,
		metals: 3300,
		crystals: 1375,
		time: 200
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
	description: 'Виверна достаточно быстроходный крейсер зелёных чешуйчатых пиздюков, этот корабль – олицетворение их наглости и коварства. Тактика Рептилоидных адмиралов обычно строится вокруг способности Виверны на высокой скорости заходить на атаку с незащищённых областей, наносить серьёзный урон и снова скрываться в тени своего флота. Как ужас, летящий на крыльях ночи, Виверна появляется из ниоткуда и уходит в никуда, появляясь и нанося удары в самых неожиданных местах.',
	battleEffects: [{
		pretext: 'Спецспособность: на ',
		aftertext: '% больше урона наносит приоритетным целям (второе орудие)',
		result: function(level) {
			return 10;
		},
		onAttack: function(unit, friends, enemies, round, options) {
			var keys = ['army.fleet.frigate', 'army.fleet.truckc', 'army.fleet.cruiser'];
			return Game.Unit.battleEffects.moreDamageTargets(1.1, unit, enemies, keys);
		}
	}],
	basePrice: {
		humans: 100,
		metals: 13500,
		crystals: 4500,
		time: 500
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
	description: 'Триониксы – это грузовые корабли рептилий: вооружения на них практически нет, кроме парочки небольших турелей на корпусе. В тоже время у этих кораблей довольно серьёзная броня и вместительные трюмы, в которых может быть много интересных вещей. Кто знает, что там перевозят Рептилоиды… Ресурсы? Артефакты? Голых Аргонианских Дев? Всё может быть, Консул… Не проверишь — не узнаешь.',
	battleEffects: [{
		notImplemented: true,
		pretext: 'Спецспособность: получает на ',
		aftertext: '% меньше урона от Гаммадрона',
		result: function(level) {
			return 50;
		}/*,
		onAttack: function(unit, friends, enemies, round, options) {
			return Game.Unit.battleEffects.reduceTakenDamage(this.result(), unit, 'army.fleet.gammadrone');
		}*/
	}],
	basePrice: {
		humans: 150,
		metals: 1500,
		crystals: 300,
		time: 1200
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
	description: 'Я Драко-о-он! Простите, Консул, вырвалось… Дракон – довольно мощная машина уничтожения средних кораблей флота. Не могу сказать, что Дракон как-то разительно отличается от иных, подобных ему кораблей, однако это действительно сильный корабль: его урон высок, его броня крепка, а щиты работают бесперебойно, и снять их очень сложно. Сам по себе дракон не очень опасен, небольшая армада Ос вполне может с ним справиться. Проблемы начинаются тогда, когда на вас движется флот Рептилий, где тысячи Драконов. Вот тогда уже становится далеко не до смеха.',
	battleEffects: [{
		pretext: 'Спецспособность: после смерти наносит ',
		aftertext: '% своего урона рандомной цели',
		result: function(level) {
			return 20;
		},
		onRoundEnd: function(unit, friends, enemies, round, options) {
			var damage = Math.floor(unit.characteristics.damage.max * 0.2);
			return Game.Unit.battleEffects.hitRandomOnDeath(damage, unit, enemies);
		}
	}],
	basePrice: {
		humans: 1500,
		metals: 30000,
		crystals: 10000,
		time: 600
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
	description: 'Хайль-Гидра, Консул, это крайне необычная херня, доложу я вам. Уж не знаю, как рептилии до такого додумались, но при своих относительно невысоких показателях в броне или щитах, Гидра имеет целых три основных орудия и мощнейший энергетический комплекс, что позволяет ей разряжаться чуть ли не пулемётной очередью из всех орудий каждые несколько секунд. Хайль-Гидра наносит ужасающий урон по крупным кораблям, а мелкие просто испепеляет в ничто. Хайль-Гидра – это то, чего стоит бояться и избегать, я не шучу, Консул. Вы величайший правитель и мы все верим в вас, но наш противник тоже не слабак, и этот страшный корабль тому отличный пример.',
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
			return Game.Unit.battleEffects.redirectDamageToTargets(1.5, unit, enemies, keys);
		}
	}],
	basePrice: {
		humans: 7500,
		metals: 65000,
		crystals: 14000,
		time: 60 * 20
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
	description: 'Броненосцы – это корабли отвода огня. Даже суммарный урон у них не такой уж и высокий, зато это настоящие гигантские космические крепости с очень серьёзными показателями брони. Пробить Броненосца сможет далеко не каждый корабль нашего Флота, и придётся серьёзно постараться, чтобы уничтожить Броненосец. Особенно если учесть, как они играют роль этакого фронтлайнера. Броненосцы вылетают вперёд своего флота и двигаются так, чтобы ловить на себя весь урон от ваших кораблей, при этом прикрывая собой основные корабли-орудия флота Рептилий. Это крайне умный ход, Консул. Рептилии – хитрые твари.',
	battleEffects: [{
		notImplemented: true,
		pretext: 'Спецспособность: во время первой атаки получает на ',
		aftertext: '% меньше урона',
		result: function(level) {
			return 90;
		}/*,
		onAttack: function(unit, friends, enemies, round, options) {
			if (round != 1) {
				return false;
			}
			return Game.Unit.battleEffects.reduceTakenDamage(90, unit);
		}*/
	}],
	basePrice: {
		humans: 17000,
		metals: 82000,
		crystals: 25000,
		time: 30 * 60
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
	description: 'Основная задача Призмы в бою – это бить по крупным целям. Её орудия заряжены особыми ионными частицами, которые после попадания в цель, как электричество, тут же ищут выход в ближайшие цели, нанося урон и им тоже. Таким образом, Призма может уничтожать корабли, до которых прямым выстрелом не достать, а сама мощность орудия позволяет разносить в щепки даже такие крупные корабли, как Дредноут.',
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
		humans: 25000,
		metals: 170000,
		crystals: 60000,
		time: 60 * 60
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
	description: 'Несмотря на сплэш-урон Призмы, королём в уничтожении всех и сразу является, конечно же, Спрут. Его особая система вооружения создаёт сильное электромагнитное поле, которое при запуске спиралью закручивается в своего рода электроплазма-шар. Под действием гравитации, вызванной высокой скоростью вращения, этот плазма-шар взрывается в нужной точке, нанося серьёзный урон кораблям внутри взрыва и отключая их электронику. Обычно Спрутов используют для уничтожения кораблей среднего класса – они менее подвижны, и возле них часто много более мелких целей.',
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
		humans: 50000,
		metals: 86000,
		crystals: 155000,
		time: 60 * 60 * 4
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
	description: 'По своим габаритам Годзилла размером с Тень, однако не обладает такой же боевой мощью и бронёй, что не делает, однако, этот корабль менее значимым. Когда встречаешься с этим монстром лицом к лицу, понимаешь, насколько эта махина огромная. К тому же Годзилла оснащена серьёзной системой щитов, которые защищают её от многих видов атак. При этом вооружение данного корабля может дать фору даже Пожинателю людей, впрочем, только пока тот не усилен. Так или иначе, Годзилла не будет размениваться на мелкие корабли, она будет стрелять прямо по вашему Флагману, Консул.',
	battleEffects: [{
		notImplemented: true,
		pretext: 'Спецспособность: ',
		aftertext: '',
		result: function(level) {
			return 'получает на 50% меньше урона в первой атаке, на 20% - во второй, на 5% - в третьей';
		}/*,
		onAttack: function(unit, friends, enemies, round, options) {
			if (round == 1) {
				return Game.Unit.battleEffects.reduceTakenDamage(50, unit);
			} else if (round == 2) {
				return Game.Unit.battleEffects.reduceTakenDamage(20, unit);
			} else if (round == 3) {
				return Game.Unit.battleEffects.reduceTakenDamage(5, unit);
			}
			return false;
		}*/
	}],
	basePrice: {
		humans: 100000,
		metals: 600000,
		crystals: 200000,
		time: 60 * 60 * 24
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
	description: 'Тень. Честно говоря, Великий Консул, Тень Флота Рептилий встречали крайне мало людей, ещё меньше людей остались в живых, чтобы потом рассказать об этой встрече. Насколько нам известно, этот корабль вовсе не невидимый и не полностью чёрный или что-то вроде того, как могло показаться из его названия, вовсе нет. На самом деле Тень прозвали так из-за его уникального основного орудия, которое создаёт небольшую гипердыру в центре вашего корабля. Эта гипердыра очень похожа на чёрную дыру, вот только она не затягивает в себя частицы и свет, а действует немного иначе… Создаёт этакий пузырь, на стенках которого появляется некая энергия… Эх. Короче… Мы, блядь, понятия не имеем, что за хуетой стреляет этот корабль. Но она пиздец какая чёрная и разносит корабли на куски. Надеюсь, вы никогда не встретите этот корабль Рептилий, Консул…',
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
		metals: 3000000,
		crystals: 500000,
		time: 60 * 60 * 24 * 3
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