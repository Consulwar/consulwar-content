initGalacticContentBattle = function () {

new game.Battle({
	name: 'Атака на патруль',
	engName: 'patrolfleet',
	description: 'В галактике наблюдается серьёзная активность Рептилоидов по всем фронтам. Наши корабли держат оборону, но колонии Консулов и даже Планеты-Города, а также Сенат находятся в опасности. Не говоря уже о том, что наша родная планета Земля захвачена. Рептилиям надо дать бой не только на Земле, но и в космосе. Самый безопасный вариант — это совершить нападение на патруль Рептилий. Силы патруля не малочисленны, как и ваша награда за подобную атаку, Консул. И тем не менее, чем меньше Рептилий, тем… Меньше Рептилий, как ни странно.',
	honor: 20,
	level: {
		1: {
			enemies: {
				blade: 'few'
			}
		},
		2: {
			enemies: {
				blade: 'several'
			}
		},
		3: {
			enemies: {
				blade: 'pack'
			}
		},
		4: {
			enemies: {
				blade: 'lots'
			}
		},
		5: {
			enemies: {
				blade: 'horde'
			}
		},
		6: {
			enemies: {
				blade: 'throng',
				dragon: 'few'
			}
		},
		7: {
			enemies: {
				blade: 'swarm',
				dragon: 'several'
			}
		},
		8: {
			enemies: {
				blade: 'zounds',
				dragon: 'pack'
			}
		},
		9: {
			enemies: {
				blade: 'zounds',
				dragon: 'lots'
			}
		},
		10: {
			enemies: {
				blade: 'zounds',
				dragon: 'horde'
			}/* ,
			cards: {
				impulseScanner: 10,
				chemicalTreatment: 10,
				twigs: 10,
				killSomeone: 10
			} */
		}
	}
});

new game.Battle({
	name: 'Атака на ряды обороны',
	engName: 'defencefleet',
	description: 'Некоторые особо важные космические объекты, вроде шахт для добычи металла из пояса астероидов или специальных научных центров, Рептилии охраняют более серьёзными силами, чем они отправляют в патруль. Совершив нападение на один из таких объектов, вы серьёзно навредите рептилиям, а значит и вызовете их гнев. Но ведь это нам и нужно, не так ли, Правитель?',
	honor: 30,
	level: {
		1: {
			enemies: {
				blade: 'lots',
				dragon: 'several'
			}
		},
		2: {
			enemies: {
				blade: 'lots',
				dragon: 'pack'
			}
		},
		3: {
			enemies: {
				blade: 'horde',
				dragon: 'lots'
			}
		},
		4: {
			enemies: {
				blade: 'horde',
				dragon: 'lots',
				hydra: 'few'
			}
		},
		5: {
			enemies: {
				blade: 'horde',
				dragon: 'lots',
				hydra: 'few',
				armadillo: 'few'
			}
		},
		6: {
			enemies: {
				blade: 'throng',
				dragon: 'horde',
				hydra: 'several',
				armadillo: 'few'
			}
		},
		7: {
			enemies: {
				blade: 'throng',
				dragon: 'horde',
				hydra: 'pack',
				armadillo: 'several'
			}
		},
		8: {
			enemies: {
				blade: 'swarm',
				dragon: 'throng',
				hydra: 'pack',
				armadillo: 'several'
			}
		},
		9: {
			enemies: {
				blade: 'swarm',
				dragon: 'throng',
				hydra: 'lots',
				armadillo: 'pack'
			}
		},
		10: {
			enemies: {
				blade: 'swarm',
				dragon: 'throng',
				hydra: 'horde',
				armadillo: 'lots'
			}/* ,
			cards: {
				impulseScanner: 15,
				chemicalTreatment: 15,
				twigs: 15,
				killSomeone: 15
			} */
		}
	}
});

new game.Battle({
	name: 'Атака на боевой флот',
	engName: 'battlefleet',
	description: 'Совершить атаку на целый боевой флот Рептилий сможет далеко не каждый Консул. Естественно, лететь небольшим отрядом на серьёзный флот чешуйчатых нету никакого смысла, поэтому ваша небольшая эскадрилья нападёт лишь на небольшую группу кораблей Рептилий. Однако же, если у вас серьёзный флот — готовьтесь, Консул, битва будет не из простых и может стоить жизни многим вашим солдатам и кораблям. Но ведь это война, а на войне всегда есть жертвы.',
	honor: 40,
	level: {
		1: {
			enemies: {
				blade: 'throng',
				dragon: 'lots',
				hydra: 'few'
			}
		},
		2: {
			enemies: {
				blade: 'swarm',
				dragon: 'horde',
				hydra: 'several'
			}
		},
		3: {
			enemies: {
				blade: 'zounds',
				dragon: 'throng',
				hydra: 'pack'
			}
		},
		4: {
			enemies: {
				blade: 'zounds',
				dragon: 'swarm',
				hydra: 'lots',
				armadillo: 'several'
			}
		},
		5: {
			enemies: {
				blade: 'legion',
				dragon: 'swarm',
				hydra: 'horde',
				armadillo: 'lots'
			}
		},
		6: {
			enemies: {
				blade: 'legion',
				dragon: 'zounds',
				hydra: 'throng',
				armadillo: 'horde'
			}
		},
		7: {
			enemies: {
				blade: 'division',
				dragon: 'zounds',
				hydra: 'swarm',
				armadillo: 'horde'
			}
		},
		8: {
			enemies: {
				blade: 'corps',
				dragon: 'legion',
				hydra: 'swarm',
				armadillo: 'throng',
				shadow: 1
			}
		},
		9: {
			enemies: {
				blade: 'army',
				dragon: 'legion',
				hydra: 'zounds',
				armadillo: 'throng',
				shadow: 1
			}
		},
		10: {
			enemies: {
				blade: 'army',
				dragon: 'legion',
				hydra: 'zounds',
				armadillo: 'swarm',
				shadow: 1
			}/* ,
			cards: {
				impulseScanner: 25,
				chemicalTreatment: 25,
				twigs: 25,
				killSomeone: 25
			}*/
		}
	}
});

new game.Battle({
	name: 'Засада на торговом пути',
	engName: 'tradefleet',
	description: 'Как и у людей, у рептилий есть особые торговые маршруты, по которым они перевозят различные ресурсы. Вы когда-нибудь мечтали зарабатывать тем, что будете грабить караваны Рептилий? Если да, то это отличная возможность для вас, Консул. Конечно, есть шанс, что Рептили узнают о вашей вылазке и изменят путь следования, однако же, пусть небольшой… Мизерный, но у вас есть шанс отбить у них ценные ресурсы. Хотя за такую коварную засаду очков чести вы и не получите.',
	honor: 0,
	chance: 34,
	level: {
		1: {
			enemies: {
				blade: 'few',
				trioniks: 1
			},
			reward: {
				metals: 6000,
				crystals: 2000
			}
		},
		2: {
			enemies: {
				blade: 'several',
				trioniks: 2
			},
			reward: {
				metals: 12000,
				crystals: 4500
			}
		},
		3: {
			enemies: {
				blade: 'pack',
				trioniks: 4
			},
			reward: {
				metals: 25000,
				crystals: 10000
			}
		},
		4: {
			enemies: {
				blade: 'lots',
				trioniks: 10
			},
			reward: {
				metals: 60000,
				crystals: 22000
			}
		},
		5: {
			enemies: {
				blade: 'horde',
				trioniks: 20
			},
			reward: {
				metals: 130000,
				crystals: 45000
			}
		},
		6: {
			enemies: {
				blade: 'throng',
				dragon: 'few',
				trioniks: 40
			},
			reward: {
				metals: 335000,
				crystals: 95000
			}
		},
		7: {
			enemies: {
				blade: 'swarm',
				dragon: 'several',
				trioniks: 80
			},
			reward: {
				metals: 670000,
				crystals: 200000
			}
		},
		8: {
			enemies: {
				blade: 'zounds',
				dragon: 'pack',
				trioniks: 160
			},
			reward: {
				metals: 1450000,
				crystals: 420000
			}
		},
		9: {
			enemies: {
				blade: 'zounds',
				dragon: 'lots',
				trioniks: 320
			},
			reward: {
				metals: 1600000,
				crystals: 500000
			}	
		},
		10: {
			enemies: {
				blade: 'zounds',
				dragon: 'horde',
				trioniks: 640
			},
			reward: {
				metals: 1800000,
				crystals: 600000
			}	
		}
	}
});

};