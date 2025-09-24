/*Дана простая форма авторизации.
Необходимо отменить отправку формы по умолчанию и проверить поля с логином и паролем по следующим признакам:
поля непустые (если одно из полей пустое, вывести в консоль сообщение "All fields are required")
логин и пароль должны соответствовать одной и записей в массива registeredUsers файла app.js (в случае несовпадения, 
вывести в консоль сообщение "Incorrect login or password")
если учетные данные подходят, вывести в консоль сообщение "Access granted" и очистить поля формы.*/

 

const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const login = document.querySelector('[name=login]');
const password = document.querySelector('[name=password]')

// у каждого будет обрабатываться enter и делаться фокус на след элeмент
inputs.forEach(input => input.addEventListener('keypress', handleEvent))
form.addEventListener('submit', handleSubmit);

function handleEvent(event) {
  console.log(event.target)

  if (event.key === 'Enter') {
    event.preventDefault()

    event.target.nextElementSibling.focus()
  }
}

function handleSubmit(event) {
  event.preventDefault(); //отмени действие по умолчанию
  if (validate()) {
    alert("Access granted");
    form.reset() // очищает поля

  }
}

function validate() {
    if (!(login.value.trim() && password.value.trim())) {
      alert("All fields are required");
    return false;
  }
    for (user of registeredUsers){
        user[0] === login.value && user[1] === password.value 
            return true;
        }
        alert("Incorrect login or password");
        return false;
    }
