initQuestDailyContentNataly3 = function() {
'use strict';

new game.DailyQuest({
  engName: 'About bacteria',
  who: 'nataly',
  name: 'Кстати, о бактериях', 
  text: 'Какой-то сумасшедший только что ворвался в одну из биологических лабораторий, Консул и вколол себе все ампулы из хранилища, после чего сбежал. Охрану, разумеется, ждут строгие взыскания, но это уже не спасёт ситуацию: человек, добровольно инфицировавший себя флуоресцентными бактериями пяти видов, всё ещё бродит где-то в жилом районе. Учёные разделились на два лагеря – одни строят графики вероятных исходов, а другие с нетерпением ждут первых рапортов, чтобы занести данные в свои научные работы.', 
  
  answers: { 
    nightlife: { 
      text: 'Хм. Ночная жизнь города никогда уже не будет прежней.', 
      win: 'Прекрасный план, Командующий! Я передам военным, чтобы они дождались темноты и стреляли снотворным по всему ярко-зелёному и лучистому.', 
      fail: 'Эти бактерии не заразны, Консул. Всё, что нам надо – это поймать и запереть сумасшедшего.' 
    },
    
    givemethat: { 
      text: 'А что, так можно было?!', 
      win: 'Разумеется. Вам достаточно пожелать, Командующий, чтобы наши специалисты встроили светящиеся биоэлементы в ваш аватар.', 
      fail: 'Когда мы найдём этого безумца, то позаботимся о том, чтобы он провёл остаток своих дней в изолированном помещении, обвешанный датчиками и накаченный успокоительным. Вы уверены, что хотите того же для себя, Консул?'
    },
    
    toxic: { 
      text: 'Это вам урок, Натали. В следующий раз добавляйте к препаратам один немаркированный со смертельным токсином.', 
      win: 'А что, это дельная мысль, Командующий. Главное, чтобы учёные тоже знали об этом коварном плане.', 
      fail: 'Это безумие, Консул. Так мы не сможем гарантировать даже минимальную безопасность нашего собственного персонала.' 
    },
  }
});

new game.DailyQuest({
  engName: 'Sensors',
  who: 'nataly',
  name: 'Датчики', 
  text: 'Долгое время наши еноты-разведчики ковырялись в помойках врага, попутно снимая видео о передвижениях войск и техники. Но учёные давно хотели поставить на них что-то более современное, чтобы выяснить местонахождение подземных хранилищ и маршруты транспортных перевозок. Для этого нам понадобятся специальные датчики, которые не будут «фонить» в окружающую среду: мы ведь не хотим, чтобы рептилоиды догадались о том, какую роль играют в разведке наши пушистые друзья.', 
  
  answers: { 
    muon: { 
      text: 'Поставьте на них мюонные детекторы. Если они работают на таможне, то и тут должны.', 
      win: 'Мы немедленно начнём разработку компактного варианта мюонного детектора.', 
      fail: 'Вообще-то, для построения модели нужно, чтобы детекторы находились над и под сканируемым объектом, Консул. Наши еноты хороши, но они не волшебники.' 
    },
    
    neutrino: { 
      text: 'Поставьте на них детекторы нейтрино, должно сработать.',       
      fail: 'Простите, Консул, но тогда нам придётся прикрепить к каждому еноту бронированный бак с водой. Рептилоиды могут что-то заподозрить.'
    },
    
    infra: { 
      text: 'Просто снабдите их тепловизорами – я всегда хотел посмотреть на голых рептилоидов.', 
      win: 'Тепловизоры енотов проявили подземные транспортные магистрали, водные коммуникации и… помойки. Тоже результат.', 
      fail: 'Голый рептилоид в тепловизоре выглядит, как что-то зелёное в чём-то красном. Если вас возбуждают подобные картины, могу порекомендовать вам галерею абстрактного искусства.' 
    },
  }
});

new game.DailyQuest({
  engName: 'More gold',
  who: 'nataly',
  name: 'Больше золота!', 
  text: 'Наша лаборатория постоянно ищет новые способы лечения и диагностики, – например, в данный момент учёные занимаются исследованием свойств наночастиц золота. Давно известно, что золото обладает хорошей биосовместимостью и низкой токсичностью, но никто и предположить не мог, что крошечные частички этого металла способны проникать в раковые опухоли, доставлять лекарства прямо в клетки, становиться частью диагностических систем. Консул, нам нужно больше золота!', 
  
  answers: { 
    diamond: { 
      text: 'А больше ничего вам не нужно? Алмазов, бриллиантов?', 
      win: 'Это очень щедрое предложение, Консул! Лаборатория примет любые материалы с благодарностью.', 
      fail: 'Извините, Консул. Если желаете, мы вернемся к этому вопросу позже.' 
    },
    
    headoff: { 
      text: 'Не позволю отрывать голову от моей статуи! Даже во имя науки!',
      win: 'Консул, вы же понимаете, что значит «нано»? Для завершения проекта вполне достаточно левого уха.',      
      fail: 'Очень жаль, потому что учёные уже подсчитали, сколько жизней может спасти ваша голова.'
    },
    
    ziggurat: { 
      text: 'Нужно построить зиккурат!', 
      win: 'Я жажду служить! Ой, что это было, Консул?', 
      fail: 'Э-э, наверное, я зайду попозже, Консул, когда вы освободитесь.' 
    },
  }
});

new game.DailyQuest({
  engName: 'Wild men',
  who: 'nataly',
  name: 'Дикие люди', 
  text: 'Консул, прибыла делегация с другой планеты. Она представляет людей, которые еще до войны отказались от власти Совета и улетели на край Галактики. Но теперь всё изменилось: их правительство, лишенное доступа к достижениям науки, быстро деградировало и под давлением общественности запретило обязательную вакцинацию. С десяток лет ничто не предвещало, а теперь у них разразилось сразу несколько масштабных эпидемий. Половины населения уже нет в живых, остальным нужна срочная помощь.', 
  
  answers: { 
    quarantine: { 
      text: 'Надеюсь, делегация умоляет о помощи из строгого карантина?', 
      win: 'Да, хотя нам ничего не угрожает, Консул. У нас-то прививки никто не отменял.', 
      fail: 'Нет, мы ещё не давали им разрешения на посадку.' 
    },
    
    study: { 
      text: 'Может, их сначала изучить? Вдруг что-то новое найдёте!',
      win: 'Интересная мысль! Но мы вполне можем обойтись образцами крови.',      
      fail: 'Эволюция микроорганизмов – довольно увлекательный раздел науки, Консул. Но люди всё-таки важнее.'
    },
    
    Darwin: { 
      text: 'Премию Дарвина этим придуркам, а не медицинскую помощь!', 
      win: 'Это, конечно, жестокий шаг, но я понимаю вас, Консул. Судьба этой колонии послужит уроком всей галактике.', 
      fail: 'Боюсь, премия им не очень поможет. Но, воля ваша, Командующий.' 
    },
  }
});

new game.DailyQuest({
  engName: 'Zoological problem',
  who: 'nataly',
  name: 'Зоологическая проблема',
  text: 'Не хотела прерывать, Консул, но у нас небольшая… проблема. Из отдела изучения интеллекта сбежал подопытный кролик. Пробравшись в инженерный отдел, он угнал экспериментальную силовую броню. Теперь кролик бродит по лаборатории с криком «BWAAAAAAAAAAAAAA», ломает оборудование и сотрудников. Его нужно остановить, но ни в коем случае не убивать! Ведь он такой мил… гхм… в единственном экземпляре!',
  
  answers: { 
    shoothim: { 
      text: 'Расстрелять!', 
      win: 'Как ни странно, это помогло: резиновые пули оглушили разбушевавшееся млекопитающее, и инженеры смогли быстро и аккуратно вынуть его из брони. Скорее, конечно, быстро, чем аккуратно, но не будет придираться к мелочам.', 
      fail: 'Отряд папань, который вы послали, не только убил несчастную зверушку (потеряв половину личного состава), но и испортил ценное оборудование, а оно стоит дорого, Консул… '
    },
    
    boxofcarrots: { 
      text: 'Отправьте ему ящик моркови!',
      win: 'Кролик так расчихался от вашего ящика, что полностью обессилел через пять минут, так что мы тут же извлекли его тушку из брони. Но как вы узнали, что у него аллергия на морковь?', 
      fail: 'Консул, кролик умял морковь и сотрудника, который её доставил. Пришлось изолировать отсек и ждать, пока кролик уснёт. И готовить деньги на компенсацию семье погибшего…'
    },
    
    remoteaccess: { 
      text: 'А вы удалённо питание от брони отключить пробовали?',
      win: 'Как я сама до этого не додумалась! Вы гений, Консул! Нажали пару кнопок – и вуаля! – броня стала надёжной клеткой для бедной зверушки. Осталось только понять, как его оттуда вытащить…',
      fail: 'Мы пытались, но по трагическому стечению обстоятельств броню закоротило… И теперь у нас есть печёный кролик в очень дорогой консервной банке. Это ужасно.'
    },
  }
});

new game.DailyQuest({
  engName: 'Hyperholes',
  who: 'nataly',
  name: 'Гипердыры',
  text: 'Добрый день, Консул. Мы проводили исследования в области гипердыр, надеясь разработать оружие, схожее с тем, которое установлено на рептилоидной Тени. Ну, или по крайней мере разработать защиту от него. И мы нашли способ превращать обычные чёрные дыры в гипердыры, но для этого необходимо очень редкое вещество. Если вы решите финансовую сторону вопроса, мы сможем приступить к работе.',
  
  answers: { 
    takeitfromshadow: { 
      text: 'А не проще просто взять эту штуку сразу с Тени?', 
      fail: 'К сожалению, после боя от Тени остаётся лишь космическая пыль. Что, возможно, и к лучшему.'
    },
    
    gettheblackhole: { 
      text: 'А где вы черную дыру возьмёте?',
      win: 'Построим самый большой адронный коллайдер, Консул. Возьмём кредит у Совета… Шучу, у нас уже есть подходящий ускоритель частиц.', 
      fail: 'Там же, где и обычно, – в космосе. Вы меня внимательно слушали, Консул?'
    },
    
    shutupand: { 
      text: 'Ради такого и денег не жалко.',
      win: 'Спасибо, Консул! Обещаю, вы не пожалеете об этом.'
    },
  }
});

new game.DailyQuest({
  engName: 'New kind of crystal',
  who: 'nataly',
  name: 'Новый вид кристалла',
  text: 'Консул! Нам удалось синтезировать новый вид кристалла. Вокруг него мир становится красивее, и, похоже, это всё. Мы назвали его «графоний». Как вы думаете, его можно применить во благо нашей армии?',
  
  answers: { 
    suitfortamili: { 
      text: 'Нужно срочно сделать костюм из графония для советника Тамили!', 
      win: 'Во время трансляции выступления Тамили на Землю боевой дух солдат поднялся, и они быстро зачистили одну из точек рептилоидов. Совет видит в этом вашу заслугу, Консул.', 
      fail: 'Мне кажется, что советнику и так хватает внимания, Командующий.'
    },
    
    suitforfathers: { 
      text: 'Сделайте новую броню для Папань из этих кристаллов.',
      win: 'Отличная идея, Командующий! За такими красивыми Папанями можно отправить кого угодно – они и не заметят, что маршируют в кровавое пекло.', 
      fail: 'Сразу стало видно, что Папани очень дрыщавые. Рептилии, увидев это, без проблем ломали их пополам.'
    },
    
    ihaveanidea: { 
      text: 'Дайте-ка мне несколько, у меня есть идея…',
      win: 'О, наука! Вы такой… такой… Я думаю, вы должны возглавить атаку! Немедленно!',
      fail: 'Консул, оттого, что вы их нацепили на себя, вы не стали более «чётким» правителем.'
    },
  }
});

new game.DailyQuest({
  engName: 'Food for the population',
  who: 'nataly',
  name: 'Пища для населения',
  text: 'Консул, в нашей колонии назревает проблема: дело в том, что население показывает бурный экспоненциальный рост. По-видимому, в ближайшем будущем у нас остро встанет вопрос питания, так как большая часть плодородных земель колонии занята развлекательными центрами, жилищными модулями и военными строениями. Требуется срочно принять меры для обеспечения населения провиантом.',
  
  answers: { 
    purchasedoshirak: { 
      text: 'Проблемы с питанием? Закупите «дошираков» у наших поставщиков – это решит вопрос лет на десять.', 
      win: 'Теперь вся колония сможет питаться специальными «дошираками» – учёные дополнили их состав витаминами и микроэлементами. Вкуса, правда, у них нет, но это в наши планы и не входило.', 
      fail: 'Консул, такой вариант неприемлем – регулярное употребление «дошираков» приведёт к тяжёлым проблемам со здоровьем.'
    },
    
    clearfertileland: { 
      text: 'Передайте Третьему Инженерному: нужно снести и расчистить плодородные земли для сельского хозяйства.',      
      fail: 'Боюсь, Совет данное решение не поддержит, ведь мы не можем жертвовать военной мощью во время вооружённого конфликта.'
    },
    
    GMpotato: { 
      text: 'Напихайте ГМО в картоху и все дела!',
      win: 'Это невероятно! В ходе исследования нам удалось внести ген морозостойкой селедки в нашу обычную картошку! Теперь фермеры смогут выращивать её на полярных шапках, и угроза голода отступила.'
    },
  }
});

new game.DailyQuest({
  engName: 'The Turing Test',
  who: 'nataly',
  name: 'Тест Тьюринга',
  text: 'Консул, у нас проблема! Младший научный сотрудник лаборатории кибернетики Алан Тьюринг разработал тест для выявления замаскированных рептилоидов. Результаты тестирования нас очень удивили. Оказалось, что все сотрудники лаборатории – агенты Императора. Мы не уверены в точности математической модели Алана, но на всякий случай военные изолировали то крыло института. Что прикажете делать?',
  
  answers: { 
    whattheheck: { 
      text: 'Дай-ка мне этот тест… Что за ерунда, я – рептилоид?! Так! Тест сжечь, ученых отпустить.', 
      win: 'Это было мудрое решение, Консул. Согласно свежим данным разведки, сам Тьюринг и был рептилоидом. А производительность труда реабилитированных ученных выросла на 146%. Это позволило им перейти к завершающей стадии проекта «Скайнет».', 
      fail: 'Консул, вы забыли, что у нас шестнадцатеричная система счисления? Перельвуман перепроверила тест, он был рабочим. Но учёные из лаборатории кибернетики уже успели сбежать. Мне жаль.'
    },
    
    patanatomy: { 
      text: 'Переведи Тьюринга в отдел дешифрования, а кибернетиков отправь на проверку в отделение патанатомии.',
      win: 'Консул, вы, как всегда, мудры! И хотя 2 штатных патологоанатома не выявили никаких физиологических признаков рептилоидности у ученых, зато Тьюринг на новом месте создал дешифратор, который уже взломал вражескую машину «Энигма».', 
      fail: 'Мы сделали, как вы велели, Консул. На новом месте Тьюринг дешифровал запросы из вашего браузера в режиме «инкогнито». Научный совет был глубоко удивлен вашими пристрастиями. Тем не менее, учитывая вашу роль в деле спасения нашего мира от рептилоидов, президиум академии наук не стал предавать огласке ваш интерес к интимной жизни Тамили.'
    },
    
    prisonfortreason: { 
      text: 'Тьюринга – посадить за измену, сотрудникам – выдать по ордену и расстрелять. На всякий случай.',
      win: 'Консул, а вы соображаете! Признаюсь, мне было неприятно обвинять Алана, но все это сработало. Конфликт исчерпан, никто ничего не заподозрил. Родные награжденных ученых будут получатьсухпаек до конца войны.',
      fail: 'К сожалению, теперь нам придётся закрыть целый научный отдел, Консул, – у нас просто нет такого количества квалифицированных работников.'
    },
  }
});

new game.DailyQuest({
  engName: 'Fighting spirit',
  who: 'nataly',
  name: 'Боевой дух',
  text: 'Консул, у меня есть предложение: кто-то должен вдохновлять наших солдат, гордо шагая впереди строя, крича боевые кличи и превозмогая противника прямо под огнём. Видя такой героизм, солдаты и сами будут рваться совершать подвиги. Как показали исследования, это не только увеличит боевой дух наших солдат, но и повысит их эффективность. Правда, кандидатуры… Скажем так: готовых на такое крайне мало.',
  
  answers: { 
    sendcaptain: { 
      text: 'Отправь капитана Типлса.', 
      win: 'Вы оказались правы, Консул. В первые же минуты боя солдаты вдохновились настолько, что без страха бросались за ним прямо в пекло, поверив в свою неуязвимость. А все благодаря разработанным мною генераторам мобильного щита.', 
      fail: 'Он пытался, Консул… Но в первую же минуту получил лазером в колено. Хорошо хоть ранение было не сильным, и он не остался обычным диванным воякой на всю оставшуюся жизнь. '
    },
    
    hatchforwaha: { 
      text: 'Вырежи люк в Мамке и посади туда Вахаёбовича.',
      win: 'Это, конечно, было странно, когда Вахаёбович стал махать мечом прямо из башни танка, но это сработало! Видя это, солдаты шли в бой, а Вахаёбович смог даже уничтожить танк рептилий в ближнем бою! Правда до сих пор не поняла, как танк в этот самый бой попал…', 
      fail: 'Когда лаборанты попытались засунуть Вахаёбовича в люк, он… В общем, теперь мне нужны новые работники, Консул.'
    },
    
    sendanderson: { 
      text: 'Отправьте на землю Андерсона.',      
      fail: 'Консул, простите, но даже в самом лучшем случае Андерсон будет гораздо полезнее, командуя нашим флотом. '
    },
  }
});

};