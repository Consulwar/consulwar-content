initResearchContentFleetUps = function () {

game.setToMenu = 'research';
game.setToSide = 'fleetups';

new game.Research({
	name: 'Усиление Гаммадрона',
	engName: 'gammabetaalpha',
	description: 'После усиления брони и вооружения Дроны становятся ещё более опасным оружием в войне с проклятыми Рептилоидами. Благодаря улучшению конвейеров на заводах, мы сможем производить больше дронов, совокупная мощность которых сравни сильнейшим кораблям Галактики. При этом их новые системы наведения сделают возможным принимать урон на себя. То есть дешёвые дроны будут получать урон вместо дорогих кораблей.',
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
	engName: 'royalwasphornet',
	description: 'Осы – опасные штурмовые корабли, их мощь Рептилоиды зря недооценивают, а мы и рады будем этим воспользоваться. Как вам известно, Консул, у Осы присутствует система крепления к кораблям противника – её хвост; а также у неё есть система плазменных резаков на днище корабля, способная прорезать корпуса кораблей. При усилении Осы и её систем корабли данного типа будут иметь возможность подлетать к средним кораблям Рептилоидов и уничтожать их в ближнем бою. Правда, и Осу мы тоже потеряем…',
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
	engName: 'mirageghostphantom',
	description: 'Мираж разрабатывался как корабль-невидимка, но, к сожалению, на все 100% этого достичь не удалось, и вряд ли удастся в ближайшее время. Однако, чем больше средств будет направлено на разработку усилений и улучшений данного корабля, тем мощнее будет его вооружение, его броня, а самое главное – его система «стелс». Таким образом, Мираж сможет избегать урона во время атаки, при этом сам будет неукоснительно карать своих врагов.',
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
	engName: 'frigatesupportbattle',
	description: 'Фрегат – потрясающий корабль. Его основная задача – вступать в бой с быстрыми истребителями и штурмовиками Ящериц. Впрочем, и кораблям покрупнее он может дать отпор, но всё же его боевые системы рассчитаны на огонь по шустрым целям. И с каждым усилением орудия становятся мощнее, их точность выше и убойная сила круче! Клинки Рептилоидов точно не скажут вам спасибо, когда вы выставите против них усиленный Фрегат.',
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
	engName: 'truckctruckbtrucka',
	description: 'Траки – это небоевые корабли, однако же они участвуют в бою, они ремонтируют корабли союзников и собирают ценные детали на поле боя, чтобы ваши сражения окупались. Так или иначе, без средств к существованию любая война будет проиграна очень быстро. И Рептилоиды тоже это понимают, поэтому они не позволят беспрепятственно летать вашим тракам и собирать ценный материал. Боюсь, Консул, вам придётся улучшать системы управления этих кораблей, чтобы они могли не получать урон во время боя.',
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
	engName: 'cruiserlinearnonlinear',
	description: 'Улучшая мощность Крейсера, его орудий, его корпуса и других систем, вы уже делаете этот корабль чрезвычайно выгодным, Консул. Но что, если я вам скажу, что его систему залпа можно модифицировать, и в случаях, когда бой будет затяжным, когда уже ни у кого не будет ни энергии, ни сил на продолжение боя, Крейсер сможет разрядить двойную энергию реакторов в своих врагов? Это крайне неожиданный и действительно полезный ход, Консул.',
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
	engName: 'battleshipquadhex',
	description: 'Линкоры – это броня нашего флота. Его усиление просто необходимо, иначе Линкоры не смогут держать столько урона, сколько потребуется в сражениях против мощных кораблей Чешуйчатых. Мы также сможем разработать новые листы корпуса для кораблей класса Линкор, и эти листы позволят им получать гораздо меньше урона от всех типов атак, что сделает эти корабли настоящими космическими крепостями.',
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
	engName: 'carrierbaseprojectx',
	description: 'Как вам должно быть известно, основной урон Авианосцы наносят с помощью Дронов. На борту Авианосцев находятся настоящие заводы по производству всё новых и новых дронов. Вкупе с Траками, собирающими материал, прямо во время боя Авианосцы способны долгое время снабжать наши союзные корабли огневой поддержкой. Более того, улучшенные Авианосцы могут восстановить часть потерянных дронов в бою, что сэкономит вам кучу ресурсов, Консул.',
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
	engName: 'dreadnoughtbeamplasma',
	description: 'Дредноуты людей – это довольно специфические корабли. И хотя они обладают надёжными бронёй и вооружением, их всё же нельзя назвать крепостями-убийцами. После усиления они, конечно, смогут сдержать намного больше урона, но всё же учёные и инженеры в их конструкции делают упор на вооружение. Орудиям Дредноута нужно время, чтобы разогреться, но как только это произойдёт, первые цели на пути Дредноута будут получать колоссальный урон.',
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
	engName: 'railgunsniperartillery',
	description: 'Усиливать ли главный снайперский корабль Империи людей? Хм… Ну, я даже не знаю. Если вы собираетесь сражаться против мелких и юрких кораблей вроде Сферо или Клинка, то, само собой, нет. Однако же, если вы доросли до серьёзной битвы, и ваш противник не кто иной, как Тень… Уж поверьте, Консул, пара десятков точных, мощных, всепрошибающих выстрелов от Рейлганов положат даже такого здоровяка, как Тень Рептилоидов.',
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
	engName: 'reaperancientmythical',
	description: 'Пожинателей собирали по схемам из другой вселенной. Мы, конечно, можем налепить на них больше брони и орудий, но здесь главное – это исследования самой системы корабля, внутри которой нас ждёт ещё очень много тайн. Например, усиленные Пожинатели после смерти способны самоуничтожаться, высвобождая огромное количество энергии; причём эта энергия не воздействует на союзные корабли, но в клочья разносит вражеские. Кто знает, что ещё таит в себе это металлическое страшилище.',
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
	engName: 'flagshiproyalimperial',
	description: 'Флагман управляется аватаром Консула. И хоть сам Консул всё ещё в безопасности в своей вселенной, сидит у компа… Простите, системы управления и командует своей империей, всё же Истинный образ Генерала, командующего атакой на личном Флагмане, воодушевляет солдат. Не говоря уже о том, что Флагман – это самое мощное передвижное орудие людей, и на заказ собирают не более одного флагмана для одного Консула. Как нельзя кстати здесь придётся усиление флагмана, дающее ему возможность возвращаться домой даже из самой жаркой задницы космических боёв.',
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