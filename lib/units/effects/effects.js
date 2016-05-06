initUnitsBattleEffectsContent = function() {

/* TODO: implement!
new game.BattleEffect({
	key: 'psi',
	func: function(value, unit, friends, enemies) {
		// get effect power
		var power = 0;
		var psieffect = Game.Mutual.get('research', 'psieffect');
		if (psieffect <= 0) {
			power = Game.Random.interval(1, 5) / 100;
		} else {
			power = Game.Random.interval(6, 10) / 100;
		}
		power *= options.damageReduction;
		// count psi enemies
		var psiCount = 0;
		var key = null;
		for (key in enemies) {
			if (enemies[key].model.engName == 'psimans'
			 || enemies[key].model.engName == 'horror'
			) {
				psiCount += enemies[key].startCount;
			}
		}
		// if psi equal, idle
		if (psiCount == unit.startCount) {
			return unit.model.name + ' ничего не может сделать';
		}
		// apply effect
		var message = unit.model.name + ' атакует ';
		for (key in enemies) {
			var canAttack = true;
			// if our psi count lower, attack only psi units
			if (psiCount > unit.startCount
			 && enemies[key].model.engName != 'psimans'
			 && enemies[key].model.engName != 'horror'
			) {
				canAttack = false;
			}
			// attack
			if (canAttack) {
				var appliedDamage = Math.floor( enemies[key].life * power );
				enemies[key].life -= appliedDamage;
				enemies[key].count = Math.ceil( enemies[key].life / enemies[key].model.characteristics.life );
				message += enemies[key].model.name + ' (-' + appliedDamage + ') ';
			}
		}
		return message;
	}
});
*/

new game.BattleEffect({
	key: 'takeFriendsDamage',
	func: function(value, unit, friends) {
		if (value <= 0) {
			return false; // failed to take damage
		}

		var total = 0;

		for (var key in friends) {
			if (key == unit.key) {
				continue; // skip self
			}

			for (var hitKey in friends[key].hits) {
				if (unit.life <= 0) {
					break; // unit is dead
				}

				// calc damage to take
				var damage = Math.floor( friends[key].hits[hitKey] * (value / 100) );
				if (unit.life < damage) {
					damage = unit.life;
				}

				// restore friends life
				friends[key].life += damage;
				friends[key].hits[hitKey] -= damage;

				// take damage
				unit.life -= damage;
				total += damage;
			}
		}

		if (total === 0) {
			return false; // failed to take damage
		}

		return unit.model.name + ' принимает на себя урон ' + total;
	}
});

new game.BattleEffect({
	key: 'evadeDamage',
	func: function(value, unit) {
		if (Game.Random.interval(1, 99) > value) {
			return false; // failed to evade
		}

		// reset taken damage
		for (var key in unit.hits) {
			unit.life += unit.hits[key];
		}
		unit.hits = {};

		return unit.model.name + ' увернулся от атаки';
	}
});

new game.BattleEffect({
	key: 'destroyAfterDeath',
	func: function(value, unit, target) {
		if (value <= 0 || unit.killed <= 0 || !target || target.count <= 0) {
			return false; // can't destroy
		}

		// calc count of targets to destroy
		var count = Math.floor( unit.killed * value / 100 );
		if (Game.Random.interval(1, 99) <= unit.killed * value % 100) {
			count += 1;
		}
		
		if (count <= 0) {
			return false; // failed to destroy
		}

		// destroy targets
		if (target.count < count) {
			count = target.count;
		}
		target.count -= count;
		target.life -= count * target.model.characteristics.life;

		return unit.model.name + ':' +  unit.killed + ' унес за собой ' + target.model.name + ':' + count;
	}
});

new game.BattleEffect({
	key: 'moreDamage',
	func: function(value, unit, target) {
		if (value <= 0 || unit.life <= 0 || !target || target.life <= 0 || !target.hits[unit.key]) {
			return false; // can't apply more damage
		}

		var damage = Math.floor( target.hits[unit.key] * 0.15 );
		target.life -= damage;
		target.hits[unit.key] += damage;

		return unit.model.name + ' наносит дополнительный урон ' + target.model.name + ':' + bonusDamage;
	}
});

new game.BattleEffect({
	key: 'maximizeDamage',
	func: function(chance, unit) {
		if (Game.Random.interval(1, 99) > chance) {
			return false; // can't maximize damage
		}
		unit.damage = unit.model.characteristics.damage.max * unit.count;
		return unit.model.name + ' приготовился нанести максимальный урон';
	}
});

new game.BattleEffect({
	key: 'reduceDamage',
	func: function(chance, value, unit) {
		if (Game.Random.interval(1, 99) > chance) {
			return false; // can't reduce damage
		}

		var total = 0;
		for (var key in unit.hits) {
			var reduceAmount = Math.floor( unit.hits[key] * value / 100 );
			unit.hits[key] -= reduceAmount;
			unit.life += reduceAmount;
		}

		return unit.model.name + ' получает меньше урона на ' + total;
	}
});

new game.BattleEffect({
	key: 'restoreUnits',
	func: function(value, unit, target) {
		if (value <= 0 || unit.count <= 0 || !target) {
			return false; // can't restore
		}

		// calc count to restore
		var count = value * unit.count;
		if (count + target.count > target.startCount) {
			count = target.startCount - target.count;
		}

		if (count <= 0) {
			return false; // failed to restore
		}
		
		// restore
		target.count += count;
		return unit.model.name + ' восстанавливает ' + target.model.name + ':' + count;
	}
});

new game.BattleEffect({
	key: 'ressurectUnits',
	func: function(chance, unit) {
		var killed = unit.startCount - unit.count;
		var count = Math.floor( chance * killed / 100 );
		if (Game.Random.interval(1, 99) <= chance * killed % 100) {
			count += 1;
		}

		if (count <= 0) {
			return false; // failed to ressurect
		}

		// ressurect
		unit.count += count;
		return unit.model.name + ' восстанавливает ' + target.model.name + ':' + count;
	}
});

new game.BattleEffect({
	key: 'applyDamage',
	func: function(value, unit, targets) {
		if (value <= 0 || unit.killed <= 0 || !targets) {
			return false; // can't apply damage
		}

		value *= unit.killed;

		var total = 0;
		for (var key in targets) {
			if (value <= 0) {
				break; // no damage to apply
			}

			if (targets[key].life <= 0) {
				continue; // skip dead
			}

			var damage = targets[key].life;
			if (damage > value) {
				damage = value;
			}

			targets[key].life -= damage;

			if (!targets[key].hits[unit.key]) {
				target[key].hits[unit.key] = 0;
			}
			targets[key].hits[unit.key] += damage;

			value -= damage;
			total += damage;
		}

		if (total === 0) {
			return false; // failed to apply damage
		}
		
		return unit.model.name + ' при гибели наносит урон врагам ' + total;
	}
});
	
};