Array.prototype.operate = function(op){
    console.log(`Entering switch for ${op}`);
    switch(op){
    case "+" : return [this[0] + this[1]];
    case "-" : return [this[0] - this[1]];
    case "*" : return [this[0] * this[1]];
    case "/" : {if(this[1] ===0 ){throw new Error('Division by zero');}
      return [Math.floor([this[0] / this[1]])]};
    default : return this;
    }
};

let stream = ': 1 2 ;';

if(/^:( -?\d)+ ;$/.test(stream)){
  console.log('Test worked');
}
