const CONTINUATION = 0x80; // = 128 (decimal) = 10000000 (binary)
const SEVEN_ONES = 0x7f; // = 127 (decimal) = 1111111 (binary)
const SHIFTLENGTH =7;

export const encode = numbers => numbers.reduce((sum , ele) => sum.concat(encodeSingle(ele)),[]);

const encodeSingle = number =>{
  //&SEVEN_ONES (1111111 in binary) filters out the last seven digits of number
  let res =[number &SEVEN_ONES ];
  while(number = number >>> SHIFTLENGTH){
    // | CONTINUATION (10000000 in binary) switches #7 digit to 1
    res.unshift((number &SEVEN_ONES) | CONTINUATION);
  }
  return res;
}


export const decode = vaq => {
  if(vaq[vaq.length -1] & CONTINUATION ){
    throw new Error('Incomplete sequence');
  }

  return vaq.reduceRight((acc, ele ) => {
    // ~ele & CONTINUATION returns true for ending 8-bit, adds array at beginning of acc
     if( ~ele &CONTINUATION){
       acc.unshift([]);
     }
    acc[0].unshift(ele);
  return acc;}, []).map( ele => decodeSingle(ele));
};

const decodeSingle = vaq => vaq.reduce((sum, ele) => 
  // ele&SEVEN_ONES removes the 1 at the #7 digit if it exists
  (sum << SHIFTLENGTH) + (ele&SEVEN_ONES),0) 
  //trick to coerce to unsigned integer
    >>>0;
