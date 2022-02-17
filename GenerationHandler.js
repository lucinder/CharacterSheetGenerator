const FEATURE_ARTIFICER_1_0 = "<p><strong><i>Magical Tinkering.</i></strong></p><p>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p><ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul><p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p><p> You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>";

let ClassFeature = class{
  constructor(lvl, innerHtml){
    this.lvl = lvl;
    this.innerHtml = innerHtml;
  }
  get lvl(){ return this.level; }
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
  rollHitDie(){ return (int)(Math.random()*this.hitDie + 1); }
}
const clerFeatures = new Array(new ClassFeature());
const cleric = DNDClass("Cleric",clerFeatures,8);

function generate(){
 document.getElementById("SHEET_FEATURES_LV1_01").innerHTML = FEATURE_ARTIFICER_1_0;
}
