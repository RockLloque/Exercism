
export class GradeSchool {
  constructor(){
    this.roster_ ={};
  }
  roster() {
    return Object.keys(this.roster_).reduce((res, g) => {
      res[g] = [...this.roster_[g]];
      return res;
    },{});
  }

  add(student, grade) {
    if(!this.roster_[grade]){
      this.roster_[grade] =[]
    }
    this.roster_[grade].push(student);
    this.roster_[grade].sort();
  }

  grade(g) {
    return g in this.roster_ ? [...this.roster_[g]] : [];
  }
}
