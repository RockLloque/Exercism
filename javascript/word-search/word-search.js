const movements =[
  [0,1],    //horizontal, left to right
  [0,-1],   //horizontal, right to left 
  [1,0],    //top to bottom
  [-1,0],   //bottom to top
  [1,1],    //diagonal top to bottom, left to right
  [-1,-1],  // diagonal top to bottom, right to left
  [-1,1],   // diagonal bottom to top, left to right
  [1,-1],   // diagonal bottom to top, right to left
];

class WordSearch {
  constructor(g =[]) {
    this.grid_ = g.map(l => l.split(''));
  }

  find(words =[]) {
    let results ={};
    words.map(l => l.split('')).forEach(w => this.grid_.forEach((line, i) => line.forEach((c,j) =>
      {if(w[0] === this.grid_[i][j]){
        let ind;
        movements.forEach( m =>{
          ind =0;
          while( ind < w.length 
            //Position is in grid
            &&  (i+m[0]*ind >=0) &&  (i+m[0]*ind < this.grid_.length) 
            &&  (j+m[1]*ind >=0) &&  (j+m[1]*ind < this.grid_[0].length) 
            //Grid-Point matches word at Position
            && w[ind] === this.grid_[i+m[0]*ind][j+m[1]*ind] 
          ){++ind;}
          if(ind === w.length){
            --ind;
            results[w.join('')] = {start : [i+1,j+1], end :[i+1+m[0]*ind, j+1+m[1]*ind]};
          }
        });
      }}
    )));
    return results;
  }
}

export default WordSearch;
