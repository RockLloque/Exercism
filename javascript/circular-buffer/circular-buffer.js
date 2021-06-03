'use strict';

class CircularBuffer {
  constructor(size=1) {
    let current_node = [];
    const first = current_node;
    //size-- creates size+1 nodes.
    //The extra node is needed as a sentinel
    while(size-- ){
      //Add next node
      current_node.next_ = [];
      //Move current node the new Node
      current_node = current_node.next_;
    }
    //close the ring
    current_node.next_ = first;
    //initalize write pointer
    this.write_pointer = current_node;
    //initalize read pointer
    this.read_pointer = current_node;
  }

  write(v) {
    if(this.write_pointer.next_ === this.read_pointer){
      throw new BufferFullError();
    }
    if(v){
      this.write_pointer.value_ =v;
      this.write_pointer = this.write_pointer.next_;
    }
  }

  read() {
    if(this.read_pointer === this.write_pointer){
      throw new BufferEmptyError();
    }
    const v = this.read_pointer.value_;
    this.read_pointer = this.read_pointer.next_;
    return v;
  }

  forceWrite(v) {
    try{ this.write(v);
    }
    catch(err){
      if(err instanceof BufferFullError){
        this.read_pointer = this.read_pointer.next_;
        this.write(v);
      }
      else{
        throw err;
      }
    }
  }

  clear() {
    this.write_pointer = this.read_pointer;
  }
};

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message) {
    super('buffer full: ' + message);
  }
};

export class BufferEmptyError extends Error {
  constructor(message) {
    super('buffer full: ' + message);
  }
};
