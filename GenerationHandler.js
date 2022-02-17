const debug = true; // global debug boolean

const statModifiers = new Array(-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5);
const pBonuses = new Array(2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6);
const raceOptions = new Array("Aarakocra","Aasimar","Bugbear","Centaur","Changeling","Dhampir","Metallic Dragonborn","Chromatic Dragonborn","Gem Dragonborn","Dwarf","Avariel Elf","Drow","Eladrin","High Elf","Pallid Elf","Sea Elf","Shadar-Kai","Wood Elf","Fairy","Firbolg","Air Genasi","Earth Genasi","Fire Genasi","Water Genasi","Githyanki","Githzerai","Deep Gnome","Forest Gnome","Rock Gnome", "Goblin","Goliath","Half-Elf","Half-Orc","Stout Halfling","Ghostwise Halfling","Lotusden Halfling","Lightfoot Halfling","Harengon","Hexblood","Hobgoblin","Human","Variant Human","Kalashtar","Kenku","Kobold","Leonin","Lizardfolk","Loxodon","Blue Merfolk","Green Merfolk","Minotaur","Orc","Owlin","Reborn","Satyr","Beasthide Shifter","Longtooth Shifter","Swiftstride Shifter","Wildhunt Shifter","Simic Hybrid","Tabaxi","Tiefling","Tortle","Triton","Vedalken","Warforged","Yuan-Ti");
const classOptions = new Array("Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard");

const subclassOptions_artificer = new Array("Alchemist","Artillerist","Armorer","Battle Smith");

//global features
const FEATURE_ASI_STANDARD = "<p><strong><i>Ability Score Improvement.</i></strong></p><p>When you reach 4th level, 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>";
const FEATURE_EA_STANDARD = "<p><strong><i>Extra Attack.</i></strong></p><p>Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.</p>";

// artificer features
const FEATURE_ARTIFICER_1_0 = "<p><b><i>Magical Tinkering.</i></b></p><p>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p><ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul><p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p><p> You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>";
const FEATURE_ARTIFICER_2_0 = "<p><b><i>Infuse Item.</i></b></p><p>At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.</p><ul><li><strong>Infusions Known:</strong> When you gain this feature, pick four artificer infusions to learn. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.<br>Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.</li><li><strong>Infusing an Item:</strong> Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the <i>Dungeon Master's Guide</i>).<br>Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion.You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies.If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.</li></ul>";
const FEATURE_ARTIFICER_3_0 = "<p><b><i>The Right Tool for the Job.</i></b></p><p>At 3rd level, you've learned how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>";
const FEATURE_ARTIFICER_6_0 = "";
const FEATURE_ARTIFICER_7_0 = "";
const FEATURE_ARTIFICER_10_0 = "";
const FEATURE_ARTIFICER_11_0 = "";
const FEATURE_ARTIFICER_14_0 = "";
const FEATURE_ARTIFICER_18_0 = "";
const FEATURE_ARTIFICER_20_0 = "";

const FEATURE_ARTIFICER_ARMORER_3_0 = "<p><b><i>Tools of the Trade.</i></b></p><p>When you adopt this specialization at 3rd level, you gain proficiency with heavy armor. You also gain proficiency with smith's tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>";
const FEATURE_ARTIFICER_ARMORER_3_1 = "<p><b><i>Armorer Spells.</i></b></p><p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.</p><h6><b>Armorer Spells:</b></h6><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"> <!-- Header Row --><th style=\"padding-right:12px;\">Artificer Level</th><th>Armorer Spells</th></tr><tr> <!-- 1st level spells --><td>3rd</td><td>Magic Missile, Thunderwave</td></tr><tr> <!-- 2nd level spells --><td>5th</td><td>Mirror Image, Shatter</td></tr><tr> <!-- 3rd level spells --><td>9th</td><td>Hypnotic Pattern, Lightning Bolt</td></tr><tr> <!-- 4th level spells --><td>13th</td><td>Fire Shield, Greater Invisibility</td></tr><tr> <!-- 5th level spells --><td>17th</td><td>Passwall, Wall of Force</td></tr></table>";
const FEATURE_ARTIFICER_ARMORER_3_2 = "<p><b><i>Arcane Armor.</i></b></p><p>Beginning at 3rd level, your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.</p><p>You gain the following benefits while wearing this armor:</p><ul><li>If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.</li><li>You can use the arcane armor as a spellcasting focus for your artificer spells.</li><li>The armor attaches to you and can’t be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a body part it is replacing.</li><li>You can doff or don the armor as an action.</li></ul><p>The armor continues to be Arcane Armor until you don another suit of armor or you die.</p>";
const FEATURE_ARTIFICER_ARMORER_3_3 = "<p><b><i>Armor Model.</i></b></p><p>Beginning at 3rd level, you can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.</p><p>Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.</p><p>You can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.</p><p><b>Guardian.</b> You design your armor to be in the front line of conflict. It has the following features:<p><ul><li><b>Thunder Gauntlets.</b> Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.</li><li><b>Defensive Field.</b> As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</li></ul><p><b>Infiltrator.</b> You customize your armor for subtle undertakings. It has the following features:<ul><li><b>Lightning Launcher.</b> A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.</li><li><b>Powered Steps.</b> Your walking speed increases by 5 feet.</li><li><b>Dampening Field.</b> You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.</li></ul>";
const FEATURE_ARTIFICER_ARMORER_9_0 = "<p><b><i>Armor Modifications.</i></b></p><p>At 9th level, you learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor.</p>";
const FEATURE_ARTIFICER_ARMORER_15_0 = "<p><b><i>Perfected Armor.</i></b></p><p>At 15th level, your Arcane Armor gains additional benefits based on its model, as shown below.</p><p><b>Guardian.</b> When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force the creature to make a Strength saving throw against your spell save DC, pulling the creature up to 30 feet toward you to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.</p><p>You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.</p><p><b>Infiltrator.</b> Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage.</p>";

