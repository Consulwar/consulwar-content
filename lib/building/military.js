initBuildingContentMilitary = function () {

game.setToMenu = 'planet';
game.setToSide = 'military';

new game.Building({
	name: 'Электростанция',
	notImplemented: true,
	engName: 'powerstation',
	description: 'Электростанция снабжает энергией всю военную структуру планеты. В жилых районах есть свои компактные энергетические комплексы, встроенные в дома, и их энергии вполне хватает на обеспечение всех нужд жильцов. Однако же для серьёзных военных сооружений и исследовательских станций нужно гораздо больше энергии.',
	effect: [new Game.Effect.Price({
		pretext: 'Исследования на ',
		aftertext: '% дешевле',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
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
			level = (level !== undefined ? level : this.level); 
			return [0, 5, 10, 15, 20, 25][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [50, Game.functions.slowExponentialGrow, 0],
				crystals: [30, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [60, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [2, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.silver_plasmoid = [3, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.emerald_plasmoid = [4, Game.functions.slowLinearGrow, 60];
			} else {
				price.sapphire_plasmoid = [6, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.residential.house, 20]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.residential.house, 35],
				[Game.Building.items.residential.metal, 35]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.residential.house,   50],
				[Game.Building.items.residential.metal,   50],
				[Game.Building.items.residential.crystal, 50]
			];
		} else {
			return [
				[Game.Building.items.residential.house,    65],
				[Game.Building.items.residential.metal,    65],
				[Game.Building.items.residential.crystal,  65],
				[Game.Research.items.evolution.energy,     80]
			];
		}	
	}
});

new game.Building({
	name: 'Лаборатория',
	engName: 'laboratory',
	description: 'Можно сотню лет танцевать с бубном и верить в летающих по воздуху существ, потом ещё тысячу лет придумывать сказочки о живущих на небе мужиках и взрываться каждый раз при упоминании твоего любимого героя из фантастических книжек, но настоящая магия начинается там, где есть наука. Именно наука вывела нас в космос, именно наука помогла этим людям привести вас, Консул, в их вселенную. И именно наука поможет нам всем победить Рептилоидов! Ну… Или Летающий Макаронный Монстр… Он тоже может…',
	effect: [new Game.Effect.Price({
		pretext: 'Исследования на ',
		aftertext: '% быстрее',
		condition: {
			type: 'research'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
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
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 20, 30, 40, 50][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [30, Game.functions.slowExponentialGrow, 0],
				crystals: [10, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [40, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.crystal_fragments = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.batteries = [5, Game.functions.slowLinearGrow, 60];
			} else {
				price.plasma_transistors = [5, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 5]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 15],
				[Game.Building.items.residential.spaceport, 1]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation, 30],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.military.barracks,     20]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 35],
				[Game.Building.items.military.barracks,     30],
				[Game.Research.items.evolution.science,     60]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 50],
				[Game.Building.items.military.barracks,     45],
				[Game.Research.items.evolution.science,     80]
			];
		}	
	}
});

new game.Building({
	name: 'Казармы',
	engName: 'barracks',
	description: 'Пусть пешие войска этой вселенной недалеко ушли от всем известных штурмовиков, однако кто-то же должен подготовить этих «бравых» ребят для войны против Рептилоидов. Помимо этого, Казармы также являются своего рода предприятием по изготовлению всего боевого арсенала: вооружения, брони и отдельных боевых систем. И хоть на наших солдат без слёз не взглянешь, при должной подготовке от них можно добиться определённых успехов в бою. В конце концов, пехота — наша основная боевая единица в этой войне.',
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
			level = (level !== undefined ? level : this.level); 
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
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 30, 50, 70, 90][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [150, Game.functions.slowExponentialGrow, 0],
				crystals: [10, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [50, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [1, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.weapon_parts = [3, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.reptile_technology = [4, Game.functions.slowLinearGrow, 60];
			} else {
				price.sapphire_plasmoid = [6, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 10]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 20],
				[Game.Building.items.military.laboratory,   20]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation, 35],
				[Game.Building.items.military.laboratory,   40],
				[Game.Building.items.residential.house,     30]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation, 60],
				[Game.Building.items.military.laboratory,   60],
				[Game.Building.items.residential.house,     50],
				[Game.Research.items.residential.alliance,  40]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation, 70],
				[Game.Building.items.military.laboratory,   80],
				[Game.Building.items.residential.house,     65],
				[Game.Research.items.residential.alliance,  60]
			];
		}	
	}
});

