export class List {
  constructor(l=[]) {
    this.list_ = l;
  }

  compare(l) {
    let [s1, s2] = [this.list_.toString(), l.list_.toString()];
    if(s1 === s2) {return 'EQUAL';}
    if(s1.includes(s2)) {return 'SUPERLIST';}
    if(s2.includes(s1)) {return 'SUBLIST';}
    return 'UNEQUAL';
  }
}
