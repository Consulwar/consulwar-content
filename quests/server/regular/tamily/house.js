initQuestRegularContentHouseBuilding = function() {

new game.QuestLine({
	who: 'tamily',
	engName: 'house_building',
	canStart: function () {
		return Game.Quest.checkFinished('tutorial');
	},
	finishText: 'Поздравляем! Жилые Комплексы достигли высшей точки развития. И всё благодаря Великому Консулу!'
}, [
	new game.Quest({
		engName: 'house_30',
		text: '<p>А помните те Жилые Комплексы, что вы приказали построить, правитель? Их уже заселили по полной программе и люди вам очень благодарны! У них всего одна небольшая просьба к вам: так получилось, что при строительстве одного из Комплексов никто не провёл к нему кабель от основной линии электропередачи. Конечно, торговля фонариками и алкоголем процветает в этом районе, но, может быть, всё-таки провести им туда электричество? Уверена, прирост населения не заставит себя долго ждать.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 30-го уровня.',
		reward: {
			metals: 400,
			crystals: 100
		},
		options: {
			accept: {
				text: 'А я всегда думал, что прирост от выключения электричества бывает.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 30);
		}
	}), new game.Quest({
		engName: 'house_35',
		text: '<p>Великий Консул, у вас есть минутка? Я по поводу Жилых Комплексов — одна фирма предложила построить в зоне проживания эти, как их… магазины какой-то «шаговой доступности». А то у нас из шагового только ОБЧР… Может, эти магазины — тоже что-то оборонное? Во всяком случае, Механик, который владеет этой фирмой, гарантировал быстрый прирост населения. Если вам нравится эта идея, отдайте приказ о строительстве в Жилом Комплексе, правитель.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 35-го уровня.',
		reward: {
			metals: 700,
			crystals: 150
		},
		options: {
			accept: {
				text: 'О, магазины! Тамили, сгоняй за соком, а?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 35);
		}
	}), new game.Quest({
		engName: 'house_40',
		text: '<p>Прекрасные новости, Великий Консул! Инженеры придумали, как перепланировать Жилые Комплексы, чтобы туда поместилось ещё больше людей! Они совместили санузел и кухню с кладовой, так что теперь люди смогут одновременно завтракать, принимать душ, стирать и готовить, а значит, быстрее будут собираться на работу. Правда, здорово? Сразу, как только вы прикажете, инженеры начнут внедрять инновации во все Жилые Комплексы, а население — радоваться новым квартирам. И расти численно.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 40-го уровня.',
		reward: {
			metals: 1100,
			crystals: 200
		},
		options: {
			accept: {
				text: 'А реалити-шоу они там запустить не хотят?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 40);
		}
	}), new game.Quest({
		engName: 'house_45',
		text: '<p>Есть небольшая проблема, Консул. Вы помните, мы переоборудовали Жилые Комплексы, чтобы люди быстрее собирались на работу? Оказалось, в новой планировке есть некоторые изъяны: в частности, многие люди получили травмы, когда поскальзывались в душе и падали прямиком на горящую плиту… Словом, инженеры поскребли в затылке, и решение было найдено — каждый санокухонный блок будет оснащён универсальной хозяйственной машиной — она будет стирать, гладить, готовить и убирать. По вашей команде, Великий, монтаж тут же начнётся.</p><p>И, если мне будет позволено напомнить, начиная с этого момента для улучшения здания будет требоваться определенный инопланетный артефакт. Вы можете получить его, Консул, атакуя корабли и поселения рептилоидов с помощью вашего космического флота. Флотом и вопросами надирания зелёных задниц у нас ведает Комиссар Вахаёбович. Думаю, он будет в восторге, если вы прикажете ему атаковать что-либо движущееся.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 45-го уровня.',
		reward: {
			metals: 1800,
			crystals: 300
		},
		options: {
			accept: {
				text: 'Что-либо движущееся я сам не прочь… атаковать.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 45);
		}
	}), new game.Quest({
		engName: 'house_50',
		text: '<p>Обитатели Жилых Комплексов очень благодарны вам, правитель, за универсальные хозяйственные машины, они действительно сильно облегчают жизнь. Но, увы, и у них есть недостаток — ужасный шум, который они издают, мешает спать всему району. Люди не высыпаются и не могут нормально работать. Но у наших инженеров снова есть отличная идея — они говорят, что нужно просто сделать в спальне герметичный звуконепроницаемый кокон. Военные поделились своими наработками для Казарм, и как только вы будете готовы, они начнут производство и установку новой «мебели». Я ожидаю взрывного роста числа жителей, а вы?</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 50-го уровня.',
		reward: {
			metals: 2100,
			crystals: 400
		},
		options: {
			accept: {
				text: 'А я бы сам в таком коконе спал. Как у вас с телепортацией в другие миры?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 50);
		}
	}), new game.Quest({
		engName: 'house_55',
		text: '<p>Сегодня не очень-то хорошая погода, не правда ли, Консул? В такую грозу грузовички, которые развозят людей на работу, тащатся еле-еле. А инженеры как раз дали мне сегодня смету на метро прямо от Жилых Комплексов до Шахт. Ни одного выхода на поверхность — вход располагается прямо в подвале Комплекса, а выход — прямо на проходной в Шахте! Разве не замечательно? Дайте знак, и наша техника немедленно приступит к прорытию первого тоннеля! Это значительно улучшит Комплексы и даст мощный прирост населения, я уверена.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 55-го уровня.',
		reward: {
			metals: 4000,
			crystals: 500
		},
		options: {
			accept: {
				text: 'Точно, а на проходной сразу выдавать кирку и сухпаёк.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 55);
		}
	}), new game.Quest({
		engName: 'house_60',
		text: '<p>Здравствуйте, Консул! А я только что видела нашего главного архитектора, и у него есть потрясающий проект по улучшению Жилых Комплексов. Представляете, он придумал, как приделать к каждому помещению навес из бетона так, чтобы получился балкон! Люди смогут выращивать овощи и зелень, а еще ставить велосипеды, банки, рубероид, старые шины… Впрочем, уверена, что до такого беспредела не дойдёт. Если вам нравится эта идея, правитель, велите улучшить Жилые Комплексы, и вы увидите, как завхоз Петрович первым побежит замешивать бетон.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 60-го уровня.',
		reward: {
			metals: 6000,
			crystals: 750
		},
		options: {
			accept: {
				text: 'Да я его и так каждое утро вижу! Впрочем, ещё народ не повредит.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 60);
		}
	}), new game.Quest({
		engName: 'house_65',
		text: '<p>Добрый день, правитель! В сегодняшней сводке: Шахта Металла отгрузила продукции… Потери на фронте составили…  Верфь поставила флот, столько-то единиц… Опытный образец утилизатора бытовых отходов сожрал зазевавшегося лаборанта? О! А не поставить ли нам в Жилые Комплексы эти утилизаторы? Сдается мне, работают они отменно. Как только вы отдадите приказ об улучшении, эти полезные штуковины тут же повезут к месту назначения. С такими мощными штуками Комплексы станут ещё привлекательнее для новых поселенцев, а значит, у нас будет больше лаборантов для утилиза… то есть, для технологических испытаний, Консул.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 65-го уровня.',
		reward: {
			metals: 7000,
			crystals: 900
		},
		options: {
			accept: {
				text: 'Так и вижу: «У вас утилизатор жрёт людей? Уже пакую чемоданы!»',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 65);
		}
	}), new game.Quest({
		engName: 'house_70',
		text: '<p>Правитель, а вы слышали, что наши шагающие магазины вышли на новый уровень, простите за невольный каламбур? Теперь они могут доставлять продукты прямо на дом, достаточно просто с утра по пути на работу оставить список и деньги на кассе. Это же отличное нововведение — люди совсем перестанут отвлекаться на быт, а значит, у нас будет больше работников и солдат! Для осуществления этого плана не хватает самой малости: нужно немного подтолкнуть Жилые Комплексы в нужном направлении, и только вы, Консул, можете это сделать. Отдайте распоряжение, и мы мгновенно начнем организовывать закупки и поставки.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 70-го уровня.',
		reward: {
			metals: 10000,
			crystals: 2000
		},
		options: {
			accept: {
				text: 'Сейчас я подтолкну, вы мне памятник поставите!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 70);
		}
	}), new game.Quest({
		engName: 'house_75',
		text: '<p>О, доброго времени суток, Консул! Не успела посмотреть в окно — только-только выпроводила архитекторов, они опять притащили новый проект улучшения Жилых Комплексов. На этот раз хотят объединить два смежных помещения прямо друг над другом, чтобы получилась двухэтажная студия. Говорят, это поспособствует «оздоровлению климата» и еще несли что-то про высокие потолки, воздух, пространство и свет. Они, конечно, помешаны на своем «видении проекта», но вдруг это сработает, и Комплексы начнут приносить больше человеческих ресурсов? Или — более человеческие ресурсы? Прикажите начать работы в Жилых Комплексах, и архитекторы будут вас боготворить.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 75-го уровня.',
		reward: {
			metals: 16000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Пусть только попробуют не боготворить, я на их проект ресурсы трачу!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 75);
		}
	}), new game.Quest({
		engName: 'house_80',
		text: '<p>Консул, доброго дня! У нас возникла небольшая накладка с поставками для военных — в производственном отделе Казарм сделали большую партию датчиков движения, но увы, она вся оказалась бракованной. Исправный датчик показывает движение рептилоидов и никак не реагирует на людей, а у этих все наоборот. Переделывать будет дороже, чем выпустить новое, и военные предложили поставить эти штуки в Жилые Комплексы. Но не просто поставить, а связать их с системами освещения: говорят, это позволит значительно сэкономить на электричестве, а это даст нам ещё один Комплекс и приток людей. Если вы не против попробовать, просто распорядитесь улучшить Комплексы, и оборудование немедленно начнут устанавливать.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 80-го уровня.',
		reward: {
			metals: 26000,
			crystals: 5000
		},
		options: {
			accept: {
				text: 'А в ладоши хлопать они не пробовали?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 80);
		}
	}), new game.Quest({
		engName: 'house_85',
		text: '<p>Правитель, ко мне снова приходили сумасшедшие архитекторы. Им так понравились те самые квартиры-студии, что они предложили ещё один проект, теперь уже для санузла. Говорят, что при таком развитии науки и техники как-то неловко принимать душ в клетушке метр на два, да ещё и в компании хозяйственной машины. Поэтому они предлагают пристроить к спальне полноценную сауну с роботом-массажистом. Если вам эта идея не кажется бредом, скомандуйте, Консул — и они сразу же начнут сносить лишние стены.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 85-го уровня.',
		reward: {
			metals: 40000,
			crystals: 8000
		},
		options: {
			accept: {
				text: 'И мне одного массажиста пришлите! Консул тоже человек.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 85);
		}
	}), new game.Quest({
		engName: 'house_90',
		text: '<p>Добрый вечер, правитель! Знаете, в Мегаполисе очень красиво по вечерам: всё светится, мигает реклама, работают информационные панели… Вот бы нам сделать что-то подобное в Жилых Комплексах! Ещё можно поставить большой рекламный экран в центре каждого квартала. Содержание рекламы уже согласовано — идут ролики Казармы, Лаборатории, Пси-Центра, Инженерного Комплекса, — словом, нас ожидает прирост населения и, возможно, новых специалистов. Приказывайте, Консул, и Жилой Квартал снова начнет обновляться.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 90-го уровня.',
		reward: {
			metals: 110000,
			crystals: 25000
		},
		options: {
			accept: {
				text: 'Реклама – это хорошо! Главное, чтоб у меня её не было.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 90);
		}
	}), new game.Quest({
		engName: 'house_95',
		text: '<p>В какое удивительное время мы живем, правитель! Наука обеспечивает нас всем необходимым: вооружением, техникой, ресурсами, жильём… Кстати, о жилье: белым халатам наконец-то удалось собрать работающий прототип синтезатора белка. Не спрашивайте, из чего и как он синтезирует, на этот вопрос в Лаборатории обычно отвечают «военная тайна», но он относительно недорогой, компактный, и самое главное — он работает. А дешёвая еда — лучшее средство для привлечения новых поселенцев. По вашему желанию мы можем оснастить этими приборами все Жилые Комплексы, вам остаётся только приказать.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 95-го уровня.',
		reward: {
			metals: 180000,
			crystals: 35000
		},
		options: {
			accept: {
				text: 'Мои люди должны хорошо питаться! Настройте им там двойную порцию белка.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 95);
		}
	}), new game.Quest({
		engName: 'house_100',
		text: '<p>Вот мы и подходим к величайшему порогу в жизни нашей колонии — скоро Жилые Комплексы станут самым совершенным творением во всей Галактике. Люди испытывают к вам огромное уважение и любовь, и вы это заслужили — своим умом, своей интуицией, своим упорством и своим трудом. Так давайте устроим небольшой праздник для наших горожан, ведь нам ещё так много предстоит сделать вместе. Всё ещё идёт война, и моральный дух нашей колонии всецело зависит от вас, Великий Консул. Отдайте приказ улучшить Комплексы, и мы начнём подготовку к празднику в вашу честь!</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 100-го уровня.',
		reward: {
			metals: 300000,
			crystals: 100000
		},
		options: {
			accept: {
				text: 'Точно, в мою честь! Потому что я крут, детка.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 100);
		}
	})
]);

};