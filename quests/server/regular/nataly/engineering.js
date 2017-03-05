initQuestRegularContentEngineeringResearch = function() {

new game.QuestLine({
	who: 'nataly',
	engName: 'engineering_research',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('military', 'laboratory', 35)
		);
	},
	finishText: 'Орудие Судного Дня покрыло своей тенью обитаемые миры, и Лаборатории больше нечего исследовать в области оборонной инженерии. Мои поздравления, Консул.'
}, [
	new game.Quest({
		engName: 'engineering_5',
		text: '<p>Приветствую вас в лаборатории оборонных технологий, Консул. Здесь мы будем разрабатывать улучшения для турелей, лазерных пушек, кристаллических пушек, плазменных пушек и наука знает каких ещё пушек, что наделают наши инженеры.</p><p>Задачи нового отдела: модернизация оборудования, исследование новых технологий… Но в основном мы ищем способы прихерачить «вот эту штуку к той здоровой штуке» и сделать так, чтобы обе штуки исправно делали «пыщ-пыщ».</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 5-го уровня.',
		reward: {
			metals: 4000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Э-э, ты со мной как с дебилом-то не разговаривай, я разбираюсь в этих ваших… штуках.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 5);
		}
	}), new game.Quest({
		engName: 'engineering_10',
		text: '<p>Первые построенные инженерами Турели работают достаточно неплохо: они принимают на себя то, что остаётся от вражеского флота после заградительных минных полей, и отстреливают самые слабые цели.</p><p>И это не кучка грузовых и транспортных кораблей, а хорошо вооружённая, высокоскоростная, беспрестанно маневрирующая, зубастая армада Клинков и Ящеров, которая стреляет в ответ. Поэтому в первую очередь наши учёные озабочены разработкой прочной брони для оборонных пушек.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 10-го уровня.',
		reward: {
			metals: 5000,
			crystals: 5000
		},
		options: {
			accept: {
				text: 'Армада – звучит зловеще. Когда закончите с бронёй, поставьте немного на стены моей цитадели.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 10);
		}
	}), new game.Quest({
		engName: 'engineering_15',
		text: '<p>Как вы знаете, Консул, Лаборатория занимается разработкой брони для Турелей, охраняющих колонию. Когда первые образцы были готовы, учёные решили провести испытания, и им показалась очень удачной идея установить эти образцы прямо на действующую Турель.</p><p>Но корабль, на котором они полетели, не смог вовремя идентифицировать себя, и Турель разнесла его в клочья вместе с горе-исследователями. Так что теперь придётся начинать всё сначала.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 15-го уровня.',
		reward: {
			metals: 6000,
			crystals: 6000
		},
		options: {
			accept: {
				text: 'Как насчёт улучшения связи? Я ведь когда-нибудь туда на Флагмане полечу.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 15);
		}
	}), new game.Quest({
		engName: 'engineering_20',
		text: '<p>Помните тех учёных, которые погибли на подлёте к турели, Консул? Выяснилось, что ложное срабатывание автоматики было вызвано мощными помехами, возникшими из-за коронального выброса нашей звезды.</p><p>Теперь Лаборатория разрабатывает специальный электромагнитный щит, который поможет избежать влияния космической погоды на нашу технику. И даже больше того – в теории такой щит сможет отклонять осколки кораблей и небольшие железные метеориты, изменяя их траекторию.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 20-го уровня.',
		reward: {
			metals: 7000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Я так понимаю, щит они тоже захотят на турелях испытывать? Нам нужно больше учёных.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 20);
		}
	}), new game.Quest({
		engName: 'engineering_25',
		text: '<p>Электромагнитные щиты установлены и прекрасно работают, Консул. По крайней мере, на обычных турелях. Что касается более продвинутых Лазерных Турелей, то тут есть загвоздка: при выстреле сквозь щит происходит расфокусировка лазерного пучка, отчего снижается поражающая способность.</p><p>Учёные уже вовсю трудятся над устранением этой проблемы, и пока они нашли два пути решения – уменьшить щит, чтобы он защищал только заднюю часть, либо совсем его убрать и сделать более прочную броню.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 25-го уровня.',
		reward: {
			metals: 8000,
			crystals: 8000
		},
		options: {
			accept: {
				text: 'Задняя часть очень важна, Натали! Для турелей тоже.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 25);
		}
	}), new game.Quest({
		engName: 'engineering_30',
		text: '<p>Идея о том, чтобы укрепить щитами заднюю часть турелей, оказалась очень удачной, Командующий. Впрочем, меня это не удивляет, ведь в Лаборатории уже давно ходят легенды о вашем инженерном гении.</p><p>Впрочем, перейдём к делу: как вы знаете, турели могут свободно вращаться в любом направлении, поэтому стоило ввести в систему наведения новые данные об отражающей способности щита и – хоп – турель ловко поворачивается задом к любой угрозе, отбивает её щитом и продолжает стрелять.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 30-го уровня.',
		reward: {
			metals: 9000,
			crystals: 9000
		},
		options: {
			accept: {
				text: 'Чёрт, а я хорош! Надо будет ещё чей-нибудь зад укрепить на досуге.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 30);
		}
	}), new game.Quest({
		engName: 'engineering_35',
		text: '<p>Отдел оборонных технологий рапортует: обычные турели улучшены до предела, и мы плавно переходим к изготовлению более сложных и мощных пушек. Есть предложение назвать их Снайпер-ганами, по аналогии со снайперами… и ганами.</p><p>И стрельбой на дальние дистанции, потому что эти пушки посылают комок раскаленной плазмы из одной точки космоса в другую. Главное при этом – не ошибиться в расчётах и не промахнуться мимо рептилоидов, потому как, Консул, в космосе тормозов и трения нет.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 35-го уровня.',
		reward: {
			metals: 10000,
			crystals: 10000
		},
		options: {
			accept: {
				text: 'Как это нет тормозов? А Калибратор?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 35);
		}
	}), new game.Quest({
		engName: 'engineering_40',
		text: '<p>У Третьего Инженерного возникли некоторые затруднения с зарядами для новых Снайпер-ганов, Командующий, и вы об этом наверняка уже слышали. Пока его инженеры облачают каждую пушку в газовый кокон, чтобы предотвратить обратное движение заряда, мы потихоньку начинаем укреплять броню основания.</p><p>Во-первых, это поможет отражать урон, а во-вторых, у нас осталось довольно много лишних материалов от прошлых модернизаций. Не пропадать же добру.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 40-го уровня.',
		reward: {
			metals: 11000,
			crystals: 11000
		},
		options: {
			accept: {
				text: 'Экономия! Моё любимое слово после слова «кристаллы».',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 40);
		}
	}), new game.Quest({
		engName: 'engineering_45',
		text: '<p>Каждый раз, когда ко мне заходит Третий со своим новым проектом, он говорит: «Новая пушка – действительно мощная! Она действительно может перевернуть ход битвы!» И что самое раздражающее, он оказывается прав, потому что новая пушка всегда мощнее, чем предыдущая, имеет больше возможностей и меньше недостатков.</p><p>Но я много бы отдала, Консул, чтобы запустить в него куском композитной брони, когда он в следующий раз появится в отделе, полный энтузиазма и энергии.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 45-го уровня.',
		reward: {
			metals: 12000,
			crystals: 12000
		},
		options: {
			accept: {
				text: 'А-а, так тебя он тоже раздражает? Передай-ка мне вон ту табуретку.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 45);
		}
	}), new game.Quest({
		engName: 'engineering_50',
		text: '<p>Новый проект Рельсовой Пушки впечатляет, Командующий, несмотря на то, что он супердорогой и конструируется из деталей, которые поставляются Советом за ГГК.</p><p>Мы тоже не захотели остаться в стороне и налепили на это чудо техники такое количество брони, что собирать его теперь приходится прямо на орбите – такую махину ни за что не поднять с планеты даже самыми мощными двигателями. Но все усилия окупаются, стоит лишь увидеть, как эта штука ебашит флот противника.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 50-го уровня.',
		reward: {
			metals: 13000,
			crystals: 13000
		},
		options: {
			accept: {
				text: 'Звучит заманчиво… Может, людишки в серых костюмах нафармят нам парочку таких пушек?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 50);
		}
	}), new game.Quest({
		engName: 'engineering_55',
		text: '<p>Не знаю как, но Третьему удалось не только разработать приличную среднекалиберную пушку, но и собрать в один пучок несколько таких пушек, и заставить их стрелять синхронно, поражая цель чем-то вроде залпа раскалённой плазмы.</p><p>Такой «дождь» не оставляет ни малейших шансов лёгким кораблям рептилоидов. Но в то же самое время эта крупная пушка может пострадать от ответного огня, особенно в области пусковых и энергетических систем. И обычной бронёй их закрыть не получится.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 55-го уровня.',
		reward: {
			metals: 14000,
			crystals: 14000
		},
		options: {
			accept: {
				text: 'Этого я и боялся.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 55);
		}
	}), new game.Quest({
		engName: 'engineering_60',
		text: '<p>Наши учёные не спали несколько ночей, пытаясь разработать броню приемлемого качества для ваших плазменных пушек, Консул.</p><p>Наконец, одному из них в голову пришла – так ему показалось от усталости – гениальная идея сделать не броню, а магнитные ловушки для плазменных зарядов противника. Он хотел ловить их и отправлять обратно, представляете? Но самое прекрасное то, что он каким-то образом ухитрился изготовить опытный образец и провел на нём очень короткую серию опытов.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 60-го уровня.',
		reward: {
			metals: 15000,
			crystals: 15000
		},
		options: {
			accept: {
				text: 'Короткую, потому что учёный кончился раньше, чем заряды?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 60);
		}
	}), new game.Quest({
		engName: 'engineering_65',
		text: '<p>Несмотря на частично сгоревший полигон Лаборатории, опыты с магнитными ловушками для плазменных зарядов продолжаются. Разумеется, мы принимаем все необходимые меры предосторожности, Командующий, так что вам совершенно не о чем беспокоиться.</p><p>Относительно брони тоже поступили хорошие новости: Совет может продать нам немного материала, который чрезвычайно устойчив к нагреванию до экстремальных температур. Броня, конечно, будет недешёвая, но зато надёжная.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 65-го уровня.',
		reward: {
			metals: 16000,
			crystals: 16000
		},
		options: {
			accept: {
				text: 'Вот когда ты сказала, чтобы я не беспокоился…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 65);
		}
	}), new game.Quest({
		engName: 'engineering_70',
		text: '<p>Огромные наземные пушки – новая головная боль отдела оборонных технологий. Мало того, что их надо установить в отдалении от основных военных и гражданских объектов, так ещё и броню инженерам подавай не абы какую, а самую толстую и прочную.</p><p>Я как представлю процесс изготовления и монтажа… В общем, это будет непростая задача, Командующий. Но Лаборатория справится – мы уже согласовали характеристики материала, осталось только его получить.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 70-го уровня.',
		reward: {
			metals: 17000,
			crystals: 17000
		},
		options: {
			accept: {
				text: 'Звучит оптимистично.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 70);
		}
	}), new game.Quest({
		engName: 'engineering_75',
		text: '<p>Можно сказать, что внедрение нового материала брони прошло с переменным успехом, Командующий. С одной стороны, материал, который мы получили в Лаборатории, на испытаниях показал характеристики, вдвое превышающие исходные.</p><p>С другой стороны, среди этих характеристик внезапно затесалась упругость, поэтому во время тестового обстрела снаряды отрикошетили и взорвались на вдвое большей площади, чем тренировочный полигон. В общем, мы проводим дополнительный набор специалистов для работы в поле.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 75-го уровня.',
		reward: {
			metals: 18000,
			crystals: 18000
		},
		options: {
			accept: {
				text: 'Ну да, а желающие прямо ломятся к вам толпами.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 75);
		}
	}), new game.Quest({
		engName: 'engineering_80',
		text: '<p>У проблемы со слишком упругой бронёй всё-таки есть решение, Консул. Наша лаборатория связалась с учёными планеты Совета, и они согласились доработать пластины, которые у нас уже есть.</p><p>Конечно, доставка и всё остальное влетит нам в грязную галактическую копеечку, но зато на сдачу мы получим новые технологии, которые позволят доработать систему наведения и даже настроить электромагнитные щиты для дополнительной защиты этих дорогостоящих пушек.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 80-го уровня.',
		reward: {
			metals: 19000,
			crystals: 19000
		},
		options: {
			accept: {
				text: 'И почему никто не предлагает мне бесплатно что-нибудь доработать или настроить?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 80);
		}
	}), new game.Quest({
		engName: 'engineering_85',
		text: '<p>Космическая Станция Обороны – огромная летающая крепость, и в задачи отдела оборонных технологий входит обеспечение этой крепости самой продвинутой броней, какая только может физически существовать.</p><p>И мы как раз собрали небольшой грузовой транспорт, который отвезёт эту броню для монтажа прямо на орбите. Не могу дождаться момента, когда первые рептилоиды увидят Станцию, мирно дрейфующую в космосе с двумя наборами брони и самыми мощными пушками в галактике.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 85-го уровня.',
		reward: {
			metals: 20000,
			crystals: 20000
		},
		options: {
			accept: {
				text: 'Самое мирное зрелище, как ни крути.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 85);
		}
	}), new game.Quest({
		engName: 'engineering_90',
		text: '<p>Грузовой корабль, который вёз броню для Космической Станции, только что передал аварийный сигнал. Кажется, один из инженеров увлёкся спором о том, как именно нужно разгружать листы брони, и случайно нажал кнопку освобождения груза еще до того, как они успели пристыковаться.</p><p>В общем, первыми обосравшимися на орбите космонавтами можно официально считать экипаж станции после того, как они увидели пачку бронелистов, летящих прямо на них красивым веером.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 90-го уровня.',
		reward: {
			metals: 21000,
			crystals: 21000
		},
		options: {
			accept: {
				text: 'И я могу их понять!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 90);
		}
	}), new game.Quest({
		engName: 'engineering_95',
		text: '<p>Слава науке, наши инженеры смогли разобраться с аварийной ситуацией, которую создали разлетевшиеся бронелисты. Это было нелегко: листы благополучно миновали Станцию, но после этого они начали дрейфовать на орбите, всё больше отдаляясь друг от друга.</p><p>Внезапно мы получили двести потенциально смертельно опасных объектов, угрожающих всем сооружениям и кораблям вблизи планеты. Но все закончилось хорошо – последний лист только что был успешно установлен и надёжно закреплён.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 95-го уровня.',
		reward: {
			metals: 22000,
			crystals: 22000
		},
		options: {
			accept: {
				text: 'Так вот почему два дня все бегали и кричали в рации!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 95);
		}
	}), new game.Quest({
		engName: 'engineering_100',
		text: '<p>К сожалению, я не могу раскрыть вам принцип работы Орудия Судного Дня, Командующий, просто поверьте – это самое мощное оружие, какое только можно себе представить. Впрочем, если вы посмотрите на количество артефактов, которые требуются для его постройки, и их качество, то вопросы об уникальности этого здания отпадут сами собой.</p><p>Его разрушительную силу можно использовать только в крайнем случае, когда нет другого выхода. Помните об этом, Консул, и да пребудет с вами сила Орудия Судного Дня.</p>',
		conditionText: 'Исследовать: ' + Game.Research.items.evolution.engineering.name + ' 100-го уровня.',
		reward: {
			metals: 23000,
			crystals: 23000
		},
		options: {
			accept: {
				text: 'О, да! Я король мира, детка!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'engineering', 100);
		}
	})
]);

};