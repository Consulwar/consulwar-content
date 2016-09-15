initQuestRegularContentShipyardBuilding = function() {

new game.QuestLine({
	who: 'thirdenginery',
	engName: 'shipyard_building',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('military', 'powerstation', 25)
		);
	},
	finishText: 'Поздравляем! Верфь достигла максимального уровня. Слава Великому Консулу!'
}, [
	new game.Quest({
		engName: 'shipyard_10',
		text: '<p>Это здание, Командир, является ключевым для вашего звёздного флота. Здесь мы будем производить корабли, которые надерут зелёные жопы; и хоть галактика велика, поверьте мне, им некуда будет скрыться от наших штурмовых отрядов.</p><p>Поэтому для начала мы усовершенствуем конструкцию Ос, а именно: их уникальную способность оставлять свой хвост в корабле противника. Такой трюк даже не снился Рептилоидам, а значит, нам будет гораздо проще застать их врасплох. Верфь готова начать испытания этой технологии.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 10-го уровня.',
		reward: {
			metals: 700,
			crystals: 700
		},
		options: {
			accept: {
				text: 'Вперёд, к зелёным жопам!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 10);
		}
	}), new game.Quest({
		engName: 'shipyard_15',
		text: '<p>Осы, конечно, чрезвычайно полезны в любой космической битве, но не будем забывать и об истребителях. Причём таких, которые  не видны на радарах до тех пор, пока не станет слишком поздно. И ещё можно добавить им маневренности, тогда мы получим идеальные машины для быстрых и точных атак.</p><p>Миражи смогут прикрывать более мощные и неповоротливые корабли и одновременно атаковать противника. И, благодаря новым технологиям, у них будет отличный шанс выйти из боя вообще без повреждений.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 15-го уровня.',
		reward: {
			metals: 1400,
			crystals: 1400
		},
		options: {
			accept: {
				text: 'Если они ещё и дешёвые…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 15);
		}
	}), new game.Quest({
		engName: 'shipyard_20',
		text: '<p>Теперь, когда у вас есть истребители и штурмовики, Командир, пора начать строительство первого корабля лёгкого класса – фрегата. В дальнейшем он будет прикрывать ваш основной флот от атак противника, но пока мы будем использовать его, как основное оружие против мелких и наглых отрядов Рептилоидов, которые безнаказанно шныряют по вашей галактике.</p><p>Испытания, которые проведёт Верфь, помогут сделать ваши фрегаты грозой вражеских Клинков. О ваших битвах и кораблях будут слагать легенды, Командир.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 20-го уровня.',
		reward: {
			metals: 2100,
			crystals: 2100
		},
		options: {
			accept: {
				text: 'Ну а то! Мы и человечка специального наймём…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 20);
		}
	}), new game.Quest({
		engName: 'shipyard_25',
		text: '<p>Ваш флот, Командир, успешно атакует патрули и мелкие торговые флоты Рептилий, и наши инженеры заметили, что после боя в космосе остаётся довольно много обломков. Было бы здорово выловить их и доставить на базу – вполне возможно, что наши умельцы смогут извлечь из них полезные ресурсы.</p><p>Но для этого придётся построить особый грузовой корабль. Мы уже работаем над его чертежами, – думаю, у него не будет особо мощного вооружения и брони, ведь он должен, по сути, исполнять только одну функцию.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 25-го уровня.',
		reward: {
			metals: 2800,
			crystals: 2800
		},
		options: {
			accept: {
				text: 'А я уже говорил, что всегда мечтал ковыряться в мусоре?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 25);
		}
	}), new game.Quest({
		engName: 'shipyard_30',
		text: '<p>Ваш военный гений, Командир, неумолимо ведёт звёздный флот к очередной победе. Я уверен, что за это время вы получили немало очков чести, освобождая космос от рептилоидных тварей. Так вот, теперь у вас появилась возможность улучшить самые маленькие и, казалось бы, неважные корабли: Гаммадроны, Осы, Миражи.</p><p>Каждое вложение будет давать им дополнительное количество единиц брони и оружия. И кто знает? Может так случиться, что эти единицы когда-нибудь помогут выиграть вам парочку решающих сражений.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 30-го уровня.',
		reward: {
			metals: 3500,
			crystals: 3500
		},
		options: {
			accept: {
				text: 'А нет такой кнопки, чтоб всё вместе в десять раз?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 30);
		}
	}), new game.Quest({
		engName: 'shipyard_35',
		text: '<p>А вы заметили, Командир, что теперь зеленокожие стали летать более мощными флотами? Толпы, орды и даже тучи мелких кораблей – это ужасно раздражает, не правда ли? Как раз для борьбы с этим явлением и был изобретён крейсер, у которого всегда есть ответ в виде мощной ионной пушки.</p><p>Просто не забывайте прикрывать его от атак кораблями сопровождения, и этот монстр запросто сметёт всё на своём пути. А вам останется только подбирать обломки и пересчитывать трофейные ресурсы.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 35-го уровня.',
		reward: {
			metals: 4200,
			crystals: 4200
		},
		options: {
			accept: {
				text: 'Я могу еще и добивать выживших, если что.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 35);
		}
	}), new game.Quest({
		engName: 'shipyard_40',
		text: '<p>Вам уже встречалась Хайль-Гидра, Командир? Отвратительный корабль. Отвратительный в том смысле, что сочетает в себе огромный урон и довольно крепкую броню, которую почти невозможно пробить даже солидным количеством крейсеров.</p><p>Вот именно поэтому Верфь начинает разработку вашего первого Линкора. Это – наш ответ Рептилоидам и Хайль-Гидре. Прочный, относительно недорогой корабль, обладающий достаточно убойной силой – вот что нужно этой колонии, Консул.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 40-го уровня.',
		reward: {
			metals: 4900,
			crystals: 4900
		},
		options: {
			accept: {
				text: 'И мы это заслужили!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 40);
		}
	}), new game.Quest({
		engName: 'shipyard_45',
		text: '<p>Осы – не единственные корабли, имитирующие природу, Командир. Иногда наших Гаммадронов тоже сравнивают с насекомыми. Во-первых, они роятся. То есть, конечно же, так кажется, когда множество беспилотников группируется перед началом атаки. А во-вторых, они жужжат, хотя в космосе, как вы знаете, Консул, звук не распространяется.</p><p>Впрочем, это всё лирика. На практике Верфь уже давно работает над чертежами Авианосца – корабля, который в будущем сможет восполнять потери Гаммадронов прямо во время боя.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 45-го уровня.',
		reward: {
			metals: 5600,
			crystals: 5600
		},
		options: {
			accept: {
				text: 'Возьму-ка я ружьё и зонтик. Так, на всякий случай.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 45);
		}
	}), new game.Quest({
		engName: 'shipyard_50',
		text: '<p>Отлично, Командир, ваш флот прекрасно сбалансирован и готов к любым неожиданностям. Правда, иногда вашим инженерам всё-таки хочется быть перфекционистами – создать огромный, облепленный бронёй и защитными пластинами корабль-таран.</p><p>Корабль, который будет врываться и размазывать вражескую армаду по ближайшим астероидам. И название у него будет соответствующее – Дредноут. Верфь уже пошла навстречу пожеланиям инженеров и готовится выпустить первые опытные образцы с новейшим вооружением на борту.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 50-го уровня.',
		reward: {
			metals: 6300,
			crystals: 6300
		},
		options: {
			accept: {
				text: 'Я бы тоже хотел врываться, так и передай.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 50);
		}
	}), new game.Quest({
		engName: 'shipyard_55',
		text: '<p>Командир, Верфь докладывает, что инженеры закончили опыты с дальнобойными пушками в условиях космического пространства. Результаты этих опытов были настолько впечатляющими, что их немедленно засекретили. И одновременно с этим началась разработка нового супердальнобойного оружия, предназначенного для поддержки вашего звёздного флота.</p><p>Это оружие – рейлган – по наводке вашего флота будет стрелять по кораблям противника, находящимся за тридевять световых лет. Главное в этом деле – не промахнуться.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 55-го уровня.',
		reward: {
			metals: 7000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Главное в этом деле – стрелять от себя.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 55);
		}
	}), new game.Quest({
		engName: 'shipyard_60',
		text: '<p>Интересная получается картина, Командир: я просмотрел несколько боёв и заметил, что ваши Траки являются приоритетной целью у очень серьёзных кораблей Рептилоидов – Виверн. Эти заразы встречаются почти в каждом патруле, с которым у вас были стычки за последнее время.</p><p>Я уже отправил данные инженерам, и они нашли способ улучшить навигацию и позиционирование Траков. Проще говоря, они перестанут высовываться до окончания боя. Я бы сказал, что это очень эффективный способ сохранить флот и добычу.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 60-го уровня.',
		reward: {
			metals: 7700,
			crystals: 7700
		},
		options: {
			accept: {
				text: 'Ещё бы и чести было столько же, сколько людишек!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 60);
		}
	}), new game.Quest({
		engName: 'shipyard_65',
		text: '<p>Вы, наверное, слышали, Командир, что наши учёные наблюдают за другими вселенными – с научной, а иногда и с военной целью. Иногда какие-то наработки имеют в своей основе технологии, подсмотренные через портал в другой мир.</p><p>Но с Пожинателем вышло немного не так: один наш лаборант случайно настроил портал в мир Консулов и увидел, как один из них играет в компьютерную игру про вторжение на Землю. Это зрелище так захватило учёного, что через несколько недель он сконструировал прототип нового корабля.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 65-го уровня.',
		reward: {
			metals: 8400,
			crystals: 8400
		},
		options: {
			accept: {
				text: 'А что, так можно было?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 65);
		}
	}), new game.Quest({
		engName: 'shipyard_70',
		text: '<p>Скоро случится кое-что очень важное, Консул. Верфь получила чертежи самого грандиозного корабля, какой только можно себе представить. Огромный, смертоносный, почти неуязвимый, напичканный новейшими разработками инженеров и белых халатов, этот корабль станет надёжным и роскошным домом для вашего бесценного робота-аватара.</p><p>Поскольку почти вся экономика колонии будет выжата досуха для постройки этой громадины, Верфь сможет осилить производство только одного экземпляра. Берегите его, Командир.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 70-го уровня.',
		reward: {
			metals: 9100,
			crystals: 9100
		},
		options: {
			accept: {
				text: 'Ладно, обещаю не проебать его сразу.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 70);
		}
	}), new game.Quest({
		engName: 'shipyard_75',
		text: '<p>Может показаться, что теперь, когда линейка кораблей боевого флота полностью скомпонована, Верфи больше нечего делать, но это не так. Всегда можно что-нибудь улучшить даже в таком универсальном корабле, как Крейсер.</p><p>Например, снабдить его мощной пушкой, которая будет очень долго заряжаться с начала боя и выдавать залп огромной мощности только под самый конец. Чем не решительная точка в затянувшейся битве, Командир? Уверен, наши инженеры ещё не раз удивят вас своими технологическими новинками.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 75-го уровня.',
		reward: {
			metals: 9800,
			crystals: 9800
		},
		options: {
			accept: {
				text: 'Да они, в принципе, каждый день меня удивляют.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 75);
		}
	}), new game.Quest({
		engName: 'shipyard_80',
		text: '<p>Мы тут, на Верфи, очень довольны Линкорами флота, Командир. По нашим графикам и расчётам выходит, что нет корабля, более сбалансированного по стоимости, огневой мощи и защитным технологиям. Немного другого мнения придерживаются те, кто служит на Линкорах – им кажется, что на защиту их задниц мы могли бы потратить немного больше, чем обычно.</p><p>Верфь изыскала дополнительные средства и провела серию экспериментов, в ходе которых выяснила, как сократить риск потери этого замечательного корабля…</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 80-го уровня.',
		reward: {
			metals: 10500,
			crystals: 10500
		},
		options: {
			accept: {
				text: 'Передай задницам, что денег нет. Дальше ты знаешь.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 80);
		}
	}), new game.Quest({
		engName: 'shipyard_85',
		text: '<p>Это казалось совершенно невозможным, но наши инженеры смогли улучшить Дредноуты, Командир. Они снабдили их более мощными моделями той самой пушки, которую устанавливали на Крейсеры. Но для Дредноута получилось сделать значительный апгрейд – его огромная пушка разряжается гораздо быстрее, если вы понимаете, что я имею в виду.</p><p>И разряжается она с катастрофическими последствиями для вражеской атаки. Верфь готова запустить это улучшение в серийное производство, как только на это найдутся средства.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 85-го уровня.',
		reward: {
			metals: 11200,
			crystals: 11200
		},
		options: {
			accept: {
				text: 'Они там вообще спят? Про остальное и так понятно.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 85);
		}
	}), new game.Quest({
		engName: 'shipyard_90',
		text: '<p>Тень, как вы, наверное, уже знаете, Командир, это пиздец какой страшный корабль. Но страх не должен мешать солдату целится, верно? Поэтому на Верфи крепко подумали и решили снабдить новыми прицелами партию Рейлганов – ведь это полностью автоматизированные орудия и там нет солдат, которые могли бы обосраться, глядя на Тень через прицел.</p><p>Ну, или просто думая о Тени. В общем, идея пришлась одинаково по душе и руководству, и простым солдатам. Осталось только воплотить её в жизнь.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 90-го уровня.',
		reward: {
			metals: 11900,
			crystals: 11900
		},
		options: {
			accept: {
				text: 'Блин, теперь я тоже думаю о Тени.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 90);
		}
	}), new game.Quest({
		engName: 'shipyard_95',
		text: '<p>Конструкция Пожинателя настолько ценна, что ни при каких обстоятельствах не должна попасть в руки Рептилоидов, Командир. Поэтому инженеры сконструировали бомбу, которую вмонтировали в корпус корабля.</p><p>Если он будет уничтожен во время боя, то бомба сработает и уничтожит не только остатки Пожинателя, но и все корабли Рептилоидов, находящиеся поблизости. По-моему, это отличная идея, и даже немного странно, что её внедрили только на один корабль. Я бы укомплектовал такими бомбами весь флот.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 95-го уровня.',
		reward: {
			metals: 12600,
			crystals: 12600
		},
		options: {
			accept: {
				text: 'А кто бы нам ресурсы привозил, дубина?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 95);
		}
	}), new game.Quest({
		engName: 'shipyard_100',
		text: '<p>Наши инженеры подумали над вашим мудрым замечанием, Командир, относительно того, что кто-то всё-таки должен возвращаться домой. Разумеется, если выбирать один корабль, то это должен быть ваш личный Флагман, Консул.</p><p>Поэтому Верфь разрабатывает варианты двигателя, который позволил бы вашему кораблю возвращаться даже после того, как весь ваш флот будет уничтожен. Мне тяжело думать о таком исходе, но обязанность хорошего инженера состоит в том, чтобы постараться предусмотреть всё.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.shipyard.name + ' 100-го уровня.',
		reward: {
			metals: 13300,
			crystals: 13300
		},
		options: {
			accept: {
				text: 'Ты – хороший инженер, Третий.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 100);
		}
	}) 	
]);

};