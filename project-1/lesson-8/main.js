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

  // создаём и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    return list;
  }

  function createTodoItem(name) {
    let item = document.createElement('li');
    // кнопки для элмента
    let buttonGroupe = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // Наполеняем элемент и кнопки текстом
    item.textContent = name;
    doneButton.textContent = 'Готово';
    deleteButton.textContent = 'Удалить';

    buttonGroupe.append(doneButton);
    buttonGroupe.append(deleteButton);
    item.append(buttonGroupe);

    return {
      item,
      doneButton,
      deleteButton,
    };

  }

  function createTodoApp(container, title = 'Список дел') {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);


    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!todoItemForm.input.value) {
        return;
      }

      let todoItem = createTodoItem(todoItemForm.input.value)

      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('complete');
        if (todoItem.item.classList.contains('complete')) {
          console.log(1);
          todoItem.doneButton.textContent = 'Не готово';
        } else {
          console.log(2);
          todoItem.doneButton.textContent = 'Готово';
        }

      });

      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверенны?')) {
          todoItem.item.remove();
        }
      });

      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
    });
  }


  document.addEventListener('DOMContentLoaded', function () {
    let myTodo = document.getElementById('my-app');
    let momTodo = document.getElementById('mom-app');
    let dadTodo = document.getElementById('dad-app',);
    createTodoApp(myTodo, 'Мой список дел');
    createTodoApp(momTodo, 'Мамин список дел');
    createTodoApp(dadTodo, 'Список дел отца');
  });


})()