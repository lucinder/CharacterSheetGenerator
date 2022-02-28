let debug = false; // global debug boolean
let debugtxt = "";

let racePreset = "Random";
let classPreset = "Random";
let srPreset = "Random";
let scPreset = "Random";
let lvlPreset = -1;

const statModifiers = new Array(-5,-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7); // now goes up to 24 for lv 20 barb
const pBonuses = new Array(0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6);
const priorityStats = {"Artificer":new Array(3,1,4), "Barbarian":new Array(0,2,4),"Bard":new Array(5,1,4),"Cleric":new Array(4,2,0),"Druid":new Array(4,5,3),"Fighter":new Array(0,2,4),"Monk":new Array(1,4,2),"Paladin":new Array(0,5,2),"Ranger":new Array(1,4,2),"Rogue":new Array(1,5,3),"Sorcerer":new Array(5,2,4),"Warlock":new Array(5,2,4),"Wizard":new Array(3,1,4)};
const raceOptions = new Array("Aarakocra","Aasimar","Bugbear","Centaur","Changeling","Dragonborn","Dwarf","Elf","Fairy","Firbolg","Genasi","Gith","Gnome", "Goblin","Goliath","Half-Elf","Half-Orc","Halfling","Harengon","Hexblood","Hobgoblin","Human","Kalashtar","Kenku","Kobold","Leonin","Lizardfolk","Loxodon","Merfolk","Minotaur","Orc","Owlin","Satyr","Shifter","Simic Hybrid","Tabaxi","Tiefling","Tortle","Triton","Vedalken","Warforged","Yuan-Ti");
const classOptions = new Array("Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard");
const bgOptions = new Array("Acolyte","Anthropologist","Archaeologist","Athlete","Charlatan","City Watch","Clan Crafter","Cloistered Scholar","Courtier","Criminal","Entertainer","Faceless","Faction Agent","Far Traveler","Feylost","Fisher","Folk Hero","Gambler","Grinner","Guild Artisan","Haunted One","Hermit","House Agent","Inheritor","Investigator","Knight of the Order","Marine","Mercenary Veteran","Noble","Outlander","Sage","Sailor","Shipwright","Smuggler","Soldier","Urban Bounty Hunter","Urchin","Tribe Member","Carnival Hand");

// subrace
const subraceOptions_aasimar = new Array("Protector","Scourge","Fallen");
const subraceOptions_dragonborn = new Array("Red","Green","Blue","White","Black","Gold","Silver","Bronze","Brass","Copper","Emerald","Amethyst","Topaz","Sapphire","Crystal");
const subraceOptions_dwarf = new Array("Hill","Mountain","Duergar");
const subraceOptions_elf = new Array("High","Wood","Sea","Shadar-Kai","Eladrin","Avariel","Drow","Pallid");
const subraceOptions_genasi = new Array("Fire","Water","Earth","Air");
const subraceOptions_gith = new Array("Githzerai","Githyanki");
const subraceOptions_gnome = new Array("Forest","Rock","Deep");
const subraceOptions_halfling = new Array("Stout","Lightfoot","Ghostwise","Lotusden");
const subraceOptions_merfolk = new Array("Green","Blue");
let srSelector = {"Aasimar":subraceOptions_aasimar,"Dragonborn":subraceOptions_dragonborn,"Dwarf":subraceOptions_dwarf,"Elf":subraceOptions_elf,"Genasi":subraceOptions_genasi,"Gith":subraceOptions_gith,"Gnome":subraceOptions_gnome,"Halfling":subraceOptions_halfling,"Merfolk":subraceOptions_merfolk,};

//subclass
const subclassOptions_artificer = new Array("Alchemist","Artillerist","Armorer","Battle Smith");
const subclassOptions_barbarian = new Array("Ancestral Guardian","Battlerager","Beast","Berserker","Storm Herald","Totem Warrior","Wild Magic","Zealot");
const subclassOptions_bard = new Array("Collge of Creation","College of Eloquence","College of Glamour","College of Lore","College of Spirits","College of Swords","College of Valour","College of Whispers");
const subclassOptions_cleric = new Array("Arcana","Death","Forge","Grave","Knowledge","Life","Light","Nature","Order","Peace","Tempest","Trickery","Twilight","War");
const subclassOptions_druid = new Array("Circle of Dreams","Circle of the Land","Circle of the Moon","Circle of Spores","Circle of the Shepherd","Circle of Stars","Circle of Wildfire");
const subclassOptions_fighter = new Array("Arcane Archer","Banneret","Battle Master","Cavalier","Champion","Echo Knight","Eldritch Knight","Psi Warrior","Rune Knight","Samurai","Gunslinger");
const subclassOptions_monk = new Array("Astral Self","Drunken Master","Four Elements","Kensei","Long Death","Mercy","Open Hand","Shadow","Sun Soul","Ascendant Dragon");
const subclassOptions_paladin = new Array("Oath of the Ancients","Oath of Conquest","Oath of Glory","Oath of the Crown","Oath of Devotion","Oath of Redemption","Oath of Vengeance","Oath of the Watchers","Oathbreaker");
const subclassOptions_ranger = new Array("Beast Master","Fey Wanderer","Gloom Stalker","Horizon Walker","Hunter","Monster Slayer","Swarmkeeper","Drakewarden");
const subclassOptions_rogue = new Array("Arcane Trickster","Assassin","Inquisitive","Mastermind","Phantom","Scout","Soulknife","Swashbuckler","Thief","Wild Card");
const subclassOptions_sorcerer = new Array("Aberrant Mind","Clockwork Soul","Draconic Bloodline","Divine Soul","Shadow Magic","Storm Sorcery","Wild Magic");
const subclassOptions_warlock = new Array("Archfey","Celestial","Fathomless","Fiend","Genie","Great Old One","Hexblade","Undying");
const subclassOptions_wizard = new Array("Abjuration","Evocation","Divination","Conjuration","Enchantment","Illusion","Necromancy","Transmutation","Bladesinging","War Magic","Order of Scribes","Chronurgy","Graviturgy");
let scSelector = {"Artificer":subclassOptions_artificer, "Barbarian":subclassOptions_barbarian,"Bard":subclassOptions_bard,"Cleric":subclassOptions_cleric,"Druid":subclassOptions_druid,"Fighter":subclassOptions_fighter,"Monk":subclassOptions_monk,"Paladin":subclassOptions_paladin,"Ranger":subclassOptions_ranger,"Rogue":subclassOptions_rogue,"Sorcerer":subclassOptions_sorcerer,"Warlock":subclassOptions_warlock,"Wizard":subclassOptions_wizard};

// proficiencies by class
// format: saves, skills, weapons, armor, tools
const stS = "STR", stD = "DEX", stC = "CON", stI = "INT", stW = "WIS", stA = "CHA";
const wS = "Simple weapons", wM = "Martial weapons",
      wSs = "shortswords", wLs = "longswords", wGs = "greatswords", wLc = "light crossbows", wHc = "hand crossbows", wRp = "rapiers", wSb = "shortbows", wLb = "longbows", wCb = "clubs", wDg = "daggers", wDt = "darts", wJ = "javelins", wMc = "maces", wQ = "quarterstaffs", wSc = "scimitars", wSk = "sickles", wSl = "slings", wSp = "spears", wBa = "battleaxes", wHa = "handaxes", wLh = "light hammers", wWh = "warhammers";
      // wW = "Daggers, darts, slings, quarterstaffs, light crossbows",wR="hand crossbows, longswords, rapiers, shortswords",wD="Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears", wDw = "battleaxes, handaxes, light hammers, warhammers", wEw = "longswords, shortswords, shortbows, longbows", wDr = "rapiers, shortswords, hand crossbows.", wG = "shortswords, longswords, greatswords";
const aL = "Light armor", aM = "Medium armor", aH = "Heavy armor", aA = "All armor", aS = "Shields";
const sA = "Arcana", sAl = "Athletics", sAc = "Acrobatics", sAh = "Animal Handling", sI = "Investigation", sIn = "Insight", sS = "Stealth", sSh = "Sleight of Hand", sSv = "Survival", sN = "Nature", sH = "History", sP = "Perception", sPf = "Performance", sPs = "Persuasion", sD = "Deception", sIt = "Intimidation", sM = "Medicine", sR = "Religion";
const tT = "Thieves' Tools", tTk = "Tinker's Tools", tH = "Herbalism Kit", tS = "Smith's Tools", tB = "Brewer's Supplies", tM = "Mason's Tools", tR = "_TOOL", tI = "_INSTRUMENT", tA = "_TOOLINSTRUMENT";

const allSkills = new Array(sA,sAl,sAc,sAh,sI,sIn,sS,sSh,sSv,sN,sH,sP,sPf,sPs,sD,sIt,sM,sR);
// let sklSelector = {sA:sA,sAl:sAl,sAc:sAc,sAh:sAh,sD:sD,sH:sH,sIn:sIn,sIt:sIt,sI:sI,sM:sM,sN:sN,sP:sP,sPf:sPf,sPs:sPs,sR:sR,sSh:sSh,sS:sS,sSv:sSv};
const proficiencies_artificer = new Array(new Array(stC,stI), new Array(sA,sH,sI,sM,sN,sP,sSh), new Array(wS), new Array(aL,aM,aS), new Array(tT,tTk,tR));
const proficiencies_barbarian = new Array(new Array(stS, stC),new Array(sAh,sAl,sIt,sN,sP,sSv),new Array(wS,wM), new Array(aL,aM,aS),new Array());
const proficiencies_bard = new Array(new Array(stD, stA),new Array(sA,sAl,sAc,sAh,sI,sIn,sIt,sS,sSh,sSv,sN,sH,sP,sPf,sPs,sD,sM,sR),new Array(wS,wHc,wLs,wRp,wSs),new Array(aL),new Array(tI,tI,tI));
const proficiencies_cleric = new Array(new Array(stW, stA),new Array(sH,sIn,sM,sPs,sR),new Array(wS),new Array(aL,aM,aS),new Array());
const proficiencies_druid = new Array(new Array(stI,stW),new Array(sA,sAh,sIn,sM,sN,sP,sR,sSv),new Array(wCb,wDg,wDt,wJ,wMc,wQ,wSc,wSk,wSl,wSp),new Array(aL,aM,aS),new Array(tH));
const proficiencies_fighter = new Array(new Array(stS,stC),new Array(sA,sAh,sAl,sH,sIn,sIt,sP,sS),new Array(wS,wM),new Array(aA,aS),new Array());
const proficiencies_monk = new Array(new Array(stS,stD),new Array(sAc,sAl,sH,sIn,sR,sS),new Array(wS,wSs),new Array(),new Array(tA));
const proficiencies_paladin = new Array(new Array(stW,stA),new Array(sAl,sIn,sIt,sM,sPs,sR),new Array(wS,wM),new Array(aA,aS),new Array());
const proficiencies_ranger = new Array(new Array(stS,stD),new Array(sAh,sAl,sIn,sI,sN,sP,sS,sSv),new Array(wS,wM),new Array(aL,aM,aS),new Array());
const proficiencies_rogue = new Array(new Array(stD,stI),new Array(sAc,sAl,sD,sI,sIt,sIn,sP,sPf,sPs,sSh,sS),new Array(wS,wHc,wLs,wRp,wSs),new Array(aL),new Array(tT));
const proficiencies_sorcerer = new Array(new Array(stC,stA),new Array(sA,sD,sIn,sIt,sPs,sR),new Array(wDg,wDt,wSl,wQ,wLc),new Array(),new Array());
const proficiencies_warlock = new Array(new Array(stW,stA),new Array(sA,sD,sH,sI,sIt,sN,sR),new Array(wS),new Array(aL),new Array());
const proficiencies_wizard = new Array(new Array(stI,stW),new Array(sA,sH,sIn,sI,sM,sR),new Array(wDg,wDt,wSl,wQ,wLc),new Array(),new Array());

//global features
const FEATURE_ASI_STANDARD = "<p><strong><i>Ability Score Improvement.</i></strong></p><p>When you reach 4th level, 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>";
const FEATURE_EA_STANDARD = "<p><strong><i>Extra Attack.</i></strong></p><p>Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.</p>";
const FEATURE_ASI_FIGHTER = "<p><strong><i>Ability Score Improvement.</i></strong></p><p>When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>";
const FEATURE_ASI_ROGUE = "<p><b><i>Ability Score Improvement.</i></b></p><p>When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>";
const FEATURE_EA_FIGHTER = "<p><strong><i>Extra Attack.</i></strong></p><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.<p></p>The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.</p>";
const FEATURE_FIGHTINGSTYLE = "<p><b><i>Fighting Style.</i></b></p><p>_FSTYLE</p>";
const FEATURE_EVASION = "<p><b><i>Evasion.</i></b></p><p>Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.</p>";
const umSpdBonus = new Array(0,0,10,10,10,10,15,15,15,15,20,20,20,20,25,25,25,25,30,30,30);

// fighting styles
let fs_archery = "<b>Archery.</b> You gain a +2 bonus to attack rolls you make with ranged weapons.";
let fs_bfighting = "<b>Blind Fighting.</b> You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.";
let fs_def = "<b>Defense.</b> While you are wearing armor, you gain a +1 bonus to AC.";
let fs_duel = "<b>Dueling.</b> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.";
let fs_gwf = "<b>Great Weapon Fighting.</b> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.";
let fs_inter = "<b>Interception.</b> When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.";
let fs_prot = "<b>Protection.</b> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.";
let fs_maneuver = "<b>Superior Technique.</b> You learn the following maneuver: </p>_FMANEUVER<p>If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals _FDC (8 + your proficiency bonus + your Strength or Dexterity modifier)<ul><li>You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.</li></ul>";
let fs_twf = "<b>Thrown Weapon Fighting.</b> You can draw a weapon that has the thrown property as part of the attack you make with the weapon.<ul><li>In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.</li></ul>";
let fs_2wf = "<b>Two-Weapon Fighting.</b> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.";
let fs_uf = "<b>Unarmed Fighting.</b> Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8.<ul><li>At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.</li></ul>";
let fs_cqs = "<b>Close Quarters Shooter.</b> When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.";
let fs_mariner = "<b>Mariner.</b> As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.";
let fs_tf = "<b>Tunnel Fighter.</b> As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.";
let fs_blessed = "<b>Blessed Warrior.</b> You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the cleric spell list.";
let fs_druid = "<b>Druidic Warrior.</b> You learn two cantrips of your choice from the druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the druid spell list.";

