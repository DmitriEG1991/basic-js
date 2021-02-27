const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("Error");
  }else{

    let mass = arr.slice();
    for(let i = 0; i < mass.length; i++){
        if(mass[i] == "--discard-next" && mass[i+1] != null){
            mass[i] = mass[i+1] = "del";
        }else if(mass[i] == "--discard-prev" && mass[i-1] != null){
            mass[i] = mass[i-1] = "del";
        }else if(mass[i] == "--double-next" && mass[i+1] != null){
            mass[i] = mass[i+1];
        }else if(mass[i] == "--double-prev" && mass[i-1] != null){
            mass[i] = mass[i-1];
        }
    }
    let itog = [];
    for(i = 0; i<mass.length; i++){
        if(mass[i] != "del" && mass[i] != "--discard-next" && mass[i] != "--discard-prev" && mass[i] != "--double-next" && mass[i] != "--double-prev"){
            itog.push(mass[i]);
        }
    } 
    return itog;  
  }
} 
