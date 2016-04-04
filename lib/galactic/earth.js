initGalacticContentEarth = function () {

new game.PointType({
	name: 'Горы',
	engName: 'mountains',
	effects: {
		infantry: {
			damage: 20
		},
		enginery: {
			life: -30
		},
		air: {
			life: -40
		},
	}
});

new game.PointType({
	name: 'Скалы',
	engName: 'rocks',
	effects: {
		infantry: {
			damage: 30
		},
		air: {
			life: -50,
			damage: -50
		},
	}
});

new game.PointType({
	name: 'Равнина',
	engName: 'plains',
	effects: {
		infantry: {
			life: -30
		},
		enginery: {
			damage: 20
		},
		artillery: {
			damage: 50
		}
	}
});

new game.PointType({
	name: 'Болота',
	engName: 'swamps',
	effects: {
		infantry: {
			life: 50
		},
		enginery: {
			life: -30
		},
		artillery: {
			damage: -50
		}
	}
});

new game.PointType({
	name: 'Руины',
	engName: 'ruins',
	effects: {
		enginery: {
			damage: 40
		},
		artillery: {
			damage: -60
		},
		air: {
			damage: -50
		}
	}
});

new game.PointType({
	name: 'Холмы',
	engName: 'hills',
	effects: {
		infantry: {
			life: 30
		},
		enginery: {
			damage: -20
		},
		artillery: {
			damage: -10
		}
	}
});

new game.PointType({
	name: 'Столица',
	engName: 'capital',
	effects: {
		infantry: {
			damage: 150
		},
		artillery: {
			damage: -70
		},
		air: {
			damage: -60
		}
	}
});



new game.Point({
	engName: 'a1',
	type: Game.Point.types.items.plains
});

new game.Point({
	engName: 'a2',
	type: Game.Point.types.items.ruins
});

new game.Point({
	engName: 'a3',
	type: Game.Point.types.items.ruins
});

new game.Point({
	engName: 'a4',
	type: Game.Point.types.items.hills
});

new game.Point({
	engName: 'a5',
	type: Game.Point.types.items.mountains
});

new game.Point({
	engName: 'a6',
	type: Game.Point.types.items.swamps
});

new game.Point({
	engName: 'a7',
	type: Game.Point.types.items.plains
});


new game.Point({
	engName: 'b1',
	type: Game.Point.types.items.plains
});

new game.Point({
	engName: 'b2',
	type: Game.Point.types.items.plains
});

new game.Point({
	engName: 'b3',
	type: Game.Point.types.items.ruins
});

new game.Point({
	engName: 'b4',
	type: Game.Point.types.items.swamps
});

new game.Point({
	engName: 'b5',
	type: Game.Point.types.items.hills
});

new game.Point({
	engName: 'b6',
	type: Game.Point.types.items.mountains
});

new game.Point({
	engName: 'b7',
	type: Game.Point.types.items.mountains
});


new game.Point({
	engName: 'c1',
	type: Game.Point.types.items.swamps
});

new game.Point({
	engName: 'c2',
	type: Game.Point.types.items.rocks
});

new game.Point({
	engName: 'c3',
	type: Game.Point.types.items.rocks
});

new game.Point({
	engName: 'c4',
	type: Game.Point.types.items.ruins
});

new game.Point({
	engName: 'c5',
	type: Game.Point.types.items.hills
});

new game.Point({
	engName: 'c6',
	type: Game.Point.types.items.mountains
});

new game.Point({
	engName: 'c7',
	type: Game.Point.types.items.rocks
});



new game.Point({
	engName: 'd1',
	type: Game.Point.types.items.capital
});

};