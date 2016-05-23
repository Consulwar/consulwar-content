initGalacticContentBattle = function () {

new game.Battle({
	name: 'Атака на патруль',
	engName: 'patrolfleet',
	description: 'В галактике наблюдается серьёзная активность Рептилоидов по всем фронтам. Наши корабли держат оборону, но колонии Консулов и даже Планеты-Города, а также Сенат находятся в опасности. Не говоря уже о том, что наша родная планета Земля захвачена. Рептилиям надо дать бой не только на Земле, но и в космосе. Самый безопасный вариант — это совершить нападение на патруль Рептилий. Силы патруля не малочисленны, как и ваша награда за подобную атаку, Консул. И тем не менее, чем меньше Рептилий, тем… Меньше Рептилий, как ни странно.',
	honor: 20,
	level: {
		1: {
			enemies: {
				sphero: 'several'
			}
		},
		2: {
			enemies: {
				sphero: 'several',
				blade: 'few'
			}
		},
		3: {
			enemies: {
				sphero: 'pack',
				blade: 'several'
			}
		},
		4: {
			enemies: {
				sphero: 'several',
				blade: 'pack'
			}
		},
		5: {
			enemies: {
				blade: 'lots'
			}
		},
		6: {
			enemies: {
				blade: 'lots',
				lacertian: 'few'
			}
		},
		7: {
			enemies: {
				blade: 'lots',
				lacertian: 'several',
				wyvern: 'few'
			}
		},
		8: {
			enemies: {
				blade: 'lots',
				lacertian: 'pack',
				wyvern: 'several',
				dragon: 'few'
			}
		},
		9: {
			enemies: {
				blade: 'horde',
				lacertian: 'lots',
				wyvern: 'pack',
				dragon: 'several',
				hydra: 1
			}
		},
		10: {
			enemies: {
				sphero: 'swarm',
				blade: 'throng',
				lacertian: 'horde',
				wyvern: 'lots',
				dragon: 'pack',
				hydra: 'few'
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
				sphero: 'pack'
			}
		},
		2: {
			enemies: {
				sphero: 'lots',
				blade: 'few'
			}
		},
		3: {
			enemies: {
				blade: 'pack',
				lacertian: 'few'
			}
		},
		4: {
			enemies: {
				blade:  'pack',
				lacertian: 'several',
				wyvern: 'few'
			}
		},
		5: {
			enemies: {
				blade:  'lots',
				lacertian: 'pack',
				wyvern: 'several',
				dragon: 'few'
			}
		},
		6: {
			enemies: {
				blade: 'horde',
				lacertian: 'lots',
				wyvern: 'pack',
				dragon: 'several',
				hydra: 'few'
			}
		},
		7: {
			enemies: {
				blade: 'throng',
				lacertian: 'lots',
				wyvern: 'pack',
				dragon: 'several',
				hydra: 'few',
				armadillo: 1
			}
		},
		8: {
			enemies: {
				blade: 'swarm',
				lacertian: 'horde',
				wyvern: 'lots',
				dragon: 'pack',
				hydra: 'several',
				armadillo: 'few',
				prism: 1
			}
		},
		9: {
			enemies: {
				blade: 'zounds',
				lacertian: 'throng',
				wyvern: 'horde',
				dragon: 'lots',
				hydra: 'pack',
				armadillo: 'several',
				prism: 'few',
				octopus: 1
			}
		},
		10: {
			enemies: {
				blade: 'legion',
				lacertian: 'swarm',
				wyvern: 'throng',
				dragon: 'horde',
				hydra: 'lots',
				armadillo: 'pack',
				prism: 'several',
				octopus: 'few',
				godzilla: 1
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
				sphero: 'pack',
				blade: 'several'
			}
		},
		2: {
			enemies: {
				sphero: 'lots',
				blade: 'pack',
				lacertian: 'several'
			}
		},
		3: {
			enemies: {
				sphero: 'horde',
				blade: 'lots',
				lacertian: 'pack',
				wyvern: 'few'
			}
		},
		4: {
			enemies: {
				sphero: 'throng',
				blade: 'horde',
				lacertian: 'lots',
				wyvern: 'pack',
				dragon: 'few'
			}
		},
		5: {
			enemies: {
				sphero: 'swarm',
				blade: 'throng',
				lacertian: 'horde',
				wyvern: 'lots',
				dragon: 'pack',
				hydra: 'few'
			}
		},
		6: {
			enemies: {
				sphero: 'zounds',
				blade: 'swarm',
				lacertian: 'throng',
				wyvern: 'horde',
				dragon: 'lots',
				hydra: 'pack',
				armadillo: 'few'
			}
		},
		7: {
			enemies: {
				sphero: 'legion',
				blade: 'zounds',
				lacertian: 'swarm',
				wyvern: 'throng',
				dragon: 'horde',
				hydra: 'lots',
				armadillo: 'several',
				prism: 'few'
			}
		},
		8: {
			enemies: {
				sphero: 'division',
				blade: 'legion',
				lacertian: 'zounds',
				wyvern: 'swarm',
				dragon: 'throng',
				hydra: 'lots',
				armadillo: 'pack',
				prism: 'several',
				octopus: 'few'
			}
		},
		9: {
			enemies: {
				sphero: 'corps',
				blade: 'division',
				lacertian: 'legion',
				wyvern: 'zounds',
				dragon: 'swarm',
				hydra: 'throng',
				armadillo: 'lots',
				prism: 'pack',
				octopus: 'several',
				godzilla: 'few'
			}
		},
		10: {
			enemies: {
				sphero: 'front',
				blade: 'corps',
				lacertian: 'division',
				wyvern: 'legion',
				dragon: 'zounds',
				hydra: 'swarm',
				armadillo: 'lots',
				prism: 'pack',
				octopus: 'several',
				godzilla: 'few',
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
				sphero: 'several',
				trioniks: 1
			},
			reward: {
				metals: 6000,
				crystals: 2000
			}
		},
		2: {
			enemies: {
				sphero: 'several',
				blade: 'few',
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
				lacertian: 'few',
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
				lacertian: 'several',
				wyvern: 'few',
				trioniks: 20
			},
			reward: {
				metals: 130000,
				crystals: 45000
			}
		},
		6: {
			enemies: {
				lacertian: 'horde',
				dragon: 'lots',
				trioniks: 40
			},
			reward: {
				metals: 335000,
				crystals: 95000
			}
		},
		7: {
			enemies: {
				wyvern: 'swarm',
				dragon: 'horde',
				trioniks: 80
			},
			reward: {
				metals: 670000,
				crystals: 200000
			}
		},
		8: {
			enemies: {
				dragon: 'swarm',
				hydra: 'several',
				trioniks: 160
			},
			reward: {
				metals: 1450000,
				crystals: 420000
			}
		},
		9: {
			enemies: {
				hydra: 'swarm',
				armadillo: 'few',
				trioniks: 320
			},
			reward: {
				metals: 1600000,
				crystals: 500000
			}	
		},
		10: {
			enemies: {
				sphero: 'zounds',
				blade: 'swarm',
				hydra: 'throng',
				armadillo: 'horde',
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