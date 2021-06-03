export class TwoBucket {
  constructor(volBuckOne =0, volBuckTwo =0, volGoal =0, starterBuck = 'one') {
    this.buckets = [new Bucket(volBuckOne, 'one'), new Bucket(volBuckTwo, 'two')];
    this.volGoal = volGoal;
    //the current Volumes are stored in the array this.currentVolumes, 
    //with [0] representing bucket one and [1] bucket two
    this.starterBuck = starterBuck === 'one' ? 0 :1;
    //if this.starterBuck === 0 then 1-0 =1
    //if this.starterBuck === 1 then 1-1 =0
    this.otherBuck = 1-this.starterBuck;
    //the current volumes in both buckets
    this.moves_ =0;

    while(this.buckets[this.starterBuck].current !== this.volGoal){
      if( this.buckets[this.starterBuck].isEmpty){
        this.buckets[this.starterBuck].fill();
        this.moves_++;
      }
      if(this.buckets[this.otherBuck].isFull){
        this.buckets[this.otherBuck].empty();
        this.moves_++;
      }

      this.buckets[this.starterBuck].currentVolume = this.buckets[this.otherBuck].fillAndReturnRest(this.buckets[this.starterBuck].current);
      this.moves_++;
    }
  }

  moves() {
    return this.moves_;
  }

  get goalBucket() {
    return this.buckets[this.starterBuck].name;
  }

  get otherBucket() {
    return this.buckets[this.otherBuck].current;
  }
}


class Bucket{
  constructor(vol =0, name = 'one'){
    this.volBucket = vol;
    this.currentVolume =0;
    this.name_ = name;
  }
  fillAndReturnRest(vol =0){
    if(this.capacity > vol){
      this.currentVolume += vol;
      return 0;
    }
    else{
      vol -= this.capacity;
      this.currentVolume = this.volBucket;
      return vol;
    }
  }
  fill(){
    this.currentVolume = this.volBucket;
  }
  empty(){
    this.currentVolume =0;
  }

  get isFull(){
    return this.volBucket === this.currentVolume;
  }
  get isEmpty(){
    return this.currentVolume ===0;
  }
  get volume(){
    return this.volBucket;
  }

  get current(){
    return this.currentVolume;
  }

  get capacity(){
    return this.volBucket - this.currentVolume;
  }
  get name(){
    return this.name_;
  }
}
