let debug = true; // global debug boolean
let debugtxt = "";

const statModifiers = new Array(-5,-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5);
const pBonuses = new Array(0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6);
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

// proficiencies by class
// format: saves, skills, weapons, armor, tools
const stS = "STR", stD = "DEX", stC = "CON", stI = "INT", stW = "WIS", stA = "CHA";
const wS = "Simple weapons", wM = "Martial weapons",wW = "Daggers, darts, slings, quarterstaffs, light crossbows",wR="hand crossbows, longswords, rapiers, shortswords",wD="Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears", wDw = "battleaxes, handaxes, light hammers, warhammers", wEw = "longswords, shortswords, shortbows, longbows", wDr = "rapiers, shortswords, hand crossbows.";
const aL = "Light armor", aM = "Medium armor", aH = "Heavy armor", aA = "All armor", aS = "Shields";
const sA = "Arcana", sAl = "Athletics", sAc = "Acrobatics", sAh = "Animal Handling", sI = "Investigation", sIn = "Insight", sS = "Stealth", sSh = "Sleight of Hand", sSv = "Survival", sN = "Nature", sH = "History", sP = "Perception", sPf = "Performance", sPs = "Persuasion", sD = "Deception", sIt = "Intimidation", sM = "Medicine", sR = "Religion";
const tT = "Thieves' Tools", tTk = "Tinker's Tools", tH = "Herbalism Kit", tS = "Smith's Tools", tB = "Brewer's Supplies", tM = "Mason's Tools", tR = "_TOOL", tI = "_INSTRUMENT", tA = "_TOOLINSTRUMENT";

const proficiencies_artificer = new Array(new Array(stC,stI), new Array(sA,sH,sI,sM,sN,sP,sSh), new Array(wS), new Array(aL,aM,aS), new Array(tT,tTk,tR));
const proficiencies_barbarian = new Array(new Array(stS, stC),new Array(sAh,sAl,sIt,sN,sP,sSv),new Array(wS,wM), new Array(aL,aM,aS),new Array());
const proficiencies_bard = new Array(new Array(stD, stA),new Array(sA,sAl,sAc,sAh,sI,sIn,sIt,sS,sSh,sSv,sN,sH,sP,sPf,sPs,sD,sM,sR),new Array(wS,wR),new Array(aL),new Array(tI,tI,tI));
const proficiencies_cleric = new Array(new Array(stW, stA),new Array(sH,sIn,sM,sPs,sR),new Array(wS),new Array(aL,aM,aS),new Array());
const proficiencies_druid = new Array(new Array(stI,stW),new Array(sA,sAh,sIn,sM,sN,sP,sR,sSv),new Array(wD),new Array(aL,aM,aS),new Array(tH));
const proficiencies_fighter = new Array(new Array(stS,stC),new Array(sA,sAh,sAl,sH,sIn,sIt,sP,sS),new Array(wS,wM),new Array(aA,aS),new Array());
const proficiencies_monk = new Array(new Array(stS,stD),new Array(sAc,sAl,sH,sIn,sR,sS),new Array(wS,"shortswords"),new Array(),new Array(tA));
const proficiencies_paladin = new Array(new Array(stW,stA),new Array(sAl,sIn,sIt,sM,sPs,sR),new Array(wS,wM),new Array(aA,aS),new Array());
const proficiencies_ranger = new Array(new Array(stS,stD),new Array(sAh,sAl,sIn,sI,sN,sP,sS,sSv),new Array(wS,wM),new Array(aL,aM,aS),new Array());
const proficiencies_rogue = new Array(new Array(stD,stI),new Array(sAc,sAl,sD,sI,sIt,sIn,sP,sPf,sPs,sSh,sS),new Array(wS,wR),new Array(aL),new Array(tT));
const proficiencies_sorcerer = new Array(new Array(stC,stA),new Array(sA,sD,sIn,sIt,sPs,sR),new Array(wW),new Array(),new Array());
const proficiencies_warlock = new Array(new Array(stW,stA),new Array(sA,sD,sH,sI,sIt,sN,sR),new Array(wS),new Array(aL),new Array());
const proficiencies_wizard = new Array(new Array(stI,stW),new Array(sA,sH,sIn,sI,sM,sR),new Array(wW),new Array(),new Array());

