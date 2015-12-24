initUnitsArmyContentFleet = function () {

game.setToMenu = 'army';
game.setToSide = 'fleet';

new game.Unit({
	name: 'Оса',
	engName: 'wasp',
	description: 'Оса — это быстрый штурмовой корабль. Она способна вести бой как на дальнем, так и на близком расстоянии. Также её особенностью является то, что устройство данного корабля позволяет ему цепляться с помощью хвоста за обшивку кораблей противника, после чего Оса разделяется на две части. Пилотируемая капсула отправляется на ближайший крупный боевой корабль, а «жало» вместе с двигателями остаётся в обшивке корабля противника. Благодаря дистанционному управлению хвостовыми двигателями, несколько тысяч Ос могут взять под контроль движения любого корабля. Ну, или просто взорвать его к херам вместе с капитаном-неудачником, подпустившим Ос слишком близко к своему кораблю.',
	basePrice: {
		humans: 10,
		metals: 1500,
		crystals: 500,
		time: 60 + 45
	},
	characteristics: {
		damage: 300,
		life: 500
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.dragon,
			Game.Unit.items.reptiles.fleet.armadillo,
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 5],
			[Game.Building.items.military.shipyard, 5]
		]
	}
});

new game.Unit({
	name: 'Крейсер',
	engName: 'cruiser',
	description: 'Крейсер, как понятно из названия, универсальный боевой корабль, способный выполнять практически любые задачи независимо от основного флота. Оснащён высокоточным ионным орудием, способным вывести из строя почти любые щиты противника. Крейсер также отлично подходит для уничтожения небольших и шустрых целей. Его нельзя назвать основным оружием в космических баталиях против Рептилоидов, однако же и нельзя недооценивать его потенциал. Если флот противника состоит преимущественно из кораблей класса «штурмовик», то несколько таких машинок расправятся с ними гораздо быстрее, чем сотня Ос.',
	basePrice: {
		humans: 1500,
		metals: 30000,
		crystals: 10000,
		time: 3 * 60 + 30
	},
	characteristics: {
		damage: 3000,
		life: 7000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.dragon,
			Game.Unit.items.reptiles.fleet.blade,
			Game.Unit.items.reptiles.fleet.armadillo,
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 8],
			[Game.Building.items.military.shipyard, 7]
		]
	}
});

new game.Unit({
	name: 'Линкор',
	engName: 'battleship',
	description: 'Линкор или Линейный корабль — основная боевая единица в космосе. Сам Адмирал Стил Болз назвал эти Линкоры величайшим космическим орудием. Понятно, что есть корабли и мощнее, однако же сочетание серьёзного вооружения, крепкой брони, относительно невысокой стоимости и прекрасных показателей приоритетов атаки делают Линкоры самым полезным кораблём на поле боя, способным дать отпор даже самым Ебучим Флотилиям Рептилоидов.',
	basePrice: {
		humans: 7500,
		metals: 70000,
		crystals: 5000,
		time: 5 * 60
	},
	characteristics: {
		damage: 5000,
		life: 15000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.hydra,
			Game.Unit.items.reptiles.fleet.armadillo,
			Game.Unit.items.reptiles.fleet.dragon,
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 10],
			[Game.Building.items.military.shipyard, 9],

			[Game.Research.items.evolution.hyperdrive, 1]
		]
	}
});

new game.Unit({
	name: 'Авианосец',
	engName: 'carrier',
	description: 'Авианосец, или, как его называют пилоты Осы, Улей — это огромный боевой корабль-завод. Авианосец способен ремонтировать и производить штурмовики класса «Оса» прямо во время боя. Авианосец имеет серьёзное вооружение, однако же основной урон наносит благодаря штурмовым кораблям на борту. Именно поэтому его и прозвали Улей, но почему-то руководству не нравится это название, что даже немного странно…',
	basePrice: {
		humans: 17000,
		metals: 50000,
		crystals: 25000,
		time: 10 * 60 + 30
	},
	characteristics: {
		damage: 9000,
		life: 20000
	},
	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.hydra,
			Game.Unit.items.reptiles.fleet.armadillo,
			Game.Unit.items.reptiles.fleet.dragon,
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.airfield, 12],
			[Game.Building.items.military.shipyard, 11],

			[Game.Research.items.evolution.hyperdrive, 7]
		]
	}
});

new game.Unit({
	name: 'Императорский флагман',
	engName: 'flagship',
	description: 'Венец творения современной боевой космонавтики. Данный корабль производится лишь в одном экземпляре и лишь для Консулов. Разработки подобной боевой системы были начаты ещё 10 лет назад для особо рьяных и особо богатых милитаристов — членов галактического совета, однако война с Рептилиями расставила свои приоритеты и прототип был переоборудован специально для борьбы с чешуйчатыми, а после появления Консулов вопросов не осталось. Императорский Флагман — это символ силы его Правителя и это страх для его врагов! Рептилоиды стараются избегать боя с Императорским Флагманом, ибо даже им понятно, что лучше уйти сейчас и выжить, чем погибнуть в страшных муках и потерять половину флота.',
	basePrice: {
		humans: 150000,
		metals: 1000000,
		crystals: 750000,
		time: 100 * 60 * 60
	},
	characteristics: {
		damage: 150000,
		life: 600000
	},

	targets: function() {
		return [
			Game.Unit.items.reptiles.fleet.shadow,
			Game.Unit.items.reptiles.fleet.hydra,
			Game.Unit.items.reptiles.fleet.blade,
		]
	},
	requirements: function() {
		return [
			[Game.Building.items.military.shipyard, 20],

			[Game.Research.items.evolution.alloy, 15],
			[Game.Research.items.evolution.nanotechnology, 15],
			[Game.Research.items.evolution.hyperdrive, 12]
		]
	}
});

}