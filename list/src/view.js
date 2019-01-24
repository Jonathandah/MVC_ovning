
export default  {
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

}
