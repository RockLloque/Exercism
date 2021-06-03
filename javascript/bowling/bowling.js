export class Bowling {
  constructor(){
    this.points_=[];
  }

  roll(s=0) {
    this.points_.push(s);
  }

  score() {

  }
}
