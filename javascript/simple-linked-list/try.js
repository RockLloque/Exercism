
class List {

  constructor(list=[]) {
    this.length_=0;
    this.currentElement_=null;
    list.forEach( ele => this.add(new Element(ele)));
  }

  add(Ele) {
    if(!this.currentElement_ ){
      this.currentElement_ =Ele;
    }
    else{
      Ele.next_ = this.currentElement_;
      this.currentElement_ = Ele;
    }
    ++this.length_;
  }

  get length() {
    return this.length_;
  }

  get head() {
    return this.currentElement_ ?  this.currentElement_ : null;
  }

  toArray() {
    let temp = this.currentElement_;
    let res =[temp.value];
    while(temp.next ){
      console.log(`Current V = ${temp.value}, N = ${temp.next}`);
      temp = temp.next_;
      res.push(temp.value);
    }
    return res;
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

const L = new List([1,2,3,4,5,6]);
const a = L.toArray();
 console.log(a);
