initQuestRegularContentTutorial = function() {

// TODO: Когда будете настраивать цепочки квестов, используйте функцию
//       Game.Quest.checkFinished('tutorial')

new game.QuestLine({
	who: 'tamily',
	engName: 'tutorial',
	canStart: function() {
		return true;
	},
	finishText: 'Невероятно, Консул, и как вам удалось так быстро достичь такого развития. Возможно слухи о том, что вы - сверхчеловек... правдивы. В который раз я поражена...Я знаю, что у вас очень много дел, но мне бы очень хотелось, чтобы такой мудрый покровитель, как вы помог мне с некоторыми вопросами, касательно развития вашей колонии, я была бы крайне благодарна вам, Правитель. Почаще проверяйте почту.'
}, [
	new game.Quest({
		engName: 'buildHouse',
		text: '<p>Мы понимаем, о Великий Консул, что не нам говорить вам, что делать, но позвольте помочь вам побыстрее освоиться на вашем новом месте, императора нашей колонии. Наверху находится основное меню навигации. Слева находится дополнительное меню, открывающее вам доступ к системам контроля и управления вашей империей. Люди в нашей вселенной безгранично доверяют власти Консулов, мы ваши подданные навеки, правитель. Я уверенна, вы бы хотели сделать вашу Империю самой сильной в галактике и дать жёсткий отпор проклятым Рептилоидам. Мы безмерно благодарны вам за это, Консул.</p> \
			<p>Вам потребуется много ресурсов для развития. Основными ресурсами в борьбе с захватчиком являются люди, металл и кристалл. А так же Грязные Галактические Кредиты. Давайте я покажу вам где вы можете отдать приказ на строительство Жилого Комплекса для ваших подданных, чтобы новым колонистам было где жить.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name,
		reward: {
			metals: 5000,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house');
		}
	}), new game.Quest({
		engName: 'buildMetal',
		text: '<p>Отлично, Консул. Люди будут верны вам, они пойдут на войну по вашему первому же приказу, они будут строить здания и технику, они будут заниматься исследованиями и всё это во имя вашего величия. Для постройки любых зданий или войск нужен металл, Консул. Давайте построим шахту металла.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name,
		reward: {
			metals: 1000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.metal.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal');
		}
	}), new game.Quest({
		engName: 'buildCrystal',
		text: '<p>Замечательно, Консул. На колониях вроде этой, которой вы управляете, присутствует крайне важный ресурс - кристалл. По каким то причинам этот ресурс не встретишь на нашей родной планете, Земле, но он очень важен в развитии и научном прогрессе, Консул. Нам нужна шахта по добыче кристалла. Отдадите приказ на строительство?</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.crystal.name,
		reward: {
			crystals: 1000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.crystal.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'crystal');
		}
	}), new game.Quest({
		engName: 'buildLaboratory',
		text: '<p>Все здания на вашей планете, Консул, делятся на 2 типа: Социальные строения и Военные. Социальные нужны для добычи и процветания вашей Колонии, а военные нужны для развития технологий и строительство боевой техники. Уверена, вы собираетесь развивать технический и научный прогресс, Правитель, больше ни слова… вы правы, не будем терять время, я сейчас же покажу вам где вы можете отдать приказ на строительство Исследовательской Лаборатории.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.laboratory.name,
		reward: {
			metals: 2500,
			crystals: 1500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.laboratory.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory');
		}
	}), new game.Quest({
		engName: 'researchEnergy',
		text: '<p>Лаборатория готова и учёные уже ждут ваших приказов, Император. Исследования крайне важны для зданий, техники и других исследований. Один из самых важных вопросов на колониях это Энергия, помогите нам, Консул, отдайте приказ учёным заняться развитием энергетики, и я буду безмерна благодарна вам…</p>',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.energy.name,
		reward: {
			metals: 2500,
			crystals: 1500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Research.items.evolution.energy.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'energy');
		}
	}), new game.Quest({
		engName: 'buildHouse5',
		text: '<p>Консул, спешу вам сообщить, что всё идёт отлично. Ваша колония быстро развивается, ресурсы добываются, новости о новой колонии под контролем нового Консул-правителя разлетаются быстро. К нам продолжают прилетать люди с других планет а так же беженцы с захваченной Земли. Нам нужно где-то их всех разместить. Люди — важный ресурс, без них не будет армии и на начальном этапе крайне важно, чтобы простому народу было как можно более комфортно и приятно жить. Если позволите, Консул. Я считаю, что нам следует улучшить наши Жилые комплексы. Для начала до 5 уровня. Это даст нам больше возможностей по размещению прибывших и, как следствие, добавит больше рабочих рук и рекрутов для нашей армии.</p>',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 5 уровня',
		reward: {
			metals: 3000,
			crystals: 2000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 5);
		}
	}), new game.Quest({
		engName: 'buildMetal5',
		text: 'Основной способ добычи ресурсов на вашей планете - это строительство и улучшение шахт, и различного рода жилых и развлекательных зданий. Чтобы ускорить своё развитие, надо в первую очередь развивать шахты добычи металла и кристалла. Предлагаю улучшить шахту добычи металла до 5 уровня, что скажите, Правитель?',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name + ' 5 уровня',
		reward: {
			metals: 5000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.metal.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 5);
		}
	}), new game.Quest({
		engName: 'buildCrystal5',
		text: 'Прекрасная работа, Консул. Что же... Думаю вы уже поняли, что после улучшения добычи металла, вам понадобится улучшить добычу кристалла на вашей колонии. Давайте построим Шахту Добычи Кристалла 5 уровня.',
		conditionText: 'Построить ' + Game.Building.items.residential.crystal.name + ' 5 уровня',
		reward: {
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.crystal.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'crystal', 5);
		}
	}), new game.Quest({
		engName: 'researchEnergy5',
		text: 'Отлично, Консул! Просто отлично. Думаю следует вернуться к исследованиям. Вы уже изучили Энергетику, но для различного рода строений или войск - нужны исследования более высокого уровня. Думаю, для начала, энергетики 5 уровня должно хватить.',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.energy.name + ' 5 уровня',
		reward: {
			metals: 4000,
			crystals: 3500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Research.items.evolution.energy.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'energy', 5);
		}
	}), new game.Quest({
		engName: 'buildLaboratory5',
		text: 'Прекрасно! Начало исследовательской деятельности положено. Однако, вам следует знать, что для более серьёзных исследований - нужны более развитые лаборатории, если вы хотите развиваться дальше, вам потребуется развить Лаборатории до 5 уровня. Они находятся первая иконка сверху, третья слева, это здания военного района, лаборатории и другие военные строения расположены именно так.',
		conditionText: 'Построить ' + Game.Building.items.military.laboratory.name + ' 5 уровня',
		reward: {
			metals: 4500,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.laboratory.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'laboratory', 5);
		}
	}), new game.Quest({
		engName: 'researchAlloy5',
		text: 'Ну вот, здорово. Ваша колония развивается очень быстро, вы молодец, Консул. Мне нравится ваше упорство. Лаборатории на хорошем уровне развития, а значит теперь можно исследовать кое что получше энергетики. Если развить 5 уровень Особые Сплавы в Исследованиях, третья вкладка сверху, то вы станете намного ближе к военному делу, чем раньше.',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.alloy.name + ' 5 уровня',
		reward: {
			metals: 5000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Research.items.evolution.alloy.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 5);
		}
	}), new game.Quest({
		engName: 'buildBarracks5',
		text: 'Обратите внимание, Консул, что если выбрать исследование, здание или юнита, справа от описания будет указано какие Технологии необходимы для него. На иконки этих необходимых технологий можно нажимать, чтобы быстро добраться в нужное меню. Надеюсь эта информация будет вам полезна. Тем не менее, мне сообщили, что вы достаточно развиты, чтобы начать строительство военных зданий. Пожалуй стоит начать с казарм. Постройте казармы 5 уровня, Консул. Первая вкладка сверху, третья слева, военный район. ',
		conditionText: 'Построить ' + Game.Building.items.military.barracks.name + ' 5 уровня',
		reward: {
			metals: 6000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.barracks.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'barracks', 5);
		}
	}), new game.Quest({
		engName: 'builMetalCrystal7',
		text: 'Вы так быстро со всем справились, это невероятно. даже немного пугающе... Кстати о страхе, чтобы наводить ужас на наших врагов. Но война дорогое развлечение, и войска стоят дорого. Поэтому не забывайте развивать свои добывающие Шахты. Давайте улучшим Шахту металла до 7 уровня и Шахту кристалла так же до 7 уровня, чтобы мне спалось спокойнее. Хорошо, консул?',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name + ' и ' + Game.Building.items.residential.crystal.name + ' 7 уровня',
		reward: {
			metals: 30000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.metal.name + ' и ' + Game.Building.items.residential.crystal.name + ' 7 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 7) && Game.Building.has('residential', 'crystal', 7);
		}
	}), new game.Quest({
		engName: 'buildFathers20',
		text: '<p>Вы такой сильный и волевой правитель, Консул... я смущена... я так и представляю как вы стоите в блестящей амуниции и отдаёте приказы вашей армии... ох да! Точно! Армия... пожалуй не мне вам говорить, что солдат надо где-то подготавливать, особенно это касается наших ,,солдат,, казармы находятся в военном районе, Консул. А наше основное мясо... в смысле.. основная боевая единица - это Отцы. Для их постройки вам потребуется: Энергетика 3, Казармы 3. Уверенна вы без проблем найдёте 20 новобранцев, из которых сможете подготовить настоящих Отцов!</p>',
		conditionText: 'Иметь в распоряжении 20 юнитов ' + Game.Unit.items.army.ground.fathers.name,
		reward: {
			metals: 8000,
			crystals: 4500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Unit.items.army.ground.fathers.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('ground', 'fathers', 20);
		}
	}), new game.Quest({
		engName: 'sendReinforcement',
		text: '<p>У нас есть Армия, Армия, Консул! Увииии! Я так рада. Ой... то есть.. у вас есть Армия, Великий правитель, у вас... ну и это, а что вы собираетесь с ней делать? Рептилии никогда ещё не высаживали свои армии на другие колонии, обычно они их просто грабят или разрушают с помощью флота. А вот нашу столицу, нашу родную планету, Землю, они захватили гигантским войском, и чтобы отбить нашу Родину у Рептилий нам нужно войска не меньше. Вложите свою лепту в общее дело, Консул, отправьте ваших солдат в резерв Адмирала Стил Болза и при следующей высадке ваши воины будут доблестно сражаться на Земле во имя вашего правления и ваших чистых и прекрасных намерений помочь нам.</p>',
		conditionText: 'Отправить в Резерв юнитов типа ' + Game.Unit.items.army.ground.fathers.name,
		reward: {
			metals: 8000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, отправлю',
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
		engName: 'researchAlloy6',
		text: 'Хмм. Думается мне, что вам, Консул, нужна техника, верно? Откройте военный район, найдите в списке Военный Завод и кликните в необходимых технологиях на Особые Сплавы, для Военного завода, это исследование должно быть 6 уровня. Вас перекинет на лабораторию, где вы исследуете 6 уровень особых сплавов. А я буду ждать вас здесь, Правитель. ',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.alloy.name + ' 6 уровня',
		reward: {
			metals: 9000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Research.items.evolution.alloy.name + ' 6 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 6);
		}
	}), new game.Quest({
		engName: 'buildFactory5',
		text: '<p>Я слышала как наши солдаты говорили о том, что у Рептилий серьёзное вооружение, в том числе и мощная техника, а у нас нет ничего такого. Я конечно считаю, что они полные идиоты раз хотят всего и сразу, и всё же, Великий Консул..в чём то они правы. Вам необходимо помогать в битве на Земле, иначе мы можем проиграть войну и тогда Рептилоиды доберутся и до нашей колонии. Я точно знаю, что у нас есть силы и средства, чтобы начать разработку боевых машин. Отдайте приказ на строительство 5 уровня военного завода, Консул, и поверьте... вы не пожалеете о своём решении.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.factory.name + ' 5 уровня',
		reward: {
			metals: 10000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.factory.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'factory', 5);
		}
	}), new game.Quest({
		engName: 'researchEnergy6',
		text: 'Ух ты, как здорово у вас получается управлять вашей колонией. Я тут проверила документы, если вы исследуете Энергетику до 6 уровня, вы сможете построить неплохую военную технику. Как вам такая идея, Консул? Надеюсь вы одобрите моё предложение. Если да, то исследуйте Энергетику до 6 уровня. ',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.energy.name + ' 6 уровня',
		reward: {
			metals: 100000,
			crystals: 35000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Research.items.evolution.energy.name + ' 6 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'energy', 6);
		}
	}), new game.Quest({
		engName: 'buildAgmoredcar5',
		text: 'Благодаря вашим успехам, Консул, Совет Галактики высылаем вам неплохие награды в виде ресурсов. Совет Галактики всегда поддерживает Консулов. Мы благодарны вам за помощь и за ваше опытное руководство, мы верим в вас, правитель. Тех средств, что нам выделили как раз должно хватить на строительство 5 Бгоневичков в Наземных Войсках, это вторая вкладка сверху и третья слева.',
		conditionText: 'Построить 5 юнитов 	' + Game.Unit.items.army.ground.agmogedcar.name,
		reward: {
			metals: 8000,
			crystals: 1000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе 5' + Game.Unit.items.army.ground.agmogedcar.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('ground', 'agmogedcar', 5);
		}
	}), new game.Quest({
		engName: 'buildHouse10',
		text: 'Ох, Консул, я чуть не забыла... А ведь об этом не стоит забывать. Для постройки Наземных Войск, а особенно для флота - нужно очень много людей, ну вот прям ооочень много, поэтому стоит внимательнее относиться к развитию Жилых Комплексов и любых других зданий, что привлекают, а следовательно и добывают людей для вашей колонии. Отдайте приказ на строительство 10 уровня Жилого Комплекса. А пока он строится - изучите интерфейс управления колонией.',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name + ' 10 уровня',
		reward: {
			metals: 4000,
			crystals: 6000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name + ' 10 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 10);
		}
	}), new game.Quest({
		engName: 'buildBarracks6',
		text: 'Надеюсь вы заметили, Консул, что для строительства 11 уровня жилого комплекса нужны уже не Люди, а Очки Чести. Очки чести это по сути тоже ресурс, и очень важный, однако обычные шахты его не добывают. Честь можно получить лишь в сражении в космосе Флотом или за отправку наземной армии в резерв, на Землю. Кстати, давайте заработаем немного чести, отправив Турникмэнов на Землю. Но для начала надо выполнить все условия по их строительству. Улучшите Казармы до 6 уровня, Правитель.',
		conditionText: 'Построить ' + Game.Building.items.military.barracks.name + ' 6 уровня',
		reward: {
			metals: 250000,
			crystals: 150000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.barracks.name + ' 6 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'barracks', 6);
		}
	}), new game.Quest({
		engName: 'buildHorizontalbarman300',
		text: 'Супер! Совет прислал нам необходимое количество ресурсов. Вы готовы нанять на верную и вечную службу 300 Турникмэнов. Они находятся там же, где и все наземные войска, вторая вкладка сверху, третья слева. Ох, целых 300 турникмэнов... ну разве не чудесно?',
		conditionText: 'Построить 300 ' + Game.Unit.items.army.ground.horizontalbarman.name,
		reward: {
			metals: 10000,
			crystals: 3500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе 300 ' + Game.Unit.items.army.ground.horizontalbarman.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('ground', 'horizontalbarman', 300);
		}
	}), new game.Quest({
		engName: 'sendReinforcement2',
		text: 'Турникмэны готовы, вау, целый боевой отряд. Нечего им отсиживаться без дела и висеть на турничках, на вашей колонии, Консул. Отправьте их в бой, пусть там покажут свою силушку то. Надеюсь вы помните, как отправлять Войска на Землю. На всякий случай сама проверю. Так...ага, это вкладка Войны с красными мечами вверху и средняя вкладка слева. Далее выбираете в списке ваших Турникмэнов или нажимаете кнопку - выбрать всех. Затем нажимаете - отправить. И Готово! Ресурс - Честь ваша! ',
		conditionText: 'Отправить в резерв всех юнитов ' + Game.Unit.items.army.ground.horizontalbarman.name,
		reward: {
			metals: 7000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, отправлю в резерв всех юнитов ' + Game.Unit.items.army.ground.horizontalbarman.name,
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
		engName: 'buildMetal11',
		text: 'Чтобы развиваться дальше в штатном режиме, нужно иметь Шахты добычи более высокого уровня, чем выше уровень шахт, тем больше они добывают. Однако после 10 уровня, Шахты, как и другие строения и исследования, требуют Очки Чести вместо Людей. Слава великим правителям, что честь у вас имеется, Консул. Ну а если её не будет хватать, то всегда можно построить ещё войска и отправить их в резерв. Эм... ах да, ресурсы! Отдайте приказ на строительство Шахты Металла 11 уровня, мой Император.',
		conditionText: 'Построить ' + Game.Building.items.residential.metal.name + ' 11 уровня',
		reward: {
			metals: 5000,
			crystals: 7000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.metal.name + ' 11 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'metal', 11);
		}
	}), new game.Quest({
		engName: 'buildCrystal11',
		text: 'Пожалуй следует так же улучшить Шахту добычи Кристалла, ведь это очень редкий и важный ресурс. Как и Шахту металла да, Правитель? До 11 уровня? Пожалуй соглашусь с вами, вы как всегда правы. Давайте же сделаем это - улучшим Шахту Добычи Кристалла до 11 уровня.',
		conditionText: 'Построить ' + Game.Building.items.residential.crystal.name + ' 11 уровня',
		reward: {
			metals: 5000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.crystal.name + ' 11 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'crystal', 11);
		}
	}), new game.Quest({
		engName: 'researchAlloy8',
		text: '<p>Правитель. Научный отдел крайне воодушевлён вашими навыками в управлении и организации, я тоже поражена, как быстро и целеустремлённо вы развиваете вашу колонию. Так это.. о чём я? Ах да! Так вот, научный отдел стремится приносить пользу, они говорят что есть много серьёзных исследований, которые поспособствуют в ваших стремлениях. Одно из таких исследований это ,,Особые Сплавы,, - они позволяют строить не только новую архитектуру и военные здания, но и делать это быстрее. Полагаю, следует провести исследование Особых Сплавов до 8 уровня - это серьёзно поможет вам в будущем, Консул.</p>',
		conditionText: 'Исследовать ' + Game.Research.items.evolution.alloy.name + ' 8 уровня',
		reward: {
			metals: 4000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Research.items.evolution.alloy.name + ' 8 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Research.has('evolution', 'alloy', 8);
		}
	}), new game.Quest({
		engName: 'buildAirfield5',
		text: 'Мне кажется вы уже неплохо разобрались в интерфейсе управления вашей колонией, Консул. А значит, если я скажу вам, что для космических боёв вам необходим флот, то вы спокойно зайдёте в раздел - Войска, вторая иконка сверху, и на первой иконке слева будет флот. Самый слабый космический юнит - Оса, однако эти корабли довольно полезные. В описании этого корабля вы увидите, что необходимо для его постройки. Думаю стоит начать с Аэродрома 5 уровня.',
		conditionText: 'Построить ' + Game.Building.items.military.airfield.name + ' 5 уровня',
		reward: {
			metals: 3000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.airfield.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'airfield', 5);
		}
	}), new game.Quest({
		engName: 'buildShipyard5',
		text: '<p>Колония прекрасно развивается, Консул. Я говорила с Советом Галактики и они поражены, такого великолепного правителя как вы, надо ещё поискать, и это даже не мои слова, Консул, хотя лично я думаю точно так же. Совет попросил меня рассказать вам про обстановку в галактике: Рептилоиды захватили не только нашу родную планету, но и множество аванпостов, планет и прочих ключевых точек в галактике. Думаю, Совет намекает на то, что такой талант как вы, может быть очень полезен в космических баталиях. Что же... в таком случае вам нужен флот, Консул. А флот надо где-то строить. Как насчёт Верфи? Ну... скажем... 5 уровня.</p>',
		conditionText: 'Построить ' + Game.Building.items.military.shipyard.name + ' 5 уровня',
		reward: {
			metals: 3000,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.military.shipyard.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('military', 'shipyard', 5);
		}
	}), new game.Quest({
		engName: 'buildWasp20',
		text: '<p>Что же это я… простите меня, Консул… я вовсе не хотела так себя вести. Вы такой умный и сообразительный, а я всё пытаюсь объяснять вам на пальцах, что где находится… простите меня, Повелитель. Уверенна вы уже сами во всём разобрались и гораздо быстрее чем я. Я слышала, что Союз Колоний готов выделить инвестиции, если вы докажите свою жёсткую позицию в войне с рептилоидами. Думаю, 20 Космических Истребителей Оса сможет убедить Совет в серьёзности ваших намерений, Консул. </p>',
		conditionText: 'Построить 20 юнитов ' + Game.Unit.items.army.fleet.wasp.name,
		reward: {
			metals: 2000,
			crystals: 4000
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будут тебе ' + Game.Unit.items.army.fleet.wasp.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Unit.has('fleet', 'wasp', 20);
		}
	}), new game.Quest({
		engName: 'fightAtCosmos',
		text: 'Ах, как бы я хотела увидеть, как вы надерёте Рептилиям их хвостатые чешуйчатые зад... О! Консул, а что если вы заявите о себе, напав на патруль Рептилий. Ой, как бы это было здорово, уверена Совет бы оценил это и награда последовала незамедлительно. Сама мысль об этом так возбуждает... что скажите, Правитель? Выберете на верхней панели меню - карта галактики и отправьте весь свой флот в атаку на патруль рептилий.',
		conditionText: 'Отправить флот в атаку',
		reward: {
			metals: 12000,
			crystals: 6000
		},
		options: {
			accept: {
				text: 'Давай попробуем',
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
		text: 'Всё прекрасно, Консул. Я ощущаю в вас силу и решимость. Помните, что нужно развивать строения и исследования. Войска отправленные на планету - дают Очки Чести, а флот отправленный в атаку даёт и честь и ресурсы, но будьте осторожны. В космосе важно побеждать. Думаю вы заметили в меню сверху справа - информацию о передвижении флота, а на почту, которая находится на верхнем панели, приходят сообщения лога боя. Следите за тем, чтобы вся почта была прочитана, там могут быть очень важные сведения.',
		conditionText: 'Почта должна быть прочитана',
		reward: {
			metals: 3000,
			crystals: 3000
		},
		options: {
			accept: {
				text: 'Сейчас посмотрю',
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
		engName: 'buildMegapolis5',
		text: 'Совет полагает, что вы уже готовы, Консул. А это значит, что напоследок нам останется лишь построить мегаполис 5 уровня. И на этом пока всё. Я никуда не денусь, я и дальше буду вашим советником, однако заданий по обучению от Совета больше не будет. Далее лишь вы будите решать, как вам развивать свою колонию и как управлять своими подчинёнными, но помните, что главная задача это власть в Космосе и победа на Земле.',
		conditionText: 'Построить ' + Game.Building.items.residential.megalopolis.name + ' 5 уровня',
		reward: {
			metals: 6000,
			crystals: 4500
		},
		options: {
			accept: {
				text: 'Ок, будет тебе ' + Game.Building.items.residential.megalopolis.name + ' 5 уровня',
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'megalopolis', 5);
		}
	})
])

}