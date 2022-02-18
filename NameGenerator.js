const GLOBAL_SYLLABLE_MAX = 3;
let alph = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
let alphSuffixes = new Array(
  new Array("rth","rthu","rtha","rta","rt","stri","stra","tha","th","n","r","l"),
  new Array("rin","or","ran","ear","el"),
  new Array("ura","uru","ur","ir","iru","el","al","uray","urae"),
  new Array("ae","ay","il","el","a",""),
  new Array("lda","ld","st","sta","th","tha","v","va"),
  new Array("or","al","ar","in","ay","ae"),
  new Array("il","al","lin","ol","ul"),
  new Array("il","ir","ur","al","in","am","iem"),
  new Array("sta","sti","st","th","n","m","r","l","sa","na"),
  new Array("em","arl","ay","ae"),
  new Array("arn","ar","ey","el","uru","ir","al","ay"),
  new Array("in","or","is","on","ae","ir","ay"),
  new Array("ir","or","in","ay","ae"),
  new Array("ar","or","ir","el","ae","ay"),
  new Array("s","l","n","ssa","r","th"),
  new Array("er","ir","al","an","ern"),
  new Array("ues","uen","uin","uil","uae","uay"),
  new Array("en","el","il","un","in","ae","ay"),
  new Array("tar","ar","or","il","ir","at","ata","ay","ae"),
  new Array("ir","or","ar","yn","in","il","ae","ay"),
  new Array("thu","th","ne","thay","thae"),
  new Array("al","alk","ir","in","en","or","ay","ae"),
  new Array("in","yn","il","es","is","en"),
  new Array("ava","av","ay","ae"),
  new Array("is","in","id","ir","a","il","or","r"),
  new Array("eth","ath","il","or","un","ae","ay"));

function genName(){
  let out = "";
  let gen = (Math.random()*alph.length)|0;
  out += alph[gen].toUpperCase() + alphSuffixes[gen][(Math.random()*alphSuffixes[gen].length)|0];;
  let furthersyl = (Math.random()*GLOBAL_SYLLABLE_MAX)|0;
  for(let i = 0; i < furthersyl; i++){
    out += alph[gen] + alphSuffixes[gen][(Math.random()*alphSuffixes[gen].length)|0];
  }
  return out;
}
