export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	// Generation 9 - Immune to Neutralizing Gas (pre-update)
	hadronengine: {
		inherit: true,
		isPermanent: true, // Immune to Neutralizing Gas
	},
	orichalcumpulse: {
		inherit: true,
		isPermanent: true, // Immune to Neutralizing Gas
	},
	quarkdrive: {
		inherit: true,
		isPermanent: true, // Immune to Neutralizing Gas
	},
	protosynthesis: {
		inherit: true,
		isPermanent: true, // Immune to Neutralizing Gas
	},
	
	// Generation 8â†’9 Ability Nerfs Reversed
	battlebond: {
		inherit: true,
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move' && source.species.id === 'greninja' && source.hp) {
				this.add('-activate', source, 'ability: Battle Bond');
				source.formeChange('Greninja-Ash', this.effect, true);
			}
		},
		onModifyMove(move, pokemon) {
			if (move.id === 'watershuriken' && pokemon.species.name === 'Greninja-Ash' && pokemon.hasAbility('battlebond')) {
				move.multihit = 3;
			}
		},
	},
	dauntlessshield: {
		inherit: true,
		onStart(pokemon) {
			this.boost({def: 1}, pokemon);
		},
		// Activate on every switch-in, not just once per battle
	},
	intrepidsword: {
		inherit: true,
		onStart(pokemon) {
			this.boost({atk: 1}, pokemon);
		},
		// Activate on every switch-in, not just once per battle
	},
	protean: {
		inherit: true,
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			const type = move.type;
			if (type && type !== '???') {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		// Remove once-per-switch limit - restore unlimited type changing
	},
	libero: {
		inherit: true,
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			const type = move.type;
			if (type && type !== '???') {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Libero');
			}
		},
		// Remove once-per-switch limit - restore unlimited type changing
	},
	transistor: {
		inherit: true,
		onBasePowerPriority: 30,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5); // 1.3x boost â†’ 1.5x boost
			}
		},
	},
	
	// Generation 7â†’8 Ability Nerfs Reversed
	disguise: {
		inherit: true,
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				['mimikyu', 'mimikyutotem'].includes(target.species.id) && !target.transformed
			) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectState.busted = true;
				return 0; // Remove HP damage - restore true immunity to first hit
			}
		},
		onCriticalHit(target, source, move) {
			if (!target.transformed && target.species.id in {'mimikyu': 1, 'mimikyutotem': 1}) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (!target.runStatusImmunity(move.type)) return;
				return false;
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target.transformed && target.species.id in {'mimikyu': 1, 'mimikyutotem': 1}) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (!target.runStatusImmunity(move.type)) return;
				return 0;
			}
		},
	},
	moody: {
		inherit: true,
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostName[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostName;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue; // Allow accuracy and evasion
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostName | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 2; // Restore original 2 stage boost

			stats = [];
			let statMinus: BoostName;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue; // Allow accuracy and evasion
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -1; // Original 1 stage drop

			this.boost(boost, pokemon, pokemon);
		},
	},
	
	// Generation 6â†’7 Ability Nerfs Reversed
	aerilate: {
		inherit: true,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Flying';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]); // Restore original 1.3x damage multiplier
		},
	},
	pixilate: {
		inherit: true,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]); // Restore original 1.3x damage multiplier
		},
	},
	refrigerate: {
		inherit: true,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ice';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]); // Restore original 1.3x damage multiplier
		},
	},
	galewings: {
		inherit: true,
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1; // Remove HP requirement - restore unlimited priority to Flying moves
		},
	},
	parentalbond: {
		// No inherit: true - we're completely overriding to avoid base game's 0.25 modifier
		onPrepareHit(source, target, move) {
			if (['iceball', 'rollout'].includes(move.id)) return;
			if (move.category === 'Status') return;
			// Allow Z-moves to work with Parental Bond
			if (move.isZ) {
				// Z-moves are allowed - continue to make them hit twice
			} else if (move.selfdestruct || move.multihit) {
				// Non-Z-moves with these properties are still blocked
				return;
			}
			if (['endeavor', 'fling', 'flail', 'reversal'].includes(move.id)) return;
			if (move.flags['charge'] || move.flags['recharge'] || move.spreadHit) return;
			move.multihit = 2;
			move.multihitType = 'parentalbond';
		},
		// Damage modifier (0.5 for second hit) is handled in formats.ts only
	},
	prankster: {
		inherit: true,
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		onModifyMove(move, source, target) {
			// Remove Dark-type immunity - restore full effectiveness vs all types
			if (move.pranksterBoosted && target && target.hasType('Dark')) {
				// Don't make the move fail
			}
		},
	},
	
	// Generation 5â†’6 Ability Nerfs Reversed - Weather Abilities
	drizzle: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('raindance', source, this.effect); // Restore permanent weather (remove turn limits)
		},
	},
	drought: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('sunnyday', source, this.effect); // Restore permanent weather (remove turn limits)
		},
	},
	sandstream: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('sandstorm', source, this.effect); // Restore permanent weather (remove turn limits)
		},
	},
	snowwarning: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('hail', source, this.effect); // Restore permanent weather (remove turn limits)
		},
	},
	
	// Earlier Generation Ability Nerfs Reversed
	magicguard: {
		inherit: true,
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
onSetStatus(status, target, source, effect) {
			if (status.id === 'par') return false; // Immunity to being fully paralyzed
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'toxicspikes') return null; // Prevents poisoning from Toxic Spikes
		},
	},
	arenatrap: {
		inherit: true,
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.isAdjacent(this.effectState.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (pokemon.isGrounded()) {
				pokemon.maybeTrapped = true;
			}
		},
	},
	shadowtag: {
		inherit: true,
		onFoeTrapPokemon(pokemon) {
			if (pokemon.hasAbility('shadowtag')) return;
			pokemon.tryTrap(true);
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || pokemon.hasAbility('shadowtag')) return;
			pokemon.maybeTrapped = true;
		},
	},
};
