initCosmosContent = function() {

// TODO: Настроить вероятности выпадения предметов!
//       После настройки можно воспользоваться читом:
//       Game.Cheats.generateAllPlanets
//       Для того чтобы проверить как распределяются предметы и вероятности по галактике.
//       Так же нужно настроить Game.Cosmos.ARTEFACTS_GROUP_SPREAD!

new game.PlanetType({
	engName: 'jungle',
	name: 'джунгли',
	chance: 30,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'terran',
	name: 'земного типа',
	chance: 20,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'ocean',
	name: 'океаническая',
	chance: 10,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'arid',
	name: 'засушливая',
	chance: 10,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'tundra',
	name: 'тундра',
	chance: 10,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'desert',
	name: 'пустынная',
	chance: 10,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'arctic',
	name: 'арктическая',
	chance: 10,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'lava',
	name: 'лавовая',
	chance: 50,
	sizeMin: 1,
	sizeMax: 3,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'barren',
	name: 'бесплодная',
	chance: 50,
	sizeMin: 4,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'asteroids',
	name: 'астероид',
	chance: 100,
	sizeMin: 1,
	sizeMax: 3,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'methane',
	name: 'метановая',
	chance: 50,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'hydrogen',
	name: 'водородная',
	chance: 50,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
})

new game.PlanetType({
	engName: 'helium',
	name: 'гелиевая',
	chance: 50,
	sizeMin: 5,
	sizeMax: 5,
	artefacts: function() {
		return [
			// white
			[Game.Artefacts.items.weapon_parts, 50],
			[Game.Artefacts.items.silver_plasmoid, 50],
			[Game.Artefacts.items.ship_details, 50],
			[Game.Artefacts.items.meteor_fragments, 50],
			[Game.Artefacts.items.crystal_fragments, 50],
			// green
			[Game.Artefacts.items.secret_technology, 50],
			[Game.Artefacts.items.rotary_amplifier, 50],
			[Game.Artefacts.items.reptile_technology, 50],
			[Game.Artefacts.items.emerald_plasmoid, 50],
			[Game.Artefacts.items.batteries, 50],
			// blue
			[Game.Artefacts.items.sapphire_plasmoid, 50],
			[Game.Artefacts.items.quad_cooler, 50],
			[Game.Artefacts.items.plasma_transistors, 50],
			[Game.Artefacts.items.nanowires, 50],
			[Game.Artefacts.items.chip, 50],
			// purple
			[Game.Artefacts.items.nicolascagium, 50],
			[Game.Artefacts.items.keanureevesium, 50],
			[Game.Artefacts.items.jimcarrium, 50],
			[Game.Artefacts.items.garyoldmanium, 50],
			[Game.Artefacts.items.amethyst_plasmoid, 50],
			// orange
			[Game.Artefacts.items.topaz_plasmoid, 50],
			[Game.Artefacts.items.ancient_technology, 50],
			[Game.Artefacts.items.ancient_scheme, 50],
			[Game.Artefacts.items.ancient_knowledge, 50],
			[Game.Artefacts.items.ancient_artefact, 50],
			// red
			[Game.Artefacts.items.ruby_plasmoid, 50]
		]
	}
});

}