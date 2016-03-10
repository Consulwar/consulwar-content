initBuildingContentResidential = function () {

game.setToMenu = 'planet';
game.setToSide = 'residential';

new game.Building({
	name: 'Жилой комплекс',
	engName: 'house',
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return 10 + level * 10;
		}
	}),
	description: 'Жилые комплексы — это дешёвые портативные системы для жизни. Изобретённые ещё в 90-е годы по системе Лайфтэк в рамках проекта «Венера», жилые комплексы стали основной системой строительства на дальних колониях. Налаженное производство позволяет с минимальными затратами и в кратчайшие сроки изготовить и установить десятки тысяч подобных комплексов. В сочетании друг с другом подобные комплексы могут превращаться в целый город буквально за недели. Вашей империи ведь нужны подданные, не так ли, правитель?',
	basePrice: {
		metals: 30,
		crystals: 7
	},
	maxLevel: 30
});

new game.Building({
	name: 'Мегаполис',
	engName: 'megalopolis',
	description: 'Жилой комплекс, конечно, крайне полезная система, но эй… Планета не резиновая! Когда нужно делать ставки по крупному: производить серьёзное вооружение, обеспечивать своей колонии мощнейший флот и помогать людям из Вселенной 42 отбить свою родную планету у поганых Рептилий, самый важный ресурс — это, несомненно, люди. Люди любят жить в больших городах, и Мегаполис — именно то, что нужно. Мегаполис сообщает всем о вашем статусе. Он говорит, что вы развиваетесь, что ваша колония — это мощный и богатый плацдарм. Стройте мегаполисы, Консул, и люди к вам потянутся…',
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 30;
		}
	}),
	basePrice: {
		metals: 750,
		crystals: 390
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.residential.house, 10],

			[Game.Research.items.evolution.alloy, 3],
			[Game.Research.items.evolution.ikea, 3]
		]
	}
});

new game.Building({
	name: 'Шахта металла', 
	engName: 'metal',
	description: 'Металл — один из основных ресурсов. Он необходим абсолютно для всего. Для строительства зданий, армий, флота, исследований и так далее. Современные шахты металла способны добывать и обрабатывать его в огромных количествах. И хоть люди больше не спускаются в шахты, данное здание нуждается в постоянном управлении и технических настройках, поэтому требует постоянный приток новых кадров. Процесс добычи металла крайне трудоёмкий, однако ничего не сравнится с блеском новенького космического корабля или хорошо бронированного танка.',
	effect: new Game.Effect.Income({
		pretext: 'Добыча металла: ',
		aftertext: ' килограмм в час',
		priority: 1,
		affect: 'metals',
		result: function(level) {
			level = level || this.level; 
			return Math.floor(120 + (30 / 2.5) * Math.pow(game.PRODUCTION_FACTOR, level));
		}
	}),
	basePrice: {
		metals: 100,
		crystals: 10
	},
	maxLevel: 30
});

new game.Building({
	name: 'Шахта кристалла',
	engName: 'crystal',
	effect: new Game.Effect.Income({
		pretext: 'Добыча кристалла: ',
		aftertext: ' грамм в час',
		priority: 1,
		affect: 'crystals',
		result: function(level) {
			level = level || this.level; 
			return Math.floor(60 + (10 / 2) * Math.pow(game.PRODUCTION_FACTOR, level));
		}
	}),
	description: 'Данный вид кристалла крайне заинтересовал учёных в 70-е годы прошлого века. Этот ресурс никогда не встречался на нашей родной планете — Земле, однако его находили абсолютно на всех колониях, куда отправляли экспедиции. Подобные ресурсы попадают на планеты из космоса и крайне странно, что на Земле данный ресурс отсутствовал вовсе. Но гораздо более интересно другое: оказалось, что в жидком состоянии кристалл — абсолютно уникальное явление, он может быть биостимулятором, энергетическим ресурсом, основным элементом вооружения и даже усиливает потенцию! В общем, если вы ходите обеспечить весёлый вечер себе или рептилоиду, постройка данной шахты просто необходима для вашей колонии, Консул.',
	basePrice: {
		metals: 140,
		crystals: 75
	},
	maxLevel: 30
});

new game.Building({
	name: 'Центры развлечений',
	engName: 'entertainment',
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 40;
		}
	}),
	description: 'Земля захвачена, правительство уничтожено, погибли миллиарды людей, оставшиеся колонии постоянно подвергаются нападению со стороны Рептилоидов, еноты-разведчики приносят дурные вести о растущих армиях рептилий, новая власть в виде Консулов требует полного подчинения… При таких обстоятельствах немудрено и ебануться. Но ситуацию легко исправят Блэкджек и шлюхи! Центры развлечений могут принести много удовольствия не только вашим подданным, но и вам, Консул.',
	basePrice: {
		metals: 300,
		crystals: 400
	},
	maxLevel: 30,
	requirements: function() {
		return [
			[Game.Building.items.residential.house, 15],
			[Game.Building.items.residential.megalopolis, 5]
		]
	}
});

new game.Building({
	name: 'Центр связи',
	engName: 'alliance',
	effect: new Game.Effect.Special({
		name: 'Альянс',
		result: function(level) {
			level = (level == undefined ? this.level : level);

			if (level == 1) {
				return ' можно вступать';
			} else if (level == 2) {
				return ' можно создать';
			}
			return ' не доступен';
		}
	}),
	description: '«Пшш-пшш. Алло, ёба. Это ты?» Система связи — уникальный комплекс. Он позволит вам крайне эффективно координировать действия с вашими союзниками по борьбе с рептилоидными захватчиками. Вступить в альянс или даже создать свой с Блэкджеком и… Консулами. Помните, правитель, люди рассчитывают на вас и ваш аватар здесь именно затем, чтобы помочь им. Сила Консулов действительно велика, однако лишь объединение усилий сделает их власть непоколебимой!',
	basePrice: {
		honor: 100000,
		metals: 10000,
		crystals: 10000
	},
	maxLevel: 2,
	requirements: function() {
		return [
			[Game.Building.items.residential.megalopolis, 1],

			[Game.Research.items.evolution.alloy, 7]
		]
	}
});

