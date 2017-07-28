initQuestDailyContentMechanic1 = function() {
'use strict';

new game.DailyQuest({
  engName: 'Fishing',
  who: 'mechanic',
  name: 'Хищная рыба', 
  text: 'Хэй, Консул. Последние достижения оборонной и наступательной техники и оружия — моя стихия. Но иногда в озере появляется вторая хищная рыба. Ты понимаешь, Консул? Им становится ужасно неудобно сосуществовать. У меня есть координаты второй рыбы — мелкий торговец и шарлатан, ничего серьёзного. Никакого насилия, просто припугнёшь его флотом. Естественно, не за «просто так». Что скажешь?',

  answers: { 
    aucrazy: { 
      text: 'Ты предлагаешь мне отправить флот на озеро и стрелять по рыбам?! ',
      fail: 'Кхм, я понял, Консул. Впредь я буду более прозрачным в своих речах. Удачи.' 
    },
    newsoldiers: { 
      text: 'Отправлю новобранцев, всё равно они бесполезны.',
      win: 'Я рад, что мы оба извлекли выгоду из этой ситуации.',
      fail: 'Новобранцы растерялись и превратили моего конкурента и его корабль в фарш. Это не то, о чём я просил, Консул.' 
    },
    oneship: {
      text: 'Возьми один крейсер.',
      win: 'Я сомневался в твоём плане, но результат меня полностью устроил. Оказалось, что этот торговец — тот ещё трус.',
      fail: 'Торговец не собирается уходить с моего рынка, а, наоборот, увеличивает охрану и товарооборот. Жаль, Консул. Очень жаль.'
    }
  }
});

new game.DailyQuest({
  engName: 'Asteroid',
  who: 'mechanic',
  name: 'Астероид', 
  text: 'Привет, Консул. Мои источники сообщили, что на днях мимо твоей колонии пройдёт астероид. На нём есть небольшие залежи крайне редкого и сверхпрочного минерала — чакнорисцита. Ходят легенды, что он выкристаллизовался из пота великого героя прошлого. Твои инженеры помогут мне с добычей, а я обещаю хорошо заплатить.', 
  answers: { 
    gopstop: { 
      text: 'Забирай вон тех, что сидят на корточках.', 
      win: 'Команда, конечно, поначалу выглядела неубедительно, но оказалось, что дело своё знает. Вот твоя часть, Консул.', 
      fail: 'Увы, Консул, мы три часа пытались растолкать заниженный крейсер, слушали хиты Вити М-158, сквозь тонировку всматривались в тёмные глубины космоса, но в итоге пропустили астероид.' 
    },
    okgo: { 
      text: 'Хорошо, я подготовлю команду инженеров к вылету.',
      win: 'Всё прошло как нельзя лучше, Консул. Приятно иметь деловые отношения с хорошими партнёрами.',
      fail: 'Минерал оказался гораздо твёрже, чем я предполагал, Консул. Нам не удалось достать его из недр астероида.' 
    },
    chuckisback: {
      text: 'По рукам. Это же просто камень, что может случиться?',
      fail: 'Консул, это повреждённое послание — всё, что осталось от твоей команды: «Пшш… Достань меня. Достань меня, крутой парень… Пшш… Покажи, насколько ты крут. И вот это значит добывать? Пшш… Вот что значит добывать! Пшш…». Неловко вышло.'
    }
  }
});

new game.DailyQuest({
  engName: 'Shipping',
  who: 'mechanic',
  name: 'Быстрая доставка', 
  text: 'Как дела, Консул? Я не всегда играю по правилам Совета, поэтому меня недолюбливают патрули и при первой же возможности стараются обыскать моё судно. Другое дело — сам Консул. Они даже не станут досматривать твой корабль. Мне пришла одна очень важная, но не совсем законная посылка. Твоя задача – доставить её до места назначения. По рукам?', 
  answers: { 
    goodguy: { 
      text: 'Я не собираюсь перевозить на своём корабле краденые железки.', 
      fail: 'Хм, ну что же, это твоё право, Консул. Поищу кого-нибудь другого.' 
    },
    ultradestroyer: { 
      text: 'Привезти какую-то коробку не составит труда.',
      win: 'Всё прошло просто превосходно. Посылка у меня, вознаграждение — у тебя. Всё честно.',
      fail: 'Ну что же, у меня теперь есть около ста новеньких вибраторов серии «UltraDestroyer». В следующий раз, Консул, стоит проверить содержимое коробки.' 
    },
    imnotapostman: {
      text: 'Я же не почтальон! Этим займётся кто-нибудь из моей команды.',
      win: 'Нам повезло, Консул: патруль уже направлялся к транспортному кораблю, как вдруг какой-то недоумок открыл пальбу по пролетающим мимо судам и отвлёк внимание на себя. Это было очень рискованно.',
      fail: 'Как я и думал, первый же патруль обнаружил на борту нашего транспортного корабля мою посылку. Кажется, тебе придётся объясниться перед Советом.'
    }
  }
});

new game.DailyQuest({
  engName: 'Tonnel',
  who: 'mechanic',
  name: 'Подводный тоннель', 
  text: 'Консул, я слышал, ты собираешься связать несколько жилых зон с помощью транспортного тоннеля, проходящего под заливом. У меня как раз есть особое напыление для наконечника буровой машины. Тебе это поможет сохранить уйму времени и сэкономить на расходных материалах, а я получу возможность провести натурные испытания. Что скажешь?', 
  answers: { 
    letsdoit: { 
      text: 'Давай сюда свой волшебный порошок.', 
      win: 'Кажется, всё прошло гладко. Датчики не пострадали, информация у меня. Да и тебе пару буровых насадок сэкономили.', 
      fail: 'Что-то пошло не так, Консул. Такое ощущение, что до бура дошло гораздо меньше порошка, чем я давал. В итоге он перегрелся, и машина вышла из строя.' 
    },
    streetmagic: { 
      text: 'Не-не-не, Механик. Жизнь меня научила холить и лелеять свой бур.',
      fail: 'Твое дело, Консул. Жаль, мы оба могли бы получить выгоду.' 
    },
    test: {
      text: 'Давай сначала протестируем твой порошок на чём-нибудь другом.',
      win: 'Не хочется признаваться в этом, но ты оказался прав. Едва буровая машина начала работать, что-то пошло не так. Наконечник сильно раскалился и отлетел ко всем чертям, попутно наматывая на себя окружающую растительность и зевак. Думаю, эта сумма сможет уладить проблему.'
    }
  }
});

new game.DailyQuest({
  engName: 'PulpFiction',
  who: 'mechanic',
  name: 'Чёрный чемодан', 
  text: 'Консул, недалеко от твоей колонии скрываются ребята, задолжавшие мне пару сотен кредитов. За их плечами большой список махинаций, и Совет давно охотится на них. Совет готов заплатить за их арест, к тому же ты заработаешь себе репутацию хорошего парня. Я дам тебе координаты в обмен на услугу — забери у них чёрный чемодан.', 
  answers: { 
    vincentandjules: {
      text: 'У меня есть два специалиста. Только не говори «что» при них.', 
      win: 'У них нетрадиционные методы вести переговоры, но я доволен — чемодан со мной. Кстати, кто такой Марселлас Уоллес?', 
      fail: 'Консул, они забыли про чемодан, перестреляли всех подозреваемых, кроме одного, а по дороге обратно случайно всадили и ему пулю в голову. Совет вряд ли обрадуется подобному исходу. ' 
    },
    takemyship: { 
      text: 'Можешь взять один из кораблей и сам всё сделать.',
      win: 'Наглость — второе счастье, Консул. Но в этом случае я даже доволен таким решением. Сделаю всё тихо и без лишних глаз.',
      fail: 'Консул, ты думаешь, у торговца лучшими технологиями и вооружением в галактике нет боевого корабля? Если бы я хотел заниматься этим сам, я бы не обратился к тебе.' 
    },
    denied: {
      text: 'Лезть в логово к каким-то головорезам? Ну уж нет.',
      fail: 'Хорошо, Консул. Я найду кого-нибудь другого для этого дела. Кстати, ты знаешь, как во Франции называют четвертьфунтовый с сыром? '
    }
  }
});

new game.DailyQuest({
  engName: 'SOS',
  who: 'mechanic',
  name: 'Сигнал бедствия', 
  text: 'Привет, Консул. На моем дешифраторе сигналов появилось странное сообщение, похожее на сигнал бедствия. Проблема в том, что оно исходит из туманности, где были замечены корабли рептилоидов. Я готов заплатить за военный эскорт до места события и обратно. Кто знает, что мы можем там найти.', 
  answers: { 
    idontwanna: { 
      text: 'Я не хочу отправлять свои корабли в неизвестность.', 
      win: 'Что же, Консул, я расшифровал сигнал до конца, и он оказался ловушкой. Я превратился бы в космическую пыль, если бы выдвинулся туда. Возьми эти ресурсы в качестве благодарности.', 
      fail: 'Пока я искал новое сопровождение, кто-то опередил меня. Ходят слухи, что он сорвал очень хороший куш.' 
    },
    soundsgood: { 
      text: 'Вперёд! Искать в космосе приключения на свою задницу!',
      win: 'Затея действительно была рискованная, но, на мой вкус, окупилась с лихвой. Вот твоя часть, Консул.',
      fail: 'Жаль, что всей нашей добычей стал аварийный передатчик. Не расстраивайся, Консул, в следующий раз повезёт.' 
    },
    gogopowerconsuls: {
      text: 'Вылетаем, поджарим пару чешуйчатых задниц.',
      win: 'Ух, ну и заварушка! Я до сих пор не понимаю, каким образом на твоих кораблях нет ни единой царапины. Особая космическая магия. Хорошо, что судно оказалось под завязку забито ресурсами. Вот твоя часть.',
      fail: 'Я абсолютно не ожидал такого количества рептилий. Хорошо, что нам удалось сохранить флот и уйти от погони.'
    }
  }
});

new game.DailyQuest({
  engName: 'RaceDay',
  who: 'mechanic',
  name: 'Подпольные гонки', 
  text: 'Хей, Правитель. Ты любишь быстрые космолеты, красивых девушек, адреналин и лёгкие деньги? Я работаю с разными людьми в галактике. Один из них сказал, что сегодня будут большие подпольные гонки. Я подумал, что тебе может быть это интересно. Ты можешь присоединиться к зрителям, отправить кого-либо из своих пилотов, а можешь сам сесть за штурвал, если, конечно, ты не боишься.', 
  answers: { 
    shamaich: { 
      text: 'Ха, Шамаич задушит!', 
      win: 'Должен признаться, Консул, твой пилот оказался действительно достойным соперником. Вот награда.', 
      fail: 'Я слышал, что твой пилот так и не добрался до места старта, по пути разбив чей-то космолёт. Ничего, Консул, всякое случается.' 
    },
    freemoneyandgirls: { 
      text: 'А можно девушек и лёгкие деньги получить без гонки?',
      win: 'Хороший вышел заезд, Консул. Ажиотаж вокруг твоей персоны среди зрителей подстегнул ставки, так что вот твоя часть выручки.',
      fail: 'Лежачий камень, Консул, в лес не убежит. Или как-то так.' 
    },
    raceismysecondname: {
      text: 'В детстве я упал в котёл с гонками.',
      win: 'Ну что же, Консул, ты действительно неплохо водишь. До лидеров заезда, конечно, далеко, но призовые деньги ты всё же захватил. Вот они, кстати.',
      fail: 'А, Консул. Я рад, что ты наконец-то добрался домой. Трое суток на преодоление трассы — внушительное достижение.'
    }
  }
});

new game.DailyQuest({
  engName: 'OldFriend',
  who: 'mechanic',
  name: 'Старый знакомый', 
  text: 'Привет, Консул. Ко мне обратился мой старый знакомый. Он занимал один из постов в экономическом блоке Совета и работал, как оказалось, не всегда честно. Теперь Совет желает «просто поговорить» с ним. Совет начал прочёсывать колонии, и твоя — последняя в списке. Если ты предоставишь ему убежище на несколько дней, то получишь неплохое вознаграждение.', 
  answers: { 
    cleft: { 
      text: 'Идёт, вот координаты расселины на юге колонии.', 
      win: 'Он просил передать слова благодарности и вот эту посылку. Вряд ли мы услышим о нём вновь.', 
      fail: 'Когда он приземлился в указанном месте, дикие животные напали на него и разорвали бедолагу в клочья. К сожалению, трупы не выписывают чеки, Консул.' 
    },
    iamtheking: { 
      text: 'Не царское это дело – преступников прятать.',
      fail: 'Это твоё решение, Консул. Я найду заинтересованного в доходе человека.' 
    },
    godfather: {
      text: 'Ты прилетаешь и просишь что-то у меня, но просишь без уважения, не предлагаешь мне дружбу, даже не называешь меня «Консул»',
      fail: 'В следующий раз можешь просто отказаться, чтобы я не терял время на выслушивание твоих речей. Время — деньги, Консул.'
    }
  }
});

new game.DailyQuest({
  engName: 'NewResearch',
  who: 'mechanic',
  name: 'Независимое исследование', 
  text: 'Хей, Консул. У меня есть деловое предложение. Знакомая мне группа инженеров разрабатывает новую технологию для гипердвигателей. Обещают многократное повышение надёжности и КПД. Загвоздка в том, что они – независимые разработчики, и сейчас им необходимы технологические помещения для выполнения предварительных тестов. Если всё пройдет успешно, то с продажи прототипа мы сможем заработать.', 
  answers: { 
    barn: { 
      text: 'Гони их вон в тот амбар.', 
      win: 'Всё прошло как нельзя лучше. Экспериментальные данные оказались настолько обнадёживающими, что нашёлся инвестор. Вот твоя часть с продажи, Консул.', 
      fail: 'В таких условиях я не оставил бы даже рептилоидов. Технологическое помещение должно содержать хотя бы пол, крышу и четыре стены, Консул.' 
    },
    laboratory: { 
      text: 'В лаборатории есть пара свободных комнат.',
      win: 'Отлично, Консул. Исследования завершены, инвестор найден. Держи арендную плату.',
      fail: 'Твои лаборанты не очень-то дружелюбные ребята, да, Консул? К сожалению, закончить исследование не получилось, а нет товара — нет денег.' 
    },
    sorrynope: {
      text: 'Выглядят они не очень убедительно.',
      win: 'Буквально вчера узнал, что они нашли всё-таки место для исследований. Правда, не надолго: через полчаса после начала прогремел взрыв.',
      fail: 'Вчера видел статью о сделке этих ребят с одним из крупнейших производителей двигателей. Мы упустили большую рыбу, Консул.'
    }
  }
});

new game.DailyQuest({
  engName: 'ScoutShip',
  who: 'mechanic',
  name: 'Разведывательный корабль', 
  text: 'Консул, недалеко от твоей колонии был замечен новый разведывательный корабль рептилоидов. Судя по моей информации, он совсем один. На этом судне установлены передовые образцы радиозащиты, и я не могу упустить шанс заполучить их. Ресурсы меня не интересуют, так что я готов отдать всё содержимое корабля в качестве платы за боевую поддержку.', 
  answers: { 
    newepisode: { 
      text: 'Ты с ума сошёл? Сегодня же новая серия выходит.', 
      win: 'Этот корабль оказался ловушкой, и команду с другой колонии превратил в фарш боевой флот рептилий. Твоя лень сохранила мою задницу целой и невредимой. Возьми эту сумму в качестве благодарности.', 
      fail: 'Корабль скрылся, а вместе с ним и моя возможность получить свежие образцы оборонительной техники.' 
    },
    killsomereptiles: { 
      text: 'Где мой «Убиватель Рептилоидов – 9000»?',
      win: 'Как я и предполагал, этот корабль стал лёгкой добычей. Надеюсь, ты доволен содержимым трюмов?',
      fail: 'Корабль-то мы захватили, но оба остались ни с чем: в трюмах пусто, а система самоликвидации повредила все микросхемы. Теперь это просто груда металла.' 
    },
    quiet: {
      text: 'Я отправлю туда элитный отряд енотов-разведчиков.',
      win: 'Это было действительно впечатляюще. Маленькие пушистые засранцы знают свое дело. На моей памяти так ловко и тихо ещё никто не работал.',
      fail: 'Опрометчивое решение, Консул. Я же сказал, что это новейший корабль рептилоидов с передовыми экспериментальными системами защиты и обнаружения. Твои еноты даже не заметили, как превратились в пыль вместе с кораблём.'
    }
  }
});

};