let size = 15
let board = ""

for(let width = 0; width < size; width +=1){
  for(let height = 0; height < size; height += 1){
    if((width + height) % 2 == 0) board += "#"
    else board += " "
  }
  board += "\n"
}

console.log(board)
