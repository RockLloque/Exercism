
export const recite = (begin, end=begin) => {
  return Range(begin,end).reduce((lyrics, v) => 
    `${lyrics}\n${createVerse(v)}`, '')
      //trimLeft is needed because the first '\n' at the very beginning has to be cut.
      .trimLeft('\n');
};


const createVerse = day =>{
 let lyrics = `On the ${Days[--day]} day of Christmas my true love gave to me: ${Presents[day]}`;
  //Loops over all the presents that are accumulated up to this day.
  while(day--){
    //an extra and is added before 'a Partridge in a Pear Tree'.
    //This is not needed on the first day, but in that case the while-loop is ignored.
    lyrics += `,${day ===0 ? ' and' : ''} ${Presents[day]}`;
  }
  return `${lyrics}.\n`;
};

//creates an array from b(eginning) to en(d)
const Range = (b,e) =>[...Array(e+1).keys()].slice(b);

const Days=[
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
];


const Presents =[
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming'
];
