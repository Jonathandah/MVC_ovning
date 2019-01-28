(function () {
    'use strict';

    var todo = {
        list: [],
        person: function list(obj){
            this.list.push(obj);
        },
    };

    var render = {
        header: function(todo){
            let thead = document.querySelector("thead");
            let tr = document.createElement("tr");

            thead.innerHTML = "";
            for (let key in todo[0]) {
                let th = document.createElement('th');
                th.textContent = key;
                tr.appendChild(th);
            }

            thead.appendChild(tr);
        },
        tabell: function(todo) {
            let tbody = document.querySelector("tbody");
            tbody.innerHTML ="";
            for (let value in todo) {
                let object = todo[value];
                let row = document.createElement('tr');

                for ( let key in object) {
                    let td = document.createElement('td');
                    td.textContent = object[key];
                    row.appendChild(td);
                    
                    tbody.appendChild(row);
                }      
             }
        },

        tableSearch: function(searchItem, todo){
            let tbody = document.querySelector("tbody");
            tbody.innerHTML ="";
            for(let value in todo){
                let object = todo[value];
                let row = document.createElement('tr');
                for(let keys in object){
                    if(searchItem === object[keys]){
                        for(let keys in object){
                            let td = document.createElement('td');
                            td.textContent = object[keys];
                            row.appendChild(td);
                            tbody.appendChild(row);
                        }
                    }
                }
            }
        }


    };

    function log(){
        
        let name = document.querySelector("#name").value;
        let familyname = document.querySelector("#familyname").value;
        let age = document.querySelector("#age").value;

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

}());
