export const Items: {[itemid: string]: ModdedItemData} = {
	souldew: {
		// Boosts Latios/Latias's SpAtk/SpDef by 50% (Pre-Gen 7)
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (['latios', 'latias'].includes(pokemon.baseSpecies.id)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (['latios', 'latias'].includes(pokemon.baseSpecies.id)) {
				return this.chainModify(1.5);
			}
		},
		desc: "If held by a Latias or Latios, its Sp. Atk and Sp. Def are 1.5x.",
	},
	berserkgene: {
		name: "Berserk Gene",
		fling: {
			basePower: 10,
		},
		onUpdate(pokemon) {
			// Activates immediately upon entering battle
			if (pokemon.isActive && !pokemon.transformed && !pokemon.volatiles['confusion']) {
				this.boost({atk: 2}, pokemon);
				pokemon.addVolatile('confusion');
				pokemon.useItem();
				this.add('-activate', pokemon, 'item: Berserk Gene');
			}
		},
		num: 0,
		gen: 2,
		isNonstandard: null,
		desc: "On switch-in, raises Attack by 2 stages and confuses the holder. Single use.",
		shortDesc: "+2 Attack and confusion on switch-in. Single use.",
	},
};
