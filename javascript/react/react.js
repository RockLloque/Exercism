'use strict';
export class InputCell{
  constructor(val){
    this.val = val;
    this.commands =[];
  }
  setValue(v){
    this.val = v;
  }
  get value(){
    return this.val;
  }
};

export class ComputeCell{
  constructor(inputCells, fn){
    this.val = fn([].concat(inputCells));
  }

  get value() {
    return this.val;
  }
}
