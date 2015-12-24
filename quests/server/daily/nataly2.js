initQuestDailyContentNataly2 = function() {

new game.DailyQuest({
	engName: 'GeneticModification',
	who: 'nataly',
	name: 'Генетические модификации', 
	text: 'Консул, Вы как раз вовремя. Мы почти закончили разработку новейшего комплекса генетических модификаций. Если все пройдет удачно, мы сможем выращивать целые поколения животных с оганами, идеально подходящими для трансплантации конкретному человеку. Больше никаких болезней и инвалидностей. Это огромное достижение генной инженерии.', 
	
	answers: { 
		iwantbigdick: { 
			text: 'Любых органов? Я готов быть в первой волне добровольцев.', 
			win: 'Консул, неожидала, что Вы готовы на такой поступок: не смотря на возможные последствия, Вы готовы действовать на благо науки. Я учту это, но до ближайших испытаниях на людях нам еще очень далеко.', 
			fail: 'К сожалению, Консул, Совет наложил вето на наши разработки в данном направлении и рекомендовал отложить их на неопределенный срок. Какая им выгода от больных людей?' 
		},
		
		business: { 
			text: 'Болезни — это бизнес. Вам не дадут закончить разработку.', 
			win: 'Вы пессимист, Консул. Совет очень тепло принял наш отчет о результатах исследования и готов даже поддержать нас ресурсами и необходимыми кадрами.', 
			fail: 'Консул, Вы знаете что-то, что не знаю я? Совет действительно запретил проводить дальнейшие исследования, а все результаты и оборудование арестовал. Я постараюсь узнать причину такой реакции.'
		},
		
		brainless: { 
			text: 'Отлично, а то половина населения абсолютно без мозгов.', 
			win: 'Что, Консул? А, впрочем, неважно. Главное, что Вы поддерживаете наши разработки. Всего хорошего.', 
			fail: 'Консул, мозг представляет собой сложнейшую нейронную сеть, производящую и обрабатывающую огромное количество логически связанных электрохимических импульсов. Мы не можем просто взять и заменить его, как сгоревшую лампочку.' 
		},
	}
});

new game.DailyQuest({
	engName: 'QuantumComputers',
	who: 'nataly',
	name: 'Квантовые компьютеры', 
	text: 'Добрый день, Консул. Остались последние расчеты, и мы сможем перейти к реализации первых квантовых компьютеров нового поколения. Правда есть загвоздка: для создания устойчивой модели запутанных квантовых состояний нам необходимо провести статистические исследования на Межгалактическом адронном коллайдере, а для этого потребуются серьезные финансы.', 
	
	answers: { 
		whatbenefit: { 
			text: 'Квантовые-шмантовые. Профит-то в чем?', 
			fail: 'Консул, я бы с радостью объяснила Вам в пятичасовой лекции все тонкости и плюсы таких компьютеров, но у меня нет на это времени. Лучше я займусь поиском сторонних спонсоров.' 
		},
		
		smarttalk: { 
			text: 'Звучит умно. Давай бумаги, я подпишу.', 
			win: 'Консул, все идет просто превосходно. Через несколько часов мы закончим сбор и анализ первых данных с прототипа.', 
			fail: 'К сожалению, Консул, что-то пошло не так: наша модель не сходится с экспериментальными результатами.' 
		},
		
		lostmymoney: { 
			text: 'Опять куча денег улетит в трубу.', 
			win: 'Ну что Вы, Консул, это слишком грубое выражение: все-таки мы работаем на наше будущее. К тому же мы получили согласие Совета на участие в частичном финансировании проекта.', 
			fail: 'Видимо, денег на эксперимент мы не получим. Ну что же, Консул, это Ваше решение. Попробую найти выход из этой ситуации.' 
		},
	}
});

new game.DailyQuest({
	engName: 'DangerousVirus',
	who: 'nataly',
	name: 'Опасный вирус', 
	text: 'Консул, у нас проблемы: в одной из лабораторий произошла утечка опасного вируса. Зараженные теряют способность адекватно мыслить, воспринимать критику, а в любых конфликтных ситуациях переходят на личности и активно пытаются вычислить местонахождение собеседника по IP. Нужно что-то срочно делать.', 
	
	answers: { 
		thisisnormal: { 
			text: 'Вирус? У нас это нормальное поведение.', 
			win: 'Нам повезло, Консул. Мы оцепили здание и ограничили зараженных от внешних раздражителей. В итоге, все симптомы пошли на убыль, а затем и вовсе исчезли.', 
			fail: 'Нормальное? Что же у Вас за первобытное общество, Консул? Ладно, я постараюсь сама найти решение.' 
		},
		
		raspidorasit: { 
			text: 'Им уже не помочь. Распидорасить.', 
			win: 'Было нелегко, но мы справились, Консул. На редкость агрессивное поведение зараженных доставило нам немало проблем, но, кажется, их всех удалось нейтрализовать.', 
			fail: 'Консул, даже мне кажется, что это решение чересчур жесткое. Мы попробуем нейтрализовать зараженных и изучить. Возможно, найдем способ устранить все последствия.' 
		},
		
		antidote: { 
			text: 'Отловите одного и сделайте антидот.', 
			win: 'Было нелегко, но мы справились, Консул. После распыления антидота зараженные, кажется, постепенно приходят в себя. На всякий случай, мы поместили их в карантин.', 
			fail: 'Консул, у меня печальные новости: зараженные оказали серьезное сопротивление. Пришлось превратить их в пыль.' 
		},
	}
});

new game.DailyQuest({
	engName: 'BadWeather',
	who: 'nataly',
	name: 'Непогода', 
	text: 'Консул, добрый день. На одну из наших дальних исследовательских станций обрушилась непогода. Уже несколько часов мы не получаем никаких сообщений от персонала. Надо что-то предпринять, Консул. Если мы не займемся этой проблемой, то можем потерять не только людей, но и все оборудование.', 
	
	answers: { 
		await: { 
			text: 'Ты вообще видела, что за окном? Утихнет немного, и пошлем отряд.', 
			win: 'Кажется, нам повезло, Консул. Буря утихла, и нам удалось связаться со станцией: оборудование и персонал не пострадали.', 
			fail: 'Консул, буря утихла, но сигналов как не было, так и нет. Думаю, мы потеряли все.' 
		},
		
		rescue: { 
			text: 'Вышли лучших спасателей.', 
			win: 'Консул, мы успели как раз во время: системы жизнеобеспечения станции отключились в момент нашего прибытия. Персонал, оборудование и результаты целы.', 
			fail: 'Консул, у меня плохие новости: связь со спасательным отрядом прервалась, как только они достигли станции.' 
		},
		
		military: { 
			text: 'Сначала отправь военных.', 
			win: 'Консул, пришел рапорт: какие-то подземные твари из-за непогоды двинулись на станцию и перебили персонал. Военные зачистили территорию и занимаются погрузкой оборудования для эвакуации.', 
			fail: 'Консул, военные из-за тяжелой техники слишком долго добирались до места. В момент их прибытия станция оказалась полностью занесена снегом. Будем ждать рапорта, но, боюсь, никто из персонала не уцелел.' 
		},
	}
});

new game.DailyQuest({
	engName: 'ExperimentalMachine',
	who: 'nataly',
	name: 'Экспериментальная установка', 
	text: 'Консул, хорошо, что Вы здесь. Срочно нужна Ваша помощь: одна из наших экспериментальных установок свервысокого вакуума вышла из строя. Если в ближайшее время нам не удастся отключить ее, то установка породит антипространство с отрицательной плотностью и Колонии настанет… кхм, пиздец, Консул. Извините за грубость, но других слов у меня нет.', 
	
	answers: { 
		disconnect: { 
			text: 'Выдерни ее из розетки.', 
			win: 'Консул, мне так стыдно. В панике я совсем забыла о системе экстренного отключения питания. Хорошо, что Вы мне напомнили о ней. Установка обесточена, а мы постепенно снижаем глубину вакуума в камере.', 
			fail: 'Консул, это же высокотехнологичное научное оборудование, а не фен. Если бы все было так просто, то я бы даже не пошла к Вам.' 
		},
		
		trash: { 
			text: 'Кидайте мусор в камеру.', 
			win: 'Консул, должна признать, что это было неожиданное, но очень продуктивное решение. Мусор не дает плотности достигнуть предельных значений, а мы получили отличный утилизатор.', 
			fail: 'К сожалению, Консул, это не помогло. Скорость образования вакуума достигла своего предела, но, к нашему счастью, установка не выдержала нагрузки и отключилась полностью. Ну как отключилась — взорвалась и разнесла целый корпус.' 
		},
		
		lostinspace: { 
			text: 'На корабль ее и в глубокий космос.', 
			win: 'Фух, Консул. Кажется, проблема решена. Было непросто демонтировать установку, но мы успели как раз вовремя. Будем ждать сигналов с нашего наблюдательного поста.', 
			fail: 'Консул, как Вы себе представляете это? Нам придется засунуть на корабль целое здание. Боюсь, Ваше решение выполнить не выйдет.' 
		},
	}
});

new game.DailyQuest({
	engName: 'Searching',
	who: 'nataly',
	name: 'Поиски', 
	text: 'Добрый день, Консул. Нам должны были доставить важный блок для проведения экспериментов, связанных с повышением КПД двигателей, но до сих пор транспортного корабля нет. При этом склад сообщает о том, что он покинул доки и направился к нам. Я думаю, стоит начать поиски.', 
	
	answers: { 
		radar: { 
			text: 'Посмотрите по радарам.', 
			win: 'Мы еще раз проверили показания, и все-таки заметили слабый сигнал неподалеку от нашей Колонии, Консул. Оказалось, что космический мусор повредил системы энергообеспечения корабля. Мы уже выслали помощь.', 
			fail: 'Консул, мы несколько раз проверили радары во всех возможных режимах работы — никаких зацепок. Похоже, мы остались без денег и без нашего блока.' 
		},
		
		neartheColony: { 
			text: 'Возьми енотов и прочеши пару мест поблизости.', 
			win: 'Консул, нам повезло. Оказалось, что системы жизнеобеспечения корабля дали сбой, и команда была погружена в искусственный анабиоз. К нашему счастью, корабль оказался совсем недалеко от нашей колонии.', 
			fail: 'Мы проверили все близлежащие окраины космоса, Консул, но так и не нашли корабль. Видимо, он затерялся на дальних подступах к Колонии.' 
		},
		
		bigsearch: { 
			text: 'Собирай поисковую группу.', 
			win: 'Подобный поиск — дорогое и долгое удовольствие, Консул, но мы все же отыскали корабль. Оказалось, что команда решила зайти в закусочную.', 
			fail: 'Консул, мы проверили все, что смогли. Корабля нигде нет. Скорее всего, он подвергся атаке рептилоидов.' 
		},
	}
});

new game.DailyQuest({
	engName: 'HotWaterSupply',
	who: 'nataly',
	name: 'Горячее водоснабжение', 
	text: 'Консул, я видела Ваше новое распоряжение. Это какая-то шутка, да? В чем смысл отключать горячее водоснабжение на две недели по всей Колонии? Мне пришлось смывать остатки геля ледяной водой! Мы бороздим просторы вселенной и моемся в холодной воде. Нонсенс! ',
	
	answers: { 
		traditions: { 
			text: 'Таковы традиции предков.', 
			fail: 'Консул, какие предки? Какие традиции? Мы итак находимся в состоянии затяжной войны. Если Вы думаете, что население спокойно воспримет этот указ, то Вы глубоко заблуждаетесь.' 
		},
		
		cleaning: { 
			text: 'Трубы почистить, все дела.', 
			win: 'Действительно, Консул, что-то я погорячилась с выводами. Последняя проверка системы трубопроводов и очистных сооружений проводилась несколько лет назад. Думаю, жители с пониманием отнесутся ко временным неудобствам.', 
			fail: 'Консул, мы уже давно используем антиоксидные трубы, а очистные сооружения и напорные станции проходят ежедневную проверку и контроль.' 
		},
		
		thisisthemystery: { 
			text: 'Это одна из загадок вселенной, Натали.',
			fail: 'Консул, Вам бы лучше придумать очень серьезное объяснение это «загадки», потому что жители недовольны и собираются провести массовые акции протеста.' 
		},
	}
});

new game.DailyQuest({
	engName: 'SolarStorm',
	who: 'nataly',
	name: 'Солнечная буря', 
	text: 'Здравствуйте, Консул. Вы, наверное, слышали, что надвигается серьезная солнечная буря. Наша колония оснащена всеми необходимыми средствами защиты, что мешает изучить поток заряженных частиц. Я предлагаю Вам вывести один из кораблей на орбиту, чтобы мы смогли получить важные исследовательские данные.', 
	
	answers: { 
		isthisdangeruos: { 
			text: 'А разве это не опасно?', 
			win: 'Конечно, опасно, Консул. Есть риск, что поток частиц будет очень серьезный. Это может привести к порче аппаратуры и нанести вред здоровью команды, но я обещаю предпринять все необходимые меры предосторожности.', 
			fail: 'Консул, к сожалению, почти все важные исследования таят в себе угрозу для жизни исследователя. Такова сущность науки.' 
		},
		
		oldship: { 
			text: 'Хорошо, только возьми старый корабль.', 
			win: 'Консул, несмотря на ужасное состояние корабля, нам удалось провести необходимые измерения и сохранить аппаратуру и команду целыми и невредимыми.', 
			fail: 'Эм… Консул, мы взяли старый корабль, но… В общем, представьте, что судно оказалось в огромной микроволновке и теперь больше похоже на космический завтрак, чем на научный корабль.' 
		},
		
		lighthouse: { 
			text: 'Разместите измерительные блоки на радиомаяках.', 
			win: 'Неплохая идея, Консул. Совет согласился предоставить нам доступ к маякам. Мы безопасно проведем измерения и сэкономим на топливе.', 
			fail: 'Консул, измерительные блоки чересчур большие. Мы не сможем их установить на маяках, да и такой подход займет уйму времени.' 
		},
	}
});

new game.DailyQuest({
	engName: 'PrivateLab',
	who: 'nataly',
	name: 'Независимая лаборатория', 
	text: 'Добрый день, Консул. Со мной связался владелец одной из независимых лабораторий и попросил о помощи. Он сказал, что его команда на пути серьезного открытия в области нейрохимического управления жизнедеятельностью организмов. Но, к сожалению, их финансовые возможности не позволяют завершить разработку. Думаю, им стоит помочь.', 
	
	answers: { 
		fire: { 
			text: 'Я не буду спонсировать каких-то левых людей.',
			fail: 'Это Ваш выбор, Консул. Жаль, конечно, что наука так сильно зависит от денежных вливаний.' 
		},
		
		fire: { 
			text: 'А нам какая выгода?', 
			win: 'Нам удалось заключить партнерское соглашение, Консул, поэтому с продажи образцов или технологий мы будем получать проценты.'
		},
		
		fire: { 
			text: 'Узнай у них все секреты, и сделай такое же исследование.', 
			win: 'Коварный план, Консул, но он мне нравится. Я снаряжаю экспедицию. Не терпится узнать, что за секреты они скрывают. ', 
			fail: 'Консул, это не мой метод. Я не буду заниматься промышленным шпионажем.' 
		},
	}
});

new game.DailyQuest({
	engName: 'ReproductiveSystem',
	who: 'nataly',
	name: 'Половая система', 
	text: 'Консул, нам удалось воссоздать точную копию половой системы рептилоида на одном из биологических 3D принтеров. Это позволит установить, каким именно образом происходит размножение этих тварей, и, возможно, даст ключ к решению задачи по построению оружия массового поражения и подавления рождаемости. Вы хотите взглянуть?', 
	
	answers: { 
		inmyoffice: { 
			text: 'Да, доставь в мой кабинет.', 
			win: 'Я, конечно, приятно удивлена таким интересом с Вашей стороны, Консул, но, к сожалению, я не могу этого сделать. Однако я предоставлю Вам 3D тур по лаборатории через систему удаленного взаимодействия.', 
			fail: 'Консул, к сожалению, я не могу этого сделать. В лаборатории созданы абсолютно уникальные условия, нарушение которых может повести полное уничтожение объекта.' 
		},
		
		soundsbad: { 
			text: 'Ты предлагаешь мне изучать письки рептилоидов?', 
			win: 'Грубо говоря — да. Но это же так увлекательно, Консул: узнавать самые сокровенные тайны своего врага. Хотя я вижу, что Вы не в восторге от этого.', 
			fail: 'Нет, Консул, я просто предлагаю Вам взглянуть на труды десятка лучших умов этой Колонии. Но, видимо, Вам абсолютно все равно на научные достижения.' 
		},
		
		nope: { 
			text: 'Нет, давайте сами там как-нибудь.', 
			win: 'Как скажете, Консул. В принципе, меня устраивает такой подход: Вы не мешаете нам делать свою работу, а мы взамен гарантируем качество.', 
			fail: 'Ну что же, Консул, конечно, немного обидно, что Вы не интересуетесь нашими достижениями, но ничего не поделать. Всего хорошего.' 
		},
	}
});

}