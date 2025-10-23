export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	// Gen 1 Special Stat Split Fixes
	abra: {
		inherit: true,
		baseStats: {hp: 25, atk: 20, def: 15, spa: 105, spd: 105, spe: 90}, // SpDef 55 → 105
	},
	alakazam: {
		inherit: true,
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 135, spe: 120}, // SpDef 85 → 135
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85}, // SpDef 85 → 125
	},
	bellsprout: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 35, spa: 70, spd: 70, spe: 40}, // SpDef 35 → 70
	},
	chansey: {
		inherit: true,
		baseStats: {hp: 250, atk: 5, def: 5, spa: 105, spd: 105, spe: 50}, // SpAtk 35 → 105
	},
	cloyster: {
		inherit: true,
		baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 85, spe: 70}, // SpDef 45 → 85
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70}, // SpAtk 70 → 95
	},
	diglett: {
		inherit: true,
		baseStats: {hp: 10, atk: 55, def: 25, spa: 45, spd: 45, spe: 95}, // SpAtk 35 → 45
	},
	drowzee: {
		inherit: true,
		baseStats: {hp: 60, atk: 48, def: 45, spa: 90, spd: 90, spe: 42}, // SpAtk 43 → 90
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 35, atk: 100, def: 50, spa: 70, spd: 70, spe: 120}, // SpAtk 50 → 70
	},
	eevee: {
		inherit: true,
		baseStats: {hp: 55, atk: 55, def: 50, spa: 65, spd: 65, spe: 55}, // SpAtk 45 → 65
	},
	exeggcute: {
		inherit: true,
		baseStats: {hp: 60, atk: 40, def: 80, spa: 60, spd: 60, spe: 40}, // SpDef 45 → 60
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 125, spe: 55}, // SpDef 65 → 125
	},
	flareon: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 60, spa: 110, spd: 110, spe: 65}, // SpAtk 95 → 110
	},
	gastly: {
		inherit: true,
		baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 100, spe: 80}, // SpDef 35 → 100
	},
	gengar: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 130, spe: 110}, // SpDef 75 → 130
	},
	gloom: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 85, spe: 40}, // SpDef 75 → 85
	},
	golbat: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 70, spa: 75, spd: 75, spe: 90}, // SpAtk 65 → 75
	},
	goldeen: {
		inherit: true,
		baseStats: {hp: 45, atk: 67, def: 60, spa: 50, spd: 50, spe: 63}, // SpAtk 35 → 50
	},
	gyarados: {
		inherit: true,
		baseStats: {hp: 95, atk: 125, def: 79, spa: 100, spd: 100, spe: 81}, // SpAtk 60 → 100
	},
	haunter: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 45, spa: 115, spd: 115, spe: 95}, // SpDef 55 → 115
	},
	horsea: {
		inherit: true,
		baseStats: {hp: 30, atk: 40, def: 70, spa: 70, spd: 70, spe: 60}, // SpDef 25 → 70
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67}, // SpAtk 73 → 115
	},
	jolteon: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 110, spe: 130}, // SpDef 95 → 110
	},
	kabutops: {
		inherit: true,
		baseStats: {hp: 60, atk: 115, def: 105, spa: 70, spd: 70, spe: 80}, // SpAtk 65 → 70
	},
	kadabra: {
		inherit: true,
		baseStats: {hp: 40, atk: 35, def: 30, spa: 120, spd: 120, spe: 105}, // SpDef 70 → 120
	},
	kangaskhan: {
		inherit: true,
		baseStats: {hp: 105, atk: 95, def: 80, spa: 80, spd: 80, spe: 90}, // SpAtk 40 → 80
	},
	koffing: {
		inherit: true,
		baseStats: {hp: 40, atk: 65, def: 95, spa: 60, spd: 60, spe: 35}, // SpDef 45 → 60
	},
	lapras: {
		inherit: true,
		baseStats: {hp: 130, atk: 85, def: 80, spa: 95, spd: 95, spe: 60}, // SpAtk 85 → 95
	},
	magikarp: {
		inherit: true,
		baseStats: {hp: 20, atk: 10, def: 55, spa: 20, spd: 20, spe: 80}, // SpAtk 15 → 20
	},
	magnemite: {
		inherit: true,
		baseStats: {hp: 25, atk: 35, def: 70, spa: 95, spd: 95, spe: 45}, // SpDef 55 → 95
	},
	magneton: {
		inherit: true,
		baseStats: {hp: 50, atk: 60, def: 95, spa: 120, spd: 120, spe: 70}, // SpDef 70 → 120
	},
	mewtwo: {
		inherit: true,
		baseStats: {hp: 106, atk: 110, def: 90, spa: 154, spd: 154, spe: 130}, // SpDef 90 → 154
	},
	moltres: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 125, spe: 90}, // SpDef 85 → 125
	},
	ninetales: {
		inherit: true,
		baseStats: {hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100}, // SpAtk 81 → 100
	},
	oddish: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 75, spe: 30}, // SpDef 65 → 75
	},
	omanyte: {
		inherit: true,
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 90, spe: 35}, // SpDef 55 → 90
	},
	omastar: {
		inherit: true,
		baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 115, spe: 55}, // SpDef 70 → 115
	},
	paras: {
		inherit: true,
		baseStats: {hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 25}, // SpAtk 45 → 55
	},
	parasect: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 80, spa: 80, spd: 80, spe: 30}, // SpAtk 60 → 80
	},
	pikachu: {
		inherit: true,
		baseStats: {hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90}, // SpDef 40 → 50
	},
	raichu: {
		inherit: true,
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 90, spe: 110}, // SpDef 80 → 90
	},
	sandshrew: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 85, spa: 30, spd: 30, spe: 40}, // SpAtk 20 → 30
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 110, spa: 55, spd: 55, spe: 65}, // SpAtk 45 → 55
	},
	seadra: {
		inherit: true,
		baseStats: {hp: 55, atk: 65, def: 95, spa: 95, spd: 95, spe: 85}, // SpDef 45 → 95
	},
	seaking: {
		inherit: true,
		baseStats: {hp: 80, atk: 92, def: 65, spa: 80, spd: 80, spe: 68}, // SpAtk 65 → 80
	},
	seel: {
		inherit: true,
		baseStats: {hp: 65, atk: 45, def: 55, spa: 70, spd: 70, spe: 45}, // SpAtk 45 → 70
	},
	shellder: {
		inherit: true,
		baseStats: {hp: 30, atk: 65, def: 100, spa: 45, spd: 45, spe: 40}, // SpDef 25 → 45
	},
	starmie: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 100, spe: 115}, // SpDef 85 → 100
	},
	staryu: {
		inherit: true,
		baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 70, spe: 85}, // SpDef 55 → 70
	},
	tangela: {
		inherit: true,
		baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60}, // SpDef 40 → 100
	},
	tauros: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110}, // SpAtk 40 → 70
	},
	tentacool: {
		inherit: true,
		baseStats: {hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70}, // SpDef 50 → 100
	},
	tentacruel: {
		inherit: true,
		baseStats: {hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100}, // SpDef 80 → 120
	},
	vaporeon: {
		inherit: true,
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 110, spe: 65}, // SpDef 95 → 110
	},
	venomoth: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 60, spa: 90, spd: 90, spe: 90}, // SpDef 75 → 90
	},
	victreebel: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 100, spe: 70}, // SpDef 60 → 100
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 85, spa: 110, spd: 100, spe: 50}, // SpDef 90 → 100
	},
	vulpix: {
		inherit: true,
		baseStats: {hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65}, // SpAtk 50 → 65
	},
	weepinbell: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 50, spa: 85, spd: 85, spe: 55}, // SpDef 45 → 85
	},
	weezing: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 85, spe: 60}, // SpDef 70 → 85
	},
	zapdos: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 125, spe: 100}, // SpDef 90 → 125
	},
	zubat: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 55}, // SpAtk 30 → 40
	},
	
	// Later Generation Base Stat Nerfs Reversed
	// Generation 8
	aegislash: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 150, spa: 50, spd: 150, spe: 60},
		otherFormes: ['Aegislash-Blade'],
	},
	aegislashblade: {
		inherit: true,
		baseStats: {hp: 60, atk: 150, def: 50, spa: 150, spd: 50, spe: 60}, // Attack & SpAtk 140 → 150
	},
	
	// Generation 9
	zacian: {
		inherit: true,
		baseStats: {hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138}, // Atk 120 → 130
	},
	zaciancrowned: {
		inherit: true,
		baseStats: {hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148}, // Atk 150 → 170
	},
	zamazenta: {
		inherit: true,
		baseStats: {hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138}, // Atk 120 → 130
	},
	zamazentacrowned: {
		inherit: true,
		baseStats: {hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128}, // Atk 120 → 130, Def & SpDef 140 → 145
	},
	
	// Treasures of Ruin (Pre-Update)
	chienpao: {
		inherit: true,
		baseStats: {hp: 80, atk: 130, def: 80, spa: 90, spd: 65, spe: 135}, // 130 Atk
	},
	wochien: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 100, spa: 100, spd: 135, spe: 70}, // 90 Atk, 100 SpAtk
	},
	chiyu: {
		inherit: true,
		baseStats: {hp: 55, atk: 80, def: 80, spa: 145, spd: 120, spe: 100}, // 145 SpAtk
	},
	tinglu: {
		inherit: true,
		baseStats: {hp: 165, atk: 110, def: 130, spa: 55, spd: 80, spe: 45}, // 165 HP, 130 Def, 55 SpAtk
	},
	
	// Eternamax
	eternatuseternamax: {
		inherit: true,
		num: 890,
		name: "Eternatus-Eternamax",
		baseSpecies: "Eternatus",
		forme: "Eternamax",
		types: ["Poison", "Dragon"],
		baseStats: {hp: 255, atk: 115, def: 250, spa: 125, spd: 250, spe: 130},
		abilities: {0: "Pressure"},
		heightm: 100,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		battleOnly: "Eternatus",
	},
	
	// Add Pokestar Studio Pokemon (simplified versions)
	blackbelt: {
		num: -1001,
		name: "Black Belt",
		types: ["Fighting"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "No Guard"},
		heightm: 1.8,
		weightkg: 80,
		color: "Black",
		eggGroups: ["Human-Like"],
	},
	blackdoor: {
		num: -1002,
		name: "Black Door",
		types: ["Dark"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Shadow Tag"},
		heightm: 2.0,
		weightkg: 100,
		color: "Black",
		eggGroups: ["Amorphous"],
	},
	brycenman: {
		num: -1003,
		name: "Brycen-Man",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Ice Body"},
		heightm: 1.8,
		weightkg: 75,
		color: "Blue",
		eggGroups: ["Human-Like"],
	},
	f00: {
		num: -1004,
		name: "F-00",
		types: ["Steel"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Levitate"},
		heightm: 1.5,
		weightkg: 200,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	humanoid: {
		num: -1005,
		name: "Humanoid",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Normalize"},
		heightm: 1.7,
		weightkg: 70,
		color: "White",
		eggGroups: ["Human-Like"],
	},
	majin: {
		num: -1006,
		name: "Majin",
		types: ["Psychic"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Magic Guard"},
		heightm: 2.5,
		weightkg: 120,
		color: "Purple",
		eggGroups: ["Human-Like"],
	},
	mt: {
		num: -1007,
		name: "MT",
		types: ["Steel", "Electric"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Motor Drive"},
		heightm: 3.0,
		weightkg: 500,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	mt2: {
		num: -1008,
		name: "MT2",
		types: ["Steel", "Fire"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Flash Fire"},
		heightm: 3.2,
		weightkg: 550,
		color: "Red",
		eggGroups: ["Mineral"],
	},
	monica: {
		num: -1009,
		name: "Monica",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Cute Charm"},
		heightm: 1.6,
		weightkg: 55,
		color: "Pink",
		eggGroups: ["Human-Like"],
	},
	monster: {
		num: -1010,
		name: "Monster",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Intimidate"},
		heightm: 4.0,
		weightkg: 800,
		color: "Black",
		eggGroups: ["Dragon"],
	},
	transport: {
		num: -1011,
		name: "Transport",
		types: ["Steel", "Flying"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Levitate"},
		heightm: 5.0,
		weightkg: 1000,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	ufo: {
		num: -1012,
		name: "UFO",
		types: ["Psychic", "Steel"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Levitate"},
		heightm: 2.0,
		weightkg: 300,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	ufo2: {
		num: -1013,
		name: "UFO 2",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Levitate"},
		heightm: 2.2,
		weightkg: 320,
		color: "Blue",
		eggGroups: ["Mineral"],
	},
	whitedoor: {
		num: -1014,
		name: "White Door",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Wonder Guard"},
		heightm: 2.0,
		weightkg: 100,
		color: "White",
		eggGroups: ["Amorphous"],
	},
};