new game.Building({
	name: 'Военный завод',
	engName: 'factory',
	description: 'Представьте хруст, с которым ломаются кости рептилоида под сотнями тонн веса боевого танка, как растекаются мозги этого лживого зелёного ублюдка… Замечательно. Несомненно, военная техника — наше самое главное преимущество в этой войне. Наша пехота никогда не сможет похвастаться такими показателями, какие есть у хорошо смазанного и напичканного вооружением боевого робота или танка. Без техники нам не победить, Консул, а без Военного Завода не будет и самой техники. Полагаю, Великий Консул уже знает, куда следует вложить инвестиции.',
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
			level = (level !== undefined ? level : this.level); 
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
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 20, 40, 60, 80][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [400, Game.functions.slowExponentialGrow, 0],
				crystals: [20, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [150, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [3, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.ship_details = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.rotary_amplifier = [5, Game.functions.slowLinearGrow, 60];
			} else {
				price.chip = [6, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 15]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 25],
				[Game.Building.items.military.barracks,     20]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation, 40],
				[Game.Building.items.military.barracks,     30],
				[Game.Building.items.military.airfield,     30]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.military.barracks,     40],
				[Game.Building.items.military.airfield,     40],
				[Game.Research.items.military.shipyard,     45]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation, 75],
				[Game.Building.items.military.barracks,     50],
				[Game.Building.items.military.airfield,     50],
				[Game.Research.items.military.shipyard,     60]
			];
		}	
	}
});

new game.Building({
	name: 'Военный аэродром',
	engName: 'airfield',
	description: '«У них члены больше чем у нас? Бомби их!» © Джордж Карлин. Авиация, разумеется, является крайне важным элементом на боевой карте Земли. Без поддержки с воздуха любую нашу армию разнесут в щепки превосходящие силы Рептилоидов. Аэродром в основном специализируется на подготовке и оснащении истребителей и бомбардировщиков для ведения боя в условиях атмосферы, однако многие разработки, ведущиеся здесь, крайне важны и для космических кораблей. Что превращает Аэродром в необходимый для нашей миссии элемент военно-промышленного комплекса, Консул. ',
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
			level = (level !== undefined ? level : this.level); 
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
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 15, 25, 50, 70][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [450, Game.functions.slowExponentialGrow, 0],
				crystals: [390, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [350, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [6, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.secret_technology = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.quad_cooler = [6, Game.functions.slowLinearGrow, 60];
			} else {
				price.keanureevesium = [4, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 20]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 35],
				[Game.Building.items.residential.spaceport,  5]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Building.items.residential.spaceport, 20],
				[Game.Building.items.residential.alliance,  20]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation, 55],
				[Game.Building.items.residential.spaceport, 45],
				[Game.Building.items.residential.alliance,  40],
				[Game.Research.items.military.shipyard,     35]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Building.items.residential.spaceport, 65],
				[Game.Building.items.residential.alliance,  60],
				[Game.Research.items.military.shipyard,     55]
			];
		}	
	}
});