//global features
const FEATURE_ASI_STANDARD = "<p><strong><i>Ability Score Improvement.</i></strong></p><p>When you reach 4th level, 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>";
const FEATURE_EA_STANDARD = "<p><strong><i>Extra Attack.</i></strong></p><p>Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.</p>";

//feature template
const FEATURE_CLASS_0_0 = "<p><b><i>Feature.</i></b></p><p></p>";

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

const FEATURE_ARTIFICER_ARMORER_3_0 = "<p><b><i>Tools of the Trade.</i></b></p><p>When you adopt this specialization at 3rd level, you gain proficiency with heavy armor. You also gain proficiency with smith's tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>";
const FEATURE_ARTIFICER_ARMORER_3_1 = "<p><b><i>Armorer Spells.</i></b></p><p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.</p><h6><b>Armorer Spells:</b></h6><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"> <!-- Header Row --><th style=\"padding-right:12px;\">Artificer Level</th><th>Armorer Spells</th></tr><tr> <!-- 1st level spells --><td>3rd</td><td>Magic Missile, Thunderwave</td></tr><tr> <!-- 2nd level spells --><td>5th</td><td>Mirror Image, Shatter</td></tr><tr> <!-- 3rd level spells --><td>9th</td><td>Hypnotic Pattern, Lightning Bolt</td></tr><tr> <!-- 4th level spells --><td>13th</td><td>Fire Shield, Greater Invisibility</td></tr><tr> <!-- 5th level spells --><td>17th</td><td>Passwall, Wall of Force</td></tr></table>";
const FEATURE_ARTIFICER_ARMORER_3_2 = "<p><b><i>Arcane Armor.</i></b></p><p>Beginning at 3rd level, your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.</p><p>You gain the following benefits while wearing this armor:</p><ul><li>If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.</li><li>You can use the arcane armor as a spellcasting focus for your artificer spells.</li><li>The armor attaches to you and can’t be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a body part it is replacing.</li><li>You can doff or don the armor as an action.</li></ul><p>The armor continues to be Arcane Armor until you don another suit of armor or you die.</p>";
const FEATURE_ARTIFICER_ARMORER_3_3 = "<p><b><i>Armor Model.</i></b></p><p>Beginning at 3rd level, you can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.</p><p>Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.</p><p>You can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.</p><p><b>Guardian.</b> You design your armor to be in the front line of conflict. It has the following features:<p><ul><li><b>Thunder Gauntlets.</b> Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.</li><li><b>Defensive Field.</b> As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</li></ul><p><b>Infiltrator.</b> You customize your armor for subtle undertakings. It has the following features:<ul><li><b>Lightning Launcher.</b> A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.</li><li><b>Powered Steps.</b> Your walking speed increases by 5 feet.</li><li><b>Dampening Field.</b> You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.</li></ul>";
const FEATURE_ARTIFICER_ARMORER_9_0 = "<p><b><i>Armor Modifications.</i></b></p><p>At 9th level, you learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor.</p>";
const FEATURE_ARTIFICER_ARMORER_15_0 = "<p><b><i>Perfected Armor.</i></b></p><p>At 15th level, your Arcane Armor gains additional benefits based on its model, as shown below.</p><p><b>Guardian.</b> When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force the creature to make a Strength saving throw against your spell save DC, pulling the creature up to 30 feet toward you to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.</p><p>You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.</p><p><b>Infiltrator.</b> Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage.</p>";

// spellcasting feature variations
const FEATURE_ARTIFICER_SPELLCASTING = "<p><b><i>Spellcasting.</b></i>You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.</p><h6><u>Tools Required</u></h6><p>You produce your artificer spell effects through your tools. You must have a spellcasting focus-specifically thieves' tools or some kind of artisan's tool-in hand when you cast any spell with this Spellcasting feature (meaning the spell has an \"M\" component when you cast it). You must be proficient with the tool to use it in this way. See the equipment chapter in the <i>Player's Handbook</i> for descriptions of these tools.</p><p>After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.</p><h6><u>Cantrips (0-Level Spells)</u></h6><p>At 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer can trips of your choice, as shown in the Cantrips Known column of the Artificer table.</p><p>When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list.</p><h6><u>Preparing and Casting Spells</u></h6><p>The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to _SPELLSAVAILABLE (your Intelligence modifier + half your artificer level, rounded down, with a minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a lst-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Intelligence modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Intelligence modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>";

