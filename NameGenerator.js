const GLOBAL_SYLLABLE_MAX = 3;
let alph = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
let alphSuffixes = new Array(
  new Array("rth","rthu","rtha","rta","rt","stri","stra","tha","th","n","r","l","s","z"), // a
  new Array("rin","or","ran","ear","el","ath","or","orn","an","ury","ary"), // b
  new Array("u","ura","uru","ur","ir","iru","el","al","uray","urae","or","ro","ri","as","en","e","a"), // c
  new Array("ae","ay","il","el","a","aph",""), // d
  new Array("lda","ld","st","sta","th","tha","v","va","d"), // e
  new Array("or","al","ar","in","ay","ae"), // f
  new Array("il","al","lin","ol","ul"), // g
  new Array("il","ir","ur","al","in","am","iem","a","an"), // h
  new Array("sta","sti","st","th","n","m","r","l","sa","na","el",""), // i
  new Array("em","arl","ay","ae"), // j
  new Array("arn","ar","ey","el","uru","ir","al","a","as","e","ae"), // k
  new Array("i","o","eo","in","or","is","on","ae","ir","ei","er","ia"), // l
  new Array("ir","or","in","ay","ae","er","el"), // m
  new Array("ar","or","ir","el","ae","ay"), // n
  new Array("s","l","n","ssa","r","th"), // o
  new Array("er","ir","al","an","ern","he","hor","hos","hy","hyl","hi"), // p
  new Array("ues","uen","uin","uil","uae","uay"), // q
  new Array("en","el","il","un","in","ae","ay","iel","ael","is","o"), // r
  new Array("tar","ar","or","il","ir","at","ata","ay","ae"), // s
  new Array("ir","or","ar","yn","in","il","ae","ay","an","ho","hor","han","ha","he"), // t
  new Array("thu","th","ne","thay","thae","r"), // u
  new Array("al","alk","ir","in","en","or","ay","ae"), // v
  new Array("in","yn","il","es","is","en"), // w
  new Array("ava","av","a","ae","or","ar","an"), // x
  new Array("is","in","id","ir","a","il","or","r","ssa"), // y
  new Array("eth","ath","il","or","un","a","o","ag")); // z

function genName(){
  let out = "";
  let gen = (Math.random()*alph.length)|0;
  out += alph[gen].toUpperCase() + alphSuffixes[gen][(Math.random()*alphSuffixes[gen].length)|0];;
  let furthersyl = (Math.random()*GLOBAL_SYLLABLE_MAX)|0;
  for(let i = 0; i < furthersyl; i++){
    gen = (Math.random()*alph.length)|0;
    out += alph[gen] + alphSuffixes[gen][(Math.random()*alphSuffixes[gen].length)|0];
  }
  return out;
}

function genName(sylmax){
  let out = "";
  let gen = (Math.random()*alph.length)|0;
  out += alph[gen].toUpperCase() + alphSuffixes[gen][(Math.random()*alphSuffixes[gen].length)|0];;
  let furthersyl = (Math.random()*sylmax)|0;
  for(let i = 0; i < furthersyl; i++){
    gen = (Math.random()*alph.length)|0;
    out += alph[gen] + alphSuffixes[gen][(Math.random()*alphSuffixes[gen].length)|0];
  }
  return out;
}
