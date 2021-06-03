//This code should be pretty self-explanatory.
//For an external limit verse() loops over objectsInHouse and actions to create the
//desired line.
//verses() loops over the number of verse() given by begin and end.
export class House {
  static verse(n) {
    //Verse 1 is hardcoded into the method, therefor n needs to be deprecated.
    --n;
    let lyrics = 'This is ';
    while(n--){
      lyrics += `the ${objectsInHouse[n]}\nthat ${actions[n]} `;
    }
    lyrics = `${lyrics}the house that Jack built.`.split('\n');
    return lyrics;
  }

  static verses(begin, end) {
    if(begin >= end){
      throw new Error(`Beginning verse ${begin} is bigger or equal to end verse ${end}`);
    }
    let result =[];
    while(begin <= end){
      result.push(...this.verse(begin++), '');
    }
    return result.slice(0,-1);
  }
}


const objectsInHouse =[
  'malt',
  'rat',
  'cat',
  'dog',
  'cow with the crumpled horn',
  'maiden all forlorn',
  'man all tattered and torn',
  'priest all shaven and shorn',
  'rooster that crowed in the morn',
  'farmer sowing his corn',
  'horse and the hound and the horn',
];

const actions =[
  'lay in',
  'ate',
  'killed',
  'worried',
  'tossed',
  'milked',
  'kissed',
  'married',
  'woke',
  'kept',
  'belonged to',
];
