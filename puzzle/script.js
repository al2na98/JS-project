var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(answer) {

        const correctAnswerMessage = 'Правильный ответ'
        const uncorrectAnswerMessage = 'Неправильный ответ';
        const finishMessage = 'Игра окончена. Перезагрузите страницу, чтобы начать заново';

         // Проверка окончания игры
        if (this.tries === 0) {
            alert(finishMessage);
            return;
        }

        // Логика проверки правильного ответа
        if (answer.toLowerCase().trim() === this.correctAnswer) {
            console.log(correctAnswerMessage);
            alert(correctAnswerMessage + '\n\n' + finishMessage);
            return;
        } else {
            // Уменьшить количество попыток
            this.tries --;
        }
        if (this.tries) {
          alert('Неправильный ответ. Подсказка: ' + this.hints[this.tries == 2 ? 0 : 1]);
        } else if (this.tries > 0) {
          alert(uncorrectAnswerMessage);
        } else {
          alert('Неправильный ответ. Правильный ответ: ' + this.correctAnswer + '\n\n' + finishMessage);
        }
},
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    const input = document.getElementsByTagName('input')[0];

    const guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
    }
}

/*Опишите метод checkAnswer объекта riddle, поместив в него в логику проверки правильного ответа на загадку.

Должны соблюдаться следующие условия:

1. В случае правильного ответа выдать пользователю сообщение "Правильный ответ" (в alert и console.log)

2. В случае неправильного ответа выдать пользователю сообщение "Неправильный ответ"

3. В случае окончания попыток выдать пользователю сообщение "Игра окончена"

 

Дополнительно:

- предоставьте пользователю подсказки в случае неправильного ответа

- подсказки предлагаются после первых двух неправильных ответов

- после третьего неправильного ответа подсказка не нужна (как вариант, можно сообщить правильный ответ)*/