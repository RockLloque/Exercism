//I tried to use a little of the original list methods a possible.
//I am not sure if .push() or for( ... of ...), which uses iterators should be
//used or not.

'use strict';

export class List {
  constructor(array =[]) {
    this.values =[];
    array.forEach(ele => ele instanceof List
      ? this.values.push(...el.values)
      : this.values.push(ele)
    );
  }

  append(l ) {
    this.values = [...this.values, ...l.values];
    return this;
  }

  concat(l=[] ) {
    let temp = new List();
    l.forEach(ele => ele instanceof List 
      ? temp.values.push(...ele.values)
      : temp.values.push(ele));
    return temp;
  }

  filter(func) {
    let temp =[];
    for(const ele of this.values){
      if(func(ele)){
        temp.push(ele);
      }
    }
    return new List(temp);
  }

  map(func) {
    let temp =[];
    for( const ele of this.values){
      temp.push(func(ele));
    }
    return new List(temp);
  }

  length() {
    return this.values.length;
  }

  foldl(func, acc=0) {
    for(const ele of this.values){
      acc = func(acc, ele);
    }
    return acc;
  }

  foldr(func, acc=0) {
    const l = this.length();
    for(let i =0; i<l; ++i){
      acc = func(acc, this.values[l-i-1]);
    }
    return acc;
  }

  reverse() {
    let temp =[];
    const l = this.length();
    for(let i =0; i<l; ++i){
      temp[i] = this.values[l-i-1];
    }
    return new List(temp);
  }

  [Symbol.iterator](){
    return this.values.values();
  }
}