// race features
const SPD_DEFAULT = "<p><b>Speed:</b> _SPD ft.</p>";
const SPD_SWIM_DEFAULT = "<p><b>Speed:</b> _SPD ft., swim 30 ft.</p>";
const SPD_FLY_DEFAULT = "<p><b>Speed:</b> _SPD ft., fly 30 ft.</p>";
let LANGS = new Array("Aarakocra","Abyssal","Auran","Celestial","Elvish","Dwarvish","Draconic","Giant","Gith","Gnomish","Goblin","Infernal","Leonin","Loxodon","Merfolk","Minotaur","Orc","Primordial","Sylvan","Vedalken");

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
const FEATURE_DWARF_1_D = "<p><b><i>Superior Darkvision.</b></i> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</p>";
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
// githzerai
// githyanki

// gnome
// deep gnome
// forest gnome
// rock gnome

// goblin

// goliath

// half-elf

// half-orc
const FEATURE_HALFORC_1 = "<p><b><i>Menacing</i></b> You gain proficiency in the Intimidation skill.</p>";
const FEATURE_HALFORC_2 = "<p><b><i>Relentless Endurance</i></b> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.</p>";
const FEATURE_HALFORC_3 = "<p><b><i>Savage Attacks</i></b> When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.</p>";

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
let lvl = 1;
let hp = 24; // hp
let ac = 10; // overall ac
let acu = 10; // unarmored defense
let aca = 11; // armored AC
let spd = 30; // base move speed
let spdtxt = "";
let armorType = "unarmored defense";
let stats = new Array();
let skills = new Array(); // skill proficiency list
let wpns = new Array(); // weapon proficiency list
let amr = new Array(); // armor proficiency list
let tls = new Array(); // tool proficiency list
let langs = new Array("Common"); // language proficiency list

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

