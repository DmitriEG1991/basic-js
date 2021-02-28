const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mass: [],
  getLength(){
    return this.mass.length;
  },
  addLink(value){
    this.mass.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if(typeof(position) != "number" || !Number.isInteger(position) || position > this.mass.length || position < 0){
      this.mass = [];
      throw new Error("Error");
    }
    this.mass.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.mass.reverse();
    return this;
  },
  finishChain() {
    let mass2 = this.mass.slice().join("~~");
    this.mass = [];
    return mass2;
  },
};

module.exports = chainMaker;