new game.Building({
	name: 'Колизей',
	engName: 'colosseum',
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 2000;
		}
	}),
	description: 'Хлеба и зрелищ. Не так ли? А что если бы можно было вернуть времена древнего Рима и устраивать настоящие кровавые битвы? Кровь, кишки… Мясо! Ах ну да… Тут же война с рептилоидами на дворе, да ещё и эти морально-культурные ценности… О! А что если устраивать битвы не между людьми, а между пленными Рептилиями?! Какая замечательная идея, Консул. Вы уже слышите как ликуют трибуны, наблюдая за тем, как чешуйчатые кромсают друг друга ради свободы… Которую они, кстати, не получат. Подобные развлечения могут привлечь в вашу колонию больше людей. Что скажете, Великий Консул?',
	basePrice: {
		metals: 2000000,
		crystals: 1500000
	},
	maxLevel: 1,
	requirements: function() {
		return [
			[Game.Building.items.residential.house, 20],
			[Game.Building.items.residential.megalopolis, 10],

			[Game.Research.items.evolution.alloy, 10],
			[Game.Research.items.evolution.ikea, 10]
		]
	}
});

new game.Building({
	name: 'Статуя консула',
	engName: 'statue',
	effect: new Game.Effect.Income({
		pretext: 'Приток населения ',
		aftertext: ' человек в час',
		priority: 1,
		affect: 'humans',
		result: function(level) {
			level = level || this.level; 
			return level * 5000;
		}
	}),
	description: 'Гигантская статуя Великого Правителя — самого Консула! Ваша двухсотметровая статуя прямо в центре жилого комплекса. Её величественный лик будет отбрасывать тень на город и каждое утро, просыпаясь, ваши жители будут мысленно благодарить вас за ваши труды, за ваше правление, вашу мудрость и непоколебимость в защите простого народа и борьбе с рептилоидами. Эта статуя не просто памятник при жизни — это статус вашего города, вашей планеты, это мораль вашего народа и маяк для новых людей, что перейдут под ваше командование и ринутся в бой по первому вашему зову, Великий Консул!',
	basePrice: {
		metals: 50000000,
		crystals: 20000000
	},
	maxLevel: 1,
	requirements: function() {
		return [
			[Game.Building.items.residential.megalopolis, 25],

			[Game.Research.items.evolution.alloy, 25]
		]
	}
});

new game.Building({
	name: 'Политический центр',
	engName: 'political',
	effect: new Game.Effect.Income({
		pretext: 'Приносит ',
		aftertext: ' грязных галактических кредитов в час',
		priority: 1,
		affect: 'credits',
		result: function(level) {
			level = level || this.level; 
			return level;
		}
	}),
	description: 'Ох, политика, политика… Казалось бы, кому нужны политики, когда есть единый правитель, император, его величество Консул! Однако же в мире столько вопросов, требующих внимания, а у великого правителя так мало времени. Не лучше ли, чтобы этим занимались маленькие никчёмные людишки в костюмах? Сидели там себе в кабинетах и спорили о том, в каком районе города установить новый светофор, пока вы, Консул, будете решать в каком районе Земли высаживать войска для битвы с Рептилоидами. Тем не менее, при всей своей никчёмности, политики довольно хитрые задницы и могут приносить реальную пользу вашему делу путём добычи небольшого количества Грязных Галактических Кредитов. А вот это уже кое-что. Согласитесь, Консул.',
	basePrice: {
		metals: 5000000,
		crystals: 6000000
	},
	maxLevel: 5,
	requirements: function() {
		return [
			[Game.Building.items.residential.megalopolis, 20],

			[Game.Research.items.evolution.alloy, 20],
			[Game.Research.items.evolution.man, 25]
		]
	}
});
/*
new game.Building({
	name: 'Пыточные камеры',
	engName: 'chambers',
	effect: {
		name: 'Особое меню',
		result: function(level) {
			level = (level == undefined ? this.level : level);

			if (level == 1) {
				return ': доступно';
			} 

			return ': какое особое меню?!';
		}
	},
	description: 'Среди Рептилоидов есть некоторые особи, именуемые в простонародье Ужасами. Эти твари проникают в мозг человека путём пси-воздействия и пугают наших солдат до смерти… В буквальном смысле до смерти. Однако же эти рептилии носят в своём сознании крайне важную информацию. Особое строение их мозга позволяет улавливать импульсы, которые появляются в местах разломов материи. Распознав и расшифровав колебания их мозговых волн в эти моменты, можно узнать многое об их культуре, исследованиях и технологиях. И, возможно, именно вы, Консул, сможете добыть эти данные. Но для начала нужно вскрыть мозг сраной пси-ящерицы и раздобыть эту информацию, так что пыточные камеры крайне важны в борьбе с врагом.',
	basePrice: {
		honor: 1000000,
		metals: 40000000,
		crystals: 15000000
	},
	maxLevel: 1,
	requirements: function() {
		return [
			[Game.Building.items.residential.political, 5],

			[Game.Research.items.evolution.ikea, 25]
		]
	}
});*/

}