'use strict';

class SimpleLinkedList {

  constructor(list=[]) {
    this.length_=0;
    this.head_=null;
    list.forEach( ele => this.add(new Element(ele)));
  }

  add(Ele) {
    if (this.head_){
      Ele.next_ = this.head;
    }
    this.head_ = Ele;
    ++this.length_;
  }

  get length() {
    return this.length_;
  }

  get head() {
    return this.head_;
  }

  toArray() {
    return [...this];
  }

  reverse() {
    return new SimpleLinkedList(this.toArray());
  }

  *[Symbol.iterator]() {
    let curr = this.head_;
    while (curr){
      yield curr.value;
      curr = curr.next;
    }
  }
}

class Element {
  constructor(v=0, n= null){
    this.value_ =v;
    this.next_ = n;
  }

  get value(){
    return this.value_;
  }

  get next(){
    return this.next_;
  }
}

export{SimpleLinkedList as List, Element};
