initQuestDailyContentCalibrator2 = function() {

new game.DailyQuest({
	engName: 'Retranslator',
	who: 'calibrator',
	name: 'Ретрансляционный узел', 
	text: 'Ох, Консул, это Вы. Я как раз собирался доложить Вам о происшествии на одном из наших ретрансляционных узлов, но совсем закопался с отладкой нового алгоритма шифрования данных. Так вот, внезапно ретранслятор перешел в режим сна, а затем и вовсе на ручное управление. Мы обойдемся и без него, но, думаю, стоит разобраться в этой ситуации.', 
	
	answers: { 
		badsignal: { 
			text: 'Поэтому я уже второй день смотрю помехи вместо ТВ?', 
			win: 'Консул, Вы натолкнули меня на мысль, и она оказалась верной: один из кабелей в результате пробоя выдавал периодические импульсы, которые невероятным образом сложились в команду перевода ретранслятора в ручное управление.', 
			fail: 'Вряд ли, Правитель. Развлекательная, военная и информационная сети не только не связаны между собой, но и имеют сложную систему резервирования.' 
		},
		
		whatishappen: { 
			text: 'Так разберись, в чем там дело. У тебя карт-бланш.', 
			win: 'Консул, я не стал привлекать серьезные силы и не зря: оказалось, что это была рядовая неисправность, и наша разведгруппа без проблем устранила ее.', 
			fail: 'Правитель, я не хотел привлекать такое внимание к столь мелкой проблеме. Да и мне совершенно некогда строить план операции. Мы справимся и без этого ретранслятора.' 
		},
		
		myarmy: { 
			text: 'Я отправлю туда часть флота.', 
			win: 'Консул, это невероятно. Пришли первые отчеты с места операции: оказалось, что ретранслятор пыталась перенастроить под себя радикально настроенная группа «Межколониального сопротивления». Хорошо, что наш флот быстро разобрался с ними.', 
			fail: 'Наш флот не обнаружил на месте ретранслятора абсолютно ничего, Консул. Космические пираты часто воруют подобные устройства, хотя ума не приложу, зачем им этот хлам.' 
		},
	}
});

new game.DailyQuest({
	engName: 'BigTrouble',
	who: 'calibrator',
	name: 'Серьезное беспокойство', 
	text: 'Консул, не ожидал увидеть Вас. С момента начала полномасштабных боевых действий на Земле и в космосе у меня почти не осталось времени на разговоры. Кстати, насчет боевых действий: по системе калибровки прошли радиопереговоры одного из отрядов Отцов. Было много ругательств, междометий… Кажется, сухопутные силы серьезно обеспокоены.', 
	
	answers: { 
		hellyeah: { 
			text: 'Обеспокоены? Да там творится сущий ад!', 
			win: 'Представляю, Консул, и от этого моя задача становится только сложнее: я чувствую ответственность за каждое слово, задержавшееся в алгоритмах обработки хотя бы на лишнюю секунду.', 
			fail: 'Консул, но система калибровки работает без перебоев, а значит им не о чем беспокоиться, ведь все Ваши команды будут переданы моментально.' 
		},
		
		nopanic: { 
			text: 'Силой устранить панику, немедленно.', 
			win: 'Консул, я передал Ваше указание по каналу связи с командующим составом. Даже и не знаю, кого они теперь боятся больше: рептилоидов или местных командиров.', 
			fail: 'Правитель, попытка силой подавить панику вызвала еще больший всплеск агрессии. Пришлось истребить бунтующих. Неловко вышло.' 
		},
		
		littleparty: { 
			text: 'Сбрось им выпивку и последний выпуск журнала «Hot Mothers».', 
			win: 'Консул, Ваше распоряжение было доведено до службы обеспечения: пока что мы не получили никаких отчетов, но, кажется, ситуация нормализовалась.', 
			fail: 'Я провел Ваш приказ по каналу связи, Консул, но, увы, выполнен он не будет. Совет решительно против подобных вольностей на фронте.' 
		},
	}
});

new game.DailyQuest({
	engName: 'CivilWar',
	who: 'calibrator',
	name: 'Гражданская война', 
	text: 'Консул, я принял один из сигналов с дальней колонии. Кажется, они просят о помощи. Речь идет о гражданской войне между радикальными представителями Колониального Государства и силами консульства. Как ответить на запрос, Правитель?', 
	
	answers: { 
		KG: { 
			text: 'Там не консул, а тиран, наркоман и пьяница. Вперед за оппозицию!', 
			win: 'Правитель, сюжет был не хуже любого блокбастера, но, судя по новостным сводкам, Совет поддержал наше вмешательство и сейчас активно восстанавливает структуру Колонии. Жаль, что жителям не повезло с Консулом так, как нам.', 
			fail: 'Правитель, я отдал приказ флоту, но Совет выступил против вмешательства во внутренние конфликты на колониях и перехватил Ваши указания.' 
		},
		
		consul: { 
			text: 'Это нездоровая херня. Нужно подавить восстание.', 
			win: 'Консул, правительство колонии благодарит нас за помощь. К сожалению, из-за войны с рептилоидами у некоторых жителей совершенно сносит крышу.', 
			fail: 'Консул, я передал Ваши указания военному командованию, но они, мягко говоря, не особо воодушевлены.' 
		},
		
		idontcare: { 
			text: 'Сделай вид, что мы не получали ничего. ', 
			win: 'Не могу сказать, что подобные решения работают всегда, Консул, но конфликт в итоге угас. Ситуация нормализовалась и без нашей помощи.'
		},
	}
});

new game.DailyQuest({
	engName: 'CyberAttack',
	who: 'calibrator',
	name: 'Кибератака', 
	text: 'Здравствуйте, Консул. Я бы побеседовал с Вами, но у нас серьезные проблемы. Сегодня была совершена одна из самых масштабных кибератак на сервера системы калибровки. У нас семиуровневый алгоритм шифрования данных, но злоумышленники все же смогли вытащить части отдельных сообщений. Нам бы не помешало немного денег для усовершенствования системы защиты.', 
	
	answers: { 
		nope: { 
			text: 'Почему я? Пусть Совет платит.', 
			win: 'Звучит логично, Консул, ведь атака была успешна на их сервера. Пожалуй, я подниму эту тему на очередном собрании.', 
			fail: 'Часть расходов, конечно, покроет Совет, Консул, но это достаточно масштабный проект, поэтому необходимо участие каждой колонии.' 
		},
		
		igiveyoumoney: { 
			text: 'Мои переписки тоже есть? Я дам деньги.', 
			win: 'Ого, Консул, кажется, Вы сильно взволнованы. Не думал, что проблема киберпреступности Вас так волнует. Совет высоко оценит Вашу отзывчивость.' 
		},
		
		igotapartofit: { 
			text: 'Вечно все хотят бабла. Ладно, готов скинуться с другими консулами.', 
			win: 'Конечно, Консул. Проект модернизации системы защиты настолько масштабный, что каждая колония будет заниматься лишь небольшой частью.', 
			fail: 'К сожалению, Консул, я думаю вероятность того, что кто-то из своего кармана заплатит за нашу безопасность слишком мала.' 
		},
	}
});

new game.DailyQuest({
	engName: 'NetworkLoad',
	who: 'calibrator',
	name: 'Нагрузка на сеть', 
	text: 'Правитель, добрый день. Я заметил, что в последнее время серьезно выросла нагрузка на сеть в ночное время. Такое ощущение, что кто-то сливает огромные массивы видеоданных. Я не могу установить точное местоположение, но, кажется, это недалеко от Вашей резиденции. У Вас есть мысли, кто это может быть?', 
	
	answers: { 
		forget: { 
			text: 'Выросла? Да так и было всегда. Не бери в голову.', 
			win: 'Пожалуй, Вы правы, Консул. Нагрузка отклонилась всего на несколько процентов. Кажется, я становлюсь слишком мнительным.', 
			fail: 'Я бы не обратил внимания на это, Консул, но чем выше нагрузка на сеть, тем больше вероятность ошибок и потерь. Необходимо разобраться, чтобы предотвратить возможные сбои.' 
		},
		
		checksome: { 
			text: 'Да, рядом есть какой-то центр. Проверь его.', 
			win: 'Не ожидал, что небольшое отделение колониальной прессы окажется подпольным компьютерным клубом без лицензии, да еще и с сомнительным программным обеспечением. Спасибо за наводку, Консул.', 
			fail: '' 
		},
		
		imiss: { 
			text: 'Это я… ммм… звоню родным и близким. Скучаю, все дела.', 
			win: 'Не сильно понимаю Вас, Консул, но, наверное, это действительно важно. Я постараюсь увеличить пропускную способность вашего канала связи.', 
			fail: 'Простите, Консул, но я не понимаю Вас. Почему нельзя пользоваться стандартными визуализаторными передатчиками?' 
		},
	}
});

new game.DailyQuest({
	engName: 'SafetySystem',
	who: 'calibrator',
	name: 'Система контроля', 
	text: 'Здравствуйте, Консул. В связи с частыми происшествиями на шахтах я решил разработать и внедрить цифровую систему автоматического контроля параметров конструкции. В целом, ничего сложного, но необходимо провести внедрение пилотного проекта на одной из шахт, и я надеялся, что Вы поможете с этим.', 
	
	answers: { 
		inmymine: { 
			text: 'Почему все хотят что-то внедрить в мою шахту?', 
			win: 'О, я рад, что Вы спросили, Консул. Я подготовил семичасовую презентацию о моей системе, ее плюсах и перспективах.', 
			fail: 'Видимо, это отказ, Консул, но я просчитал и такой вариант. Мой алгоритм можно применить в другой области, нужно лишь немного подправить его.' 
		},
		
		goodIdea: { 
			text: 'Давай, хорошая идея. Там вечно что-то взрывается.', 
			win: 'Я закончил наладку, Консул, пока что все идет как нельзя лучше: все параметры шахты теперь под нашим контролем, и, если, будет какое-то критическое отклонение, система сразу же примет меры по его локализации.', 
			fail: 'Консул, не хочется Вас расстраивать, но, видимо, я ошибся в каком-то параметре, и система дала сбой. Боюсь, шахта не подлежит восстановлению.' 
		},
		
		fire: { 
			text: 'Попроси Третьего Инженерного соорудить тебе макет для испытаний.', 
			fail: 'Эм, Консул… Мы сделали макет, и все шло по графику испытаний, но потом внезапный сбой вывел из строя гидравлику, и ворота шахты начали бесконтрольно закрываться. Скажу так: персонала, обслуживающего установку, стало больше ровно в два раза, и обувь им теперь вряд ли понадобится.' 
		},
	}
});

new game.DailyQuest({
	engName: 'QuantumProcessor',
	who: 'calibrator',
	name: 'Квантовый процессор', 
	text: 'Консул, добрый день. Раз уж Вы зашли, я хочу показать Вам один из первых квантовых процессоров, что вводят в эксплуатацию в этом году. Вместо традиционных битов, которые могут находиться только в одном состоянии «0» или «1», в нем применяются кубиты. Они могут одновременно находиться в суперпозиции состояний, т.е. во всех сразу, что значительно снижает время обработки информации. Впечатляет, правда?', 
	
	answers: { 
		someprofit: { 
			text: 'Это может иметь выгоду для меня?', 
			win: 'Конечно, Консул. Теперь мы применяем новейшие алгоритмы обработки и поиска оптимальных решений, что позволит мне сэкономить кучу времени, а Вам почти мгновенно получать свежие данные со всех точек галактики и руководить своими военными подразделениями.', 
			fail: 'В личном плане — нет. Увы, Консул, это очень сложная и дорогая технология, которая в данный момент делает серьезные успехи только в сортировке и поиске оптимальных решений.' 
		},
		
		moneyagain: { 
			text: 'Дай угадаю: опять нужно бабло от меня.', 
			win: 'Нет, Консул, это инициатива Совета, и финансирование идет исключительно с их стороны.', 
		},
		
		fire: { 
			text: 'Квантовые-шмантовые. Я ничего не понял.', 
			win: 'Жаль, Консул, но Вам и не нужно вникать в технические тонкости. Главное, что теперь работа пойдет быстрее и надежнее.', 
			fail: 'Жаль, Консул. Вы можете почитать про это. Мне казалось, что правитель колонии должен обладать серьезными знаниями и высоким интеллектом..' 
		},
	}
});

new game.DailyQuest({
	engName: 'BrutalRequests',
	who: 'calibrator',
	name: 'Жестокие запросы', 
	text: 'Ох, не заметил Вас, правитель. Иногда я настолько погружен в работу, что боюсь начать общение с людьми на языке команд и алгоритмов. Я получил данные относительно поисковых запросов, и в последнее время процент желающих увидеть насилие, разрушение и информацию подобного содержания резко возрос. Вам стоит подумать, как обеспечить психологическую разрядку жителей, Консул.', 
	
	answers: { 
		CS: { 
			text: 'Напиши многопользовательскую игру-стрелялку.', 
			win: 'Консул, я удивлен, но судя по статистике, это действительно немного снизило агрессию в сети. Правда, запрос «вычислить по IP» с выходом игры стремится в топ.', 
			fail: 'Мы попытались внедрить игру, но, кажется, это только усилило агрессию жителей. Были случаи, когда пользователи встречались в реальном мире, чтобы выяснить отношения, поэтому на данный момент проект прикрыт.' 
		},
		
		totalcontrol: { 
			text: 'Ввести тотальный контроль интернетов.', 
			fail: 'Правитель, боюсь, этого сделать не выйдет. Во-первых, правозащитные организации не дадут действовать подобным образом, а во-вторых, жители точно не оценят Вашу идею.' 
		},
		
		fire: { 
			text: 'Пусть смотрят, какая разница?', 
			win: 'Консул, через какое-то время частота подобных запросов действительно значительно снизились. Не знаю, чем был вызван всплеск, но он остался позади.'
		},
	}
});

new game.DailyQuest({
	engName: 'Eppla',
	who: 'calibrator',
	name: 'Новая модель', 
	text: 'Консул, добрый день. Вы, наверное, слышали, что завтра компания «Elppa» собирается выпустить в продажу новую модель универсального коммуникативного устройства. Я обеспокоен поведением жителей: огромные очереди возле офисов, тотальное желание сменить свой старый гаджет. Кто-то даже соглашается на участие в опытах, чтобы заработать денег… Мне кажется, помимо простого маркетинга тут замешано что-то еще.', 
	
	answers: { 
		illuminati: { 
			text: 'Конечно, это заговор иллюминатов.', 
			win: 'Консул, честно сказать, я впечатлен. Наш отдел провел обработку различных блоков информации, и оказалось, что это название одной из экстремистских хакерских групп. Из-за их вмешательства через вирус в личные коммуникаторы, у жителей из-за контекстного воздействия возникало непреодолимое желание к покупкам.', 
			fail: 'Это юмор, Консул? Простите, я не всегда понимаю шутки, поскольку слишком много времени провожу в мире цифр и алгоритмов.' 
		},
		
		thebestofthebest: { 
			text: 'Ты что?! Они такие классненькие. Передай мне термос и плед.', 
			fail: 'Кажется, Консул, у нас серьезные проблемы. Я займусь этим делом, как только выдастся свободная минутка.' 
		},
		
		theyaregood: { 
			text: 'Сам не понимаю.', 
			win: 'Не знаю, Консул, меня просто смущает такой ажиотаж. Наверное, я просто давно не интересовался этой областью.', 
			fail: 'Мы провели засекреченное расследование в отношении этой компании, Консул, и установили, что они специально вводили в операционные системы старых устройств проблемы, для поднятия продаж новых моделей.' 
		},
	}
});

new game.DailyQuest({
	engName: 'Fiber',
	who: 'calibrator',
	name: 'Оптическое волокно', 
	text: '…15 N — 001011… MP-211… Ох, Консул, извините, я немного занят. Сегодня мы проводим первое тестирование сверхвысокопроводящего оптического волокна нового поколения. Мы проводим модернизацию линий связи в Колонии и сейчас передаем первое тестовое сообщение по пилотному участку. Может, Вы тоже хотите что-то передать? ', 
	
	answers: { 
		inmyoffice: { 
			text: 'Нет, лучше тяните это волокно сразу в мой офис.',
			fail: 'Консул, я не занимаюсь руководством этого проекта, да и испытания пока что находятся в начальном этапе. ' 
		},
		
		XYZ: { 
			text: 'Конечно, есть одно незыблемое слово.', 
			win: 'Консул, в приемном пункте сказали, что получили тестовое слово, так что все прошло хорошо. Причем новость эту они мне сообщили с улыбками. А что было за слово?', 
			fail: 'К сожалению, Консул, передача не прошла, поскольку слово слишком короткое. постарайтесь придумать что-то длиннее трех букв.' 
		},
		
		fire: { 
			text: 'Давай сам, мне неинтересно.', 
			win: 'Ну что же, Консул, я понимаю. Тестирование — достаточно муторная и скучная задача для обычного человека. Я сделаю все как можно быстрее.', 
		},
	}
});


}