// spellcasting feature variations
// artificers, clerics, druids, paladins, wizards are preparatory
// bards, rangers, sorcerers, warlocks are nonpreparatory
const FEATURE_ARTIFICER_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.</p><h6><u>Tools Required</u></h6><p>You produce your artificer spell effects through your tools. You must have a spellcasting focus-specifically thieves' tools or some kind of artisan's tool-in hand when you cast any spell with this Spellcasting feature (meaning the spell has an \"M\" component when you cast it). You must be proficient with the tool to use it in this way. See the equipment chapter in the <i>Player's Handbook</i> for descriptions of these tools.</p><p>After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.</p><h6><u>Cantrips (0-Level Spells)</u></h6><p>At 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer can trips of your choice, as shown in the Cantrips Known column of the Artificer table.</p><p>When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list.</p><h6><u>Preparing and Casting Spells</u></h6><p>The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to _SPELLSAVAILABLE (your Intelligence modifier + half your artificer level, rounded down, with a minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a lst-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Intelligence modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Intelligence modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>";
const FEATURE_BARD_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.</p><h6><u>Cantrips</u></h6><p>You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.</p><h6><u>Spell Slots</u></h6><p>The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell Cure Wounds and have a 1st-level and a 2nd-level spell slot available, you can cast Cure Wounds using either slot.</p><h6><u>Spells Known of 1st Level and Higher</u></h6><p>You know four 1st-level spells of your choice from the bard spell list.</p><p>The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.</p><p>Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.</p><h6><u>Spellcasting Ability</u></h6><p>Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Charisma modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Charisma modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p><h6><u>Spellcasting Focus</u></h6><p>You can use a musical instrument as a spellcasting focus for your bard spells.</p>";
const FEATURE_CLERIC_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> As a conduit for divine power, you can cast cleric spells.</p><h6><u>Cantrips</u></h6><p>At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.</p><h6><u>Spell Slots</u></h6><p>The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose _SPELLSAVAILABLE cleric spells (a number equal to your Wisdom modifier + your cleric level, minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Wisdom modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Wisdom modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p><h6><u>Spellcasting Focus</u></h6><p>You can use a holy symbol as a spellcasting focus for your cleric spells.</p>";
const FEATURE_DRUID_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.</p><h6><u>Cantrips</u></h6><p>At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.</p><h6><u>Preparing and Casting Spells</u></h6><p>The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose _SPELLSAVAILABLE druid spells (a number equal to your Wisdom modifier + your druid level, minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Wisdom modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Wisdom modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p><h6><u>Spellcasting Focus</u></h6><p>You can use a druidic focus as a spellcasting focus for your druid spells.</p>";
const FEATURE_PALADIN_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.</p><h6><u>Preparing and Casting Spells</u></h6><p>The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to _SPELLSAVAILABLE (your Charisma modifier + half your paladin level, rounded down, with a minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Charisma modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Charisma modifier)</p><h6><u>Spellcasting Focus</u></h6><p>You can use a holy symbol as a spellcasting focus for your paladin spells.</p>";
const FEATURE_RANGER_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.</p><h6><u>Spell Slots</u></h6><p>The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>For example, if you know the 1st-level spell Animal Friendship and have a 1st-level and a 2nd-level spell slot available, you can cast Animal Friendship using either slot.</p><h6><u>Spells Known of 1st Level and Higher</u></h6><p>You know two 1st-level spells of your choice from the ranger spell list.</p><p>The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.</p><p>Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.</p><h6><u>Spellcasting Ability</u></h6><p>Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Wisdom modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Wisdom modifier)</p>";
const FEATURE_SORCERER_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.</p><h6><u>Cantrips</u></h6><p>At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.</p><h6><u>Spell Slots</u></h6><p>The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>For example, if you know the 1st-level spell Burning Hands and have a 1st-level and a 2nd-level spell slot available, you can cast Burning Hands using either slot.</p><h6><u>Spells Known of 1st Level and Higher</u></h6><p>You know two 1st-level spells of your choice from the sorcerer spell list.</p><p>The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.</p><p>Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.</p><h6><u>Spellcasting Ability</u></h6><p>Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Charisma modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Charisma modifier)</p><h6><u>Spellcasting Focus</u></h6><p>You can use an arcane focus as a spellcasting focus for your sorcerer spells.</p>";
const FEATURE_WARLOCK_SPELLCASTING = "<p><b><i>Pact Magic.</i></b> Your arcane research and the magic bestowed on you by your patron have given you facility with spells.</p><h6><u>Cantrips</u></h6><p>You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p><h6><u>Spell Slots</u></h6><p>The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p><p>For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell Witch Bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p><h6><u>Spells Known of 1st Level and Higher</u></h6><p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p><p>The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.</p><p>Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p><h6><u>Spellcasting Ability</u></h6><p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Charisma modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Charisma modifier)</p><h6><u>Spellcasting Focus</u></h6><p>You can use an arcane focus as a spellcasting focus for your warlock spells.</p>";
const FEATURE_WIZARD_SPELLCASTING = "<p><b><i>Spellcasting.</b></i> As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p><h6><u>Cantrips</u></h6><p>At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.</p><h6><u>Spellbook</u></h6><p>At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p><p>The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.</p><p><b>Copying a Spell into the Book.</b> When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.</p><p>Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.</p><p>For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.</p><p><b>Replacing the Book.</b> You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.</p><p>If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.</p><p><b>The Book's Appearance.</b> Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.</p><h6><u>Preparing and Casting Spells</u></h6><p>The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to _SPELLSAVAILABLE (your Intelligence modifier + your wizard level, with a minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell Magic Missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Intelligence modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Intelligence modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.</p><h6><u>Spellcasting Focus</u></h6><p>You can use an arcane focus as a spellcasting focus for your wizard spells.</p><h6><u>Learning Spells of 1st Level and Higher</u></h6><p>Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook.</p>";

//feature template
// const FEATURE_CLASS_0_0 = "<p><b><i>Feature.</i></b></p><p></p>";

// artificer features
const FEATURE_ARTIFICER_1_0 = "<p><b><i>Magical Tinkering.</i></b></p><p>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p><ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul><p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p><p> You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>";
const FEATURE_ARTIFICER_2_0 = "<p><b><i>Infuse Item.</i></b></p><p>At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.</p><ul><li><strong>Infusions Known:</strong> When you gain this feature, pick four artificer infusions to learn. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.<br>Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.</li><li><strong>Infusing an Item:</strong> Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the <i>Dungeon Master's Guide</i>).<br>Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion.You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies.If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.</li></ul>";
const FEATURE_ARTIFICER_3_0 = "<p><b><i>The Right Tool for the Job.</i></b></p><p>At 3rd level, you've learned how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>";
const FEATURE_ARTIFICER_6_0 = "<p><b><i>Tool Expertise.</i></b></p><p>At 6th level, your proficiency bonus is now doubled for any ability check you make that uses your proficiency with a tool.</p>";
const FEATURE_ARTIFICER_7_0 = "<p><b><i>Flash of Genius.</i></b></p><p>At 7th level, you've gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll.</p><p>You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.</p>";
const FEATURE_ARTIFICER_10_0 = "<p><b><i>Magic Item Adept.</i></b></p><p>When you reach 10th level, you achieve a profound understanding of how to use and make magic items:</p><ul><li>You can attune to up to four magic items at once.</li><li>If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.</li></ul>";
const FEATURE_ARTIFICER_11_0 = "<p><b><i>Spell-Storing Item.</i></b></p><p>At 11th level, you can now store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a lst- or 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared).</p><p>While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.</p>";
const FEATURE_ARTIFICER_14_0 = "<p><b><i>Magic Item Savant.</i></b></p><p>At 14th level, your skill with magic items deepens more:</p><ul><li>You can attune to up to five magic items at once.</li><li>You ignore all class, race, spell and level requirements on attuning to or using a magic item.</li></ul>";
const FEATURE_ARTIFICER_18_0 = "<p><b><i>Magic Item Master.</i></b></p><p>Starting at 18th level, you can attune up to six magic items at once.</p>";
const FEATURE_ARTIFICER_20_0 = "<p><b><i>Soul of Artifice.</i></b></p><p>At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection:</p><ul><li>You gain a +1 bonus to all saving throws per magic item you are currently attuned to.</li><li>If you're reduced to 0 hit points but not killed out-right, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.</li></ul>";

// artificer armorer
const FEATURE_ARTIFICER_ARMORER_3_0 = "<p><b><i>Tools of the Trade.</i></b></p><p>When you adopt this specialization at 3rd level, you gain proficiency with heavy armor. You also gain proficiency with smith's tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>";
const FEATURE_ARTIFICER_ARMORER_3_1 = "<p><b><i>Armorer Spells.</i></b></p><p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.</p><h6><b>Armorer Spells:</b></h6><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"> <!-- Header Row --><th style=\"padding-right:12px;\">Artificer Level</th><th>Armorer Spells</th></tr><tr> <!-- 1st level spells --><td>3rd</td><td>Magic Missile, Thunderwave</td></tr><tr> <!-- 2nd level spells --><td>5th</td><td>Mirror Image, Shatter</td></tr><tr> <!-- 3rd level spells --><td>9th</td><td>Hypnotic Pattern, Lightning Bolt</td></tr><tr> <!-- 4th level spells --><td>13th</td><td>Fire Shield, Greater Invisibility</td></tr><tr> <!-- 5th level spells --><td>17th</td><td>Passwall, Wall of Force</td></tr></table>";
const FEATURE_ARTIFICER_ARMORER_3_2 = "<p><b><i>Arcane Armor.</i></b></p><p>Beginning at 3rd level, your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.</p><p>You gain the following benefits while wearing this armor:</p><ul><li>If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.</li><li>You can use the arcane armor as a spellcasting focus for your artificer spells.</li><li>The armor attaches to you and can’t be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a body part it is replacing.</li><li>You can doff or don the armor as an action.</li></ul><p>The armor continues to be Arcane Armor until you don another suit of armor or you die.</p>";
const FEATURE_ARTIFICER_ARMORER_3_3 = "<p><b><i>Armor Model.</i></b></p><p>Beginning at 3rd level, you can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.</p><p>Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.</p><p>You can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.</p><p><b>Guardian.</b> You design your armor to be in the front line of conflict. It has the following features:<p><ul><li><b>Thunder Gauntlets.</b> Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.</li><li><b>Defensive Field.</b> As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</li></ul><p><b>Infiltrator.</b> You customize your armor for subtle undertakings. It has the following features:<ul><li><b>Lightning Launcher.</b> A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.</li><li><b>Powered Steps.</b> Your walking speed increases by 5 feet.</li><li><b>Dampening Field.</b> You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.</li></ul>";
const FEATURE_ARTIFICER_ARMORER_9_0 = "<p><b><i>Armor Modifications.</i></b></p><p>At 9th level, you learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor.</p>";
const FEATURE_ARTIFICER_ARMORER_15_0 = "<p><b><i>Perfected Armor.</i></b></p><p>At 15th level, your Arcane Armor gains additional benefits based on its model, as shown below.</p><p><b>Guardian.</b> When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force the creature to make a Strength saving throw against your spell save DC, pulling the creature up to 30 feet toward you to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.</p><p>You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.</p><p><b>Infiltrator.</b> Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage.</p>";

// barbarian
const FEATURE_BARBARIAN_1_0 = "<p><b><i>Rage.</i></b></p><p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p><p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p><ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul><p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</p><p>Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.</p>";
const FEATURE_BARBARIAN_1_1 = "<p><b><i>Unarmored Defense.</i></b></p><p>While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>";
const FEATURE_BARBARIAN_2_0 = "<p><b><i>Danger Sense.</i></b></p><p>At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.</p>";
const FEATURE_BARBARIAN_2_1 = "<p><b><i>Reckless Attack.</i></b></p><p>Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.</p>";
const FEATURE_BARBARIAN_5_0 = "<p><b><i>Fast Movement.</i></b></p><p>Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.</p>";
const FEATURE_BARBARIAN_7_0 = "<p><b><i>Feral Instinct.</i></b></p><p>By 7th level, your instincts are so honed that you have advantage on initiative rolls.</p><p>Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.</p>";
const FEATURE_BARBARIAN_9_0 = "<p><b><i>Brutal Critical.</i></b></p><p>Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.</p><p>This increases to two additional dice at 13th level and three additional dice at 17th level.</p>";
const FEATURE_BARBARIAN_11_0 = "<p><b><i>Relentless Rage.</i></b></p><p>Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.</p><p>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.</p>";
const FEATURE_BARBARIAN_15_0 = "<p><b><i>Persistent Rage.</i></b></p><p>Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.</p>";
const FEATURE_BARBARIAN_18_0 = "<p><b><i>Indomitable Might.</i></b></p><p>Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.</p>";
const FEATURE_BARBARIAN_20_0 = "<p><b><i>Primal Champion.</i></b></p><p>At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.</p>";


// bard
const FEATURE_BARD_1_0 = "<p><b><i>Bardic Inspiration.</i></b></p><p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.</p><p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p><p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>";
const FEATURE_BARD_2_0 = "<p><b><i>Jack of All Trades.</i></b></p><p>Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.</p>";
const FEATURE_BARD_2_1 = "<p><b><i>Song of Rest.</i></b></p><p>Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.</p><p>The extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.</p>";
const FEATURE_BARD_3_0 = "<p><b><i>Expertise.</i></b></p><p>At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p><p>At 10th level, you can choose another two skill proficiencies to gain this benefit.</p>";
const FEATURE_BARD_5_0 = "<p><b><i>Font of Inspiration.</i></b></p><p>Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.</p>";
const FEATURE_BARD_6_0 = "<p><b><i>Countercharm.</i></b></p><p>At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).</p>";
const FEATURE_BARD_10_0 = "<p><b><i>Magical Secrets.</i></b></p><p>By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.</p><p>The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.</p><p>You learn two additional spells from any classes at 14th level and again at 18th level.</p>";
const FEATURE_BARD_20_0 = "<p><b><i>Superior Inspiration.</i></b></p><p>At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.</p>";

// cleric
const FEATURE_CLERIC_2_0 = "<p><b><i>Channel Divinity</i></b></p><p>At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.</p><p>When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.</p><p>Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.</p><p>Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.</p><p><b><u>Turn Undead.</u></b></p><p>As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.</p><p>A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.</p>";
const FEATURE_CLERIC_5_0 = "<p><b><i>Destroy Undead.</i></b></p><p>Starting at 5th level, when an undead of CR 1/2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.</p><p>The maximum CR of creatures affected by this feature increases at certain levels. At 8th level, the CR increases to 1; at 11th level, the CR increases to 2; at 14th level, the CR increases to 3; and at 17th level, the CR increases to 4.</p>";
const FEATURE_CLERIC_10_0 = "<p><b><i>Divine Intervention.</i></b></p><p>Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.</p><p>Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.</p><p>At 20th level, your call for intervention succeeds automatically, no roll required.</p>";
// multi-subclass features
const FEATURE_CLERIC_DSTRIKE = "<p><b><i>Divine Strike.</i></b></p><p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.</p>";

// life cleric
const FEATURE_CLERIC_LIFE_1_0 = "<p><b><i>Domain Spells.</i></b></p><p>Each domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.</p><p>If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.</p><h6><b>Life Domain Spells:</b></h6><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"> <!-- Header Row --><th style=\"padding-right:12px;\">Cleric Level</th><th>Spells</th></tr><tr> <!-- 1st level spells --><td>1st</td><td>Bless, Cure Wounds</td></tr><tr> <!-- 2nd level spells --><td>3rd</td><td>Lesser Restoration, Spiritual Weapon</td></tr><tr> <!-- 3rd level spells --><td>5th</td><td>Beacon of Hope, Revivify</td></tr><tr> <!-- 4th level spells --><td>7th</td><td>Death Ward, Guardian of Faith</td></tr><tr> <!-- 5th level spells --><td>9th</td><td>Mass Cure Wounds, Raise Dead</td></tr></table>";
const FEATURE_CLERIC_LIFE_1_1 = "<p><b><i>Bonus Proficiency.</i></b></p><p>When you choose this domain at 1st level, you gain proficiency with heavy armor.</p>";
const FEATURE_CLERIC_LIFE_1_2 = "<p><b><i>Disciple of Life.</i></b></p><p>Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.</p>";
const FEATURE_CLERIC_LIFE_2_0 = "<p><b><u>Preserve Life.</u></b></p><p>As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.</p>";
const FEATURE_CLERIC_LIFE_6_0 = "<p><b><i>Blessed Healer.</i></b></p><p>Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.</p>";
const FEATURE_CLERIC_LIFE_17_0 = "<p><b><i>Supreme Healing.</i></b></p><p>Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.</p>";

// druid
const FEATURE_DRUID_1_0 = "<p><b><i>Druidic.</i></b></p><p>You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.</p>";
const FEATURE_DRUID_2_0 = "<p><b><i>Wild Shape.</i></b></p><p>Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.</p><p>Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.</p><h6><b>Beast Shapes</b></h6><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"><th>Level</th><th>Max. CR</th><th>Limitations</th><th>Example</th><tr><tr><td>2nd</td><td>1/4</td><td>No flying or swimming speed</td><td>Wolf</td></tr><tr><td>4th</td><td>1/2</td><td>No flying speed</td><td>Crocodile</td></tr><tr><td>8th</td><td>1</td><td>—</td><td>Giant eagle</td></tr></table><p>You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.</p><p>While you are transformed, the following rules apply:</p><ul><li>Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.</li><li>When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.</li><li>You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.</li><li>You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.</li><li>You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.</li></ul>";
const FEATURE_DRUID_18_0 = "<p><b><i>Timeless Body.</i></b></p><p>Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.</p>";
const FEATURE_DRUID_18_1 = "<p><b><i>Beast Spells.</i></b></p><p>Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.</p>";
const FEATURE_DRUID_20_0 = "<p><b><i>Archdruid.</i></b></p><p>At 20th level, you can use your Wild Shape an unlimited number of times.</p><p>Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.</p>";

// fighter
const FEATURE_FIGHTER_1_0 = "<p><b><i>Second Wind.</i></b></p><p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>";
const FEATURE_FIGHTER_2_0 = "<p><b><i>Action Surge.</i></b></p><p>Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.</p>";
const FEATURE_FIGHTER_9_0 = "<p><b><i>Indomitable.</i></b></p><p>Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.</p><p>You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.</p>";
let fStyles_fighter = new Array(fs_archery,fs_bfighting,fs_def,fs_duel,fs_gwf,fs_inter,fs_prot,fs_maneuver,fs_twf,fs_2wf,fs_uf,fs_cqs,fs_mariner,fs_tf);
let mv_ambush = "<p><u>Ambush</u></p><p>When you make a Dexterity (Stealth) check or an initiative roll, you can expend one superiority die and add the die to the roll, provided you aren't incapacitated.</p>";
let mv_bait = "<p><u>Bait and Switch</u></p><p>When you're within 5 feet of a creature on your turn, you can expend one superiority die and switch places with that creature, provided you spend at least 5 feet of movement and the creature is willing and isn't incapacitated. This movement doesn't provoke opportunity attacks.<br>Roll the superiority die. Until the start of your next turn, you or the other creature (your choice) gains a bonus to AC equal to the number rolled.</p>";
let mv_brace = "<p><u>Brace</u></p><p>When a creature you can see moves into the reach you have with the melee weapon you're wielding, you can use your reaction to expend one superiority die and make one attack against the creature, using that weapon. If the attack hits, add the superiority die to the weapon's damage roll.</p>";
let mv_cs = "<p><u>Commander's Strike</u></p><p>When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll.</p>";
let mv_cp = "<p><u>Commanding Presence</u></p><p>When you make a Charisma (Intimidation), a Charisma (Performance), or a Charisma (Persuasion) check, you can expend one superiority die and add the superiority die to the ability check.</p>";
let mv_disarm = "<p><u>Disarming Attack</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.</p>";
let mv_distract = "<p><u>Distracting Strike</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.</p>";
let mv_evasive = "<p><u>Evasive Footwork</u></p><p>When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.</p>";
let mv_feint = "<p><u>Feinting Attack</u></p><p>You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature this turn. If that attack hits, add the superiority die to the attack's damage roll.</p>";
let mv_goad = "<p><u>Goading Attack</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.</p>";
let mv_grapple = "<p><u>Grappling Strike</u></p><p>Immediately after you hit a creature with a melee attack on your turn, you can expend one superiority die and then try to grapple the target as a bonus action. Add the superiority die to your Strength (Athletics) check.</p>";
let mv_lunge = "<p><u>Lunging Attack</u></p><p>When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll.</p>";
let mv_mv = "<p><u>Maneuvering Attack</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.</p>";
let mv_menace = "<p><u>Menacing Attack</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.</p>";
let mv_parry = "<p><u>Parry</u></p><p>When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.</p>";
let mv_precision = "<p><u>Precision Attack</u></p><p>When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.</p>";
let mv_push = "<p><u>Pushing Attack</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.</p>";
let mv_toss = "<p><u>Quick Toss</u></p><p>As a bonus action, you can expend one superiority die and make a ranged attack with a weapon that has the thrown property. You can draw the weapon as part of making this attack. If you hit, add the superiority die to the weapon's damage roll.</p>";
let mv_rally = "<p><u>Rally</u></p><p>On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.</p>";
let mv_riposte = "<p><u>Riposte</u></p><p>When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.</p>";
let mv_sweep = "<p><u>Sweeping Attack</u></p><p>When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.</p>";
let mv_assess = "<p><u>Tactical Assessment</u></p><p>When you make an Intelligence (Investigation), an Intelligence (History), or a Wisdom (Insight) check, you can expend one superiority die and add the superiority die to the ability check.</p>";
let mv_trip = "<p><u>Trip Attack</u></p><p>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.</p>";
let fManeuvers = new Array(mv_ambush,mv_bait,mv_brace,mv_cs,mv_cp,mv_disarm,mv_distract,mv_evasive,mv_feint,mv_goad,mv_grapple,mv_lunge,mv_mv,mv_menace,mv_parry,mv_precision,mv_push,mv_toss,mv_rally,mv_riposte,mv_sweep,mv_assess,mv_trip);

// monk
const FEATURE_MONK_1_0 = "<p><b><i>Unarmored Defense.</i></b></p><p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p>";
const FEATURE_MONK_1_1 = "<p><b><i>Martial Arts.</i></b></p><p>Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.</p><p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield.</p><ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li><li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li></ul><p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama).</p>";
const FEATURE_MONK_2_0 = "<p><b><i>Ki.</i></b></p><p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.</p><p>You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.</p><p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.</p><p>Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:</p><p><b>Ki save DC</b> = _KIDC (8 + your proficiency bonus + your Wisdom modifier)</p><ul><li><b>Flurry of Blows.</b> Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.</li><li><b>Patient Defense.</b> You can spend 1 ki point to take the Dodge action as a bonus action on your turn.</li><li><b>Step of the Wind.</b> You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.</li></ul>";
const FEATURE_MONK_2_1 = "<p><b><i>Unarmored Movement.</i></b></p><p>Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.</p><p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.</p>";
const FEATURE_MONK_3_0 = "<p><b><i>Deflect Missiles.</i></b></p><p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.</p><p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.</p>";
const FEATURE_MONK_4_0 = "<p><b><i>Slow Fall.</i></b></p><p>Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.</p>";
const FEATURE_MONK_5_0 = "<p><b><i>Stunning Strike.</i></b></p><p>Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.</p>";
const FEATURE_MONK_6_0 = "<p><b><i>Ki-Empowered Strikes.</i></b></p><p>Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p>";
const FEATURE_MONK_7_0 = "<p><b><i>Stillness of Mind.</i></b></p><p>Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.</p>";
const FEATURE_MONK_10_0 = "<p><b><i>Purity of Body.</i></b></p><p>At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.</p>";
const FEATURE_MONK_13_0 = "<p><b><i>Tongue of the Sun and Moon.</i></b></p><p>Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.</p>";
const FEATURE_MONK_14_0 = "<p><b><i>Diamond Soul.</i></b></p><p>Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.</p><p>Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.</p>";
const FEATURE_MONK_15_0 = "<p><b><i>Timeless Body.</i></b></p><p>At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.</p>";
const FEATURE_MONK_18_0 = "<p><b><i>Empty Body.</i></b></p><p>Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.</p><p>Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.</p>";
const FEATURE_MONK_20_0 = "<p><b><i>Perfect Self.</i></b></p><p>At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.</p>";

// paladin
const FEATURE_PALADIN_1_0 = "<p><b><i>Divine Sense.</i></b></p><p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.</p><p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.</p>";
const FEATURE_PALADIN_1_1 = "<p><b><i>Lay on Hands.</i></b></p><p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.</p><p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.</p><p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.</p><p>This feature has no effect on undead and constructs.</p>";
const FEATURE_PALADIN_2_0 = "<p><b><i>Divine Smite.</i></b></p><p>Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.</p>";
const FEATURE_PALADIN_3_0 = "<p><b><i>Divine Health.</i></b></p><p>By 3rd level, the divine magic flowing through you makes you immune to disease.</p>";
const FEATURE_PALADIN_6_0 = "<p><b><i>Aura of Protection.</i></b></p><p>Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.</p><p>At 18th level, the range of this aura increases to 30 feet.</p>";
const FEATURE_PALADIN_10_0 = "<p><b><i>Aura of Courage.</i></b></p><p>Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.</p><p>At 18th level, the range of this aura increases to 30 feet.</p>";
const FEATURE_PALADIN_11_0 = "<p><b><i>Improved Divine Smite.</i></b></p><p>By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.</p>";
const FEATURE_PALADIN_14_0 = "<p><b><i>Cleansing Touch.</i></b></p><p>Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.</p>";
let fStyles_paladin = new Array(fs_blessed,fs_bfighting,fs_def,fs_duel,fs_gwf,fs_inter,fs_prot,fs_cqs,fs_mariner,fs_twf,fs_tf,fs_uf);

// ranger
const FEATURE_RANGER_1_0 = "<p><b><i>Favored Enemy.</i></b></p><p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy commonly encountered in the wilds.</p><p>Choose a type of favored enemy: beasts, fey, humanoids, monstrosities, or undead. You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.</p><p>When you gain this feature, you also learn one language of your choice, typically one spoken by your favored enemy or creatures associated with it. However, you are free to pick any language you wish to learn.</p>";
const FEATURE_RANGER_1_1 = "<p><b><i>Natural Explorer.</i></b></p><p>You are a master of navigating the natural world, and you react with swift and decisive action when attacked. This grants you the following benefits:</p><ul><li>You ignore difficult terrain.</li><li>You have advantage on initiative rolls.</li><li>On your first turn during combat, you have advantage on attack rolls against creatures that have not yet acted.</li></ul><p>In addition, you are skilled at navigating the wilderness. You gain the following benefits when traveling for an hour or more:</p><ul><li>Difficult terrain doesn’t slow your group’s travel.</li><li>Your group can’t become lost except by magical means.</li><li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li><li>If you are traveling alone, you can move stealthily at a normal pace.</li><li>When you forage, you find twice as much food as you normally would.</li><li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li></ul>";
const FEATURE_RANGER_3_0 = "<p><b><i>Primeval Awareness.</i></b></p><p>Beginning at 3rd level, your mastery of ranger lore allows you to establish a powerful link to beasts and to the land around you.</p><p>You have an innate ability to communicate with beasts, and they recognize you as a kindred spirit. Through sounds and gestures, you can communicate simple ideas to a beast as an action, and can read its basic mood and intent. You learn its emotional state, whether it is affected by magic of any sort, its short-term needs (such as food or safety), and actions you can take (if any) to persuade it to not attack.</p><p>You cannot use this ability against a creature that you have attacked within the past 10 minutes.</p><p>Additionally, you can attune your senses to determine if any of your favored enemies lurk nearby. By spending 1 uninterrupted minute in concentration (as if you were concentrating on a spell), you can sense whether any of your favored enemies are present within 5 miles of you. This feature reveals which of your favored enemies are present, their numbers, and the creatures’ general direction and distance (in miles) from you.</p><p>If there are multiple groups of your favored enemies within range, you learn this information for each group.</p>";
const FEATURE_RANGER_6_0 = "<p><b><i>Greater Favored Enemy.</i></b></p><p>At 6th level, you are ready to hunt even deadlier game. Choose a type of greater favored enemy: aberrations, celestials, constructs, dragons, elementals, fiends, or giants. You gain all the benefits against this chosen enemy that you normally gain against your favored enemy, including an additional language. Your bonus to damage rolls against all your favored enemies increases to +4.</p><p>Additionally, you have advantage on saving throws against the spells and abilities used by a greater favored enemy.</p>";
const FEATURE_RANGER_8_0 = "<p><b><i>Fleet of Foot.</i></b></p><p>Beginning at 8th level, you can use the Dash action as a bonus action on your turn.</p>";
const FEATURE_RANGER_10_0 = "<p><b><i>Hide in Plain Sight.</i></b></p><p>Starting at 10th level, you can remain perfectly still for long periods of time to set up ambushes.</p><p>When you attempt to hide on your turn, you can opt to not move on that turn. If you avoid moving, creatures that attempt to detect you take a −10 penalty to their Wisdom (Perception) checks until the start of your next turn. You lose this benefit if you move or fall prone, either voluntarily or because of some external effect. You are still automatically detected if any effect or action causes you to no longer be hidden.</p><p>If you are still hidden on your next turn, you can continue to remain motionless and gain this benefit until you are detected.</p>";
const FEATURE_RANGER_14_0 = "<p><b><i>Vanish.</i></b></p><p>Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.</p>";
const FEATURE_RANGER_18_0 = "<p><b><i>Feral Senses.</i></b></p><p>At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.</p><p>You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.</p>";
const FEATURE_RANGER_20_0 = "<p><b><i>Foe Slayer.</i></b></p><p>At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.</p>";
let fStyles_ranger = new Array(fs_archery,fs_cqs,fs_def,fs_duel,fs_mariner,fs_tf,fs_2wf,fs_druid,fs_bfighting,fs_inter,fs_twf,fs_uf);

// rogue
const FEATURE_ROGUE_1_0 = "<p><b><i>Expertise.</i></b></p><p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p><p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.</p>";
const FEATURE_ROGUE_1_1 = "<p><b><i>Sneak Attack.</i></b></p><p>Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.</p><p>You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.</p><p>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.</p>";
const FEATURE_ROGUE_1_2 = "<p><b><i>Thieves' Cant.</i></b></p><p>During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</p><p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</p>";
const FEATURE_ROGUE_2_0 = "<p><b><i>Cunning Action.</i></b></p><p>Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.</p>";
const FEATURE_ROGUE_5_0 = "<p><b><i>Uncanny Dodge.</i></b></p><p>Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.</p>";
const FEATURE_ROGUE_11_0 = "<p><b><i>Reliable Talent.</i></b></p><p>By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.</p>";
const FEATURE_ROGUE_14_0 = "<p><b><i>Blindsense.</i></b></p><p>Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.</p>";
const FEATURE_ROGUE_15_0 = "<p><b><i>Slippery Mind.</i></b></p><p>By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.</p>";
const FEATURE_ROGUE_18_0 = "<p><b><i>Elusive.</i></b></p><p>Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.</p>";
const FEATURE_ROGUE_20_0 = "<p><b><i>Stroke of Luck.</i></b></p><p>At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.</p><p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>";

// sorcerer
const FEATURE_SORCERER_2_0 = "<p><b><i>Font of Magic.</i></b></p><p>At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.</p><ul><li>Sorcery Points. You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.</li><li>Flexible Casting. You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.<ul><li>Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.</li><li>Converting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.</li></ul></li></ul><p><b><u>Creating Spell Slots</u></b></p><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"><th style=\"padding-right:12px;\">Spell Slot Level</th><th>Sorcery Point Cost</th></tr><tr><td>1st</td><td>2</td></tr><tr><td>2nd</td><td>3</td></tr><tr><td>3rd</td><td>5</td></tr><tr><td>4th</td><td>6</td></tr><tr><td>5th</td><td>7</td></tr></table>";
const FEATURE_SORCERER_3_0 = "<p><b><i>Metamagic.</i></b></p><p>At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.</p><p>You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.</p><ul><li><b>Careful Spell.</b> When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.</li><li><b>Distant Spell.</b> When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.<ul><li>When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.</li></ul></li><li><b>Empowered Spell.</b> When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.<ul><li>You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.</li></ul></li><li><b>Extended Spell.</b> When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.</li><li><b>Heightened Spell.</b> When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.</li><li><b>Quickened Spell.</b> When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.</li><li><b>Seeking Spell.</b> If you make an attack roll for a spell and miss, you can spend 2 sorcerer points to reroll the d20, and you must use the new roll.<ul><li>You can use Seeking Spell even if you have already used a different Metamagic option during the casting of the spell.</li></ul></li><li><b>Seeking Spell (UA).</b> When you cast a spell that requires you to make a spell attack roll or that forces a target to make a Dexterity saving throw, you can spend 1 sorcery point to ignore the effects of half- and three-quarters cover against targets of the spell.</li><li><b>Subtle Spell.</b> When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.</li><li><b>Transmuted Spell.</b> When you cast a spell that deals a type of damage from the following list, you can spend 1 sorcery point to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, thunder.</li><li><b>Twinned Spell.</b> When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, Magic Missile and Scorching Ray aren't eligible, but Ray of Frost and Chromatic Orb are.</li><ul>";
const FEATURE_SORCERER_20_0 = "<p><b><i>Sorcerous Restoration.</i></b></p><p>At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.</p>";

// warlock
const pactboon_Blade = "<b>Pact of the Blade</b><ul><li>You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</li><li>Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.</li><li>You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest.</li><li>You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.</li></ul>";
const pactboon_Chain = "<b>Pact of the Chain</b><ul><li>You learn the Find Familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.</li><li>When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.</li><li>Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to use its reaction to make one attack with its reaction.</li></ul>";
const pactboon_Tome = "<b>Pact of the Tome</b><ul><li>Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you.</li><li>If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.</li></ul>";
const pactboon_Talisman = "<b>Pact of the Talisman</b><ul><li>Your patron gives you an amulet, a talisman that can aid the wearer when the need is great. When the wearer fails an ability check, they can add a d4 to the roll, potentially turning the roll into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.</li><li>If you lose the talisman, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous amulet. The talisman turns to ash when you die.</li></ul>";
const pactboon_Starchain = "<b>Pact of the Star Chain</b><ul><li>The Seeker grants you a chain forged from starlight, decorated with seven gleaming motes of brightness. While the chain is on your person, you know the Augury spell and can cast it as a ritual. The spell doesn’t count against your number of spells known.</li><li>Additionally, you can invoke the Seeker’s power to gain advantage on an Intelligence check while you carry this item. Once you use this ability, you cannot use it again until you complete a short or long rest.</li><li>If you lose your Star Chain, you can perform a 1-hour ceremony to receive a replacement from the Seeker. The ceremony can be performed during a short or long rest, and it destroys the previous chain. The chain disappears in a flash of light when you die.</li></ul>";
const FEATURE_WARLOCK_2_0 = "<p><b><i>Eldritch Invocations.</i></b></p><p>In your study of occult lore, you have unearthed Eldritch Invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.</p><p>At 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. A level prerequisite refers to your level in this class.</p><p>Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.</p>";
const FEATURE_WARLOCK_3_0 = "<p><b><i>Pact Boon.</i></b></p><p>At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service.</p><ul><li>_PACTBOON</li></ul>";
const FEATURE_WARLOCK_11_0 = "<p><b><i>Mystic Arcanum.</i></b></p><p>At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.</p><p>You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.</p><p>At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.</p>";
const FEATURE_WARLOCK_20_0 = "<p><b><i>Eldritch Master.</i></b></p><p>At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.</p>";
let pactBoons = new Array(pactboon_Blade, pactboon_Chain, pactboon_Tome, pactboon_Talisman);
let ei_a = "<li><p><b><u>Agonizing Blast</u></b></p><p><b><i>Prerequisite: Eldritch Blast cantrip</i></b></p><p>When you cast Eldritch Blast, add your Charisma modifier to the damage it deals on a hit.</p></li>";
let ei_ag = "<li><p><b><u>Arcane Gunslinger</u></b></p><p><b><i>Prerequisite: Pact of the Blade feature</i></b></p><p>You can create a pact weapon that is a sidearm or long arm, and you can transform a magical sidearm or long arm into your pact weapon.</p></li>";
let ei_arm = "<li><p><b><u>Armor of Shadows</u></b></p><p>You can cast Mage Armor on yourself at will, without expending a spell slot or material components.</p></li>";
let ei_as = "<li><p><b><u>Ascendant Step</u></b></p><p><b><i>Prerequisite: 9th level</i></b></p><p>You can cast Levitate on yourself at will, without expending a spell slot or material components.</p></li>";
let ei_am = "<li><p><b><u>Aspect of the Moon</u></b></p><p><b><i>Prerequisite: Pact of the Tome feature</i></b></p><p>You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading your Book of Shadows and keeping watch.</p></li>";
let ei_b = "<li><p><b><u>Beast Speech</u></b></p><p>You can cast Speak with Animals at will, without expending a spell slot.</p></li>";
let ei_bi = "<li><p><b><u>Beguiling Influence</u></b></p><p>You gain proficiency in the Deception and Persuasion skills.</p></li>";
let ei_bw = "<li><p><b><u>Bewitching Whispers</u></b></p><p><b><i>Prerequisite: 7th level</i></b></p><p>You can cast Compulsion once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_bt = "<li><p><b><u>Bond of the Talisman</u></b></p><p><b><i>Prerequisite: 12th level, Pact of the Talisman feature</i></b></p><p>While someone else is wearing your talisman, you can use your action to teleport to the unoccupied space closest to them, provided the two of you are on the same plane of existence. The wearer of your talisman can do the same thing, using their action to teleport to you. The teleportation can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.</p></li>";
let ei_bs = "<li><p><b><u>Book of Ancient Secrets</u></b></p><p><b><i>Prerequisite: Pact of the Tome feature</i></b></p><p>You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list (the two needn't be from the same list). The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.</p><p>On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.</p></li>";
let ei_c = "<li><p><b><u>Chains of Carceri</u></b></p><p><b><i>Prerequisite: 15th level, Pact of the Chain feature</i></b></p><p>You can cast Hold Monster at will – targeting a celestial, fiend, or elemental – without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.</p></li>";
let ei_cf = "<li><p><b><u>Cloak of Flies</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>As a bonus action, you can surround yourself with a magical aura that looks like buzzing flies. The aura extends 5 feet from you in every direction, but not through total cover. It lasts until you're incapacitated or you dismiss it as a bonus action.</p><p>The aura grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. Any other creature that starts its turn in the aura takes poison damage equal to your Charisma modifier (minimum of 0 damage).</p><p>Once you use this invocation, you can’t use it again until you finish a short or long rest.</p></li>";
let ei_d = "<li><p><b><u>Devil's Sight</u></b></p><p>You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.</p></li>";
let ei_dw = "<li><p><b><u>Dreadful Word</u></b></p><p><b><i>Prerequisite: 7th level</i></b></p><p>You can cast Confusion once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_em = "<li><p><b><u>Eldritch Mind</u></b></p><p>You have advantage on Constitution saving throws that you make to maintain your concentration on a spell.</p></li>";
let ei_es = "<li><p><b><u>Eldritch Sight</u></b></p><p>You can cast Detect Magic at will, without expending a spell slot or material components.</p></li>";
let ei_esm = "<li><p><b><u>Eldritch Smite</u></b></p><p><b><i>Prerequisite: 5th level, Pact of the Blade feature</i></b></p><p>Once per turn when you hit a creature with your pact weapon, you can expend a warlock spell slot to deal an extra 1d8 force damage to the target, plus another 1d8 per level of the spell slot, and you can knock the target prone if it is Huge or smaller.</p></li>";
let ei_esp = "<li><p><b><u>Eldritch Spear</u></b></p><p><b><i>Prerequisite: Eldritch Blast cantrip</i></b></p><p>When you cast Eldritch Blast, its range is 300 feet.</p></li>";
let ei_ey = "<li><p><b><u>Eyes of the Rune Keeper</u></b></p><p>You can read all writing.</p></li>";
let ei_f = "<li><p><b><u>Far Scribe</u></b></p><p><b><i>Prerequisite: 5th level, Pact of the Tome feature</i></b></p><p>A new page appears in your Book of Shadows. With your permission, a creature can use its action to write its name on that page, which can contain a number of names equal to your proficiency bonus.</p><p>You can cast the Sending spell, targeting a creature whose name is on the page, without using a spell slot and without using material components. To do so, you must write the message on the page. The target hears the message in their mind, and if the target replies, their message appears on the page, rather than in your mind. The writing disappears after 1 minute.</p><p>As an action, you can magically erase a name on the page by touching it.</p></li>";
let ei_fv = "<li><p><b><u>Fiendish Vigor</u></b></p><p>You can cast False Life on yourself at will as a 1st-level spell, without expending a spell slot or material components.</p></li>";
let ei_g = "<li><p><b><u>Gaze of Two Minds</u></b></p><p>You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.</p></li>";
let ei_gg = "<li><p><b><u>Ghostly Gaze</u></b></p><p><b><i>Prerequisite: 7th level</i></b></p><p>As an action, you gain the ability to see through solid objects to a range of 30 feet. Within that range, you have darkvision if you don’t already have it. This special sight lasts for 1 minute or until your concentration ends (as if you were concentrating on a spell). During that time, you perceive objects as ghostly, transparent images.</p><p>Once you use this invocation, you can’t use it again until you finish a short or long rest.</p></li>";
let ei_gd = "<li><p><b><u>Gift of the Depths</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>You can breathe underwater, and you gain a swimming speed equal to your walking speed.</p><p>You can also cast Water Breathing without expending a spell slot. You regain the ability to do so when you finish a long rest.</p></li>";
let ei_ge = "<li><p><b><u>Gift of the Ever-Living Ones</u></b></p><p><b><i>Prerequisite: Pact of the Chain feature</i></b></p><p>Whenever you regain hit points while your familiar is within 100 feet of you, treat any dice rolled to determine the hit points you regain as having rolled their maximum value for you.</p></li>";
let ei_gp = "<li><p><b><u>Gift of the Protectors</u></b></p><p><b><i>Prerequisite: 9th level, Pact of the Tome feature</i></b></p><p>A new page appears in your Book of Shadows. With your permission, a creature can use its action to write its name on that page, which can contain a number of names equal to your proficiency bonus.</p><p>When any creature whose name is on the page is reduced to 0 hit points but not killed outright, the creature magically drops to 1 hit point instead. Once this magic is triggered, no creature can benefit from it until you finish a long rest.</p><p>As an action, you can magically erase a name on the page by touching it.</p></li>";
let ei_gh = "<li><p><b><u>Grasp of Hadar</u></b></p><p><b><i>Prerequisite: Eldritch Blast cantrip</i></b></p><p>Once on each of your turns when you hit a creature with your Eldritch Blast, you can move that creature in a straight line 10 feet closer to yourself.</p></li>";
let ei_ipw = "<li><p><b><u>Improved Pact Weapon</u></b></p><p><b><i>Prerequisite: Pact of the Blade feature</i></b></p><p>You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells.</p><p>In addition, the weapon gains a +1 bonus to its attack and damage rolls, unless it is a magic weapon that already has a bonus to those rolls.</p><p>Finally, the weapon you conjure can be a shortbow, longbow, light crossbow, or heavy crossbow.</p></li>";
let ei_i = "<li><p><b><u>Investment of the Chain Master</u></b></p><p><b><i>Prerequisite: Pact of the Chain feature</i></b></p><p>When you cast Find Familiar, you infuse the summoned familiar with a measure of your eldritch power, granting the creature the following benefits:<ul><li>The familiar gains either a flying speed or a swimming speed (your choice) of 40 feet.</li><li>As a bonus action, you can command the familiar to take the Attack action.</li><li>The familiar’s weapon attacks are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks.</li><li>If the familiar forces a creature to make a saving throw, it uses your spell save DC.</li><li>When the familiar takes damage, you can use your reaction to grant it resistance against that damage.</li></ul></p></li>";
let ei_ll = "<li><p><b><u>Lance of Lethargy</u></b></p><p><b><i>Prerequisite: Eldritch Blast cantrip</i></b></p><p>Once on each of your turns when you hit a creature with your Eldritch Blast, you can reduce that creature’s speed by 10 feet until the end of your next turn.</p></li>";
let ei_l = "<li><p><b><u>Lifedrinker</u></b></p><p><b><i>Prerequisite: 12th level, Pact of the Blade feature</i></b></p><p>When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).</p></li>";
let ei_mx = "<li><p><b><u>Maddening Hex</u></b></p><p><b><i>Prerequisite: 5th level, Hex spell or a warlock feature that curses</i></b></p><p>As a bonus action, you cause a psychic disturbance around the target cursed by your Hex spell or by a warlock feature of yours, such as Hexblade’s Curse and Sign of Ill Omen. When you do so, you deal psychic damage to the cursed target and each creature of your choice within 5 feet of it. The psychic damage equals your Charisma modifier (minimum of 1 damage). To use this invocation, you must be able to see the cursed target, and it must be within 30 feet of you.</p></li>";
let ei_m = "<li><p><b><u>Mask of Many Faces</u></b></p><p>You can cast Disguise Self at will, without expending a spell slot.</p></li>";
let ei_mm = "<li><p><b><u>Master of Myriad Forms</u></b></p><p><b><i>Prerequisite: 15th level</i></b></p><p>You can cast Alter Self at will, without expending a spell slot.</p></li>";
let ei_mc = "<li><p><b><u>Minions of Chaos</u></b></p><p><b><i>Prerequisite: 9th level</i></b></p><p>You can cast Conjure Elemental once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_mi = "<li><p><b><u>Mire the Mind</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>You can cast Slow once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_mv = "<li><p><b><u>Misty Visions</u></b></p><p>You can cast Silent Image at will, without expending a spell slot or material components.</p></li>";
let ei_o = "<li><p><b><u>One with Shadows</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction.</p></li>";
let ei_ol = "<li><p><b><u>Otherworldly Leap</u></b></p><p><b><i>Prerequisite: 9th level</i></b></p><p>You can cast Jump at will, without expending a spell slot.</p></li>";
let ei_p = "<li><p><b><u>Protection of the Talisman</u></b></p><p><b><i>Prerequisite: 7th level, Pact of the Talisman feature</i></b></p><p>When the wearer of your talisman fails a saving throw, they can add a d4 to the roll, potentially turning the save into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.</p></li>";
let ei_r = "<li><p><b><u>Rebuke of the Talisman</u></b></p><p><b><i>Prerequisite: Pact of the Talisman feature</i></b></p><p>When the wearer of your talisman is hit by an attacker you can see within 30 feet of you, you can use your reaction to deal psychic damage to the attacker equal to your proficiency bonus and push it up to 10 feet away from the talisman's wearer.</p></li>";
let ei_rx = "<li><p><b><u>Relentless Hex</u></b></p><p><b><i>Prerequisite: 7th level, Hex spell or a warlock feature that curses</i></b></p><p>Your curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see within 5 feet of the target cursed by your Hex spell or by a warlock feature of yours, such as Hexblade’s Curse and Sign of Ill Omen. To teleport in this way, you must be able to see the cursed target.</p></li>";
let ei_rb = "<li><p><b><u>Repelling Blast</u></b></p><p><b><i>Prerequisite: Eldritch Blast cantrip</i></b></p><p>When you hit a creature with Eldritch Blast, you can push the creature up to 10 feet away from you in a straight line.</p></li>";
let ei_s = "<li><p><b><u>Sculptor of Flesh</u></b></p><p><b><i>Prerequisite: 7th level</i></b></p><p>You can cast Polymorph once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_ss = "<li><p><b><u>Shroud of Shadow</u></b></p><p><b><i>Prerequisite: 15th level</i></b></p><p>You can cast Invisibility at will, without expending a spell slot.</p></li>";
let ei_so = "<li><p><b><u>Sign of Ill Omen</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>You can cast Bestow Curse once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_spw = "<li><p><b><u>Superior Pact Weapon</u></b></p><p><b><i>Prerequisite: 9th level, Pact of the Blade feature</i></b></p><p>You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells.</p><p>In addition, the weapon counts as a magic weapon with a +2 bonus to its attack and damage rolls, unless it is already a magic weapon that you transformed into your pact weapon.</p></li>";
let ei_t = "<li><p><b><u>Thief of Five Fates</u></b></p><p>You can cast Bane once using a warlock spell slot. You can't do so again until you finish a long rest.</p></li>";
let ei_tb = "<li><p><b><u>Thirsting Blade</u></b></p><p><b><i>Prerequisite: 5th-level, Pact of the Blade feature</i></b></p><p>You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.</p></li>";
let ei_tl = "<li><p><b><u>Tomb of Levistus</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. Immediately after you take the damage, you gain vulnerability to fire damage, your speed is reduced to 0, and you are incapacitated. These effects, including any remaining temporary hit points, all end when the ice melts.</p><p>Once you use this invocation, you can’t use it again until you finish a short or long rest.</p></li>";
let ei_te = "<li><p><b><u>Trickster's Escape</u></b></p><p><b><i>Prerequisite: 7th level</i></b></p><p>You can cast Freedom of Movement once on yourself without expending a spell slot. You regain the ability to do so when you finish a long rest.</p></li>";
let ei_upw = "<li><p><b><u>Ultimate Pact Weapon</u></b></p><p><b><i>Prerequisite: 15th level, Pact of the Blade feature</i></b></p><p>You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells.</p><p>In addition, the weapon counts as a magic weapon with a +3 bonus to its attack and damage rolls, unless it is already a magic weapon that you transformed into your pact weapon.</p></li>";
let ei_u = "<li><p><b><u>Undying Servitude</u></b></p><p><b><i>Prerequisite: 5th-level</i></b></p><p>You can cast Animate Dead without using a spell slot. Once you do so, you can't cast it in this way again until you finish a long rest.</p></li>";
let ei_v = "<li><p><b><u>Visions of Distant Realms</u></b></p><p><b><i>Prerequisite: 15th level</i></b></p><p>You can cast Arcane Eye at will, without expending a spell slot.</p></li>";
let ei_vc = "<li><p><b><u>Voice of the Chain Master</u></b></p><p><b><i>Prerequisite: Pact of the Chain feature</i></b></p><p>You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.</p></li>";
let ei_w = "<li><p><b><u>Whispers of the Grave</u></b></p><p><b><i>Prerequisite: 9th level</i></b></p><p>You can cast Speak with Dead at will, without expending a spell slot.</p></li>";
let ei_ws = "<li><p><b><u>Witch Sight</u></b></p><p><b><i>Prerequisite: 15th level</i></b></p><p>You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.</p></li>";

let ei_base = new Array(ei_a,ei_arm,ei_b,ei_bi,ei_d,ei_em,ei_es,ei_esp,ei_ey,ei_fv,ei_g,ei_gh,ei_ll,ei_m,ei_mv,ei_rb,ei_t);
let ei_5 = new Array(ei_cf,ei_gd,ei_mx,ei_mi,ei_o,ei_so,ei_tl);
let ei_7 = new Array(ei_bw,ei_dw,ei_gg,ei_rx,ei_s,ei_te);
let ei_9 = new Array(ei_as,ei_mc,ei_ol,ei_w);
let ei_15 = new Array(ei_mm,ei_ss,ei_v,ei_ws);
let ei_chain_0 = new Array(ei_ge,ei_i,ei_vc);
let ei_chain_15 = new Array(ei_c);
let ei_blade_0 = new Array(ei_ag,ei_ipw);
let ei_blade_5 = new Array(ei_esm,ei_tb);
let ei_blade_9 = new Array(ei_spw);
let ei_blade_12 = new Array(ei_l);
let ei_blade_15 = new Array(ei_upw);
let ei_tome_0 = new Array(ei_am,ei_bs);
let ei_tome_5 = new Array(ei_f);
let ei_tome_9 = new Array(ei_gp);
let ei_talisman_0 = new Array(ei_r);
let ei_talisman_7 = new Array(ei_p);
let ei_talisman_12 = new Array(ei_bt);

const numInvocations = new Array(0,0,2,2,2,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8);

// wizard
const FEATURE_WIZARD_1_0 = "<p><b><i>Arcane Recovery.</i></b></p><p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p><p>For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.</p>";
const FEATURE_WIZARD_18_0 = "<p><b><i>Spell Mastery.</i></b></p><p>At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.</p><p>By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.</p>";
const FEATURE_WIZARD_20_0 = "<p><b><i>Signature Spells.</i></b></p><p>When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.</p><p>If you want to cast either spell at a higher level, you must expend a spell slot as normal.</p>";


// race features
const SPD_DEFAULT = "<p><b>Speed:</b> _SPD ft.</p>";
const SPD_SWIM_DEFAULT = "<p><b>Speed:</b> _SPD ft., swim 30 ft.</p>";
const SPD_FLY_DEFAULT = "<p><b>Speed:</b> _SPD ft., fly 30 ft.</p>";
let ALL_LANGS = new Array("Aarakocra","Abyssal","Auran","Celestial","Elvish","Dwarvish","Draconic","Giant","Gith","Gnomish","Goblin","Infernal","Leonin","Loxodon","Merfolk","Minotaur","Orc","Primordial","Sylvan","Vedalken");

const FEATURE_DARKVISION = "<p><b><i>Darkvision.</b></i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.</p>";
const FEATURE_POWERFULBUILD = "<p><b><i>Powerful Build.</i></b> You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.</p>";
const FEATURE_CREATURETYPE_FEY = "<p><b><i>Fey.</i></b> Your creature type is fey, rather than humanoid.</p>";
const FEATURE_SUNSENS = "<p><b><i>Sunlight Sensitivity</i></b> You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.</p>";

// aarakocra
const FEATURE_AARAKOCRA_1 = "<p><b><i>Flight.</b></i> You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor.</p>";
const FEATURE_AARAKOCRA_2 = "<p><b><i>Talons.</b></i> Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.</p>";
const SPD_AARAKOCRA = "<p><b>Speed:</b> _SPD ft., fly 50 ft.</p>";

// aasimar (base)
const FEATURE_AASIMAR_1 = "<p><b><i>Darkvision.</b></i> Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
const FEATURE_AASIMAR_2 = "<p><b><i>Celestial Resistance.</i></b> You have resistance to necrotic and radiant damage.</p>";
const FEATURE_AASIMAR_3 = "<p><b><i>Healing Hands.</i></b> As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.</p>";
const FEATURE_AASIMAR_4 = "<p><b><i>Light Bearer.</i></b> You know the light cantrip. Charisma is your spellcasting ability for it.</p>";
// protector aas
const FEATURE_AASIMAR_PROTECTOR_1 = "<p><b><i>Radiant Soul.</i></b> Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back.<br>Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.<br>Once you use this trait, you can't use it again until you finish a long rest.</p>";
// sourge aas
const FEATURE_AASIMAR_SCOURGE_1 = "<p><b><i>Radiant Consumption.</i></b> Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you.<br>Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.<br>Once you use this trait, you can't use it again until you finish a long rest.</p>";
// fallen aas
const FEATURE_AASIMAR_FALLEN_1 = "<p><b><i>Necrotic Shroud.</i></b> Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn.<br>Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level.<br>Once you use this trait, you can't use it again until you finish a long rest.</p>";

// bugbear
const FEATURE_BUGBEAR_1 = "<p><b><i>Long-Limbed.</i></b> When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.</p>";
const FEATURE_BUGBEAR_2 = "<p><b><i>Sneaky.</i></b> You are proficient in the Stealth skill.</p>";
const FEATURE_BUGBEAR_3 = "<p><b><i>Surprise Attack.</i></b> If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.</p>";

// centaur
const FEATURE_CENTAUR_1 = "<p><b><i>Charge.</i></b> If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.</p>";
const FEATURE_CENTAUR_2 = "<p><b><i>Hooves.</i></b> Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.</p>";
const FEATURE_CENTAUR_3 = "<p><b><i>Equine Build.</i></b> You count as one size larger when determining your carrying capacity and the weight you can push or drag.<br>In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.</p>";
const FEATURE_CENTAUR_4 = "<p><b><i>Survivor.</i></b> You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.</p>";
let proficiencies_centaur = new Array(sAh,sM,sN,sSv);

// changeling
const FEATURE_CHANGELING_1 = "<p><b><i>Shapechanger.</i></b> As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.<br>You stay in the new form until you use an action to revert to your true form or until you die.</p>";
const FEATURE_CHANGELING_2 = "<p><b><i>Changeling Instincts.</i></b> You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.</p>";
let proficiencies_changeling = new Array(sD,sIn,sIt,sPs);

// dragonborn variants
const FEATURE_DRAGONBORN_RED = "<p><b><i>Chromatic Ancestry.</i></b> You have a red dragon ancestor, granting you a special magical affinity with the Fire element.</p>";
const FEATURE_DRAGONBORN_GREEN = "<p><b><i>Chromatic Ancestry.</i></b> You have a green dragon ancestor, granting you a special magical affinity with the Poison element.</p>";
const FEATURE_DRAGONBORN_BLUE = "<p><b><i>Chromatic Ancestry.</i></b> You have a blue dragon ancestor, granting you a special magical affinity with the Lightning element.</p>";
const FEATURE_DRAGONBORN_BLACK = "<p><b><i>Chromatic Ancestry.</i></b> You have a black dragon ancestor, granting you a special magical affinity with the Acid element.</p>";
const FEATURE_DRAGONBORN_WHITE = "<p><b><i>Chromatic Ancestry.</i></b> You have a white dragon ancestor, granting you a special magical affinity with the Cold element.</p>";

const FEATURE_DRAGONBORN_CRYSTAL = "<p><b><i>Gem Ancestry.</i></b> You have a crystal dragon ancestor, granting you a special magical affinity with the Radiant element.</p>";
const FEATURE_DRAGONBORN_TOPAZ = "<p><b><i>Gem Ancestry.</i></b> You have a topaz dragon ancestor, granting you a special magical affinity with the Necrotic element.</p>";
const FEATURE_DRAGONBORN_AMETHYST = "<p><b><i>Gem Ancestry.</i></b> You have a amethyst dragon ancestor, granting you a special magical affinity with the Force element.</p>";
const FEATURE_DRAGONBORN_SAPPHIRE = "<p><b><i>Gem Ancestry.</i></b> You have a sapphire dragon ancestor, granting you a special magical affinity with the Thunder element.</p>";
const FEATURE_DRAGONBORN_EMERALD = "<p><b><i>Gem Ancestry.</i></b> You have a emerald dragon ancestor, granting you a special magical affinity with the Psychic element.</p>";

const FEATURE_DRAGONBORN_GOLD = "<p><b><i>Metallic Ancestry.</i></b> You have a gold dragon ancestor, granting you a special magical affinity with the Fire element.</p>";
const FEATURE_DRAGONBORN_SILVER = "<p><b><i>Metallic Ancestry.</i></b> You have a silver dragon ancestor, granting you a special magical affinity with the Cold element.</p>";
const FEATURE_DRAGONBORN_BRONZE = "<p><b><i>Metallic Ancestry.</i></b> You have a bronze dragon ancestor, granting you a special magical affinity with the Lightning element.</p>";
const FEATURE_DRAGONBORN_BRASS = "<p><b><i>Metallic Ancestry.</i></b> You have a brass dragon ancestor, granting you a special magical affinity with the Fire element.</p>";
const FEATURE_DRAGONBORN_COPPER = "<p><b><i>Metallic Ancestry.</i></b> You have a copper dragon ancestor, granting you a special magical affinity with the Acid element.</p>";

const FEATURE_DRAGONBORN_1 = "<p><b><i>Draconic Resistance.</b></i> You have resistance to the _DTYPE damage.</p>";

// metal dragonborn
const FEATURE_DRAGONBORN_METALLIC_1 = "<p><b><i>Breath Weapon.</i></b> When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = _DDC [8 + your Constitution modifier + your proficiency bonus]). On a failed save, the creature takes 1d10 _DTYPE damage. On a successful save, it takes half as much damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).<br>You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>";
const FEATURE_DRAGONBORN_METALLIC_2 = "<p><b><i>Metallic Breath Weapon.</b></i> At 5th level, you gain a second breath weapon. When you take the Attack action on your turn, you can replace one of your attacks with an exhalation in a 15-foot cone. The save DC for this breath is _DDC (8 + your Constitution modifier + your proficiency bonus). Whenever you use this trait, choose one:<ul><li>Enervating Breath. Each creature in the cone must succeed on a Constitution saving throw or become incapacitated until the start of your next turn.</li><li>Repulsion Breath. Each creature in the cone must succeed on a Strength saving throw or be pushed 20 feet away from you and be knocked prone.</li></ul>Once you use your Metallic Breath Weapon, you can't do so again until you finish a long rest.</p>";
// chroma dragonborn
const FEATURE_DRAGONBORN_CHROMATIC_1 = "<p><b><i>Breath Weapon.</b></i> When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = _DDC [8 + your Constitution modifier + your proficiency bonus]). On a failed save, the creature takes 1d10 _DTYPE damage. On a successful save, it takes half as much damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).<br>You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>";
const FEATURE_DRAGONBORN_CHROMATIC_2 = "<p><b><i>Chromatic Warding.</b></i> Starting at 5th level, as an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune _DTYPE damage. Once you use this trait, you can't do so again until you finish a long rest.</p>";
// gem dragonborn
const FEATURE_DRAGONBORN_GEM_1 = "<p><b><i>Breath Weapon.</b></i> When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = _DDC [8 + your Constitution modifier + your proficiency bonus]). On a failed save, the creature takes 1d10 _DTYPE damage. On a successful save, it takes half as much damage. This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).<br>You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>";
const FEATURE_DRAGONBORN_GEM_2 = "<p><b><i>Psionic Mind.</b></i> You can send telepathic messages to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand these messages, but it must be able to understand at least one language to comprehend them.</p>";
const FEATURE_DRAGONBORN_GEM_3 = "<p><b><i>Gem Flight.</b></i> Starting at 5th level, you can use a bonus action to manifest spectral wings on your body. These wings last for 1 minute. For the duration, you gain a flying speed equal to your walking speed and can hover. Once you use this trait, you can't do so again until you finish a long rest.</p>";

// dwarf
const FEATURE_DWARF_1 = "<p><b><i>Darkvision.</b></i> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
const FEATURE_DWARF_2 = "<p><b><i>Dwarven Resilience.</b></i> You have advantage on saving throws against poison, and you have resistance against poison damage.</p>";
const FEATURE_DWARF_3 = "<p><b><i>Dwarven Combat Training.</b></i> You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>";
const FEATURE_DWARF_4 = "<p><b><i>Tool Proficiency.</b></i> You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools.</p>";
const FEATURE_DWARF_5 = "<p><b><i>Stonecunning.</i></b> Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</p>";
const SPD_DWARF= "<p><b>Speed:</b> _SPD ft. Your speed is not reduced by wearing heavy armor.</p>";
// hill dwarf
const FEATURE_DWARF_HILL = "<p><b><i>Dwarven Toughness.</b></i> Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</p>";
// mtn dwarf
const FEATURE_DWARF_MTN = "<p><b><i>Dwarven Armor Training.</i></b> You have proficiency with light and medium armor.</p>";
// duergar
const FEATURE_SDARKVISION = "<p><b><i>Superior Darkvision.</b></i> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
const FEATURE_DWARF_2_D = "<p><b><i>Duergar Resilience.</i></b> You have advantage on saving throws against poison, and you have resistance against poison damage. You also have advantage on saving throws against illusions and against being charmed or paralyzed.</p>";
const FEATURE_DWARF_DUERGAR_1 = "<p><b><i>Duergar Magic.</i></b> When you reach 3rd level, you can cast the Enlarge/Reduce spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the Invisibility spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.</p>";

// elf (base)
const FEATURE_ELF_1 = "<p><b><i>Darkvision.</i></b> Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
const FEATURE_ELF_2 = "<p><b><i>Keen Senses.</i></b> You have proficiency in the Perception skill.</p>";
const FEATURE_ELF_3 = "<p><b><i>Fey Ancestry.</i></b> You have advantage on saving throws against being charmed, and magic can't put you to sleep.</p>";
const FEATURE_ELF_4 = "<p><b><i>Trance.</i></b> Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>";
// elf (avariel)
const FEATURE_ELF_AVARIEL_1 = "<p><b><i>Extra Language.</i></b> You can speak, read, and write Auran.</p>";
const FEATURE_ELF_AVARIEL_2 = "<p><b><i>Flight.</i></b> You have a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor.</p>";
// drow
const FEATURE_ELF_1_D = "<p><b><i>Superior Darkvision.</b></i> Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
const FEATURE_ELF_DROW_1 = "<p><b><i>Drow Magic.</i></b> You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait; you regain the ability to cast it when you finish a long rest. When you reach 5th level, you can also cast the darkness spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.</p>";
const FEATURE_ELF_DROW_2 = "<p><b><i>Drow Weapon Training.</i></b> You have proficiency with rapiers, shortswords, and hand crossbows.</p>";
// eladrin
const FEATURE_ELF_ELADRIN_1 = "<p><b><i>Fey Step.</i></b> As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.<br>When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals _EDC (8 + your proficiency bonus + your Charisma modifier):<ul><li><b>Autumn.</b> Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.</li><li><b>Winter.</b> When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.</li><li><b>Spring.</b> When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.</li><li><b>Summer.</b> Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your Charisma modifier (minimum of 1 damage).</li></ul></p>";
// high elf
const FEATURE_ELF_HIGH_1 = "<p><b><i>Elf Weapon Training.</i></b> You have proficiency with the longsword, shortsword, shortbow, and longbow.</p>";
// ^ wood elves also get this feature!
const FEATURE_ELF_HIGH_2 = "<p><b><i>Cantrip.</i></b> You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.</p>";
const FEATURE_ELF_HIGH_3 = "<p><b><i>Extra Language.</i></b> You can speak, read, and write one extra language of your choosing.</p>";
// sea elf
const FEATURE_ELF_SEA_1 = "<p><b><i>Sea Elf Training.</i></b> You have proficiency with the longsword, shortsword, shortbow, and longbow.</p>";
const FEATURE_ELF_SEA_2 = "<p><b><i>Child of the Sea.</i></b> You have a swimming speed of 30 feet, and you can breathe air and water.</p>";
const FEATURE_ELF_SEA_3 = "<p><b><i>Friend of the Sea.</i></b> Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.</p>";
const FEATURE_ELF_SEA_4 = "<p><b><i>Extra Language.</i></b> You can speak, read, and write Aquan.</p>";
// pallid elf
const FEATURE_ELF_PALLID_1 = "<p><b><i>Incisive Sense.</i></b> You have advantage on Intelligence (Investigation) and Wisdom (Insight) checks.</p>";
const FEATURE_ELF_PALLID_2 = "<p><b><i>Blessing of the Moon Weaver.</i></b> You know the light cantrip. When you reach 3rd level, you can cast the sleep spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the invisibility spell (targeting yourself only) once with this trait and regain the ability to do so when you finish a long rest. Casting these spells with this trait doesn't require material components. Wisdom is your spellcasting ability for these spells.</p>";
// shadar kai
const FEATURE_ELF_SHADAR_1 = "<p><b><i>Necrotic Resistance.</i></b> You have resistance to necrotic damage.</p>";
const FEATURE_ELF_SHADAR_2 = "<p><b><i>Blessing of the Raven Queen.</i></b> As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest.<br>Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.</p>";
// wood elf
const FEATURE_ELF_WOOD_1 = "<p><b><i>Fleet of Foot.</i></b> Your base walking speed increases to 35 feet.</p>";
const FEATURE_ELF_WOOD_2 = "<p><b><i>Mask of the Wild.</i></b> You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.</p>";

// fairy
const FEATURE_FAIRY_1 = "<p><b><i>Fairy Magic.</i></b> You know the druidcraft cantrip. Starting at 3rd level, you can cast the faerie fire spell with this trait. Starting at 5th level, you can also cast the enlarge/reduce spell with this trait. Once you cast faerie fire or enlarge/reduce with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.<br>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</p>";
const FEATURE_FAIRY_2 = "<p><b><i>Flight.</i></b> Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.</p>";
const SPD_FAIRY = "<p><b>Speed:</b> _SPD ft., fly equal to your walking speed</p>";

// firbolg
const FEATURE_FIRBOLG_1 = "<p><b><i>Firbolg Magic.</i></b> You can cast detect magic and disguise self spells with this trait. When you use this version of disguise self, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.<br>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</p>";
const FEATURE_FIRBOLG_2 = "<p><b><i>Hidden Step.</i></b> As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>";
const FEATURE_FIRBOLG_3 = "<p><b><i>Speech of Beast and Leaf.</i></b> You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.</p>";

// fire genasi
const FEATURE_GENASI_FIRE_1 = "<p><b><i>Fire Resistance.</b></i> You have resistance to fire damage.</p>";
const FEATURE_GENASI_FIRE_2 = "<p><b><i>Reach to the Blaze.</b></i> You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.</p>";
// air genasi
const FEATURE_GENASI_AIR_1 = "<p><b><i>Unending Breath.</b></i> You can hold your breath indefinitely while you're not incapacitated.</p>";
const FEATURE_GENASI_AIR_2 = "<p><b><i>Mingle with the Wind.</b></i> You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.</p>";
// water genasi
const FEATURE_GENASI_WATER_1 = "<p><b><i>Acid Resistance.</b></i> You have resistance to acid damage.</p>";
const FEATURE_GENASI_WATER_2 = "<p><b><i>Amphibious.</b></i> You can breathe air and water.</p>";
const FEATURE_GENASI_WATER_3 = "<p><b><i>Swim.</b></i> You have a swimming speed of 30 feet.</p>";
const FEATURE_GENASI_WATER_4 = "<p><b><i>Call to the Wave.</b></i> You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.</p>";
// earth genasi
const FEATURE_GENASI_EARTH_1 = "<p><b><i>Earth Walk.</b></i> You can move across difficult terrain made of earth or stone without expending extra movement.</p>";
const FEATURE_GENASI_EARTH_2 = "<p><b><i>Merge with Stone.</b></i> You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.</p>";

// gith
// githyanki
const FEATURE_GITHYANKI_1 = "<p><b><i>Decadent Mastery.</i></b> You learn one language of your choice, and you are proficient with one skill or tool of your choice. In the timeless city of Tu'narath, githyanki have bountiful time to master odd bits of knowledge.</p>";
const FEATURE_GITHYANKI_2 = "<p><b><i>Martial Prodigy.</i></b> You are proficient with light and medium armor and with shortswords, longswords, and greatswords.</p>";
const FEATURE_GITHYANKI_3 = "<p><b><i>Githyanki Psionics.</i></b> You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.<br>When you reach 3rd level, you can cast jump once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the misty step spell once with this trait, and you regain the ability to do so when you finish a long rest.<br>Intelligence is your spellcasting ability for these spells. When you cast them with this trait, they don't require components.</p>";
// githzerai
const FEATURE_GITHZERAI_1 = "<p><b><i>Mental Discipline.</i></b> You have advantage on saving throws against the charmed and frightened conditions. Under the tutelage of monastic masters, githzerai learn to govern their own minds.</p>";
const FEATURE_GITHZERAI_2 = "<p><b><i>Githzerai Psionics.</i></b> You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.<br>When you reach 3rd level, you can cast shield once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect thoughts spell once with this trait, and you regain the ability to do so when you finish a long rest.<br>Wisdom is your spellcasting ability for these spells. When you cast them with this trait, they don't require components.</p>";

// gnome
const FEATURE_GNOME_1 = "<p><b><i>Gnome Cunning.</i></b> You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.</p>";
// deep gnome
const FEATURE_GNOME_DEEP_1 = "<p><b><i>Stone Camouflage.</i></b> You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.</p>";
// forest gnome
const FEATURE_GNOME_FOREST_1 = "<p><b><i>Natural Illusionist.</i></b> You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.</p>";
const FEATURE_GNOME_FOREST_2 = "<p><b><i>Speak with Small Beasts.</i></b> Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.</p>";
// rock gnome
const FEATURE_GNOME_ROCK_1 = "<p><b><i>Artificer's Lore.</i></b> Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply</p>";
const FEATURE_GNOME_ROCK_2 = "<p><b><i>Tinker.</i></b> You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.</p><p>When you create a device, choose one of the following options:<ul><li><b><i>Clockwork Toy.</i></b>This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.</li><li><b><i>Fire Starter.</i></b>The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.</li><li><b><i>Music Box.</i></b>When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.</li><ul></p>";

// goblin

// goliath

// half-elf
const FEATURE_HALFELF_1 = "<p><b><i>Darkvision.</i></b> Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
const FEATURE_HALFELF_2 = "<p><b><i>Fey Ancestry.</i></b> You have advantage on saving throws against being charmed, and magic can't put you to sleep..</p>";
const FEATURE_HALFELF_3 = "<p><b><i>Skill Versatility.</i></b> You gain proficiency in two skills of your choice.</p>";

// half-orc
const FEATURE_HALFORC_1 = "<p><b><i>Menacing.</i></b> You gain proficiency in the Intimidation skill.</p>";
const FEATURE_HALFORC_2 = "<p><b><i>Relentless Endurance.</i></b> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.</p>";
const FEATURE_HALFORC_3 = "<p><b><i>Savage Attacks.</i></b> When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.</p>";

// halfling

// harengon

// hobgoblin

// human

// kalashtar

// kenku

// kobold

// leonin

// lizardfolk
const FEATURE_LIZARDFOLK_1 = "<p><b><i>Swim Speed.</b></i> You have a swimming speed of 30 feet.</p>";
const FEATURE_LIZARDFOLK_2 = "<p><b><i>Cunning Artisan.</b></i> As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.</p>";
const FEATURE_LIZARDFOLK_3 = "<p><b><i>Hold Breath.</b></i> You can hold your breath for up to 15 minutes at a time.</p>";
const FEATURE_LIZARDFOLK_4 = "<p><b><i>Hunter's Lore.</b></i> You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.</p>";
const FEATURE_LIZARDFOLK_5 = "<p><b><i>Natural Armor.</b></i> You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.</p>";
const FEATURE_LIZARDFOLK_6 = "<p><b><i>Hungry Jaws.</b></i> In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your Constitution modifier (minimum of 1), and you can't use this trait again until you finish a short or long rest.</p>";

// loxodon

// merfolk
// green mer
// blue mer

// minotaur
const FEATURE_MINOTAUR_1 = "<p><b><i>Horns.</b></i> Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.</p>";
const FEATURE_MINOTAUR_2 = "<p><b><i>Goring Rush.</b></i> Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action.</p>";
const FEATURE_MINOTAUR_3 = "<p><b><i>Hammering Horns.</b></i> Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you.</p>";
const FEATURE_MINOTAUR_4 = "<p><b><i>Imposing Presence.</b></i> You have proficiency in one of the following skills of your choice: Intimidation or Persuasion.</p>";

// orc
const FEATURE_ORC_1 = "<p><b><i>Aggressive.</i></b> As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started.</p>";
const FEATURE_ORC_2 = "<p><b><i>Primal Intuition.</i></b> You have proficiency in two of the following skills of your choice: Animal Handling, Insight, Intimidation, Medicine, Perception, and Survival.</p>";
let proficiencies_orc = new Array(sAh,sIn,sIt,sM,sP,sSv);

// owlin
// satyr
// shifter
// simic
// tabaxi
// tiefling
// tortle
// triton
// vedalken
// warforged
// yuanti

// global field handler
let name = "Example Character";
let clss = "";
let subclass = "";
let race = "";
let subrace = "";
let lvl = 1;
let hp = 24; // hp
let ac = 10; // overall ac
let acu = 10; // unarmored defense
let aca = 11; // armored AC
let spd = 30; // base move speed
let spdtxt = "";
let armorType = "unarmored defense";
let rf = new Array(); // race features
let cf = new Array(); // class features
let saves = new Array();
let stats = new Array();
let skills = new Array(); // skill proficiency list
let wpns = new Array(); // weapon proficiency list
let amr = new Array(); // armor proficiency list
let tls = new Array(); // tool proficiency list
let langs = new Array("Common"); // language proficiency list

function preloadRace(newRace){ racePreset = newRace; }
function preloadClass(newClass){ classPreset = newClass; }
function preloadSubrace(newSubrace){ srPreset = newSubrace; }
function preloadSubclass(newSubclass){ scPreset = newSubclass; }
function preloadLvl(newLvl){ if(parseInt(newLvl) > 0 && parseInt(newLvl) <= 20) lvlPreset = parseInt(newLvl); }

function sum(arr){
 let total = 0;
 for(let i = 0; i < arr.length; i++){ 
   total += arr[i];
 }
  return total;
}

function XdY(x,y){ // generates an xdy int array
  let results = new Array();
  for(let i = 0; i < x; i++){
    results[i] = (Math.random()*y + 1)|0;
  }
  return results;
}

function remove(arr, index){
 debugtxt += "<br>TEST: n = " + index + ", is n considered a number? " + (typeof(index) === 'number') + ".";
 if(!(typeof(index) === 'number')){ 
   debugtxt += " Index of item: " + arr.indexOf(index);
   index = arr.indexOf(index);
 } // if we're trying to remove an item instead of its index, get the index to remove
 let newArr = new Array();
 for(let i = 0, j = 0; i < arr.length; i++){
    if(i != index){
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}

function add(arr1, arr2){
 let arr3 = new Array(), i=0,j=0;
 for(i=0; i < arr1.length; i++){
      arr3[i] = arr1[i];
 }
 for(j=0; j < arr2.length; j++){
      arr3[i+j] = arr2[j];
 }
 return arr3;
}

function dropLowest(arr){
  let lowest = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < arr[lowest]){
      lowest = i;
    }
  }
  let newArr = new Array();
  for(let i = 0, j = 0; i < arr.length; i++){
    if(i != lowest){
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}

function XdYkhZ(x,y,z){
 if(z < 1){ return; }
 let results = XdY(x,y);
 if(z >= x){ return results; }
 let dropCount = x - z;
 for(let i = 0; i < dropCount; i++){
   results = dropLowest(results);
 }
 return results;
}

function rollSpecial(id){
 let baseRoll = sum(XdY(1,20));
 let result = -1;
 let res = document.getElementById("ROLLRESULTS");
 res.style.color = "Black";
 let outputTxt = "Result: ";
 let additionalTxt = "";
 let lastDigit = id%10, firstDigit = (id/10)|0;
 let statnames = new Array("STR","DEX","CON","INT","WIS","CHA");
 let statmods = new Array(statModifiers[stats[0]], statModifiers[stats[1]], statModifiers[stats[2]], statModifiers[stats[3]], statModifiers[stats[4]], statModifiers[stats[5]]);
 if(firstDigit == 1 || firstDigit == 2){ // checks + saves
      result = baseRoll;
      if(baseRoll == 20){
            additionalTxt = " (critical success!)";
            res.style.color = "LimeGreen";
            
      }
      if(baseRoll == 1){
            additionalTxt = " (critical failure!)";
            res.style.color = "Crimson";
      }
      let mod = statmods[lastDigit];
      if(firstDigit == 2){ // saves only
            if(saves.includes(statnames[lastDigit])) mod += pBonuses[lvl]; // add proficiency bonus to proficient saves
      }
      result += mod;
 } else {
       if(lastDigit == 0){
          result = sum(XdY(1,20)) + statmods[1]; // init = dex check
       }
       if(lastDigit == 4){ // ability check
          result = sum(XdY(1,20));
          let skll = $('#SELECT_ABIL').val();
          let mod = 0;
          // str based skills
          // dex based skills
          // con based skills
          // int based skills
          // wis based skills
          // cha based skills
       }
 }
 outputTxt += result + additionalTxt;
 res.innerHTML = outputTxt;
}

function resetFeatures(){
  ALL_LANGS = new Array("Aarakocra","Abyssal","Auran","Celestial","Elvish","Dwarvish","Draconic","Giant","Gith","Gnomish","Goblin","Infernal","Leonin","Loxodon","Merfolk","Minotaur","Orc","Primordial","Sylvan","Vedalken");
  debugtxt = "";
  spd = 30;
  rf = new Array();
  cf = new Array();
  skills = new Array();
  wpns = new Array();
  amr = new Array();
  tls = new Array();
  langs = new Array("Common");
 
  // reload race proficiency arrays that might have removes called
  proficiencies_changeling = new Array(sD,sIn,sIt,sPs);
  proficiencies_orc = new Array(sAh,sIn,sIt,sM,sP,sSv);
  // debugtxt += "<br>TEST: Orc array [5] = " + proficiencies_orc[5] + ", Changeling array [3] = " + proficiencies_changeling[3];
 
  document.getElementById("SHEET_FEATURES_CLASS").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE").innerHTML = "";
 
  document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "";
  document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = "";
}

function fillSkillOptions(){
  document.getElementById("SELECT_ABIL").innerHTML = "";
  for(let i = 0; i < allSkills.length; i++){
  let c = allSkills[i];
    internalTxt += '<option value="' + c + '">' + c +'</option>';     
  }
  document.getElementById("SELECT_ABIL").innerHTML = internalTxt;
}

function fillClassOptions(){
  let internalTxt = '<option value="Random">Random</option>';
  document.getElementById("SELECT_CLASS").innerHTML = "";
  for(let i = 0; i < classOptions.length; i++){
    let c = classOptions[i];
    internalTxt += '<option value="' + c + '">' + c +'</option>';     
  }
  document.getElementById("SELECT_CLASS").innerHTML = internalTxt;
}

function fillRaceOptions(){
  let internalTxt = '<option value="Random">Random</option>';
  document.getElementById("SELECT_RACE").innerHTML = "";
  for(let i = 0; i < raceOptions.length; i++){
    let r = raceOptions[i];
    internalTxt += '<option value="' + r + '">' + r +'</option>';     
  }
  document.getElementById("SELECT_RACE").innerHTML = internalTxt;
}

function fillLvlOptions(){
  let internalTxt = '<option value="Random">Random</option>';
  document.getElementById("SELECT_LVL").innerHTML = "";
  for(let i = 1; i <= 20; i++){
    internalTxt += '<option value="' + i + '">' + i +'</option>';     
  }
  document.getElementById("SELECT_LVL").innerHTML = internalTxt;
}

function init(){
  fillRaceOptions();
  fillClassOptions();
  fillLvlOptions();
  fillSkillOptions();
  resetFeatures();
}

// shorthand functions
function addSv(s){ if(!(saves.includes(s))) saves.push(s); }
function addWpn(w){ if(!(wpns.includes(w))) wpns.push(w); }
function addAmr(a){ if(!(amr.includes(a))) amr.push(a); }
function addSkl(s){ if(!(skills.includes(s))) skills.push(s); }
function addTl(t){ if(!(tls.includes(t))) tls.push(t); }
function addRF(f){ if(!(rf.includes(f))) rf.push(f); }
function addCF(f){ if(!(cf.includes(f))) cf.push(f); }

// longhand functions
function addSave(s){ addSv(s); }
function addWeapon(w){ addWpn(w); }
function addArmor(a){ addAmr(a); }
function addSkill(s){ addSkl(s); }
function addTool(t){ addTl(t); }
function addRaceFeature(f){ addRF(f); }
function addClassFeature(f){ addCF(f); }

// proficiency handling for races + classes
function handleProficiencies(){
 document.getElementById("SHEET_PROF_BONUS").innerHTML = "Proficiency Bonus: +" + pBonuses[lvl];
 let profs;
 let numSkills = 2;
 if(clss === "Artificer"){
   profs = proficiencies_artificer;
 } else if(clss === "Barbarian"){
   profs = proficiencies_barbarian;
 } else if(clss === "Bard"){
   profs = proficiencies_bard;
   numSkills = 3;
 } else if(clss === "Cleric"){
   profs = proficiencies_cleric;
 } else if(clss === "Fighter"){
   profs = proficiencies_fighter;
 } else if(clss === "Druid"){
   profs = proficiencies_druid;
 } else if(clss === "Monk"){
   profs = proficiencies_monk;
 } else if(clss === "Paladin"){
   profs = proficiencies_paladin;
 } else if(clss === "Ranger"){
   profs = proficiencies_ranger;
   numSkills = 3;
 } else if(clss === "Rogue"){
   profs = proficiencies_rogue;
   numSkills = 4;
 } else if(clss === "Sorcerer"){
   profs = proficiencies_sorcerer;
 } else if(clss === "Wizard"){
   profs = proficiencies_wizard;
 } else if(clss === "Warlock"){
   profs = proficiencies_warlock;
 }
 
 let skillsCopy = profs[1]; // copy skill array
 let allSkillsCopy = allSkills;
 let savestxt = "";
 let skillstxt = "";
 let weaponstxt = "";
 let armortxt = "";
 let toolstxt = "";
 
 if(clss === "Monk" && lvl > 13){ // diamond soul feature
    addSv("STR"); addSv("DEX"); addSv("CON"); addSv("INT"); addSv("WIS"); addSv("CHA");
    savestxt += "<b>Saving Throws:</b> All";
 } else {
    addSv(profs[0][0]); addSv(profs[0][1]);
    savestxt += "<b>Saving Throws:</b> " + profs[0][0] + ", " + profs[0][1];
 }
 skillstxt += "<b>Skills:</b> ";
 weaponstxt += "<b>Weapons:</b> ";
 armortxt += "<b>Armor:</b> ";
 toolstxt += "<b>Tools:</b> ";
 
 // choose skills from class
 // precondition: numSkills <= skillsCopy.length
 for(let i = 0; i < numSkills; i++){
  let selectionIndex = (Math.random()*skillsCopy.length)|0;
  addSkl(skillsCopy[selectionIndex]);
  allSkillsCopy = remove(allSkillsCopy,skillsCopy[selectionIndex]); // remove the selected value from the all-skills array
  skillsCopy = remove(skillsCopy,selectionIndex); // remove the selected value from the array
 }
 // fill weapons field
 for(let i = 0; i < profs[2].length; i++){
  addWpn(profs[2][i]);
 }
 // fill armor field
 for(let i = 0; i < profs[3].length; i++){
  addAmr(profs[3][i]);
 }
 // fill tools field
 for(let i = 0; i < profs[4].length; i++){
  addTl(profs[4][i]);
 }
 
 // race proficiencies
 if(!(wpns.includes(wM))){
   if(race === "Dwarf"){
     // dwarven combat training
     if(!(wpns.includes(wS))){
        addWpn(wLh);
        addWpn(wHa);
     }
     if(!(wpns.includes(wM))){
        addWpn(wBa);
        addWpn(wWh);
     }
     if(!(tls.includes(tS))) tls.push(tS); // dwarven tool proficiencies
     else if(!(tls.includes(tM))) tls.push(tM);
     else if(!(tls.includes(tB))) tls.push(tB);
   }
   if(race === "Elf" && (subrace === "High" || subrace === "Wood")){ // elf weapon training
     if(!(wpns.includes(wS))) addWpn(wSb);
     if(!(wpns.includes(wM))){
        addWpn(wLb);
        addWpn(wSs);
        addWpn(wLs);
     }
   }
   if(subrace === "Drow"){ // drow weapons training
     if(!(wpns.includes(wM))){
        addWpn(wRp);
        addWpn(wSs);
        addWpn(wHc);
     }
   }
 }
 if(subrace === "Mountain" || subrace === "Githyanki"){ // dwarven armor training // martial prodigy- light + medium armor proficiency
    if(!(amr.includes(aL))){ amr.push(aL); }
    if(!(amr.includes(aM))){ amr.push(aM); }
    if(subrace === "Githyanki" && !(wpns.includes(wM))){
      addWpn(wSs);
      addWpn(wLs);
      addWpn(wGs);
    }
 }
 if(race === "Elf"){ // keen senses
   skills.push(sP);
 }
 
 if(race === "Centaur"){ // survivor
   let j = (Math.random()*proficiencies_centaur.length)|0;
   debugtxt += "<br>TEST: n = " + j + ", race prof = " + proficiencies_centaur[j];
   addSkl(proficiencies_centaur[j]);
 }
 
 if(race === "Half-Elf"){ // skill versatility
   for(let i = 0; i < 2; i++){
     let j = (Math.random()*allSkillsCopy.length)|0;
     addSkl(allSkillsCopy[j]);
     remove(allSkillsCopy, allSkillsCopy[j]);
   }
 }
 if(race === "Orc"){ // primal intuition
   for(let i = 0; i < 2; i++){
     let j = (Math.random()*proficiencies_orc.length)|0;
     // debugtxt += "<br>TEST: n = " + j + ", race prof = " + proficiencies_orc[j];
     addSkl(proficiencies_orc[j]);
     remove(proficiencies_orc, proficiencies_orc[j]);
   }
 }
 
 if(race === "Changeling"){ // changeling instincts
   for(let i = 0; i < 2; i++){
     let j = (Math.random()*proficiencies_changeling.length)|0;
     // debugtxt += "<br>TEST: n = " + j + ", race prof = " + proficiencies_changeling[j];
     addSkl(proficiencies_changeling[j]);
     remove(proficiencies_changeling, proficiencies_changeling[j]);
   }
 }
 if(race === "Half-Orc") addSkl(sIt); // half orc menacing feature
 if(race === "Minotaur"){ // imposing presence - choose intimidation or persuasion
   if(!(skills.includes(sIt))) skills.push(sIt);
   else if (!(skills.includes(sPs))) skills.push(sPs);
 }
 
 // turn skills into txt
 for(let i = 0; i < skills.length; i++){
  skillstxt += skills[i];
  if(i != skills.length-1){ skillstxt += ", "; }
 }
 // turn weapons into txt
 for(let i = 0; i < wpns.length; i++){
  weaponstxt += wpns[i];
  if(i != wpns.length-1){ weaponstxt += ", "; }
 }
 // turn skills into txt
 for(let i = 0; i < amr.length; i++){
  armortxt += amr[i];
  if(i != amr.length-1){ armortxt += ", "; }
 }
 // turn skills into txt
 for(let i = 0; i < tls.length; i++){
  toolstxt += tls[i];
  if(i != tls.length-1){ toolstxt += ", "; }
 }
 
 // do last minute checks for empty fields
 if(skillstxt === "<b>Skills:</b> "){ skillstxt += "None"; }
 if(weaponstxt === "<b>Weapons:</b> "){ weaponstxt += "None"; }
 if(armortxt === "<b>Armor:</b> "){ armortxt += "None"; }
 if(toolstxt === "<b>Tools:</b> "){ toolstxt += "None"; }
 
 // set doc fields
 document.getElementById("SHEET_PROF_SAVES").innerHTML = savestxt;
 document.getElementById("SHEET_PROF_SKILLS").innerHTML = skillstxt;
 document.getElementById("SHEET_PROF_WEAPONS").innerHTML = weaponstxt;
 document.getElementById("SHEET_PROF_ARMOR").innerHTML = armortxt;
 document.getElementById("SHEET_PROF_TOOLS").innerHTML = toolstxt;
}

function handleClassFeatures(){
   if(clss === "Artificer"){
      addCF(FEATURE_ARTIFICER_1_0);
      if(lvl>1){
        addCF(FEATURE_ARTIFICER_2_0);
      }
      if(lvl>2){
        addCF(FEATURE_ARTIFICER_3_0);
        if(subclass === "Armorer"){
          addCF(FEATURE_ARTIFICER_ARMORER_3_0);
          addCF(FEATURE_ARTIFICER_ARMORER_3_1);
          addCF(FEATURE_ARTIFICER_ARMORER_3_2);
          addCF(FEATURE_ARTIFICER_ARMORER_3_3);
        }
      }
      if(lvl>3){
        addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>4){ // 5th lvl subclass feature
        if(subclass === "Armorer"){
          addCF(FEATURE_EA_STANDARD);
        }
      }
      if(lvl>5){ // 6th level main feature
       addCF(FEATURE_ARTIFICER_6_0);
      }
      if(lvl>6){ // 7th level main feature
       addCF(FEATURE_ARTIFICER_7_0);
      }
      if(lvl>8){ // 9th level subclass feature
        if(subclass === "Armorer"){
          addCF(FEATURE_ARTIFICER_ARMORER_9_0);
        }
      }
      if(lvl>9){ // 10th level main feature
       addCF(FEATURE_ARTIFICER_10_0);
      }
      if(lvl>10){ // 11th level main feature
       addCF(FEATURE_ARTIFICER_11_0);
      }
      if(lvl>13){ // 14th level main feature
       addCF(FEATURE_ARTIFICER_14_0);
      }
      if(lvl>14){ // 15th level subclass feature
        if(subclass === "Armorer"){
          addCF(FEATURE_ARTIFICER_ARMORER_15_0);
        }
      }
      if(lvl > 17){ // 18th lvl main feature
       addCF(FEATURE_ARTIFICER_18_0);
      }
      if(lvl > 19){ // 20th lvl main feature
       addCF(FEATURE_ARTIFICER_20_0);
      }
     // artificer spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let intMod = statModifiers[stats[3]];
     let sav = (lvl/2)|0+intMod; // spells available
     if(sav < 1) sav = 1;
     let sam = pBonuses[lvl] + intMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_ARTIFICER_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVAILABLE",sav).replace("_SPELLSAVEDC",sdc);
   } 
      
   if(clss === "Barbarian"){
    addCF(FEATURE_BARBARIAN_1_0);
    addCF(FEATURE_BARBARIAN_1_1);   
    if(lvl>1){
     addCF(FEATURE_BARBARIAN_2_0);
     addCF(FEATURE_BARBARIAN_2_1);   
    }
    if(lvl>3){
      addCF(FEATURE_ASI_STANDARD);
    }
    if(lvl>4){ 
      addCF(FEATURE_EA_STANDARD);
      addCF(FEATURE_BARBARIAN_5_0);  
    }
    if(lvl>6){ 
      addCF(FEATURE_BARBARIAN_7_0);  
    }
    if(lvl>8){ 
      addCF(FEATURE_BARBARIAN_9_0);  
    }
    if(lvl>10){ 
      addCF(FEATURE_BARBARIAN_11_0);  
    }
    if(lvl>14){ 
      addCF(FEATURE_BARBARIAN_15_0);  
    }
    if(lvl>17){ 
      addCF(FEATURE_BARBARIAN_18_0);  
    }
    if(lvl>19){ 
      addCF(FEATURE_BARBARIAN_20_0);  
      // increase str + con by 4 ea.
      stats[0] = stats[0]+4;
      stats[2] = stats[2]+4;
    }
   }
      
   if(clss === "Bard"){
      addCF(FEATURE_BARD_1_0);     
      if(lvl>1){
         addCF(FEATURE_BARD_2_0);
         addCF(FEATURE_BARD_2_1);
      }
      if(lvl>2){
         addCF(FEATURE_BARD_3_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>4){
         addCF(FEATURE_BARD_5_0);
      }
      if(lvl>5){
         addCF(FEATURE_BARD_6_0);
      }
      if(lvl>9){
         addCF(FEATURE_BARD_10_0);
      }
      if(lvl>19){
         addCF(FEATURE_BARD_20_0);
      }
      // bard spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let chaMod = statModifiers[stats[5]];
     let sam = pBonuses[lvl] + chaMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_BARD_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc);
   }
   
   if(clss === "Cleric"){
      if(subclass === "Life"){
         addCF(FEATURE_CLERIC_LIFE_1_0);  
         addCF(FEATURE_CLERIC_LIFE_1_1);
         addCF(FEATURE_CLERIC_LIFE_1_2);
      }
      if(lvl>1){
         addCF(FEATURE_CLERIC_2_0);
         if(subclass === "Life") addCF(FEATURE_CLERIC_LIFE_2_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>4){
         addCF(FEATURE_CLERIC_5_0);
      }
      if(lvl>5){
         if(subclass === "Life") addCF(FEATURE_CLERIC_LIFE_6_0);
      }
      if(lvl>7){
         if(subclass === "Life") addCF(FEATURE_CLERIC_DSTRIKE);
      }
      if(lvl>9){
         addCF(FEATURE_CLERIC_10_0);
      }
      if(lvl>16){
         if(subclass === "Life") addCF(FEATURE_CLERIC_LIFE_17_0);
      }
     // cleric spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let wisMod = statModifiers[stats[4]];
     let sam = pBonuses[lvl] + wisMod; // spell attack modifier
     let sav = lvl+wisMod; // spells available
     if(sav < 1) sav = 1;
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_CLERIC_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc).replace("_SPELLSAVAILABLE",sav);
   }
      
   if(clss === "Druid"){
      addCF(FEATURE_DRUID_1_0);
      if(lvl>1){
         addCF(FEATURE_DRUID_2_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>17){
         addCF(FEATURE_DRUID_18_0);
         addCF(FEATURE_DRUID_18_1);
      }
      if(lvl>19){
         addCF(FEATURE_DRUID_20_0);
      }
     // druid spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let wisMod = statModifiers[stats[4]];
     let sam = pBonuses[lvl] + wisMod; // spell attack modifier
     let sav = lvl+wisMod; // spells available
     if(sav < 1) sav = 1;
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_DRUID_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc).replace("_SPELLSAVAILABLE",sav);
   }
   if(clss === "Fighter"){
      let fs = fStyles_fighter[(Math.random()*fStyles_fighter.length)|0]; // handle fighting style selection
      let fdc = 8 + pBonuses[lvl] + statModifiers[stats[0]];
      if((8 + pBonuses[lvl] + statModifiers[stats[1]]) > fdc) fdc = 8 + pBonuses[lvl] + statModifiers[stats[1]]; // use dex mod if dex mod is higher
      let fmnv = fManeuvers[(Math.random()*fManeuvers.length)|0]; // handle maneuver selection
      fs = fs.replace("_FDC",fdc).replace("_FMANEUVER",fmnv);
      addCF(FEATURE_FIGHTINGSTYLE.replace("_FSTYLE",fs));
      addCF(FEATURE_FIGHTER_1_0);
      if(lvl>1){
         addCF(FEATURE_FIGHTER_2_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_FIGHTER);
      }
      if(lvl>4){
         addCF(FEATURE_EA_FIGHTER);
      }
      if(lvl>8){
         addCF(FEATURE_FIGHTER_9_0);
      }
   }
   if(clss === "Monk"){
      addCF(FEATURE_MONK_1_0);
      addCF(FEATURE_MONK_1_1);
      if(lvl>1){
         let kdc = 8 + pBonuses[lvl] + statModifiers[stats[4]];
         let k = FEATURE_MONK_2_0;
         k = k.replace("_KIDC",kdc);
         addCF(k);
         addCF(FEATURE_MONK_2_1);
         spd += umSpdBonus[lvl]; // unarmored movement speed bonus
      }
      if(lvl>2){
         addCF(FEATURE_MONK_3_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
         addCF(FEATURE_MONK_4_0);
      }
      if(lvl>4){
         addCF(FEATURE_EA_STANDARD);
         addCF(FEATURE_MONK_5_0);
      }
      if(lvl>5){
         addCF(FEATURE_MONK_6_0);
      }
      if(lvl>6){
         addCF(FEATURE_EVASION);
         addCF(FEATURE_MONK_7_0);
      }
      if(lvl>9){
         addCF(FEATURE_MONK_10_0);
      }
      if(lvl>12){
         addCF(FEATURE_MONK_13_0);
      }
      if(lvl>13){
         addCF(FEATURE_MONK_14_0);
      }
      if(lvl>14){
         addCF(FEATURE_MONK_15_0);
      }
      if(lvl>17){
         addCF(FEATURE_MONK_18_0);
      }
      if(lvl>19){
         addCF(FEATURE_MONK_20_0);
      }
   }
   if(clss === "Paladin"){
      let fs = fStyles_paladin[(Math.random()*fStyles_paladin.length)|0]; // handle fighting style selection
      addCF(FEATURE_PALADIN_1_0);
      addCF(FEATURE_PALADIN_1_1);
      if(lvl>1){
         addCF(FEATURE_PALADIN_2_0);
         addCF(FEATURE_FIGHTINGSTYLE.replace("_FSTYLE",fs));
         // paladin spellcasting
           document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
           let chaMod = statModifiers[stats[5]];
           let sam = pBonuses[lvl] + chaMod; // spell attack modifier
           let sav = (lvl/2)|0+chaMod; // spells available
           if(sav < 1) sav = 1;
           let sdc = 8 + sam;
           document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_PALADIN_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc).replace("_SPELLSAVAILABLE",sav);
      }
      if(lvl>2){
         addCF(FEATURE_PALADIN_3_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>4){
         addCF(FEATURE_EA_STANDARD);
      }
      if(lvl>5){
         addCF(FEATURE_PALADIN_6_0);
      }
      if(lvl>9){
         addCF(FEATURE_PALADIN_10_0);
      }
      if(lvl>10){
         addCF(FEATURE_PALADIN_11_0);
      }
      if(lvl>13){
         addCF(FEATURE_PALADIN_14_0);
      }
   }
   if(clss === "Ranger"){
      let fs = fStyles_ranger[(Math.random()*fStyles_ranger.length)|0]; // handle fighting style selection
      addCF(FEATURE_RANGER_1_0);
      addCF(FEATURE_RANGER_1_1);
      if(lvl>1){
         addCF(FEATURE_FIGHTINGSTYLE.replace("_FSTYLE",fs));
         // ranger spellcasting
           document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
           let wisMod = statModifiers[stats[4]];
           let sam = pBonuses[lvl] + wisMod; // spell attack modifier
           let sdc = 8 + sam;
           document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_RANGER_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc);
      }
      if(lvl>2){
         addCF(FEATURE_RANGER_3_0);
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>5){
         addCF(FEATURE_RANGER_6_0);
      }
      if(lvl>7){
         addCF(FEATURE_RANGER_8_0);
      }
      if(lvl>9){
         addCF(FEATURE_RANGER_10_0);
      }
      if(lvl>13){
         addCF(FEATURE_RANGER_14_0);
      }
      if(lvl>17){
         addCF(FEATURE_RANGER_18_0);
      }
      if(lvl>19){
         addCF(FEATURE_RANGER_20_0);
      }
   }
      
   if(clss === "Rogue"){
    addCF(FEATURE_ROGUE_1_0);
    addCF(FEATURE_ROGUE_1_1);   
    addCF(FEATURE_ROGUE_1_2);   
    if(lvl>1){
     addCF(FEATURE_ROGUE_2_0);   
    }
    if(lvl>3){
      addCF(FEATURE_ASI_ROGUE);
    }
    if(lvl>4){ 
      addCF(FEATURE_ROGUE_5_0);  
    }
    if(lvl>6){ 
      addCF(FEATURE_EVASION);  
    }
    if(lvl>10){ 
      addCF(FEATURE_ROGUE_11_0);  
    }
    if(lvl>13){ 
      addCF(FEATURE_ROGUE_14_0);  
    }
    if(lvl>14){ 
      addCF(FEATURE_ROGUE_15_0);  
    }
    if(lvl>17){ 
      addCF(FEATURE_ROGUE_18_0);  
    }
    if(lvl>19){ 
      addCF(FEATURE_ROGUE_20_0);  
    }
   }
   
   if(clss === "Sorcerer"){
    if(lvl>1){
     addCF(FEATURE_SORCERER_2_0);   
    }
    if(lvl>2){
     addCF(FEATURE_SORCERER_3_0);   
    }
    if(lvl>3){
     addCF(FEATURE_ASI_STANDARD);
    }
    if(lvl>19){
     addCF(FEATURE_SORCERER_20_0);   
    }
    // sorcerer spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let chaMod = statModifiers[stats[5]];
     let sam = pBonuses[lvl] + chaMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_SORCERER_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc);  
   }
      
   if(clss === "Warlock"){ 
      let temp, pact;
      let pSel = (Math.random()*4)|0;
      pact = pactBoons[pSel];
      let ei = ei_base, eiCount = numInvocations[lvl];
      if(lvl > 2){
            if(pact === pactboon_Blade) ei = add(ei,ei_blade_0);
            if(pact === pactboon_Tome) ei = add(ei,ei_tome_0);
            if(pact === pactboon_Chain) ei = add(ei,ei_chain_0);
            if(pact === pactboon_Talisman) ei = add(ei,ei_talisman_0);
      }
      if(lvl > 4){
            ei = add(ei,ei_5);
            if(pact === pactboon_Blade) ei = add(ei,ei_blade_5);
            if(pact === pactboon_Tome) ei = add(ei,ei_tome_5);
      }
      if(lvl > 6){
            ei = add(ei,ei_7);
            if(pact === pactboon_Talisman) ei = add(ei,ei_talisman_7);
      }
      if(lvl > 8){
            ei = add(ei,ei_9);
            if(pact === pactboon_Blade) ei = add(ei,ei_blade_9);
            if(pact === pactboon_Tome) ei = add(ei,ei_tome_9);
      }
      if(lvl > 11){
            if(pact === pactboon_Blade) ei = add(ei,ei_blade_12);
            if(pact === pactboon_Talisman) ei = add(ei,ei_talisman_12);
      }
      if(lvl > 14){
            ei = add(ei,ei_15);
            if(pact === pactboon_Blade) ei = add(ei,ei_blade_15);
            if(pact === pactboon_Chain) ei = add(ei,ei_chain_15);
      }
      let ei_text = "";
      for(let i = 0; i < eiCount; i++) { // select invocations
            let selected = ei[(Math.random()*ei.length)|0];
            ei = remove(ei,selected);
            ei_text += selected;
      }
      if(lvl>1){
         temp = FEATURE_WARLOCK_2_0 + "<ul>" + ei_text + "</ul>";
         addCF(temp);
      }
      if(lvl>2){
         addCF(FEATURE_WARLOCK_3_0.replace("_PACTBOON",pact));
      }
      if(lvl>3){
         addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl>10){
         addCF(FEATURE_WARLOCK_11_0);
      }
      if(lvl>19){
         addCF(FEATURE_WARLOCK_20_0);
      }
      // bard spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let chaMod = statModifiers[stats[5]];
     let sam = pBonuses[lvl] + chaMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_WARLOCK_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVEDC",sdc);
   }
   if(clss === "Wizard"){
      addCF(FEATURE_WIZARD_1_0);
      if(lvl>3){
        addCF(FEATURE_ASI_STANDARD);
      }
      if(lvl > 17){ // 18th lvl main feature
       addCF(FEATURE_WIZARD_18_0);
      }
      if(lvl > 19){ // 20th lvl main feature
       addCF(FEATURE_WIZARD_20_0);
      }
     // wizard spellcasting
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let intMod = statModifiers[stats[3]];
     let sav = lvl+intMod; // spells available
     if(sav < 1) sav = 1;
     let sam = pBonuses[lvl] + intMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_WIZARD_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVAILABLE",sav).replace("_SPELLSAVEDC",sdc);
   } 
      
   let sct = document.getElementById("SHEET_FEATURES_CLASS");
   for(let i = 0; i < cf.length; i++){ // fill html sections
      let node = document.createElement("div");
      node.innerHTML = cf[i];
      sct.appendChild(node);
   }
   
   debugtxt += "<br>Checkpoint 2: Class Features generated!";
}



function handleRaceFeatures(){
  randlangcount = 0;
  spdtxt = SPD_DEFAULT;
  if(race === "Aarakocra"){
    addRF(FEATURE_AARAKOCRA_1);
    addRF(FEATURE_AARAKOCRA_2);
    spd -= 5; // 25 base move speed
    spdtxt = SPD_AARAKOCRA;
    langs.push("Aarakocra");
    remove(ALL_LANGS, "Aarakocra");
    langs.push("Auran");
    remove(ALL_LANGS, "Auran");
  }
  if(race === "Aasimar"){
    addRF(FEATURE_AASIMAR_1);
    addRF(FEATURE_AASIMAR_2);
    addRF(FEATURE_AASIMAR_3);
    addRF(FEATURE_AASIMAR_4);
    if(subrace === "Protector" && lvl > 2){
      addRF(FEATURE_AASIMAR_PROTECTOR_1);
    }
    if(subrace === "Scourge" && lvl > 2){
       addRF(FEATURE_AASIMAR_SCOURGE_1);
    }
    if(subrace === "Fallen" && lvl > 2){
       addRF(FEATURE_AASIMAR_FALLEN_1);
    }
    langs.push("Celestial");
    remove(ALL_LANGS, "Celestial");
  }
  if(race === "Bugbear"){
    addRF(FEATURE_DARKVISION);
    addRF(FEATURE_POWERFULBUILD);
    addRF(FEATURE_BUGBEAR_1);
    addRF(FEATURE_BUGBEAR_2);
    addRF(FEATURE_BUGBEAR_3);
    langs.push("Goblin");
    remove(ALL_LANGS, "Goblin");
  }
 if(race === "Centaur"){
    addRF(FEATURE_CREATURETYPE_FEY);
    addRF(FEATURE_CENTAUR_1);
    addRF(FEATURE_CENTAUR_2);
    addRF(FEATURE_CENTAUR_3);
    addRF(FEATURE_CENTAUR_4);
    spd += 10; // 40 base move speed
    langs.push("Sylvan");
    remove(ALL_LANGS, "Sylvan");
  }
  if(race === "Changeling"){
    addRF(FEATURE_CHANGELING_1);
    addRF(FEATURE_CHANGELING_2);
    randlangcount = 2;
  }
  if(race === "Dragonborn"){
    let ddc = 8 + statModifiers[stats[2]] + pBonuses[lvl]; // 8+prof+conmod
    if(subrace === "Red" || subrace === "Green" || subrace === "Blue" || subrace === "Black" || subrace === "White"){ // chromatic options
      let temp1 = FEATURE_DRAGONBORN_CHROMATIC_1, temp2 = FEATURE_DRAGONBORN_1, temp3 = FEATURE_DRAGONBORN_CHROMATIC_2;
      temp1 = temp1.replace("_DDC",ddc); // replace bw save dc
      if(subrace === "Red"){
       addRF(FEATURE_DRAGONBORN_RED);
       temp1 = temp1.replace("_DTYPE","Fire"); temp2 = temp2.replace("_DTYPE","Fire"); temp3 = temp3.replace("_DTYPE","Fire");
      }
      if(subrace === "Green"){
       addRF(FEATURE_DRAGONBORN_GREEN);
       temp1 = temp1.replace("_DTYPE","Poison"); temp2 = temp2.replace("_DTYPE","Poison"); temp3 = temp3.replace("_DTYPE","Poison");
      }
      if(subrace === "Blue"){
       addRF(FEATURE_DRAGONBORN_BLUE);
       temp1 = temp1.replace("_DTYPE","Lightning"); temp2 = temp2.replace("_DTYPE","Lightning"); temp3 = temp3.replace("_DTYPE","Lightning");
      }
      if(subrace === "Black"){
       addRF(FEATURE_DRAGONBORN_BLACK);
       temp1 = temp1.replace("_DTYPE","Acid"); temp2 = temp2.replace("_DTYPE","Acid"); temp3 = temp3.replace("_DTYPE","Acid");
      }
      if(subrace === "White"){
       addRF(FEATURE_DRAGONBORN_WHITE);
       temp1 = temp1.replace("_DTYPE","Cold"); temp2 = temp2.replace("_DTYPE","Cold"); temp3 = temp3.replace("_DTYPE","Cold");
      }
      addRF(temp1);
      addRF(temp2);
      if(lvl>4) addRF(temp3); // 5th level feature
    }
    if(subrace === "Gold" || subrace === "Silver" || subrace === "Bronze" || subrace === "Brass" || subrace === "Copper"){ // metallic options
      let temp1 = FEATURE_DRAGONBORN_METALLIC_1, temp2 = FEATURE_DRAGONBORN_1, temp3 = FEATURE_DRAGONBORN_METALLIC_2;
      temp1 = temp1.replace("_DDC",ddc); temp3 = temp3.replace("_DDC",ddc);// replace bw save dc
      if(subrace === "Gold" || subrace == "Brass"){
        if(subrace === "Gold"){ addRF(FEATURE_DRAGONBORN_GOLD); }
        else { addRF(FEATURE_DRAGONBORN_BRASS); }
        temp1 = temp1.replace("_DTYPE","Fire"); temp2 = temp2.replace("_DTYPE","Fire");
      }
      if(subrace === "Silver"){ 
        addRF(FEATURE_DRAGONBORN_SILVER);
        temp1 = temp1.replace("_DTYPE","Cold"); temp2 = temp2.replace("_DTYPE","Cold");
      }
      if(subrace === "Bronze"){
        addRF(FEATURE_DRAGONBORN_BRONZE);
        temp1 = temp1.replace("_DTYPE","Lightning"); temp2 = temp2.replace("_DTYPE","Lightning");
      }
      if(subrace === "Copper"){
        addRF(FEATURE_DRAGONBORN_COPPER);
        temp1 = temp1.replace("_DTYPE","Acid"); temp2 = temp2.replace("_DTYPE","Acid");
      }
      addRF(temp1);
      addRF(temp2);
      if(lvl>4) addRF(temp3); // 5th level feature
    }
    if(subrace === "Crystal" || subrace === "Topaz" || subrace === "Amethyst" || subrace === "Sapphire" || subrace === "Emerald"){ // gem options
       let temp1 = FEATURE_DRAGONBORN_GEM_1, temp2 = FEATURE_DRAGONBORN_1;
       temp1 = temp1.replace("_DDC",ddc); // replace bw save dc
       if(subrace === "Crystal"){
        addRF(FEATURE_DRAGONBORN_CRYSTAL);
        temp1 = temp1.replace("_DTYPE","Radiant"); temp2 = temp2.replace("_DTYPE","Radiant");
       }
       if(subrace === "Topaz"){
        addRF(FEATURE_DRAGONBORN_TOPAZ);
        temp1 = temp1.replace("_DTYPE","Necrotic"); temp2 = temp2.replace("_DTYPE","Necrotic");
       }
       if(subrace === "Amethyst"){
        addRF(FEATURE_DRAGONBORN_AMETHYST);
        temp1 = temp1.replace("_DTYPE","Force"); temp2 = temp2.replace("_DTYPE","Force");
       }
       if(subrace === "Sapphire"){
        addRF(FEATURE_DRAGONBORN_SAPPHIRE);
        temp1 = temp1.replace("_DTYPE","Thunder"); temp2 = temp2.replace("_DTYPE","Thunder");
       }
       if(subrace === "Emerald"){
        addRF(FEATURE_DRAGONBORN_EMERALD);
        temp1 = temp1.replace("_DTYPE","Psychic"); temp2 = temp2.replace("_DTYPE","Psychic");
       }
       addRF(temp1);
       addRF(temp2);
       addRF(FEATURE_DRAGONBORN_GEM_2);
       if(lvl>4) addRF(FEATURE_DRAGONBORN_GEM_3); // 5th level feature
     }
    langs.push("Draconic");
    remove(ALL_LANGS, "Draconic");
  }
  if(race === "Dwarf"){
    spdtxt = SPD_DWARF;
    if(subrace === "Duergar"){ addRF(FEATURE_SDARKVISION);}
    else{ addRF(FEATURE_DWARF_1);}
    if(subrace === "Duergar"){ addRF(FEATURE_DWARF_2_D);}
    else{ addRF(FEATURE_DWARF_2);}
    addRF(FEATURE_DWARF_3);
    addRF(FEATURE_DWARF_4);
    addRF(FEATURE_DWARF_5);
    if(subrace === "Hill"){
      addRF(FEATURE_DWARF_HILL);
    } else if(subrace === "Mountain"){
      addRF(FEATURE_DWARF_MTN);
    } else if(subrace === "Duergar"){
      addRF(FEATURE_DWARF_DUERGAR_1);
      addRF(FEATURE_SUNSENS);
      langs.push("Undercommon");
      remove(ALL_LANGS, "Undercommon");
    }
    langs.push("Dwarvish");
    remove(ALL_LANGS, "Dwarvish");
  }
  if(race === "Elf"){
   let edc = 8 + pBonuses[lvl] + statModifiers[stats[5]]; // cha save dc for eladrin features
   if(subrace === "Drow"){ addRF(FEATURE_ELF_1_D);}
   else{ addRF(FEATURE_ELF_1);}
   addRF(FEATURE_ELF_2);
   addRF(FEATURE_ELF_3);
   addRF(FEATURE_ELF_4);
   if(subrace === "Avariel"){
     addRF(FEATURE_ELF_AVARIEL_1);
     addRF(FEATURE_ELF_AVARIEL_2);
     spdtxt = SPD_FLY_DEFAULT;
     langs.push("Auran");
     remove(ALL_LANGS, "Auran");
   }
   if(subrace === "Drow"){
     addRF(FEATURE_ELF_DROW_1);
     addRF(FEATURE_ELF_DROW_2);
   }
   if(subrace === "Eladrin"){
     addRF(FEATURE_ELF_ELADRIN_1);
   }
   if(subrace === "High" || subrace === "Wood"){
     addRF(FEATURE_ELF_HIGH_1);
     if(subrace === "High"){
       addRF(FEATURE_ELF_HIGH_2);
       addRF(FEATURE_ELF_HIGH_3);
       randlangcount = 1;
     } else {
       addRF(FEATURE_ELF_WOOD_1);
       addRF(FEATURE_ELF_WOOD_2);
       spd += 5; // base move spd 35
     }
   }
   if(subrace === "Pallid"){
     addRF(FEATURE_ELF_PALLID_1);
     addRF(FEATURE_ELF_PALLID_2);
   }
   if(subrace === "Sea"){
     addRF(FEATURE_ELF_SEA_1);
     addRF(FEATURE_ELF_SEA_2);
     addRF(FEATURE_ELF_SEA_3);
     addRF(FEATURE_ELF_SEA_4);
     spdtxt = SPD_SWIM_DEFAULT;
     langs.push("Aquan");
     remove(ALL_LANGS, "Aquan");
   }
   if(subrace === "Shadar-Kai"){
     addRF(FEATURE_ELF_SHADAR_1);
     addRF(FEATURE_ELF_SHADAR_2);
   }
    langs.push("Elvish");
    remove(ALL_LANGS, "Elvish");
  }
  if(race === "Fairy"){
    addRF(FEATURE_FAIRY_1);
    addRF(FEATURE_FAIRY_2);
    spdtxt = SPD_FAIRY;
    langs.push("Sylvan");
    remove(ALL_LANGS, "Sylvan");
  }
  if(race === "Firbolg"){
    addRF(FEATURE_FIRBOLG_1);
    addRF(FEATURE_FIRBOLG_2);
    addRF(FEATURE_POWERFULBUILD);
    addRF(FEATURE_FIRBOLG_3);
    langs.push("Elvish");
    remove(ALL_LANGS, "Elvish");
    langs.push("Giant");
    remove(ALL_LANGS, "Giant");
  }
  if(race === "Genasi"){
    addRF(FEATURE_DARKVISION);
    if(subrace === "Fire"){
      addRF(FEATURE_GENASI_FIRE_1);
      addRF(FEATURE_GENASI_FIRE_2);
    }
    if(subrace === "Earth"){
      addRF(FEATURE_GENASI_EARTH_1);
      addRF(FEATURE_GENASI_EARTH_2);
    }
    if(subrace === "Air"){
      addRF(FEATURE_GENASI_AIR_1);
      addRF(FEATURE_GENASI_AIR_2);
    }
   if(subrace === "Water"){
      addRF(FEATURE_GENASI_WATER_1);
      addRF(FEATURE_GENASI_WATER_2);
      addRF(FEATURE_GENASI_WATER_3);
      addRF(FEATURE_GENASI_WATER_4);
      spdtxt = SPD_SWIM_DEFAULT;
    }
    langs.push("Primordial");
    remove(ALL_LANGS, "Primordial");
  }
  if(race === "Gith"){
    if(subrace === "Githyanki"){
      addRF(FEATURE_GITHYANKI_1);
      addRF(FEATURE_GITHYANKI_2);
      addRF(FEATURE_GITHYANKI_3);
      randlangcount = 1;
    } else {
      addRF(FEATURE_GITHZERAI_1);
      addRF(FEATURE_GITHZERAI_2);
    }
    langs.push("Gith");
    remove(ALL_LANGS, "Gith");
  }
  if(race === "Gnome"){
    if(subrace === "Deep"){
      addRF(FEATURE_SDARKVISION);
      langs.push("Undercommon");
      remove(ALL_LANGS, "Undercommon");
    } else { addRF(FEATURE_DARKVISION); }
    addRF(FEATURE_GNOME_1);
    if(subrace === "Deep") addRF(FEATURE_GNOME_DEEP_1);
    if(subrace === "Forest"){
      addRF(FEATURE_GNOME_FOREST_1);
      addRF(FEATURE_GNOME_FOREST_2);
    }
    if(subrace === "Rock"){
      addRF(FEATURE_GNOME_ROCK_1);
      addRF(FEATURE_GNOME_ROCK_2);
    }
    langs.push("Gnomish");
    remove(ALL_LANGS, "Gnomish");
  }
  if(race === "Lizardfolk"){
    addRF(FEATURE_LIZARDFOLK_1);
    addRF(FEATURE_LIZARDFOLK_2);
    addRF(FEATURE_LIZARDFOLK_3);
    addRF(FEATURE_LIZARDFOLK_4);
    addRF(FEATURE_LIZARDFOLK_5);
    addRF(FEATURE_LIZARDFOLK_6);
    langs.push("Draconic");
    remove(ALL_LANGS, "Draconic");
  }
  if(race === "Minotaur"){
    addRF(FEATURE_MINOTAUR_1);
    addRF(FEATURE_MINOTAUR_2);
    addRF(FEATURE_MINOTAUR_3);
    addRF(FEATURE_MINOTAUR_4);
    langs.push("Minotaur");
    remove(ALL_LANGS, "Minotaur");
  }
  if(race === "Half-Elf"){
    addRF(FEATURE_HALFELF_1);
    addRF(FEATURE_HALFELF_2);
    addRF(FEATURE_HALFELF_3);
    langs.push("Elvish");
    remove(ALL_LANGS, "Elvish");
    randlangcount = 1;
  }
  if(race === "Half-Orc" || race === "Orc"){
    addRF(FEATURE_DARKVISION);
    if(race === "Half-Orc"){
      addRF(FEATURE_HALFORC_1);
      addRF(FEATURE_HALFORC_2);
      addRF(FEATURE_HALFORC_3);
    } else {
      addRF(FEATURE_ORC_1);
      addRF(FEATURE_ORC_2);
      addRF(FEATURE_POWERFULBUILD);
    }
    langs.push("Orc");
    remove(ALL_LANGS, "Orc");
  }
 
  // language randomization
  for(let i = 0; i < randlangcount; i++){
    let newLang = ALL_LANGS[(Math.random()*ALL_LANGS.length)|0];
    langs.push(newLang);
    remove(ALL_LANGS, newLang);
  }
      
  let sct = document.getElementById("SHEET_FEATURES_RACE");
   for(let i = 0; i < rf.length; i++){ // fill html sections
      let node = document.createElement("div");
      node.innerHTML = rf[i];
      sct.appendChild(node);
   }
}

function handleBgFeatures(){
  // to be added
}

function handleLangs(){
  let ltext = "<b>Languages:</b> ";
  for(let i = 0; i < langs.length; i++){
    ltext += langs[i];
    if(i != langs.length-1) ltext += ", ";
  }
  document.getElementById("SHEET_PROF_LANGS").innerHTML = ltext;
}

function rollStats(){
  stats[0] = sum(XdYkhZ(4,6,3));
  stats[1] = sum(XdYkhZ(4,6,3));
  stats[2] = sum(XdYkhZ(4,6,3));
  stats[3] = sum(XdYkhZ(4,6,3));
  stats[4] = sum(XdYkhZ(4,6,3));
  stats[5] = sum(XdYkhZ(4,6,3)); 
}

function largestItemIndex(arr){ // precondition: arr size > 0
  let maxI = 0;
  for(let i = 0; i < arr.length; i++){
     if(arr[i] > arr[maxI]) maxI = i;
  }
  return maxI;
}

function sortStats(){ // includes racial asi
 let statsTemp = stats;
 let newStats = new Array(-1,-1,-1,-1,-1,-1);
 let largest = -1;
 for(let i = 0; i < 3; i++){ // set 3 most important stats by class
    largest = largestItemIndex(statsTemp);
    if(i == 0){ // primary stat
       debugtxt += "<br>Priority stat 1 index: " + priorityStats[clss][0] + ", Former stat = " + statsTemp[priorityStats[clss][0]] + ", New stat = " + statsTemp[largest];
       newStats[priorityStats[clss][0]] = statsTemp[largest] + 2; // give racial +2 to most important stat
       statsTemp = remove(statsTemp,largest);
       debugtxt += ". Is temp array resizing correctly? " + (statsTemp.length == 5);
    } else if (i == 1){ // secondary stat
       debugtxt += "<br>Priority stat 2 index: " + priorityStats[clss][1] + ", Former stat = " + statsTemp[priorityStats[clss][1]] + ", New stat = " + statsTemp[largest];
       newStats[priorityStats[clss][1]] = statsTemp[largest] + 1; // give racial +1 to second most important stat
       statsTemp = remove(statsTemp,largest);
       debugtxt += ". Is temp array resizing correctly? " + (statsTemp.length == 4);
    } else { // tertiary stat
       debugtxt += "<br>Priority stat 3 index: " + priorityStats[clss][2] + ", Former stat = " + statsTemp[priorityStats[clss][2]] + ", New stat = " + statsTemp[largest];
       newStats[priorityStats[clss][2]] = statsTemp[largest];
       statsTemp = remove(statsTemp,largest);
       debugtxt += ". Is temp array resizing correctly? " + (statsTemp.length == 3);
    }
 }
 for(let i = newStats.length - 1; i >= 0; i--){ // fill in remaining stats in reverse-descending order (str will generally be dumped)
    if(newStats[i] == -1){
       largest = largestItemIndex(statsTemp);
       newStats[i] = statsTemp[largest];
       statsTemp = remove(statsTemp,largest);
       debugtxt += "<br>i = " + i + ", Former stat = " + stats[i] + ", New stat = " + newStats[i];
    }
  }
  stats = newStats;
}

function nameGen(){
 name = genName(2) + " " + genName(3);
}

function calcHP(){
 hp = statModifiers[stats[2]]*lvl;
 if(clss === "Barbarian"){ // more if clauses will be add later
  hp += 12 + sum(XdY(lvl-1,12));
 } else if(clss === "Fighter" || clss === "Paladin" || clss === "Ranger"){
  hp += 10 + sum(XdY(lvl-1,10));
 } else if(clss === "Wizard" || clss === "Sorcerer") {
  hp += 6 + sum(XdY(lvl-1,6));
 } else {
  hp += 8 + sum(XdY(lvl-1,8));
 }
 if(subrace === "Hill"){ // hill dwarf feature
   hp += lvl;
 }
}

function calcAC(){
 let dexMod = statModifiers[stats[1]];
 acu = 10 + dexMod;
 if(clss === "Barbarian"){ acu += statModifiers[stats[2]]; } // add con mod for barb
 if(clss === "Monk"){ acu += statModifiers[stats[4]]; } // add wis mod for monk
 if(race === "Lizardfolk"){ acu = 13 + dexMod; }// lizardfolk natural armor
 aca = 11 + dexMod;
 ac = aca; armorType = "leather armor"; // default to leather
 if(acu > aca){ ac = acu; armorType = "unarmored defense"; }
}

function genSubClass(){
 if(clss === "Artificer"){
   subclass = subclassOptions_artificer[(Math.random()*subclassOptions_artificer.length)|0];
 } else if(clss === "Barbarian"){
   subclass = subclassOptions_barbarian[(Math.random()*subclassOptions_barbarian.length)|0];
 } else if(clss === "Bard"){
   subclass = subclassOptions_bard[(Math.random()*subclassOptions_bard.length)|0];
 } else if(clss === "Cleric"){
   subclass = subclassOptions_cleric[(Math.random()*subclassOptions_cleric.length)|0];
 } else if(clss === "Fighter"){
   subclass = subclassOptions_fighter[(Math.random()*subclassOptions_fighter.length)|0];
 } else if(clss === "Druid"){
   subclass = subclassOptions_druid[(Math.random()*subclassOptions_druid.length)|0];
 } else if(clss === "Monk"){
   subclass = subclassOptions_monk[(Math.random()*subclassOptions_monk.length)|0];
 } else if(clss === "Paladin"){
   subclass = subclassOptions_paladin[(Math.random()*subclassOptions_paladin.length)|0];
 } else if(clss === "Ranger"){
   subclass = subclassOptions_ranger[(Math.random()*subclassOptions_ranger.length)|0];
 } else if(clss === "Rogue"){
   subclass = subclassOptions_rogue[(Math.random()*subclassOptions_rogue.length)|0];
 } else if(clss === "Sorcerer"){
   subclass = subclassOptions_sorcerer[(Math.random()*subclassOptions_sorcerer.length)|0];
 } else if(clss === "Wizard"){
   subclass = subclassOptions_wizard[(Math.random()*subclassOptions_wizard.length)|0];
 } else if(clss === "Warlock"){
   subclass = subclassOptions_warlock[(Math.random()*subclassOptions_warlock.length)|0];
 }
}

function genSubRace(){
 if(race === "Aasimar"){
   subrace = subraceOptions_aasimar[(Math.random()*subraceOptions_aasimar.length)|0];
 } else if(race === "Dragonborn"){
   subrace = subraceOptions_dragonborn[(Math.random()*subraceOptions_dragonborn.length)|0];
 } else if(race === "Dwarf"){
   subrace = subraceOptions_dwarf[(Math.random()*subraceOptions_dwarf.length)|0];
 } else if(race === "Elf"){
   subrace = subraceOptions_elf[(Math.random()*subraceOptions_elf.length)|0];
 } else if(race === "Genasi"){
   subrace = subraceOptions_genasi[(Math.random()*subraceOptions_genasi.length)|0];
 } else if(race === "Gith"){
   subrace = subraceOptions_gith[(Math.random()*subraceOptions_gith.length)|0];
 } else if(race === "Gnome"){
   subrace = subraceOptions_gnome[(Math.random()*subraceOptions_gnome.length)|0];
 } else if(race === "Halfling"){
   subrace = subraceOptions_halfling[(Math.random()*subraceOptions_halfling.length)|0];
 } else if(race === "Merfolk"){
   subrace = subraceOptions_merfolk[(Math.random()*subraceOptions_merfolk.length)|0];
 }
}

function getBgFeature(){
 if(bg === "Outlander"){
  return "<p><b><u>Background Feature: Wanderer</u></b></p><p>You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.</p>";
 }
 return "<p><b><u>Background Feature: NYI</u></b></p><p>This background feature has not yet been implemented!</p>";
}

function getBackstory(){
  return "To be determined!"; // eventually we'll replace this
}

function loadDbg(){
  document.getElementById("DEBUG_TEXT").innerHTML = debugtxt;
  if(debug){
   document.getElementById("DEBUG_TEXT").hidden = false; // show if debug is activated
  } else {
   document.getElementById("DEBUG_TEXT").hidden = true; // hide otherwise
  }
}

function toggleDbg(){
  debug = !debug;
  loadDbg();
}

function unhide(elId){
   let el = document.getElementById(elId);
   el.removeAttribute("hidden"); // show
}

function toggleHidden(elId){
 let el = document.getElementById(elId);
 if(elId === "MOREOPTIONS"){
       if(el.getAttribute("hidden")){
         document.getElementById("MOREOPTIONSBUTTON").innerText = "Less Options...";
         document.getElementById("HEAD_CONTAINER").style.paddingBottom = '10px'; // increase lower padding
       } else {
         document.getElementById("MOREOPTIONSBUTTON").innerText = "More Options...";
         document.getElementById("HEAD_CONTAINER").style.paddingBottom = '6px';
       }
 }
 if(el.getAttribute("hidden")){
   el.removeAttribute("hidden"); // show
 } else {
   el.setAttribute("hidden", "hidden"); // hide
 }
}

function loadPregens(){
 racePreset = document.querySelector('#SELECT_RACE').value;    
 classPreset = document.querySelector('#SELECT_CLASS').value;   
 srPreset = document.querySelector('#SELECT_SUBRACE').value;    
 scPreset = document.querySelector('#SELECT_SUBCLASS').value;    
 lvlPreset = document.querySelector('#SELECT_LVL').value;    
}

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function generate(){
  resetFeatures();
  loadPregens();
      
  // set titles
  unhide("tabnav");
  unhide("ACTIONSPAGE");
  openTab("CHARACTERSHEET");
  document.getElementById("SHEET_PROF_TITLE").innerHTML = "Proficiencies"
  document.getElementById("SHEET_FEATURES_TITLE").innerHTML = "Features";
  document.getElementById("SHEET_BG_TITLE").innerHTML = "Characterization";
  document.getElementById("SHEET_FEATURES_CLASS_HEADER").innerHTML = "Class Features";
  document.getElementById("SHEET_FEATURES_RACE_HEADER").innerHTML = "Race Features";
  document.getElementById("SHEET_BG_BACKSTORY_HEADER").innerHTML ="<u>Backstory</u>";
  document.getElementById("SHEET_ACTIONS_TITLE").innerHTML = "Actions";
  document.getElementById("SHEET_ACTIONS_ROLL").innerHTML = "Roll...";
  document.getElementById("toc-container").removeAttribute("hidden"); // show toc
 
  // determine main fields
  nameGen();
  document.getElementById("SHEET_BASIC_NAME").innerHTML = name;
  subclass = "";
  subrace = "";
  if(racePreset === "Random"){
      race = raceOptions[(Math.random()*raceOptions.length)|0];
  } else {
      race = racePreset;     
  }
  if(srPreset === "Random" || !(typeof(srSelector[race]) === "undefined")){ // not all races have subraces: we only want to randomize initially if we switch to a race that DOES have subraces
      genSubRace();
  } else {
      subrace = srPreset;
  }
  if(classPreset === "Random"){
      clss = classOptions[(Math.random()*classOptions.length)|0];
  } else {
      clss = classPreset;
  }
  if(scPreset === "Random" || scPreset === ""){ // every class has some subclasses, so if we switch to a different class without choosing a subclass, just randomize one
      genSubClass();
  } else {
      subclass = scPreset;
  }
  if(lvlPreset == -1 || lvlPreset === "Random"){
      lvl = (Math.random()*20 + 1)|0;
  } else {
      lvl = lvlPreset;
  }
  bg = bgOptions[(Math.random()*bgOptions.length)|0];
 
  // if(debug){ race = "Lizardfolk"; clss = "Artificer"; } // defaults for debug
  if(subrace === ""){ 
    document.getElementById("SHEET_BASIC_RACECLASS").innerHTML = "" + race + " " + clss + " (" + subclass + ") " + lvl;
  } else {
    document.getElementById("SHEET_BASIC_RACECLASS").innerHTML = "" + race + " (" + subrace + ") " + clss + " (" + subclass + ") " + lvl;
  }
  debugtxt += "<br>Checkpoint 1: Race/Class displayed properly!";
 
  rollStats();
  sortStats();
  handleProficiencies();
  handleClassFeatures();
  handleRaceFeatures();
  handleBgFeatures();
  handleLangs();
 
  document.getElementById("SHEET_BASIC_STATS_STR").innerHTML = "STR: " + stats[0] + " (" + statModifiers[stats[0]]+ ")";
  document.getElementById("SHEET_BASIC_STATS_DEX").innerHTML = "DEX: " + stats[1] + " (" + statModifiers[stats[1]]+ ")";
  document.getElementById("SHEET_BASIC_STATS_CON").innerHTML = "CON: " + stats[2] + " (" + statModifiers[stats[2]]+ ")";
  document.getElementById("SHEET_BASIC_STATS_INT").innerHTML = "INT: " + stats[3] + " (" + statModifiers[stats[3]]+ ")";
  document.getElementById("SHEET_BASIC_STATS_WIS").innerHTML = "WIS: " + stats[4] + " (" + statModifiers[stats[4]]+ ")";
  document.getElementById("SHEET_BASIC_STATS_CHA").innerHTML = "CHA: " + stats[5] + " (" + statModifiers[stats[5]]+ ")";
  debugtxt += "<br>Checkpoint 3: Stats displayed properly!";
 
  calcHP();
  calcAC();
  spdtxt = spdtxt.replace("_SPD",spd);
  
  // set hp, ac, spd text
  document.getElementById("SHEET_BASIC_STATS_HP").innerHTML = "<b>HP:</b> " + hp;
  document.getElementById("SHEET_BASIC_STATS_AC").innerHTML = "<b>AC:</b> " + ac + " (" + armorType + ")";
  document.getElementById("SHEET_BASIC_STATS_SPD").innerHTML = spdtxt;
  debugtxt += "<br>Checkpoint 4: HP/AC/speed displayed properly!";
 
  // set background stuff
  document.getElementById("SHEET_BG").innerHTML = "Background: " + bg;
  document.getElementById("SHEET_BG_FEATURE").innerHTML = getBgFeature();
  document.getElementById("SHEET_BG_BACKSTORY").innerHTML = getBackstory();
  debugtxt += "<br>Checkpoint 5: Background section displayed properly!";
 
  loadDbg();
}
