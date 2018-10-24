class Group {
  constructor(){
    this.set = [];
  }

  add(value){
    if (this.set.indexOf(value) == -1) this.set.push(value);
  }

  delete(value){
    let index =  this.set.indexOf(value);
    if (index != -1) this.set.splice(index, 1);
  }

  has(value){
    return this.set.indexOf(value) != -1;
  }

  static from(iterable){
    let group = new Group();
    for(let item of iterable){
      group.add(item);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group.has(10)); // true
group.delete(10);
console.log(group.has(10));
// → false
