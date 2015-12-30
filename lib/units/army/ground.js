initUnitsArmyContentGround = function () {

game.setToMenu = 'army';
game.setToSide = 'ground';

new game.Unit({
	name: 'Отцы',
	engName: 'fathers',
	description: 'Да-да, те самые Папки, что наводнили интернет. Те самые школьники, что просиживают всё своё свободное время в Дотке. Те самые, что близко знакомы со всеми мамками в мире. Те самые бесполезные куски мяса, что коптят эту планету. Именно им была предоставлена честь идти в первых рядах на войну против Рептилоидов. Ну и пусть от них никакого толку, зато мы совместили приятное с полезным.',
	basePrice: {
		metals: 1750,
		humans: 1,
		time: 2
	},
	characteristics: {
		damage: {
			min: 8,
			max: 10
		},
		life: 24,
		attackAir: false
	},
	special: 'infantry',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.striker,
			Game.Unit.items.reptiles.ground.ripper,
			Game.Unit.items.reptiles.ground.horror
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 3],

			[Game.Research.items.evolution.energy, 3]
		]
	}
});

new game.Unit({
	name: 'Турникмэны',
	engName: 'horizontalbarman',
	description: 'Качаешься ты такой на турничке, и тут опа! — планета с колен поднимается и на войну с Рептилоидами отправляется. Дрыщавых Отцов, увы, не нагрузишь тяжёлым вооружением, так что другие мастера «бесполезной траты человеческого потенциала» пришлись весьма кстати. Благодаря своей недюжинной физической силе и практически полному отсутствию мозгов, Турникмэны крайне полезны в качестве тяжёлой пехоты с большими пушками. И если Папки, по сути, являются живым щитом между ордами рептилоидов и вашей Консульской задницей, то Турникмэны — это ваш мощный плевок в сторону техники ящерок. Вооружённые и обученные (в меру своих сил), они отлично справляются с авиацией и лёгкими танками, а если поблизости всё уже уничтожено, то возьмутся и за артиллерию.',
	basePrice: {
		humans: 1,
		metals: 1000,
		crystals: 600,
		time: 5
	},
	characteristics: {
		damage: {
			min: 27,
			max: 34
		},
		life: 16
	},
	special: 'infantry',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.amphibian,
			Game.Unit.items.reptiles.ground.slider,
			Game.Unit.items.reptiles.ground.geccon
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 6],

			[Game.Research.items.evolution.energy, 6]
		]
	}
});

new game.Unit({
	name: 'Псионики',
	engName: 'psimans',
	description: 'Псионики — до сих пор не до конца изученный феномен. Одни полагают, что мозг Псиоников работает так благодаря воздействию на него Рептилоидов. Другие считают, что это связано с излучением кристаллов, найденных в колониях. Однако, несмотря на причины таких изменений, Псионики остаются важной частью армии и переоценить их невозможно. Правда, не всё так хорошо. Подготовить настоящего Псионика крайне сложно, далеко не все люди с подходящей активностью мозга проходят тренировки. Лишь один из сотни подопытных в итоге получает способность контролировать мозговые импульсы и власть над разумом!',
	basePrice: {
		humans: 100,
		metals: 3000,
		crystals: 13500,
		time: 15
	},
	special: 'infantry',
	characteristics: {
		damage: {
			min: 0,
			max: 0
		},
		life: 60,
		effect: {
			name: 'Уничтожает определенный % войск противника' 
		}
	},
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 10],
			[Game.Building.items.military.psi, 1]
		]
	}
});

new game.Unit({
	name: 'Бгоневичок',
	engName: 'agmogedcar',
	description: 'Таки прототип Бгоневичка был изготовлен не в этой вселенной. Главнокомандующий ФШМ с Кибер-Пиратом и Товарищем Ульяновым изобрели эту крайне быструю и эффективную машинку для своих целей. После перемещения ФШМ во Вселенную 42 создание Бгоневичка стало одной из причин принятия его на высокие военные посты. Скорость и управляемость Бгоневичка позволяют ему быть настоящим «охотником» на воздушные войска и тяжёлую пехоту противника.',
	basePrice: {
		humans: 10,
		metals: 15000,
		crystals: 3500,
		time: 20
	},
	characteristics: {
		damage: {
			min: 100,
			max: 126
		},
		life: 330
	},
	special: 'enginery',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.ripper,
			Game.Unit.items.reptiles.ground.amfizben,
			Game.Unit.items.reptiles.ground.amphibian
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.factory, 5],

			[Game.Research.items.evolution.energy, 6]
		]
	}
});

