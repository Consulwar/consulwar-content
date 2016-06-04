initQuestRegularContentPowerstationBuilding = function() {

// TODO: В текстах напутан порядок тегов <p></p>
//       Надо либо убрать их вообще, либо пофиксить.

new game.QuestLine({
	who: 'thirdenginery',
	engName: 'powerstation_building',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('residential', 'house', 20)
		);
	},
	finishText: 'Поздравляем! Электростанция достигла максимального уровня. Слава Великому Консулу!'
}, [
	new game.Quest({
		engName: 'powerstation_30',
		text: '<p>Приветствую, Командир! Говорит Третий Инженерный. В нашей колонии теперь довольно разветвлённая система зданий, каждое из которых требует затрат энергии. И немаленьких.</p><p>Поэтому инженерам просто необходимо свести все системы потребления энергии к какому-то одному стандарту. А для этого им надо тщательно измерить потоки, которые выделяются для каждого здания. Задачка та ещё, но выполнимая. Готовы приступить по вашему приказу.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 30-го уровня.',
		reward: {
			metals: 200,
			crystals: 200
		},
		options: {
			accept: {
				text: 'Могу циркуль одолжить.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 30);
		}
	}), new game.Quest({
		engName: 'powerstation_35',
		text: '<p>Отлично, все потоки энергии были замерены и стандартизированы под один протокол потребления. Осталось только провести дополнительные исследования в ваших шахтах, Командир.</p><p>Во-первых, оборудование там подвергается экстремальным перегрузкам из-за скачков напряжения. А во-вторых, шахты постоянно расширяются и дорабатываются — сами понимаете, порой провода просто висят на какой-нибудь временной вешке. Но наши инженеры готовы как следует поработать под землёй.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 35-го уровня.',
		reward: {
			metals: 400,
			crystals: 400
		},
		options: {
			accept: {
				text: 'Вперёд, мои боевые кроты!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 35);
		}
	}), new game.Quest({
		engName: 'powerstation_40',
		text: '<p>Шахты заработали в штатном режиме, Командир. Теперь пора подумать об экономии в жилом секторе. Например, автоматически отключать все ненужные приборы в ночное время. Или наоборот — на ночь подавать всю освободившуюся мощность в районы Жилых Комплексов и Центров Развлечений.</p><p>В общем, нашим инженерам есть, над чем поломать голову. Как только у них будет приемлемый план, они сразу же начнут балансировку энергетических потоков в жилом районе.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 40-го уровня.',
		reward: {
			metals: 600,
			crystals: 600
		},
		options: {
			accept: {
				text: 'Главное, чтоб мою палату не перебалансировали.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 40);
		}
	}), new game.Quest({
		engName: 'powerstation_45',
		text: '<p>Поступило предложение об объединении Торгового Порта и Космопорта в единую энергосеть, Командир. В каждом порту ведётся приём и отправка кораблей, а также работа с грузами и пассажирами.</p><p>Инженеры хотят стандартизировать эти процедуры, чтобы иметь возможность сэкономить пару энергетических потоков и направить их, например, в военные здания для решения более насущных задач. Гражданский флот, разумеется, будет возмущён, но под прицелом крейсера быстро угомонится.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 45-го уровня.',
		reward: {
			metals: 800,
			crystals: 800
		},
		options: {
			accept: {
				text: 'Можно мне тоже глянуть в прицел? С другой стороны, разумеется.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 45);
		}
	}), new game.Quest({
		engName: 'powerstation_50',
		text: '<p>Производство на ваших шахтах растёт, Командир, а значит, растут и поставки в различные районы. Чтобы не отвлекаться на развитие отдельно взятых транспортных веток, инженеры внесли предложение о том, чтобы считать все магистрали, которые используются для доставки товаров или рабочих, частью производственного комплекса.</p><p>Это позволит не только лучше контролировать грузоперевозки, но и снизит потребление энергии. Инженеры готовы начать этот проект по вашему приказу.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 50-го уровня.',
		reward: {
			metals: 1000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'А можно мне такую стенку с лапочками? Я в кино видел.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 50);
		}
	}), new game.Quest({
		engName: 'powerstation_55',
		text: '<p>Как оказалось, огромное количество энергии потребляет не только жилой сектор, но и здания, у которых сугубо специальное назначение. Я говорю о Колизее и Уловителе, Командир. Поскольку здания эти стоят обособлено, то к каждому требуется подводить собственные энергетические системы.</p><p>А это значит, что в процессе передачи возможны значительные потери мощности. Чтобы избежать этого, наши инженеры подготовили проект подземной электросети, которая со временем охватит весь жилой район.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 55-го уровня.',
		reward: {
			metals: 1200,
			crystals: 1200
		},
		options: {
			accept: {
				text: 'А где красные фонари? Как я теперь в темноте найду Центр Развлечений?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 55);
		}
	}), new game.Quest({
		engName: 'powerstation_60',
		text: '<p>Теперь, когда жилой район обеспечен энергосетями отличного качества, настало время присмотреться к военному району. Я в курсе, Командир, что боевой флот и его адмирал не любят вмешательства каких-то инженеров в свои дела, но даже они вынуждены соблюдать некоторую экономию ресурсов, ведь их запас, увы, не бесконечен.</p><p>Так что первым делом мои ребята попробуют объединить системы Аэродрома и Верфи — и там, и там используются большие площади для испытаний новых прототипов.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 60-го уровня.',
		reward: {
			metals: 1400,
			crystals: 1400
		},
		options: {
			accept: {
				text: 'Только с казармами Потерянных их не объединяйте, и всё будет хорошо.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 60);
		}
	}), new game.Quest({
		engName: 'powerstation_65',
		text: '<p>На территории военного района тоже есть склады, Командир. И наша задача, как инженерных войск — сделать эти склады не только автоматизированными, но и экономичными. Если для того, чтобы сохранить немного ресурсов, мы будем эти самые ресурсы транжирить, у нас будет очень бедная планета.</p><p>Поэтому инженеры уже разрабатывают план работ по переоборудованию энергосистем складов, которые используются военным районом. Готовы его внедрить по вашему приказу.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 65-го уровня.',
		reward: {
			metals: 1600,
			crystals: 1600
		},
		options: {
			accept: {
				text: 'У нас и так очень бедная планета! Слышите, Рептилоиды?!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 65);
		}
	}), new game.Quest({
		engName: 'powerstation_70',
		text: '<p>В военном районе существует один объект, который потребляет энергии чуть ли не больше, чем весь район. Это Врата, Командир. И такое потребление вполне понятно — это ведь, мать его, настоящий портал в другие миры! Было бы слишком хорошо, если бы он ещё и выделял энергию, верно?</p><p>Впрочем, инженеры нашли подход и к этой проблеме: они предлагают держать стабильное соединение с измерением Консулов, а дополнительную нагрузку давать только в экстренных случаях.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 70-го уровня.',
		reward: {
			metals: 1800,
			crystals: 1800
		},
		options: {
			accept: {
				text: 'Это если ко мне бабушка приедет, что ли?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 70);
		}
	}), new game.Quest({
		engName: 'powerstation_75',
		text: '<p>Несмотря на повышение мощности Электростанции, остаётся ещё проблема Бездны. Её ведь нельзя включать и выключать, как лампочку. Поэтому инженеры постоянно работают над тем, чтобы держать наш мир и мир Бездны стабильно соединёнными, а не перемешанными, например.</p><p>Тем более, что именно наш мир будет поглощён без остатка в случае провала энергетического баланса. В наших интересах сделать инфраструктуру этого объекта как можно более стабильной, Командир.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 75-го уровня.',
		reward: {
			metals: 2000,
			crystals: 2000
		},
		options: {
			accept: {
				text: 'Я готов поддержать баланс, если что.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 75);
		}
	}), new game.Quest({
		engName: 'powerstation_80',
		text: '<p>Оборона нашей планеты — важное дело, Командир. В любой момент на нас могут посыпаться зеленокожие захватчики, и мы должны быть готовы к такому повороту событий.</p><p>Именно поэтому инженеры хотят объединить энергетическую инфраструктуру Оборонного и Инженерного Комплексов: с одной стороны, чтобы улучшить их взаимодействие, с другой — чтобы сэкономить немного энергии на передаче сообщений и координации совместных планов по уничтожению вражеских флотов.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 80-го уровня.',
		reward: {
			metals: 2200,
			crystals: 2200
		},
		options: {
			accept: {
				text: 'Пусть приходят, эти захватчики! Через месяц.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 80);
		}
	}), new game.Quest({
		engName: 'powerstation_85',
		text: '<p>Несмотря на все усилия инженеров, Лаборатория продолжает потреблять невообразимое количество энергии. Мы слали им меморандумы и предложения — всё впустую. Конечно, новейшие разработки требуют смелых и масштабных экспериментов, но совесть тоже надо иметь.</p><p>В общем, мы предложили Натали упразднить несколько неактуальных направлений и перетасовать оставшиеся таким образом, чтобы они тратили энергию колонии по очереди. Она обещала подумать, Командир.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 85-го уровня.',
		reward: {
			metals: 2400,
			crystals: 2400
		},
		options: {
			accept: {
				text: 'Я тоже подумаю… А потом наведу им там шороху!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 85);
		}
	}), new game.Quest({
		engName: 'powerstation_90',
		text: '<p>Работы в военном районе почти завершены, Командир. Все военные здания объединены в мощную энергосеть, а Врата и Бездна стабильно функционируют в отведённом им диапазоне. При увеличении мощности Электростанции наша сеть покроет собой весь район.</p><p>Больше не будет досадных перебоев с энергией, а исследования в Лаборатории пойдут ещё задорнее, ведь у белых халатов больше не будет проблем с кофемашинами и центрифугами.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 90-го уровня.',
		reward: {
			metals: 2600,
			crystals: 2600
		},
		options: {
			accept: {
				text: 'И мне кофейку налей, а я пока попинаю твоих инженеров.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 90);
		}
	}), new game.Quest({
		engName: 'powerstation_95',
		text: '<p>Благодаря всё увеличивающейся мощности Электростанции, Командир, Лаборатория развила небывалую активность. Учёные смогли не только оснастить гипердвигателями весь ваш звёздный флот, но и разработать несколько усовершенствований, которые впоследствии помогут значительно ускорить разгон и торможение ваших флотилий.</p><p>Я вижу в этом заслугу и наших инженеров, которые обеспечили энергией все отделы лаборатории и свели энергопотоки в единую сеть, работающую для блага науки.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 95-го уровня.',
		reward: {
			metals: 2800,
			crystals: 2800
		},
		options: {
			accept: {
				text: 'Ну ладно, дай им выходной, раз они такие герои.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 95);
		}
	}), new game.Quest({
		engName: 'powerstation_100',
		text: '<p>Командир, у меня прекрасные новости: осталось совсем немного до того момента, когда ваши инженеры, наконец, запитают всю колонию от самой мощной Электростанции на этой планете. Будут и резервные решения, если вы беспокоитесь о безопасности, Консул.</p><p>Но самое главное — мы вот-вот подойдём к совершенно новому этапу строительства, когда уже нечего улучшать, а можно спокойно сфокусироваться на том, чтобы дать пизды проклятым Рептилоидам. Вы — лучший, Командир!</p>',
		conditionText: 'Построить ' + Game.Building.items.military.powerstation.name + ' 100-го уровня.',
		reward: {
			metals: 3000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Обниматься не будем.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'powerstation', 100);
		}
	})
]);

};