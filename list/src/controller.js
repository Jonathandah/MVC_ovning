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
   render.header(todo.list);
   render.tabell(todo.list);
}

function search (){
    console.log(todo.list);
    let searchItem = document.querySelector("#searchItem").value;
    render.tableSearch(searchItem, todo.list);
}


let searchbutton = document.querySelector("#sök");
searchbutton.addEventListener("click", search);

let button = document.querySelector("button");
button.addEventListener("click", log);
