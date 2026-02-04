const fs =require("fs");
const path =require("path");

const TODO_FILE = path.join(__dirname,"toDo.json");

console.log(TODO_FILE);


function readTodos() {
  const data = fs.readFileSync(TODO_FILE, "utf-8");
  return JSON.parse(data);
}


function writetoDo(toDo) {
  fs.writeFileSync(TODO_FILE,JSON.stringify(toDo));
}

writetoDo({
    task : "hii",
})





