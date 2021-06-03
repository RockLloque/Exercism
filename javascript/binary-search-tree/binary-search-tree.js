
export class BinarySearchTree {
  constructor(d,l=null, r =null) {
    this.data = d;
    this.left = l;
    this.right =r;
  }


  insert(d) {
    const direction = d <= this.data ? 'left' : 'right';
    !this[direction]? this[direction] = new BinarySearchTree(d)
                    : this[direction].insert(d);
  }

  each(cb){
    if(this.left){this.left.each(cb);}
    cb(this.data);
    if(this.right){this.right.each(cb);}
  }
}
