"use strict";
// Задание 1.
// Цель задания
// Попрактиковаться в использовании сложных структур данных(массив объектов) и работе со свойствами.
//   Задание
// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве // аргументов.Пример использования:
// let objects = [
//   { name: 'Василий', surname: 'Васильев' },
//   { name: 'Иван', surname: 'Иванов' },
//   { name: 'Пётр', surname: 'Петров' }
// ]
//
// fn - функция, которую нужно написать (хорошее название тоже нужно придумать)
// let result = fn(objects, 'name', 'Иван');
//
/*
Результат выполнения должен быть:
[
{ name: 'Иван', surname: 'Иванов' }
]
 */
// В конце файла с кодом домашнего задания напишите конструкцию export default { название функции }, чтобы была возможность автоматической проверки получившейся функции.
/*


function filterArrayObjects(objects, property, value) {
  let result = [];
  for (let object of objects) {
    let entries = Object.entries(object);
    for (let entri of entries) {
      if (entri[0] === property && entri[1] === value) {
        result.push(Object.assign({}, object));
      }
    }
  }
  return result;
}

let manFirst = {
  name: 'Дмитрий',
  surname: 'Сушков'
};

let manSecond = {
  name: 'Вячеслав',
  surname: 'Дремов'
};

let manFird = {
  name: 'Питасов',
  surname: 'Максим'
};

let array = [manFirst, manSecond, manFird];

let test = filterArrayObjects(array, 'name', 'Дмитрий');
console.log(Object.entries(test[0]).toString());
manFirst.name = `тестовое изменение`;
console.log(Object.entries(manFirst).toString());
console.log(Object.entries(test[0]).toString());

console.log(filterArrayObjects(array, 'surname', 'Дремов'));
console.log(filterArrayObjects(array, 'name', 'питасов'));
*/
