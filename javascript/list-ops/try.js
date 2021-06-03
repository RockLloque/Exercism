'use strict';

class List {
  constructor(array =[]) {
    this.data_ = array;
  }

  append(l =new List()) {
    return new List([... this.data_, ... l.data_]);
  }
  get values(){
    return this.data_;
  }

  concat(l =[]) {
    let temp = new List(this.values);
    l.forEach( ele => {temp = temp.append(ele);
    });
    return temp;
  }

  filter() {
    throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}

let L1 = new List([1,2]), L2 = new List([3,4]), L4 = new List(), L5 = new List([5,6]);
let L3 = L1.concat([L2, L4, L5]);
console.log(L3.values);
