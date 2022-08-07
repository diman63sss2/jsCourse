(function () {
  // создаём и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создания дела
  function createTodoForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');


    button.setAttribute('disabled', 'disabled');
    input.placeholder = `Введите название нвого дела`;
    button.textContent = `Добавить дело`;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }


  function createTodoItem(name, done, todoList, dataName) {
    let item = document.createElement('li');
    // кнопки для элмента
    let nameTitle = document.createElement('span');
    let buttonGroupe = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');


    // Наполеняем элемент и кнопки текстом
    nameTitle.textContent = name;
    doneButton.textContent = 'Готово';
    deleteButton.textContent = 'Удалить';

    buttonGroupe.append(doneButton);
    buttonGroupe.append(deleteButton);

    item.append(nameTitle);
    item.append(buttonGroupe);
    if (done === true) {
      item.classList.add('complete');
    }

    let todoItem = {
      item,
      doneButton,
      deleteButton,
    };

    eventTodoItemDone(todoItem, todoList, dataName);
    eventTodoItemDelete(todoItem, todoList, dataName);

    return todoItem;

  }

  function eventTodoItemDone(todoItem, todoList, dataName) {
    todoItem.doneButton.addEventListener('click', function () {
      todoItem.item.classList.toggle('complete');
      if (todoItem.item.classList.contains('complete')) {
        console.log(1);
        todoItem.doneButton.textContent = 'Не готово';
      } else {
        console.log(2);
        todoItem.doneButton.textContent = 'Готово';
      }
      console.log(todoItem.name);
      UpdateTodoDate(todoList, dataName);

    });
  }

  function eventTodoItemDelete(todoItem, todoList, dataName) {
    todoItem.deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверенны?')) {
        todoItem.item.remove();
        UpdateTodoDate(todoList, dataName);
      }
    });
  }

  // создаём и возвращаем список элементов
  function createTodoList(dataName) {
    let list = document.createElement('ul');
    let todoItems;
    if (localStorage.getItem(dataName)) {
      todoItems = JSON.parse(localStorage.getItem(dataName));
    }
    if (todoItems) {
      todoItems.forEach(todoItem => {
        console.log(todoItem);
        console.log(dataName);
        list.append(createTodoItem(todoItem.name, todoItem.done, list, dataName).item,);
      });
    }
    return list;
  }

  // В разработке
  function UpdateTodoDate(todoList, dataName) {
    let TodoDate = [];

    for (let i = 0; i < todoList.children.length; i++) {
      let item = {};

      item.name = todoList.children[i].querySelector('span').textContent;
      item.done = todoList.children[i].classList.contains('complete');
      TodoDate.push(item);
    }
    console.log(TodoDate);
    console.log(dataName);
    localStorage.setItem(dataName, JSON.stringify(TodoDate));
  }




  function createTodoApp(container, title = 'Список дел', dataName) {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoForm();
    let todoList = createTodoList(dataName);

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);


    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!todoItemForm.input.value) {
        return;
      }

      // Создание элемента
      let todoItem = createTodoItem(todoItemForm.input.value, false, todoList, dataName)

      // Добавление элемента внутрь списка
      todoList.append(todoItem.item);

      // обнуление поля для ввода, и задание свойства disabled для кнопки формы
      todoItemForm.input.value = '';
      todoItemForm.button.setAttribute('disabled', 'disabled');

      // Обновление данных в localStorage
      UpdateTodoDate(todoList, dataName);
    });

    todoItemForm.input.addEventListener('input', function () {
      if (todoItemForm.input.value) {
        todoItemForm.button.removeAttribute('disabled');
      } else {
        todoItemForm.button.setAttribute('disabled', 'disabled');
      }

    });
  }


  window.createTodoApp = createTodoApp;
})()