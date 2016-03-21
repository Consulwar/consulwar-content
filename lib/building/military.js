initBuildingContentMilitary = function () {

game.setToMenu = 'planet';
game.setToSide = 'military';

new game.Building({
	name: 'Лаборатории',
	engName: 'laboratory',
	description: 'Можно сотню лет танцевать с бубном и верить в летающих по воздуху существ. Потом ещё тысячу лет придумывать сказочки о живущих на небе мужиках и взрываться каждый раз при упоминании твоего любимого героя из фантастических книжек. Но настоящая магия начинается там, где есть наука! Именно наука вывела нас в космос, именно наука помогла людям привести вас, Консул, в их вселенную. И именно наука поможет нам всем победить Рептилоидов! Ну или Летающий Макаронный Монстр… Он тоже может…',
	effect: [new Game.Effect.Price({
		pretext: 'Исследования на ',
		aftertext: '% быстрее',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Price({
		pretext: 'Дополнительное ускорение ',
		aftertext: '%',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 20, 30, 40, 50][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ Осколки кристалла
		// 60+ элементы питания
		// 80+ плазменные транзисторы
		metals: 30,
		crystals: 15
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Электростанция',
	engName: 'powerstation',
	description: 'Описание электростанции',
	effect: [new Game.Effect.Price({
		pretext: 'Исследования на ',
		aftertext: '% дешевле',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Price({
		pretext: 'Дополнительное удешевление ',
		aftertext: '%',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return [0, 5, 10, 15, 20, 25][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ серебряный плазмоид
		// 60+ изумрудный плазмоид
		// 80+ сапфировый плазмоид
		metals: 30,
		crystals: 15
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.residential.house, 20]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.residential.house, 35],
				[Game.Building.items.residential.metal, 35]
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.residential.house,   50],
				[Game.Building.items.residential.metal,   50],
				[Game.Building.items.residential.crystal, 50]
			]
		} else {
			return [
				[Game.Building.items.residential.house,    65],
				[Game.Building.items.residential.metal,    65],
				[Game.Building.items.residential.crystal,  50],
				[Game.Research.items.evolution.energy,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Казармы',
	engName: 'barracks',
	description: 'Пусть пешие войска этой вселенной и недалеко ушли от известных всем штурмовиков, однако и этих «бравых» ребят кто-то должен подготовить для войны против Рептилоидов. Казармы не просто место для обучения солдат — они также являются своего рода предприятием по изготовлению всего боевого арсенала: вооружения, брони и отдельных боевых систем. И хоть на наших бойцов без слёз не взглянешь, при должной подготовке от них можно добиться определённых успехов в бою. В конце концов, пехота — наша основная боевая единица в этой войне.',
	effect: [new Game.Effect.Price({
		pretext: 'Стоимость подготовки пехоты на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'infantry'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.5;
		}
	}), new Game.Effect.Price({
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
			return [0, 10, 30, 50, 70, 90][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ части вооружения
		// 60+ технологии рептилий
		// 80+ сапфировый плазмоид
		metals: 150,
		crystals: 10
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Военный завод',
	engName: 'factory',
	description: 'Представьте хруст, с которым под сотнями тонн танка ломаются кости Рептилоида. Представьте, как растекаются мозги этого лживого зелёного ублюдка по влажной от крови земле и как кишки наматываются на гусеницы. Замечательно! Несомненно, военная техника — наше главное преимущество в этой войне. Наша пехота никогда не сможет похвастаться такими боевыми показателями, как хорошо смазанный и напичканный вооружением боевой робот или танк. Без техники нам не победить, Консул, а без военного завода не будет и самой техники. Полагаю, Великий Консул уже знает, для чего он выделит отдельную статью в бюджете.',
	effect: [new Game.Effect.Price({
		pretext: 'Стоимость строительства техники на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'enginery'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.4;
		}
	}), new Game.Effect.Price({
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
			return [0, 10, 20, 40, 60, 80][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ детали корабля
		// 60+ роторный усилитель
		// 80+ микросхемы
		metals: 400,
		crystals: 20
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Аэродром',
	engName: 'airfield',
	description: '«У них члены больше чем у нас? Бомби их!» © Джордж Карлин. Авиация, разумеется, является крайне важным элементом на боевой карте Земли. Без поддержки с воздуха любую нашу армию разнесут в щепки превосходящие силы Рептилоидов. Аэродром в основном специализируется на подготовке и оснащении истребителей и бомбардировщиков для ведения боя в условиях атмосферы, однако многие разработки, ведущиеся здесь, крайне важны и для космических кораблей. Что превращает аэродром в необходимый для нашей миссии элемент военно-промышленного комплекса, Консул.',
	effect: [new Game.Effect.Price({
		pretext: 'Стоимость строительства авиации на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'ground',
			special: 'air'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.3;
		}
	}), new Game.Effect.Price({
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
			return [0, 10, 15, 25, 50, 70][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ секретные технологии
		// 60+ квадрокуллер
		// 80+ киануривзий
		metals: 450,
		crystals: 390
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Верфь',
	engName: 'shipyard',
	description: 'Когда-то словом «верфь» называли заводы для строительства кораблей. Собственно, ничего не изменилось, кроме того, что современные корабли бороздят просторы не морей, а космоса. Отбить родную планету людей из Вселенной 42, конечно, первостепенная задача, но не стоит забывать, что Рептилоиды имеют множество колоний, станций и огромный флот, от которого и вашей колонии потребуется защита, иначе вас могут просто уничтожить из космоса. Надеюсь только… Консул, вы же понимаете, что лучшая защита — нападение.',
	effect: [new Game.Effect.Price({
		pretext: 'Стоимость строительства флота на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Price({
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
			return [0, 5, 10, 20, 30, 40][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ элементы питания
		// 60+ нанопроводка
		// 80+ джимкеррий
		metals: 600,
		crystals: 450
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});
/*
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
	maxLevel: 100,
	requirements: function() {
		return [
			[Game.Building.items.military.barracks, 5],

			[Game.Research.items.evolution.energy, 12],
			[Game.Research.items.evolution.alloy, 15]
		]
	}
});*/

new game.Building({
	name: 'Оборонный комплекс',
	engName: 'defensecomplex',
	description: 'Описание оборонного комплекса',
	effect: [new Game.Effect.Price({
		pretext: 'Стоимость строительства флота на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'defence'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = level || this.level; 
			return level * 0.3;
		}
	}), new Game.Effect.Price({
		pretext: 'Флот строится на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'defence'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 15, 25, 35, 50][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ секретные технологии
		// 60+ микросхемы
		// 80+ плазмоид
		metals: 500,
		crystals: 500
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
	//requirements: ?
});

new game.Building({
	name: 'Склад совета',
	engName: 'storage',
	description: 'Описание военного склада',
	effect: [new Game.Effect.Special({
		pretext: 'Поставка ресурсов за ежедневные задания +',
		aftertext: '%',
		result: function(level) {
			level = level || this.level; 
			return level * 0.5;
		}
	}), new Game.Effect.Special({
		pretext: '',
		aftertext: ' в день',
		result: function(level) {
			level = level || this.level; 
			return [
				'1 задание', 
				'2 задания', 
				'3 задания', 
				'4 задания', 
				'5 заданий',
				'6 заданий'
			][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 40+ Технологии рептилий
		// 60+ плазменные транзисторы
		// 80+ гариолдманий
		metals: 500,
		crystals: 500
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
	//requirements: ?
});

new game.Building({
	name: 'Врата',
	engName: 'gates',
	description: 'Врата — это экспериментальный объект, военное здание нового поколения, которое использует самые передовые разработки в области квантовой физики. Именно с их помощью была налажена связь с Консулами из нашего мира.  Существует теория, что подобным образом можно открыть портал и установить более чёткую связь с мирами, что находятся ближе, а, возможно, даже и путешествовать по другим вселенным. Кто знает? Тем не менее, Врата — передовое научное строение. Открытия, совершённые в этих стенах, можно ставить на поток и использовать для военных нужд.',
	effect: [new Game.Effect.Special({
		pretext: 'на ',
		aftertext: '% больше ресурсов за победы в космосе',
		result: function(level) {
			level = level || this.level; 
			return level * 0.1;
		}
	}), new Game.Effect.Special({
		pretext: 'Дополнительные ',
		aftertext: '% в день',
		result: function(level) {
			level = level || this.level; 
			return [0, 2, 5, 8, 10, 15][Math.floor(level / 20)];
		}
	})],
	basePrice: {
		// 40+ квадрокулер
		// 60+ николаскейджий
		// 80+ схемы древних
		metals: 500,
		crystals: 500
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Бездна',
	engName: 'void',
	description: 'Если верно настроить Врата, то можно установить связь с ближайшими мирами. Один из таких миров учёные назвали Бездной. Дело в том, что все события, происходящие в том мире, по каким-то причинам крайне негативны, отвратны и жестоки. Бездна находится вне нашего понимания, и её населяют отнюдь не самые приятные существа. И всё же… На что не пойдёшь ради науки или спасения своей жизни? Люди Вселенной 42 настолько утомлены изнуряющей войной с рептилиями, что готовы пойти даже на такой рискованный шаг. Поддержите ли вы их, Консул? Откроете ли вы врата в… Бездну?',
	effect: [new Game.Effect.Income({
		pretext: 'Уменьшает приток населения на ',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level == 0 || level == 100 ? 0 : 10 - ((level - 1) * 0.1);
		}
	}), new Game.Effect.Price({
		pretext: 'Снижает необходимую жертву для потерянных на ',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'ground',
			name: 'lost'
		},
		priority: 2,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 20, 30, 40, 50][Math.floor(level / 20)]
		}
	})],
	basePrice: {
		// 1+ изумрудный плазмоид
		// 20+ сапфировый плазмоид
		// 40+ аметистовый плазмоид
		// 60+ топазовый плазмоид
		// 80+ рубиновый плазмоид
		metals: 1000,
		crystals: 1000
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Инженерный комплекс',
	engName: 'complex',
	description: 'В условиях военного времени инженеры — очень важные ребята. Пытливый ум и тяга к созданию чего-то колоссального, как по своим размерам, так и возможностям, несомненно пригодятся при создании новых видов вооружения и боевой техники. Конечно, основной задачей инженеров является создание оборонного комплекса, который поможет удержать позиции на Земле и не позволит Рептилоидам перехватить инициативу. В тоже время разработки Инженерного комплекса могут пригодиться и в других сферах. Не стоит недооценивать возможности технических наук, Консул.',
	effect: [new Game.Effect.Military({
		pretext: 'Урон оборонительных сооружений +',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'defence'
		},
		priority: 2,
		affect: 'damage',
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Special({
		pretext: 'Единоразовый бонус ',
		aftertext: '',
		result: function(level) {
			level = level || this.level; 
			switch(level) {
				case 20:
					return '100 мин';
				case 40:
					return '100 турелей';
				case 60:
					return '100 снайпер-ганов';
				case 80:
					return '100 плазменных убийц';
				case 100:
					return '100 кристалл-ганов';
				default:
					return 0;
			}
		}
	})],
	basePrice: {
		// 40+ гариолдманий
		// 60+ технология древних
		// 80+ рубиновый плазмоид
		metals: 500,
		crystals: 30
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
	}
});

new game.Building({
	name: 'Фабрика ОСКО',
	engName: 'oscd',
	description: 'Описание фабрики ОСКО',
	effect: [new Game.Effect.Military({
		pretext: 'Броня космических станций +',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'defence',
			name: 'orbital'
		},
		priority: 2,
		affect: 'life',
		result: function(level) {
			level = level || this.level; 
			return level * 0.2;
		}
	}), new Game.Effect.Special({
		pretext: '+',
		aftertext: '% к шансу срабатывания спецспособности орбитальных станций',
		result: function(level) {
			level = level || this.level; 
			return [0, 10, 20, 40, 60, 80][Math.floor(level / 20)];
		}
	})],
	basePrice: {
		// 40+ джимкерий
		// 60+ знания древних
		// 80+ рубиновый плазмоид
		metals: 500,
		crystals: 30
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 21) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 41) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			]
		} else if (level < 61) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20],
			]
		} else if (level < 81) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			]
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			]
		}	
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