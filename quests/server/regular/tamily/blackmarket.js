initQuestRegularContentBlackmarketBuilding = function() {

new game.QuestLine({
	who: 'tamily',
	engName: 'blackmarket_building',
	canStart: function () {
		return (
			   Game.Quest.checkFinished('tutorial') 
			&& Game.Building.has('residential', 'political', 25)
		);
	},
	finishText: 'Поздравляем! Чёрный Рынок достиг максимального уровня. Слава Великому Консулу!'
}, [
	new game.Quest({
		engName: 'blackmarket_1',
		text: '<p>А вы знали, что не все товары проходят сертификацию Галактического Совета, правитель? По счастью, вы можете насрать на их рекомендации, и торговать со всеми контрабандистами в галактике. Для этого достаточно построить здание Чёрного Рынка.</p><p>Отдайте приказ, и наши рабочие с радостью заложат первые потайные схроны и фальшивые грузовые склады на вашей планете.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 1-го уровня.',
		reward: {
			metals: 100,
			crystals: 200
		},
		options: {
			accept: {
				text: 'Аррр! То, что надо!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket');
		}
	}), new game.Quest({
		engName: 'blackmarket_5',
		text: '<p>Правитель, с Рынком связался некий Джон Картер, «джентльмен и искатель приключений из Вирджинии», что бы это ни значило. Причём он не прилетел, а просто появился у ворот Рынка и предложил выгодную сделку — обменять один из наших генераторов на медикаменты с планеты Барсум.</p><p>Конечно, первым делом мы упрятали его в психушку, но Джон не в обиде — раз в неделю он появляется в своей палате с новыми товарами для обмена.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 5-го уровня.',
		reward: {
			metals: 300,
			crystals: 400
		},
		options: {
			accept: {
				text: 'Хрена, а этот как сюда пролез?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 5);
		}
	}), new game.Quest({
		engName: 'blackmarket_10',
		text: '<p>К нам прибыла группа космозоологов профессора Селезнёва. Они собирают редких животных для зоопарка, но нам им особо нечего предложить — вся фауна в колонии была генетически изменена для сельскохозяйственных нужд.</p><p>Разве что попробовать обменять нескольких Рептилоидов из лаборатории вивисекции на навигационное оборудование? Если получится, нам стоит улучшить Рынок, чтобы всегда иметь под рукой запас этих «редких животных».</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 10-го уровня.',
		reward: {
			metals: 500,
			crystals: 600
		},
		options: {
			accept: {
				text: 'На миелофон меняй!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 10);
		}
	}), new game.Quest({
		engName: 'blackmarket_15',
		text: '<p>На Рынок пожаловали контрабандисты, правитель, которые хотят продать нам маленькую веточку дерева в горшке, утверждая, что это — самое опасное и интеллектуально развитое существо в галактике.</p><p>Звучит как полный бред, но Лаборатория по какой-то причине заинтересовалась молекулярной структурой этого ростка. Контрабандисты заломили какую-то несусветную цену, и придётся значительно улучшить инфраструктуру Рынка, чтобы выплатить её вовремя.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 15-го уровня.',
		reward: {
			metals: 700,
			crystals: 800
		},
		options: {
			accept: {
				text: 'Когда веточка заговорит, нам всем кабздец.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 15);
		}
	}), new game.Quest({
		engName: 'blackmarket_20',
		text: '<p>Представляете, правитель, кто-то анонимно выставил на Чёрном Рынке неизвестный науке артефакт — деревянную шкатулку-головоломку. В прилагаемой инструкции написано, что тот, кто соберёт её части в правильном порядке, откроет портал в рай чувственных удовольствий.</p><p>Ерунда, конечно, но идея создать межпланетный аукцион на Рынке кажется мне перспективной.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 20-го уровня.',
		reward: {
			metals: 900,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'В топку эту шкатулку! И если кожаную книгу привезут, её тоже в топку.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 20);
		}
	}), new game.Quest({
		engName: 'blackmarket_25',
		text: '<p>Правитель, на Рынок выкинули яйца. Ой, простите, — на Чёрный Рынок привезли интересных зародышей в яйцах, напоминающих куриные. Только там не птицы, а что-то вроде ящериц с крупными головами.</p><p>В описании говорится, что при правильном уходе такая ящерка может вырасти до десяти метров в длину. Центр Развлечений уже заинтересовался этим лотом, и у них есть план для нового тематического парка.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 25-го уровня.',
		reward: {
			metals: 1100,
			crystals: 1200
		},
		options: {
			accept: {
				text: 'Ох-хо-хо, наймите ящеркам дрессировщика. Из военных.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 25);
		}
	}), new game.Quest({
		engName: 'blackmarket_30',
		text: '<p>Пираты с окраины космоса хотят продать очень редкий артефакт, правитель. Правда, они сами не помнят, у кого его украли и что тот делает.</p><p>Последнее, что сохранилось в их памяти — яркая красная вспышка… А потом они оказались около нашей планеты. Учёные очень хотят получить этот предмет, хотя выглядит он как простой серебристый цилиндр.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 30-го уровня.',
		reward: {
			metals: 1300,
			crystals: 1400
		},
		options: {
			accept: {
				text: 'Тамили, а принеси мне чёрные очки, пожалуйста…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 30);
		}
	}), new game.Quest({
		engName: 'blackmarket_35',
		text: '<p>У пиратов есть кое-что на продажу, правитель. Где-то они откопали старые обломки мощного ИИ, который не функционировал довольно долгое время. Однако некоторые его части даже в таком состоянии представляют интерес для наших учёных.</p><p>Правда, пираты намекают на какую-то таинственную историю про рыцаря Гуго, сломавшего мощный артефакт одним-единственным вопросом, но я думаю, они просто таким образом набивают цену на свой товар.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 35-го уровня.',
		reward: {
			metals: 1500,
			crystals: 1600
		},
		options: {
			accept: {
				text: 'Спорим, он спросил, почему солнце встаёт на востоке, а заходит на западе?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 35);
		}
	}), new game.Quest({
		engName: 'blackmarket_40',
		text: '<p>Правитель, мимо нас только что пронёсся корабль Астронавтического антиэнтропийного агентства по оздоровлению природной среды, сокращённо ААА-ПОПС.</p><p>Арнольд и Грегор, как всегда, торопятся на очередную проблемную планету, но мы успели закинуть им немного топлива и провизии в трюм. А то в прошлый раз свихнувшаяся подводная лодка накормила их смесью глины пополам с машинным маслом. Ужас.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 40-го уровня.',
		reward: {
			metals: 1700,
			crystals: 1800
		},
		options: {
			accept: {
				text: 'Кошмар. Кстати, а где обед?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 40);
		}
	}), new game.Quest({
		engName: 'blackmarket_45',
		text: '<p>И снова у нас в гостях контрабандисты, правитель. На этот раз они притащили с собой какой-то здоровый абсолютно чёрный параллелепипед с отношением сторон 1:4:9, который не поддаётся ни одному известному в галактике излучению или инструменту.</p><p>Наши учёные заинтересовались этим необычным артефактом, хотя его предназначение так и осталось неясным. Для транспортировки этой громадины Рынку понадобится новая система доставки.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 45-го уровня.',
		reward: {
			metals: 1900,
			crystals: 2000
		},
		options: {
			accept: {
				text: 'О, блин, это или новая плазма мне приехала, или…',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 45);
		}
	}), new game.Quest({
		engName: 'blackmarket_50',
		text: '<p>Хоть я не слишком хорошо отношусь к пиратам, сегодня они привезли на продажу действительно ценный груз. Каким-то неведомым образом им удалось обобрать грузовой корабль корпорации «Шариф Индастриз», и теперь мы можем купить технологии протезирования в два раза дешевле.</p><p>Естественно, после сделки нам придётся анонимно сдать пиратов корпорации — или ждать, когда за нами придёт их знаменитая служба безопасности.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 50-го уровня.',
		reward: {
			metals: 2100,
			crystals: 2200
		},
		options: {
			accept: {
				text: 'Ай нева аскед фор дыс, ёлы-палы!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 50);
		}
	}), new game.Quest({
		engName: 'blackmarket_55',
		text: '<p>И снова интересный лот на Чёрном Рынке, правитель: контрабандисты раздобыли нанокостюм, значительно усиливающий способности человека. Его не берёт стрелковое оружие, и даже те повреждения, которые удаётся нанести, «зарастают» почти мгновенно.</p><p>Есть только один пункт, настороживший учёных — внизу спецификации мелким шрифтом написано: «может полностью ассимилировать носителя». У Натали, впрочем, уже есть пара добровольцев.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 55-го уровня.',
		reward: {
			metals: 2300,
			crystals: 2400
		},
		options: {
			accept: {
				text: 'Назовите добровольцев пророками — не пожалеете.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 55);
		}
	}), new game.Quest({
		engName: 'blackmarket_60',
		text: '<p>О, прибыл пиратский корабль Дона Майлза — известного флибустьера и джентльмена удачи, как он сам себя называет. Чувак совершенно поехал на исторических сказках и всерьёз считает себя потомком древнего убийцы из ордена ассасинов, за которым охотится не менее древний орден… уже не помню, кого.</p><p>Хлама, которого привозит нам Дон, ему аккуратно хватает на еду и топливо, а потом он снова исчезает в бурном океане космоса на месяц-другой.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 60-го уровня.',
		reward: {
			metals: 2500,
			crystals: 2600
		},
		options: {
			accept: {
				text: 'Если золотое яблоко привезёт, купи и отдай учёным. Так, на всякий случай.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 60);
		}
	}), new game.Quest({
		engName: 'blackmarket_65',
		text: '<p>Оказывается, правитель, в тёмные времена Земли, когда ещё не было Совета Галактики, да и космических полётов в целом, отдельные государства воевали друг с другом за ресурсы или влияние на планете.</p><p>Очень глупо, конечно, но наших учёных привлекла одна идея: иногда одно из враждующих государств выдавало что-то вроде лицензии на грабёж водных судов противной стороны. А всякие отщепенцы и бандиты с удовольствием таким разрешением пользовались, да ещё и сбывали добычу прямо в порту…</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 65-го уровня.',
		reward: {
			metals: 2700,
			crystals: 2800
		},
		options: {
			accept: {
				text: 'Ни слова больше, я уже приказываю улучшить Чёрный Рынок!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 65);
		}
	}), new game.Quest({
		engName: 'blackmarket_70',
		text: '<p>Правитель, здесь контрабандисты, которые продают интересную систему телепортации на короткие расстояния, работающую от раскаленных железяк и осколков костей. Говорят, что позаимствовали её на одной гибнущей планете.</p><p>Наши учёные заинтересовались — ещё бы, такой древний артефакт! Правда, они пока не поняли, что просят взамен эти странные люди. Речь идёт, насколько я успела понять, о каком-то «фью-фью-фью» и «тум-ту-дум».</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 70-го уровня.',
		reward: {
			metals: 2900,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Дайте им что-нибудь круглое и блестящее, это же очевидно!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 70);
		}
	}), new game.Quest({
		engName: 'blackmarket_75',
		text: '<p>Иногда артефактом может оказаться то, что невозможно погрузить в трюм пиратского корабля, правитель.</p><p>Только что стало известно, что контрабандисты из отдалённого сектора обнаружили невероятный мир — кольцеобразную структуру, вращающуюся вокруг ничем не примечательной звезды. И на внутренней стороне этого кольца вполне можно жить! Учёные уже выкупили карту этого района Вселенной и собираются в длительную командировку.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 75-го уровня.',
		reward: {
			metals: 3100,
			crystals: 3200
		},
		options: {
			accept: {
				text: 'Увидят там таких трёхногих с двумя головами — пусть не пугаются.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 75);
		}
	}), new game.Quest({
		engName: 'blackmarket_80',
		text: '<p>Удивительно, как небрежно относятся люди к свой собственности, правитель. Я часто вижу, как пираты привозят и сдают на металлолом дроидов разных моделей.</p><p>А через пару дней выясняется, что дроиды эти были украдены у каких-нибудь наследных принцесс с дальних окраин космоса. И начинаются погони, перестрелки, бардак и сумасшедший дом. А что стоило просто подписать дроида и выдавать награду за его возвращение?</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 80-го уровня.',
		reward: {
			metals: 3300,
			crystals: 3400
		},
		options: {
			accept: {
				text: 'Не ворчи, Тамили. Хочешь, я куплю тебе дроида? С картой галактики!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 80);
		}
	}), new game.Quest({
		engName: 'blackmarket_85',
		text: '<p>Правитель, на планету прибыла знаменитая Космическая Охотница — Самус Аран. Она привезла коммерческое предложение от Галактической Федерации, ей всё равно по дороге — как оказалось, и среди Рептилоидов есть пара очень даже разыскиваемых пиратов, а из цепких рук Аран ещё никто не вырывался.</p><p>Я на минуточку прикрою Чёрный Рынок — так, на всякий случай?</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 85-го уровня.',
		reward: {
			metals: 3500,
			crystals: 3600
		},
		options: {
			accept: {
				text: 'И форточку прикрой заодно, что-то меня знобит.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 85);
		}
	}), new game.Quest({
		engName: 'blackmarket_90',
		text: '<p>О, прилетел корабль пиратов из системы Рансер, правитель. Видите, к их трапу уже бежит толстяк в кепке? Это Морж Жартин, наш местный писатель. Когда-то он скрупулёзно исследовал дипломатические отношения разных альянсов, но без зевоты читать его писанину было невозможно.</p><p>Тогда он перенёс повествование в фентезийный мир, добавил кровищи и непристойностей, и народ начал как сумасшедший скупать его книги. Вижу, и у вас они есть.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 90-го уровня.',
		reward: {
			metals: 3700,
			crystals: 3800
		},
		options: {
			accept: {
				text: 'Я тайно исследую дипломатию, Тамили, не подумай чего.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 90);
		}
	}), new game.Quest({
		engName: 'blackmarket_95',
		text: '<p>Прибыла экспедиция с планеты Ракксла, правитель. Они не хотят афишировать своё присутствие в нашей галактике, так что торгуют на Рынке через анонимного бота.</p><p>И товар, который они привезли, довольно экзотичный — по крайней мере, я раньше никогда не видела таких красивых и необычных зверюшек. Торговцы называют их трибблами и утверждают, что это самые милые существа во вселенной.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 95-го уровня.',
		reward: {
			metals: 3900,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'В их вселенной — возможно, а в нашей придётся делать санацию Рынка.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 95);
		}
	}), new game.Quest({
		engName: 'blackmarket_100',
		text: '<p>Правитель, к Рынку только что пришвартовался Кирдык-Крузер «Чёрнозуб». Сдаётся мне, мы поимели сомнительную честь принимать знаменитого корсара, грозу космоса, самого модного орка современности — капитана Бадрукка.</p><p>Я быстренько организую ему дорожку и цветы, а заодно предупрежу охрану, чтобы не очень пялилась на его зубы и знамена, и что у него там ещё понатыкано.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.blackmarket.name + ' 100-го уровня.',
		reward: {
			metals: 4100,
			crystals: 4200
		},
		options: {
			accept: {
				text: 'И поляну накрой, раз уж на то пошло. И не беспокой нас дня три.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'blackmarket', 100);
		}
	})

]);

};