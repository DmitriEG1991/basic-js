const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }
  encrypt(n, k) {
    let n1 = n.toUpperCase();
    let k1 = k.toUpperCase();
    let n2 = n1.split("");
    let k2 = k1.split("");
    let mass = [];
    for(let i = 0, k = 0; i < n2.length; i++){
      let a1 = n2[i].charCodeAt();
      if(a1 > 64 && a1 < 91){
        if(!k2[k]){
          k = 0;
        }
        let a2 = k2[k].charCodeAt();
        let a3 = (a1-65) + (a2-65) + 65;
        k++;
        if(a3>90){
          a3 = a3-26;
        }
        let a4 = String.fromCharCode(a3);
        mass.push(a4);
      }else{
        mass.push(n2[i]);
      }  
    }
    let str = mass.join("");
    if (this.value == true || typeof this.value == "undefined") {
      return str;
    }else if (this.value == false) {
      return str.split("").reverse().join("");
    }
  }
  decrypt(n, k) {
    let n1 = n.toUpperCase();
    let k1 = k.toUpperCase();
    let n2 = n1.split("");
    let k2 = k1.split("");
    let mass = [];  
    for(let i = 0, k = 0; i < n2.length; i++){
      let a1 = n2[i].charCodeAt();
      if(a1 > 64 && a1 < 91){
        if(!k2[k]){
          k = 0;
        }
        let a2 = k2[k].charCodeAt();
        let a3 = (a1-a2) + 65; 
        k++;
        if(a3<65){
          a3 = a3+26;
        }
        let a4 = String.fromCharCode(a3);
        mass.push(a4);
      }else{
        mass.push(n2[i]);
      }  
    }
    let str = mass.join("");
    if (this.value == true || typeof this.value == "undefined") {
      return str;
    }else if (this.value == false) {
      return str.split("").reverse().join("");
    } 
  }
}

module.exports = VigenereCipheringMachine;
