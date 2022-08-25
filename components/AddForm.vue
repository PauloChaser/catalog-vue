<template>
  <form
    action="#"
    method="post"
    class="form"
    @submit="isFormValid"
  >
    <div class="form__inputWrapper form__inputWrapper--required">
      <label for="product-name"><span>Наименование товара</span></label>
      <input
        id="product-name"
        v-model="form.name"
        @input="validateName(form.name)"
        @blur="validation.nameValid.isShown=!validation.nameValid.isValid"
        type="text"
        class="input"
        name="product-name"
        data-validation="required"
        placeholder="Введите наименование товара"
      />
      <span v-if="validation.nameValid.isShown"
            class="form__inputError">Поле является обязательным</span>
    </div>

    <div class="form__inputWrapper">
      <label for="product-description"><span>Описание товара</span></label>
      <textarea
        id="product-description"
        v-model="form.description"
        class="textarea"
        placeholder="Введите описание товара"
      >
      </textarea>
    </div>

    <div class="form__inputWrapper form__inputWrapper--required">
      <label for="product-link">
        <span>Ссылка на изображение товара</span>
      </label>
      <input
        id="product-link"
        v-model="form.link"
        @input="validateLink(form.link)"
        @blur="validation.linkValid.isShown=!validation.linkValid.isValid"
        type="url"
        class="input"
        name="product-link"
        data-validation="required"
        placeholder="Введите ссылку"
      />
      <span v-if="validation.linkValid.isShown"
            class="form__inputError">Неверный формат ссылки</span>
    </div>

    <div class="form__inputWrapper form__inputWrapper--required">
      <label for="product-price"><span>Цена товара</span></label>
      <input
        id="product-price"
        v-model="form.price"
        @input="validatePrice(form.price=numberWithCommas)"

        @blur="validation.priceValid.isShown=!validation.priceValid.isValid"
        type="text"
        class="input"
        name="product-price"
        data-validation="required"
        placeholder="Введите цену"
      />
      <span v-if="validation.priceValid.isShown"
            class="form__inputError">Поле является обязательным</span>
    </div>

    <div class="form__button">
      <input
        type="button"
        class="button"
        value="Добавить товар"
        :disabled="!isFormValid"
        @click.prevent="addproduct(link, name, description, price)"
      />
      <!--      добавить выше  disabled="disabled"-->
    </div>
  </form>
</template>

<script>
export default {

  props: [
    'addproduct'
  ],

  data() {
    return {
      form: {
        link: '',
        name: '',
        description: '',
        price: '',

      },
      validation: {
        nameValid: {
          isValid: false,
          isShown: false,
        },
        linkValid: {
          isValid: false,
          isShown: false,
        },
        priceValid: {
          isValid: false,
          isShown: false,
        },
      }
    }
  },

  computed: {
    isFormValid() {
      return (this.validation.nameValid.isValid && this.validation.linkValid.isValid && this.validation.priceValid.isValid)
    },

    numberWithCommas() {
      return this.form.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");

    }
  },

  methods: {
    validURL(str) {
      const res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
      return (res !== null)

    },

    validateName(name) {
      this.validation.nameValid.isValid = name.length > 3;
      this.validation.nameValid.isShown = false
    },

    validateLink(link) {
      this.validation.linkValid.isShown = false

      this.validation.linkValid.isValid = this.validURL(link)
    },

    validatePrice(price) {
      Number(price)
      this.validation.priceValid.isValid = price.length > 0;
      this.validation.priceValid.isShown = false
    },

  },
}
</script>

<style scoped>
.form {
  position: sticky;
  left: 0;
  top: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 332px;
  height: fit-content;

  background-color: #fffefb;
  box-shadow: 0 20px 30px rgb(0 0 0 / 4%), 0 6px 10px rgb(0 0 0 / 2%);
  border-radius: 4px;
  padding: 24px;
}

.form__inputWrapper {
  margin-bottom: 16px;
  position: relative;
}

.form__inputError {
  position: absolute;
  content: '';
  width: 100%;
  height: auto;
  left: 0;
  bottom: -4px;

  /* display: none; */

  /* opacity: 0; */

  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: #ff8484;
  transform: translateY(100%);
}

.form__inputWrapper[data-valid='false'] {
  border-color: #ff8484;
}

.form__inputWrapper[data-valid='false'] .form__inputError {
  display: flex;
  opacity: 1;
}

.input {
  font-family: inherit;
  width: 100%;
  padding: 10px 16px;
  box-sizing: border-box;

  font-weight: 400;
  font-size: 12px;
  color: #3f3f3f;
  border: 0;
  outline: none;
  background: #fffefb;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  border-radius: 4px;
}

.textarea::placeholder,
.input::placeholder {
  color: #b4b4b4;
}

.form__inputWrapper label {
  display: inline-block;
  width: 100%;
  margin: 0 0 4px;
}

/* чекнуть реализацию кружка */
.form__inputWrapper label span {
  font-weight: 400;
  font-size: 10px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #49485e;
  position: relative;
}

.form__inputWrapper--required label span::after {
  content: '';
  position: absolute;
  right: -5px;
  top: -1px;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: #ff8484;
}

.textarea {
  font-family: inherit;
  width: 100%;
  height: 108px;
  resize: none;
  border: 0;
  outline: none;
  background: #fffefb;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  border-radius: 4px;
  padding: 10px 16px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  color: #3f3f3f;
}

.form__button {
  width: 100%;
  margin-top: 8px;
}

.button {
  width: 100%;
  padding: 12px 10px 11px;
  box-sizing: border-box;
  border: none;
  background: #7bae73;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  border-radius: 10px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: color 200ms ease;
}

.button[disabled] {
  box-shadow: none;
  background-color: #eee;
  color: #b4b4b4;
  cursor: default;
  pointer-events: none;
}

.button:hover {
}

@media screen and (max-width: 1023px) {

}

@media screen and (max-width: 820px) {
  .form {
    max-width: none;
  }
}

@media screen and (max-width: 580px) {
  .form {
    position: static;
    padding: 16px;
  }
}
</style>
