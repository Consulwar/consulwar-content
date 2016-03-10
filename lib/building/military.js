initBuildingContentMilitary = function () {

game.setToMenu = 'planet';
game.setToSide = 'military';

new game.Building({
	name: 'Казармы',
	engName: 'barracks',
	description: 'Пусть пешие войска этой вселенной и недалеко ушли от известных всем штурмовиков, однако и этих «бравых» ребят кто-то должен подготовить для войны против Рептилоидов. Казармы не просто место для обучения солдат — они также являются своего рода предприятием по изготовлению всего боевого арсенала: вооружения, брони и отдельных боевых систем. И хоть на наших бойцов без слёз не взглянешь, при должной подготовке от них можно добиться определённых успехов в бою. В конце концов, пехота — наша основная боевая единица в этой войне.',
	effect: new Game.Effect.Price({
		pretext: 'Пехота подготавливается на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'infantry'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}),
	basePrice: {
		metals: 150,
		crystals: 10
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.residential.house, 5],

			[Game.Research.items.evolution.alloy, 2]
		]
	}
});

new game.Building({
	name: 'Военный завод',
	engName: 'factory',
	description: 'Представьте хруст, с которым под сотнями тонн танка ломаются кости Рептилоида. Представьте, как растекаются мозги этого лживого зелёного ублюдка по влажной от крови земле и как кишки наматываются на гусеницы. Замечательно! Несомненно, военная техника — наше главное преимущество в этой войне. Наша пехота никогда не сможет похвастаться такими боевыми показателями, как хорошо смазанный и напичканный вооружением боевой робот или танк. Без техники нам не победить, Консул, а без военного завода не будет и самой техники. Полагаю, Великий Консул уже знает, для чего он выделит отдельную статью в бюджете.',
	effect: new Game.Effect.Price({
		pretext: 'Техника строится на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'enginery'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}),
	basePrice: {
		metals: 400,
		crystals: 20
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 3],

			[Game.Research.items.evolution.alloy, 6]
		]
	}
});

new game.Building({
	name: 'Аэродром',
	engName: 'airfield',
	description: '«У них члены больше чем у нас? Бомби их!» © Джордж Карлин. Авиация, разумеется, является крайне важным элементом на боевой карте Земли. Без поддержки с воздуха любую нашу армию разнесут в щепки превосходящие силы Рептилоидов. Аэродром в основном специализируется на подготовке и оснащении истребителей и бомбардировщиков для ведения боя в условиях атмосферы, однако многие разработки, ведущиеся здесь, крайне важны и для космических кораблей. Что превращает аэродром в необходимый для нашей миссии элемент военно-промышленного комплекса, Консул.',
	effect: new Game.Effect.Price({
		pretext: 'Авиация строится на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'air'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}),
	basePrice: {
		metals: 450,
		crystals: 390
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.factory, 2],

			[Game.Research.items.evolution.alloy, 7]
		]
	}
});

new game.Building({
	name: 'Верфь',
	engName: 'shipyard',
	description: 'Когда-то словом «верфь» называли заводы для строительства кораблей. Собственно, ничего не изменилось, кроме того, что современные корабли бороздят просторы не морей, а космоса. Отбить родную планету людей из Вселенной 42, конечно, первостепенная задача, но не стоит забывать, что Рептилоиды имеют множество колоний, станций и огромный флот, от которого и вашей колонии потребуется защита, иначе вас могут просто уничтожить из космоса. Надеюсь только… Консул, вы же понимаете, что лучшая защита — нападение.',
	effect: new Game.Effect.Price({
		pretext: 'Флот строится на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}),
	basePrice: {
		metals: 600,
		crystals: 450
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 5],

			[Game.Research.items.evolution.alloy, 8]
		]
	}
});

new game.Building({
	name: 'Пси-центр',
	engName: 'psi',
	description: 'О том, что некоторые люди обладают воистину невероятными способностями, стало известно относительно недавно. Появление таких способностей связанно с тем, что люди много и часто путешествуют в космосе, бывают на разных планетах. Новый климат, бактерии и окружающая среда даже самых лояльных планет сделали иммунную систему некоторых людей уникальной. При правильном воздействии психотропных веществ из кристалина на подобных людей можно добиться невероятных результатов. Контроль сознания… Убивать Рептилоидов силой мысли — что может быть веселее? Пожалуй, исследования Пси-Центра не стоит обходить стороной, Консул.',
	effect: new Game.Effect.Price({
		pretext: 'Псионики подготавливается на ',
		aftertext: '% быстрее',
		condition: {
			//type: 'unit',
			//group: 'ground',
			name: 'psimans'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}),
	basePrice: {
		metals: 100,
		crystals: 250
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 5],

			[Game.Research.items.evolution.energy, 12],
			[Game.Research.items.evolution.alloy, 15]
		]
	}
});

