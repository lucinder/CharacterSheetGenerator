const statModifiers = new Array(-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5);
const raceOptions = new Array("Aarakocra","Aasimar","Bugbear","Centaur","Changeling","Dhampir","Dragonborn","Dwarf","Elf","Fairy","Firbolg","Genasi","Gith","Gnome","Goblin","Goliath","Half-Elf","Half-Orc","Halfling","Harengon","Hexblood","Hobgoblin","Human","Kalashtar","Kenku","Kobold","Leonin","Lizardfolk","Loxodon","Merfolk","Minotaur","Orc","Owlin","Reborn","Satyr","Shifter","Simic Hybrid","Tabaxi","Tiefling","Tortle","Triton","Vedalken","Warforged","Yuan-Ti");
const classOptions = new Array("Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard");

const FEATURE_ARTIFICER_1_0 = "<p><strong><i>Magical Tinkering.</i></strong></p><p>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p><ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul><p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p><p> You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>";


let ClassFeature = class{
  constructor(lvl, innerHtml){
    this.lvl = lvl;
    this.innerHtml = innerHtml;
  }
  get lvl(){ return this.level; }
  set lvl(lvl){ this.lvl = lvl; }
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
