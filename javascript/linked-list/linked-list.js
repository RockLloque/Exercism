
export class LinkedList {
  constructor(){
    this.size_ =0;
  }
  push(d) {
    const n = new Node(d);
    if(this.size_ ===0){
      this.first_ = this.last_ =n;
    }
    else{
      this.last_.next_ = n;
      n.prev_ = this.last_;
      this.last_ =n;
    }
    ++this.size_;
  }

  pop() {
    const d = this.last_.data_;
    this.last_ = this.last_.prev_;
    if(this.last_) this.last_.next_ = null;
    --this.size_;
    return d;
  }

  shift() {
    const d = this.first_.data_;
    this.first_ = this.first_.next_;
    if(this.first_) {this.first_.prev_ =null;}
    --this.size_;
    return d;
  }

  unshift(d) {
    const n = new Node(d);
    if(this.size_ ===0){
      this.first_ = this.last_ =n;
    }
    else{
      this.first_.prev_= n;
      n.next_ = this.first_;
      this.first_ =n;
    }
    ++this.size_;

  }

  delete(d) {
    let curr = this.first_;
    while(d !== curr.data_ && curr !== this.last_){ curr = curr.next_;}

    if( curr.data_ === d){
      if(curr === this.first_) { this.shift();}
      else if(curr === this.last_) { this.pop();}
      else{
        curr.prev_.next_ = curr.next_;
        curr.next_.prev_ = curr.prev_;
        --this.size_;
      }
    }
  }

  count() {
    return this.size_;
  }
}


class Node{
  constructor(d, n =null, p = null){
    this.data_=d;
    this.next_ = n;
    this.prev_ = p;
  }
};
