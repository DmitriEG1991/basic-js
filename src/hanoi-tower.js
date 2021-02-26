const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(a, b){
  let step = 2**a-1;
  let sec = 3600/b*step;
  let obj = {};
  obj.turns = step;
  obj.seconds = Math.floor(sec);
  return obj;
};
