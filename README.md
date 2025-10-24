<div align="center">

![Mewtwo](https://i.ibb.co/qfKMGc9/Mewtwo-Gen1-NN.png)

# **PURE HACKMONS: NO NERFS**

![Eternamax](https://i.ibb.co/GfpjyjLP/Emax-Gen8-NN.png)

*Where every Pokémon reaches their peak potential*

[![Pokemon Showdown](https://img.shields.io/badge/Pokemon-Showdown-orange)](https://pokemonshowdown.com/)
[![OG PH Format](https://img.shields.io/badge/Format-Pure%20Hackmons-red)](https://www.smogon.com/dex/ss/formats/pure-hackmons/)

</div>

---

## 📖 Table of Contents

- [Introduction](#introduction)
- [Core Principles](#core-principles)
- [Installation & Setup](#installation--setup)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
  - [Making Your Server Public with Cloudflare](#making-your-server-public-with-cloudflare)
- [Format Details](#format-details)
  - [Pokémon Restorations](#pokémon-restorations)
  - [Move Restorations](#move-restorations)
  - [Ability Restorations](#ability-restorations)
  - [Item Restorations](#item-restorations)
  - [Mechanics Restorations](#mechanics-restorations)
  - [Format Rules](#format-rules)
- [Contributors](#contributors)
- [Additional Information](#additional-information)

---

## 🌟 Introduction

Close your eyes. Imagine a Pokémon format where the sky was limitless, where you could use all the broken mechanics across every generation of Pokémon games. Imagine a format where Mewtwo's Special Defense was 154, where Zacian-Crowned had an Attack of 170, and where moves like Surf have 95 Base Power, while Thunder has 120 Base Power. 

Now open your eyes. **Welcome to Pokémon Pure Hackmons: No Nerfs**, the format where every move is legal, every ability is legal, and every Pokémon across all generations can be played at their peak.

---

## ⚡ Core Principles

- **Every Pokémon gets access to every move, ability, and hold item from every generation**
- **All stats, moves, and abilities function at their peak from their strongest generation**
- **Signature restrictions are removed** (Dark Void, Permanent Megas, etc.)
- **All battle mechanics coexist** (Mega-evolutions/Primal, Z-moves, Dynamax/Gigantamax*, Terastallize, and permanent forms of Pokémon such as Ultra-Necrozma, Eternamax, etc.)
- **Classic broken mechanics return** (Toxic/Leech Seed exploit, Paraconfusion buff, etc.)
- **Support for Singles, Doubles, and Triples**

> *Note: As of now, the use of Dynamax/Gigantamax is NOT supported on Pokémon Showdown in Gen 9 alongside Terastallize. Additionally, Mega-Evolving/Ultra-Necrozma'ing will NOT allow one to additionally Terastallize afterwards. It's kind of one-or-the-other. However, in an "ideal" PHNN format, this would all be possible.

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [Git](https://git-scm.com/)
- A text editor (VS Code, Sublime Text, etc.)

### Local Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/pure-hackmons-no-nerfs.git
cd pure-hackmons-no-nerfs
```

#### Step 2: Set Up Pokémon Showdown

Clone the Pokémon Showdown server:

```bash
git clone https://github.com/smogon/pokemon-showdown.git
cd pokemon-showdown
```

Install dependencies:

```bash
npm install
```

#### Step 3: Install the Pure Hackmons No Nerfs Mod

Copy the phnn folder from this repository into the /data/mods folder of the showdown local repo.

Next, replace the format.ts file in the parent directory of this repo with the format.ts file in showdown's config folder.

If you want an AI bot to play against solo, feel free to keep the leftovers-again folder, which is a modified fork of https://github.com/dramamine/leftovers-again (6 years old).

#### Step 4: Configure the Format

Change the name of your leftovers-again bot by editing the <INSERT_YOUR_NICKNAME_HERE> in /src/bot.js

You can edit your `config/formats.ts` file to include the additional "No Nerfs" formats:

```typescript
{
    section: "Example Format",
    column: 3,
},
{
    name: "[Gen 9] Pure Hackmons No Nerfs",
    mod: 'pure-hackmons-no-nerfs',
    ruleset: ['Standard', 'Overflow Stat Mod', '!Obtainable'],
    banlist: ['Endure + Custap Berry'],
    unbanlist: ['All Pokemon', 'All Abilities', 'All Moves', 'All Items'],
}
```

Additionally, for leftovers-again, bot teams can be modified in /src/bot.js

#### Step 5: Start the Server

From your `pokemon-showdown` directory:

```bash
node pokemon-showdown start
```

Your local server should now be running at `http://localhost:8000`!

#### Step 6: Connect to Your Server

1. Open your web browser
2. Go to `http://localhost:8000`
3. Click on "Choose a format" and select **[Gen 9] Pure Hackmons No Nerfs**
4. Start battling with your restored Pokémon!

---

### Making Your Server Public with Cloudflare

Want to play with friends? Make your local server accessible over the internet using Cloudflare Tunnels!

#### Step 1: Create a Cloudflare Account

1. Go to [cloudflare.com](https://www.cloudflare.com/)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Install Cloudflared

**Windows:**
1. Download cloudflared from the [Cloudflare releases page](https://github.com/cloudflare/cloudflared/releases)
2. Extract the downloaded file
3. Move `cloudflared.exe` to a folder in your PATH (e.g., `C:\Windows\System32`)

**macOS:**
```bash
brew install cloudflared
```

**Linux:**
```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

#### Step 3: Authenticate Cloudflared

```bash
cloudflared tunnel login
```

This will open a browser window. Select the domain you want to use (or use Cloudflare's free subdomain).

#### Step 4: Create a Tunnel

```bash
cloudflared tunnel create pokemon-showdown
```

This creates a tunnel and generates a tunnel ID. Take note of this ID.

#### Step 5: Configure the Tunnel

Create a configuration file at `~/.cloudflared/config.yml` (Windows: `%USERPROFILE%\.cloudflared\config.yml`):

```yaml
tunnel: YOUR-TUNNEL-ID
credentials-file: /path/to/.cloudflared/YOUR-TUNNEL-ID.json

ingress:
  - hostname: your-domain.com
    service: http://localhost:8000
  - service: http_status:404
```

Replace:
- `YOUR-TUNNEL-ID` with your actual tunnel ID
- `/path/to/.cloudflared/YOUR-TUNNEL-ID.json` with the actual path to your credentials file
- `your-domain.com` with your domain (or use a `*.trycloudflare.com` subdomain for testing)

#### Step 6: Route the Tunnel

Create a DNS record pointing to your tunnel:

```bash
cloudflared tunnel route dns pokemon-showdown your-domain.com
```

Or use a quick tunnel for testing (no domain required):

```bash
cloudflared tunnel --url http://localhost:8000
```

This will give you a temporary `*.trycloudflare.com` URL.

#### Step 7: Start the Tunnel

```bash
cloudflared tunnel run pokemon-showdown
```

Or for quick testing:

```bash
cloudflared tunnel --url http://localhost:8000
```

Your Pokémon Showdown server is now publicly accessible! Share your URL with friends to battle together.

#### Keeping the Tunnel Running

**On Windows (using NSSM):**
1. Download [NSSM](https://nssm.cc/download)
2. Install cloudflared as a service:
   ```bash
   nssm install CloudflaredTunnel "C:\path\to\cloudflared.exe" tunnel run pokemon-showdown
   nssm start CloudflaredTunnel
   ```

**On Linux/macOS:**
Use systemd or create a startup script to run cloudflared on boot.

#### Desktop Shortcuts

The .sh files in the root of this repo are desktop icons I have on my Linux machine.

(You will need to literally type "node pokemon-showdown" to start the server. don't ask)

Don't forget to chmod these shortcuts and also remember to replace <YOUR_DIRECTORY> in them.

---

## 📋 Format Details

### Pokémon Restorations

#### Base Stat Restorations

**Gen 1 Special Stat Split Fixes**

The Gen 1 Special stat was split into Special Attack and Special Defense in Gen 2. This mod restores the original Gen 1 Special stat, giving many Pokémon significant buffs:

<details>
<summary><b>Click to view all Gen 1 restorations (95 Pokémon affected)</b></summary>

- **Abra**: SpDef 55 → 105 (+50)
- **Alakazam**: SpDef 85 → 135 (+50)
- **Articuno**: SpDef 85 → 125 (+40)
- **Bellsprout**: SpDef 35 → 70 (+35)
- **Chansey**: SpAtk 35 → 105 (+70)
- **Cloyster**: SpDef 45 → 85 (+40)
- **Dewgong**: SpAtk 70 → 95 (+25)
- **Diglett**: SpAtk 35 → 45 (+10)
- **Drowzee**: SpAtk 43 → 90 (+47)
- **Dugtrio**: SpAtk 50 → 70 (+20)
- **Eevee**: SpAtk 45 → 65 (+20)
- **Exeggcute**: SpDef 45 → 60 (+15)
- **Exeggutor**: SpDef 65 → 125 (+60)
- **Flareon**: SpAtk 95 → 110 (+15)
- **Gastly**: SpDef 35 → 100 (+65)
- **Gengar**: SpDef 75 → 130 (+55)
- **Gloom**: SpDef 75 → 85 (+10)
- **Golbat**: SpAtk 65 → 75 (+10)
- **Goldeen**: SpAtk 35 → 50 (+15)
- **Gyarados**: SpAtk 60 → 100 (+40)
- **Haunter**: SpDef 55 → 115 (+60)
- **Horsea**: SpDef 25 → 70 (+45)
- **Hypno**: SpAtk 73 → 115 (+42)
- **Jolteon**: SpDef 95 → 110 (+15)
- **Kabutops**: SpAtk 65 → 70 (+5)
- **Kadabra**: SpDef 70 → 120 (+50)
- **Kangaskhan**: SpAtk 40 → 80 (+40)
- **Koffing**: SpDef 45 → 60 (+15)
- **Lapras**: SpAtk 85 → 95 (+10)
- **Magikarp**: SpAtk 15 → 20 (+5)
- **Magnemite**: SpDef 55 → 95 (+40)
- **Magneton**: SpDef 70 → 120 (+50)
- **Mewtwo**: SpDef 90 → 154 (+64) ⚡
- **Moltres**: SpDef 85 → 125 (+40)
- **Ninetales**: SpAtk 81 → 100 (+19)
- **Oddish**: SpDef 65 → 75 (+10)
- **Omanyte**: SpDef 55 → 90 (+35)
- **Omastar**: SpDef 70 → 115 (+45)
- **Paras**: SpAtk 45 → 55 (+10)
- **Parasect**: SpAtk 60 → 80 (+20)
- **Pikachu**: SpDef 40 → 50 (+10)
- **Raichu**: SpDef 80 → 90 (+10)
- **Sandshrew**: SpAtk 20 → 30 (+10)
- **Sandslash**: SpAtk 45 → 55 (+10)
- **Seadra**: SpDef 45 → 95 (+50)
- **Seaking**: SpAtk 65 → 80 (+15)
- **Seel**: SpAtk 45 → 70 (+25)
- **Shellder**: SpDef 25 → 45 (+20)
- **Starmie**: SpDef 85 → 100 (+15)
- **Staryu**: SpDef 55 → 70 (+15)
- **Tangela**: SpDef 40 → 100 (+60)
- **Tauros**: SpAtk 40 → 70 (+30)
- **Tentacool**: SpDef 50 → 100 (+50)
- **Tentacruel**: SpDef 80 → 120 (+40)
- **Vaporeon**: SpDef 95 → 110 (+15)
- **Venomoth**: SpDef 75 → 90 (+15)
- **Victreebel**: SpDef 60 → 100 (+40)
- **Vileplume**: SpDef 90 → 100 (+10)
- **Vulpix**: SpAtk 50 → 65 (+15)
- **Weepinbell**: SpDef 45 → 85 (+40)
- **Weezing**: SpDef 70 → 85 (+15)
- **Zapdos**: SpDef 90 → 125 (+35)
- **Zubat**: SpAtk 30 → 40 (+10)

</details>

**Later Generation Base Stat Nerfs Reversed**

- **Aegislash (Blade)**: Attack 140 → 150, Special Attack 140 → 150
- **Aegislash (Shield)**: Defense 140 → 150, Special Defense 140 → 150
- **Zacian (Hero)**: Atk 120 → 130
- **Zacian (Crowned)**: Atk 150 → 170 ⚔️
- **Zamazenta (Hero)**: Atk 120 → 130
- **Zamazenta (Crowned)**: Atk 120 → 130, Def & SpDef 140 → 145

**Treasures of Ruin (Pre-Nerf Stats)**
- **Chien-Pao**: 130 Atk
- **Wo-Chien**: 90 Atk, 100 SpAtk
- **Chi-Yu**: 145 SpAtk
- **Ting-Lu**: 165 HP, 130 Def, 55 SpAtk

#### Return of Unavailable Pokémon

- **PokéStar Studio Pokémon** (All 600 BST / Gen 5): Black Belt, Black Door, Brycen-Man, F-00, Humanoid, Majin, MT, MT2, Monica, Monster, Transport, UFO, UFO 2, White Door
- **Eternatus-Eternamax** (Gen 8) 🌟

**Legends Z-A Stats to account for Huge Power / Pure Power**
- **Meditite**: 56 Atk
- **Medicham**: 84 Atk
- **Mega Medicham**: 140 Atk
- **Mega Mawile**: 147 Atk

> Mega-Zygarde (from Legends Z-A) as well as all additional Z-A Megas are now available on Showdown.

---

### Move Restorations

#### Power Changes

- **Surf/Thunderbolt/Flamethrower/Ice Beam/Psychic/Muddy Water**: 90 → 95 BP
- **Blizzard/Hydro Pump/Thunder/Fire Blast/Hurricane**: 110 → 120 BP
- **Draco Meteor/Leaf Storm/Overheat**: 130 → 140 BP
- **Sky Attack/Solar Beam**: → 200 BP
- **Magma Storm**: → 120 BP
- **Glacial Lance**: 120 → 130 BP
- **Dig/Heat Wave/Meteor Mash**: → 100 BP
- **Aura Sphere/Dragon Pulse**: → 90 BP
- **Sucker Punch/Wicked Blow**: → 80 BP
- **Mega Drain**: → 75 BP
- **Grassy Glide**: → 70 BP
- **Tackle/Feint**: → 50 BP
- **Absorb**: → 40 BP
- **Self-Destruct/Explosion**: Cause opposing defenses to be halved
- **Hidden Power**: Back to variable BP based on IVs

#### Accuracy Buffs

- **Hypnosis**: → 70%
- **Dark Void**: → 80%
- **Will-O-Wisp**: → 85%
- **Thunder/Blizzard/Hurricane**: → 70%

#### Special Mechanics & Effects

<details>
<summary><b>View all move mechanic changes</b></summary>

- **King's Shield**: → -2 Atk if attacker makes contact
- **Leech Seed + Toxic**: Synergy from RBY returns (stacking damage!)
- **Amnesia**: Raises user's Special Defense AND Special Attack by two stages
- **Seismic Toss/Night Shade/SonicBoom/Counter/Bide**: Hits Ghost/Normal/Psychic types
- **Multi-hit moves** (Double Kick, Barrage, Fury Attack, Pin Missile, etc.): Each hit always deals the same damage; subsequent hits will crit if the 1st one did, BUT ends immediately if it breaks a substitute (Gen 1)
- **Bind/Wrap/Clamp/Fire Spin**: Lasting 2-5 turns, dealing regular 15 BP damage, target unable to attack/switch (Gen 1)
- **Swift/Bide**: Hits during invulnerable Dig/Fly
- **Defog**: Can lower Evasion of target behind a substitute
- **Psywave**: Deals damage between 100-150% of level (80% accuracy) (Gen 1)
- **Spore**: Remove immunity from Grass, Overcoat, and Safety Goggles
- **Double-Edge**: Recoil ¼ damage instead of ⅓
- **Fire Fang**: Hits through Wonder Guard
- **Hyper Beam**: No recharge turn if target is KO'd
- **Substitute**: Blocks Curse; Giga Drain/Mega Drain/Absorb/Dream Eater misses
- **Sheer Cold**: Ice-types are no longer immune

</details>

#### Targeting Changes (Doubles/Triples)

- **Surf**: Hits all adjacent opponents (not teammate)

#### Priority Changes

- **Roar/Whirlwind**: → -1
- **Follow Me**: → +3
- **Rage Powder**: → +3

#### Removed Moves Returned

Aromatherapy, Autotomize, Crafty Shield, Dragon Hammer, Dual Chop, Flower Shield, Grudge, Hail, Laser Focus, Leaf Tornado, Magic Coat, Mind Reader, Nature Power, Power-Up Punch, Psycho Shift, Revenge, Skull Bash, Submission, Venom Drench, Vital Throw, **Return**, **Frustration**, **Pursuit**, and many more!

#### Z-Moves Restored

All signature Z-moves are back:
- Pulverizing Pancake (Snorlax)
- Catastropika (Pikachu)
- 10,000,000 Volt Thunderbolt (Pikachu)
- Stoked Sparksurfer (Raichu-Alola)
- Extreme Evoboost (Eevee)
- Soul-Stealing 7-Star Strike (Marshadow)
- Menacing Moonraze Maelstrom (Lunala)
- Light That Burns the Sky (Necrozma)
- Oceanic Operetta (Primarina)
- Guardian of Alola (Tapu)
- Genesis Supernova (Mew)
- Sinister Arrow Raid (Decidueye)
- Malicious Moonsault (Incineroar)
- Clangorous Soulblaze (Kommo-o)
- Let's Snuggle Forever (Mimikyu)
- Splintered Stormshards (Lycanroc)
- And all standard Z-moves!

#### Let's Go Exclusive Moves

**Partner Pikachu Moves:**
- Zippy Zap (80 BP, 10 PP)
- Splishy Splash
- Floaty Fall
- Pika Papow

**Partner Eevee Moves:**
- Bouncy Bubble
- Buzzy Buzz
- Sizzly Slide
- Glitzy Glow
- Baddy Bad
- Sappy Seed (100 BP, 90% acc)
- Freezy Frost (100 BP, 10 PP)
- Sparkly Swirl (120 BP, 85% acc)
- Veevee Volley

#### Legends: Arceus Exclusive Moves

- **Ceaseless Edge/Stone Axe**: High crit ratio and damages target with Splinters 2-4 turns
- **Lunar Blessing**: Increases evasion
- **Victory Dance**: No changes

#### Legends Z-A

- **Nihil Light**: 200 BP, 100% accuracy, ignores stat/sp def boosts AND hits fairies/ignores dragon immunity (Credit to Icy for figuring out a fix for this, as it currently doesn't work as intended in the original source code.)

#### Move Restrictions Removed

- **All signature moves**: Remove species locks - any Pokémon can learn any move (EXPERIMENTAL)
- Specific examples: **Dark Void**, **Hyperspace Fury**, **Aura Wheel** (Default Electric)

---

### Ability Restorations

#### Generation 9 Restorations

- **Hadron Engine/Orichalcum Pulse/Quark Drive/Protosynthesis**: Immune to Neutralizing Gas (pre-update)

#### Generation 8→9 Ability Nerfs Reversed

- **Battle Bond (Greninja)**: Restore original mechanics where Greninja transforms into Ash-Greninja permanently after KOing an opponent
- **Dauntless Shield/Intrepid Sword**: Activate on every switch-in, not just once per battle
- **Protean/Libero**: Remove once-per-switch limit - restore unlimited type changing
- **Transistor (Regieleki)**: 1.3x boost → 1.5x boost

#### Generation 7→8 Ability Nerfs Reversed

- **Disguise (Mimikyu)**: Remove HP damage - restore true immunity to first hit
- **Moody**: Restore original mechanics where it raises one random stat by 2 stages and lowers another by 1 stage each turn, including evasion and accuracy

#### Generation 6→7 Ability Nerfs Reversed

- **Aerilate/Pixilate/Refrigerate**: Restore original 1.3x damage multiplier (was reduced to 1.2x in Gen 7)
- **Gale Wings (Talonflame)**: Remove HP requirement - restore unlimited priority to Flying moves
- **Parental Bond (Kangaskhan)**: 25% second hit → 50% second hit. EXPERIMENTAL: Z-moves also hit twice, AND Clangorous Soulblaze's stat boosts will trigger x2! (*Currently the second attack will not be boosted.)
- **Prankster**: Remove Dark-type immunity - restore full effectiveness vs all types

#### Generation 5→6 Ability Nerfs Reversed

- **Weather Abilities**: Restore permanent weather (remove turn limits) for Drizzle, Drought, Sand Stream, Snow Warning

#### Earlier Generation Ability Nerfs Reversed

- **Magic Guard**: Restore original mechanics where it grants immunity to being fully paralyzed and prevents poisoning from Toxic Spikes
- **Arena Trap**: Restore original mechanics where it affects Ghost-types
- **Shadow Tag**: Restore original mechanics where it affects Ghost-types and other Shadow Tags

#### Ability Restrictions Removed

- Remove species locks - specific to Mimikyu (Disguise works on any Pokémon)
- Specific exceptions: Multitype/RKS
- Arceus/Castform + Protean/Libero works as intended

---

### Item Restorations

#### Classic Items Return

1. **Berserk Gene**
   - Effect: Immediately raises Attack by 2 stages and inflicts confusion
   - Consumable item that activates upon entering battle
   - Associated with Mewtwo lore from Cerulean Cave experiments

2. **Pink Bow/Polkadot Bow**
   - Effect: Boosts Normal-type moves by 10%
   - Item redundancy relevant if Item Clause is ever enforced

3. **Soul Dew**
   - Boosts Latios/Latias's SpAtk and SpDef by 50%

4. **Additional Items**
   - Z-Crystals
   - Mega Stones
   - Red/Blue Orb

---

### Mechanics Restorations

#### Critical Hit Formula

Restore speed-based critical hits (high-speed = more crits)

#### 655 Stat 'Glitch' / E-max "0 Def" Overflow

[See Smogon discussion](https://www.smogon.com/forums/threads/655-stat-glitch-and-its-place-in-tiering.3672135/)

#### Status Condition Mechanics

- **Leech Seed + Toxic Synergy**: Restore the stacking interaction where Toxic's increasing damage applies to Leech Seed as well
- **Paralysis**: Reduces speed by 75%; Electric types no longer immune
- **Confusion Self-Hit Rate**: 33% → 50%

#### Type Chart Changes

Gen 9 type chart except **Psychic is immune to Ghost** (Gen 1)

#### Terrain Buffs

- **Electric Terrain**: Boosts Electric-type moves by 50% (was 30%)
- **Grassy Terrain**: Boosts Grass-type moves by 50% (was 30%)
- **Psychic Terrain**: Boosts Psychic-type moves by 50% (was 30%)

---

### Format Rules

#### EV/Level Rules

- **EV Limit Removed**: All Pokémon can have 252 EVs in every stat (1512 total EVs)
- **Level Cap**: Maximum level 100
- **IV Rules**: Standard competitive IV rules apply

#### Battle Format

- **Team Size**: Standard 6v6 format
- **Item Clause**: No restrictions on item usage
- **Species Clause**: No restrictions (can use multiple of same Pokémon)
- **Sleep Clause**: Removed
- **Endless Battle Clause**: Standard rules apply

---

## 🎯 Summary

Pure Hackmons No Nerfs creates the ultimate Pokémon experience, restoring broken mechanics from previous generations and allowing unlimited fun:

✅ **Pokémon Base Stats** are restored to their most powerful  
✅ **Moves** are restored to their highest power/accuracy/effect  
✅ **Ability nerfs** are removed  
✅ **Classic items** like GSC's Berserk Gene return  
✅ **Every battle mechanic** from Gens 1-9 all come together  
✅ **Powerful permanent forms** like E-max, Megas, etc. come back

This format not only brings forth an interesting metagame but also attempts to capture some of the most powerful things in Pokémon history. Moving forward, one could consider expanding on the phrase "no nerfs" to apply to other formats as well, including:
- **"OU No Nerfs"** where Machamp can learn Fissure with No Guard
- **"Glitched No Nerfs"** where Diamond & Pearl Pokémon have access to every move in the game
- **"LC No Nerfs"** where baby Pokémon like Abra and Gastly reign supreme!

---

## 👥 Contributors

**Main Contributors:**
- **isleep2late** - Creator & Lead Developer
- **electra** - Contributor
- **Enigmatist** - Contributor  
- **Alex BB** - Contributor

**Special Thanks:**
- Pure Hackmons community for additional feedback
- Pokémon Showdown for making this possible (via Custom Format/Local Open-Source modification)

---

## 📚 Additional Information

### Important Notes

This document is subject to constant updates/changes, especially as new games/generations come out. Anything marked with "**" is up for debate/discussion as it may not necessarily be a buff and/or can be removed/revised based on community input/feedback. Additionally, anything labeled "EXPERIMENTAL" is not necessarily 'canon' in the game but would be fun to implement or is currently implemented in the code.

### Future Possibilities

**EXPERIMENTAL**: Shadow Lugia/Shadow moves, "busted" moves from Pokémon Masters (Feel Our Feelings!, Lunar Moongeist Beam, Dawn Lunar Eclipse Moongeist Beam, etc.) might be fun ideas; however, they may be impractical and are also NOT implemented in Pokémon Showdown yet. Additionally, there is a Save Editing-related Pure Hackmons mechanic in Gen 1 that is NOT implemented on Showdown where a Pokemon's sprite and typing can be modified (see https://www.smogon.com/forums/threads/old-gen-hackmons-megathread.3649618/post-10398287 as well as https://projectpokemon.org/home/forums/topic/67301-i-think-i-ran-into-new-color-palettes-shiny-sprites-in-pokemon-yellow-using-save-editing/ ... this is all possible using Pikasav which can be found here: https://projectpokemon.org/home/files/file/1598-pikasav/). While this would be really cool and would apply to all Gen 1 Pokemon, it is currently impossible to code and would not be feasible on Showdown, but could be a good theoretical framework for the future).

---

## 🐛 Issues & Feedback

Found a bug or have a suggestion? Please open an issue on this repository!

## 📄 License

This project is a modification for Pokémon Showdown and follows the same license. Pokémon and all related properties are © Nintendo/Creatures Inc./GAME FREAK inc.

---

<div align="center">

**Enjoy the chaos! 🔥**

*"Gotta break 'em all!"*

</div>
