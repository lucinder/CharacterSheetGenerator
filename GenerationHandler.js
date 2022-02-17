const statModifiers = new Array(-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5);
const raceOptions = new Array("Aarakocra","Aasimar","Bugbear","Centaur","Changeling","Dhampir","Dragonborn","Dwarf","Elf","Fairy","Firbolg","Genasi","Gith","Gnome","Goblin","Goliath","Half-Elf","Half-Orc","Halfling","Harengon","Hexblood","Hobgoblin","Human","Kalashtar","Kenku","Kobold","Leonin","Lizardfolk","Loxodon","Merfolk","Minotaur","Orc","Owlin","Reborn","Satyr","Shifter","Simic Hybrid","Tabaxi","Tiefling","Tortle","Triton","Vedalken","Warforged","Yuan-Ti");
const classOptions = new Array("Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard");

// artificer features
const FEATURE_ARTIFICER_1_0 = "<p><strong><i>Magical Tinkering.</i></strong></p><p>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p><ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul><p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p><p> You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>";
const FEATURE_ARTIFICER_2_0 = "<p><strong><i>Infuse Item.</strong></i></p><p>At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.</p><ul><li><strong>Infusions Known:</strong>When you gain this feature, pick four artificer infusions to learn. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.</li><li><strong>Infusing an Item:</strong>Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the <i>Dungeon Master's Guide</i>).Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion.You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies.If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.</li></ul>";
const FEATURE_ARTIFICER_3_0 = "<p><strong><i>Tools of the Trade.</i></strong></p><p>When you adopt this specialization at 3rd level, you gain proficiency with heavy armor. You also gain proficiency with smith's tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>";
const FEATURE_ARTIFICER_3_1 = "<p><strong><i>Armorer Spells.</i></strong></p><p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.</p><h6><b>Armorer Spells:</b></h6><table class=\"w3-flat-clouds w3-margin\"><tr class=\"w3-flat-silver\"> <!-- Header Row --><th style=\"padding-right:12px;\">Artificer Level</th><th>Armorer Spells</th></tr><tr> <!-- 1st level spells --><td>3rd</td><td>Magic Missile, Thunderwave</td></tr><tr> <!-- 2nd level spells --><td>5th</td><td>Mirror Image, Shatter</td></tr><tr> <!-- 3rd level spells --><td>9th</td><td>Hypnotic Pattern, Lightning Bolt</td></tr><tr> <!-- 4th level spells --><td>13th</td><td>Fire Shield, Greater Invisibility</td></tr><tr> <!-- 5th level spells --><td>17th</td><td>Passwall, Wall of Force</td></tr></table>";
const FEATURE_ARTIFICER_3_2 = "<p><strong><i>Arcane Armor.</i></strong></p><p>Beginning at 3rd level, your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.</p><p>You gain the following benefits while wearing this armor:</p><ul><li>If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.</li><li>You can use the arcane armor as a spellcasting focus for your artificer spells.</li><li>The armor attaches to you and can’t be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a body part it is replacing.</li><li>You can doff or don the armor as an action.</li></ul><p>The armor continues to be Arcane Armor until you don another suit of armor or you die.</p>";
const FEATURE_ARTIFICER_3_3 = "<p><strong><i>Armor Model.</i></strong></p><p>Beginning at 3rd level, you can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.</p><p>Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.</p><p>You can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.</p><p><b>Guardian.</b> You design your armor to be in the front line of conflict. It has the following features:<p><ul><li><b>Thunder Gauntlets.</b> Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.</li><li><b>Defensive Field.</b> As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</li></ul><p><b>Infiltrator.</b> You customize your armor for subtle undertakings. It has the following features:<ul><li><b>Lightning Launcher.</b> A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.</li><li><b>Powered Steps.</b> Your walking speed increases by 5 feet.</li><li><b>Dampening Field.</b> You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.</li></ul>";
const FEATURE_ARTIFICER_3_4 = "<p><strong><i>The Right Tool for the Job.</i></strong></p><p>At 3rd level, you've learned how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>";

let ClassFeature = class{
  constructor(lvl, innerHtml){
    this.lvl = lvl;
    this.innerHtml = innerHtml;
  }
  get lvl(){ return this.level; }
  set lvl(newlvl){ this.lvl = newlvl; }
  get innerHtml(){ return this.innerHtml; }
}

let DNDClass = class{
  constructor(name, features, hitDie){
    this.name = name;
    this.features = features;
    this.hitDie = hitDie;
  }
  get name(){ return this.name; }
  *getFeatures(){ 
    for(const feature of this.features){
      yield feature;
    }
  }
  get hitDie(){ return this.hitDie; }
  rollHitDie(){ return (Math.random()*this.hitDie + 1)|0; }
}
const clerFeatures = new Array(new ClassFeature());
const cleric = DNDClass("Cleric",clerFeatures,8);

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

function generate(){
  let level = (Math.random()*20 + 1)|0;
  let race = raceOptions[(Math.random()*raceOptions.length)|0];
  document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 1 reached in code!";
  let clss = classOptions[(Math.random()*classOptions.length)|0];
  document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 2 reached in code!";
  document.getElementById("SHEET_BASIC_RACECLASS").innerHTML = "" + race + " " + clss + " " + level;
  document.getElementById("SHEET_FEATURES_LV1_01").innerHTML = FEATURE_ARTIFICER_1_0;
  document.getElementById("SHEET_FEATURES_LV2_01").innerHTML = FEATURE_ARTIFICER_2_0;
  document.getElementById("SHEET_FEATURES_LV3_01").innerHTML = FEATURE_ARTIFICER_3_0;
  document.getElementById("SHEET_FEATURES_LV3_02").innerHTML = FEATURE_ARTIFICER_3_1;
  document.getElementById("SHEET_FEATURES_LV3_03").innerHTML = FEATURE_ARTIFICER_3_2;
  document.getElementById("SHEET_FEATURES_LV3_04").innerHTML = FEATURE_ARTIFICER_3_3;
  document.getElementById("SHEET_FEATURES_LV3_05").innerHTML = FEATURE_ARTIFICER_3_4;
  let stats = new Array();
  stats[0] = sum(XdYkhZ(4,6,3));
  stats[1] = sum(XdYkhZ(4,6,3));
  stats[2] = sum(XdYkhZ(4,6,3));
  stats[3] = sum(XdYkhZ(4,6,3));
  stats[4] = sum(XdYkhZ(4,6,3));
  stats[5] = sum(XdYkhZ(4,6,3));
  document.getElementById("SHEET_BASIC_STATS_STR").innerHTML = "STR: " + stats[0] + " (" + statModifiers[stats[0]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_DEX").innerHTML = "DEX: " + stats[1] + " (" + statModifiers[stats[1]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_CON").innerHTML = "CON: " + stats[2] + " (" + statModifiers[stats[2]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_INT").innerHTML = "INT: " + stats[3] + " (" + statModifiers[stats[3]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_WIS").innerHTML = "WIS: " + stats[4] + " (" + statModifiers[stats[4]-1]+ ")";
  document.getElementById("SHEET_BASIC_STATS_CHA").innerHTML = "CHA: " + stats[5] + " (" + statModifiers[stats[5]-1]+ ")";
  document.getElementById("DEBUG_TEXT").innerHTML = "Checkpoint 3 reached in code!";
}
