const checkboxData = [{
    id: "1",
    ready: true,
    text: "Задача 1",
  }, {
    id: "2",
    ready: false,
    text: "Задача 2. Пробую написать большой текст в задаче, чтобы он перенесся за пределы этой зоны. В данный момент хочу добавить больше расстояние между текста. Работает.",
  }, {
    id: "3",
    ready: false,
    text: "Задача 3. Пробую написать много текста, чтобы бэкграунд контента увеличивался в зависимости от количества текста в заметках. Работает",
  }, {
    id: "4",
    ready: true,
    text: "Задача 4. Пробую изменить межстрочный интервал между задачами, но при этом оставить его в пределах одной задачи таким же маленьким. Работает",
  }];

  // npm install -g json-server
  // json-server --watch info.json

const select = document.getElementById('filter')
const list = document.getElementById('list')


function clearAll() {
  list.innerHTML = " "
}

function create() {
  const filter = select.value
  const filtered = filtration(checkboxData, filter)
  clearAll()
  list.append(createInputsList(filtered))
}

select.addEventListener('change', create)

function filtration(arr, filter) {
  switch (filter) {
    case "all_list": 
      return arr;

    case "ready_list":
      return arr.filter(function(ready) {
        return ready.ready === true;
      });
      
    case "not_ready_list":
      return arr.filter(function(ready) {
        return ready.ready === false;
      });
      
    default: 
      return arr;
  }
}

const createInputRow = ({
  id,
  text,
  ready
}) => {
  const wrapper = document.createElement('div')
  wrapper.append(createCheckboxEl(id, ready), createLabelEl(id, text))

  return wrapper
}

const createLabelEl = (id, text) => {
  const label = document.createElement('label')
  label.htmlFor = id
  label.innerText = text
  label.className = "label1"
  
  return label
}

function fn(event) {
  let id = event.target.id - 1
  checkboxData[id].ready = !checkboxData[id].ready

  create();

  return
 }

const createCheckboxEl = (id, ready) => {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = id
  checkbox.checked = ready
  checkbox.className = "check1"

  checkbox.addEventListener('change', fn)

  return checkbox
}

const createInputsList = (inputsData) => {
    const wrapper = document.createElement('div')
    for (const item of inputsData) {
      wrapper.append(createInputRow(item))
    }
    return wrapper
  }

list.append(createInputsList(checkboxData))