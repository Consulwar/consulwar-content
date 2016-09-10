initQuestRegularContentMetalBuilding = function() {

new game.QuestLine({
	who: 'tamily',
	engName: 'metal_building',
	canStart: function () {
		return Game.Quest.checkFinished('tutorial');
	},
	finishText: 'Поздравляем! Вы достигли максимального уровня Шахты Металла. Слава Консулу!'
}, [
	new game.Quest({
		engName: 'metal_25',
		text: '<p>Здравствуйте, правитель, я здесь по поводу Шахты Металла. Со мной связалась Лаборатория — говорят, у них есть отличное улучшение для отливки, они назвали его Металлическим Плетением. Новая технология позволит отливать более прочные части конструкций, а значит увеличится выход готовой продукции. Если вы заинтересовались этим проектом, Консул, просто прикажите улучшить Шахту, и они немедленно приступят к работе.</p><p>И я снова напоминаю вам про Честь — этот ресурс теперь будет нужен для каждого улучшения Шахт.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 25-го уровня.',
		reward: {
			metals: 600,
			crystals: 100
		},
		options: {
			accept: {
				text: 'Считай, что заинтересовался.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 25);
		}
	}), new game.Quest({
		engName: 'metal_30',
		text: '<p>Правитель, извините, что отвлекаю, но со мной связались Инженеры — у них небольшая проблема с Шахтой Металла. Так получилось, что из-за новой технологии отливки мощность возросла, и теперь погрузочная техника попросту не успевает забрать всю готовую продукцию. Чтобы избежать простоев, они очень просили поставить им какой-то суперновый пратцен-кран. Если вы согласны с таким решением, правитель, прикажите улучшить Шахту, а остальное они сделают сами.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 30-го уровня.',
		reward: {
			metals: 1000,
			crystals: 200
		},
		options: {
			accept: {
				text: 'Пратцен-кран? А что это?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 30);
		}
	}), new game.Quest({
		engName: 'metal_35',
		text: '<p>Добрый день, Консул. У меня свежие новости из Шахты Металла: кран прекрасно работает, но теперь им не хватает места на разгрузочной площадке, чтобы правильно оформить и отправить все поставки руды. Если вы прикажете построить склад, это значительно упростит задачу. Позже вам понадобится персонал для учёта готовой продукции, но мы уже подобрали пару бабушек и дали им электронные планшеты. Мимо них мышь не проскочит, правитель, я сама их немного побаиваюсь. По вашему приказу Инженеры начнут строительство и улучшат Шахту.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 35-го уровня.',
		reward: {
			metals: 2000,
			crystals: 350
		},
		options: {
			accept: {
				text: 'Бабушки, говоришь? С планшетами? Ну-ну.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 35);
		}
	}), new game.Quest({
		engName: 'metal_40',
		text: '<p>О, правитель, как хорошо, что вы здесь! На Шахте Металла снова неполадки — работы идут настолько быстро, что персонал не успевает вести учёт готовой продукции. Три бабушки с планшетами, которые обживают склад, совершенно сбились с ног. Правда, у прораба Петровича есть идея: он сказал, что надо поставить какие-то — подождите, я записала — "транс-пон-деры" на входе склада, а на ящики с рудой клеить специальные приёмники сигнала. Или наоборот? В общем, всё должно заработать само, как только вы отдадите приказ улучшить Шахту.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 40-го уровня.',
		reward: {
			metals: 3000,
			crystals: 550
		},
		options: {
			accept: {
				text: 'Чего? Короче, вот вам ресурсы, пусть Петрович сам всё клеит и ставит.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 40);
		}
	}), new game.Quest({
		engName: 'metal_45',
		text: '<p>Доброе утро! Не пугайтесь, правитель, у меня хорошие новости — в Шахте Металла всё спокойно, склад работает без сбоев, производство тоже. Просто персонал попросил о небольшой комнате отдыха и паре наборов домино, а то Петрович в свой последний визит внушал им, что без этого ни один цех нормально работать не будет. Если вы согласны с такой премией работникам Шахты, Консул, просто распорядитесь улучшить здание, а работники сами найдут бесхозное помещение и оборудуют его.</p><p>А ещё вам будет нужна пара самых простых инопланетных артефактов для дальнейшего улучшения здания.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 45-го уровня.',
		reward: {
			metals: 5000,
			crystals: 750
		},
		options: {
			accept: {
				text: 'Пойду, пошарю в кладовой.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 45);
		}
	}), new game.Quest({
		engName: 'metal_50',
		text: '<p>Правитель, ко мне обратились инженеры в связи с экологической проблемой на Шахте Металла. Хотя Бурильный Бур и уничтожает шлак, часть его всё равно успевает испариться. Сначала выбросы были ничтожными, но по мере увеличения производства клубы ядовитого пара стали все чаще подниматься на поверхность. Ученые из Лаборатории предлагают поставить в Шахте мощную систему насосов и фильтров, а всему персоналу внутри придется работать в респираторах. По вашему приказу установка сразу же начнется.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 50-го уровня.',
		reward: {
			metals: 6500,
			crystals: 1100
		},
		options: {
			accept: {
				text: 'Главное, чтобы сюда не долетало.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 50);
		}
	}), new game.Quest({
		engName: 'metal_55',
		text: '<p>Правитель, ваша Лаборатория снова удивляет: сегодня они прислали новые чертежи и формулы на ваше утверждение. Там говорится что-то про наноструктуры из Кристалла, которыми можно улучшить знаменитое Металлическое Плетение. Технология, кажется, не очень дорогая, к тому же они клянутся, что она даст хорошую прибавку к добыче в Шахте Металла. Если вы одобрите этот план, Инженеры сегодня же начнут экспериментировать с первыми образцами. Кстати, а вы случайно не знаете, что такое хиральность?</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 55-го уровня.',
		reward: {
			metals: 7000,
			crystals: 1300
		},
		options: {
			accept: {
				text: 'О, эта такая штука, Тамили! Тебе понравится.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 55);
		}
	}), new game.Quest({
		engName: 'metal_60',
		text: '<p>Правитель, на Шахте Металла случилась авария: похоже, что, несмотря на фильтрацию воздуха, немного газа всё же скопилось у дальней стены, а случайная искра от крана вызвала взрыв. Слава науке, никто не пострадал, но дыра в стене образовалась здоровенная. Инженеры изучили породу на месте взрыва и предлагают расширить цех проката, — говорят, что расчистить там ещё несколько десятков метров будет нетрудно. А место всегда пригодится, ведь мощности Шахты растут. Как только вы распорядитесь, рабочие начнут ремонт.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 60-го уровня.',
		reward: {
			metals: 9000,
			crystals: 1700
		},
		options: {
			accept: {
				text: 'Главное, пусть там не увлекаются ремонтом. Знаю я, как это бывает!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 60);
		}
	}), new game.Quest({
		engName: 'metal_65',
		text: '<p>О, наука, Консул! Представляете, одна из бабушек, ведающих учётом продукции на складе Шахты Металла, оказалась замаскированным Рептилоидом! Её подруги просто обалдели, когда во время инвентаризации она задумалась и подмигнула рабочему третьим веком. И ещё больше они обалдели, когда завскладом борцовским приёмом завалил фальшивую старушку на пол и представился сотрудником внутренних органов. Вот так история, правитель! Кстати, склад Шахты рекомендовали оборудовать электронными пропусками. По вашему приказу я начну оформлять документы.</p><p>И хорошо бы, правитель, отбить у чешуйчатых ещё пару артефактав для дальнейших улучшений шахты.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 65-го уровня.',
		reward: {
			metals: 12500,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'А у меня где-то был… Хм… Рептилоиды унесли.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 65);
		}
	}), new game.Quest({
		engName: 'metal_70',
		text: '<p>Добрый день, Консул. На Шахте Металла всё стало настолько спокойно, что рабочие решили попросить у вас разрешения расширить комнату отдыха… Ах да, и поставить там инфопанель. Любят они в перерывах на обед смотреть какие-то «Голые факты» на Первом Космическом. Клянутся, что с обедом и телевизором запросто увеличат объём добываемой руды. Если вы не против потратить немного ресурсов на Шахту, правитель, отдайте распоряжение — и они сами начнут ремонт и закупку всего необходимого.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 70-го уровня.',
		reward: {
			metals: 20000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Я бы вот тоже… С инспекцией, что ли, туда нагрянуть?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 70);
		}
	}), new game.Quest({
		engName: 'metal_75',
		text: '<p>Правитель, а помните нашу «подсадную» бабушку-рептилоида? Ей только что пришел приказ от зелёного начальства: изучить устройство нашего Бурильного Бура. По счастью, как раз в это время какие-то умельцы прикрутили к Буру кофеварку. Фальшивый агент внимательно изучил её устройство и отправил подробные чертежи рептилоидам. Пусть теперь голову поломают, как мы бурили эту Шахту! Правда, теперь Бур придется чинить, но это всё же лучше, чем подарить его устройство врагу. По вашему приказу, Консул, Инженеры закупят детали и приступят к работе.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 75-го уровня.',
		reward: {
			metals: 55000,
			crystals: 9500
		},
		options: {
			accept: {
				text: 'Интересно, где это зеленомордые бурить собрались?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 75);
		}
	}), new game.Quest({
		engName: 'metal_80',
		text: '<p>О, Консул, ещё новости про Шахту Металла. Наша «бабушка» получила новое задание: выкрасть технологию Металлического Плетения. Инженеры немного подумали и создали совершенно невоспроизводимую бороду из наноструктур кристалла. Никакой добавочной прочности она, конечно же, не даёт, скорее наоборот, но выглядит очень солидно. В процессе Инженеры так увлеклись, что чуть не разнесли цех к херам — оказалось, что их творение взрывается при малейшем сотрясении. Шахту ожидает ремонт, а Рептилоидов ожидает сюрприз. Восстановительные работы начнутся по вашему сигналу, правитель.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 80-го уровня.',
		reward: {
			metals: 90000,
			crystals: 15000
		},
		options: {
			accept: {
				text: 'Э-э, вы там не очень-то увлекайтесь, а то ж на ваши художества ресурсов не напасёшься!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 80);
		}
	}), new game.Quest({
		engName: 'metal_85',
		text: '<p>Вы слышали этот взрыв, правитель? Похоже, что Рептилоиды восстановили по чертежам ту ерунду, которую намудрили Инженеры в Шахте Металла. Во всяком случае, прямо на орбите нашей колонии только что бабахнул вражеский спутник-шпион. К несчастью, его обломки упали прямо на склад Шахты, и доблестный разведчик «бабушка» погиб на месте. Мы не забудем его подвига, и в его честь Шахта после ремонта выдаст ещё больше продукции. Аварийная и инженерная бригады начнут разбирать завалы, как только вы прикажете, Консул.</p><p>А ещё напоминаю о новом артефакте для шахты, правитель. На этот раз вам понадобится действительно редкий экземпляр.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 85-го уровня.',
		reward: {
			metals: 140000,
			crystals: 25000
		},
		options: {
			accept: {
				text: 'Да и ладно, зато за «бабушку» отомщу!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 85);
		}
	}), new game.Quest({
		engName: 'metal_90',
		text: '<p>Представляете, Консул, у Инженеров случился очередной прорыв в технологии Металлического Плетения! Когда стали внимательно рассматривать схему, которую всучили Рептилоидам, они поняли, что если произвести какую-то «инверсию», то из полного бреда они получат очень прочные нанокристаллы, связанные между собой. Теперь весь Инженерный Комплекс гудит, как улей — всем просто не терпится приступить к тестированию образцов. Но, естественно, они дождутся вашего одобрения, правитель.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 90-го уровня.',
		reward: {
			metals: 225000,
			crystals: 35000
		},
		options: {
			accept: {
				text: 'А что, я одобряю. Главное, чтобы Шахта работала!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 90);
		}
	}), new game.Quest({
		engName: 'metal_95',
		text: '<p>Консул, вы знаете, как важна автоматизация. Чем больше людей мы сможем заменить автоматами, тем больше солдат мы сможем отправить на войну. Инженеры наконец-то смогли добиться серийного производства обслуживающих роботов, и скоро почти весь персонал Шахты Металла можно будет заменить на них. Люди не очень хотят покидать свои рабочие места — некоторые работали здесь с первого дня, представляете? Но автоматика будет гораздо эффективнее, так что по вашему сигналу, правитель, Инженеры начнут монтаж и тестовые запуски.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 95-го уровня.',
		reward: {
			metals: 360000,
			crystals: 60000
		},
		options: {
			accept: {
				text: 'Эх, а я домино им покупал. Как давно это было!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 95);
		}
	}), new game.Quest({
		engName: 'metal_100',
		text: '<p>Помните тех людей, которых мы заменили на автоматы на Шахте Металла, Консул? Оказалось, что за время работы здесь они так хорошо стали разбираться в технике, что их почти в полном составе забрал к себе Инженерный Комплекс. Теперь почти все они — настоящие военные инженеры, проектируют и собирают танки, самолёты, авианосцы и бомбы для «Бабуль». А сегодня они пришли к Шахте, чтобы помочь довести уровень её работы до максимального. Всё, чего мы ждём — вашего разрешения, правитель.</p>',
		conditionText: 'Построить: ' + Game.Building.items.residential.metal.name + ' 100-го уровня.',
		reward: {
			metals: 500000,
			crystals: 100000
		},
		options: {
			accept: {
				text: 'Утираю скупую слезу и разрешаю!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 100);
		}
	})
]);

};