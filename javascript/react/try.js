'use strict';
class InputCell{
  constructor(val){
    this.val = val;
    this.commands=[];
  }
  setValue(v){
    this.val = v;
  }
  add_commands(fn){
    this.commands = this.commands.push(fn);
    console.log(this.commands);
  }
  get value(){
    return this.val;
  }
};

class ComputeCell{
  constructor(inputCells, fn){
    this.val = InputCell.val;
    this.commands =inputCells.commands;
  }

  get value() {
    return this.val;
  }
}



////const fn = inCells => {console.log(inCells[0].value);
////  return inCells[0].value+1;
////};

let c = new InputCell(5);
c.add_commands(['test', 'this']);
let cell = new ComputeCell(InputCell);

console.log(cell.commands);
