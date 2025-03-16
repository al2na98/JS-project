<template>
  <div class="copy-text">
    <h2>Копирование текста</h2>
    <textarea
      v-model="userInput"
      placeholder="Введите текст здесь..."
      rows="4"
      cols="50"
    ></textarea>
    <br />
    <div class="copy-answer">
      <button @click="copyAnswer">Скопировать текст</button>
    </div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="isError" class="error-message">{{ errorMess }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '', // Хранит введенный пользователем текст
      successMessage: '', // Сообщение об успехе
      isError: false, // Флаг для ошибок
      errorMess: '', // Сообщение об ошибке
    };
  },
  methods: {
    copyAnswer() {
      // Проверяем, есть ли текст для копирования
      if (this.userInput.trim() === '') {
        this.isError = true;
        this.errorMess = 'Пожалуйста, введите текст для копирования.';
        setTimeout(() => {
          this.isError = false; //cjcnf
        }, 2000);
        return;
      }

      // Копируем текст из текстового поля
      navigator.clipboard.writeText(this.userInput).then(() => {
        this.isError = false; 
        this.successMessage = 'Текст успешно скопирован!'; 
        setTimeout(() => {
          this.successMessage = ''; 
        }, 2000);
      }).catch(() => {
        this.isError = true;
        this.errorMess = 'Ошибка при копировании. Пожалуйста, попробуйте еще раз.';
        setTimeout(() => {
          this.isError = false;
        }, 2000);
      });
    },
  },
};
</script>

<style scoped>
.copy-text {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>

Найти еще