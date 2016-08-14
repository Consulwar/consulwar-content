initQuestRegularContentAlloyResearch = function() {

new game.QuestLine({
	who: 'nataly',
	engName: 'alloy_research',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('military', 'laboratory', 15)
		);
	},
	finishText: 'Особые Сплавы достигли своего максимума, и Лаборатории больше нечего исследовать в этой области науки. Мои поздравления, Консул.'
}, [
	new game.Quest({
		engName: 'alloy_15',
		text: '<p>Отдел Особых Сплавов готов к дальнейшим исследованиям, Командующий. Могу вас заверить, что это направление будет вам полезно, ведь благодаря ему мы можем ускорить строительство всех зданий в колонии.</p><p>Возьмём, к примеру, Космопорт – это огромное здание со сложной структурой. А если поднять уровень Особых Сплавов, то наши ученые смогут значительно снизить время монтажа за счёт облегчения веса несущих конструкций. Вам достаточно приказать, и мы с радостью возьмёмся за эту непростую задачу.</p>',
		conditionText: 'Исследовать Особые Сплавы 15-го уровня.',
		reward: {
			metals: 1500,
			crystals: 1500
		},
		options: {
			accept: {
				text: 'Космопорт, говоришь? А что, я как раз собирался там кое-что подновить.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 15);
		}
	}), new game.Quest({
		engName: 'alloy_20',
		text: '<p>А вы когда-нибудь задумывались о жизни на других планетах, Командующий? Нет, я сейчас не о рептилоидах или Вахаёбовиче, я думаю о совершенно негуманоидных расах, которых мы, возможно, просто пока ещё не встретили на своём пути. Вот бы получить такое существо на недельку в Лабораторию!</p><p>Кстати, о других планетах: отдел Особых Сплавов готов начать исследования, которые помогут сократить время постройки всех зданий в колонии, и Верфи в том числе. Отдайте приказ, и мы начнём работу.</p>',
		conditionText: 'Исследовать Особые Сплавы 20-го уровня.',
		reward: {
			metals: 2000,
			crystals: 2000
		},
		options: {
			accept: {
				text: 'Нам тут только негуманоидов не хватало для полного счастья.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 20);
		}
	}), new game.Quest({
		engName: 'alloy_25',
		text: '<p>Представьте, Консул, у меня пропала половина отдела! Я их послала проинспектировать строительные допуски в Центре Развлечений, и жду обратно с отчётом уже несколько дней. А ведь мы могли бы приступить к новому исследованию в области Особых Сплавов, чтобы развивать здания было ещё быстрее и удобнее…</p><p>Идея! А что, если вы отдадите приказ исследовать Особые Сплавы? Я этих тунеядцев тогда сразу заставлю отработать двойную смену. Вооружённый конвой пошлю за ними в Центр Развлечений!</p>',
		conditionText: 'Исследовать Особые Сплавы 25-го уровня.',
		reward: {
			metals: 2500,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Скажите конвою, чтоб выпил за моё здоровье.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 25);
		}
	}), new game.Quest({
		engName: 'alloy_30',
		text: '<p>Как вы относитесь к политикам, Консул? Я так и думала. Тем не менее, лучше загнать их в комфортабельное здание, чем дать расползтись по всей колонии. Поэтому стоит ещё немного изучить Особые Сплавы: у нас есть кое-какие заготовки для мебели, дверей и окон, которые помогут держать в узде этих никчёмных людишек в серых костюмах.</p><p>Отдайте приказ, и Лаборатория начнёт новые исследования. Думаю, нам также удастся уменьшить время строительства Политического Центра, если у вас есть планы на него.</p>',
		conditionText: 'Исследовать Особые Сплавы 30-го уровня.',
		reward: {
			metals: 3000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Не стесняйся тратить, Натали, я хочу дистанционное управление тазерами в стульях.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 30);
		}
	}), new game.Quest({
		engName: 'alloy_35',
		text: '<p>Несмотря на то, что Жилые Комплексы относительно дёшевы, их строительство занимает страшно много времени. Но не волнуйтесь, Консул, наш исследовательский отдел нашёл способ быстрее выпускать материал, из которого делают перекрытия и арматуру комплексов.</p><p>И если вы прикажете исследовать Особые Сплавы, мы наверняка сможем добиться того, чтобы Жилые комплексы можно было построить гораздо быстрее. Лаборатория готова начать по вашему приказу, Командующий.</p>',
		conditionText: 'Исследовать Особые Сплавы 35-го уровня.',
		reward: {
			metals: 3500,
			crystals: 3500
		},
		options: {
			accept: {
				text: 'Да, домиков можно побольше. Кровавый тиран я или где?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 35);
		}
	}), new game.Quest({
		engName: 'alloy_40',
		text: '<p>«Новые перекрытия из Особых Сплавов для Шахты Металла» – звучит несколько странно, не правда ли, Консул? И тем не менее наша Лаборатория намерена заняться именно этим. В шахте, конечно же, выплавляют металл и могут сами обновить свои помещения, но наши разработки позволят сделать это значительно быстрее.</p><p>Достаточно исследовать Особые Сплавы, и простои в работе Шахты прекратятся совсем. Мы готовы приступать, вот только дождёмся вашего распоряжения.</p>',
		conditionText: 'Исследовать Особые Сплавы 40-го уровня.',
		reward: {
			metals: 4000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Приказую! Хм, указываю! В общем, вы поняли, херачьте там.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 40);
		}
	}), new game.Quest({
		engName: 'alloy_45',
		text: '<p>Раз уж мы закончили с Шахтой Металла, почему бы не взяться теперь за Шахту Кристалла? Там тоже необходимы работы с использованием Особых Сплавов, и, если вы спросите меня, Консул, я скажу, что чем меньше времени будет уходить на повышение уровня шахт, тем лучше.</p><p>Лаборатория с удовольствием возьмётся за эту интересную и сложную проблему, Консул, как только вы отдадите приказ.</p>',
		conditionText: 'Исследовать Особые Сплавы 45-го уровня.',
		reward: {
			metals: 4500,
			crystals: 4500
		},
		options: {
			accept: {
				text: 'Ой, всё, делайте что хотите.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 45);
		}
	}), new game.Quest({
		engName: 'alloy_50',
		text: '<p>К нам поступила заявка от транспортного департамента, Командующий. Они хотят сделать систему лёгкого метро, и для этого им нужны по-настоящему лёгкие материалы, к тому же с хорошим запасом прочности.</p><p>Лаборатория уже начала разработку, но для дальнейшей работы нам понадобится углублённое исследование в области Особых Сплавов. Если вы одобряете ход наших мыслей, Командующий, отдайте приказ повысить уровень этого исследования. Вы не пожалеете, я обещаю.</p>',
		conditionText: 'Исследовать Особые Сплавы 50-го уровня.',
		reward: {
			metals: 5000,
			crystals: 5000
		},
		options: {
			accept: {
				text: 'Не волнуйся, Натали, твой Император тебя одобряет.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 50);
		}
	}), new game.Quest({
		engName: 'alloy_55',
		text: '<p>Одно из самых интересных зданий в вашем жилом районе, Консул, это Колизей. Со временем, правда, он пришёл в некоторый упадок – кое-где красуются надписи на стенах, пара кресел вырвана с мясом, дымовые шашки повредили экран…</p><p>Для ремонта понадобится несколько очень прочных конструкций, и вот тут наш отдел Особых Сплавов может серьёзно помочь инженерам. Вам остаётся просто отдать приказ, и наша Лаборатория начнет исследование Сплавов для Колизея.</p>',
		conditionText: 'Исследовать Особые Сплавы 55-го уровня.',
		reward: {
			metals: 5500,
			crystals: 5500
		},
		options: {
			accept: {
				text: 'Давайте быстрее, я уже ставку на сегодня сделал.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 55);
		}
	}), new game.Quest({
		engName: 'alloy_60',
		text: '<p>Приветствую вас, Командующий. Ни с того, ни с сего Центр Развлечений прислал нам очень странную заявку на особо прочные металлические шесты. Не представляю, зачем они могут понадобится в таком месте, как это, но заказ есть заказ.</p><p>Лаборатории нужно подтянуть исследование Особых Сплавов, и можно приступать к производству этих самых шестов. Мы ждём только вашего одобрения, Консул.</p>',
		conditionText: 'Исследовать Особые Сплавы 60-го уровня.',
		reward: {
			metals: 6000,
			crystals: 6000
		},
		options: {
			accept: {
				text: 'Ух ты! Я сам не знаю, на фига эти шесты, Натали, но ты сделай заказ на всякий случай…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 60);
		}
	}), new game.Quest({
		engName: 'alloy_65',
		text: '<p>Я в шоке, Командующий! Людишки из Политического Центра прислали заказ нашим инженерам на новые блестящие кнопки для голосования. У них, видите ли, старые кнопки стёрлись и потускнели, и от этого падает мотивация.</p><p>Одно хорошо: я под этот заказ оформлю сейчас исследование Особых Сплавов, и, если вы когда-нибудь надумаете улучшать этот драный Центр, строительство там не слишком затянется. По вашему приказу, Консул, Лаборатория начнет свою непростую работу. В отличие от некоторых.</p>',
		conditionText: 'Исследовать Особые Сплавы 65-го уровня.',
		reward: {
			metals: 6500,
			crystals: 6500
		},
		options: {
			accept: {
				text: 'Как я тебя понимаю, Натали! Сам работаю на износ.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 65);
		}
	}), new game.Quest({
		engName: 'alloy_70',
		text: '<p>Весть о блестящих кнопках дошла и до обычных людей, Консул. В Жилых Комплексах теперь все хотят полированные ручки и подставки. Уму непостижимо, как нерационально ведут себя люди!</p><p>Но Лаборатория в очередной раз нашла выход из этой странной ситуации — мы снова запустим исследование Основных Сплавов, на сей раз посвящённое безопасности этих поверхностей при контакте. До политиканов мне нет никакого дела, но простых работяг нам будет не хватать. Приказывайте, Консул, и мы всё сделаем.</p>',
		conditionText: 'Исследовать Особые Сплавы 70-го уровня.',
		reward: {
			metals: 7000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Чёрт, а я тоже приказал такую кнопку себе поставить…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 70);
		}
	}), new game.Quest({
		engName: 'alloy_75',
		text: '<p>У нас небольшое ЧП, Командующий: какой-то проверяющий гулял по территории Шахты Металла и свалился прямо в вентиляционный ход. Теперь, чтобы достать несчастного, нужно сделать несколько хороших металлических тросов.</p><p>И что интересно, инженеры просили не особо торопиться — мол, еда в ход пролезает, а вытаскивать надо осторожно… Под это дело можно ещё немного повысить уровень наших Сплавов, Консул. Как только прикажете, мы начнём исследования.</p>',
		conditionText: 'Исследовать Особые Сплавы 75-го уровня.',
		reward: {
			metals: 7500,
			crystals: 7500
		},
		options: {
			accept: {
				text: 'Гамбургеры только ему туда не кидайте, а то застрянет на хрен.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 75);
		}
	}), new game.Quest({
		engName: 'alloy_80',
		text: '<p>В Шахте Кристалла прослышали про аудитора в вентиляции, Консул. Для них этот сценарий не актуален – там такие температуры около выработки, что никакой служащий не выживет. Но вот роботы иногда сваливаются в мелкие каверны; возможно, стоит их немного подстраховать.</p><p>Но для этой шахты тросы нужны намного тоньше и прочнее, да ещё и тугоплавкие. Понадобится очередной виток исследований Особых Сплавов. С вашего разрешения, Консул, Лаборатория займётся этим.</p>',
		conditionText: 'Исследовать Особые Сплавы 80-го уровня.',
		reward: {
			metals: 8000,
			crystals: 8000
		},
		options: {
			accept: {
				text: 'Работайте-работайте, мало ли кто куда свалится в следующий раз.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 80);
		}
	}), new game.Quest({
		engName: 'alloy_85',
		text: '<p>Центр Развлечений снова прислал нам странную заявку, Консул: на этот раз они хотят чрезвычайно крепкие сетчатые ограждения. Говорят, что собираются устраивать какие-то «бои без правил».</p><p>Для нашего общества отсутствие правил где бы то ни было действительно может стать диковинкой. Не скажу того же по поводу боёв, но им виднее, они всё-таки специалисты по развлечениям. В общем, Лаборатория готова приступить к исследованиям по вашему приказу, Командующий.</p>',
		conditionText: 'Исследовать Особые Сплавы 85-го уровня.',
		reward: {
			metals: 8500,
			crystals: 8500
		},
		options: {
			accept: {
				text: 'А тотализатор у них будет, ты не знаешь?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 85);
		}
	}), new game.Quest({
		engName: 'alloy_90',
		text: '<p>Кажется, наши сетки так понравились горожанам в Центре Развлечений, что они потребовали установить ещё один ринг – на этот раз в Политическом Центре. Люди посчитали, что это будет наиболее гуманным способом выяснять размеры авторитета у претендентов на вакантные должности.</p><p>С точки зрения науки такой способ никуда не годится, но что-то в этой авантюре есть. Если вы готовы прислушаться к гласу народа, Консул, просто отдайте приказ, и мы начнём исследование Особых Сплавов.</p>',
		conditionText: 'Исследовать Особые Сплавы 90-го уровня.',
		reward: {
			metals: 9000,
			crystals: 9000
		},
		options: {
			accept: {
				text: 'О, а у этих тотализатор будет? Спрашиваю, как исследователь.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 90);
		}
	}), new game.Quest({
		engName: 'alloy_95',
		text: '<p>Космопорт – одно из самых красивых мест на планете, Консул. И мне особенно приятно, что эта красота была выполнена руками человека, а не получилась случайно в результате природного катаклизма.</p><p>А наша задача – сделать это место не только величественным, но и более удобным. Например, можно увеличить количество терминалов, чтобы разгрузить посадочные площадки. Мы в Лаборатории уже готовы к тому, чтобы приступить к исследованию Особых Сплавов.</p>',
		conditionText: 'Исследовать Особые Сплавы 95-го уровня.',
		reward: {
			metals: 9500,
			crystals: 9500
		},
		options: {
			accept: {
				text: 'И площадок сделайте, я жду большую партию контраба… то есть учебников по физике.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 95);
		}
	}), new game.Quest({
		engName: 'alloy_100',
		text: '<p>Мы почти подошли к конечной точке в развитии Особых Сплавов, Командующий! Осталось провести последнее исследование для вашей Статуи.</p><p>После того, как Лаборатория поработает с исходным материалом, ваш монумент будет известен всей Галактике, как самый прочный и сверкающий памятник на обитаемой планете. Вам осталось только отдать последние приказы Лаборатории, чтобы мы могли начать работу.</p>',
		conditionText: 'Исследовать Особые Сплавы 100-го уровня.',
		reward: {
			metals: 10000,
			crystals: 10000
		},
		options: {
			accept: {
				text: 'На монумент у меня всегда средства найдутся!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 100);
		}
	})
]);

};