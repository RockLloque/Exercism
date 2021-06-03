class CircularBuffer {
  constructor(size) {
    this.current_node = new Node();
    this.size = size;
    this.first = this.current_node;
    while(--size ){
      //Add next node
      this.current_node.next_ = new Node();
      //Move current node the new Node
      this.current_node = this.current_node.next_;
    }
    this.current_node.next_= this.first;
    this.current_node= this.current_node.next_; 
  }

  write(v) {
    let size = this.size;
    while(this.current_node.value_ !== undefined
      && --size >0){
      console.log('Enter write loop!');
      this.current_node = this.current_node.next_;
    }
    this.current_node.value_ =v;
    console.log(`First val = ${this.current_node.value_}!`);
  }

  loop_through(){
  }

  read() {
    this.printAll();
    if(this.current_node.value_ === undefined){
      throw new BufferEmptyError();
    }
    const v = this.current_node.value_;
    this.current_node.value_ = undefined;
    return v;
  }

  printAll(){
    let size = this.size;
    let n = this.first;
    while(size-- ){
      console.log(`Size =${size}, value = ${n.value_}.`);
      n = n.next_;
    }
  }

  forceWrite() {
    throw new Error("Remove this statement and implement this function");
  }

  clear() {
  }
}

class Node{
  constructor(val = undefined, //value of Node
  prev, //previous Node
  next //next Node
){
    this.value_ = val;
    this.next_ = next;
  }
}


const b = new CircularBuffer(3);
b.write('1');
b.write('2');
b.write('3');

b.printAll();
