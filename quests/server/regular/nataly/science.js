initQuestRegularContentScienceResearch = function() {
'use strict';

new game.QuestLine({
  who: 'nataly',
  engName: 'science_research',
  canStart: function () {
    return (
         Game.Quest.checkFinished('tutorial') 
      && Game.Building.has('military', 'laboratory', 15)
    );
  },
  finishText: 'Научный Отдел достиг своего максимума, и Лаборатории больше нечего исследовать в этой области науки. Мои поздравления, Консул.'
}, [
  new game.Quest({
    engName: 'science_10',
    text: '<p>В этом отделе Лаборатории, Консул, собраны наши лучшие специалисты-генетики. Эти простые парни, которые придурковато хихикают, глядя на Ренексис в новостях, на самом деле – наше секретное оружие в борьбе с Рептилоидами.</p><p>Они не только читают информацию, собранную в молекуле ДНК, – они виртуозно жонглируют разными наборами генов, получая в пробирке улучшенные виды растений, животных… и даже людей. Некоторые солдаты вашей пехоты – результаты не слишком удачных экспериментов этого отдела.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 10-го уровня.',
    reward: {
      metals: 2000,
      crystals: 2000
    },
    options: {
      accept: {
        text: 'Да? А некоторые командующие моей пехотой?',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 10);
    }
  }), new game.Quest({
    engName: 'science_15',
    text: '<p>А это – наша «оранжерея», Консул. Здесь генетики выводят новые виды модифицированных растений. В основном мы выращиваем здесь водоросли, которые почти ничем не отличаются от обычных: они так же потребляют воду, свет и питательные вещества, производят кислород и органику.</p><p>И ещё кое-что – маленькую химическую присадку, побочный продукт. Это могут быть гормоны, ферменты, даже готовые вакцины. С развитием этой отрасли у нас могут появиться самые передовые медицинские технологии.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 15-го уровня.',
    reward: {
      metals: 2500,
      crystals: 2500
    },
    options: {
      accept: {
        text: 'А можно мне такую штуку? С эндорфинчиками.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 15);
    }
  }), new game.Quest({
    engName: 'science_20',
    text: '<p>У меня тут очень интересный документ, Консул. Видите ли, биология – довольно точная наука, и в то же время – ужасно рутинная. Сотни экспериментов, требующих несколько тысяч образцов, пробирки, посевы микроорганизмов, учёт, контроль и так далее, и тому подобное.</p><p>Тут сама собой напрашивается мысль об огромной роботизированной лаборатории, не так ли? Роботы, конечно, не могут полностью заменить людей, но они, по крайней мере, никогда не ошибаются и не пьют чай в перерыве.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 20-го уровня.',
    reward: {
      metals: 3000,
      crystals: 3000
    },
    options: {
      accept: {
        text: 'Хм… Роботы пьют чай и стреляют из двустволок. А хорошая игра могла бы получиться!',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 20);
    }
  }), new game.Quest({
    engName: 'science_25',
    text: '<p>А вы знали, что паучий шёлк очень ценится учёными за свою прочность и лёгкость? К сожалению, у нас нет возможности производить этот материал в промышленных количествах – пауки частенько убивают конкурентов на своей территории, так что построить «паучью ферму» просто не получится.</p><p>Зато у нас есть достижения генной инженерии и… козы. Мы можем встроить ген паука в геном козы так, что она будет давать молоко с паутиной пополам. Звучит жутко, но очень перспективно.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 25-го уровня.',
    reward: {
      metals: 3500,
      crystals: 3500
    },
    options: {
      accept: {
        text: 'Я слышал про человека-паука, но коза-паук?!',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 25);
    }
  }), new game.Quest({
    engName: 'science_30',
    text: '<p>Как ни странно, Центр Развлечений тоже старается быть в курсе новых технологий, Консул, в том числе и генных модификаций. От них пришёл заказ на светящихся рыбок для создания новых интерьеров в кабаре и ресторанах.</p><p>Сделать это будет не сложно: достаточно выделить гены, кодирующие флуорисцентные белки у медуз или кораллов, а потом "пересадить" их рыбам. Главное, чтобы персонал не перепутал, что готовить, а что – кормить.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 30-го уровня.',
    reward: {
      metals: 4000,
      crystals: 4000
    },
    options: {
      accept: {
        text: 'Круто! А можно сделать таких светящихся танцовщиц? Я не буду их есть, если что.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 30);
    }
  }), new game.Quest({
    engName: 'science_35',
    text: '<p>Иногда даже бесполезное на первый взгляд хобби может послужить делу прогресса, Консул. Вот, например, у нас один из генетиков увлёкся складыванием фигурок из цепочек ДНК.</p><p>Он не преследовал никакой практической цели, и тем не менее, его наработки были использованы учёными, которые уже несколько месяцев ломали голову над очень маленьким, но ёмким контейнером для хранения и доставки лекарственных веществ прямо в клетку. Теперь у них есть прототип, осталось только профинансировать проект.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 35-го уровня.',
    reward: {
      metals: 4500,
      crystals: 4500
    },
    options: {
      accept: {
        text: 'А знаешь, Натали, я тоже собираю всякое на досуге. Может, вам пригодится?',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 35);
    }
  }), new game.Quest({
    engName: 'science_40',
    text: '<p>Наши учёные решили использовать последовательности нуклеотидов – строительных кирпичиков ДНК – для шифровки важных сообщений.</p><p>Для этого выстраивается длинная цепочка, где каждые три нуклеотида обозначают какую-либо цифру или букву, затем её перемешивают с обычной человеческой ДНК, раствор наносят на бумажный документ и отправляют в соседний отдел на расшифровку. Результаты весьма обнадёживают, Консул, эффективность этого метода шифровки приближается к ста процентам.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 40-го уровня.',
    reward: {
      metals: 5000,
      crystals: 5000
    },
    options: {
      accept: {
        text: 'Попробуйте полевые испытания, вас ждёт сюрприз.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 40);
    }
  }), new game.Quest({
    engName: 'science_45',
    text: '<p>Вы были совершенно правы, Консул, когда посоветовали нам провести полевые испытания метода ДНК-шифрования! Я понятия не имею, как именно доставляются материальные носители из штаба на места, но определённо могу сказать, что по дороге они подвергаются чудовищному загрязнению.</p><p>Мы нашли на документе, полученным по обычным армейским каналам, около пятидесяти различных следов ДНК! И я не уверена, что все они получены из отпечатков пальцев. Очевидно, что технологию необходимо ещё дорабатывать.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 45-го уровня.',
    reward: {
      metals: 5500,
      crystals: 5500
    },
    options: {
      accept: {
        text: 'Армия и бумажные документы, Натали. Это было неизбежно.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 45);
    }
  }), new game.Quest({
    engName: 'science_50',
    text: '<p>Кстати, о бумаге, Консул: общеизвестно, что для производства бумаги и мебели требуется разная древесина. Прочная мебель должна содержать повышенное количество лигнинов – структурообразующих полимеров, – а для производства бумаги нужна целлюлоза.</p><p>Задача эта решается с помощью генной инженерии: выработка лигнинов подавляется в растениях, которые используются для производства бумаги, а на мебель идут деревья с очень прочной древесиной. И ускоренным ростом, куда без него.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 50-го уровня.',
    reward: {
      metals: 6000,
      crystals: 6000
    },
    options: {
      accept: {
        text: 'Ты мне сейчас про Мебель из Икеа затираешь?',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 50);
    }
  }), new game.Quest({
    engName: 'science_55',
    text: '<p>Вы никогда не задумывались, Консул, откуда в вашей пехоте столько добровольцев? Разумеется, имеет место патриотический подъём, а также рекрутинг, социальная реклама и промывка мозгов.</p><p>И одновременно с этим ваша Лаборатория исправляет геном каждого нового Папани и Турникмэна, удаляя из него участки, которые могут спровоцировать наследственное заболевание или просто лимитируют некоторые физические способности. Таким образом, вы получаете совершенно здоровую пехоту, а мы – материалы для будущих исследований.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 55-го уровня.',
    reward: {
      metals: 6500,
      crystals: 6500
    },
    options: {
      accept: {
        text: 'Эй, а как же бескорыстное служение Императору?',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 55);
    }
  }), new game.Quest({
    engName: 'science_60',
    text: '<p>Генетические эксперименты с растениями – занятие небыстрое, Консул. Нужно разобрать образец на отдельные клетки и попытаться встроить в них нужную ДНК.  Поэтому наши инженеры изобрели так называемую «генную пушку».</p><p>Это действительно что-то вроде ружья, стреляющего микрочастичками золота, на которые нанесена нужная ДНК. Как ни странно, но такая примитивная технология работает гораздо лучше, чем возня с отдельными клетками под микроскопом. Хотя, конечно, эту пушку нужно ещё доработать.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 60-го уровня.',
    reward: {
      metals: 7000,
      crystals: 7000
    },
    options: {
      accept: {
        text: 'Золото я конфискую для отделки флагмана, а так – дорабатывайте.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 60);
    }
  }), new game.Quest({
    engName: 'science_65',
    text: '<p>Генная пушка работает прекрасно, Консул, мы уже добавили полезные свойства огромному количеству растений. Но иногда бывают ситуации, когда пушку применить нельзя, – например, не будем же мы стрелять в животное, которому нужно подправить некоторые геномные последовательности.</p><p>И наша лаборатория нашла ответ: мы уже занимаемся работой над вирусами, из генома которых удалено всё лишнее, и вставлена только та информация, которая нужна для изменения участка ДНК. Очень многообещающий метод.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 65-го уровня.',
    reward: {
      metals: 7500,
      crystals: 7500
    },
    options: {
      accept: {
        text: 'Натали, ты ж прямо из лаборатории? Масочку надень.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 65);
    }
  }), new game.Quest({
    engName: 'science_70',
    text: '<p>У нас в Лаборатории завёлся шутник – сегодня генетики обнаружили в своем отделе клетку с самцами крыс, которым были внедрены гены светочувствительных белков, причем исключительно в область половых органов. Эти белки реагируют на свет определённой длины волны, исходящий извне.</p><p>Поэтому, когда на крыс посветили синим светом… В общем, теперь внутренняя служба охраны ищет этого шутника, чтобы узнать, где находятся образцы белка. Так, на всякий случай.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 70-го уровня.',
    reward: {
      metals: 8000,
      crystals: 8000
    },
    options: {
      accept: {
        text: 'То есть, если носить с собой синий фонарик…',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 70);
    }
  }), new game.Quest({
    engName: 'science_75',
    text: '<p>Хотя у нас есть технологии, позволяющие корректировать геном любого человека, этот метод применяется далеко не всегда. Например, гораздо выгоднее вырастить специалиста, чем долго и нудно искать его среди сотен претендентов. И когда я говорю «вырастить» буквально я имею это в виду.</p><p>Лаборатория каждый год отбирает наиболее многообещающий биоматериал и на его основе конструирует геном будущего исследователя. Затем нам остаётся только сдать эмбрион в инкубатор и немного подождать.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 75-го уровня.',
    reward: {
      metals: 8500,
      crystals: 8500
    },
    options: {
      accept: {
        text: 'Немного, ага.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 75);
    }
  }), new game.Quest({
    engName: 'science_80',
    text: '<p>Наши генетики снова получили заказ из Центра Развлечений: те прознали про теоретическую реконструкцию организма из нескольких сохранившихся клеток, и теперь хотят добавить в свои парки развлечений доисторических животных – с Земли и с других планет, остатки которых обнаружили многочисленные космические экспедиции.</p><p>С одной стороны, это наименее эффективное использование генной инженерии, с другой стороны, это даст Лаборатории возможность поработать с новым биологическим материалом.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 80-го уровня.',
    reward: {
      metals: 9000,
      crystals: 9000
    },
    options: {
      accept: {
        text: 'Я – за, давно хотел прогуляться по парку Юрского периода!',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 80);
    }
  }), new game.Quest({
    engName: 'science_85',
    text: '<p>У наших медиков есть много способов вылечить болезнь или улучшить работу какого-либо органа. Но иногда перед тем, как внедрять технологию в организм пациента, лучше отработать её на стенде.</p><p>И такая возможность у нас скоро появится, потому что наши генетики сконструировали так называемые «органы на чипе» – крошечные резервуары с клетками пациента, в которых под давлением циркулируют биологические жидкости. На этих миниатюрных системах можно ставить любые опыты без риска для жизни, Консул…</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 85-го уровня.',
    reward: {
      metals: 9500,
      crystals: 9500
    },
    options: {
      accept: {
        text: '…но система ещё не доработана и требует вложений? Ладно уж.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 85);
    }
  }), new game.Quest({
    engName: 'science_90',
    text: '<p>Отличные новости из генетической лаборатории, Консул! «Органы на чипе» так хорошо показали себя, что учёные решили смоделировать человеческий организм полностью: слаженную работу всех органов, мозга, сердца, даже кожи.</p><p>Представьте, какие горизонты это открывает перед медициной – мы сможем ставить огромное количество экспериментов, тестировать лекарства, пищевые добавки, аллергены. Яды, наконец. Ну а что? Создадим зелёный «орган рептилоида на чипе» и будем его травить до победного.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 90-го уровня.',
    reward: {
      metals: 10000,
      crystals: 10000
    },
    options: {
      accept: {
        text: 'Ох, Натали, твою бы энергию да в мирное русло. Хотя…',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 90);
    }
  }), new game.Quest({
    engName: 'science_95',
    text: '<p>И снова Научный Отдел бросает вызов природе, Консул. На этот раз речь идёт о регенерации. Как вы наверняка знаете, есть некоторые типы животных, которые могут отрастить заново потерянную часть тела вроде хвоста или конечности.</p><p>Наша лаборатория занимается изучением этих процессов и, возможно, в ближайшем будущем у нас появится технология, которая позволит выращивать органы и части тела. Хотя что-то мне подсказывает, что Третий от своей железной руки все равно не откажется.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 95-го уровня.',
    reward: {
      metals: 10500,
      crystals: 10500
    },
    options: {
      accept: {
        text: 'Да, я бы тоже не отказался. Но руку отпиливать мне не надо, Натали.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 95);
    }
  }), new game.Quest({
    engName: 'science_100',
    text: '<p>У исследований регенерации, которая проводил Научный Отдел, оказался любопытный побочный эффект – мы обнаружили, что некоторые организмы, которые мы изучаем, в меньшей степени подвержены старению и болезням, чем другие.</p><p>Пока достаточно сложно сказать, во что выльются эти исследования, но мысль о том, чтобы жить в несколько раз дольше, мне лично кажется довольно привлекательной. Тем более, что накопленный опыт и знания человека становятся тем ценнее, чем дольше он может их передавать другим.</p>',
    conditionText: 'Исследовать: ' + Game.Research.items.evolution.science.name + ' 100-го уровня.',
    reward: {
      metals: 11000,
      crystals: 11000
    },
    options: {
      accept: {
        text: 'Да, Натали, я тоже согласен на бессмертие ради науки.',
        mood: 'positive'
      }
    },
    isDone: function() {
      return Game.Research.has('evolution', 'science', 100);
    }
  })
]);

};