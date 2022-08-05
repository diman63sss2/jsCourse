// Задание
// Создайте HTML - страницу с полем для ввода числа, кнопкой и div - элементом с числом 0. В поле для ввода должно вводиться число с количеством секунд, а кнопка должна запускать таймер.При запуске таймера число в div - элементе должно замениться на введённое в поле.Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0. При этом таймер должен корректно работать, если во время его работы пользователь запускает его заново.
// Проверка результата
// При запуске таймера он корректно работает, уменьшая число каждую секунду.
// Если нажать на кнопку запуска таймера ещё раз, предыдущий интервал остановится и таймер начнёт свою работу заново.
// Таймер заканчивает работу сразу при достижении 0.


document.addEventListener('DOMContentLoaded', function () {
  (function () {
    let timerInput = document.querySelector('.timer');
    let timerButton = document.querySelector('.button-number');
    let timerNumber = document.querySelector('.number');
    let nIntervId;

    function timerTick(timer) {
      if (parseInt(timer.textContent) > 0) {
        timer.textContent = parseInt(timer.textContent) - 1;
      } else {
        clearInterval(nIntervId);
        nIntervId = null;
        alert('динь дон!!!!')
      }
    }


    timerButton.addEventListener('click', function () {
      if (nIntervId) {
        clearInterval(nIntervId);
        nIntervId = null;
      }

      let time = parseInt(timerInput.value);

      if (time <= 0) {
        alert('число должно быть больше 0');
        return;
      }

      if (!time) {
        alert(`введите число!`);
        return;
      }

      timerNumber.textContent = time;
      timerInput.value = 0;
      nIntervId = setInterval(timerTick, 1000, timerNumber);
    });

  })();
});



// Задание
// Из JavaScript создайте страницу с полем для ввода и пустым h2 - элементом.Введённый в поле текст должен отображаться внутри h2 - элемента, но с задержкой в 300 мс.При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый.Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в h2.
// Проверка результата
// По ходу ввода текста содержимое в h2 не изменяется.Содержимое обновляется через 300 мс после завершения ввода.

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    let inputText = document.querySelector('.text');
    let textBlock = document.querySelector('h2');
    let nIntervId;

    function timerTick(input, text) {
      text.textContent = input.value;
      clearInterval(nIntervId);
      nIntervId = null;
    }

    inputText.addEventListener('input', function () {
      if (nIntervId) {
        clearInterval(nIntervId);
        nIntervId = null;
      }

      nIntervId = setInterval(timerTick, 300, inputText, textBlock);
    });

  })();
});