
export class Triplet {
  constructor(s) {
    this.sides_ = Object.values(arguments);
  }

  sum() {
    return this.sides_.reduce((sum, ele) => sum+ ele, 0);
  }

  product() {
    return this.sides_.reduce((sum, ele) => sum* ele, 1);
  }

  isPythagorean() {
    return this.sides_[0]**2 +this.sides_[1]**2 ===this.sides_[2]**2 ;
  }

  static where(options) {
    let min = options.minFactor || 1;
    let max = options.maxFactor ;
    let sum = options.sum;
    let result =[];
    for(let c= min; c <= max; ++c){
      for(let b= min; b < c; ++b){
        let a = Math.sqrt(c**2 - b**2);
        if(Number.isInteger(a) && (a <b) && (a >= min)){
          let tempP = new Triplet(a,b,c);
          if((tempP.sum() === sum || !sum)){
            result.push(tempP);
          }
        }
      }
    }
    return result;
  }
}
