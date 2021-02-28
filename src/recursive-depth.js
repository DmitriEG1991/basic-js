const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
    calculateDepth(arr) { 
      let a = 1;
      arr.forEach((elem)=>{
        if (Array.isArray(elem)){
          let b = this.calculateDepth(elem) + 1;
          if (b > a) a = b; 
        }
      });
      return a;
    }
  }; 