// spellcasting feature variations
const FEATURE_ARTIFICER_SPELLCASTING = "<p><b><i>Spellcasting.</b></i>You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.</p><h6><u>Tools Required</u></h6><p>You produce your artificer spell effects through your tools. You must have a spellcasting focus-specifically thieves' tools or some kind of artisan's tool-in hand when you cast any spell with this Spellcasting feature (meaning the spell has an \"M\" component when you cast it). You must be proficient with the tool to use it in this way. See the equipment chapter in the <i>Player's Handbook</i> for descriptions of these tools.</p><p>After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.</p><h6><u>Cantrips (0-Level Spells)</u></h6><p>At 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer can trips of your choice, as shown in the Cantrips Known column of the Artificer table.</p><p>When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list.</p><h6><u>Preparing and Casting Spells</u></h6><p>The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p><p>You prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to _SPELLSAVAILABLE (your Intelligence modifier + half your artificer level, rounded down, with a minimum of one spell). The spells must be of a level for which you have spell slots.</p><p>For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a lst-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p><p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.</p><h6><u>Spellcasting Ability</u></h6><p>Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.</p><p><b>Spell save DC</b> = _SPELLSAVEDC (8 + your proficiency bonus + your Intelligence modifier)</p><p><b>Spell attack modifier</b> = _SPELLATKMODIFIER (your proficiency bonus + your Intelligence modifier)</p><h6><u>Ritual Casting</u></h6><p>You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>";

// race features
// aarakocra
// aasimar
// bugbear
// centaur
// changeling
// dhampir
// metal dragonborn
// chroma dragonborn
// gem dragonborn
// dwarf
// elf (avariel)
// drow
// eladrin
// high elf
// sea elf
// pallid elf
// shadar kai
// wood elf
// lizardfolk
const FEATURE_LIZARDFOLK_1 = "<p><b><i>Swim Speed.</b></i> You have a swimming speed of 30 feet.</p>";
const FEATURE_LIZARDFOLK_2 = "<p><b><i>Cunning Artisan.</b></i> As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.</p>";
const FEATURE_LIZARDFOLK_3 = "<p><b><i>Hold Breath.</b></i> You can hold your breath for up to 15 minutes at a time.</p>";
const FEATURE_LIZARDFOLK_4 = "<p><b><i>Hunter's Lore.</b></i> You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.</p>";
const FEATURE_LIZARDFOLK_5 = "<p><b><i>Natural Armor.</b></i> You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.</p>";
const FEATURE_LIZARDFOLK_6 = "<p><b><i>Hungry Jaws.</b></i> In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your Constitution modifier (minimum of 1), and you can't use this trait again until you finish a short or long rest.</p>";

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
let armorType = "unarmored defense";
let stats = new Array();

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
  document.getElementById("SHEET_FEATURES_LV1_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV2_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_02").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_03").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_04").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV3_05").innerHTML = "";
  document.getElementById("SHEET_FEATURES_LV4_01").innerHTML = "";
  document.getElementById("SHEET_FEATURES_SPELLCASTING_HEADER").innerHTML = "";
  document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = "";
}

