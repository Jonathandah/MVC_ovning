(function () {
    'use strict';

    var todo = {
        list: [],
        person: function list(obj){
            this.list.push(obj);
        },
    };

    var render = {
        tabell: function(todo) {
            let thead = document.querySelector("thead");
            let tbody = document.querySelector("tbody");
            let tr = document.createElement("tr");
            
            for (let key in todo[0]) {
                let th = document.createElement('th');
                th.textContent = key;
                tr.appendChild(th);
            }

            thead.appendChild(tr);

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
       render.tabell(todo.list);
    }

    let button = document.querySelector("button");
    button.addEventListener("click", log);

}());
