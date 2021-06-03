export class Board {
  constructor(board) {
    this.board = board.map(line => line.split(''));
    console.log(`The board is: ${this.board}.`);
    this.winner_ = this.checkWayO([-1,-1],[0,0]) ;
  }
  checkWayO(last, curr){
    if(this.board[curr[0],curr[1]] === 'O'){
      console.log(`Current pos is: [${curr[0]},${curr[1]}].`);
      if( curr[1] === this.board.length){
        console.log(`Found o at: [${curr[0]},${curr[1]}].`);
        return 'O';
      }
      //move to the right
      if(curr[0] < this.board[curr[1]].length
      && curr[0]+1 !== last[0]){
        this.checkWayO(curr, [curr[0]+1, curr[1]]);
      }
      //move to the left
      if(curr[0] < 0
      && curr[0]-1 !== last[0]){
        this.checkWayO(curr, [curr[0]-1, curr[1]]);
      }
      //move up
      if(curr[1] > 0
      && curr[1]-1 !== last[1]){
        this.checkWayO(curr, [curr[0], curr[1]-1]);
      }
      //move down no need to check lower bound, because of 1. if
      if( curr[1]+1 !== last[0]){
        this.checkWayO(curr, [curr[0], curr[1]+1]);
      }
         
    }
  }
  winner() {
    console.log(`Winner is: ${this.winner_}`)
    return this.winner_;
  }
}
