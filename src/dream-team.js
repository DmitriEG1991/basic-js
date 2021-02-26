const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array = 0) {
  let name = "";
  if(!Array.isArray(array)){
    return false;
  }else{
    for(let elem of array){
        if(typeof(elem) == "string"){
            let a = elem.trim();
            name += a[0];
        }
    }
    name = name.toUpperCase();
    return name.split('').sort().join('');
  }  
};
