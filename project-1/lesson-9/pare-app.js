(() => {

  function createSetting(textTitle, textButton) {
    const setting = document.createElement('form');

    const textSetting = document.createElement('h2');
    textSetting.textContent = textTitle;

    const pares = document.createElement('input');

    pares.setAttribute("type", "number");
    pares.value = 8;

    const button = document.createElement('button');
    button.textContent = textButton;
    const errorsSetting = document.createElement('p');

    setting.append(textSetting);
    setting.append(pares);
    setting.append(button);
    setting.append(errorsSetting);


    return {
      setting,
      button,
      pares,
      errorsSetting,
    }
  }

  function validationSetting(pares, error) {
    const elements = parseInt(pares.value);
    if (elements < 2 || elements > 20) {
      error.textContent = 'Игра поддерживает только от 2 до 20 пар.';
      return false;
    }
    error.textContent = '';
    return pares;
  }

  function createGame(pares, app) {

  }

  function startGame(setting, app) {
    setting.remove();

  }

  document.addEventListener('DOMContentLoaded', () => {
    const setting = createSetting('Настройка игры: введите количество пар.', 'Начать');
    const app = document.getElementById('pare-app');

    app.append(setting.setting);

    setting.setting.addEventListener('submit', function (e) {
      e.preventDefault();
      let validat = validationSetting(setting.pares, setting.errorsSetting);
      if (validat != false) {
        startGame(setting.setting, app);
      }
    });


  });



})()