
import {COLORS} from '../resistor-color/resistor-color'


const value = (code) => COLORS.indexOf(code[0])*10 + COLORS.indexOf(code[1]);


export {value};