function resetFeatures(){
  LANGS = new Array("Aarakocra","Abyssal","Auran","Celestial","Elvish","Dwarvish","Draconic","Giant","Gith","Gnomish","Goblin","Infernal","Leonin","Loxodon","Merfolk","Minotaur","Orc","Primordial","Sylvan","Vedalken");
  debugtxt = "";
  skills = new Array();
  wpns = new Array();
  amr = new Array();
  tls = new Array();
  langs = new Array("Common");
 
  // reload race proficiency arrays that might have removes called
  proficiencies_changeling = new Array(sD,sIn,sIt,sPs);
  proficiencies_orc = new Array(sAh,sIn,sIt,sM,sP,sSv);
  // debugtxt += "<br>TEST: Orc array [5] = " + proficiencies_orc[5] + ", Changeling array [3] = " + proficiencies_changeling[3];
 
  document.getElementById("SHEET_FEATURES_LV1_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV2_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_02").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_03").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_04").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_05").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV4_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV5_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV6_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV7_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV8_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV9_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV10_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV11_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV12_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV13_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV14_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV15_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV16_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV17_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV18_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV19_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV20_01").innerHTML = "";
 
  document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_07").innerHTML = "";
  document.getElementById("SHEET_FEATURES_RACE_08").innerHTML = "";
 
  document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "";
  document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = "";
}

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
 let savestxt = "";
 let skillstxt = "";
 let weaponstxt = "";
 let armortxt = "";
 let toolstxt = "";
 
 savestxt += "<b>Saving Throws:</b> " + profs[0][0] + ", " + profs[0][1];
 skillstxt += "<b>Skills:</b> ";
 weaponstxt += "<b>Weapons:</b> ";
 armortxt += "<b>Armor:</b> ";
 toolstxt += "<b>Tools:</b> ";
 
 // choose skills from class
 // precondition: numSkills <= skillsCopy.length
 for(let i = 0; i < numSkills; i++){
  let selectionIndex = (Math.random()*skillsCopy.length)|0;
  skills.push(skillsCopy[selectionIndex]);
  skillsCopy = remove(skillsCopy,selectionIndex); // remove the selected value from the array
 }
 // fill weapons field
 for(let i = 0; i < profs[2].length; i++){
  wpns.push(profs[2][i]);
 }
 // fill armor field
 for(let i = 0; i < profs[3].length; i++){
  amr.push(profs[3][i]);
 }
 // fill tools field
 for(let i = 0; i < profs[4].length; i++){
  tls.push(profs[4][i]);
 }
 
 // race proficiencies
 if(!(wpns.includes(wM))){
   if(race === "Dwarf"){
     wpns.push(wDw); // dwarven combat training
     if(!(tls.includes(tS))) tls.push(tS); // dwarven tool proficiencies
     else if(!(tls.includes(tM))) tls.push(tM);
     else if(!(tls.includes(tB))) tls.push(tB);
   }
   if(!(wpns.includes(wR))){ // rogue/bard weapons cover everything elvish 
     if(race === "Elf" && (subrace === "High" || subrace === "Wood")){ // elf weapon training
       wpns.push(wEw);
     }
     if(subrace === "Drow"){ // drow weapons training
       wpns.push(wDr);
     }
   }
 }
 if(subrace === "Mountain"){ // dwarven armor training- light + medium armor proficiency
    if(!(amr.includes(aL))){ amr.push(aL); }
    if(!(amr.includes(aM))){ amr.push(aM); }
 }
 if(race === "Elf" && !(skills.includes(sP))){ // keen senses
   skills.push(sP);
 }
 if(race === "Centaur"){ // survivor
   let j = Math.random()*proficiencies_centaur.length;
   debugtxt += "<br>TEST: n = " + j + ", race prof = " + proficiencies_centaur[j];
   if(!(skills.includes(proficiencies_centaur[j]))){
     skills.push(proficiencies_centaur[j]);
   }
 }
 if(race === "Orc"){ // primal intuition
   for(let i = 0; i < 2; i++){
     let j = Math.random()*proficiencies_orc.length;
     debugtxt += "<br>TEST: n = " + j + ", race prof = " + proficiencies_orc[j];
     if(!(skills.includes(proficiencies_orc[j]))){
       skills.push(proficiencies_orc[j]);
       remove(proficiencies_orc, proficiencies_orc[j]);
     }
   }
 }
 if(race === "Changeling"){ // changeling instincts
   for(let i = 0; i < 2; i++){
     let j = Math.random()*proficiencies_changeling.length;
     debugtxt += "<br>TEST: n = " + j + ", race prof = " + proficiencies_changeling[j];
     if(!(skills.includes(proficiencies_changeling[j]))){
       skills.push(proficiencies_changeling[j]);
       remove(proficiencies_changeling, proficiencies_changeling[j]);
     }
   }
 }
 if(race === "Half-Orc" && !(skills.includes(sIt))) skills.push(sIt); // half orc menacing feature
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
      document.getElementById("SHEET_FEATURES_LV1_01").innerHTML = FEATURE_ARTIFICER_1_0;
      if(lvl>1){
        document.getElementById("SHEET_FEATURES_LV2_01").innerHTML = FEATURE_ARTIFICER_2_0;
      }
      if(lvl>2){
        document.getElementById("SHEET_FEATURES_LV3_01").innerHTML = FEATURE_ARTIFICER_3_0;
        if(subclass === "Armorer"){
          document.getElementById("SHEET_FEATURES_LV3_02").innerHTML = FEATURE_ARTIFICER_ARMORER_3_0;
          document.getElementById("SHEET_FEATURES_LV3_03").innerHTML = FEATURE_ARTIFICER_ARMORER_3_1;
          document.getElementById("SHEET_FEATURES_LV3_04").innerHTML = FEATURE_ARTIFICER_ARMORER_3_2;
          document.getElementById("SHEET_FEATURES_LV3_05").innerHTML = FEATURE_ARTIFICER_ARMORER_3_3;
        }
      }
      if(lvl>3){
        document.getElementById("SHEET_FEATURES_LV4_01").innerHTML = FEATURE_ASI_STANDARD;
      }
      if(lvl>4){ // 5th lvl subclass feature
        if(subclass === "Armorer"){
          document.getElementById("SHEET_FEATURES_LV5_01").innerHTML = FEATURE_EA_STANDARD;
        }
      }
      if(lvl>5){ // 6th level main feature
       document.getElementById("SHEET_FEATURES_LV6_01").innerHTML = FEATURE_ARTIFICER_6_0;
      }
      if(lvl>6){ // 7th level main feature
       document.getElementById("SHEET_FEATURES_LV7_01").innerHTML = FEATURE_ARTIFICER_7_0;
      }
      if(lvl>8){ // 9th level subclass feature
        if(subclass === "Armorer"){
          document.getElementById("SHEET_FEATURES_LV9_01").innerHTML = FEATURE_ARTIFICER_ARMORER_9_0;
        }
      }
      if(lvl>9){ // 10th level main feature
       document.getElementById("SHEET_FEATURES_LV10_01").innerHTML = FEATURE_ARTIFICER_10_0;
      }
      if(lvl>10){ // 11th level main feature
       document.getElementById("SHEET_FEATURES_LV11_01").innerHTML = FEATURE_ARTIFICER_11_0;
      }
      if(lvl>13){ // 14th level main feature
       document.getElementById("SHEET_FEATURES_LV14_01").innerHTML = FEATURE_ARTIFICER_14_0;
      }
      if(lvl>14){ // 15th level subclass feature
        if(subclass === "Armorer"){
          document.getElementById("SHEET_FEATURES_LV15_01").innerHTML = FEATURE_ARTIFICER_ARMORER_15_0;
        }
      }
      if(lvl > 17){ // 18th lvl main feature
       document.getElementById("SHEET_FEATURES_LV18_01").innerHTML = FEATURE_ARTIFICER_18_0;
      }
      if(lvl > 19){ // 20th lvl main feature
       document.getElementById("SHEET_FEATURES_LV20_01").innerHTML = FEATURE_ARTIFICER_20_0;
      }
     document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "Spellcasting";
     let intMod = statModifiers[stats[3]];
     let sav = (lvl/2)|0+intMod; // spells available
     if(sav < 1) sav = 1;
     let sam = pBonuses[lvl] + intMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_ARTIFICER_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVAILABLE",sav).replace("_SPELLSAVEDC",sdc);
   }
   debugtxt += "<br>Checkpoint 2: Class Features generated!";
}