new game.Unit({
	name: 'Танк Изи',
	engName: 'easytank',
	description: 'Танк Изи — это лёгкое манёвренное средство для уничтожения наземной техники Рептилоидов. Изобретённый ещё 20 лет назад, как платформа для исследования далёких колоний, Изи был улучшен и переоборудован для ведения боевых действий. Стабилизаторы и башня превратили Изи в настоящую проблему для Рептилий и их техники. Шустрый и опасный — чего ещё можно желать, Консул?',
	basePrice: {
		humans: 15,
		metals: 39000,
		crystals: 3000,
		time: 30
	},
	characteristics: {
		damage: {
			min: 211,
			max: 264
		},
		life: 780,
		attackAir: false
	},
	special: 'enginery',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.slider,
			Game.Unit.items.reptiles.ground.breaker,
			Game.Unit.items.reptiles.ground.crusher
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.factory, 7],

			[Game.Research.items.evolution.energy, 8]
		]
	}
});

new game.Unit({
	name: 'Танк Мамка',
	engName: 'mothertank',
	description: 'Мамка была изобретена специально для войны с Рептилоидами. Конечно же этот танк далеко не такой огромный как твоя мамка, и всё же его размеры впечатляют — одна основная башня высотой с двухэтажный дом. Сам же танк немного выше пятиэтажки. Маневрировать с такими размерами конечно же невозможно, однако Мамке это и не нужно. Она просто медленно двигается к цели и нагибает… двигается… и нагибает.',
	basePrice: {
		humans: 500,
		metals: 600000,
		crystals: 120000,
		time: 180
	},
	characteristics: {
		damage: {
			min: 1920,
			max: 2400
		},
		life: 24000
	},
	special: 'enginery',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.crusher,
			Game.Unit.items.reptiles.ground.slider,
			Game.Unit.items.reptiles.ground.breaker
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.factory, 10],

			[Game.Research.items.evolution.energy, 10]
		]
	}
});

new game.Unit({
	name: 'Артиллерия Елдак',
	engName: 'prickartillery',
	description: 'Основная цель Елдака — это уничтожение Оборонных Комплексов Рептилоидов. Оборонные установки помогают укрепить позиции и удерживать точки долгое время. Мы можем потратить огромное количество войск, потерять много жизней и израсходовать гигантское количество ресурсов. Или же мы можем просто накрыть их позиции огнём с небес!!! Именно из-за подобных ситуаций Елдак просто необходим в каждой армии. Если в твоей армии нет Елдака — ты не мужик!',
	basePrice: {
		humans: 20,
		metals: 150000,
		crystals: 100000,
		time: 480
	},
	characteristics: {
		damage: {
			min: 6400,
			max: 8000
		},
		life: 1500,
		attackAir: false
	},
	special: 'artillery',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.chipping,
			Game.Unit.items.reptiles.ground.crusher,
			Game.Unit.items.reptiles.ground.patron
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.complex, 10],

			[Game.Research.items.evolution.crystallization, 10]
		]
	}
});

new game.Unit({
	name: 'Скорострел',
	engName: 'fast',
	description: 'Быстрый, резкий, неумолимый воздушный убийца. Говорят, что инженер, создавший это чудо, ублажал себя всю ночь на схемы Скорострела, пока не умер от перенасыщения гормонами счастья. Дело в том, что Скорострел — действительно гениальное изобретение. Равных ему нет в воздухе. Даже Рептилоиды не добились таких успехов. Больше Скорострелов, Консул, и в небе мы будем короли!',
	basePrice: {
		humans: 5,
		metals: 10000,
		crystals: 4500,
		time: 30
	},
	characteristics: {
		damage: {
			min: 172,
			max: 216
		},
		life: 300,
		air: true
	},
	special: 'air',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.amphibian,
			Game.Unit.items.reptiles.ground.amfizben,
			Game.Unit.items.reptiles.ground.striker
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 5],

			[Game.Research.items.evolution.energy, 5]
		]
	}
});

