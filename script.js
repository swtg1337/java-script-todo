    const arrList = [];

        arrList[0] = {
            id: "1",
            ready: true,
            text: "Задача 1",
        }

        arrList[1] = {
            id: "2",
            ready: true,
            text: "Задача 2",
        }

        arrList[2] = {
            id: "3",
            ready: true,
            text: "Задача 3",
        }


function filtration() {
    document.getElementById('list').innerHTML = "";
    const fil_value = document.getElementById('filter').selectedIndex;
    
    if (fil_value == 0) {           //вывод всего (условие если 0)
        for (let i = 0; i < arrList.length; i++) {
            if (arrList[i].text != "") {
                 
                document.getElementById('list').innerHTML += '<p>' + arrList[i].text + '</p>' ;
                checkB(arrList[i].ready);
            } 
        }
    }

    

}    

function checkB(stat){
    const new1 = document.createElement('input');
    new1.type = "checkbox";
    if (stat == true){
        new1.checked = true;
    } else {
        new1.checked = false;    
    }
    document.getElementById('list').appendChild(new1);
}

filtration();

/*var new1 = document.createElement('input');
new1.type = "checkbox";
new1.checked = true;
document.getElementById('list').appendChild(new1);*/

