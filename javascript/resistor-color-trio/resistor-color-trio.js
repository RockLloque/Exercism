import {colorCode, COLORS} from '../resistor-color/resistor-color.js';
import {value as colorValues} from '../resistor-color-duo/resistor-color-duo.js';

const checkIfColorsAreValid = col => {if(! col.every( c => COLORS.includes(c))){
  throw new Error('invalid color');}};

export class ResistorColorTrio {
  constructor(ColorTrio) {
    checkIfColorsAreValid(ColorTrio);
    this.value_ = colorValues(ColorTrio) * 10**(colorCode(ColorTrio[2]));
  }

  get label() {
     return this.value_ > 1000 ? 
     `Resistor value: ${this.value_/1000} kiloohms`
     :`Resistor value: ${this.value_} ohms`;
  }
}
