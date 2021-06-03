'use strict';
export class CustomSet {
  constructor(d=[]) {
    this.data_ = d;
  }

  empty() {
    return this.data_.length ===0;
  }

  contains(i) {
    return this.data_.includes(i);
  }

  add(ele) {
    if(!this.contains(ele)){
      this.data_.push(ele);
    }
    return this;
  }

  subset(cs) {
     return cs.data_.join('').includes(this.data_.join(''));
  }

  disjoint(cs) {
    return this.data_.every( v => !cs.contains(v));
  }

  eql(cs) {
    return this.data_.length === cs.data_.length
    && this.data_.every( v => cs.contains(v))
    && cs.data_.every( v => this.contains(v));
  }

  union(cs) {
    return this.data_.reduce((set, ele) => set.contains(ele) 
      ? set
      : set.add(ele), cs);
  }

  intersection(cs) {
    return new CustomSet([...this.data_.filter( ele => cs.contains(ele))]);
  }

  difference(cs) {
    return new CustomSet([...this.data_.filter( ele => !cs.contains(ele))]);
  }
}
