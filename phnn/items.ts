export const Moves: {[moveid: string]: ModdedMoveData} = {
	// Power Changes
	nihillight: {
		inherit: true,
		basePower: 200, // 100 → 200 (corrected to match Bulbapedia)
		ignoreImmunity: { 'Dragon': true }
	},
	surf: {
		inherit: true,
		basePower: 95, // 90 → 95
		target: "allAdjacentFoes", // Hits all adjacent opponents, not teammates
	},
	thunderbolt: {
		inherit: true,
		basePower: 95, // 90 → 95
	},
	flamethrower: {
		inherit: true,
		basePower: 95, // 90 → 95
	},
	icebeam: {
		inherit: true,
		basePower: 95, // 90 → 95
	},
	psychic: {
		inherit: true,
		basePower: 95, // 90 → 95
		secondary: {
			chance: 33.2,
			boosts: {
				spa: -1,
				spd: -1,
			},
		}, // 33.2% chance to lower Special Attack AND Special Defense (Gen 1)
	},
	muddywater: {
		inherit: true,
		basePower: 95, // 90 → 95
	},
	blizzard: {
		inherit: true,
		basePower: 120, // 110 → 120
		// Accuracy stays at default 70% (Legends Z-A 100% removed)
		secondary: {
			chance: 30,
			status: 'frz',
		}, // 30% chance to freeze (Gen 1)
	},
	hydropump: {
		inherit: true,
		basePower: 120, // 110 → 120
	},
	thunder: {
		inherit: true,
		basePower: 120, // 110 → 120
		// Accuracy stays at default 70% (Legends Z-A 100% removed)
	},
	fireblast: {
		inherit: true,
		basePower: 120, // 110 → 120
		secondary: {
			chance: 30,
			status: 'brn',
		}, // 30% chance to burn (Gen 1)
	},
	hurricane: {
		inherit: true,
		basePower: 120, // 110 → 120
		// Accuracy stays at default 70% (Legends Z-A 100% removed)
	},
	focusblast: {
		inherit: true,
		// Accuracy stays at default 70% (Legends Z-A 100% removed)
	},
	dracometeor: {
		inherit: true,
		basePower: 140, // 130 → 140
	},
	leafstorm: {
		inherit: true,
		basePower: 140, // 130 → 140
	},
	overheat: {
		inherit: true,
		basePower: 140, // 130 → 140
	},
	skyattack: {
		inherit: true,
		basePower: 200,
	},
	solarbeam: {
		inherit: true,
		basePower: 200,
	},
	magmastorm: {
		inherit: true,
		basePower: 120,
		// Accuracy stays at default 75% (Legends Z-A 100% removed)
	},
	glaciallance: {
		inherit: true,
		basePower: 130, // 120 → 130
	},
	dig: {
		inherit: true,
		basePower: 100,
	},
	heatwave: {
		inherit: true,
		basePower: 100,
	},
	meteormash: {
		inherit: true,
		basePower: 100,
		// Accuracy stays at default 90% (Legends Z-A 100% removed)
	},
	aurasphere: {
		inherit: true,
		basePower: 90,
	},
	dragonpulse: {
		inherit: true,
		basePower: 90,
	},
	suckerpunch: {
		inherit: true,
		basePower: 80,
	},
	wickedblow: {
		inherit: true,
		basePower: 80,
	},
	megadrain: {
		inherit: true,
		basePower: 75,
	},
	grassyglide: {
		inherit: true,
		basePower: 70,
	},
	tackle: {
		inherit: true,
		basePower: 50,
	},
	feint: {
		inherit: true,
		basePower: 50,
	},
	absorb: {
		inherit: true,
		basePower: 40,
	},
	
	// Legends Z-A Accuracy Buffs REMOVED (except Will-O-Wisp)
	// The following moves NO LONGER have 100% accuracy from Legends Z-A:
	// - Thunder, Blizzard, Hurricane, Focus Blast, Magma Storm (stay at 70-75%)
	// - Stone Edge, Cross Chop (stay at 80%)
	// - Meteor Mash (stays at 90%)
	// - Dynamic Punch, Inferno, Zap Cannon (stay at 50%)
	// - Mega Kick (stays at 75%)
	
	// Traditional Accuracy Nerfs Reversed (these stay)
	hypnosis: {
		inherit: true,
		accuracy: 70, // 60 → 70 (Gen 1-4)
	},
	darkvoid: {
		inherit: true,
		accuracy: 80, // 50 → 80 (Pre-Gen 7)
		// Remove species restriction - handled in onTryMove
	},
	swagger: {
		inherit: true,
		accuracy: 90, // 85 → 90 (Gen 2-6)
	},
	willowisp: {
		inherit: true,
		accuracy: 100, // 85 → 100 (KEPT - only Legends Z-A accuracy buff retained)
	},
	thunderwave: {
		inherit: true,
		accuracy: 100, // 90 → 100 (Gen 1-6)
	},
	bide: {
		inherit: true,
		accuracy: true, // Never misses
	},
	memento: {
		inherit: true,
		accuracy: true, // Never misses
	},
	nightmare: {
		inherit: true,
		accuracy: true, // Never misses
	},
	
	// PP Restorations
	acidarmor: {
		inherit: true,
		pp: 40, // 20 → 40 (Gen 1)
	},
	covet: {
		inherit: true,
		pp: 40, // 25 → 40 (Gen 3-5)
	},
	growth: {
		inherit: true,
		pp: 40, // 20 → 40 (Gen 1-5)
	},
	barrier: {
		inherit: true,
		pp: 30, // 20 → 30 (Gen 1-5)
	},
	extrasensory: {
		inherit: true,
		pp: 30, // 20 → 30 (Gen 3-5)
	},
	swordsdance: {
		inherit: true,
		pp: 30, // 20 → 30 (Gen 1-5)
	},
	tailwind: {
		inherit: true,
		pp: 30, // 15 → 30 (Gen 4-5)
	},
	jumpkick: {
		inherit: true,
		pp: 25, // 10 → 25 (Gen 1-4)
	},
	submission: {
		inherit: true,
		pp: 25, // 20 → 25 (Gen 1-5)
	},
	recover: {
		inherit: true,
		pp: 20, // 10 → 20 (Gen 1-3)
	},
	hijumpkick: {
		inherit: true,
		pp: 20, // 10 → 20 (Gen 1-4)
	},
	petaldance: {
		inherit: true,
		pp: 20, // 10 → 20 (Gen 1-4)
	},
	thrash: {
		inherit: true,
		pp: 20, // 10 → 20 (Gen 1-4)
	},
	airslash: {
		inherit: true,
		pp: 20, // 15 → 20 (Gen 4-5)
	},
	minimize: {
		inherit: true,
		pp: 20, // 10 → 20 (Gen 1-5)
	},
	sacredsword: {
		inherit: true,
		pp: 20, // 15 → 20 (Gen 5)
	},
	futuresight: {
		inherit: true,
		pp: 15, // 10 → 15 (Gen 2-4)
	},
	outrage: {
		inherit: true,
		pp: 15, // 10 → 15 (Gen 2-4)
	},
	synchronoise: {
		inherit: true,
		pp: 15, // 10 → 15 (Gen 5)
	},
	barbbarrage: {
		inherit: true,
		pp: 15, // 10 → 15
	},
	bittermalice: {
		inherit: true,
		pp: 15, // 10 → 15
	},
	triplearrows: {
		inherit: true,
		pp: 15, // 10 → 15
	},
	lunarblessing: {
		inherit: true,
		pp: 10, // 5 → 10
		boosts: {
			evasion: 1,
		}, // Increases evasion
	},
	milkdrink: {
		inherit: true,
		pp: 10, // 5 → 10 (Gen 2-8)
	},
	rest: {
		inherit: true,
		pp: 10, // 5 → 10 (Gen 1-8)
	},
	roost: {
		inherit: true,
		pp: 10, // 5 → 10 (Gen 4-8)
	},
	shoreup: {
		inherit: true,
		pp: 10, // 5 → 10 (Gen 7-8)
	},
	slackoff: {
		inherit: true,
		pp: 10, // 5 → 10 (Gen 3-8)
	},
	softboiled: {
		inherit: true,
		pp: 10, // 5 → 10 (Gen 1-8)
	},
	
	// Additional Effect Changes (Gen 1 Mechanics)
	sludge: {
		inherit: true,
		secondary: {
			chance: 40,
			status: 'psn',
		}, // 40% chance to poison (Gen 1)
	},
	acid: {
		inherit: true,
		secondary: {
			chance: 33.2,
			boosts: {
				def: -1,
			},
		}, // 33.2% chance to lower Defense (Gen 1)
	},
	aurorabeam: {
		inherit: true,
		secondary: {
			chance: 33.2,
			boosts: {
				atk: -1,
			},
		}, // 33.2% chance to lower Attack (Gen 1)
	},
	bubble: {
		inherit: true,
		secondary: {
			chance: 33.2,
			boosts: {
				spe: -1,
			},
		}, // 33.2% chance to lower Speed (Gen 1)
	},
	bubblebeam: {
		inherit: true,
		secondary: {
			chance: 33.2,
			boosts: {
				spe: -1,
			},
		}, // 33.2% chance to lower Speed (Gen 1)
	},
	constrict: {
		inherit: true,
		secondary: {
			chance: 33.2,
			boosts: {
				spe: -1,
			},
		}, // 33.2% chance to lower Speed (Gen 1)
	},
	razorwind: {
		inherit: true,
		critRatio: 2, // Increased crit ratio (Gen 1)
	},
	kingsshield: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target, source, move) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidfire'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.boost({atk: -2}, source, target, this.dex.getActiveMove("King's Shield")); // -2 Atk if attacker makes contact (Pre-Gen 8)
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && move.flags['contact']) {
					this.boost({atk: -2}, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
	},
	amnesia: {
		inherit: true,
		boosts: {
			spa: 2,
			spd: 2,
		}, // Raises user's Special Defense AND Special Attack by two stages (Gen 1)
	},
	doubleedge: {
		inherit: true,
		recoil: [1, 4], // Recoil ¼ damage instead of ⅓ (Gen 1)
	},
	firefang: {
		inherit: true,
		onEffectiveness(typeMod, target, type) {
			// Hits through Wonder Guard
			if (target.hasAbility('wonderguard')) return 1;
		},
	},
	hyperbeam: {
		inherit: true,
		onAfterMove(pokemon, target, move) {
			if (target.fainted) return; // No recharge turn if target is KO'd (Gen 1)
			pokemon.addVolatile('mustrecharge');
		},
	},
	sheercold: {
		inherit: true,
		onTryHit(target, source) {
			// Ice-types are no longer immune
			return this.randomChance(1, 1);
		},
	},
	superfang: {
		inherit: true,
		ignoreImmunity: {'Normal': true}, // Allows Super Fang to hit Ghost-types (Gen 1)
	},
	
	// Priority Changes
	roar: {
		inherit: true,
		priority: -1, // -6 → -1 (Gen 1-5)
	},
	whirlwind: {
		inherit: true,
		priority: -1, // -6 → -1 (Gen 1-5)
	},
	followme: {
		inherit: true,
		priority: 3, // 2 → 3 (Gen 3-5)
	},
	ragepowder: {
		inherit: true,
		priority: 3, // 2 → 3 (Gen 5)
	},
	
	// Restore Self-Destruct / Explosion mechanic
	selfdestruct: {
		inherit: true,
		onModifyMove(move, pokemon) {
			// Cause opposing defenses to be halved (Gen 1-4)
			move.defensiveCategory = 'Special';
		},
	},
	explosion: {
		inherit: true,
		onModifyMove(move, pokemon) {
			// Cause opposing defenses to be halved (Gen 1-4)
			move.defensiveCategory = 'Special';
		},
	},
	
	// Remove move restrictions - signature moves
	// These will be handled in the onTryMove function in scripts.ts
	
	// Hidden Power restoration
	hiddenpower: {
		inherit: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			// Variable BP based on IVs (Gen 2-5 formula)
			const ivs = pokemon.ivs;
			const hpTypes = [
				'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel',
				'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark'
			];
			let hpIv = Math.floor(((ivs.atk % 2) + 2 * (ivs.def % 2) + 4 * (ivs.spe % 2) + 8 * (ivs.spa % 2) + 16 * (ivs.spd % 2) + 32 * (ivs.hp % 2)) * 15 / 63);
			return Math.floor(((Math.floor((ivs.atk % 4) / 2) + 2 * Math.floor((ivs.def % 4) / 2) + 4 * Math.floor((ivs.spe % 4) / 2) + 8 * Math.floor((ivs.spa % 4) / 2) + 16 * Math.floor((ivs.spd % 4) / 2) + 32 * Math.floor((ivs.hp % 4) / 2)) * 40 / 63) + 30);
		},
	},
	
	// Legends: Arceus Exclusive Moves
	ceaselessedge: {
		inherit: true,
		critRatio: 2, // High crit ratio
		// Damages target with Splinters handled in scripts
	},
	stoneaxe: {
		inherit: true,
		critRatio: 2, // High crit ratio
		// Damages target with Splinters handled in scripts
	},

	clangoroussoulblaze: {
		inherit: true,
		onAfterMove(source, target, move) {
			// Special handling for Parental Bond - apply boosts on each hit
			if (source.hasAbility('parentalbond') && move.multihitType === 'parentalbond') {
				// Apply +1 to all stats on each hit (will happen twice total)
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, source, source, move);
			}
		},
	},
	
	// Defog - Can lower evasion through Substitute
	defog: {
		inherit: true,
		onHit(target, source, move) {
			// Clear hazards on both sides
			const targetSide = target.side;
			const sourceSide = source.side;
			
			// Clear target side hazards
			if (targetSide.removeSideCondition('reflect')) {
				this.add('-sideend', targetSide, 'Reflect', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('lightscreen')) {
				this.add('-sideend', targetSide, 'Light Screen', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('auroraveil')) {
				this.add('-sideend', targetSide, 'Aurora Veil', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('safeguard')) {
				this.add('-sideend', targetSide, 'Safeguard', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('mist')) {
				this.add('-sideend', targetSide, 'Mist', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('spikes')) {
				this.add('-sideend', targetSide, 'Spikes', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('toxicspikes')) {
				this.add('-sideend', targetSide, 'Toxic Spikes', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('stealthrock')) {
				this.add('-sideend', targetSide, 'Stealth Rock', '[from] move: Defog', '[of] ' + source);
			}
			if (targetSide.removeSideCondition('stickyweb')) {
				this.add('-sideend', targetSide, 'Sticky Web', '[from] move: Defog', '[of] ' + source);
			}
			
			// Clear source side hazards
			if (sourceSide.removeSideCondition('spikes')) {
				this.add('-sideend', sourceSide, 'Spikes', '[from] move: Defog', '[of] ' + source);
			}
			if (sourceSide.removeSideCondition('toxicspikes')) {
				this.add('-sideend', sourceSide, 'Toxic Spikes', '[from] move: Defog', '[of] ' + source);
			}
			if (sourceSide.removeSideCondition('stealthrock')) {
				this.add('-sideend', sourceSide, 'Stealth Rock', '[from] move: Defog', '[of] ' + source);
			}
			if (sourceSide.removeSideCondition('stickyweb')) {
				this.add('-sideend', sourceSide, 'Sticky Web', '[from] move: Defog', '[of] ' + source);
			}
			
			// Clear terrain
			this.field.clearTerrain();
			
			// Lower evasion even through Substitute (Gen 6 behavior)
			// This is the key restoration - Defog bypasses Substitute for evasion drop
			this.boost({evasion: -1}, target, source, move);
		},
	},
};
