Array.prototype.operate = function(op){
  switch(op){
    case "+" : {if( this.length < 2){
      throw new Error('Stack empty');}
      return [this[0] + this[1]];};

    case "-" : {if( this.length < 2){
      throw new Error('Stack empty');}
      return [this[0] - this[1]];};

    case "*" : {if( this.length < 2){
      throw new Error('Stack empty');}
      return [this[0] * this[1]];};

    case "/" : {if( this.length < 2){
      throw new Error('Stack empty');}
      if(this[1] ===0 ){throw new Error('Division by zero');}
      return [Math.floor([this[0] / this[1]])]};

    case "dup" : {
      if(this.length === 0) {throw new Error('Stack empty');}
      return this.concat(this[this.length-1]);
    };

    case "drop" : {
      if(this.length === 0) {throw new Error('Stack empty');}
      return this.slice(0,-1);
    };

    case "swap" : { if( this.length < 2){
      throw new Error('Stack empty');}
      [this[this.length-2], this[this.length-1]] = [this[this.length-1], this[this.length-2]] ;
      return this;
    };

    case "over" : { if( this.length < 2){
      throw new Error('Stack empty');}
      return this.concat(this[this.length-2]);
    };
    default : throw new Error('Unknown command');
  }
};

export class Forth {

  constructor() {
    this.stack_ =[];
    this.dict_={};
  }

  evaluate(stream) {
    stream = stream.toLowerCase();
    if(stream.startsWith(':')){
      if(/^:( -?\d)+ ;$/.test(stream)){
        throw new Error('Invalid definition');}
      const [, name, definition] = stream.match(/^: ([^\s]+) (.+) ;$/);
      this.dict_[name] = definition;
    }
    else{
    for(const [k,v] of Object.entries(this.dict_)){
      //like replace but without regex metacharacers. + is interpreted as it is supposed to
      stream = stream.split(k).join(v);
    }
    stream.split(' ').forEach( ele =>{  isNaN(parseInt(ele)) ? this.stack_= this.stack_.operate(ele) :  this.stack_.push(Number(ele)) ;});
  }}

  get stack() {
    return this.stack_;
  }

}
