initQuestDailyContentTamily1 = function() {
'use strict';

new game.DailyQuest({
  engName: 'Unknown Ship',
  who: 'tamily',
  name: 'Неизвестный корабль',
  text: 'Правитель! Нам срочно нужна ваша помощь. Мы обнаружили неподалёку от нашей Колонии неизвестный корабль, мы не можем определить, чей он. Что нам делать, великий Консул? ',
  answers: {
    fire: {
      text: 'Как это что? Стреляйте по нему, недоумки!',
      win: 'Это потрясающе, Консул! Как вы узнали, что это был разведчик Рептилоидов? Впрочем, не важно. Спасибо вам, без вас мы бы уже давно были мертвы… ',
      fail: 'Корабль уничтожен вдребезги. Ничего не осталось. Однако мы нашли запись судового журнала, вот послушайте: Конс-л, это мой дар в-м, послед-я и е-инствен-ая копия ха-ф лайф 3.'
    },
    reccons: {
      text: 'Послать Енотов-Разведчиков к нему.',
      win: 'Еноты обнаружили, что это корабль затерявшихся в космосе супер-моделей. Мы поделились с ними топливом и провизией, и теперь они хотят отблагодарить вас, Консул.',
      fail: 'Еноты куда-то пропали, но перед исчезновением они отправили нам сообщение. Оно пострадало, но, может быть, вы сможете его прочесть, Консул: оно д-ижет-я на н-с, оно з-лёное и чешуй-атое… пшшш-шшш.'
    },
    wait: {
      text: 'Подождём и подпустим его поближе.',
      win: 'Ха, это было бревно, Консул, представляете! Обычное бревно, просто плыло себе по просторам космоса в невесомости. Интересно только, что вообще бревно делает в космосе, хм…',
      fail: 'Корабль пропал с радаров. Теперь мы никогда не узнаем, что это было и зачем оно прилетало к нам.'
    }
  }
});

new game.DailyQuest({
  engName: 'Personal Plea',
  who: 'tamily',
  name: 'Личная просьба',
  text: 'Великий Консул, я прошу вашего прощения за такую наглость, но вы – самый стильный и красивый человек из всех, кого я знаю. К тому же, как известно, вы знаток во всех вопросах во вселенной. Подскажите, пожалуйста, какое платье мне следует надеть сегодня на званый ужин с друзьями?',
  answers: {
    any: {
      text: 'Тамили, ты прекрасно выглядишь в любом платье.',
      win: 'О… вы и вправду так считаете, Консул? Я… я польщена… Спасибо вам…',
      fail: 'Спасибо, конечно, за комплимент, Консул, но я думала, вы подскажете мне нечто более конкретное. Эх… В любом случае, благодарю вас, Правитель. Извините, что помешала. '
    },
    black: {
      text: 'Надень вон то, чёрное с вырезом.',
      win: 'Ох, как же здорово! Я как раз об этом платье и думала. Вы действительно разбираетесь абсолютно во всём, Великий Консул. Вы не перестаёте меня удивлять!',
      fail: 'Вот это чёрное с вырезом? Но оно же не подходит к туфлям. Консул, вы специально хотите подшутить надо мной? У вас очень тонкий юмор, мне это нравится. Ладно… Не буду вас отвлекать от дел своими глупостями…'
    },
    undress: {
      text: 'Надеть?! Мне кажется, тебе лучше будет вообще всё снять с себя.',
      win: 'Снять всё?! О, Наука, на секунду я подумала, что вы серьёзно, Консул. Вы такой весёлый! Даже во времена войны с рептилиями, когда все грубые и серьёзные, вы находите радость и свет в своём сердце. Спасибо, что поделились этим со мной, Правитель…',
      fail: 'Я очень уважаю вас, Консул, но я не одна из ваших шлюх, уж вы-то должны были знать об этом. Эх… Извините меня за мои глупые вопросы и за мою дерзость, я, пожалуй, пойду.'
    }
  }
});

new game.DailyQuest({
  engName: 'Gas',
  who: 'tamily',
  name: 'Странный газ',
  text: 'В шахте беда, Консул! Непонятный подземный газ заполняет тоннели, мы не знаем, что делать с добычей!',
  answers: {
    blowup: {
      text: 'Взрывай шахту вместе с людьми.',
      win: 'Мы только что получили данные по этому газу: в нём находились очень умные и опасные микроорганизмы. Не уничтожь мы шахту, сейчас уже вся планета была бы заражена.',
      fail: 'Я полностью согласна с вашим решением, Консул. Это была опасная ситуация и вы решили её кардинально, но другие шахтёры недовольны. Глупцы просто не понимают, как сложно принимать такие решения.'
    },
    pumped: {
      text: 'Попробуйте откачать оттуда газ.',
      win: 'А ведь действительно, это было так очевидно. Спасибо вам за помощь, Консул. Не знаю даже, что бы мы без вас делали.',
      fail: 'Когда роботы откачивали газ, что-то пошло не так и шахта взлетела на воздух. В прямом смысле… Огромные породы вынесло наверх ударной волной. Я такого ещё никогда не видела. Ужас.'
    },
    justwork: {
      text: 'Продолжать работу, выветрится само!',
      win: 'Вы были правы, Правитель. Мы зря подняли панику – газ оказался не опасным, вытяжки справились и работа в шахте продолжилась. Здорово! ',
      fail: 'Оказалось, что данный газ может вступать в реакцию с кристаллом. После чего газ каким-то странным образом сгорает вместе с воздухом, не повреждая ни технику, ни другие неорганические объекты. К сожалению, шахтёры расплавились на месте. Зато их одежда осталась…'
    }
  }
});

new game.DailyQuest({
  engName: 'Artifact',
  who: 'tamily',
  name: 'Древний артефакт',
  text: 'Консул, во время добычи кристалла мы нашли странный древний артефакт. Он светится и мигает, что нам с ним делать?',
  answers: {
    blowup: {
      text: 'Взорвите его, к чему нам лишние проблемы.',
      win: 'Мы уничтожили артефакт. Изучив его сигнал, мы поняли, что ещё полчаса, и он бы выпустил некий древний вирус. Потрясающее чутьё, Консул!',
      fail: 'Артефакт содержал в себе огромное количество энергии. Взрыв оказался сильнее, чем мы думали. Наши плодородные земли уничтожены. Люди будут недовольны, Правитель…'
    },
    give: {
      text: 'Дайте его кому-нибудь в руки, древние артефакты любят живую плоть.',
      win: 'Научный отдел отдал артефакт завхозу Петровичу. Артефакт моментально погас и перестал пульсировать. В общем… это, наверное, хорошо.',
      fail: 'Научный отдел отдал артефакт завхозу Петровичу. Артефакт превратился в светящуюся энергию и слился с Петровичем. Петрович взлетел над землёй, сияя ярким светом, он произнёс: «Я есть Альфа и Омега», после чего исчез. И где нам теперь найти другого завхоза?'
    },
    close: {
      text: 'Положите где взяли и закройте шахту.',
      win: 'Когда артефакт поставили на то же место, где нашли, он перестал пульсировать и производить странные и опасные вибрации. Прекрасное решение, Консул!',
      fail: 'Мы сделали, как вы приказали, Консул. Правда, из шахты доносятся странные звуки и выбивается свет. Местные жители стали заметно глупее. Мы полагаем, что это воздействие может быть не только сегодня, в завтрашний день смотреть могут не все. Вернее, смотреть могут не только лишь все, мало кто может… О чёрт, что это было?!'
    }
  }
});

new game.DailyQuest({
  engName: 'shit',
  who: 'tamily',
  name: 'Это пиздец!',
  text: 'Консул!!! Сотни тысяч кораблей Рептилий на радаре! Это конец! Их слишком много… Что же это… Что нам делать, Великий Консул? Прошу вас, скорее!',
  answers: {
    idomyown: {
      text: 'Приготовить мой флот, я вылетаю лично!',
      win: 'Ох, какое облегчение! Это был распавшийся на осколки ледяной астероид. Вы не медлили ни секунды, Консул, вы были готовы идти в бой без промедления, спасая наши жизни. О, какой же вы ахуенный!',
      fail: 'Мы отправили группу разведки. Оказалось, что это не флот Рептилий, это странная космическая энергия. Она разнесла в щепки наших енотов и ушла туда, откуда пришла. Консул, вам нельзя так рисковать собой, вы слишком важны для нас и для меня тоже…'
    },
    checkagain: {
      text: 'Проверить ещё раз всё оборудование и енотов.',
      win: 'Всё ясно, Михалыч не проверил настройки пульта слежения, и поэтому получились такие результаты. Ложная тревога, Правитель. Я извиняюсь. Тем не менее вы молодец.',
      fail: 'Пока мы проверяли оборудование, сигналы пропали. И почему-то половина наших енотов также куда-то исчезла. Что-то странное творится, Консул. И боюсь, теперь мы не узнаем, что…'
    },
    calmdown: {
      text: 'Успокойся, Тамили. Я уверен, что это ошибка.',
      win: 'А ведь вы были правы, Консул. Один из датчиков закоротило, и он выдал такие странные результаты. А я уже панику тут развела, мне так стыдно… Но вы ни капли не боялись, я поражена. Воистину Великий Консул.',
      fail: 'Никаких ошибок, Консул. Это был королевский флот Рептилий. Наверняка Император Рептилий был на борту. Наверное, у них был некий сбой гиперпрыжка – их флот развернулся и ушёл в другом направлении. Как жаль. Мы упустили такой шанс…'
    }
  }
});

new game.DailyQuest({
  engName: 'pirats',
  who: 'tamily',
  name: 'Пираты, Консул',
  text: 'Консул, несколько пиратских кораблей причалили к нашим космическим докам. Их капитан заявляет, что на нашей колонии прячется тот, за кем они охотятся. Капитан Пиратов просит вашего разрешения обыскать планету, что вы на это скажете?',
  answers: {
    theyarecool: {
      text: 'Пираты – крутые ребята, я даю своё Императорское разрешение.',
      win: 'Какой верный ход, Консул! Пираты нашли кого искали. Оказалось, что это предатель, один из самых разыскиваемых в галактике. Он по собственной воле сливал всю информацию о наших войсках рептилоидам. За его голову Совет Галактики даёт хорошее вознаграждение, и Капитан Пиратов благодарен вам за вашу поддержку и посему решил поделиться с вами вознаграждением.',
      fail: 'Консул, проклятые пираты! Это была уловка. Они ограбили несколько складов, избили до смерти ногами пару школьников и изнасиловали старушку. Чёртовы пираты…'
    },
    arrestthem: {
      text: 'Причалили к моим докам? Да они совсем обнаглели. Взять их под стражу.',
      win: 'Они пытались сопротивляться, но мы их взяли, Консул. На их корабле мы нашли краденые драгоценности. Скорее всего эти пираты недавно ограбили какой-то Колониальный Космический Корабль. В общем, отличная находка, Император!',
      fail: 'Простите нас убогих, Консул. Наша Охрана правда пыталась, но вы ведь знаете, насколько они бывают криворукими. В общем, это… Если вы выглянете в окно и увидите улетающие пиратские корабли, знайте: наши ребята храбро сражались. Лучше накажите меня, а не их, жёстко накажите меня, Консул!.. То есть… Я имела в виду… Я не это хотела сказать… Мне так стыдно, что же вы могли подумать обо мне…'
    },
    killthem: {
      text: 'Пффф. Обыскать мою планету, ага… Расстрелять их!',
      win: 'Докладываю, Правитель. Пираты расстреляны, корабли захвачены. С нами связался Галактический Совет: оказалось, эти пираты разыскивались в галактике за грабежи и разбой уже много лет. Награда в наших руках… В смысле, в ваших, в ваших руках, Консул. Вы молодец!',
      fail: 'Мы отправили штурмовой отряд на корабли пиратов, Консул, по вашему распоряжению. Но эти Пираты оказались какими-то ёбнутыми. Они взорвали свои ядерно-нейтронные энергетические системы двигателей и разнесли к чертям собачьим не только себя и свои корабли, но и половину наших космических доков. Может, это были не пираты, а… Ну, эти… Которые с овцами «дружат». Ну, вы поняли, о ком я.'
    }
  }
});

new game.DailyQuest({
  engName: 'wildfire',
  who: 'tamily',
  name: 'Лесной пожар',
  text: 'Правитель, в лесах неподалёку от наших шахт по добыче кристалла начался необычный пожар. Горит земля под деревьями. Очевидцы уверяют, что сами деревья стойки к этому огню, тем не менее он продолжает распространяться по земле и постепенно движется к нашим строениям, честно говоря… мы все в растерянности.',
  answers: {
    chop: {
      text: 'Ну так просто вырубите лес на пути следования огня да и все дела.',
      win: 'Не думайте Консул, что я сомневалась в вас хоть секундочку, но как бы это ни было странно… ваш план сработал. Огонь шёл по земле, но не смог пройти там, где не было деревьев; наверное, именно деревья как-то подпитывали этот огонь, при этом оставаясь нетронутыми. Здорово, Правитель, вы снова всех спасли!',
      fail: 'Этот огонь оказался ещё более необычным, чем полагали. Похоже, что некие вещества в самой земле способствовали распространению. Огонь прошёл дальше по земле и поджёг несколько наших строений. Работы по восстановлению уже ведутся, Консул, не волнуйтесь. '
    },
    sciencebitch: {
      text: 'Действительно необычно, отправьте научную группу туда.',
      win: 'Умный ход, мой Император. Наши учёные выяснили, как действует этот огонь: это вовсе и не огонь, как оказалось, это энергетическое сгорание некоего особого газа на этой планете, который вырабатывают корни деревьев. Мы легко смогли определить катализатор и избавиться от него, пожар прекратился. Прекрасно, Консул.',
      fail: 'Правитель… эм… как бы это так вам доложить, чтобы не звучало очень трагично… Давайте загадкой! Так вот: угадайте, что общего между научной группой и хорошо прожаренным мясом?'
    },
    unusualwater: {
      text: 'Необычный огонь надо тушить необычной водой, и мне плевать, где вы её найдёте.',
      win: 'Ха! Я сначала подумала, что вы шутите, Консул. Но ведь и вправду на этой планете мы нашли особые ключи, бьющие из-под земли, в воде которых находились особые вещества, которые смогли помочь нам справиться с этим необычным огнём. И как вы только узнали об этом, Правитель, вы не устаёте поражать меня.',
      fail: 'Мы просканировали огромные участки местности, но ничего похожего на «необычную воду» не обнаружили. Охранник одного из соседних с лесом складов сказал, что у него есть необычная вода, но это оказался самогон из коры местных галлюциногенных деревьев… Я сожалею, Правитель, простите… но мы не смогли справиться с огнём.'
    }
  }
});

new game.DailyQuest({
  engName: 'politican',
  who: 'tamily',
  name: 'Политика',
  text: 'Консул, один из политиков, Миллионов Рыжебородович, недавно выдвинул очередной непонятный закон, чем окончательно доконал ваших подданных. Они прекрасно понимают, что вы занимаетесь важными делами и что вам не до мелкой политики, но простые люди просят вас что-то сделать, цитирую, «с этим рыжим уебаном». Какие будут предложения, Правитель?',
  answers: {
    cut: {
      text: 'Отрежьте ему пипиську',
      win: 'Честно говоря, Консул, не ожидала от вас такого… замечательного хода. Этот придурок, Миллионов, настолько конченый человек, что достал даже меня. После таких исключительных мер с вашей стороны, думаю, остальные политики дважды подумают, прежде чем творить херню в законодательстве.',
    },
    hang: {
      text: 'Повесить его на площади в назидание другим… политикам.',
      win: 'Честно говоря, Консул, не ожидала от вас такого… замечательного хода. Этот придурок, Миллионов, настолько конченый человек, что достал даже меня. После таких исключительных мер с вашей стороны, думаю, остальные политики дважды подумают, прежде чем творить херню в законодательстве.',
    },
    firehim: {
      text: 'Увольте его… с помощью вот этого дробовика.',
      win: 'Честно говоря, Консул, не ожидала от вас такого… замечательного хода. Этот придурок, Миллионов, настолько конченый человек, что достал даже меня. После таких исключительных мер с вашей стороны, думаю, остальные политики дважды подумают, прежде чем творить херню в законодательстве.',
    }
  }
});

new game.DailyQuest({
  engName: 'murderInTheSenate',
  who: 'tamily',
  name: 'Убийство в Сенате',
  text: 'Консул, вчера произошло нечто крайне неприятное: на званом ужине, где Сенат собирал деньги на борьбу с Рептилиями, произошло убийство. Один из Сенаторов был отравлен. Ведётся расследование, но мне кажется, что если бы вы как то помогли… то Сенат был бы крайне благодарен, а это важно.',
  answers: {
    butler: {
      text: 'Убийца – Дворецкий',
      win: 'И в очередной раз я понятия не имею, как вы это делаете, Правитель, но после ваших слов полиция обыскала личные вещи Дворецкого, и это оказался именно он. Потрясающе, Консул, просто потрясающе',
      fail: 'Ха-ха-ха. У вас такой замечательный юмор, Консул. Но это точно был не Дворецкий, его проверили сразу после убийства, и всё же… Я прекрасно поняла, что вы не хотите заниматься этими глупостями. Больше не буду вам этим докучать, а шутка про Дворецкого всё равно классная, Консул.'
    },
    detectives: {
      text: 'Послать моих лучших Детективов',
      win: 'Наши ребята отлично справились, Консул. Они практически моментально вычислили, кто был убийцей. Им оказался Дворецкий, который спал с женой Сенатора. Какая драма… В общем, Сенат хочет вас поблагодарить.',
      fail: 'К сожалению, даже наши лучшие Детективы не смогли ничего выяснить. Наверное, убийца был слишком хорош и совершенно не оставил следов. Как бы там ни было, мы старались, Консул. Извините…'
    },
    reptiles: {
      text: 'Во всём виноваты Рептилоиды!',
      win: 'Эм… Произошло что-то странное. Сенат тут же прекратил все расследования после вашего заявления. Они сказали, что так же уверены в том, что во всём виновны Ящеры, и после выслали вам награду. Как-то всё это странно, Консул, может они сами же и прикончили одного из своих?',
      fail: 'Хотели бы мы и дальше винить Рептилий во всех бедах, Консул. Если бы мир делился лишь на чёрное и белое, было бы гораздо проще. Вы молодец, это действительно могли быть Рептилоиды, но к сожалению, в этот раз улики указывают, что это был явно человек.'
    }
  }
});

new game.DailyQuest({
  engName: 'element',
  who: 'tamily',
  name: 'Элемент',
  text: 'Правитель, тут какая-то странная рыжая девушка пытается попасть на вашу планету. Она что-то там рассказывает про какое-то зло, про стихии и говорит, что у неё мультипаспорт. Что делать?',
  answers: {
    pyramids: {
      text: 'Вот чёрт. Впустите её и отвезите к пирамидам.',
      win: 'В общем, там был огромный огненный шар и свет, и эта девушка… Я… Откуда вы знали, Консул!?',
      fail: 'Мы сделали, как вы и просили, но по дороге на наш конвой напал какой-то лысый мужик на летающем такси, забрал девушку и улетел, сказав, что это не та планета… Мы так ничего и не поняли, Консул, что тут происходит…'
    },
    sendback: {
      text: 'Нечего всяким чокнутым делать на моей планете, отправьте её обратно.',
      win: 'Какое же верное решение! Мы не пустили её на станцию посадки, а через минуту сканеры показали, что у неё при себе был страшный новый вирус Сибирской Эболы. Грёбаные террористы!',
      fail: 'Консул, в общем, там… огромный горящий энерго-хуй-пойми-что-шар… и он летел на нас. В общем, мы еле справились, потратили все силы, что у нас были. А девчонка?.. А фиг её знает… Ушла куда-то, мы же её выгнали.'
    },
    redheadyousay: {
      text: 'Рыженькая, говоришь… Веди её ко мне.',
      win: 'Консул, мы вели девушку к вам, как вы и приказывали, но потом вдруг на радарах появился странный гигантский шар и девушка начала вопить, что знает, как с этим справиться. В общем, нам пришлось везти её к пирамидам. Там – свет, виу… вжиу… А потом мы её потеряли, Консул, извините. Зато спасли планету.',
      fail: 'Император, когда мы вели девушку к вам, появился какой-то лысый мужик, сказал, что его зовут Карабин Дуглас, схватил девушку и увёз за какими-то камнями к какой-то синей бабе. Честно сказать… я в ахуе.'
    }
  }
});

new game.DailyQuest({
  engName: 'greatWether',
  who: 'tamily',
  name: 'Замечательная погода',
  text: 'Правитель, сегодня такая замечательная погода, я даже не знаю... Мне почему то так весело сегодня. А у вас такая красивая улыбка. Угадайте о чём я думаю, Консул?',
  answers: {
    walk: {
      text: 'Наверное ты хочешь пойти прогуляться. Я мог бы составить тебе компанию.',
      win: 'О! Вы угадали. Это было бы так замечательно. Что же, я пошла собираться, жду вас в парке возле вашей резиденции, Консул.',
      fail: 'Эм...ну вообще то я думала кое о чём другом... но вы правы, не стоит спешить. Я бы с радостью пошла прогулялась с вами, но к сожалению у меня сейчас очень много дел... и... я пожалуй пойду.'
    },
    meaningOfLife: {
      text: '42',
      win: 'Сорок Два? Это же тот самый ответ на главный вопрос жизни, вселенной и всего такого. Отлично сыграно, Консул, а вы молодец.',
      fail: 'Хм. Эта отсылка к той замечательной книге, не так ли? Я поняла шутку, Консул. Только я хотела кое чего другого...в общем ладно..не важно, мне уже пора.'
    },
    bighardlong: {
      text: 'Это что то большое, твёрдое и длинное?',
      win: 'Да! Это именно оно! Плазменный автоматический скорострел 3000, именно о нём я и думала! Обожаю оружие, как раз хотела позвать вас пострелять в такой замечательный день. И как только вы догадались.',
      fail: 'Ааа... Пошлые шутки, а вы у нас явно не робкого десятка, Консул. Поосторожнее, вы же знаете, что я в вас...в смысле мы с вами.... Я... мне неловко, Консул, я пожалуй пойду...'
    }
  }
});

new game.DailyQuest({
  engName: 'mood',
  who: 'tamily',
  name: 'Общее Настроение',
  text: 'Правитель. В связи с затяжной войной с Рептилоидами обычные люди теряют мораль. Иногда развлекательных центров бывает недостаточно. Я даже не знаю… Может, некие обычные радости мирной жизни смогут помочь в данной ситуации?',
  answers: {
    parks: {
      text: 'Построите больше парков и зон отдыха. Людям нужен и спокойный отдых в том числе.',
      win: 'Вы как всегда были правы, Консул, людям не хватало спокойствия. После постройки парков и скверов жители городов стали больше внимания уделять спокойному отдыху, это напомнило им о мирной жизни на Земле, и волнения немного утихли.',
      fail: 'Думаю, в какой то мере это, конечно, помогло, но в общем и в целом ничего не изменилось. Люди по-прежнему на взводе, им страшно и они устали. Тут нужно придумать что-то другое, Консул.'
    },
    show: {
      text: 'Устроим мегаконцерт со всеми звёздами в поддержку Людской расы.',
      win: 'Замечательная идея, мой Император. Шоу выдалось просто отличным, я и сама там была, так бодрит и заряжает. А в конце первые ряды даже смогли закидать тухлой гуаной Джейстэна Вибера. В общем было круто!',
      fail: 'Шоу выдалось отличным, Консул. Но это только разогрело людей и начались волнения в городе. Мы смогли со всем разобраться: кого надо – посадили, а остальные на время забыли о своём недовольстве. Но в любом случае, это ещё не конец.'
    },
    martin: {
      text: 'Нужен отвлекающий манёвр, чтобы все забыли о своих проблемах. Новый сериал с ёблей и кровищей! Звоните Мартину.',
      win: 'Превосходная идея, Правитель. Мартин работает в поте лица, я также взяла на себя смелость и подключила к сценарию Коронелу; не беспокойтесь, его дилер тоже у нас. Всё идёт как по маслу, новые серии выходят каждую неделю, люди сидят как зомби у своих гало-экранов и даже не думают выходить из дома. Всё супер!',
      fail: 'Идея была отличной, Консул. Вот только Мартин устроил там некую заварушку на свадьбе… Я имею в виду, в самом сериале. Я точно не в курсе, но, кажется, именно это привело к новым волнениям в колонии. Эх… ни дня покоя.'
    }
  }
});

new game.DailyQuest({
  engName: 'parti',
  who: 'tamily',
  name: 'Партии',
  text: 'Правитель, недавно на нашей колонии появилась партия активистов, они называют себя Анти-Жидо-Массонские Крушители Рептилоидов. И они довольно радикальны, недавно даже один из их членов предложил исключить из нашей жизни зелёный цвет. Полагаю, вы должны знать о таком, Правитель.',
  answers: {
    support: {
      text: 'Надо поддержать этих ребят, но установить контроль над ними.',
      win: 'Неплохо сработано, Консул. Партия была довольно влиятельна, но с вмешательством наших агентов, мы смогли направить их на верный путь и даже получить некую прибыль.',
      fail: 'Эта партия слишком мощная и радикальная, Консул. При попытке нашего вмешательства они оказали нам вооружённый отпор, пришлось разобраться со всем их офисом парочкой плазмотических гранат.'
    },
    donothing: {
      text: 'Думаю не о чем волноваться, само всё как-нибудь выровняется.',
      win: 'Действительно, чего это я волновалась. Эти ребята сами осознали свои ошибки и немного изменили политику партии, начали помогать людям и стали менее радикальными, даже смогли собрать средства для борьбы с Рептилиями. Вот, консул, смотрите.',
      fail: 'К сожалению, как бы нам не хотелось того же самого, Консул, но проблема сама себя не решила. Это партия стала виновником нескольких локальных восстаний, и нам пришлось выдвигать на улицы армию и успокаивать людей иными методами.'
    },
    killthem: {
      text: 'Нечего всяким ёбнутым жидо массонам или как их там, людьми командовать. Пошлите к ним отряд.',
      win: 'Я тоже так считаю, Правитель. Рептилии конечно те ещё твари, но подобные партии и сообщества это не более чем прикрытие преступных организаций с которыми надо держать ухо в остро.',
      fail: 'Мы сделали всё по вашим указаниям, Консул, но встретили ожесточённый отпор. Активисты этой партии оказались вооружены до зубов, несколько часов целый район города был погружён в локальную войну. Радует хоть то, что мы смогли решить проблему.'
    }
  }
});

new game.DailyQuest({
  engName: 'portals',
  who: 'tamily',
  name: 'Порталы',
  text: 'Как вам известно, Правитель, ваше правление возможно лишь благодаря нашим учёным, которые смогли соорудить ваш Аватар и Портал связи с вашим миром и вашим сознанием. К сожалению, в одной из таких исследовательских лабораторий, что-то пошло не так. Кажется учёные открыли портал в странное измерение откуда тут же полезли странные твари. Мы закрыли комплекс, но понятия не имеет, что делать дальше.',
  answers: {
    freeman: {
      text: 'Отправьте туда Доктора Фримена, это же так очевидно.',
      win: 'О наука! И как же я об этом не подумала. Доктор Фриман без каких бы то ни было лишних проблем разобрался с проблемой. Портал закрыт, существа уничтожены, вот только сам Фриман куда-то пропал...',
      fail: 'Это была отличная идея, Консул, но когда мы привезли Доктора Фримена на место, появился странный человек в синем костюме, сказал: бла бла бла Мистер Фриман. А потом они оба исчезли. Я ничего не поняла, а вы?'
    },
    blowup: {
      text: 'Порталы... торт... хм... Ай не важно, взорвать к чертям это место.',
      win: 'Мы взорвали это место... Что? Да. Вот так, всё просто. Вы сказали, мы сделали. Всё прошло хорошо. Такое тоже иногда случается.',
      fail: 'Ну в общем это... комплекс то мы взорвали, а вот разлом в материи остался, и из него пачками просто лезут эти твари, в общем строим купол над этим местом, попутно отстреливаясь от грёбаных мутантов.'
    },
    close: {
      text: 'Поищите способ закрыть портал дистанционно, а потом зачистите комплекс.',
      win: 'Как ни странно, но нашёлся один учёный, который смог нам помочь в этом. Его последние исследования волн..в общем долгий разговор. Портал закрыли, мутантов уничтожили. Комплекс снова ваш, спасибо за помощь, Консул.',
      fail: 'Мы пытались, честно пытались, но учёные только разводят руками, закрыть портал можно только изнутри. К сожалению туда проникнуть нам не удалось. В итоге комплекс уничтожило ярким светом, мы понятия не имеем откуда это взялось. Белые халаты тут же заговорил что-то о какой то сингулярности, но какой смысл..комплекса то больше нет.'
    }
  }
});

new game.DailyQuest({
  engName: 'food',
  who: 'tamily',
  name: 'Продукты',
  text: 'Правитель, наши патрули перехватили грузовые корабли Рептилоидов с различными продуктами, чем-то похожими на наши сыры. Наши учёные всё проверили. Продукты безопасны и их можно употреблять в пишу и людям, есть идеи, что делать со всем этим?',
  answers: {
    sell: {
      text: 'Продайте всё это в рестораны, как экзотическую трофейную еду.',
      win: 'Прекрасное решение, Правитель, вы как всегда на высоте, я даже не сомневалась, что вы быстро и правильно решите этот вопрос.'
    },
    wearenotstupid: {
      text: 'Только долбоёбы уничтожают еду, так что её следует раздать голодающим.',
      win: 'Прекрасное решение, Правитель, вы как всегда на высоте, я даже не сомневалась, что вы быстро и правильно решите этот вопрос.'
    },
    reccons: {
      text: 'Не будем рисковать, скормите это всё енотам-разведчикам. ',
      win: 'Прекрасное решение, Правитель, вы как всегда на высоте, я даже не сомневалась, что вы быстро и правильно решите этот вопрос.'
    },
  }
});

new game.DailyQuest({
  engName: 'drugs',
  who: 'tamily',
  name: 'Наркотики',
  text: 'Консул, спешу сообщить вам, что в городах появился новый наркотик на основе жидкого кристалла, ходят слухи, что он заставляет видеть обворожительно сексуальных женщин, вытворяющих невероятные вещи. В прочем мы ещё не исследовали до конца его действие, каковы будут ваши указания?',
  answers: {
    fathers: {
      text: 'Протестируйте эту дрянь на Папанях, а там посмотрим.',
      win: 'Замечательное решение, Консул. Оказывается одно из побочных эффектов — неконтролируемая ярость, после осознания, что всё увиденное лишь дурман. Думаю мы сможем использовать этот эффект во время боевых действий.',
      fail: 'Признаться я тоже думала, что это сработает. Однако, что-то пошло не так, наши солдаты мрут как мухи в агонии извращённых оргазмических эмоций. Не думаю, что это вещество нам как-то поможет.'
    },
    raid: {
      text: 'Уничтожить всё и устроить облаву на улицах, ни к чему нам такое.',
      win: 'Прекрасно, Консул. Пожалуй самое рациональное решение - это не связываться с этим. Мы уничтожили все найденные вещества и послали солдат патрулировать улицы, большую часть этой дряни уже изъяли. Хорошая работа, правитель',
      fail: 'Мы сделали всё, как вы и приказали. Однако одурманенные новым наркотиком люди, совершенно не хотели с ним расставаться. На улицах началась настоящая гражданская война. Нам ели удалось побороть сопротивление в неблагополучных районах. Очень печально, правитель, что всё так вышло.'
    },
    everythingismine: {
      text: 'Я не могу рисковать жизнью своих людей, несите всё в мой пентхаус!',
      win: 'Вы такой смелый и порядочный, Правитель. Признаться я в очередной раз удивляюсь, как вам это удаётся. Вашим хорошим качествам нет предела, это очень приятно.',
      fail: 'Что же... я понимаю к чему вы. С одной стороны я согласна с тем, что это очень смелое решение. В тоже время... мне надо отойти ненадолго. Боюсь я не смогу находиться в здании, когда вы... ну... это. До встречи, Консул.'
    },
  }
});

new game.DailyQuest({
  engName: 'lust',
  who: 'tamily',
  name: 'Похоть',
  text: 'Правитель! Это срочно! Я не знаю что со мной, наверное какое-то воздействие псиоников Рептилий... я вся горю, у меня тяжёлое дыхание...мне прямо хочется скинуть с себя всю одежду и...',
  answers: {
    cometome: {
      text: 'Тамили, это очень опасно, нет времени ждать врача, скорее иди ко мне, я тебя осмотрю!',
      fail: 'О да, мой Правитель, осмотри меня прямо... эм... что... что только что было? Эм, как бы там ни было оно прошло. Извините, что побеспокоила, Консул.'
    },
    wwwthatyousay: {
      text: 'Я вот сейчас что-то не очень... повтори-ка ещё раз.',
      win: 'Я говорю возьми ме... эм, а что я тут делаю? А! Точно, совет тут прислал вам немного ресурсов, вот возьмите, Консул. Приятного дня.'
    },
    imnotdoctor: {
      text: 'Я же не доктор, что я могу тут сделать, не отвлекай меня от работы.',
      fail: 'Будь моим доктором, засунь в меня поглу... Эм, а почему вы на меня так смотрите, Консул? И что я тут делаю? кажется мне нужен небольшой отдых, извините, что побеспокоила.'
    },
  }
});

new game.DailyQuest({
  engName: 'whatsup',
  who: 'tamily',
  name: 'Как дела?',
  text: 'Доброго времени суток, Консул. Я это… как дела? У меня тут вроде бы как выдалась свободная минутка и я вот тут подумала… Эм… Чем бы вы хотели заняться?',
  answers: {
    youknow: {
      text: 'Ну, детка… ты же знаешь, чем бы я не прочь заняться.',
      fail: 'Аха-ха! Ты такой забавный, когда говоришь загадками. Ой! В смысле вы, забавный… то есть не забавный конечно, но нет… не так. В общем… ох, пожалуй я просто уйду.'
    },
    imbusy: {
      text: 'Я тут вообще-то в Рептилоидами воюю, если что…',
      win: 'Да! Точно! Прекрасно вас понимаю, Правитель. Кстати говоря… я это… за этим самым и пришла, тут вот прислали поддержку ресурсами от Совета, так что это… ну в общем, вот.'
    },
    imfree: {
      text: 'В общем и в целом я то ничем не занят, а что?',
      fail: 'Да так… ничего. Я просто думала, что вы что-нибудь предложите, ну там я не знаю… но наверное мой перерыв уже скоро закончится, так что… не буду вас задерживать.'
    },
  }
});

new game.DailyQuest({
  engName: 'crazy',
  who: 'tamily',
  name: 'Чокнутый',
  text: 'Консул! Вы уже слышали новость? По городу бегал какой-то странный парень, кричал что лично знаком с Вахаёбовичем и со всей его вселенной. Бросался на людей с ножом и обвинял, что у них не правильная анатомия, грозился вырезать всех неверных и безруких и… в общем наши солдаты его поймали. Сейчас он в психушке, продолжает что-то бубнить про неверное строение и тому подобные глупости, что с ним делать?',
  answers: {
    killhim: {
      text: 'Кажется бедняга совсем тронулся, пристрелите его, чтоб не мучился. ',
      win: 'Я с вами полностью согласна, Консул. Это самое гуманное решение из всех, вы такой мудрый и чуткий правитель. Сейчас же пойду и всё сделаю.'
    },
    firehim: {
      text: 'Боюсь наши врачи не смогут ему помочь, прогрейте им печку.',
      win: 'Я с вами полностью согласна, Консул. Это самое гуманное решение из всех, вы такой мудрый и чуткий правитель. Сейчас же пойду и всё сделаю.'
    },
    fertilizers: {
      text: 'Перемолотите его на удобрения, хоть какая-то будет польза.',
      win: 'Я с вами полностью согласна, Консул. Это самое гуманное решение из всех, вы такой мудрый и чуткий правитель. Сейчас же пойду и всё сделаю.'
    },
  }
});

new game.DailyQuest({
  engName: 'strangereptile',
  who: 'tamily',
  name: 'Странный рептилоид',
  text: 'Правитель, наши еноты разведчики обнаружили на свалке тело настоящего Рептилоида, он был раздет и… ну это, изнасилован. Ну так то я только за… уничтожение поганых рептилий, но что за жестокость… и почему он оказался здесь, на нашей колонии?',
  answers: {
    investigate: {
      text: 'Это дело надо расследовать, поручите это нашим лучшим агентам.',
      win: 'Будет сделано! Я только что разослала ориентировки, попадающих под психологический портрет преступника. Ненавидящих рептилий много, но мало кто мог сделать именно такое. Рано или поздно мы его найдём. Так или иначе, совет оценил нашу активность, нам перечислили субсидии, вуху!'
    },
    itsnotme: {
      text: 'А я думал его там не найду… в смысле, какой ужас… сожгите улик… тело, сожгите тело.',
      fail: 'О наука! Надеюсь вы так шутите, а в прочем.. чёрный юмор даже заводит, Консул… если вы понимаете о чём я… хотя чего это я несу. Сжечь! Поняла! Будет сделано.'
    },
    notmyproblem: {
      text: 'Буду я ещё за всяких рептилий волноваться, не отвлекай по пустякам.',
      fail: 'Я вас прекрасно поняла, Консул. Постараюсь больше вас не отвлекать по таким пустякам, извините.'
    },
  }
});

new game.DailyQuest({
  engName: 'capsule',
  who: 'tamily',
  name: 'Капсула',
  text: 'Консул, произошло странное событие: вчера, когда был метеоритный дождь, одним из небесных тел оказалась капсула. На капсуле есть надпись, она повреждена, но пару символов удалось расшифровать – S#P-17#. Внутри, кажется, что-то живое, и оно пытается вырваться. Мы не знаем, что нам с этим делать и как нам поступить, о великий Консул!',
  answers: {
    fathers: {
      text: 'Постройте вокруг капсулы укреплённый контейнер. Приставьте трёх Папань следить за существом, и пусть моргают по очереди.',
      fail: 'Мы сделали всё как вы приказали, правитель, однако с места падения капсулы уже несколько часов мы не получаем никаких сигналов.',
      win: 'Консул, ваша мудрость безгранична, как вселенная. Вы снова всех спасли: как только мы последовали вашим инструкциям, все попытки воздействия от существа прекратились. Как же хорошо, что вы у нас есть!'
    },
    blowup: {
      text: 'Вы что там, совсем охренели? Взорвите к чертям собачьим эту капсулу!',
      fail: 'К сожалению, взрыв повредил только оболочку капсулы, существу удалось вырваться. Нескольких наших он убил сразу, после чего скрылся в пыли. Поисковые отряды всё ещё сканируют местность, но пока ничего…',
      win: 'Как же я сама не догадалась! Пара литров жидкого кристалла решили проблему моментально, и как всегда, благодаря вашему прекрасному плану.'
    },
    sendback: {
      text: 'Как можно быстрее отправьте её обратно в космос, эта штука слишком опасна.',
      fail: 'Нашим инженерам удалось отправить эту шкатулку пандоры в открытый космос. К несчастью, траектория полёта совпала с траекторией торгового судна. Хоть повреждения и не были критическими, экипаж корабля не отвечает; слышен только скрежет металла.',
      win: 'Нам удалось пристроить пусковые двигатели к капсуле, после чего она была успешно отправлена туда, откуда прибыла. Надеюсь, оно больше к нам никогда не вернётся.'
    },
  }
});

new game.DailyQuest({
  engName: 'winteriscoming',
  who: 'tamily',
  name: 'Зима близко',
  text: 'Правитель, сегодня ко мне приходил один необычный человек, что живёт на стене за старым городом, его зовут Джон Айс. Он утверждает, что зима близко и придут некие странные существа Ходоки, которые жили на этой планете до нас, что ему ответить?',
  answers: {
    givearmy: {
      text: 'Джон Айс из тайного дозора много помогал нам, а Консулы всегда платят свои долги. Дайте ему армию.',
      win: 'Будет исполнено, правитель. Уверена, что ваше решение верное. Кстати, совет осведомлён о вашем взаимодействии с населением, они прислали нам немного ресурсов для развития.'
    },
    youknownothing: {
      text: 'Передайте ему мои слова: Ты ничего не знаешь, Джон Айс.',
      fail: 'Я всё передала, правитель. Он как-то странно на меня посмотрел, развернулся и ушёл. Странный тип.'
    },
    sendhimaway: {
      text: 'Знаю я этого психа, шли его к чёрту, Тамили.',
      fail: 'И как всегда вы были правы, правитель. Этот псих оказался даже не Джоном Айс, это был... настоящий псих, что сбежал из психушки. Бывает же.',
      win: 'Как скажете, правитель. Я послала его куда подальше. Перед уходом он просил ещё раз подумать над его словами и оставил вам эти дары.'
    },
  }
});

new game.DailyQuest({
  engName: 'children',
  who: 'tamily',
  name: 'Дети',
  text: 'Мой император, тут ко мне заявились парочку подростков, утверждающих, что они внебрачные дети старых правителей, а значит имеют право на престол и прекрасно знают, как управлять планетой. Ваши указания?',
  answers: {
    sendhimaway: {
      text: 'Ахахахахахаах… выгоните их к хуям с моей планеты.',
      win: 'К сожалению свободных кораблей не было, поэтому мы на время поместили их в один из грузовых контейнеров, который почему то вместе с мусором отправили на солнце… Было бы печально, если бы не было так смешно.'
    },
    pizdit: {
      text: 'Дети это хорошо, детей надо пиздить.',
      win: 'Я так понимаю, что ногами, верно? По крайней мере наши охранники поняли вас именно так…'
    },
    okletssee: {
      text: 'Ну давай послушаем, что они скажут, зови их сюда, Тамили.',
      fail: 'Когда я подошла к двери, в которую они звонили, чтобы позвать их. Они резко разбежались во все стороны со смехом. Я бы сказала, что дети странные, но мне кажется больше подходит слово — тупые.'
    },
  }
});

};