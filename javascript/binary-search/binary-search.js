export class BinarySearch {
  constructor(arr) {
    let pos =0;
    while(++pos < arr.length && arr[pos] >= arr[pos-1]);
    this.array_ = pos === arr.length ? arr : undefined;
  }

  get array() {
    return this.array_;
  }

  indexOf(item) {
    let l =0, r = this.array_.length -1, m;
    while(l <=r){
      m = Math.floor((l+r)/2);
      if(this.array_[m] < item) { l = m+1;}
      else if(this.array_[m] > item) {r= m-1;}
      else {return m;}
    }
    return -1;
  }
}