new game.Building({
	name: 'Лаборатории',
	engName: 'laboratory',
	description: 'Можно сотню лет танцевать с бубном и верить в летающих по воздуху существ. Потом ещё тысячу лет придумывать сказочки о живущих на небе мужиках и взрываться каждый раз при упоминании твоего любимого героя из фантастических книжек. Но настоящая магия начинается там, где есть наука! Именно наука вывела нас в космос, именно наука помогла людям привести вас, Консул, в их вселенную. И именно наука поможет нам всем победить Рептилоидов! Ну или Летающий Макаронный Монстр… Он тоже может…',
	effect: new Game.Effect.Price({
		pretext: 'Исследования на ',
		aftertext: '% быстрее',
		condition: {
			type: 'research',
			group: 'evolution'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 2;
		}
	}),
	basePrice: {
		metals: 30,
		crystals: 15
	},
	maxLevel: 30
});

new game.Building({
	name: 'Врата',
	engName: 'gates',
	description: 'Врата — это экспериментальный объект, военное здание нового поколения, которое использует самые передовые разработки в области квантовой физики. Именно с их помощью была налажена связь с Консулами из нашего мира.  Существует теория, что подобным образом можно открыть портал и установить более чёткую связь с мирами, что находятся ближе, а, возможно, даже и путешествовать по другим вселенным. Кто знает? Тем не менее, Врата — передовое научное строение. Открытия, совершённые в этих стенах, можно ставить на поток и использовать для военных нужд.',
	effect: new Game.Effect.Price({
		pretext: 'Снижает стоимость на ',
		aftertext: '% кристаллов',
		priority: 2,
		affect: 'crystals',
		result: function(level) {
			level = level || this.level; 
			return level;
		}
	}),
	basePrice: {
		honor: 100000,
		metals: 500000,
		crystals: 500000
	},
	maxLevel: 5,
	requirements: function() {
		return [
			[Game.Building.items.military.psi, 10],

			[Game.Research.items.evolution.energy, 15],
			[Game.Research.items.evolution.alloy, 17],
			[Game.Research.items.evolution.nanotechnology, 12]
		]
	}
});

new game.Building({
	name: 'Бездна',
	engName: 'void',
	description: 'Если верно настроить Врата, то можно установить связь с ближайшими мирами. Один из таких миров учёные назвали Бездной. Дело в том, что все события, происходящие в том мире, по каким-то причинам крайне негативны, отвратны и жестоки. Бездна находится вне нашего понимания, и её населяют отнюдь не самые приятные существа. И всё же… На что не пойдёшь ради науки или спасения своей жизни? Люди Вселенной 42 настолько утомлены изнуряющей войной с рептилиями, что готовы пойти даже на такой рискованный шаг. Поддержите ли вы их, Консул? Откроете ли вы врата в… Бездну?',
	effect: new Game.Effect.Income({
		pretext: 'Уменьшает приток населения на ',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return -level;
		}
	}),
	basePrice: {
		metals: 10000,
		crystals: 10000
	},
	maxLevel: 1,
	requirements: function() {
		return [
			[Game.Building.items.military.gates, 2],

			[Game.Research.items.evolution.energy, 15],
			[Game.Research.items.evolution.alloy, 20],
			[Game.Research.items.evolution.nanotechnology, 15]
		]
	}
});

new game.Building({
	name: 'Инженерный комплекс',
	engName: 'complex',
	description: 'В условиях военного времени инженеры — очень важные ребята. Пытливый ум и тяга к созданию чего-то колоссального, как по своим размерам, так и возможностям, несомненно пригодятся при создании новых видов вооружения и боевой техники. Конечно, основной задачей инженеров является создание оборонного комплекса, который поможет удержать позиции на Земле и не позволит Рептилоидам перехватить инициативу. В тоже время разработки Инженерного комплекса могут пригодиться и в других сферах. Не стоит недооценивать возможности технических наук, Консул.',
	effect: new Game.Effect.Price({
		pretext: 'Оборонительные единицы строятся на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'defence'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 1;
		}
	}),
	basePrice: {
		metals: 500,
		crystals: 30
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.military.factory, 15],

			[Game.Research.items.evolution.energy, 17],
			[Game.Research.items.evolution.alloy, 19],
			[Game.Research.items.evolution.nanotechnology, 14]
		]
	}
});
/*
new game.Building({
	name: 'Орбитальная станция',
	engName: 'orbital',
	description: 'Что вы представляете, Консул, когда слышите словосочетание «орбитальная станция»? Пару капсул с понатыканными на них солнечными батареями? Это мы, в своём мире, тратим время на то, чтобы окроплять космические корабли святой водой. А во Вселенной 42 люди не занимаются глупостями. Космическая станция обороны — это огромный комплекс боевых сегментов на орбите планеты, броня этого грандиозного сооружения практически непробиваема, а вооружение отличается невероятной точностью и мощностью. Имей вы такой объект на орбите своей колонии, Консул, Чешуйчатые подумали бы дважды, прежде чем нападать на вас.',
	effect: {
		name: 'Мощь оборонной станции',
		result: function(level) {
			level = (level == undefined ? this.level : level);
			return level;
		}
	},
	basePrice: {
		//humans: 400000,
		metals: 12000000,
		crystals: 10000000,
		//time: 60 * 8000
	},
	characteristics: {
		damage: 350000,
		life: 10000000
	},
	targets: [
		'shadow',
		'hydra',
		'blade'
	],
	maxLevel: 1,
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 20],

			[Game.Research.items.evolution.energy, 20],
			[Game.Research.items.evolution.alloy, 22],
			[Game.Research.items.evolution.sleepsafe, 1]
		]
	}
});*/


}