export const Items: {[itemid: string]: ModdedItemData} = {
	// Restored Items
	berserkgene: {
		num: -1001,
		name: "Berserk Gene",
		spritenum: 388,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			this.boost({atk: 2}, pokemon, pokemon, this.effect);
			pokemon.addVolatile('confusion', pokemon, this.effect);
			pokemon.setItem(''); // Consumable item
		},
		desc: "On switch-in, raises holder's Attack by 2 stages and inflicts confusion. Single use.",
	},
	pinkbow: {
		num: -1002,
		name: "Pink Bow",
		spritenum: 444,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return this.chainModify([4505, 4096]); // 10% boost
			}
		},
		desc: "Holder's Normal-type attacks have 1.1x power.",
	},
	polkadotbow: {
		num: -1003,
		name: "Polkadot Bow",
		spritenum: 444,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return this.chainModify([4505, 4096]); // 10% boost
			}
		},
		desc: "Holder's Normal-type attacks have 1.1x power.",
	},
	souldew: {
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (['latios', 'latias'].includes(pokemon.baseSpecies.id)) {
				return this.chainModify(1.5); // Boosts Latios/Latias's SpAtk by 50%
			}
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (['latios', 'latias'].includes(pokemon.baseSpecies.id)) {
				return this.chainModify(1.5); // Boosts Latios/Latias's SpDef by 50%
			}
		},
		desc: "If held by a Latias or Latios, its Sp. Atk and Sp. Def are 1.5x.",
	},
	
	// Z-Crystals (restore all)
	aloraichiumz: {
		inherit: true,
		isNonstandard: null,
	},
	decidiumz: {
		inherit: true,
		isNonstandard: null,
	},
	eeviumz: {
		inherit: true,
		isNonstandard: null,
	},
	incinium: {
		inherit: true,
		isNonstandard: null,
	},
	lunaliumz: {
		inherit: true,
		isNonstandard: null,
	},
	lycaniumz: {
		inherit: true,
		isNonstandard: null,
	},
	marshadiumz: {
		inherit: true,
		isNonstandard: null,
	},
	mewniumz: {
		inherit: true,
		isNonstandard: null,
	},
	mimikiumz: {
		inherit: true,
		isNonstandard: null,
	},
	pikaniumz: {
		inherit: true,
		isNonstandard: null,
	},
	pikashuniumz: {
		inherit: true,
		isNonstandard: null,
	},
	primariumz: {
		inherit: true,
		isNonstandard: null,
	},
	snorliumz: {
		inherit: true,
		isNonstandard: null,
	},
	solganiumz: {
		inherit: true,
		isNonstandard: null,
	},
	tapuniumz: {
		inherit: true,
		isNonstandard: null,
	},
	ultranecroziumz: {
		inherit: true,
		isNonstandard: null,
	},
	kommoniumz: {
		inherit: true,
		isNonstandard: null,
	},
	
	// Generic Z-Crystals
	buginiumz: {
		inherit: true,
		isNonstandard: null,
	},
	darkiniumz: {
		inherit: true,
		isNonstandard: null,
	},
	dragoniumz: {
		inherit: true,
		isNonstandard: null,
	},
	electriumz: {
		inherit: true,
		isNonstandard: null,
	},
	fairiumz: {
		inherit: true,
		isNonstandard: null,
	},
	fightiniumz: {
		inherit: true,
		isNonstandard: null,
	},
	firiumz: {
		inherit: true,
		isNonstandard: null,
	},
	flyiniumz: {
		inherit: true,
		isNonstandard: null,
	},
	ghostiumz: {
		inherit: true,
		isNonstandard: null,
	},
	grassiumz: {
		inherit: true,
		isNonstandard: null,
	},
	groundiumz: {
		inherit: true,
		isNonstandard: null,
	},
	iciumz: {
		inherit: true,
		isNonstandard: null,
	},
	normaliumz: {
		inherit: true,
		isNonstandard: null,
	},
	poisoniumz: {
		inherit: true,
		isNonstandard: null,
	},
	psychiumz: {
		inherit: true,
		isNonstandard: null,
	},
	rockiumz: {
		inherit: true,
		isNonstandard: null,
	},
	steeliumz: {
		inherit: true,
		isNonstandard: null,
	},
	wateriumz: {
		inherit: true,
		isNonstandard: null,
	},
	
	// Mega Stones (restore all)
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditeX: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditeY: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	gengarite: {
		inherit: true,
		isNonstandard: null,
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwoniteX: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwoniteY: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	
	// Primal Orbs
	redorb: {
		inherit: true,
		isNonstandard: null,
	},
	blueorb: {
		inherit: true,
		isNonstandard: null,
	},
};
