const checkboxData = [{
    id: "1",
    ready: true,
    text: "Задача 1",
  }, {
    id: "2",
    ready: false,
    text: "Задача 2",
  }, {
    id: "3",
    ready: false,
    text: "Задача 3",
  }, {
    id: "4",
    ready: true,
    text: "Задача 4",
  }];

const select = document.getElementById('filter');
const list = document.getElementById('list');

function ClearAll() {
  list.innerHTML = " ";
}

select.addEventListener('change', function(){
  const filter = select.value;
  const filtered = filtration(checkboxData, filter);
  //функция вывода массива после фильтрации. фильтрация должна вернуть массив для вывода
  ClearAll();
  //выовод массива с созданием инпутов
  list.append(createInputsList(filtered))
});

//вернуться и проверить ретёрн
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
  
};




const createInputRow = ({
  id,
  text,
  ready
}) => {
  const wrapper = document.createElement('div');

  wrapper.append(createCheckboxEl(id, ready), createLabelEl(id, text))

  return wrapper;
}

const createLabelEl = (id, text) => {
  const label = document.createElement('label');
  label.htmlFor = id;
  label.innerText = text;

  return label
}

const createCheckboxEl = (id, ready) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = id;
  checkbox.checked = ready;

  return checkbox
}

const createInputsList = (inputsData) => {
  const wrapper = document.createElement('div');
  for (const item of inputsData) {
    wrapper.append(createInputRow(item))
  }
  return wrapper
}

list.append(createInputsList(checkboxData));

/*
var new1 = document.createElement('input');
new1.type = "checkbox";
new1.checked = true;
document.getElementById('list').appendChild(new1);

// очишаем элемент, в который будем рендерить контейнер с инпутами.
const clearElement = (elem) => {
  let child = elem.lastElementChild;
  while (child) {
    elem.removeChild(child);
    child = elem.lastElementChild;
  }
}


// обработчик событий на селект. фильтруем массив с данными инпутов и рендерим нужные.
// по хорошему, это тоже отдельная функция, которая принимает элемент, в который нужно рендерить + массив и фильтр к нему тоже
select.addEventListener('change', () => {
  const filter = select.value;
  const filtered = filterArray(checkboxData, filter)
  clearElement(list);
  list.append(createInputsList(filtered))

})


// получаем нужные данные из исходного массива
function filterArray(arr, filter) {
  switch (filter) {
    case "all_list": {
      return arr;
    }
    case "ready_list": {
      return arr.filter((el) => el.ready === true);
    }

    case "not_ready_list": {
      return arr.filter((el) => el.ready === false);
    }

    default: {
      return arr;
    }
  }

}


const createLabelEl = (id, text) => {
  const label = document.createElement('label');
  label.htmlFor = id;
  label.innerText = text;

  return label
}

const createCheckboxEl = (id, ready) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = id;
  checkbox.checked = ready;

  return checkbox
}

//создаем строчку инпут + текст. чтобы можно было кликать по тексту и менять состояние инпута, передаем одинаковые айди для обоих функций внутренних(лейбл ссылается на инпут по айди)
const createInputRow = ({
  id,
  text,
  ready
}) => {
  const wrapper = document.createElement('div');

  wrapper.append(createCheckboxEl(id, ready), createLabelEl(id, text))

  return wrapper;
}


// собираем все инпуты в один див, чтобы меньше обращений было к DOM дереву в браузере.
const createInputsList = (inputsData) => {
  const wrapper = document.createElement('div');

  for (const item of inputsData) {
    wrapper.append(createInputRow(item))
  }

  return wrapper
}
// первоначальный рендер
list.append(createInputsList(checkboxData))
*/