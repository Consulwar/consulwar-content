initQuestDailyContentNataly1 = function() {

new game.DailyQuest({
	engName: 'Crystals',
	who: 'nataly',
	name: 'Кристаллические подложки',
	text: 'Здравствуйте, Консул. В одной из наших лабораторий удалось получить принципиально новые типы кристаллических подложек. Они выведут нас на передний край схемостроения. К сожалению, они пока нестабильны и достаточно опасны. Я уверена, что Вы понимаете всю важность этого исследования, и готовы дать согласие на эксперимент.', 
	answers: { 
		becareful: { 
			text: 'Давай, только аккуратнее.', 
			win: 'Консул, отличные новости. Мы взяли главный приз на выставке «Передовые технологии в разработке электронных плат». Призовые деньги уже направлены в бюджет Колонии.',
			fail: 'Жаль, но нам так и не удалось повторить результат. Хотя у меня есть еще парочка отличных идей.'
		},
		gamepad: { 
			text: 'Если только это поможет сделать мой геймпад легче.',
			win: 'У каждого свои интересы, Консул, но я рада, что Вы не вмешиваетесь в наши разработки. Кстати, первая прибыль с новых образцов уже в бюджете.',
			fail: 'К сожалению, прикладные применения новых образцов подразумевают усовершенствование оружия в первую очередь.'
		},
		stability: {
			text: 'Стабильность, стабильность, стабильность!',
			win: 'Компьютерное моделирование показало, что новая конструкция слишком взрывоопасна, и мы все же решили прикрыть разработку.',
			fail: 'Жаль, Консул, мы могли бы оказаться в числе лучших. Но что же, это Ваше решение.'
		}
	}
});

new game.DailyQuest({
	engName: 'Zone151',
	who: 'nataly',
	name: 'Зона 1-51',
	text: 'Консул, во время недавней вылазки нашей разведгруппе удалось захватить рептилоида. Сейчас он в глубоком анабиозе, но я бы хотела получить Ваше разрешение на его пробуждение и исследование. Мы сможем уточнить наши теоретические модели важных жизненных процессов чешуйчатых, что в дальнейшем позволит более тонко проектировать оружие.', 
	answers: { 
		onthesquare: { 
			text: 'Выставите на площади в контейнере.', 
			win: 'Неплохое решение, Консул. Повышенное внимание со стороны жителей Колонии спровоцировало стрессовую ситуацию для рептилоида, и мы смогли получить прежде неизвестные подробности некоторых процессов.',
			fail: 'Из-за огромного количества зевак мы так и не успели толком провести необходимые тесты.'
		},
		security: { 
			text: 'Засадите его в бункер и выставите охрану.',
			win: 'Спасибо, Консул. Нам удалось тщательнейшим образом исследовать многие аспекты физиологии и психики рептилоида.',
			fail: 'Увы, Консул, в темноте бункера эта зеленая тварь отключилась и больше не подавала признаков жизни. Наверное, какой-то природный инстинкт самоуничтожения.'
		},
		killhim: {
			text: 'Слишком опасно. Оставьте его мозги на кушетке.',
			win: 'Мы успели как раз вовремя: оказывается, анабиоз был не реакцией на наши препараты, а естественным механизмом организма. Если бы мы оставили его еще на несколько минут, то пришлось бы открывать пару десятков вакансий в лаборатории.',
			fail: 'Жаль, Консул, что Вы решили действовать таким образом. Но я Вас не виню: безопасность превыше всего.'
		}
	}
});

new game.DailyQuest({
	engName: 'Vitas',
	who: 'nataly',
	name: 'Звуковое оружие',
	text: 'Консул, Вы слышали новости? На одной из колоний проходят испытания нового образца индивидуального звукового прибора псионического воздействия «Vitas». Пока что результаты весьма впечатляющие. Я думаю, нам также стоит заняться этой темой. Что скажете?', 
	answers: { 
		troubleswithglass: { 
			text: 'Так вот почему у меня стекла потрескались.', 
			win: 'Да, Консул. И это лишь малая часть возможного воздействия, если верить моим расчетам. Я подготовлю одну из лабораторий.',
			fail: 'Стекла? Хм, мне кажется, вчерашняя вечеринка имеет непосредственное отношение к этому происшествию.'
		},
		dontwannabedeaf: { 
			text: 'Не хочу, чтобы мы стали первой в галактике абсолютно глухой колонией.',
			win: 'Конечно, все эти меры предосторожности затянули начало наших исследований, Консул, но мы все же приступили и даже достигли некоторого прогресса.',
			fail: 'По-моему, Вы никогда не отказываетесь от шампанского, Консул. Странно, что рискуете гораздо реже.'
		},
		noguns: {
			text: 'Никаких звуковых пушек. Помнишь, что случилось в прошлый раз?',
			win: 'Вечеринка, у Децла дома! Гуляет весь район, гуляет вся школа!.. Ох, что это было? Что-то мне нехорошо, Консул. Кажется, мне надо прилечь.',
			fail: 'На ошибках тоже учатся, Консул. Ладно, я постараюсь придумать что-нибудь другое.'
		}
	}
});

new game.DailyQuest({
	engName: 'LittleTroubles',
	who: 'nataly',
	name: 'Небольшие проблемы',
	text: 'Консул, кажется, у нас небольшие проблемы. В одной из лабораторий из-под контроля вышли исследования паралитического газа. Сотрудники жалуются на сильнейшие галлюцинации, голоса в голове и спонтанные эмоциональные всплески. Что будем делать?', 
	answers: { 
		ventilate: { 
			text: 'Проветрите помещение, а людей отвезите в клинику.', 
			win: 'Опрометчивое решение, но нам повезло, Консул. Персонал проходит реабилитацию и постепенно приходит в себя, а газ быстро улетучился в верхние слои атмосферы.',
			fail: 'К сожалению, объем газа достиг критической отметки. Как только мы открыли вентиляционные шахты, вокруг лаборатории началось поражение растений и животных. Хорошо, что людей хотя бы успели эвакуировать.'
		},
		close: { 
			text: 'Держите лабораторию закрытой до полной нейтрализации газа.',
			win: 'Люди потеряли сознание, но, кажется, ничего серьезного с ними не случилось. К тому же газ достаточно быстро вступил в реакцию с лабораторной водой и перестал быть опасным.',
			fail: 'Консул, Вы же понимаете, что газ никуда не денется из герметичной лаборатории?'
		},
		iamcoming: {
			text: 'Галлюцинации? Я должен все проверить лично.',
			win: 'Вам повезло, Консул. Несмотря на то, что Вы почти сразу же подверглись воздействию газа и превратились в овоща, в бреду Вы каким-то чудом задели реле включения системы внутренней фильтрации воздуха. Обстановка нормализовалась.',
			fail: 'Не знаю, чего Вы хотели добиться, Консул, когда заходили в лабораторию, но ползание по полу, несвязная речь и общее неадекватное поведение уж точно никак не помогли нам решить проблему.' 
		}
	}
});

new game.DailyQuest({
	engName: 'DeadOrAlive',
	who: 'nataly',
	name: 'Квантовый кот',
	text: 'Консул, произошло небольшое недоразумение в блоке 9А. Вы же в курсе, что там проводят эксперименты по прикладным применениям квантовой теории? В момент проведения одного из опытов лабораторный кот Васька заскочил на стол и оказался в суперпозиции квантовых состояний «жив-мертв». Вахтерша Петровна будет очень недовольна.', 
	answers: { 
		callShrodinger: { 
			text: 'Позвоните Шредингеру, я-то тут причем?', 
			win: 'Скажу честно, Консул, я сомневалась, что простой сантехник сможет нам помочь, но оказалось, что его прадед занимался как раз подобными вопросами. Странная семейка. Главное, что Петровна ничего не заподозрила.',
			fail: 'Трубку так никто и не взял, и нам пришлось во всем признаться Петровне.'
		},
		newcat: { 
			text: 'Достаньте ей другого кота.',
			win: 'В спешке я совсем не подумала об этом, Консул. Надеюсь мы сможем ее отвлечь, пока наши сотрудники бегают по улицам в поисках похожего кота.',
			fail: 'Если бы все было так просто, Консул, то я бы не пришла к Вам. Петровну не проведешь: своего кота она узнает из тысячи по словам, по глазам, по голосу.'
		},
		callPetrovna: {
			text: 'Заманите и ее на стол.',
			win: 'Рискованное решение, Консул, но оно удивительным образом разрешило ситуацию. Петровна забрала своего кота и исчезла в пространственно-временном континууме, бороздя просторы квантового мира. Жаль, что придется искать новую вахтершу.',
			fail: 'Петровна наотрез отказалась лезть на стол, а вдобавок еще и заметила квантованного Ваську. На Вашем месте я бы подготовилась к серьезному разговору, потому что она собиралась идти к Вам.'
		}
	}
});

new game.DailyQuest({
	engName: 'NewEquipment',
	who: 'nataly',
	name: 'Экспериментальная установка',
	text: 'Здравствуйте, Консул. Вы же знаете, что одним из приоритетных направлений исследовательской деятельности нашей лаборатории являются гипердвигатели и их модификация? Дело в том, что одна из экспериментальных установок вышла из строя, и мы не можем продолжить нашу исследовательскую программу. Нужно что-то делать, Правитель.', 
	answers: { 
		idontgiveafuck: { 
			text: 'Продолжайте работать на том, что есть.', 
			fail: 'К сожалению, Консул, без хорошего оборудования нет хорошего результата. Это наука, на ней невозможно сэкономить.'
		},
		newequipment: { 
			text: 'Поставьте новую установку.',
			win: 'Отлично, Консул! Исследования снова идут полным ходом, а с демонтажа и продажи на запчасти старой установки мы получили небольшое пополнение бюджета.',
			fail: 'К сожалению, мы не смогли найти подходящую модель, и, кажется, наша вынужденная пауза затянется на неопределенный срок. Кстати, спасибо за веру в наши разработки и финансирование, Консул.'
		},
		callFicksics: {
			text: 'Зовите Фиксиков.',
			win: 'Если Вы имели в виду ремонтную бригаду, Консул, то они уже на месте и почти закончили предварительные проверки. Кажется, мы сможем восстановить установку без особых затрат.',
			fail: 'Если Вы имели в виду ремонтную бригаду, Консул, то её я вызвала в первую очередь. К сожалению, установка окончательно вышла из строя и восстановлению не подлежит.'
		}
	}
});

new game.DailyQuest({
	engName: 'Teleportation',
	who: 'nataly',
	name: 'Успехи в телепортации',
	text: 'Консул, на днях нам удалось добиться значительных успехов в точечной телепортации. Конечно, механизм еще до конца не изучен, но для дальнейшего прогресса нам просто необходимо провести испытания с живым организмом. Я понимаю, что это рискованно и, наверное, не совсем этично, но Вы только представьте, какие возможности откроются перед нами в случае успеха.', 
	answers: { 
		mazulina: { 
			text: 'Мазулину заберите, только без шума.', 
			win: 'Консул, к сожалению, объект распался на атомы, и мы не смогли его восстановить, но мы сделали гигантский шаг в направлении прикладного применения телепортации.'
		},
		saynotokill: { 
			text: 'Распылять людей на атомы? Ну уж нет.',
			win: 'Мы отложили начало наших экспериментов, Консул, и не зря: колониальный патруль сумел захватить корабль с рептилоидами, и несколько из них даже остались живы. Это, конечно, не люди, но мы сможем кое-что выяснить и с их помощью.',
			fail: 'Пожалуй, Консул, Вы правы. Вы думаете не только о науке, и для Колонии это хорошо.'
		},
		gotoprison: {
			text: 'Возьмите кого-либо из заключенных.',
			fail: 'Спасибо, Консул, что Вы на стороне науки. Но вот остальная общественность, несмотря на особую секретность операции, каким-то образом узнала о наших планах и устроила масштабные акции протеста. В итоге мы остались ни с чем.'
		}
	}
});

new game.DailyQuest({
	engName: 'StrangeGuy',
	who: 'nataly',
	name: 'Ненормальный',
	text: 'Консул, Вы должны срочно что-то сделать. Какой-то ненормальный ворвался в нашу лабораторию и закрылся в одном из блоков. Он кричит, что знает истинного творца, что наука лжет, что земля плоская и стоит на трех китах. Как прикажете действовать?', 
	answers: { 
		inquisition: { 
			text: 'Сожгите его на костре.', 
			win: 'Странный метод, Консул, но, кажется, он работает. Пока что подобных инцидентов не повторялось.',
			fail: 'Я, конечно, не собираюсь учить Вас принимать решения, но, пожалуй, сперва позвоню в отдел психиатрии.'
		},
		gotothecentre: { 
			text: 'Выставите его в центре колонии.',
			win: 'Прекрасное решение, Консул. Жители Колонии восприняли его, как сумасшедшего, а его речи даже способствовали популяризации науки и притоку населения в обучающих центрах.',
			fail: 'Консул, кажется у нас появляется подпольная секта инакомыслящих. Старик сумел переманить на свою сторону несколько десятков человек.'
		},
		edgeoftheearth: {
			text: 'Пусть покажет, где кончается земля.',
			win: 'Я думаю, Консул, мы его больше никогда не увидим. Он схватил свою суму и устремился в даль, размахивая руками.'
		}
	}
});

new game.DailyQuest({
	engName: 'MrBoyarsky',
	who: 'nataly',
	name: 'Археологическая находка',
	text: 'Консул, нам удалось открыть новый вид органической связи между человеком, шляпой и усами. В одном из наших археологических котлованов обнаружили странные останки, похожие на человека. На черепе обнаружены следы неидентифицированных образований, предположительно относящихся к отряду усообразных и шляпоподобных.', 
	answers: { 
		thisisboyarsky: { 
			text: 'А, это Боярский. Закопайте его обратно, тысяча чертей!', 
			win: 'Очень странная находка, Консул. Признаюсь — даже меня она шокировала. Но вряд ли она смогла бы принести какую-то пользу современной науке.',
			fail: 'Консул, мы, конечно, выполнили Ваше распоряжение, но этот экспонат мог бы занять одно из ведущих мест в археологическом музее.'
		},
		museum: { 
			text: 'Отправьте в музей.',
			win: 'Консул, новый экспонат произвел фурор среди жителей Колонии. К музею то и дело подъезжают зеленоглазые такси.'
		},
		oneforall: {
			text: 'Один за всех, Натали, и все за одного.',
			win: 'Каналья!',
			fail: 'Это все, конечно, очень воодушевляет, Консул. Мы команда, все такое. Но что нам делать с находкой?'
		}
	}
});

new game.DailyQuest({
	engName: 'Resistors',
	who: 'nataly',
	name: 'Производственные площади',
	text: 'Здравствуйте, Консул. Нам удалось серьезно продвинуться в теории наноразмерных резисторов — это один из ключевых элементов современной электроники. К сожалению, нам необходимы дополнительные производственные площади для продолжения исследования. Мне кажется, вы заинтересованы в научном прогрессе не меньше меня.', 
	answers: { 
		sectants: { 
			text: 'О, как раз избавлюсь от сектантов на одном из заброшенных складов.', 
			win: 'Что же, Консул, условия, конечно, не идеальные, но мы быстро здесь все наладим. Кстати, «сектанты» оказались вполне адекватными ребятами — мы уговорили их пойти на курсы переподготовки.',
			fail: 'План был неплох, Консул, если бы не одно «но»: эти «сектанты» оказались ненормальными. Они нападали на сотрудников и всячески мешали нам. В общем, я поищу другое место.'
		},
		toomuch: { 
			text: 'Я итак половину Колонии отдал под ваши лаборатории.',
			fail: 'Жаль, Консул, но я Вас понимаю. Попробую что-нибудь придумать, но результат уже будет другим.'
		},
		takethishous: {
			text: 'Заберите вон тот дом, а людей куда-нибудь пристройте.',
			win: 'Спасибо, Консул. Новая лаборатория уже провела первые эксперименты, а многие из бывших жителей вызвались добровольцами в обслуживающий персонал.',
			fail: 'Не так-то просто выселить людей на улицу, Консул. Надо было продумать последствия такого решения. Совет по правам Колонистов не дал нам возможности использовать этот дом.'
		}
	}
});

};