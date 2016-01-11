initUnitsReptilesContentGround = function () {

game.setToMenu = 'reptiles';
game.setToSide = 'ground';

new game.ReptileUnit({
	name: 'Ударник',
	engName: 'striker',
	description: 'Ударники — это основа Рептилоидной армии. Они опасны и многочисленны — Император Рептилий не считая отсылает их миллионами на поле боя. У нас мало информации о том, откуда у чешуйчатых такое количество солдат, и как они умудряются пополнять их ряды так быстро. Кто-то поговаривал о клонировании, кто-то о некой матке Рептилий… Что звучит ещё глупее. Однако факт остаётся фактом — рептилий несметное количество, а ударники пусть и не самая серьёзная боевая единица, но они уж точно посильнее наших отцов, к тому же превосходят нас количеством.',
	basePrice: {
		metals: 1750,
		humans: 1,
		time: 2
	},
	characteristics: {
		damage: {
			min: 11,
			max: 14
		},
		life: 35,
		special: 'infantry',
		notAttack: ['air']
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.fathers,
			Game.Unit.items.army.ground.horizontalbarman,
			Game.Unit.items.army.ground.psimans
		]
	}
});

new game.ReptileUnit({
	name: 'Потрошитель',
	engName: 'ripper',
	description: 'Самые сильные и выносливые Рептилии проходят специальный курс обучения, после чего им самая дорога в потрошители. Мощные и выносливые солдаты своего Императора, они беспрекословно рвутся в бой, уничтожая на своём пути не только технику, но и легко расправляясь с нашей пехотой. Потрошители — опасные и хитрые юниты, Консул. С ними надо быть осторожнее.',
	basePrice: {
		humans: 1,
		metals: 1000,
		crystals: 600,
		time: 5
	},
	characteristics: {
		damage: {
			min: 36,
			max: 45
		},
		life: 22,
		special: 'infantry'
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.easytank,
			Game.Unit.items.army.ground.mothertank,
			Game.Unit.items.army.ground.prickartillery
		]
	}
});

new game.ReptileUnit({
	name: 'Ужас',
	engName: 'horror',
	description: 'На самом деле мало кто видел Ужасов воочию, да ещё и чтобы выжить после этого. Так или иначе их описывают как странные дымящиеся силуэты. К счастью, в наших рядах есть не такие глупые ребята, как те, что держат оружие. Белые халаты объясняют это ментальным воздействием на разум. Ужасы, скорее всего, это высшая форма разведчиков рептилий, которые скрывают свой образ, внушая такие странные видения солдатам нашей армии. И всё же эти создания точно не из воздуха, чему свидетельствуют их ошмётки по всему полю боя после того, как там проработает наша артиллерия.',
	basePrice: {
		humans: 100,
		metals: 3000,
		crystals: 13500,
		time: 15
	},
	characteristics: {
		life: 85,
		special: 'infantry'
	},
	triggers: {
		battle: [{
			name: 'Уничтожает определенный % войск противника',
			applyEffect: Game.Unit.battleEffects.psi
		}]
	}
});

new game.ReptileUnit({
	name: 'Дробилка',
	engName: 'breaker',
	description: 'Дробилка Рептилоидов так названа из-за уникального импульсного орудия, установленного у этой техники по бокам. Прямое воздействие этого орудия на пехоту в течение нескольких секунд абсолютно незаметно физически, однако же в какой-то момент тело просто разрывает на куски. Сотня Дробилок может оставить после себя кровавое поле из кусков целой пехотной дивизии. Ко всему прочему, мобильность Дробилки и плазменное орудие на крыше позволяют ей неплохо справляться и с воздушной техникой.',
	basePrice: {
		humans: 10,
		metals: 15000,
		crystals: 3500,
		time: 20
	},
	characteristics: {
		damage: {
			min: 120,
			max: 150
		},
		life: 500,
		special: 'enginery'
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.horizontalbarman,
			Game.Unit.items.army.ground.fathers,
			Game.Unit.items.army.ground.psimans
		]
	}
});

new game.ReptileUnit({
	name: 'Слайдер',
	engName: 'slider',
	description: 'Слайдер — это отличное решение Рептилий для молниеносных атак техникой, по своей силе он в разы превосходит наш аналог — Танк Изи, уже десятки раз дорабатывавшийся и переделывавшийся. Слайдер имеет более мощное вооружение, броня его прочнее, а мобильность выше. Слайдер крайне опасен в бою, Консул, учтите это.',
	basePrice: {
		humans: 15,
		metals: 39000,
		crystals: 3000,
		time: 30
	},
	characteristics: {
		damage: {
			min: 240,
			max: 300
		},
		life: 1000,
		special: 'enginery'
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.agmogedcar,
			Game.Unit.items.army.ground.easytank,
			Game.Unit.items.army.ground.fast
		]
	}
});

new game.ReptileUnit({
	name: 'Крушитель',
	engName: 'crusher',
	description: 'Крушитель чуть более поворотливый, чем наша Мамка, и гораздо меньших размеров. При этом особый наклон брони из странных сплавов, которые мы так и не смогли изучить, позволяет ему держать поразительное количество урона, при этом в ответ выдавая не меньше. И хоть ему не сравниться с нашими Тяжёлыми Танками, стоимость его гораздо ниже… Иначе как объяснить такое огромное количество этой техники в армии Рептилоидов?',
	basePrice: {
		humans: 500,
		metals: 600000,
		crystals: 120000,
		time: 180
	},
	characteristics: {
		damage: {
			min: 1200,
			max: 1500
		},
		life: 35000,
		special: 'enginery'
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.easytank,
			Game.Unit.items.army.ground.grandmother,
			Game.Unit.items.army.ground.hbhr
		]
	}
});