function handleRaceFeatures(){
  spd = 30;
  randlangcount = 0;
  spdtxt = SPD_DEFAULT;
  if(race === "Aarakocra"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_AARAKOCRA_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_AARAKOCRA_2;
    spd = 25;
    spdtxt = SPD_AARAKOCRA;
    langs.push("Aarakocra");
    remove(LANGS, "Aarakocra");
    langs.push("Auran");
    remove(LANGS, "Auran");
  }
  if(race === "Aasimar"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_AASIMAR_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_AASIMAR_2;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_AASIMAR_3;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_AASIMAR_4;
    if(subrace === "Protector" && lvl > 2){
      document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_AASIMAR_PROTECTOR_1;
    }
    if(subrace === "Scourge" && lvl > 2){
       document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_AASIMAR_SCOURGE_1;
    }
    if(subrace === "Fallen" && lvl > 2){
       document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_AASIMAR_FALLEN_1;
    }
    langs.push("Celestial");
    remove(LANGS, "Celestial");
  }
  if(race === "Bugbear"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DARKVISION;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_POWERFULBUILD;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_BUGBEAR_1;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_BUGBEAR_2;
    document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_BUGBEAR_3;
    langs.push("Goblin");
    remove(LANGS, "Goblin");
  }
 if(race === "Centaur"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_CREATURETYPE_FEY;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_CENTAUR_1;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_CENTAUR_2;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_CENTAUR_3;
    document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_CENTAUR_4;
    spd = 40;
    langs.push("Sylvan");
    remove(LANGS, "Sylvan");
  }
  if(race === "Changeling"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_CHANGELING_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_CHANGELING_2;
    randlangcount = 2;
  }
  if(race === "Dragonborn"){
    let ddc = 8 + statModifiers[stats[2]] + pBonuses[lvl]; // 8+prof+conmod
    if(subrace === "Red" || subrace === "Green" || subrace === "Blue" || subrace === "Black" || subrace === "White"){ // chromatic options
      let temp1 = FEATURE_DRAGONBORN_CHROMATIC_1, temp2 = FEATURE_DRAGONBORN_1, temp3 = FEATURE_DRAGONBORN_CHROMATIC_2;
      temp1 = temp1.replace("_DDC",ddc); // replace bw save dc
      if(subrace === "Red"){
       document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_RED;
       temp1 = temp1.replace("_DTYPE","Fire"); temp2 = temp2.replace("_DTYPE","Fire"); temp3 = temp3.replace("_DTYPE","Fire");
      }
      if(subrace === "Green"){
       document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_GREEN;
       temp1 = temp1.replace("_DTYPE","Poison"); temp2 = temp2.replace("_DTYPE","Poison"); temp3 = temp3.replace("_DTYPE","Poison");
      }
      if(subrace === "Blue"){
       document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_BLUE;
       temp1 = temp1.replace("_DTYPE","Lightning"); temp2 = temp2.replace("_DTYPE","Lightning"); temp3 = temp3.replace("_DTYPE","Lightning");
      }
      if(subrace === "Black"){
       document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_BLACK;
       temp1 = temp1.replace("_DTYPE","Acid"); temp2 = temp2.replace("_DTYPE","Acid"); temp3 = temp3.replace("_DTYPE","Acid");
      }
      if(subrace === "White"){
       document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_WHITE;
       temp1 = temp1.replace("_DTYPE","Cold"); temp2 = temp2.replace("_DTYPE","Cold"); temp3 = temp3.replace("_DTYPE","Cold");
      }
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = temp1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = temp2;
      if(lvl>4) document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = temp3; // 5th level feature
    }
    if(subrace === "Gold" || subrace === "Silver" || subrace === "Bronze" || subrace === "Brass" || subrace === "Copper"){ // metallic options
      let temp1 = FEATURE_DRAGONBORN_METALLIC_1, temp2 = FEATURE_DRAGONBORN_1, temp3 = FEATURE_DRAGONBORN_METALLIC_2;
      temp1 = temp1.replace("_DDC",ddc); temp3 = temp3.replace("_DDC",ddc);// replace bw save dc
      if(subrace === "Gold" || subrace == "Brass"){
        if(subrace === "Gold"){ document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_GOLD; }
        else { document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_BRASS; }
        temp1 = temp1.replace("_DTYPE","Fire"); temp2 = temp2.replace("_DTYPE","Fire");
      }
      if(subrace === "Silver"){ 
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_SILVER;
        temp1 = temp1.replace("_DTYPE","Cold"); temp2 = temp2.replace("_DTYPE","Cold");
      }
      if(subrace === "Bronze"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_BRONZE;
        temp1 = temp1.replace("_DTYPE","Lightning"); temp2 = temp2.replace("_DTYPE","Lightning");
      }
      if(subrace === "Copper"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_COPPER;
        temp1 = temp1.replace("_DTYPE","Acid"); temp2 = temp2.replace("_DTYPE","Acid");
      }
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = temp1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = temp2;
      if(lvl>4) document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = temp3; // 5th level feature
    }
    if(subrace === "Crystal" || subrace === "Topaz" || subrace === "Amethyst" || subrace === "Sapphire" || subrace === "Emerald"){ // gem options
       let temp1 = FEATURE_DRAGONBORN_GEM_1, temp2 = FEATURE_DRAGONBORN_1;
       temp1 = temp1.replace("_DDC",ddc); // replace bw save dc
       if(subrace === "Crystal"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_CRYSTAL;
        temp1 = temp1.replace("_DTYPE","Radiant"); temp2 = temp2.replace("_DTYPE","Radiant");
       }
       if(subrace === "Topaz"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_TOPAZ;
        temp1 = temp1.replace("_DTYPE","Necrotic"); temp2 = temp2.replace("_DTYPE","Necrotic");
       }
       if(subrace === "Amethyst"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_AMETHYST;
        temp1 = temp1.replace("_DTYPE","Force"); temp2 = temp2.replace("_DTYPE","Force");
       }
       if(subrace === "Sapphire"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_SAPPHIRE;
        temp1 = temp1.replace("_DTYPE","Thunder"); temp2 = temp2.replace("_DTYPE","Thunder");
       }
       if(subrace === "Emerald"){
        document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DRAGONBORN_EMERALD;
        temp1 = temp1.replace("_DTYPE","Psychic"); temp2 = temp2.replace("_DTYPE","Psychic");
       }
       document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = temp1;
       document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = temp2;
       document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_DRAGONBORN_GEM_2;
       if(lvl>4) document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_DRAGONBORN_GEM_3; // 5th level feature
     }
    langs.push("Draconic");
    remove(LANGS, "Draconic");
  }
  if(race === "Dwarf"){
    spdtxt = SPD_DWARF;
    if(subrace === "Duergar"){document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DWARF_1_D;}
    else{document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DWARF_1;}
    if(subrace === "Duergar"){document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_DWARF_2_D;}
    else{document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_DWARF_2;}
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_DWARF_3;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_DWARF_4;
    document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_DWARF_5;
    if(subrace === "Hill"){
      document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_DWARF_HILL;
    } else if(subrace === "Mountain"){
      document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_DWARF_MTN;
    } else if(subrace === "Duergar"){
      document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_DWARF_DUERGAR_1;
      document.getElementById("SHEET_FEATURES_RACE_07").innerHTML = FEATURE_SUNSENS;
      langs.push("Undercommon");
      remove(LANGS, "Undercommon");
    }
    langs.push("Dwarvish");
    remove(LANGS, "Dwarvish");
  }
  if(race === "Elf"){
   let edc = 8 + pBonuses[lvl] + statModifiers[stats[5]]; // cha save dc for eladrin features
   if(subrace === "Drow"){document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_ELF_1_D;}
   else{document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_ELF_1;}
   document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_ELF_2;
   document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_ELF_3;
   document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_ELF_4;
   if(subrace === "Avariel"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_AVARIEL_1;
     document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_AVARIEL_2;
     spdtxt = SPD_FLY_DEFAULT;
     langs.push("Auran");
     remove(LANGS, "Auran");
   }
   if(subrace === "Drow"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_DROW_1;
     document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_DROW_2;
   }
   if(subrace === "Eladrin"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_ELADRIN_1;
   }
   if(subrace === "High" || subrace === "Wood"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_HIGH_1;
     if(subrace === "High"){
       document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_HIGH_2;
       document.getElementById("SHEET_FEATURES_RACE_07").innerHTML = FEATURE_ELF_HIGH_3;
       randlangcount = 1;
     } else {
       document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_WOOD_1;
       document.getElementById("SHEET_FEATURES_RACE_07").innerHTML = FEATURE_ELF_WOOD_2;
       spd = 35; // move speed update
     }
   }
   if(subrace === "Pallid"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_PALLID_1;
     document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_PALLID_2;
   }
   if(subrace === "Sea"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_SEA_1;
     document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_SEA_2;
     document.getElementById("SHEET_FEATURES_RACE_07").innerHTML = FEATURE_ELF_SEA_3;
     document.getElementById("SHEET_FEATURES_RACE_08").innerHTML = FEATURE_ELF_SEA_4;
     spdtxt = SPD_SWIM_DEFAULT;
     langs.push("Aquan");
     remove(LANGS, "Aquan");
   }
   if(subrace === "Shadar-Kai"){
     document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_ELF_SHADAR_1;
     document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_ELF_SHADAR_2;
   }
    langs.push("Elvish");
    remove(LANGS, "Elvish");
  }
  if(race === "Fairy"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_FAIRY_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_FAIRY_2;
    spdtxt = SPD_FAIRY;
    langs.push("Sylvan");
    remove(LANGS, "Sylvan");
  }
  if(race === "Firbolg"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_FIRBOLG_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_FIRBOLG_2;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_POWERFULBUILD;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_FIRBOLG_3;
    langs.push("Elvish");
    remove(LANGS, "Elvish");
    langs.push("Giant");
    remove(LANGS, "Giant");
  }
  if(race === "Genasi"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DARKVISION;
    if(subrace === "Fire"){
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_GENASI_FIRE_1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_GENASI_FIRE_2;
    }
    if(subrace === "Earth"){
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_GENASI_EARTH_1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_GENASI_EARTH_2;
    }
    if(subrace === "Air"){
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_GENASI_AIR_1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_GENASI_AIR_2;
    }
   if(subrace === "Water"){
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_GENASI_WATER_1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_GENASI_WATER_2;
      document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_GENASI_WATER_3;
      document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_GENASI_WATER_4;
      spdtxt = SPD_SWIM_DEFAULT;
    }
    langs.push("Primordial");
    remove(LANGS, "Primordial");
  }
  if(race === "Lizardfolk"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_LIZARDFOLK_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_LIZARDFOLK_2;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_LIZARDFOLK_3;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_LIZARDFOLK_4;
    document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_LIZARDFOLK_5;
    document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_LIZARDFOLK_6;
    langs.push("Draconic");
    remove(LANGS, "Draconic");
  }
  if(race === "Minotaur"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_MINOTAUR_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_MINOTAUR_2;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_MINOTAUR_3;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_MINOTAUR_4;
    langs.push("Minotaur");
    remove(LANGS, "Minotaur");
  }
  if(race === "Half-Orc" || race === "Orc"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_DARKVISION;
    if(race === "Half-Orc"){
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_HALFORC_1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_HALFORC_2;
      document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_HALFORC_3;
    } else {
      document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_ORC_1;
      document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_ORC_2;
      document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_POWERFULBUILD;
    }
    langs.push("Orc");
    remove(LANGS, "Orc");
  }
 
  // language randomization
  for(let i = 0; i < randlangcount; i++){
    let newLang = LANGS[Math.random()*LANGS.length];
    langs.push(newLang);
    remove(LANGS, newLang);
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

function generate(){
  resetFeatures();
  
  // set titles
  document.getElementById("SHEET_PROF_TITLE").innerHTML = "Proficiencies"
  document.getElementById("SHEET_FEATURES_TITLE").innerHTML = "Features";
  document.getElementById("SHEET_BG_TITLE").innerHTML = "Characterization";
  document.getElementById("SHEET_FEATURES_CLASS_HEADER").innerHTML = "Class Features";
  document.getElementById("SHEET_FEATURES_RACE_HEADER").innerHTML = "Race Features";
  document.getElementById("SHEET_BG_BACKSTORY_HEADER").innerHTML ="<u>Backstory</u>";
 
  // determine main fields
  subclass = "";
  subrace = "";
  nameGen();
  document.getElementById("SHEET_BASIC_NAME").innerHTML = name;
  lvl = (Math.random()*20 + 1)|0;
  race = raceOptions[(Math.random()*raceOptions.length)|0];
  clss = classOptions[(Math.random()*classOptions.length)|0];
  bg = bgOptions[(Math.random()*bgOptions.length)|0];
  genSubClass(); genSubRace();
 
  // if(debug){ race = "Lizardfolk"; clss = "Artificer"; } // defaults for debug
  if(subrace === ""){ 
    document.getElementById("SHEET_BASIC_RACECLASS").innerHTML = "" + race + " " + clss + " (" + subclass + ") " + lvl;
  } else {
    document.getElementById("SHEET_BASIC_RACECLASS").innerHTML = "" + race + " (" + subrace + ") " + clss + " (" + subclass + ") " + lvl;
  }
  debugtxt += "<br>Checkpoint 1: Race/Class displayed properly!";
 
  rollStats();
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
 
  if(debug){ document.getElementById("DEBUG_TEXT").innerHTML = debugtxt; }
}
