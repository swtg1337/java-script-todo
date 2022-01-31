    const arrList = [];

        arrList[0] = {
            id: "1",
            ready: false,
            text: "Задача 1",
        }

        arrList[1] = {
            id: "2",
            ready: false,
            text: "Задача 2",
        }

        arrList[2] = {
            id: "3",
            ready: true,
            text: "Задача 3",
        }


function filtration() {
    const fil_value = document.getElementById('filter').selectedIndex;
    
    for (let i = 0; i < arrList.length; i++) {
        if (arrList[i].text != "") {
            
            document.getElementById('list').innerHTML += '<p>' + arrList[i].text + '</p>' ;
        } 
    }

}    


var new1 = document.createElement('input');
new1.type = "checkbox";
new1.checked = true;
new1.id = "new"+arrList[2].id;
document.getElementById('list').appendChild(new1);

if (document.getElementsById('new3').checked == true) {
    alert(new1.id);
}