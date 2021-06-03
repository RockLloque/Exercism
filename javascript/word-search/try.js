const rotate = s => s.map(ele => ele.split(''))[0]
  .map((_,i) => s.map(row => row[i]))
  .map(row => row.join(''));

const rotate45 = (arr, len) =>{
  let str ='';
  let res =[];
  for(let i=-len; i< len-1; ++i){
    for(let j=0; j<len;  ++j){
      let i_pos = i- j+len;
      if (i_pos >=0 && i_pos <10) {str = str +  arr[i_pos][j];}
      //str = `${str}[${i-j+splitGrid.length},${j}], `;
    }
    res = res.concat([[str]]);
    str = ''
  }
  return res;
};
const grid = [
  'jefblpepre',
  'camdcimgtc',
  'oivokprjsm',
  'pbwasqroua',
  'rixilelhrs',
  'wolcqlirpc',
  'screeaumgr',
  'alxhpburyi',
  'jalaycalmp',
  'clojurermt',
];


let splitGrid = grid.map(w => w.split(''));

[a,b] = [1,0];
console.log(a,b);
