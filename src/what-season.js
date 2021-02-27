const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (date.hasOwnProperty("getMonth")) {
    throw new Error("Error");
  }
  let s = "";
  let m = Number(date.getMonth());
  switch (m+1){
    case 1:
    case 2:
    case 12:
      s = "winter";
      break;
    case 3:
    case 4:
    case 5:
      s = "spring";
      break;
    case 6:
    case 7:
    case 8:
      s = "summer";
      break;
    case 9:
    case 10:
    case 11:
      s = "fall";
      break;                  
  }
  return s;
}