new game.Unit({
	name: 'Бабуля',
	engName: 'grandmother',
	description: 'Уступите место бабуле? Бомбы со специальным Антирептилоидным зарядом носят аббревиатуру ПРЖК. Пилоты называют их «пирожки». А бомбер, несущий «пирожки» Рептилиям, прозвали Бабуля. Странно, почему не Красная Шапочка… Ну да ладно. Бабуля довольно медлительна по сравнению со Скорострелом, однако же имеет более крепкую броню и способна нанести гораздо больше урона технике и оборонительным постройкам противника.',
	basePrice: {
		humans: 100,
		metals: 120000,
		crystals: 60000,
		time: 180
	},
	characteristics: {
		damage: {
			min: 3456,
			max: 4320
		},
		life: 2400,
		air: true,
		attackAir: false
	},
	special: 'air',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.geccon,
			Game.Unit.items.reptiles.ground.chipping,
			Game.Unit.items.reptiles.ground.crusher
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],

			[Game.Research.items.evolution.energy, 8]
		]
	}
});


new game.Unit({
	name: 'Зона отдыха',
	engName: 'relax',
	description: 'Зона отдыха — крайне полезный оборонительный комплекс. Сбрасывается с орбиты в комплекте с наземными войсками, по приземлении сам разбирается и устанавливается на точке, навсегда закрепляясь на местности, и помогает держать оборону в случае контратаки Рептилий. Зона Отдыха — крайне дорогое удовольствие, но поверьте, Консул, оно того стоит.',
	basePrice: {
		humans: 10000,
		metals: 1500000,
		crystals: 540000,
		time: 3600
	},
	characteristics: {
		damage: {
			min: 34560,
			max: 43200
		},
		life: 120000
	},
	special: 'defence',
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.crusher,
			Game.Unit.items.reptiles.ground.amphibian,
			Game.Unit.items.reptiles.ground.patron
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.complex, 10],

			[Game.Research.items.evolution.energy, 15],
			[Game.Research.items.evolution.alloy, 15],
			[Game.Research.items.evolution.nanotechnology, 20]
		]
	}
});

new game.Unit({
	name: 'Потерянные',
	engName: 'lost',
	group: 'ground',
	description: 'Потерянные — это элитные воины Бездны. Их мир просто ужасен. Сказать, что эти создания выжили в аду — значит не сказать ничего. Потерянные не знают страха, не понимают сути сострадания, они не верят в богов и не приемлют контроль над собой. Потерянные не несут в себе никакой идеологии, они видят лишь цель и не остановятся ни перед чем. Это разумные создания, но иногда их действия граничат с безумием. Всё, что нужно Потерянным — жертвоприношение. После того, как души невинных переходят в бездну, из неё выходят Потерянные, готовые рвать на куски врагов тех, кто их призвал.',
	basePrice: {
		humans: 50000,
		time: 1
	},
	characteristics: {
		damage: {
			min: 12000,
			max: 15000
		},
		life: 25000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.toofucking,
			Game.Unit.items.reptiles.ground.slider,
			Game.Unit.items.reptiles.ground.striker
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 20],
			[Game.Building.items.military.void, 1],

			[Game.Research.items.evolution.energy, 25]
		]
	}
});

new game.Unit({
	name: 'ОБЧР',
	engName: 'hbhr',
	group: 'ground',
	description: 'ОБЧР, или Огромный Боевой Человекоподобный Робот, появился на вооружении армии людей не так давно. Сама идея создания подобной боевой машины поступила от Консулов при первом пробном подключении канала связи. Лучшие умы параллельной вселенной работали над созданием этого нового и крайне мощного вооружения и, надо признать, у них получилось. ОБЧР очень дорогой в эксплуатации и требует серьёзных затрат в подготовке к строительству, однако присутствие этой устрашающей боевой машины на поле боя может повернуть исход сражения в совсем иную сторону.',
	basePrice: {
		metals: 800000,
		crystals: 320000,
		humans: 4000,
		time: 7200
	},
	characteristics: {
		damage: {
			min: 20480,
			max: 25600
		},
		life: 48000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.ground.patron,
			Game.Unit.items.reptiles.ground.toofucking,
			Game.Unit.items.reptiles.ground.slider
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.factory, 25],
			[Game.Building.items.military.complex, 20],
			[Game.Building.items.military.gates, 1],

			[Game.Research.items.evolution.energy, 25]
		]
	}
});

}