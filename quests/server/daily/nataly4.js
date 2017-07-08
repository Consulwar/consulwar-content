initQuestDailyContentNataly4 = function() {
'use strict';

new game.DailyQuest({
	engName: 'Virus2',
	who: 'nataly',
	name: 'Вирус',
	text: 'Разведывательная группа с Земли доставила мне старый носитель информации. Из любопытства я подключила его к нашей сети и зря – он оказался заражён древним вирусом, который установил в систему браузер «Амиго», «Яндекс-бар» и ещё кучу непонятных программ. И все подключаемые девайсы тоже вмиг получают копию этого всего. А при попытке удаления эта зараза восстанавливает себя! Что мне делать, Консул?',
	
	answers: { 
		burncomputer: { 
			text: 'Блядь, как это дерьмо сюда пробралось? Сожги свой компьютер нахуй. И носитель тоже не забудь.', 
			win: 'Действительно, когда мы сожгли все комплектующие мощным разрядом тока и поставили новые, проблема решилась. Спасибо, Консул!', 
			fail: 'Консул, я так и поступила. Жаль, конечно, терять своё имущество, да и пожар в Лаборатории вышел знатный, но если другого выхода нет…'
		},
		
		normalbrowser: { 
			text: 'Амиго? Лол. Оставь, нормальный же браузер, чо.',
			win: 'Ну, раз вы так говорите… Кстати, я детально исследовала данные на информационном носителе и нашла там электронную книгу с названием «Советское ракетостроение». Я ничего в ней не поняла, но Калибратор заплатил за неё немного ресурсов.', 
			fail: 'К сожалению, этот нормальный браузер совершенно несовместим с нашими исследовательскими программами. Вся работа Лаборатории встала, Консул.'
		},
		
		searchgroup: { 
			text: 'Отправь поисковую группу туда, где нашли эту дрянь, – может, они найдут способ исправить ситуацию.',
			win: 'Они привезли что-то под названием «Линукс», и даже после стольких лет эта штука работает отлично!',
			fail: 'Консул, разведгруппа вернулась ни с чем, ради нашей безопасности мне пришлось уничтожить всю зараженную технику.'
		},
	}
});

new game.DailyQuest({
	engName: 'Sophistication designs',
	who: 'nataly',
	name: 'Дизайнерские изыски',
	text: 'У нас проблема, Командующий. Для разработки новой линии мебели мы наняли лучшего дизайнера, отправили ему наши пожелания (вы их подписывали, помните?), но по истечении срока он выдал нам какие-то ужасные рисуночки со связанными женщинами в роли мебели! Что нам делать, Консул?',
	
	answers: { 
		technicaltask: { 
			text: 'Упс. А я всё думал, куда делась моя подборка БДСМ порно! Видимо, случайно отправили дизайнеру взамен техзадания.', 
			fail: 'Как это безответственно, Консул. Нам придётся заплатить дизайнеру и замять скандал, который уже подняли феминистки.'
		},
		
		oldbutkinky: { 
			text: 'Это же шибари! Древнее, но очень концептуальное искусство связывания. Требую первую партию новой мебели сразу же поставить в мой тронный зал!',
			win: 'Ну, если вы так на это смотрите… Я действительно далека от различных веяний искусства и целиком полагаюсь на ваш вкус.', 
			fail: 'Но задача-то состояла в функционале новой мебели и использовании её в детских учреждениях! Это ваше шибари неприемлемо.'
		},
		
		dontpay: { 
			text: 'Ну, если результат не соответствует техзаданию – просто не платите ему.',
			win: 'Действительно. Дизайнер, конечно, скандалил, но затем согласился не только выполнить работу согласно техзаданию, но и сделал на свои услуги скидку из-за сорванных сроков.',
			fail: 'Это, конечно, очевидное решение. Вот только сроки сорваны, а мебели нет. Мы терпим убытки.'
		},
	}
});

new game.DailyQuest({
	engName: 'Good job',
	who: 'nataly',
	name: 'Отличная работа',
	text: 'Это возмутительно, Командующий! Наш пресс-центр опубликовал сводку об исследовательских работах вокруг ближайшей звезды, и посмотрите, что сделали из неё местные журналисты: «Планета погрузится в темноту из-за столкновения с параллелизмом, а звезда PPC-47 окутается газами и станет синей на две недели». Мы должны как можно скорее предотвратить панику среди населения, Консул.',
	
	answers: { 
		parallelism: { 
			text: 'Сначала скажи, не ёбнет ли этот твой параллелизм.', 
			win: 'Обязательно ёбнет! Но позже, когда я найду редактора местной газеты.', 
			fail: 'Консул, вы удивляете меня. Как можно вообще физически столкнуться с параллелизмом?'
		},
		
		gascloud: { 
			text: 'Окутается газами? Это как вообще?',
			win: 'Очень хороший вопрос, Консул! Наши астрофизики до сих пор не могут на него ответить.', 
			fail: 'Видимо, у звезды начнётся неконтролируемый метеоризм, Консул. Но вы не волнуйтесь, наши корабли, начинённые сорбентами, уже в пути.'
		},
		
		savetheemperor: { 
			text: 'К черту население, спасаем самое ценное на планете – меня!',			
			fail: 'Планете ничего не угрожает, Командующий. Вы вообще меня слушали?'
		},
	}
});

};