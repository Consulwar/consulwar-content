initQuestRegularContentAirfieldBuilding = function() {

new game.QuestLine({
	who: 'thirdenginery',
	engName: 'airfield_building',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('military', 'powerstation', 20)
		);
	},
	finishText: 'Поздравляем! Аэродром достиг максимального уровня. Слава Великому Консулу!'
}, [
	new game.Quest({
		engName: 'airfield_10',
		text: '<p>Здравия желаю, Командир! Я готов провести для вас небольшую экскурсию по Аэродрому. Здесь базируется военная авиация, но Аэродром – гораздо больше, чем просто взлётно-посадочная полоса.</p><p>Собственно, об этом я и хотел поговорить: нам позарез нужен авиазавод для проектирования новых самолетов и космических кораблей. А ещё испытательный полигон, ремонтные мастерские и вышка диспетчера… Но пока мне лучше остановиться на авиазаводе.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 10-го уровня.',
		reward: {
			metals: 600,
			crystals: 600
		},
		options: {
			accept: {
				text: 'Да уж, лучше остановись.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 10);
		}
	}), new game.Quest({
		engName: 'airfield_15',
		text: '<p>У вашего авиазавода на базе Аэродрома, Командир, уже появились первые многообещающие проекты новых самолетов. Но для того, чтобы грубо прикинуть их стоимость, нужно понять, как новая конструкция будет реагировать на нагрузки.</p><p>Для этого инженерам необходим специальный испытательный полигон, где они будут подвергать образцы всё более серьезным тестам на прочность, вплоть до разрушения конструкции. Вы уже понимаете, куда я клоню?</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 15-го уровня.',
		reward: {
			metals: 1200,
			crystals: 1200
		},
		options: {
			accept: {
				text: 'Понимаю. К новым расходам на всякую фигню.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 15);
		}
	}), new game.Quest({
		engName: 'airfield_20',
		text: '<p>Как ни странно, расходы «на всякую фигню» принесли неожиданный результат – инженерам на испытательном полигоне удалось добиться такой прочности корпуса, что на основе этих наработок был спроектирован новый тип космического истребителя-перехватчика типа «Мираж».</p><p>Остаётся только добавить к этой замечательной броне такие же замечательные пушки – и вы получите новый корабль для штурма караванов в сопровождении стаи Клинков. А может быть, даже толпы, кто знает.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 20-го уровня.',
		reward: {
			metals: 1800,
			crystals: 1800
		},
		options: {
			accept: {
				text: 'Ох, умеешь ты уговаривать, Третий.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 20);
		}
	}), new game.Quest({
		engName: 'airfield_25',
		text: '<p>Инженеры авиазавода информировали меня, что численность боевого флота колонии достигла солидной отметки. Самое время подумать о ремонтных мастерских, Командир, ведь ваши корабли приходят с поля боя довольно потрёпанными.</p><p>Мы могли бы организовать очень быстрые ремонтные работы, чтобы вы могли сразу же отправлять весь ваш флот обратно в гущу боя. Пилотов, конечно, уже не починишь, но это и не требуется – по крайней мере до тех пор, пока у вас есть Верфь.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 25-го уровня.',
		reward: {
			metals: 2400,
			crystals: 2400
		},
		options: {
			accept: {
				text: 'Золотые слова. Начинайте.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 25);
		}
	}), new game.Quest({
		engName: 'airfield_30',
		text: '<p>И снова мне придётся побеспокоить вас, Командир. Дело в Аэродроме: у нас теперь так много кораблей, что существующая диспетчерская служба просто не справляется с нагрузкой. А это чревато авариями, если не чем похуже.</p><p>Поэтому наши инженеры предложили автоматизировать хотя бы ту часть работы, которая приходится на согласования взлетов и посадок, а также размещение кораблей в ангарах. Осталось только поставить на все корабли флота специальные радиомаяки – и, считай, готово дело.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 30-го уровня.',
		reward: {
			metals: 3000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'А нельзя на тебя маяк поставить? Чтоб я знал, когда ты к Палате подходишь.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 30);
		}
	}), new game.Quest({
		engName: 'airfield_35',
		text: '<p>Снова новости Аэродрома: ваш авиазавод, Командир, разработал новую систему наведения для истребителей. Как известно, иногда бой приходится вести в условиях плохой видимости и даже ночью, когда темно, как у рептилоида в заднице.</p><p>Положение выправляли наводчики артиллерии, но теперь у нас есть новая система, которая сочетает в себе оптический, радиолокационный и инфракрасный прицелы. Ни одна зелёная тварь теперь не уйдёт от наших Скорострелов!</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 35-го уровня.',
		reward: {
			metals: 3600,
			crystals: 3600
		},
		options: {
			accept: {
				text: 'Я даже спрашивать не буду, откуда ты знаешь про задницу.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 35);
		}
	}), new game.Quest({
		engName: 'airfield_40',
		text: '<p>Авиазавод работает на полную мощность, Командир, и скоро вы сможете заказывать первые тяжёлые бомбардировщики. Но перед тем, как запустить их в массовое производство, инженеры хотят добавить несколько «обвесов» для противодействия вражеским зениткам.</p><p>Речь идёт об инфракрасных ловушках, генераторах радиопомех и специальных отражателях, – не спрашивайте только, что и как они отражают. У меня тут с собой есть небольшой рапорт об успешно проведённых испытаниях.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 40-го уровня.',
		reward: {
			metals: 4200,
			crystals: 4200
		},
		options: {
			accept: {
				text: 'Убери от меня этот кирпич, я его всё равно читать не буду.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 40);
		}
	}), new game.Quest({
		engName: 'airfield_45',
		text: '<p>Иногда авиазавод выпускает экспериментальные модели самолётов, Консул, чтобы протестировать свои новейшие наработки. Вот и сейчас они доводят до ума новую систему речевого управления, чтобы пилот не отвлекался лишний раз во время ведения боевых действий.</p><p>Говорят, они добились значительных подвижек в этой области, однако в такого рода технологиях всегда есть, что доработать. Словарный запас, например, потому что некоторые замечания автоматика понимает буквально.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 45-го уровня.',
		reward: {
			metals: 4800,
			crystals: 4800
		},
		options: {
			accept: {
				text: 'Да? И куда она идёт, если не секрет?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 45);
		}
	}), new game.Quest({
		engName: 'airfield_50',
		text: '<p>А помните речевое управление, которым занимается авиазавод? В общем, оказалось, что для безопасного тестирования лучше отрабатывать манёвры на наземных стендах и макетах. Да и для других испытаний стенды пригодятся – на них вполне можно проводить тренировки новичков.</p><p>Пропадёт, конечно, давняя традиция запихивать зелёных пилотов в старый Трак и говорить им, что они летят десантироваться на родную планету Рептилоидов, но это даже к лучшему – меньше штанов стирать гарнизонной прачечной.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 50-го уровня.',
		reward: {
			metals: 5400,
			crystals: 5400
		},
		options: {
			accept: {
				text: 'Хуячечной! Ладно, стройте эти ваши макеты.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 50);
		}
	}), new game.Quest({
		engName: 'airfield_55',
		text: '<p>В связи с расширением флота ваш авиазавод получил заказ на изготовления брони для Дредноутов, Консул. Заказ очень хорошо проработан, но наши инженеры всё равно нашли, что можно улучшить: они предлагают сделать не просто очень толстый слой брони на корпусе – они хотят улучшить саму броню!</p><p>Экранировать её внешними плитами из сплава повышенной вязкости и пониженной электропроводности, чтобы «лучи добра» всяких зелёных пиздюков не могли достичь корпуса корабля.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 55-го уровня.',
		reward: {
			metals: 6000,
			crystals: 6000
		},
		options: {
			accept: {
				text: 'Вы там учтите, что вам эту дуру ещё на орбиту выводить.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 55);
		}
	}), new game.Quest({
		engName: 'airfield_60',
		text: '<p>Консул, необходимо ваше содействие: у нас возник небольшой конфликт между техобслуживанием и диспетчерской. Инженеры требуют ежедневного допуска к кораблям флота для проверки боеготовности, а диспетчеры говорят, что не успевают посылать подкрепления на Землю, а космические флоты – в бой.</p><p>А инженеры на это говорят, что не могут гарантировать безопасность полётов. А диспетчеры… Ну, в общем, вы уловили мою мысль, Командир.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 60-го уровня.',
		reward: {
			metals: 6600,
			crystals: 6600
		},
		options: {
			accept: {
				text: 'Уловил. Держи ресурсы, но чтоб было тихо!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 60);
		}
	}), new game.Quest({
		engName: 'airfield_65',
		text: '<p>Отличные новости из Аэропорта, Командир: в связи с расширением взлетно-посадочного поля авиазавод выпустил партию беспилотников. Они будут мониторить территорию Аэропорта на предмет случайных возгораний и прочих неприятностей.</p><p>Наши инженеры даже огнетушители им прикрепили к корпусу. Правда, за последние дни случилось несколько ложных срабатываний. Видимо, всё дело в ярких оранжевых жилетах наших работников…</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 65-го уровня.',
		reward: {
			metals: 7200,
			crystals: 7200
		},
		options: {
			accept: {
				text: 'Зато больше трех собираться не будут.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 65);
		}
	}), new game.Quest({
		engName: 'airfield_70',
		text: '<p>И снова нашим инженерам удалось улучшить вашу авиацию, Командир. Новейшие разработки авиазавода позволять увеличить грузоподъёмность истребителей. А в переводе с инженерного на нормальный это означает, что теперь Скорострелы и даже Осы будут способны взять на борт гораздо больше пушек и боеприпасов.</p><p>И это, разумеется, драматическим образом скажется на их убойной силе. И когда я говорю «драматически», я имею в виду вмиг побледневшие от страха рожи Рептилоидов.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 70-го уровня.',
		reward: {
			metals: 7800,
			crystals: 7800
		},
		options: {
			accept: {
				text: 'Заканчивай этот театр кабуки и бери ресурсы уже.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 70);
		}
	}), new game.Quest({
		engName: 'airfield_75',
		text: '<p>Командир, докладываю вам, что инженеры смогли перенести схему увеличения грузоподъёмности и на Бабуль тоже. Запаса «пирожков» им теперь хватит на всю линию фронта.</p><p>Мы даже пристроили в хвост несколько герметично задраенных отсеков, в которых можно перевозить капсулы с Потерянными. А что? Чем не большой, желтый, сверкающий пирожок для наших зелёных друзей?</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 75-го уровня.',
		reward: {
			metals: 8400,
			crystals: 8400
		},
		options: {
			accept: {
				text: 'Не увлекайся, а то тебя тоже присобачат куда-нибудь для пользы дела.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 75);
		}
	}), new game.Quest({
		engName: 'airfield_80',
		text: '<p>Как вы знаете, Командир, наработки Аэродрома вовсю используются в производстве космического флота. Но есть одна особенность, которую обязательно надо учитывать и в производстве самолетов, и на Верфи: это герметизация.</p><p>Она необходима в воздушном флоте, а в космосе без нее вообще никуда. Но наши инженеры, как всегда, на высоте – вот полный список полимерных материалов, которыми предлагается пропитывать все соединительные детали. В том числе анаэробные!</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 80-го уровня.',
		reward: {
			metals: 9000,
			crystals: 9000
		},
		options: {
			accept: {
				text: 'Анаэробные? А это не заразно?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 80);
		}
	}), new game.Quest({
		engName: 'airfield_85',
		text: '<p>Наш Аэродром так разросся, что выпускает уже более десяти единиц различной авиационной техники. И это очень много, особенно с точки зрения пилотов, ведь им необходимо постоянно осваивать новые виды самолетов и космических кораблей.</p><p>В связи с этим авиазавод расчистил несколько заброшенных полос, обнёс их колючей проволокой и назвал учебным полигоном. Здесь будут осваиваться новые модели воздушных судов, и летать на них будут пока только самые бесстрашные пилоты.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 85-го уровня.',
		reward: {
			metals: 9600,
			crystals: 9600
		},
		options: {
			accept: {
				text: 'Бесстрашные и незастрахованные, а надеюсь?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 85);
		}
	}), new game.Quest({
		engName: 'airfield_90',
		text: '<p>Я ведь уже говорил вам, Командир, что ваш Аэродром стал одной из самых крупных военных структур на планете? И персонала для обслуживания этого комплекса требуется всё больше и больше.</p><p>Выход из ситуации, как всегда, очень простой – надо поселить весь персонал вблизи Аэродрома и обеспечить необходимой инфраструктурой. Вот тут наши инженеры набросали примерный план будущего авиагородка, а вам остаётся только утвердить их смету.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 90-го уровня.',
		reward: {
			metals: 10200,
			crystals: 10200
		},
		options: {
			accept: {
				text: 'Парки и школы выкинуть, а остальное делайте.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 90);
		}
	}), new game.Quest({
		engName: 'airfield_95',
		text: '<p>Наши инженеры, Консул, проводят техническое обслуживание вашего флота, основываясь на том, как быстро изнашиваются те или иные детали. Работа отдела заключается в том, чтобы выбраковать те части, которые вот-вот пойдут вразнос.</p><p>Это работа тонкая, но вполне выполнимая. И было бы совсем здорово, если бы существовала возможность не только отлавливать изношенные детали, но и заменять их более прочными. Правда, для этого отделу понадобится небольшое расширение.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 95-го уровня.',
		reward: {
			metals: 10800,
			crystals: 10800
		},
		options: {
			accept: {
				text: 'Как рука, кстати? ТО прошла?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 95);
		}
	}), new game.Quest({
		engName: 'airfield_100',
		text: '<p>Мы подходим к завершающему этапу в самолётостроении, Командир, и очень скоро ваш Аэродром станет самым огромным и развитым объектом на планете. Осталось всего ничего – подготовить парад военно-воздушной техники.</p><p>О, я уже представляю, как построенные в ряд тени Скорострелов пронесутся по вашей земле, Консул. Когда-нибудь мы отобьём нашу родную планету у проклятых захватчиков, и сотый Аэродром – один из наиважнейших шагов в сторону победы.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.airfield.name + ' 100-го уровня.',
		reward: {
			metals: 11400,
			crystals: 11400
		},
		options: {
			accept: {
				text: 'Да, победы! И убедитесь, что моя статуя будет натёрта до блеска.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 100);
		}
	})
]);

};