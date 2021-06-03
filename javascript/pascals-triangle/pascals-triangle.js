'use strict';
const Range = n => [...Array(n).keys()];
export class Triangle {
  constructor(rows) {
     this.res_ = Range(rows-1).reduce((arr, i) => 
       arr.concat([Range(i+2)
         .map( ele => (arr[i][ele-1] ||0) + (arr[i][ele] ||0))])
,[[1]]);
  }

  get lastRow() {
    return this.res_[this.res_.length-1];
  }

  get rows() {
    return this.res_;
  }
}
