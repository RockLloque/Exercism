//The Song can be catagorized into 5 parts, some necessary, some optional.
//1. The necessary introduction. 'I know an old lady that ...' followed by a comment by the observer that is anmial-specific.
//2. An optional chain of 'swallow' events 'She swallowed the ... to catch the ...'
//3. The optional spider-case that is always commented either with the beginning 'It wriggled ...' if it is in the introduction or the beginning 'that wriggled' if other animals were swallowed before.
//4. The necessary ending for all animals but horse (see next case) the fly-verse.
//5. The hose case in which no other animals are part of the song.
export class Song {
  verse(n) {
    //Introduction
    let lyrics=`I know an old lady who swallowed a ${animals[--n]}.\n${animalActions[animals[n]]}`;
    //horse-case
    if(animals[n] === 'horse'){ return lyrics;}
    //The optional series of swallow events
    while(n >2){
      lyrics = `${lyrics}She swallowed the ${animals[n]} to catch the ${animals[--n]}.\n`;
    }
    //The special cases spider and fly
    while(n--){
      lyrics +=`She swallowed the ${animals[n+1]} to catch the ${animals[n]}${animals[n] === 'spider' ? animalActions['spiderVerse']: '.\n' +animalActions[animals[n]]}`;
    }
    return lyrics;
  }

  verses(begin, end) {
    if(begin >= end){
      throw new Error(`Beginning verse ${begin} is larger or equal to end verse ${end}!`);
    }
    let lyrics ='';
    while( begin <= end){
      lyrics += `${this.verse(begin++)}\n`;
    }
    return lyrics;
  }
}

const animals =[
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse',
];

const animalActions ={
  fly : `I don't know why she swallowed the fly. Perhaps she'll die.\n`,
  spider : 'It wriggled and jiggled and tickled inside her.\n',
  spiderVerse : ' that wriggled and jiggled and tickled inside her.\n',
  bird : 'How absurd to swallow a bird!\n',
  cat : 'Imagine that, to swallow a cat!\n',
  dog : 'What a hog, to swallow a dog!\n',
  goat : `Just opened her throat and swallowed a goat!\n`,
  cow : `I don't know how she swallowed a cow!\n`,
  horse : `She's dead, of course!\n`,
};