new game.Building({
	name: 'Верфь',
	engName: 'shipyard',
	description: 'Когда-то этим словом называли заводы по строительству кораблей. Собственно, с тех пор ничего не изменилось, кроме того, что современные корабли господствуют не в водной стихии, а в космосе. Отбить родную планету людей из этой вселенной — крайне важное и первостепенное задание, но ведь Рептилоиды имеют множество колоний и станций, их флот несомненно огромен и вашей колонии потребуется защита, Консул. Иначе вас могут просто уничтожить из космоса. Надеюсь, вы понимаете, что лучшая защита — это нападение.',
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
			level = (level !== undefined ? level : this.level); 
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
			level = (level !== undefined ? level : this.level); 
			return [0, 5, 10, 20, 30, 40][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [600, Game.functions.slowExponentialGrow, 0],
				crystals: [450, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [500, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [7, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.batteries = [5, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.nanowires = [6, Game.functions.slowLinearGrow, 60];
			} else {
				price.jimcarrium = [4, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 25]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 40],
				[Game.Building.items.military.airfield,     30]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation,   50],
				[Game.Building.items.military.airfield,       40],
				[Game.Building.items.military.defensecomplex, 20]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation,   60],
				[Game.Building.items.military.airfield,       50],
				[Game.Building.items.military.defensecomplex, 35],
				[Game.Research.items.evolution.ikea,          40]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation,   75],
				[Game.Building.items.military.airfield,       60],
				[Game.Building.items.military.defensecomplex, 60],
				[Game.Research.items.evolution.ikea,          70]
			];
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
			level = (level !== undefined ? level : this.level); 
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
	notImplemented: true,
	engName: 'defensecomplex',
	description: 'Оборонный комплекс занимается разработкой новых видов вооружения, которое сможет отбивать нападения Рептилоидов на вашу планету или на другие ваши колонии. От минных полей — до гигантских пушек, способных за несколько залпов ломать самые мощные корабли. Пусть ваш народ почувствует себя в безопасности. Застройтесь к чертям собачьим турелями и наблюдайте, как корабли Рептилий сыпятся с неба.',
	effect: [new Game.Effect.Price({
		pretext: 'Стоимость строительства оборонных сооружений на ',
		aftertext: '% дешевле',
		condition: {
			type: 'unit',
			group: 'defense'
		},
		priority: 2,
		affect: ['metals', 'crystals'],
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return level * 0.3;
		}
	}), new Game.Effect.Price({
		pretext: 'Оборона строится на ',
		aftertext: '% быстрее',
		condition: {
			type: 'unit',
			group: 'defense'
		},
		priority: 2,
		affect: 'time',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 15, 25, 35, 50][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [500, Game.functions.slowExponentialGrow, 0],
				crystals: [500, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [600, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [10, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.secret_technology = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.chip = [6, Game.functions.slowLinearGrow, 60];
			} else {
				price.amethyst_plasmoid = [4, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 35]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 45],
				[Game.Research.items.evolution.engineering,  1]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation, 55],
				[Game.Research.items.evolution.engineering, 20],
				[Game.Building.items.military.pulsecatcher, 20]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation, 65],
				[Game.Research.items.evolution.engineering, 40],
				[Game.Building.items.military.pulsecatcher, 40]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation, 80],
				[Game.Research.items.evolution.engineering, 65],
				[Game.Building.items.military.pulsecatcher, 60]				
			];
		}	
	}	
});

new game.Building({
	name: 'Склад Cовета',
	notImplemented: true,
	engName: 'storage',
	description: 'Как вам уже известно, Великий Консул, за нашими действиями пристально следит Совет Галактики. Эти ребята только и ждут, чтобы уличить кого-нибудь в сговоре с Рептилоидами или в некомпетентности. Тем не менее закон обязывает их помогать новым Правителям вроде вас. Для удобства поставки ресурсов и постоянной связи с планетой Совета крайне советую рассмотреть вариант строительства данного Склада.',
	effect: [new Game.Effect.Special({
		pretext: 'Поставка ресурсов за ежедневные задания +',
		aftertext: '%',
		priority: 2,
		condition: {
			name: 'dailyQuestReward'
		},
		affect: ['crystals', 'metals'],
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return level * 0.5;
		}
	}), new Game.Effect.Special({
		pretext: 'Заданий в сутки: ',
		aftertext: '',
		priority: 1,
		condition: {
			name: 'dailyQuestCount'
		},
		affect: 'count',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return [1, 2, 3, 4, 5, 6][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [750, Game.functions.slowExponentialGrow, 0],
				crystals: [750, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [1000, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [25, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.reptile_technology = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.plasma_transistors = [5, Game.functions.slowLinearGrow, 60];
			} else {
				price.garyoldmanium = [5, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.defensecomplex, 20]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.defensecomplex, 30],
				[Game.Research.items.evolution.drill,         25]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.defensecomplex,   40],
				[Game.Research.items.evolution.drill,           35],
				[Game.Research.items.evolution.crystallization, 35]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.defensecomplex,   50],
				[Game.Research.items.evolution.drill,           45],
				[Game.Research.items.evolution.crystallization, 45],
				[Game.Research.items.evolution.engineering,     45]
			];
		} else {
			return [
				[Game.Building.items.military.defensecomplex,   60],
				[Game.Research.items.evolution.drill,           55],
				[Game.Research.items.evolution.crystallization, 55],
				[Game.Research.items.evolution.engineering,     55]
			];
		}	
	}	
});

