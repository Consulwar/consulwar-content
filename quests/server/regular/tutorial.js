initQuestRegularContentTutorial = function() {

// TODO: Когда будете настраивать цепочки квестов, используйте функцию
//       Game.Quest.checkFinished('tutorial')

new game.QuestLine({
	who: 'tamily',
	engName: 'tutorial',
	canStart: function() {
		return true;
	},
	finishText: 'Поздравляем! Вы прошли обучение и готовы к самостоятельному развитию колонии. Но не забывайте о ваших помощниках — у них вы найдёте новые квесты, которые помогут вам вести человечество к победе над ебучими рептилоидами. Удачи!'
}, [
	new game.Quest({
		engName: 'buildHouse5',
		text: '<p>Здравствуйте, Консул! Я очень рада, что вы здесь и готовы к работе! Первым делом нужно обустроить жилой район, потому что вам очень даже необходимы люди. И ресурсы, которые эти люди будут для вас добывать. Самое главное на данный момент — это Жилой Комплекс. Он находится в начале линейки зданий, если смотреть слева направо. Когда вы выделите его, то сможете увидеть ресурсы и время, необходимые для постройки этого здания — такого рода информация всегда находится под описанием. А еще ниже находится доход от этого здания и прогноз его увеличения на следующем уровне.</p><p>Справа от этой полезной информации есть кнопка «Отдать приказ» — это ваш способ управлять строительством в колонии. Как только вы нажмёте эту кнопку, ваше распоряжение понесётся по нижестоящим инстанциям, и вы уже не сможете его отменить. Но я уверена, что с вашей мудростью и проницательностью вам не придется желать чего-то подобного. А теперь, Великий Консул, я прошу вас отдать свой первый приказ о строительстве Жилого Комплекса, а затем — об его улучшении. К сожалению, наши рабочие немного… тугодумы, поэтому вам придётся пинать их на каждом этапе, пока здание не достигнет нужного вам уровня.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 5-го уровня',
		reward: {
			metals: 200,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Пинать — это правильно. Сейчас сделаем этот Комплекс.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 5);
		}
	}), new game.Quest({
		engName: 'buildMetal5',
		text: '<p>У вас все получилось, Консул! Комплекс построен и уже начал принимать поселенцев. Это ваш первый шаг на пути к тому, чтобы стать одним из величайших правителей Галактики, так не будем останавливаться на достигнутом! Один ресурс у вас уже есть, добавьте к нему ещё один — Металл. Он добывается, как несложно понять из названия, в Шахте Металла, которая находится на третьем месте слева в вашем жилом районе.</p><p>Металл — не самый ценный ресурс, но он используется почти везде: от строительства новых зданий до подготовки пехоты и производства тяжелых танков. Чем выше уровень вашей Шахты, тем больше добыча, а значит, больше возможностей для дальнейшего развития. Поэтому я рекомендую вам запустить Шахту Металла и улучшить её до пятого уровня, чтобы увеличить добычу соразмерно будущим затратам.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name + ' 5-го уровня',
		reward: {
			metals: 300,
			crystals: 150
		},
		options: {
			accept: {
				text: 'Ненавижу металл. Но шахта — совсем другое дело.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 5);
		}
	}), new game.Quest({
		engName: 'buildCrystal5',
		text: '<p>Замечательно, правитель. Шахта Металла уже приносит достаточно ресурсов, так что постройка следующих зданий не должна вызвать у вас особых затруднений. Теперь настал черед ещё одной добывающей шахты: Шахты Кристалла, которая, как вы уже догадались, производит Кристалл. Этот ресурс очень ценен, потому что добыча Кристалла — очень медленный и трудоёмкий процесс. Но зато в ближайшем будущем даже небольшого количества хватит, чтобы построить или улучшить любое здание. Конечно, со временем вам будет требоваться всё больше и больше Кристалла, поэтому лучше всего прямо сейчас начать улучшение Шахты до пятого уровня — это очень поможет вам в дальнейшем, Консул.</p><p>Шахта Кристалла находится прямо за Шахтой Металла, она четвёртая в линейке зданий жилого района.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.crystal.name + ' 5-го уровня',
		reward: {
			metals: 100,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Кристаллы какие-то… Ладно, построю. А если тебе ещё какие-нибудь шахты нужны, только скажи.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'crystal', 5);
		}
	}), new game.Quest({
		engName: 'buildLaboratory5',
		text: '<p>В жилом районе всё идет просто великолепно, правитель: шахты добывают то, что им положено добывать, а Жилой Комплекс регулярно увеличивает количество людей в колонии. Самое время немного отвлечься от ресурсов и сделать первые шаги в деле развития науки. За исследования у нас обычно отвечает Натали Верлен, но мы пока не будем отвлекать её от работы, я сама вам всё расскажу и покажу. В первую очередь вам необходимо построить здание Лаборатории, где будут проходить все научные работы. Чем выше уровень Лаборатории, тем больше разных направлений сможет охватить ваша наука, Консул, поэтому давайте не только построим здание, но и увеличим его уровень до пятого.</p><p>Здание Лаборатории находится в военном районе, это нижний раздел слева с пиктограммой двойного шеврона. Заметьте, что жилой район находится в верхнем разделе с пиктограммой здания (а ещё всегда можно нажать на первую верхнюю вкладку с изображением планеты и сразу же попасть в жилой район). Итак, если вы перешли в военный район, то Лаборатория должна находиться почти посредине — она шестая слева или пятая справа.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.laboratory.name + ' 5-го уровня',
		reward: {
			metals: 150,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Я ничего не понял, но сейчас пощёлкаю что-нибудь.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 5);
		}
	}), new game.Quest({
		engName: 'researchAlloyIkea5',
		text: '<p>Вы отменно потрудились, Консул, и теперь у вас есть Лаборатория, с помощью которой вы сможете изучать новые направления в науке. А это, в свою очередь, позволит вам строить более продвинутые здания в жилом или военном районе. Я слишком забегаю вперед, правитель, но не волнуйтесь — скоро вы поймёте, к чему я веду, и зачем нам нужны все эти лаборанты и пробирки. Хоть Лаборатория и находится в военном районе, сами исследования проводятся в отдельной вкладке с пиктограммой колбы, которая выглядит как треугольник с горлышком. При выделении этого треугольника, ой, то есть этой колбы, вы автоматически попадаете в верхний раздел научных исследований.</p><p>Особые сплавы — это вторая иконка слева, а Мебель из Икеа — пятая. Отдайте, пожалуйста, приказ об изучении этих направлений, скоро они нам пригодятся. И, если вас не затруднит, исследуйте оба направления до пятого уровня каждое, этого как раз должно хватить для выполнения следующего этапа.</p>',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.alloy.name + ' 5-го уровня и ' + Game.Research.items.evolution.ikea.name  + ' 5-го уровня',
		reward: {
			metals: 100,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Гы-гы, Мебель из Икеа. Так, а что я хотел-то? Колба наверху, ага.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 5) && Game.Research.has('evolution', 'ikea', 5)
		}
	}), new game.Quest({
		engName: 'buildHouse10',
		text: '<p>Вы изучили всё, что было необходимо, правитель, большое спасибо! Кстати, а вы заметили, что Особые Сплавы дают небольшой бонус к скорости строительства в жилом районе, а Мебель — прибавку к росту населения? Но мы изучали эти направления не только ради приятных мелочей, а ещё и для того, чтобы построить кое-что действительно грандиозное. Осталось только одно — нужно довести уровень Жилого Комплекса до десятого. Если вы не очень устали, Консул, прикажите сделать это, и строители тут же начнут работу.</p><p>На всякий случай напоминаю вам, что Жилой Комплекс находится в жилом районе и стоит самым первым слева в линейке зданий. Попасть в жилой район можно, выделив первую вкладку с пиктограммой планеты.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 10-го уровня',
		reward: {
			metals: 2000,
			crystals: 600
		},
		options: {
			accept: {
				text: 'Да помню я. И вроде пока не устал.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 10);
		}
	}), new game.Quest({
		engName: 'buildMegalopolis5',
		text: '<p>Ура, всё готово для постройки Мегаполиса! У вас, Консул, будет огромный, современный город… Даже не так — самый большой и шикарный город на планете. И он принесёт не только восторг обывателям, но и вполне ощутимый бонус к росту населения. Осталось только его построить.</p><p>Иконка Мегаполиса находится в жилом районе, и стоит рядом с Жилым Комплексом — вторая слева. Обращаю ваше внимание также на то, что справа от описания этого здания находятся иконки исследований и зданий, которые требуются для его постройки (И если их нажать, то вас автоматически перекинет в соответствующий раздел. Правда, здорово?). К счастью, мы уже всё изучили, поэтому, как только вы будете готовы, Консул, отдайте, пожалуйста, приказы на постройку и улучшение Мегаполиса до пятого уровня.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.megalopolis.name + ' 5-го уровня',
		reward: {
			metals: 1000,
			crystals: 300
		},
		options: {
			accept: {
				text: 'Сейчас я вам тут понажимаю, не боись. Где, говоришь, этот ваш Мегаполис?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'megalopolis', 5);
		}
	}), new game.Quest({
		engName: 'buildMetalCrystal10',
		text: '<p>Скоро вам предстоит построить очень много интересных зданий, а заодно познакомиться поближе с подготовкой армии, поэтому я предлагаю, правитель, если это будет не слишком назойливо с моей стороны… Наука, а что я предлагаю? Ах да! Нужно увеличить приток Металла на вашей шахте, Консул, потому что впереди у вас много возможностей потратить этот самый Металл. И, уж если на то пошло, то и Шахту Кристалла тоже стоит улучшить — это поможет вам быстрее осваивать науку. Просто отдайте приказ и увеличьте уровень ваших шахт до десятого.</p><p>Если я вам не помешаю, то позволю себе напомнить ещё раз: шахты находятся в жилом районе, а жилой район — в первой… Да-да, вы совершенно правы, Консул, я уже ухожу.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name + ' 10-го уровня и ' + Game.Building.items.residential.crystal.name + ' 10-го уровня',
		reward: {
			metals: 300,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Э-э, далеко не уходи! Блин, я забыл, что там надо было?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 10) && Game.Building.has('residential', 'crystal', 10)
		}
	}), new game.Quest({
		engName: 'buildBarracks5',
		text: '<p>Развитие вашей планеты очень впечатляет, Консул, однако впереди — новые свершения. И было бы совсем неплохо подготовиться к ним, как вы считаете? Например, когда вы достигнете двадцатого уровня любого здания или исследования, вам понадобится новый ресурс для их дальнейшего улучшения. Этот ресурс — Честь, и её раздачей занимается Совет Галактики в обмен на помощь нашей доблестной армии в космосе и на Земле. Чтобы просто продемонстрировать вам, как это работает, проще всего подготовить немного самой обычной пехоты, а потом отправить её воевать. Для подготовки пехоты в военном районе есть специальное здание — Казармы. Обычно всеми делами, связанными с военным кварталом, занимается Третий Инженерный, но на данном этапе мы прекрасно справимся и без него.</p><p>Итак, если вам необходимо попасть в военный район, просто выделите нижний раздел с шевронами, когда вы находитесь в жилом районе. Казармы, которые вам нужны, находятся в самом начале линейки военных зданий. Выделите их, отдайте приказ на постройку и улучшение до пятого уровня, а дальше просто наслаждайтесь видом на военный район, потому что Казармы вот-вот в нём появятся.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.barracks.name + ' 5-го уровня',
		reward: {
			metals: 100,
			crystals: 30
		},
		options: {
			accept: {
				text: 'Нижний раздел, шевроны… Тык внизу, тык первое здание, тык-тык-тык пятый уровень! И наслажда-а-аемся видом.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'barracks', 5);
		}
	}), new game.Quest({
		engName: 'researchEnergy5',
		text: '<p>Отлично, Консул, Казармы построены. Но пока вы не можете начать подготовку пехоты, потому что сначала необходимо провести исследование Энергетики. Эта область науки полезна сама по себе — её изучение делает армию немного дешевле; но в вашем случае она нужна именно для того, чтобы подготовить самых незамысловатых пехотинцев. Натали, которая обычно заведует Лабораторией, любезно передала мне управление, так что, если вы готовы, правитель, мы можем начать прямо сейчас.</p><p>Энергетика находится во вкладке научных исследований (пиктограмма с колбой, помните?), и это первая иконка слева. Как только вы её найдете, правитель, вам останется только выделить, исследовать и улучшить Энергетику до пятого уровня — как видите, всё очень просто.</p>',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.energy.name + ' 5-го уровня',
		reward: {
			metals: 7000,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Как это я не могу? Я все могу, я Император! Повелеваю немедленно начать исследования чего-то там!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'energy', 5);
		}
	}), new game.Quest({
		engName: 'buildFathers20',
		text: '<p>Чудесно, вы достигли необходимого уровня Энергетики и можете приступать к подготовке ваших первых солдат. Это будут Отцы — самая дешёвая пехота. Для того, чтобы привести их в состояние боеготовности, достаточно иметь лишь небольшой запас ресурсов, который Совет вам уже предоставил.</p><p>Управление пехотой (в числе которой находятся нужные нам Отцы) и наземной техникой производится во второй верхней вкладке с пиктограммой «три шеврона». Когда вы перейдёте в эту вкладку, вы увидите три раздела: верхний из них — это звёздный флот, средний — наши героические герои, а нижний — как раз наземная техника и пехота. В этом разделе Отцы занимают первое место слева. Пожалуйста, выделите их и отдайте приказ подготовить двадцать новобранцев.</p>',
		conditionText: 'Подготовить 20 единиц ' + Game.Unit.items.army.ground.fathers.name,
		reward: {
			metals: 40,
			crystals: 20
		},
		options: {
			accept: {
				text: 'А, так это на Отцов были те ресурсы? Упс. Тамили, подожди недельку?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('ground', 'fathers', 20);
		}
	}), new game.Quest({
		engName: 'sendFatherReinforcement',
		text: '<p>Превосходно, правитель — подготовка Отцов закончилась, и в вашем распоряжении оказался целый отряд пехоты. Значит, настало время отправить его на поле сражения. Для этого нужно открыть верхнюю вкладку с пиктограммой скрещенных мечей, а потом выбрать средний раздел с двойной стрелкой — там вы увидите всю вашу армию, доступную в данный момент, и две кнопки: «Выбрать всех» и «Отправить». Счётчик Чести сразу же покажет вам, сколько очков вы получите за отправку. Таким образом, вы можете рассчитывать, правитель, сколько и чего нужно отправлять на Землю, чтобы получить нужное вам количество Чести. А теперь давайте просто отправим Отцов, что-то они уже застоялись.</p>',
		conditionText: 'Отправить в бой юнитов типа ' + Game.Unit.items.army.ground.fathers.name,
		reward: {
			metals: 70,
			crystals: 30
		},
		options: {
			accept: {
				text: 'Это не они застоялись, это я застоялся. Когда начнётся экшен?',
				mood: 'positive'
			}
		},
		isDone: function() {
			var user = Meteor.user();
			var count = Meteor.Game.SpaceEvents.Collection.find({
				user_id: user._id,
				type: Game.SpaceEvents.type.REINFORCEMENT
			}).count();
			return (count >= 1) ? true : false;
		}
	}), new game.Quest({
		engName: 'researchAlloy10',
		text: '<p>Поразительно, как быстро и легко вы развиваете колонию, Консул, за вами просто не угнаться! Раз так, то усложним задачу по подготовке армии: на этот раз попробуем послать на Землю не пехотинцев, а лёгкую технику — Бгоневички. Армия на Земле нуждается в вашей помощи, Консул, а если мы проиграем войну… Я даже думать об этом не хочу, но существует возможность, что рептилоиды доберутся и до нашей колонии. Пока у нас есть силы и средства помогать человечеству, мы просто обязаны это делать, не говоря уж о том, что это сугубо в наших интересах. Ой, простите, правитель, кажется, я произнесла зажигательную речь. Вернёмся к Бгоневичкам: для начала нам снова понадобится исследование Особых Сплавов — вы уже наверняка помните, где оно находится и что нужно делать. Отдайте приказ, Консул, и добавьте ещё пять уровней к тому, что есть сейчас.</p>',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.alloy.name + ' 10-го уровня',
		reward: {
			metals: 500,
			crystals: 150
		},
		options: {
			accept: {
				text: 'Всё помню, ща всё будет. Кстати, ничего такая речь, мне даже понравилось.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 10);
		}
	}), new game.Quest({
		engName: 'buildFactory5',
		text: '<p>Всё готово, Консул, Сплавы исследованы, и можно приступать к постройке Военного Завода. Это здание занимается всей вашей техникой, от Бгоневичков до тяжёлых танков, и находится на втором месте слева в военном районе. Развитие Завода даёт такой бонус, как сокращение времени на производство техники, — думаю, это пригодится вам в будущем. Но сейчас время не слишком важно для нас, поэтому пока будет вполне достаточно построить Завод и улучшить его до пятого уровня. По вашему сигналу, Консул, строительство сразу же начнется.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.factory.name + ' 5-го уровня',
		reward: {
			metals: 150,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Завод так завод. Интересно, если мы продуем войну, эти рептилоиды долго до меня лететь будут?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'factory', 5);
		}
	}), new game.Quest({
		engName: 'researchEnergy10',
		text: '<p>Ах, нет, я совсем забыла про Энергетику! Консул, простите, но для того, чтобы изготовить технику, вам придётся сначала отдать приказ соответствующему отделу исследований, и только потом вы сможете начать производство Бгоневичков. С другой стороны, Энергетика заметно удешевит эти самые Бгоневички, так что внакладе вы не останетесь. Если готовы начать, правитель, откройте вкладку с колбой и отдайте приказ улучшить Энергетику до десятого уровня.</p>',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.energy.name + ' 10-го уровня',
		reward: {
			metals: 75000,
			crystals: 30000
		},
		options: {
			accept: {
				text: 'О, скоро ресов дадут. Главное — не проебать всё на радостях.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'energy', 10);
		}
	}), new game.Quest({
		engName: 'buildAgmogedcar5',
		text: '<p>Просто замечательно, у вас всё получается. Военный Завод работает, Энергетика изучена — самое время приступать к выпуску техники для армии Земли. Капитан Тилпс будет вам очень благодарен, Консул, я точно знаю. Для постройки Бгоневичков вам потребуется больше ресурсов, чем для подготовки пехоты, но и отдача в виде очков Чести будет выше. План такой: по вашему приказу начнётся производство пяти Бгоневичков, а затем вы с моей помощью, разумеется, лёгким движением переправите их в бурлящий котёл войны, где они очень пригодятся.</p><p>Но на всякий случай напоминаю: выпуск Бгоневичков можно начать в нижнем разделе «военной» вкладки (три шеврона, помните?). Сначала такая структура может показаться сложной, но потом вы привыкнете, Консул, и вам будет намного проще здесь ориентироваться.</p>',
		conditionText: 'Построить 5 юнитов 	' + Game.Unit.items.army.ground.agmogedcar.name,
		reward: {
			metals: 200,
			crystals: 30
		},
		options: {
			accept: {
				text: 'Да я хорошо ориентируюсь, я уже как дома! А где тут у вас, кстати, туалет?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('ground', 'agmogedcar', 5);
		}
	}), new game.Quest({
		engName: 'sendAgmogedcarReinforcement',
		text: '<p>Бгоневички готовы к бою, Великий Консул! Теперь вам остаётся только открыть вкладку со скрещенными мечами, выбрать в ней средний раздел с двойной стрелкой, нажать на кнопку «Выбрать всех» или просто на Бгоневички и отправить их туда, где им самое место, для поддержки нашей армии на Земле. Военные действия идут там со всё нарастающей силой, и скоро вы сможете получать сводки этих боёв. Но не будем торопиться, сначала давайте отправим Капитану эти прекрасные новые машины.</p>',
		conditionText: 'Отправить в бой юнитов типа ' + Game.Unit.items.army.ground.agmogedcar.name,
		reward: {
			metals: 50,
			crystals: 30
		},
		options: {
			accept: {
				text: 'Чёрт, хотел оставить себе для эскорта… Ладно, пользуйтесь, я потом еще наделаю.',
				mood: 'positive'
			}
		},
		isDone: function() {
			var user = Meteor.user();
			var count = Meteor.Game.SpaceEvents.Collection.find({
				user_id: user._id,
				type: Game.SpaceEvents.type.REINFORCEMENT
			}).count();
			return (count >= 2) ? true : false;
		}
	}), new game.Quest({
		engName: 'buildHouse15',
		text: '<p>Правитель, у вас получилось отправить Бгоневички! У вас есть очки Чести, но пока их некуда тратить. Предлагаю это исправить, тем более, что для производства солдат и техники всегда нужны люди. Поэтому увеличение притока населения — это что-то вроде инвестиций в вашу будущую армию. Думаю, лучше всего начать с Жилого Комплекса, ему уже не так далеко осталось до двадцатого уровня. Я бы, правда, попросила вас пока ограничиться пятнадцатым, потому что на этом уровне вы сможете открыть ещё одно здание, увеличивающее приток людей на эту планету. Если вы не против, отдайте приказ улучшить здание Комплекса до пятнадцатого уровня, Консул.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 15-го уровня',
		reward: {
			metals: 3000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'А куда у вас лишний народ девают, извиняюсь за вопрос?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 15);
		}
	}), new game.Quest({
		engName: 'buildEntertainment5',
		text: '</p>Прекрасно, просто прекрасно, правитель. Жилой Комплекс увеличил количество людей, но мы ещё немного подстегнём этот процесс, ведь теперь мы можем открыть Центр Развлечений! Этот своеобразный гибрид парка аттракционов и игорного дома всегда будет привлекать поселенцев в нашу колонию. А где много населения, там много пехоты; а где много пехоты, там много Чести, не правда ли? Если вам по душе это шикарное заведение с блэкджеком и… рулеткой, просто отдайте приказ построить его, а затем и улучшить до пятого уровня.</p></p>Здание Центра тоже находится в жилом районе, оно почти в самом центре (извините за каламбур) — пятое слева.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.entertainment.name + ' 5-го уровня',
		reward: {
			metals: 1000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'Какой каламбур? А, впрочем, давай этот центр, мне нравится картинка.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'entertainment', 5);
		}
	}), new game.Quest({
		engName: 'buildMetalCrystal15',
		text: '<p>Очень скоро, Консул, вы будете развивать эту колонию, руководствуясь лишь собственным планом, и я перестану путаться у вас под ногами. Но для достаточно светлого будущего вам понадобится гораздо больше ресурсов, чем у вас есть сейчас. Возможно, вам стоит улучшить свои Шахты для того, чтобы, пока вы занимаетесь другими делами, они приносили вам стабильный доход в твёрдой металлической и кристаллической валюте. Если вы ещё не слишком устали от моих советов, пожалуйста, повысьте уровень своих шахт до пятнадцатого. Это будет очень дальновидно и мудро с вашей стороны, мой Император.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name + ' 15-го уровня и ' + Game.Building.items.residential.crystal.name + ' 15-го уровня',
		reward: {
			metals: 1500,
			crystals: 500
		},
		options: {
			accept: {
				text: 'Да, я дальновидный! Ещё какой!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return
			Game.Building.has('residential', 'metal', 15) && Game.Building.has('residential', 'crystal', 15)
		}
	}), new game.Quest({
		engName: 'buildAirfield5',
		text: '<p>Мы в одном шаге от того, чтобы довести ваши основные строения до двадцатого уровня, Консул! Но сначала я покажу вам ещё один способ, как зарабатывать очки Чести у Совета. Речь пойдёт о вашем космическом флоте; но, чтобы добраться до него, нам сначала придется построить здание Аэродрома для самолётов, использующихся в наземных операциях. Кстати, их вы тоже можете отправлять на Землю и получать те же самые очки Чести, что и за пехоту с техникой. Пожалуйста, отдайте приказ, Консул, и постройте, а затем улучшите Аэродром до пятого уровня.</p><p>Здание Аэродрома находится в военном районе, чуть дальше Военного Завода.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.airfield.name + ' 5-го уровня',
		reward: {
			metals: 2000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'Космический флот! Я уже чую, где будет экшен.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 5);
		}
	}), new game.Quest({
		engName: 'buildShipyard5',
		text: '<p>Очень хорошо, правитель, Аэродром заработал. Теперь наша следующая цель — построить Верфь, на которой будут делать ваши космические корабли. Из этих кораблей когда-нибудь соберётся целый флот, который будет наводить ужас на чешуйчатых в нашем уголке Галактики. Но, как и все великое, это дело начнется с первого шага — то есть с самых простых и дешёвых штурмовиков «Оса». Поскольку все необходимые исследования вы уже провели, остаётся только отдать приказ построить и улучшить Верфь до пятого уровня.</p><p>Здание Верфи стоит рядом с Аэродромом, оно четвёртое слева в линейке зданий военного района.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.shipyard.name + ' 5-го уровня',
		reward: {
			metals: 25000,
			crystals: 5000
		},
		options: {
			accept: {
				text: 'Интересно, а они очень дорогие, эти «Осы»?',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 5);
		}
	}), new game.Quest({
		engName: 'buildWasp10',
		text: '<p>Ура, Верфь готова, и теперь вы можете приказать построить первые космические корабли в истории этой планеты. Для этого откройте, пожалуйста, вторую вкладку «три шеврона» и вы сразу же попадёте в верхний раздел, где находятся космические корабли. Самыми первыми в линейке звёздного флота идут как раз Осы, так что вам нужно просто выделить их и приказать построить десять штук, правитель.</p>',
		conditionText: 'Построить 10 юнитов ' + Game.Unit.items.army.fleet.wasp.name,
		reward: {
			metals: 250,
			crystals: 50
		},
		options: {
			accept: {
				text: 'О, я уже чувствую, как беру на абордаж корабль рептилоидов. Аррр!',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('fleet', 'wasp', 10);
		}
	}), new game.Quest({
		engName: 'fightAtCosmos',
		text: '<p>Отличная работа, Консул, Осы построены. Теперь вы можете сразу же пустить их в дело: например, отправить десяток свеженьких штурмовиков патрулировать близлежащие торговые пути. Если им по дороге попадутся вражеские корабли (а они обязательно им попадутся), то Осы тут же расправятся с ними и привезут вам добычу, а также немного очков Чести. Совет, как вы понимаете, весьма благосклонно относится к грабежу вражеских судов.</p><p>Поэтому, как только вы будете готовы, выберите вкладку со скрещенными мечами, и в верхнем разделе с пиктограммой прицела выберите первую иконку - она означает «Атака на патруль». Обратите внимание, что внутри также можно выбрать сложность патруля, от этого будет зависеть количество кораблей противника, которые ему встретятся. Чтобы попробовать эту систему, выберите, пожалуйста, самый простой патруль и отправьте свои корабли с помощью кнопки «В атаку».</p>',
		conditionText: 'Отправить флот в атаку',
		reward: {
			metals: 200,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Давай попробуем. Пиастры, пиастры, пиастры!',
				mood: 'positive'
			}
		},
		isDone: function() {
			var user = Meteor.user();
			return Meteor.Game.SpaceEvents.Collection.findOne({
				user_id: user._id,
				type: Game.SpaceEvents.type.SHIP,
				'info.isHumans': true
			});
		}
	}), new game.Quest({
		engName: 'readMail',
		text: '<p>Вы великолепно справляетесь, Консул. Главное, помните: ваши войска, отправленные на планету Земля, дают Очки Чести, а космический флот, отправленный в атаку, приносит и честь, и ресурсы. Но будьте осторожны — очень важно, чтобы вы анализировали информацию о каждом столкновении с врагом. В этом вам поможет последняя вкладка с зеленым недружелюбным лицом, там вы найдете исчерпывающую информацию о вооружении, броне и предпочтениях противника. Думаю, вы заметили в меню еще одну, предпоследнюю вкладку — с пиктограммой конверта. Это, как вы уже, наверное, догадались, ваша почта. Именно туда приходят сообщения, содержащие полную информацию о прошедшем бое. Следите за тем, чтобы все сообщения в почте были прочитаны, ведь там могут быть очень важные сведения.</p>',
		conditionText: 'Почта должна быть прочитана',
		reward: {
			metals: 50,
			crystals: 50
		},
		options: {
			accept: {
				text: 'Сейчас посмотрю. А фильтра спама у вас нету?',
				mood: 'positive'
			}
		},
		isDone: function() {
			var user = Meteor.user();
			return !Mail.findOne({
				to: user._id,
				status: game.Mail.status.unread
			});
		}
	}), new game.Quest({
		engName: 'buildHouse20',
		text: '<p>Теперь вы знаете достаточно, чтобы самостоятельно развивать эту колонию дальше, правитель. Последнее, о чем я попрошу — это улучшить Жилой Комплекс до двадцатого уровня, чтобы, наконец, потратить те очки Чести, которые вы заработали. Но не волнуйтесь, Консул, на этом наше общение не прекратится — и я, и учёные, и инженеры — мы все готовы помочь вам сделать эту планету самой лучшей и преуспевающей колонией в Галактике. О каждом направлении, требующем вашего внимания, мы будем докладывать и просить вашего содействия во всех важных вопросах, в этом вы можете на нас положиться. Вместе мы сделаем всё возможное для победы над зелеными тварями в космосе и на Земле.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 20-го уровня',
		reward: {
			metals: 500,
			crystals: 100
		},
		options: {
			accept: {
				text: 'Что, всё — конец туториала? Супер, я красавчик.',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 20);
		}
	})
])

}