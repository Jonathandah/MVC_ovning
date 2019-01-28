
export default  {
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
        for(let keys in todo){
            let object = todo[keys];
            for(let keys in object){
                if(searchItem === object[keys]){
                    console.log(object);
                }
            }
        }
    }


}
