initQuestRegularContentLaboratoryBuilding = function() {
'use strict';

new game.QuestLine({
	who: 'thirdenginery',
	engName: 'laboratory_building',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('residential', 'spaceport')
			&& Game.Building.has('military', 'powerstation', 15)
		);
	},
	finishText: 'Поздравляем! Лаборатория достигла максимального уровня. Слава Великому Консулу!'
}, [
	new game.Quest({
		engName: 'laboratory_25',
		text: '<p>Приветствую, Командир! На нашей планете работает централизованная энергосеть, но в особых случаях людям бывают необходимы портативные генераторы. Учёные предлагают использовать в качестве реактива порошок из чистого Металла, постепенно окисляемый водой.</p><p>По предварительным результатам видно, что такая «батарейка» почти мгновенно выделяет достаточное количество энергии для кратковременного использования. Однако Лаборатория, как всегда, хочет провести дополнительные тесты.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 25-го уровня.',
		reward: {
			metals: 300,
			crystals: 300
		},
		options: {
			accept: {
				text: 'Не сомневаюсь.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 25);
		}
	}), new game.Quest({
		engName: 'laboratory_30',
		text: '<p>Новые генераторы работают, Командир, и не только. Оказалось, что в результате окисления чистого металла получается очень ценная химическая производная, которая широко используется в промышленности, в том числе и в военной.</p><p>Но что это за производная, я вам сказать не могу – военные уже конфисковали всё оборудование и засекретили всю информацию о процессе работы. Теперь учёные ищут другой способ производить долгоиграющие батарейки.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 30-го уровня.',
		reward: {
			metals: 600,
			crystals: 600
		},
		options: {
			accept: {
				text: 'Блин, я так и знал.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 30);
		}
	}), new game.Quest({
		engName: 'laboratory_35',
		text: '<p>А вы знали, Командир, что среди кандидатов в белые халаты производится довольно жёсткий отбор? А потом им ещё и моют мозги высокотехнологичным раствором, чтобы повысить качество этих самых мозгов.</p><p>Не все выживают после такой процедуры, поэтому поступило предложение параллельно с обычным набором запустить ещё и программу клонирования самых одарённых умов нашей планеты. Во-первых, разовьем технологию, а во-вторых, всегда будет копия на случай локального факапа с жертвами.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 35-го уровня.',
		reward: {
			metals: 900,
			crystals: 900
		},
		options: {
			accept: {
				text: 'Могу тоже сдать материал, как выдающийся ум.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 35);
		}
	}), new game.Quest({
		engName: 'laboratory_40',
		text: '<p>Докладываю, Командир, что программа клонирования работает без сбоев. Единственное, что теперь создаёт лёгкое неудобство – недостаток столов и прочей мебели. Наши генетики чутка перестарались и увеличили число ценных кадров почти вдвое, так что теперь мы частенько наблюдаем свары из-за рабочих мест.</p><p>Причём я лично не понимаю половины эпитетов, которыми награждают друг друга копии местных гениев. Вы уж добавьте финансирования Лаборатории, а то я с ними скоро с ума сойду.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 40-го уровня.',
		reward: {
			metals: 1200,
			crystals: 1200
		},
		options: {
			accept: {
				text: 'Дам вам денег на табуретки. И чтоб не транжирить!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 40);
		}
	}), new game.Quest({
		engName: 'laboratory_45',
		text: '<p>Интересные новости из Лаборатории, Командир! Учёные пристально наблюдали за процессом бурения в Шахте Металла и, по мере погружения Бура в недра планеты, ставили на него всё новые и новые датчики и приборы.</p><p>Теперь эти исследования принесли практическую пользу: с помощью данных, полученных при бурении, учёным удалось установить паттерн распространения сейсмических волн. Мы можем предсказывать землетрясения с точностью до километра! Лаборатория жжёт.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 45-го уровня.',
		reward: {
			metals: 1500,
			crystals: 1500
		},
		options: {
			accept: {
				text: 'Ладно, дайте им там премию углём и шашлыками.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 45);
		}
	}), new game.Quest({
		engName: 'laboratory_50',
		text: '<p>За счёт хорошего финансирования металлургии, Командир, наши учёные смогли также продвинуться в вопросе изучения свойств кристалла. Например, оказалось, что в сырье, получаемом из Шахты Кристалла, может действовать принцип изо-мор-физ-ма. Каких только слов не пронапридумывают в этой Лабортории.</p><p>Учёные объяснили мне, что атомы некоторых химических элементов могут занимать место изначальных атомов кристалла. При этом вещество иногда приобретает новые физические свойства.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 50-го уровня.',
		reward: {
			metals: 1800,
			crystals: 1800
		},
		options: {
			accept: {
				text: 'Ты вон уже, приобрёл. Как бы не пришлось тебе диплом выдавать.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 50);
		}
	}), new game.Quest({
		engName: 'laboratory_55',
		text: '<p>Лаборатория анонсировала новые исследования космоса вокруг нашей планеты, Командир. Оказывается, магнитное поле, которое помогает нам не изжариться под ультрафиолетовым излучением звезды, каким-то образом ухитряется поймать и удерживать большое количество радиоактивных космических частиц.</p><p>И вот это уже представляет серьезную проблему для флота обороны, потому что ему приходится тратить щиты на защиту от радиационных поясов сразу после выхода на орбиту.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 55-го уровня.',
		reward: {
			metals: 2100,
			crystals: 2100
		},
		options: {
			accept: {
				text: 'Я щас сделаю умное лицо и просто дам тебе ресурсов.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 55);
		}
	}), new game.Quest({
		engName: 'laboratory_60',
		text: '<p>Представляете, Командир, наши горе-политиканы решили заказать в Лаборатории исследование, что критика публичных лиц подрывает внутренние устои общества. И даже список приложили. Три дня заседали без перерыва на обед, всё вспоминали, как их в колонии обычно называют.</p><p>Конец немного предсказуем: Натали увидела, что хотят протолкнуть через её драгоценную Лабораторию, пришла в ярость, обозвала пиджаков всеми теми словами, которые они хотели запретить, и прикрыла «перспективное» направление.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 60-го уровня.',
		reward: {
			metals: 2400,
			crystals: 2400
		},
		options: {
			accept: {
				text: 'Мечта поэта!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 60);
		}
	}), new game.Quest({
		engName: 'laboratory_65',
		text: '<p>Командир, похоже, нам ужасно повезло. В нашем рукаве галактики вот-вот взорвётся сверхновая, и Лаборатория, естественно, хочет отправить оборудование и людей на расстояние в световой час от взрыва. Говорят, никто ещё не подбирался так близко.</p><p>А если вы дадите немного ресурсов, то наши учёные смогут даже изучить вещество в ядре этой нестабильной звезды! Они планируют сделать это, послав зонд прямо в эпицентр взрыва через гипертоннель. Конечно, эксперимент рискованный, но очень перспективный.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 65-го уровня.',
		reward: {
			metals: 2700,
			crystals: 2700
		},
		options: {
			accept: {
				text: 'Второй конец тоннеля сюда не тяните только.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 65);
		}
	}), new game.Quest({
		engName: 'laboratory_70',
		text: '<p>Я получил заявку от Лаборатории, Командир. Белые халаты клянутся, что дальнейшее исследование нанотехнологий совершенно невозможно без какого-то туннельного микроскопа.</p><p>Мол, этот уникальный микроскоп не смотрит, а сканирует поверхность с помощью иглы в один атом, бла-бла-бла, при изменении зазора на десятые доли нанометра, бла-бла, позволит увеличить плотность покрытия наномашинами оружия… Стоп-стоп-стоп! Дошли до дела: дайте ресурсов, будут у вас хорошие пухи.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 70-го уровня.',
		reward: {
			metals: 3000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Спасибо, что перевёл.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 70);
		}
	}), new game.Quest({
		engName: 'laboratory_75',
		text: '<p>Кажется, Лаборатория выработала новый стандарт работы с плазмоидами, Командир. Раньше они просто проводили все доступные тесты, но оказалось, что инопланетные артефакты хорошо реагируют лишь на увеличение потока энергии, который через них пропускают.</p><p>Поэтому теперь в отделе Преобразования Плазмоидов процесс идёт по накатанной схеме: нагрев с помощью потока энергии, снижение сопротивления, включение высокочастотного электромагнитного поля, иногда взрыв. Хотят и дальше продолжать в таком духе.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 75-го уровня.',
		reward: {
			metals: 3300,
			crystals: 3300
		},
		options: {
			accept: {
				text: 'Забетонируй им там бункер, и пусть развлекаются.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 75);
		}
	}), new game.Quest({
		engName: 'laboratory_80',
		text: '<p>Вы были правы, Командир, когда приказали исследовать сверхновую на астероиде, а не здесь. В момент взрыва через гипертоннель, открытый зондом, устремилась вся масса звезды. Из-за её колоссальной энергии тоннель не удалось закрыть, и астероид мгновенно сгорел. Да что астероид! Вся система, благо необитаемая, была выжжена дотла в считанные секунды!</p><p>Зато это печальное событие натолкнуло наших учёных на мысль о более быстром способе заряжания Орудия Судного Дня. Но нужно проделать ещё много работы.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 80-го уровня.',
		reward: {
			metals: 3600,
			crystals: 3600
		},
		options: {
			accept: {
				text: 'Да уж, не забудьте, что эта система, бля, обитаемая.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 80);
		}
	}), new game.Quest({
		engName: 'laboratory_85',
		text: '<p>Думаю, взрыв сверхновой еще не раз нам аукнется, Командир, но есть у этой катастрофы и положительные стороны – теперь на нашем небе светит целых два солнца! День автоматически удлинился на несколько часов, а вместе с ним и рабочие смены.</p><p>Да ещё и солнечные батареи на крышах зданий, в которые трудно провести общую сеть, наяривают с двух солнышек так, что народ еще пару лет сможет ими отапливаться. В общем, у белых халатов просто праздник какой-то.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 85-го уровня.',
		reward: {
			metals: 3900,
			crystals: 3900
		},
		options: {
			accept: {
				text: 'Кстати, как насчёт крема от загара?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 85);
		}
	}), new game.Quest({
		engName: 'laboratory_90',
		text: '<p>Интересный проект в Лабораторию притащили инженеры, Командир: что-то вроде кабины на очень длинном тросе. Начало этого троса будет где-нибудь около Космопорта, а конец, вы только не падайте со стула, будет находится на орбите планеты.</p><p>Таким образом, у нас получается космический лифт, мать его. Белым халатам осталось только как следует подготовить материалы для троса и рассчитать массу, которую будет поднимать эта штука.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 90-го уровня.',
		reward: {
			metals: 4200,
			crystals: 4200
		},
		options: {
			accept: {
				text: 'Конец на орбите планеты – я бы на это посмотрел.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 90);
		}
	}), new game.Quest({
		engName: 'laboratory_95',
		text: '<p>Вчера в Лабораторию пришёл какой-то тип и притащил толстенный талмуд под названием «Кристальный Органон». Утверждал, что нужно разводить жидкий кристалл мильон мильонов раз, пока там не останется ни одной молекулы вещества, а только память воды. И, мол, этот раствор лечит все болезни.</p><p>В общем, Натали ему сразу пообещала этот самый органон вырезать по самые гланды, если будет её и дальше отвлекать. Сурова! Это я всё к чему? Чем быстрее развивается наука, тем меньше у нас таких вот типов.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 95-го уровня.',
		reward: {
			metals: 4500,
			crystals: 4500
		},
		options: {
			accept: {
				text: 'Ладно, убедил, дам вам ещё немного на науку.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 95);
		}
	}), new game.Quest({
		engName: 'laboratory_100',
		text: '<p>Осталось совсем немного до полной комплектации Лаборатории, Командир! И у генетиков есть проект, как говорится, под занавес: они изловчились и к сотому уровню как раз соберут урожай экзотических фруктов, которые мирно созревали у нас под носом в экспериментальной теплице.</p><p>Вы когда-нибудь ели банан со вкусом клубники? Генетики обещают какое-то страшное разнообразие видов, и я лично хочу всё попробовать.</p>',
		conditionText: 'Построить: ' + Game.Building.items.military.laboratory.name + ' 100-го уровня.',
		reward: {
			metals: 4800,
			crystals: 4800
		},
		options: {
			accept: {
				text: 'Тащите столы ко мне, у меня осталась пара бутылок самогона. Ваш Консул тоже кое-что умеет.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 100);
		}
	})
]);

};