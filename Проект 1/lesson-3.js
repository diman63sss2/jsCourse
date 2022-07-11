/*
Задание 1
В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».
*/
/*
// Код задания
function passwordСheck(password) {
  console.log("Проверка пароля: " + password);
  if (password.length < 4) {
    console.log("Пароль корткий!\nВыберите пороль в котором больше 3 символов");
    return false;
  } else if (!(password.includes('-') || password.includes('_'))) {
    console.log("В пороле нет нужных символов!\nНужно чтобы в вашем пороле был символ '-' или '_'");
    return false;
  }
  console.log("Пароль надёжный")
  return true;

}

//Проверка правильных паролей
passwordСheck('1234-');
passwordСheck('4321_');
passwordСheck('qaz-xsw');
passwordСheck('_zxd');

//Проверка не правильных паролей
passwordСheck('_-a');
passwordСheck('qaz');
passwordСheck('_-3');
passwordСheck('123456789');
*/

/*
Задание 2
В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.
*/
/*
function dataСheck(name, surname) {
  let correctName;
  let correctSurname;
  correctName = name.toLowerCase();
  correctName = correctName[0].toUpperCase() + correctName.slice(1);

  correctSurname = surname.toLowerCase();
  correctSurname = correctSurname[0].toUpperCase() + correctSurname.slice(1);


  if (name !== correctName || correctSurname !== correctSurname) {
    console.log('Данные были преобразованны.');
  } else {
    console.log('Данные не были преобразованны.')
  }
}

let nameed = 'ДмитРий';
let surname = 'Олегович';

dataСheck(nameed, surname);
*/