new game.ReptileUnit({
	name: 'Геккон',
	engName: 'geccon',
	description: 'Геккон — очень необычная артиллерия: этакая смесь новейших технологий и процесса работы старого образца. При всей своей напичканности системами наведения и уникальными ходовыми «лапами», позволяющими передвигаться по любой местности, а также быстро разворачивать орудия, установив Геккона в положение Артиллерии, данная техника всё равно стреляет обычными разрывными снарядами. Что не может не радовать нашу Тяжёлую технику, но крайне огорчает нашу пехоту',
	basePrice: {
		humans: 20,
		metals: 150000,
		crystals: 100000,
		time: 480
	},
	characteristics: {
		damage: {
			min: 7600,
			max: 9500
		},
		life: 2000,
		special: 'artillery',
		notAttack: ['air']
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.mothertank,
			Game.Unit.items.army.ground.hbhr,
			Game.Unit.items.army.ground.easytank
		]
	}
});

new game.ReptileUnit({
	name: 'Амфизбен',
	engName: 'amfizben',
	description: 'Как и флот рептилий, Амфизбен один из лучших представителей господства Рептилий в небе. Быстрый, мощный, мобильный, в небе ему нет равных — и в тоже время он совершенно «картонный». Амфизбен рассчитан на удар в первой волне, где его урон будет очень мощным, после чего наши Бгоневички без проблем порежут большую часть лётной техники Рептилий. Тем не менее первую волну атаки можно смело записывать на счёт Рептилоидов, и во многом именно за счёт Амфизбена.',
	basePrice: {
		humans: 5,
		metals: 10000,
		crystals: 4500,
		time: 30
	},
	characteristics: {
		damage: {
			min: 180,
			max: 225
		},
		life: 350,
		special: 'air'
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.fast,
			Game.Unit.items.army.ground.grandmother,
			Game.Unit.items.army.ground.fathers
		]
	}
});

new game.ReptileUnit({
	name: 'Амфибия',
	engName: 'amphibian',
	description: 'Амфибия получила своё название благодаря способности находиться не только в небе, но и подниматься на высокую орбиту, сражаться в космосе и даже под водой. Собственно, зачастую эскадрильи Рептилий, состоящие из Амфибий, как раз и наносили коварные удары из-под воды, появляясь в тылу нашей армии. Чешуйчатым хитрости не занимать…',
	basePrice: {
		humans: 100,
		metals: 120000,
		crystals: 60000,
		time: 180
	},
	characteristics: {
		damage: {
			min: 4400,
			max: 5500
		},
		life: 2500,
		special: 'air',
		notAttack: ['air']
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.mothertank,
			Game.Unit.items.army.ground.easytank,
			Game.Unit.items.army.ground.agmogedcar
		]
	}
});


new game.ReptileUnit({
	name: 'Отбойный комплекс',
	engName: 'chipping',
	description: 'Отбойный Комплекс — это огромное боевое здание, до упора напичканное турелями, системами ПВО и дальнобойными орудиями. Обычно такие комплексы Рептилии устанавливают в самых важных боевых точках и сражаться с их и без того сильной армией, да ещё при поддержке этих Комплексов становится буквально адской задачей.',
	basePrice: {
		humans: 10000,
		metals: 1500000,
		crystals: 540000,
		time: 3600
	},
	characteristics: {
		damage: {
			min: 44000,
			max: 55000
		},
		life: 150000,
		special: 'defence'
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.mothertank,
			Game.Unit.items.army.ground.grandmother,
			Game.Unit.items.army.ground.hbhr
		]
	}
});

new game.ReptileUnit({
	name: 'Крайне ебучие рептилоиды',
	engName: 'toofucking',
	description: 'Быстрые и смертоносные войска Рептилий. Появляются незаметно, молниеносно вырезают пехоту и так же аккуратно уходят во тьму. Крайне хитры и опасны, без специальной техники с радарами и противопехотным оружием не рекомендуется вступать в бой. Наземным войскам остаётся держать оборону, пехота лишь большими отрядами имеет хоть какие-то шансы против Крайне Ебучих Рептилоидов.',
	basePrice: {
		humans: 50000,
		time: 1
	},
	characteristics: {
		damage: {
			min: 16000,
			max: 20000
		},
		life: 30000
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.lost,
			Game.Unit.items.army.ground.horizontalbarman,
			Game.Unit.items.army.ground.fathers
		]
	}
});

new game.ReptileUnit({
	name: 'Покровитель',
	engName: 'patron',
	description: 'Покровитель — это своего рода осадное орудие Чешуйчатых. Способен вести огонь как по технике и лётным войскам, так и по пехоте. Для огромного боевого робота обладает крайне высокой манёвренностью, показатели по броне не очень высокие, однако же основные орудия наносят мощнейший урон и способны буквально прожигать даже самые крепкие бронелисты. Будьте внимательны на поле боя, Консул, если на точке присутствует данная техника.',
	basePrice: {
		metals: 800000,
		crystals: 320000,
		humans: 4000,
		time: 7200
	},
	characteristics: {
		damage: {
			min: 20000,
			max: 25000
		},
		life: 15000
	},
	targets: function() {
		return [
			Game.Unit.items.army.ground.hbhr,
			Game.Unit.items.army.ground.grandmother,
			Game.Unit.items.army.ground.easytank
		]
	}
});

}