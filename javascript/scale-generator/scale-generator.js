const SHARP = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const FLAT =['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const USE_FLATS = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
const STEPS ={m :1, M :2, A :3};

export class Scale {
  constructor(tonic) {
    this.tonic = tonic[0].toUpperCase() + tonic.slice(1);
    this.pitches = USE_FLATS.includes(tonic) ? FLAT : SHARP;
  }

  chromatic() {
    let n = this.pitches.indexOf(this.tonic);
    return this.pitches.slice(n).concat(this.pitches.slice(0,n));
  }

  interval(intervals) {
    let i=0;
    let scale = this.chromatic();
   return intervals.split('').reduce((res, ele) => { res.push(scale[i]);
     i += STEPS[ele];
     return res;}, []);
  }
}