function handleClassFeatures(){
  resetFeatures();
   if(clss === "Artificer"){
      document.getElementById("SHEET_FEATURES_LV1_01").innerHTML = FEATURE_ARTIFICER_1_0;
      if(lvl>1){
        document.getElementById("SHEET_FEATURES_LV2_01").innerHTML = FEATURE_ARTIFICER_2_0;
      }
      if(lvl>2){
        document.getElementById("SHEET_FEATURES_LV3_01").innerHTML = FEATURE_ARTIFICER_3_0;
         // 3rd level subclass choice
        subclass = subclassOptions_artificer[(Math.random()*subclassOptions_artificer.length)|0];
        if(debug){ subclass = "Armorer"; }
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
     let intMod = statModifiers[stats[3]-1];
     let sav = (lvl/2)+intMod; // spells available
     if(sav < 1) sav = 1;
     let sam = pBonuses[lvl-1] + intMod; // spell attack modifier
     let sdc = 8 + sam;
     document.getElementById("SHEET_FEATURES_SPELLCASTING_DESCRIPTION").innerHTML = FEATURE_ARTIFICER_SPELLCASTING.replace("_SPELLATKMODIFIER",sam).replace("_SPELLSAVAILABLE",sav).replace("_SPELLSAVEDC",sdc);
   }
   document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 2 reached in code! Class features generated!";
}

function handleRaceFeatures(){
  if(race === "Lizardfolk"){
    document.getElementById("SHEET_FEATURES_RACE_01").innerHTML = FEATURE_LIZARDFOLK_1;
    document.getElementById("SHEET_FEATURES_RACE_02").innerHTML = FEATURE_LIZARDFOLK_2;
    document.getElementById("SHEET_FEATURES_RACE_03").innerHTML = FEATURE_LIZARDFOLK_3;
    document.getElementById("SHEET_FEATURES_RACE_04").innerHTML = FEATURE_LIZARDFOLK_4;
    document.getElementById("SHEET_FEATURES_RACE_05").innerHTML = FEATURE_LIZARDFOLK_5;
    document.getElementById("SHEET_FEATURES_RACE_06").innerHTML = FEATURE_LIZARDFOLK_6;
  }
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
 name = "Margaret Thatcher";
}

function calcHP(){
 hp = statModifiers[stats[2]-1]*lvl;
 if(clss === "Barbarian"){ // more if clauses will be add later
  hp += 12 + sum(XdY(lvl-1,12));
 } else {
  hp += 8 + sum(XdY(lvl-1,8));
 }
}
function calcAC(){
 let dexMod = statModifiers[stats[1]-1];
 acu = 10 + dexMod;
 if(clss === "Barbarian"){ acu += statModifiers[stats[2]-1]; } // add con mod for barb
 if(clss === "Monk"){ acu += statModifiers[stats[4]-1]; } // add wis mod for monk
 if(race === "Lizardfolk"){ acu = 13 + dexMod; }// lizardfolk natural armor
 aca = 11 + dexMod;
 ac = aca; armorType = "leather armor"; // default to leather
 if(acu > aca){ ac = acu; armorType = "unarmored defense"; }
}

function generate(){
  // set titles
  document.getElementById("SHEET_PROF_TITLE").innerHTML = "Proficiencies"
  document.getElementById("SHEET_FEATURES_TITLE").innerHTML = "Features";
  document.getElementById("SHEET_BG_TITLE").innerHTML = "Characterization";
  document.getElementById("SHEET_FEATURES_CLASS_HEADER").innerHTML = "Class Features";
  document.getElementById("SHEET_FEATURES_RACE_HEADER").innerHTML = "Race Features";
  // determine main fields
  nameGen();
  document.getElementById("SHEET_BASIC_NAME").innerHTML = name;
  lvl = (Math.random()*20 + 1)|0;
  race = raceOptions[(Math.random()*raceOptions.length)|0];
  clss = classOptions[(Math.random()*classOptions.length)|0];
  if(debug){ race = "Lizardfolk"; clss = "Artificer"; } // defaults for debug
  document.getElementById("SHEET_BASIC_RACECLASS").innerHTML = "" + race + " " + clss + " " + lvl;
  document.getElementById("SHEET_PROF_BONUS").innerHTML = "Proficiency Bonus: +" + pBonuses[lvl-1];
  document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 1 reached in code! Race and class determined!";
  rollStats();
  handleClassFeatures();
  handleRaceFeatures();
  document.getElementById("SHEET_BASIC_STATS_STR").innerHTML = "STR: " + stats[0] + " (" + statModifiers[stats[0]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_DEX").innerHTML = "DEX: " + stats[1] + " (" + statModifiers[stats[1]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_CON").innerHTML = "CON: " + stats[2] + " (" + statModifiers[stats[2]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_INT").innerHTML = "INT: " + stats[3] + " (" + statModifiers[stats[3]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_WIS").innerHTML = "WIS: " + stats[4] + " (" + statModifiers[stats[4]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_CHA").innerHTML = "CHA: " + stats[5] + " (" + statModifiers[stats[5]-1]+ ")";
  document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 3 reached in code! Stats displayed properly!";
  calcHP();
  calcAC();
  // set hp, ac text
  document.getElementById("SHEET_BASIC_STATS_HP").innerHTML = "HP: " + hp;
  document.getElementById("SHEET_BASIC_STATS_AC").innerHTML = "AC: " + ac + " (" + armorType + ")";
  document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 4 reached in code! HP/AC displayed properly!";
}
