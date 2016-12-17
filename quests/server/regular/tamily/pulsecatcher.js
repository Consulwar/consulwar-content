initQuestRegularContentPulsecatcherBuilding = function() {

new game.QuestLine({
	who: 'tamily',
	engName: 'pulsecatcher_building',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Research.has('evolution', 'science', 20)
		);
	},
	finishText: 'Поздравляем! Импульсный Уловитель достиг максимального уровня. Он ещё послужит величию вашей колонии, вот увидите!'
}, [
	new game.Quest({
		engName: 'pulsecatcher_1',
		text: '<p>У вас теперь так много работы, правитель, что мне даже как-то неловко вас отвлекать. Но повод стоящий – наши инженеры разработали прибор, который сможет собирать какую-то совершенно особую импульсную энергию из космоса.</p><p>По словам учёных, сама эта энергия настолько необычная, что в генераторах её использовать совершенно бесполезно. Но зато Совет очень положительно оценил этот прорыв в нашей науке и готов выделять вам небольшой ежедневный бонус, чтобы скомпенсировать постройку этого сооружения.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 1-го уровня.',
		reward: {
			metals: 500,
			crystals: 500
		},
		options: {
			accept: {
				text: 'То есть я строю бесполезную хрень, а они мне ещё и приплачивают за это? Супер!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher');
		}
	}), new game.Quest({
		engName: 'pulsecatcher_5',
		text: '<p>Эта штука, которую строят инженеры, оказалась не такой уж и бесполезной, правитель. Учёные уже нашпиговали Уловитель всякими датчиками и приборами для отслеживания космических лучей. Я и не знала, что в космосе бывают лучи.</p><p>Это, наверное, очень красивое зрелище. А ещё совершенно непонятно, почему все сооружения для космических исследований имеют такую вытянутую, я бы даже сказала, продолговатую форму? Может, это как-то помогает приборам ловить импульсы Вселенной?</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 5-го уровня.',
		reward: {
			metals: 1000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'О да, детка, эта форма создана самой природой. Кхем… Исключительно для импульсов Вселенной.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 5);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_10',
		text: '<p>Неожиданно Уловителем заинтересовались учёные-биологи, Консул. Оказалось, что они уже давно ищут надёжный способ напыления наночастиц. Опыты с мощным магнитным полем показали, что это в принципе возможно, но нужна ещё и управляемая гравитация, чтобы частички не слипались друг с другом.</p><p>И если мы найдём место на Уловителе, то там можно будет проводить испытания этой плазменной пыли, как учёные её называют. Говорят, что смогут со временем создать настоящие наноповязки и наномази.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 10-го уровня.',
		reward: {
			metals: 1500,
			crystals: 1500
		},
		options: {
			accept: {
				text: 'Плазменная – не алмазная, пусть играются в свою науку.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 10);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_15',
		text: '<p>Мы пока ещё не получаем импульсной энергии, Консул, но зато уже вовсю заработали датчики, которые отслеживали космические лучи. Согласно отчёту, в котором я мало что поняла, оборудование зарегистрировало гораздо больше позитронов, чем ожидалось.</p><p>На самом деле, я цитирую: «…даже в несколько раз больше, чем электронов сравнимых энергий. Получить удовлетворительное объяснение наблюдаемому феномену пока не удаётся». В этом месте на отчёте здоровое пятно от какого-то алкогольного напитка.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 15-го уровня.',
		reward: {
			metals: 2000,
			crystals: 2000
		},
		options: {
			accept: {
				text: 'Кстати, это отличная мысль. Ну, за позитроны!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 15);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_20',
		text: '<p>После того, как вы взяли на себя управление планетой, наша наука стала самой быстроразвивающейся отраслью, правитель, однако некоторые фундаментальные вопросы так и остались без ответов.</p><p>Вот, например, заявка от физиков: они хотели бы установить на Импульсный Уловитель оборудование для поиска рептилового излучения. Если они найдут то, что ищут, это будет означать, что наша вселенная действительно образовалась в результате Большого Взрыва и с тех пор всё быстрее и быстрее расширяется.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 20-го уровня.',
		reward: {
			metals: 2500,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Выходит, галактика Совета от нас удаляется? Затребуй у них аванс, Тамили.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 20);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_25',
		text: '<p>Представляете, правитель, оборудование для регистрации рептилового излучения показывает, что Вселенная сначала расширялась очень быстро. Из-за этого свету, который шёл до нас от очень далёких галактик, пришлось преодолевать значительно большее расстояние, потому что само пространство расползалось в разные стороны с течением времени.</p><p>Именно поэтому мы видим самые дальние объекты почти такого же размера, как ближние – мы видим их там, где их уже давно нет! Разве это не удивительно, Консул?</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 25-го уровня.',
		reward: {
			metals: 3000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Чего нет? Кто-то опять что-то спёр?!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 25);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_30',
		text: '<p>Пока идёт подготовка к поиску импульсного излучения, правитель, учёные не сидят сложа руки. Например, на Уловителе был запущен ещё один прибор, который будет наблюдать за свойствами вакуума.</p><p>Я не вдавалась в подробности, описанные в заявке, – честно говоря, там было слишком много букв, – но основной посыл состоял в том, чтобы наблюдать всякие космологические штуки. Скопления галактик, далёкие сверхновые, чёрные дыры – все эти объекты могут многое рассказать учёным.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 30-го уровня.',
		reward: {
			metals: 3500,
			crystals: 3500
		},
		options: {
			accept: {
				text: 'Когда расскажут, как добывать артефакты пачками, сразу беги ко мне с докладом.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 30);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_35',
		text: '<p>Теперь наши учёные заинтересовались центрами галактик, Консул. Когда я вежливо намекаю им, что пора бы уже достроить Импульсный Уловитель и начать использовать его по прямому назначению, они только что-то бурчат и суют мне свои новые безумные проекты.</p><p>Вот и ещё один – про наблюдение за большими облаками газа в центре галактик, чтобы поймать момент, когда они начнут коллапсировать и превратятся в сверхмассивные чёрные дыры. А для наблюдений им, конечно же, нужны ещё приборы и люди.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 35-го уровня.',
		reward: {
			metals: 4000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Интересно, наблюдают ли рептилоиды-учёные за нашей планетой, чтобы поймать момент, когда я окончательно свихнусь?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 35);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_40',
		text: '<p>Я думала, что слышала все сумасшедшие идеи, но новый теоретик переплюнул всех, правитель. Он утверждает, что если предоставить ему оборудование на Уловителе, то он докажет, что наш мир – не более чем просто плоскость, «брана» в многомерной Вселенной.</p><p>И все остальные миры тоже представляют собой плоские листы, которые колеблются и взаимодействуют между собой. Там, где они слишком близко находятся друг к другу, находятся чёрные дыры или врата в другой мир. Как вам такое?</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 40-го уровня.',
		reward: {
			metals: 4500,
			crystals: 4500
		},
		options: {
			accept: {
				text: 'Чёрная дыра как врата в другой мир? Я сейчас Вахаёбовича ещё больше зауважал.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 40);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_45',
		text: '<p>В центре нашей галактики происходит уникальное событие, правитель! Прямо сейчас мы можем наблюдать, как черная дыра поглощает нейтронную звезду.</p><p>Ну, то есть увидеть в реальном времени, как горячий газ падает за горизонт событий, смогут только те счастливчики, которым выпало дежурить у новенького рентгеновского телескопа, который только что поставили на Импульсный Уловитель. Остальным придётся удовлетвориться трансляцией, которая идёт в реальном времени на все инфопанели планеты.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 45-го уровня.',
		reward: {
			metals: 5000,
			crystals: 5000
		},
		options: {
			accept: {
				text: 'Хочешь сказать, у вас это как футбол? Ужас какой.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 45);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_50',
		text: '<p>А вы когда-нибудь слышали про запутанные частицы, правитель? Как правило, это кванты, один из которых зеркально повторяет все события, случившиеся с другим, какое бы расстояние их не разделяло. Забавно, что пока никто толком не понимает, почему так происходит.</p><p>Но зато способов использовать эти частицы становится всё больше – и сегодня одна из них отправится за горизонт событий чёрной дыры. Данные эксперимента будут обрабатываться учёными в новенькой лаборатории Уловителя.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 50-го уровня.',
		reward: {
			metals: 5500,
			crystals: 5500
		},
		options: {
			accept: {
				text: 'А он не рухнет нам всем на голову со всей этой хренью, что вы там уже понастроили?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 50);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_55',
		text: '<p>Иногда, хотя и очень редко, на нашу планету прилетают совершенно уникальные частицы. Я слышала, как белые халаты говорили, что энергия таких частиц в сто миллионов раз больше, чем энергия в наших ускорителях. И пока что учёные не могут понять, откуда именно прилетают такие «подарки».</p><p>Ясно только, что расстояния они преодолевают огромные. В этом и состоит парадокс – как им удаётся при пролёте нескольких галактик сохранить такую большую энергию? Ответ обещает дать новая обсерватория Уловителя.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 55-го уровня.',
		reward: {
			metals: 6000,
			crystals: 6000
		},
		options: {
			accept: {
				text: 'А у них там ничего не треснет? И где моя уникальная импульсная энергия?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 55);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_60',
		text: '<p>Помните, я говорила, что наши учёные интересуются центрами галактик? Оказывается, в обсерватории Уловителя можно наблюдать не только коллапс газовых скоплений, но и взрывы сверхновых. Причём нужен сигнал из самых недр взрывающейся звезды.</p><p>По словам белых халатов, это бы здорово продвинуло науку в области физики звёзд и их ядер, ведь никто доподлинно не знает, что именно творится внутри раскалённого шара, в котором постоянно происходят термоядерные реакции.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 60-го уровня.',
		reward: {
			metals: 6500,
			crystals: 6500
		},
		options: {
			accept: {
				text: 'Ты сейчас очень точно описала состояние моего мозга, Тамили.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 60);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_65',
		text: '<p>Наблюдая взрывы сверхновых звёзд в обсерватории Уловителя, Консул, учёные пришли к выводу, что после сброса оболочки и коллапса ядра от звезды остаётся относительно небольшой шар диаметром в несколько десятков километров – так называемая нейтронная звезда.</p><p>Но что особенно удивительно, при столь малом размере весит этот шарик очень много. Похоже, что вещество у нейтронной звезды внутри упаковано так же плотно, как в атомном ядре. А в центре, возможно, даже ещё плотнее.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 65-го уровня.',
		reward: {
			metals: 7000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Только не надо везти это вещество сюда, лады?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 65);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_70',
		text: '<p>Мы думали, что нашли самое плотное вещество во Вселенной и оно находится внутри нейтронной звезды, но недавно один из белых халатов Натали выдвинул гипотезу о том, что давление и температура внутри некоторых звёзд настолько велики, что даже протоны и нейтроны там дробятся на кварки.</p><p>Довольно безумная мысль. Но приборы Уловителя показывают, что это действительно может быть так. И даже возможно, что это странное вещество из кварков существует в обычном пространстве.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 70-го уровня.',
		reward: {
			metals: 7500,
			crystals: 7500
		},
		options: {
			accept: {
				text: 'Да я смотрю, они там уже совсем от космоса ошалели. Странно это всё.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 70);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_75',
		text: '<p>Пока наверняка не доказано, что странное вещество вообще существует, однако им уже активно интересуются физики-теоретики, правитель. И один из учёных выдвинул теорию о том, что мы не можем обнаружить кварковое вещество просто потому, что оно не взаимодействует с обычной материей.</p><p>Мол, из-за того, что в нашем мире все взаимодействия электромагнитные, странное вещество проскальзывает мимо материи по её наружному заряду. Выходит, нужно либо воспроизвести условия внутри звезды, либо…</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 75-го уровня.',
		reward: {
			metals: 8000,
			crystals: 8000
		},
		options: {
			accept: {
				text: '…отправить этого умника прямиком в кварковую звезду. Посмотрим, как он из неё выскользнет.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 75);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_80',
		text: '<p>Где-то в глубинах нашей галактики учёным удалось отыскать маленькую звезду, правитель, которая, предположительно, является кварковой. Однако исследовать её будет достаточно сложно, ведь мы не можем просто направить в звезду гаммадрон и посмотреть, что получится.</p><p>Неясно вообще, как взаимодействовать со странным веществом, поэтому в качестве первых шагов звезду окружили плотным кольцом из датчиков, данные с которых постоянно передаются в лаборатории Уловителя.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 80-го уровня.',
		reward: {
			metals: 8500,
			crystals: 8500
		},
		options: {
			accept: {
				text: 'А я вот сейчас не понял, почему мы не можем просто послать в звезду гаммадрон. А?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 80);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_85',
		text: '<p>Как вы знаете, правитель, найти отличия между нейтронной звездой и кварковой, исходя только из наблюдений, почти невозможно, но учёные всё-таки нашли способ увидеть, что находится внутри таких звёзд.</p><p>Всё оказалось просто и элегантно: нужно просто найти двойную систему из нейтронных звёзд в состоянии, близком к коллапсу, и тщательно пронаблюдать эффекты от их столкновения. Даже если обе звезды окажутся нейтронными, мы всё равно получим много информации об их строении и физике.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 85-го уровня.',
		reward: {
			metals: 9000,
			crystals: 9000
		},
		options: {
			accept: {
				text: 'Осталось только подтолкнуть пару звёзд в галактике. Или наш Уловитель и это может?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 85);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_90',
		text: '<p>Несмотря на обоснованность теории о том, что мы не можем взаимодействовать со странным веществом, появилась и набирает популярность противоположная теория. В ней говорится, что странное вещество, соприкоснувшись с обычным, может вызвать большое выделение энергии и, как результат, превращение всего окружающего вещества в странное.</p><p>Говорится даже о маленьком, но реальном шансе вызвать цепную реакцию таких превращений. Военные, как всегда, предлагают усилить меры безопасности на Уловителе.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 90-го уровня.',
		reward: {
			metals: 9500,
			crystals: 9500
		},
		options: {
			accept: {
				text: 'Да, это очень поможет. Можно ещё звезду оцепить, чтоб не трепыхалась.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 90);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_95',
		text: '<p>Теперь я понимаю, что, когда у науки мало фактических данных, теоретики резвятся, как малые дети – у них есть объяснения всем фактам и событиям. Например, мы уже получаем заявки на конструирование тоннелей из странного вещества, телепорты частиц и машины времени.</p><p>К сожалению, для того, чтобы действительно сделать что-то, что будет работать в реальности, нужно провести множество нудных и однообразных экспериментов и вычислений. Как раз для этого на Уловителе создаётся специальный научный отдел.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 95-го уровня.',
		reward: {
			metals: 10000,
			crystals: 10000
		},
		options: {
			accept: {
				text: 'Эй! А мне, может, нравится идея про машину времени. Вы такое можете?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 95);
		}
	}), new game.Quest({
		engName: 'pulsecatcher_100',
		text: '<p>Я должна признаться вам, правитель, в невольном обмане. Я даже не подозревала, что никакой импульсной энергии не существует – ведь у меня были все накладные на приборы, которые должны её регистрировать!</p><p>Но оказалось, что «Импульсный Уловитель» – это суперсекретный военный проект для создания нового оружия. Сначала они хотели применять антиматерию, потом тёмную энергию, гравитационные волны и, наконец, странное вещество. К сожалению, пока ничего из этого не дало практического результата.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.pulsecatcher.name + ' 100-го уровня.',
		reward: {
			metals: 10500,
			crystals: 10500
		},
		options: {
			accept: {
				text: 'Зато бонусы Уловителя ещё как дали! Продолжайте проект.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'pulsecatcher', 100);
		}
	})
]);

};