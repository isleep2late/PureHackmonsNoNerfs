export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	
// Will fix Perma-Weather, Terrain Damage Buff, Exclusive Moves/Abilities, Certain type-interactions, and Parental Bond later
	init() {
	},
	
	pokemon: {
	},
	
	// Battle mechanics modifications
	battle: {
		// Leech Seed + Toxic Synergy restoration
		runEvent(eventid, target, source, effect, relayVar, onEffect, fastExit) {
			if (eventid === 'ResidualOrder') {
				// Handle Leech Seed + Toxic synergy
				for (const pokemon of this.getAllActive()) {
					if (pokemon.volatiles['leechseed'] && pokemon.status === 'tox') {
						const toxicTurns = pokemon.statusState.turns || 1;
						const damage = Math.floor(pokemon.maxhp * toxicTurns / 16);
						// Apply the toxic multiplier to leech seed damage
						if (pokemon.volatiles['leechseed'].source) {
							pokemon.volatiles['leechseed'].damage = damage;
						}
					}
				}
			}
			// Call the original method
			return this.constructor.prototype.runEvent.call(this, eventid, target, source, effect, relayVar, onEffect, fastExit);
		},
	},
	// Status condition modifications
	actions: {
		// Speed reduction from paralysis
		modifyStat(stat, pokemon, source, effect) {
			if (stat === 'spe' && pokemon.status === 'par') {
				return this.chainModify(0.25); // 75% speed reduction
			}
			return this.constructor.prototype.modifyStat.call(this, stat, pokemon, source, effect);
		},
	},
	
	// Move modifications
	runMove(moveOrMoveName, pokemon, targetLoc, sourceEffect, zMove, externalMove, maxMove, originalTarget) {
		const move = this.dex.getActiveMove(moveOrMoveName);

// Handle Clangorous Soulblaze with Parental Bond
// Remove default self-effect so custom onAfterMove can handle it twice
if (move.id === 'clangoroussoulblaze' && pokemon.hasAbility('parentalbond') && move.multihitType === 'parentalbond') {
    delete move.self;
}
		
		// Multi-hit moves modifications (Gen 1 mechanics)
		if (['doublekick', 'barrage', 'furyattack', 'pinmissile', 'twineedle', 'cometpunch', 'furyswipes', 'spikecannon'].includes(move.id)) {
			// Each hit always deals the same damage; subsequent hits will crit if the 1st one did
			// BUT ends immediately if it breaks a substitute
			move.onAfterSubDamage = function(damage, target, source, move) {
				// End multihit if substitute is broken
				source.volatiles['lockedmove'] = null;
			};
		}
		
		// Binding moves (Gen 1 mechanics)
		if (['bind', 'wrap', 'clamp', 'firespin'].includes(move.id)) {
			// Lasting 2-5 turns, dealing regular 15 BP damage, target unable to attack/switch
			move.volatileStatus = 'partiallytrapped';
			move.condition = {
				duration: this.random(2, 6), // 2-5 turns
				onStart(target, source, move) {
					this.add('-activate', target, 'move: ' + move.name, '[of] ' + source);
					this.effectState.boundDamage = Math.floor(target.maxhp / (move.id === 'firespin' ? 8 : 16));
				},
				onResidualOrder: 13,
				onResidual(pokemon) {
					const source = this.effectState.source;
					if (source && (!source.isActive || source.hp <= 0)) {
						pokemon.removeVolatile('partiallytrapped');
						return;
					}
					this.damage(this.effectState.boundDamage, pokemon, source);
				},
				onTrapPokemon(pokemon) {
					pokemon.tryTrap();
				},
			};
		}
		
		// Swift and Bide hit during invulnerable turns
		if (['swift', 'bide'].includes(move.id)) {
			move.tracksTarget = true; // Hits during Dig/Fly
		}
		
		
		// Substitute modifications
		if (move.id === 'substitute') {
			move.condition = {
				onStart(target, source, move) {
					this.add('-start', target, 'Substitute');
					this.effectState.hp = Math.floor(target.maxhp / 4);
					if (target.volatiles['partiallytrapped']) {
						delete target.volatiles['partiallytrapped'];
					}
				},
				onTryPrimaryHitPriority: -1,
				onTryPrimaryHit(target, source, move) {
					if (target === source || move.flags['bypasssub'] || move.infiltrates) {
						return;
					}
					let damage = this.actions.getDamage(source, target, move);
					if (!damage && damage !== 0) {
						this.add('-fail', source);
						this.attrLastMove('[still]');
						return null;
					}
					damage = this.runEvent('SubDamage', target, source, move, damage);
					if (!damage) {
						return damage;
					}
					if (damage > target.volatiles['substitute'].hp) {
						damage = target.volatiles['substitute'].hp as number;
					}
					target.volatiles['substitute'].hp -= damage;
					source.lastDamage = damage;
					if (target.volatiles['substitute'].hp <= 0) {
						if (move.ohko) this.add('-ohko');
						target.removeVolatile('substitute');
					} else {
						this.add('-activate', target, 'move: Substitute', '[damage]');
					}
					if (move.recoil || move.id === 'chloroblast') {
						this.damage(this.actions.calcRecoilDamage(damage, move, source), source, target, 'recoil');
					}
					if (move.drain) {
						this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
					}
					this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
					this.runEvent('AfterSubDamage', target, source, move, damage);
					return this.HIT_SUBSTITUTE;
				},
				// Blocks Curse, causes drain moves to miss
				onTryHit(target, source, move) {
					if (move.id === 'curse') return false;
					if (['gigadrain', 'megadrain', 'absorb', 'dreameater'].includes(move.id)) {
						return false;
					}
				},
			};
		}
		
		return this.constructor.prototype.runMove.call(this, move, pokemon, targetLoc, sourceEffect, zMove, externalMove, maxMove, originalTarget);
	},
	
	// Critical hit formula restoration (speed-based)
	criticalHit(target, source, move) {
		if (!source) return false;
		
		// Speed-based critical hits (high-speed = more crits)
		const speedRatio = source.getStat('spe') / 200; // Normalize speed
		let critChance = move.critRatio || 1;
		
		// Apply speed multiplier
		critChance *= (1 + speedRatio);
		
		// Standard crit rates but modified by speed
		const critRatios = [0, 24, 8, 2, 1];
		const critRatio = Math.min(critRatios.length - 1, Math.floor(critChance));
		
		return this.randomChance(1, critRatios[critRatio] || 24);
	},
	
		
		return this.constructor.prototype.runEvent.call(this, eventid, target, source, effect, relayVar, onEffect, fastExit);
	},
	
	// Psywave damage calculation (Gen 1)
	getDamage(source, target, move, suppressMessages) {
		if (move.id === 'psywave') {
			// Deals damage between 100-150% of level
			const minDamage = source.level;
			const maxDamage = Math.floor(source.level * 1.5);
			return this.random(minDamage, maxDamage + 1);
		}
		
		return this.constructor.prototype.getDamage.call(this, source, target, move, suppressMessages);
	},
	
	// Seismic Toss/Night Shade/SonicBoom/Counter/Bide hit immunities
	tryMoveHit(target, pokemon, move) {
		// Make these moves hit normally immune types
		if (['seismictoss', 'nightshade'].includes(move.id)) {
			// Hits Ghost types
			move.type = '???';
		}
		if (move.id === 'sonicboom') {
			// Hits Psychic types  
			move.type = '???';
		}
		if (['counter', 'bide'].includes(move.id)) {
			// Hit normally immune types
			move.type = '???';
		}
		
		return this.constructor.prototype.tryMoveHit.call(this, target, pokemon, move);
	},
};
