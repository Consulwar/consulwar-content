initUnitsBattleEffectsContent = function() {

// ----------------------------------------------------------------------------
// onBattleStart : use only [startCount, count, life]
// ----------------------------------------------------------------------------

new game.BattleEffect({
	key: 'psi',
	func: function(power, unit, enemies) {
		// count psi enemies
		var psiCount = 0;
		var key = null;
		for (key in enemies) {
			if (key == 'army.ground.psimans'
			 || key == 'reptiles.ground.horror'
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
			 && key != 'army.ground.psimans'
			 && key != 'reptiles.ground.horror'
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

new game.BattleEffect({
	key: 'killUnit',
	func: function(chance, count, unit, target) {
		if (!target || !Game.Random.chance(chance)) {
			return false; // can't kill
		}

		// kill
		if (target.count < count) {
			count = target.count;
		}
		target.count -= count;
		target.life = target.count * target.model.characteristics.life;

		return unit.model.name + ' перед началом битвы уничтожает ' + count + ' ' + target.model.name;
	}
});

// ----------------------------------------------------------------------------
// onRoundStart : use only [count, damage]
// ----------------------------------------------------------------------------

new game.BattleEffect({
	key: 'maximizeDamage',
	func: function(chance, factor, unit) {
		if (!Game.Random.chance(chance)) {
			return false; // can't maximize damage
		}
		unit.damage = unit.model.characteristics.damage.max * unit.count;
		return unit.model.name + ' приготовился нанести максимальный урон';
	}
});

new game.BattleEffect({
	key: 'multiplyDamage',
	func: function(factor, unit) {
		unit.damage *= factor;
		return unit.model.name + ' умножает урон на ' + factor;
	}
});

// ----------------------------------------------------------------------------
// onAttack : use only [hits, life]
// ----------------------------------------------------------------------------

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
		if (!Game.Random.chance(value)) {
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
	key: 'reduceDamage',
	func: function(value, unit, fromTargetKey) {
		var total = 0;

		for (var key in unit.hits) {
			if (fromTargetKey && key != fromTargetKey) {
				continue; // skip this target
			}

			var reduceAmount = Math.floor( unit.hits[key] * value / 100 );
			unit.hits[key] -= reduceAmount;
			unit.life += reduceAmount;

			total += reduceAmount;
		}

		if (total <= 0) {
			return false; // can't reduce damage
		}

		return unit.model.name + ' получает меньше урона на ' + total;
	}
});

new game.BattleEffect({
	key: 'moreDamage',
	func: function(factor, unit, target) {
		if (unit.life <= 0 || !target || target.life <= 0 || !target.hits[unit.key]) {
			return false; // can't apply more damage
		}

		var damage = Math.floor( target.hits[unit.key] * factor ) - target.hits[unit.key];
		if (damage <= 0) {
			return false; // can't apply more damage
		}

		// apply additional damage
		target.life -= damage;
		target.hits[unit.key] += damage;

		return unit.model.name + ' наносит дополнительный урон ' + target.model.name + ':' + bonusDamage;
	}
});

new game.BattleEffect({
	key: 'redirectDamageTo',
	func: function(factor, unit, target, targets) {
		if (factor <= 0 || !target || target.life <= 0) {
			return false; // can't redirect damage
		}

		// collect all damage
		var total = 0;
		for (var key in targets) {
			if (targets[key].hits[unit.key]) {
				total += targets[key].hits[unit.key];
				targets[key].life += targets[key].hits[unit.key];
				targets[key].hits[unit.key] = 0;
			}
		}

		var total = Math.floor( total * factor );
		if (total === 0) {
			return false; // can't redirect damage
		}

		// redirect to target
		target.hits[unit.key] = total;
		target.life -= total;
		return unit.model.name + ' переносит весь урон на ' + target.model.name;
	}
});

new game.BattleEffect({
	key: 'applyCriticalDamage',
	func: function(chance, unit, target) {
		if (chance <= 0 || !target || target.life <= 0 || !target.hits[unit.key]) {
			return false; // can't apply critical damage
		}

		var unitCount = Math.ceil( target.hits[unit.key] / unit.model.characteristics.damage.max );
		var critCount = Math.floor( unitCount * chance / 100);
		if (Game.Random.chance( unitCount * chance % 100 )) {
			critCount += 1;
		}

		if (critCount < 0) {
			return false; // no critical damage this time
		}

		// apply critical damage
		var damage = critCount * target.model.characteristics.life;
		target.life -= damage;
		target.hits[unit.key] += damage;

		return unit.model.name + ' наносит критический урон ' + target.model.name;
	}
});

new game.BattleEffect({
	key: 'prismAttack',
	func: function(chance, unit, targets) {
		var keys = _.keys(targets);
		var randKey = null;
		var threshold = unit.model.characteristics.damage.max * 0.1;

		for (var key in targets) {
			if (targets[key].hits[unit.key]
			 && targets[key].hits[unit.key] >= threshold
			 && Game.Random.chance(chance)
			) {
				var damage = Math.floor( targets[key].hits[unit.key] * 0.25 );

				// first random target 
				randKey = keys[ Game.Random.interval(0, keys.length - 1) ];
				if (!targets[randKey].hits[unit.key]) {
					targets[randKey].hits[unit.key] = 0;
				}
				targets[randKey].hits[unit.key] += damage;
				targets[randKey].life -= damage;

				// second random target 
				randKey = keys[ Game.Random.interval(0, keys.length - 1) ];
				if (!targets[randKey].hits[unit.key]) {
					targets[randKey].hits[unit.key] = 0;
				}
				targets[randKey].hits[unit.key] += damage;
				targets[randKey].life -= damage;
			}
		}

		return unit.model.name + ' применяет спец атаку';
	}
});

new game.BattleEffect({
	key: 'octopusAttack',
	func: function(unit, targets) {
		var key = null;
		var i = 0;

		// sort targets by max damage taken
		var maxTargets = [];
		for (key in targets) {
			if (targets[key].hits[unit.key]) {
				var isInserted = false;
				for (i = 0; i < maxTargets.length; i++) {
					if (maxTargets[i].hits[unit.key] <= targets[key].hits[unit.key]) {
						maxTargets.splice(i, 0, targets[key]);
						isInserted = true;
						break;
					}
				}
				if (!isInserted) {
					maxTargets.push(targets[key]);
				}
			}
		}

		var damage = Math.floor( unit.model.characteristics.damage.max * 0.4 );

		for (i = 0; i < maxTargets.length; i++) {
			if (i < 3) {
				// apply damage
				maxTargets[i].life += maxTargets[i].hits[unit.key];
				maxTargets[i].life -= damage;
				maxTargets[i].hits[unit.key] = damage;
			} else {
				// reset damage
				maxTargets[i].life += maxTargets[i].hits[unit.key];
				maxTargets[i].hits[unit.key] = 0;
			}
		}

		return unit.model.name + ' применяет спец атаку';
	}
});

// ----------------------------------------------------------------------------
// onRoundEnd : use only [count, killed]
// ----------------------------------------------------------------------------

new game.BattleEffect({
	key: 'destroyAfterDeath',
	func: function(value, unit, target) {
		if (value <= 0 || unit.killed <= 0 || !target || target.count <= 0) {
			return false; // can't destroy
		}

		// calc count of targets to destroy
		var count = Math.floor( unit.killed * value / 100 );
		if (Game.Random.chance( unit.killed * value % 100 )) {
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

new game.BattleEffect({
	key: 'applyDamageToRandomTarget',
	func: function(value, unit, targets) {
		if (value <= 0 || unit.killed <= 0 || !targets) {
			return false; // can't apply damage
		}

		value *= unit.killed;

		var keys = _.keys(targets);
		var key = keys[ Game.Random.interval(0, keys.length - 1) ];
		var target = targets[key];

		if (!target.hits[unit.key]) {
			target.hits[unit.key] = 0;
		}
		target.hits[unit.key] += value;
		target.life -= value;
		
		return unit.model.name + ' при гибели наносит урон ' + target.model.name;
	}
});

// ----------------------------------------------------------------------------
// onBattleEnd : use any fields
// ----------------------------------------------------------------------------

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
	func: function(chance, factor, unit) {
		var killed = Math.floor( (unit.startCount - unit.count) * factor );
		var count = Math.floor( chance * killed / 100 );
		if (Game.Random.chance( chance * killed % 100 )) {
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

};