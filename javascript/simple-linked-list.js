class SimpleLinkedList {

  constructor() {
    this.length_=0;
    this.currentElement_=null;
  }

  add(nextValue) {
    if(this.currentElement_ === null){
      this.currentElement_ =nextValue;
    }
    else{
      let tempEle = this.currentElement_;
      while(tempEle.next != null){
        tempEle = tempEle.next;
      }
      tempEle.next_ = nextValue;
    }
    ++this.length_;
  }

  get length() {
    return this.length_;
  }

  get head() {
    throw new Error("Remove this statement and implement this function");
  }

  toArray() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
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