new game.Building({
	name: 'Врата',
	engName: 'gates',
	description: 'Врата — это экспериментальный объект, военное здание нового поколения, которое использует самые передовые технологии в квантовой физике и механике. Существует теория, что, таким же образом, как была налажена связь с Консулами из нашего мира, есть возможность открыть напрямую портал и установить более чёткую связь с мирами, что находятся ближе. И, возможно, даже путешествовать по другим вселенным. Кто знает… Тем не менее, Врата — передовое научное здание, и множество открытий, совершённых в этих стенах, можно ставить на поток и использовать в войне.',
	effect: [new Game.Effect.Special({
		notImplemented: true,
		pretext: 'на ',
		aftertext: '% больше ресурсов за победы в космосе',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return level * 0.1;
		}
	}), new Game.Effect.Special({
		notImplemented: true,
		pretext: 'Дополнительные ',
		aftertext: '% в день',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return [0, 2, 5, 8, 10, 15][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [800, Game.functions.slowExponentialGrow, 0],
				crystals: [900, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [1200, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [50, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.quad_cooler = [6, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.nicolascagium = [5, Game.functions.slowLinearGrow, 60];
			} else {
				price.ancient_scheme = [3, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation,    55]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation,    65],
				[Game.Research.items.evolution.nanotechnology, 30]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation,    75],
				[Game.Research.items.evolution.nanotechnology, 45],
				[Game.Research.items.evolution.converter,       1]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation,    85],
				[Game.Research.items.evolution.nanotechnology, 60],
				[Game.Research.items.evolution.converter,      35]				
			];
		} else {
			return [
				[Game.Building.items.military.powerstation,    95],
				[Game.Research.items.evolution.nanotechnology, 75],
				[Game.Research.items.evolution.converter,      60]				
			];
		}	
	}
});

new game.Building({
	name: 'Бездна',
	engName: 'void',
	description: 'Если верно настроить Врата, то можно установить связь с ближайшими мирами. Один из таких миров учёные прозвали Бездной. Дело в том, что все события, происходящие в этом мире, по каким-то причинам крайне негативны, отвратны и жестоки. Этот мир находится вне нашего понимания, и его населяют отнюдь не самые приятные существа. И всё же… На что ни пойдёшь ради науки или спасения своей жизни. Люди этой вселенной настолько утомлены изматывающей войной с Рептилиями, что готовы пойти даже на такой рискованный шаг. Поддержите ли вы их, Консул? Откроете ли вы врата… В Бездну…',
	effect: [new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return level === 0 || level == 100 ? 0 : ((level - 1) * 0.1) - 10;
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
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 20, 30, 40, 50][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [1000, Game.functions.slowExponentialGrow, 0],
				crystals: [1000, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [1000, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [13, Game.functions.slowLinearGrow, 0];
				price.emerald_plasmoid = [4, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				price.sapphire_plasmoid = [6, Game.functions.slowLinearGrow, 20];
			} else if (level < 60) {
				price.amethyst_plasmoid = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.topaz_plasmoid = [3, Game.functions.slowLinearGrow, 60];
			} else {
				price.ruby_plasmoid = [8, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.gates,   1]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.gates,  25]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.gates,  50]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.gates,  75]
			];
		} else {
			return [
				[Game.Building.items.military.gates, 100]
			];
		}	
	}
});

