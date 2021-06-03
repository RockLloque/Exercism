export const solve = stream => {
  let alphas = stream.split('').reduce((obj, ele) =>{
    if(ele.match(/[A-Z]/) && !obj.hasOwnProperty(ele)){
      obj[ele] =0;
    }
    return obj;}, {});
  let terms = stream.split('+');
  terms = terms.concat(terms.pop().split('==')).map(ele => ele.trim());
  if( terms.length ===2 && terms[0].length === terms[1].length){
    return null;
  }
  terms.slice(0,-1).forEach(ele => {
    console.log(ele, ele.length);
    console.log(terms[terms.length-1] ,terms[terms.length-1].length);
    if(ele.length > terms[terms.length-1].length){
      console.log('In loop');
    return null;
  }});
  return 5;
};
