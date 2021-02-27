const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity == "string"){
    let a = Number(sampleActivity);
    if(a <= MODERN_ACTIVITY && a > 0) {
      return Math.ceil(Math.log(MODERN_ACTIVITY/a) /(Math.log(2)/HALF_LIFE_PERIOD));
    }else{
      return false;
    }
  }else{
    return false;
  } 
}