new game.Building({
	name: 'Инженерный комплекс',
	engName: 'complex',
	description: 'В условиях военного времени инженеры — очень важные ребята. Их пытливый ум и тяга к созданию чего-то колоссального — как по своим размерам, так и по возможностям — несомненно, пригодится при создании новых видов вооружения и боевой техники. Конечно, основное, над чем будут работать инженеры — это Оборонный комплекс, который поможет удержать позиции на Земле и не позволит Рептилоидам перехватить инициативу. В то же время разработки Инженерного комплекса могут пригодиться и в других сферах. Не стоит недооценивать возможности технических наук, Консул.',
	effect: [new Game.Effect.Military({
		pretext: 'Урон оборонительных сооружений +',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'defense'
		},
		priority: 2,
		affect: 'damage',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return level * 0.2;
		}
	}), new Game.Effect.Special({
		pretext: 'Единоразовый бонус ',
		aftertext: '',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
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
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [500, Game.functions.slowExponentialGrow, 0],
				crystals: [30, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [500, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [4, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.garyoldmanium = [5, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.ancient_technology = [3, Game.functions.slowLinearGrow, 60];
			} else {
				price.ruby_plasmoid = [8, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 60]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 70],
				[Game.Building.items.military.gates,         1]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation,   80],
				[Game.Building.items.military.gates,          20],
				[Game.Building.items.military.defensecomplex, 30]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation,     90],
				[Game.Building.items.military.gates,            40],
				[Game.Building.items.military.defensecomplex,   55],
				[Game.Research.items.residential.entertainment, 60]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation,    100],
				[Game.Building.items.military.gates,            60],
				[Game.Building.items.military.defensecomplex,   70],
				[Game.Research.items.residential.entertainment, 90]
			];
		}	
	}
});

new game.Building({
	name: 'Фабрика ОСКО',
	notImplemented: true,
	engName: 'oscd',
	description: 'Что вы представляете, Консул, когда слышите словосочетание «орбитальная станция»? Пару капсул с понатыканными на них солнечными батареями? Это мы в своём мире тратим время на то, чтобы окроплять космические корабли святой водой. А в этом мире люди не тратили время на глупости. Данная фабрика производит самые мощные сооружения — Орбитальные Станции Космической Обороны. Поверьте, зрелище впечатляющее.',
	effect: [new Game.Effect.Military({
		pretext: 'Броня космических станций +',
		aftertext: '%',
		condition: {
			type: 'unit',
			group: 'defense',
			name: 'deforbital'
		},
		priority: 2,
		affect: 'life',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return level * 0.2;
		}
	}), new Game.Effect.Special({
		pretext: '+',
		aftertext: '% к шансу срабатывания спецспособности орбитальных станций',
		result: function(level) {
			level = (level !== undefined ? level : this.level); 
			return [0, 10, 20, 40, 60, 80][Math.floor(level / 20)];
		}
	})],
	basePrice: function(level) {
			level = level || this.currentLevel();

			var price = {
				metals:   [1000, Game.functions.slowExponentialGrow, 0],
				crystals: [500, Game.functions.slowExponentialGrow, 0]
			};

			if (level > 19) {
				price.honor = [700, Game.functions.slowLinearGrow, 20];
			}

			if (level < 20) {
				price.humans = [10, Game.functions.slowLinearGrow, 0];
			} else if (level < 40) {
				
			} else if (level < 60) {
				price.jimcarrium = [4, Game.functions.slowLinearGrow, 40];
			} else if (level < 80) {
				price.ancient_knowledge = [4, Game.functions.slowLinearGrow, 60];
			} else {
				price.ruby_plasmoid = [8, Game.functions.slowLinearGrow, 80];
			}
			return price;
	},	
	maxLevel: 100,
	requirements: function(level) {
		level = level || this.currentLevel();

		if (level < 20) {
			return [
				[Game.Building.items.military.powerstation, 80]
			];
		} else if (level < 40) {
			return [
				[Game.Building.items.military.powerstation, 85],
				[Game.Building.items.military.complex,      60]
			];
		} else if (level < 60) {
			return [
				[Game.Building.items.military.powerstation, 90],
				[Game.Building.items.military.complex,      70],
				[Game.Research.items.evolution.energy,      70]
			];
		} else if (level < 80) {
			return [
				[Game.Building.items.military.powerstation,   95],
				[Game.Building.items.military.complex,        80],
				[Game.Research.items.evolution.energy,        80],
				[Game.Research.items.residential.blackmarket, 60]
			];
		} else {
			return [
				[Game.Building.items.military.powerstation,  100],
				[Game.Building.items.military.complex,        90],
				[Game.Research.items.evolution.energy,        90],
				[Game.Research.items.residential.blackmarket, 70]
			];
		}	
	}
});

};