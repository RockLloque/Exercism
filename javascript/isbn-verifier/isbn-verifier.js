export const isValid = stream => {
  stream= stream.replace(/-/g,'');
  if(!/^\d{9}(\d|X)$/.test(stream)){
    return false;
  }
  return stream.split('').reduce((sum, ele, i) => 
    sum += ele === 'X' ? 10*(10-i) : Number(ele)*(10-i)
     , 0) % 11 ===0; 
};
