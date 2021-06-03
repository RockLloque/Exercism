const bottles_on_wall =  n=>{
  switch(n){
    case(0) : return 'No more bottles'; 
    case(1) : return '1 bottle';
    default :  return `${n} bottles`;
  }
};

const first_sentence = n => `${bottles_on_wall(n)} of beer on the wall, ${bottles_on_wall(n).toLowerCase()} of beer.`;

const second_sentence= n => {
  switch(n){
    case(0) : return 'Go to the store and buy some more, 99 bottles of beer on the wall.'; 
    case(1) : return 'Take it down and pass it around, no more bottles of beer on the wall.';
    case(2) : return 'Take one down and pass it around, 1 bottle of beer on the wall.';
    default :  return `Take one down and pass it around, ${n-1} bottles of beer on the wall.`
  }
};


export class BeerSong {
  static verse(n) {
    return `${first_sentence(n)}\n${second_sentence(n)}\n`;
  }

  static sing(begin=99, end=0) {
    let res = '';
    for(let i=end; i<= begin; ++i){
      res = `${BeerSong.verse(i)}\n${res}`;
    }
    return res.slice(0,-1);
  }
}
