let s ='I + BB == ILL';

let t = s.split('+');
t =t.concat(t.pop().split('==')).map(ele => ele.trim());
console.log(t.slice(0,-1));
