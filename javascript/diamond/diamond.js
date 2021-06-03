'use strict';
const Range = r => [...Array(r+1).keys()].slice(1);
const emptyLine = r => new Array(r+1).join(' ');
const charAt = r => String.fromCharCode('A'.charCodeAt(0) +r);

export class Diamond {
  makeDiamond(range) {
    const upto = range.charCodeAt(0) - 'A'.charCodeAt(0);
    let diam = Range(upto).reduce((arr, i) => 
    arr.concat([[`${emptyLine(upto-i)}${charAt(i)}${emptyLine(2*i-1)}${charAt(i)}${emptyLine(upto-i)}`]]), [[`${emptyLine(upto)}A${emptyLine(upto)}`]]);
    return diam.concat(diam.slice(0,-1).reverse()).join('\n')  +'\n';
  }
}
