import todo from "./model.js"
import render from "./view.js"


function log(){
    
    let name = document.querySelector("#name").value
    let familyname = document.querySelector("#familyname").value
    let age = document.querySelector("#age").value

    let object = {
        name: name,
        familyname: familyname,
        age: age,
    };
    
   todo.person(object);
   render.tabell(todo.list);
}

let button = document.querySelector("button");
button.addEventListener("click", log);
