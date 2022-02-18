const GLOBAL_SYLLABLE_MAX = 3;
let alph = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
let alphSuffixes = new Array(
  new Array("rth","rthu","rtha","rta","rt","stri","stra","tha","th","n","r","l","s","z","te"), // a
  new Array("rin","or","ran","ear","el","ath","orn","an","ury","ary"), // b
  new Array("u","ura","uru","ur","ir","iru","el","al","or","ro","ri","as","en","e","a"), // c
  new Array("ae","ay","il","el","a","aph",""), // d
  new Array("lda","ld","st","sta","th","tha","v","va","d"), // e
  new Array("or","al","ar","in","ay","ae"), // f
  new Array("il","al","lin","ol","ul"), // g
  new Array("il","ir","ur","al","in","am","iem","a","an"), // h
  new Array("sta","sti","st","th","n","m","r","l","sa","na","el","e","a","o",""), // i
  new Array("em","arl","ay","ae"), // j
  new Array("arn","ar","ey","el","uru","ir","al","a","as","e","ae"), // k
  new Array("i","o","eo","in","or","is","on","ae","ir","ei","er","ia"), // l
  new Array("ir","or","in","ay","er","el","o","ol","a","ar"), // m
  new Array("ar","or","ir","el","es","is","at","er","o","a","e","i","iel"), // n
  new Array("s","l","n","ssa","r","th"), // o
  new Array("er","ir","al","an","ern","he","hor","hos","hy","hyl","hi","or"), // p
  new Array("ues","uen","uin","uil","uay","uor"), // q
  new Array("en","el","il","un","in","ae","ay","iel","ael","is","o","as","es"), // r
  new Array("tar","ar","or","il","ir","at","ata","ay","ae","o","a","el","an","en"), // s
  new Array("ir","or","ar","yn","in","il","ae","ay","an","ho","hor","han","ha","he","o"), // t
  new Array("thu","th","ne","thay","thae","r","ra","ri","re"), // u
  new Array("al","alk","ir","in","en","or","ay","ae"), // v
  new Array("in","yn","il","es","is","en"), // w
  new Array("o","a","es","or","ar","an","er","is"), // x
  new Array("is","in","id","ir","a","il","or","r","ssa"), // y
  new Array("eth","ath","il","or","un","a","o","ag","ar")); // z

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
