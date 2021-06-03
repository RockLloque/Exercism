
let o ={
  1 :['anna', 'hans'],
  2 :['jonas', 'bella'],
  3 :['timo', 'sven'],
};

let r =Object.keys(o).reduce((res, g) => {
  console.log(g);
  console.log(o[g]);
  res[g] = o[g];
  return res;
}, {});

console.log(r);
