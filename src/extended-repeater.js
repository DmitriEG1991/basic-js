const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);         
  let a, b, c, d, e;
  if(options.hasOwnProperty("repeatTimes")){
    a = Number(options.repeatTimes);
  }else{
    a = 0;
  }
  if(options.hasOwnProperty("separator")){
    b = String(options.separator);
  }else{
    b = "+";
  }
  if(options.hasOwnProperty("addition")){
    c = String(options.addition);
  }else{
    c = "";
  }
  if(options.hasOwnProperty("additionRepeatTimes")){
    d = Number(options.additionRepeatTimes);
  }else{
    d = 0;
  }
  if(options.hasOwnProperty("additionSeparator")){
    e = String(options.additionSeparator);
  }else{
    e = "|";
  }
  let str2 = [];
  str2.push(str);
  str2.push(c);
  for(let i =1; i<d; i++){
    str2.push(e);
    str2.push(c);
  }        
  for(let j=1; j<a; j++){
    str2.push(b);
    str2.push(str);
    str2.push(c);
    for(let i =1; i<d; i++){
      str2.push(e);
      str2.push(c);
    }
  }           
  str2 = str2.join('');      
  return str2;   
}
