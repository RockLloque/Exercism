////let pascs =[[1]];
////
////let rows =5;
////let counter =1;
////while(counter < rows){
////  let cur=[];
////  for(let i=0; i<=counter; ++i){
////    cur[i]= (pascs[counter-1][i-1] || 0) + (pascs[counter-1][i] ||0);
////  }
////  pascs.push(cur);
////  ++counter;
////}

let rows=1;

////let res = [...Array(rows).keys()].reduce((arr, i) =>  {let cur =[];
////  for(let j=0; j<= i+1; ++j){
////    cur[j] = (arr[i][j-1] || 0) + (arr[i][j] ||0);
////  }
////  return arr.concat([cur]);
////},[[1]])
////
let res = [...Array(rows-1).keys()].reduce((arr, i) =>   arr.concat([[...Array(i+2).keys()].map( ele => (arr[i][ele-1] ||0) + (arr[i][ele] ||0))])
,[[1]])
console.log(res);
