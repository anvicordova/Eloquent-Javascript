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

class GroupIterator{
  constructor(group){
    this.x = 0;
    this.group = group;
  }

  next(){
    if (this.x == this.group.set.length) return { done: true}

    let value = { value: this.group.set[this.x], done: false };
    this.x++;
    return value;
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
