export const Items: {[itemid: string]: ModdedItemData} = {
	souldew: {
		// Boosts Latios/Latias's SpAtk/SpDef by 50%
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
};
