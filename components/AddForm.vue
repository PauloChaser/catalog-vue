<template>
  <form method='post' class='form' @submit='isFormValid'>
    <div class='form__inputWrapper form__inputWrapper--required'>
      <label for='product-name'>
        <span>Наименование товара</span>
      </label>
      <input
        id='product-name'
        v-model='form.name'
        class='form__input'
        type='text'
        name='product-name'
        placeholder='Введите наименование товара'
        :class="{ 'form__input--active': validation.nameValid.isShown }"
        @input='validateName(form.name)'
        @blur='validation.nameValid.isShown = !validation.nameValid.isValid'
      />
      <span v-if='validation.nameValid.isShown' class='form__inputError'>
        Поле является обязательным
      </span>
    </div>

    <div class='form__inputWrapper'>
      <label for='product-description'>
        <span>Описание товара</span>
      </label>
      <textarea
        id='product-description'
        v-model='form.description'
        placeholder='Введите описание товара'
      >
      </textarea>
    </div>

    <div class='form__inputWrapper form__inputWrapper--required'>
      <label for='product-link'>
        <span>Ссылка на изображение товара</span>
      </label>
      <input
        id='product-link'
        v-model='form.link'
        class='form__input'
        placeholder='Введите ссылку'
        type='url'
        name='product-link'
        :class="{ 'form__input--active': validation.linkValid.isShown }"
        @input='validateLink(form.link)'
        @blur='validation.linkValid.isShown = !validation.linkValid.isValid'
      />
      <span v-if='validation.linkValid.isShown' class='form__inputError'
      >Неверный формат ссылки
      </span>
    </div>

    <div class='form__inputWrapper form__inputWrapper--required'>
      <label for='product-price'><span>Цена товара</span></label>
      <input
        id='product-price'
        v-model='form.price'
        class='form__input'
        type='text'
        name='product-price'
        placeholder='Введите цену'
        :class="{ 'form__input--active': validation.priceValid.isShown }"
        @input='validatePrice((form.price = numberWithCommas))'
        @blur='validation.priceValid.isShown = !validation.priceValid.isValid'
      />
      <span v-if='validation.priceValid.isShown' class='form__inputError'
      >Поле является обязательным</span
      >
    </div>

    <div class='form__button'>
      <input
        type='button'
        value='Добавить товар'
        :disabled='!isFormValid'
        @click.prevent='setForm'
      />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    addProduct: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      form: {
        link: '',
        name: '',
        description: '',
        price: ''
      },
      validation: {
        nameValid: {
          isValid: false,
          isShown: false
        },
        linkValid: {
          isValid: false,
          isShown: false
        },
        priceValid: {
          isValid: false,
          isShown: false
        }
      }
    }
  },

  computed: {
    isFormValid() {
      return (
        this.validation.nameValid.isValid &&
        this.validation.linkValid.isValid &&
        this.validation.priceValid.isValid
      )
    },

    numberWithCommas() {
      return (
        this.form.price
          .toString()
          // input only numbers
          .replace(/[^0-9]/g, '')
          .slice(0, 10)
      )
    }
  },

  methods: {
    validURL(str) {
      const res = str.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
      )
      return res !== null
    },

    validateName(name) {
      this.validation.nameValid.isValid = name.length > 3
      this.validation.nameValid.isShown = false
    },

    validateLink(link) {
      this.validation.linkValid.isShown = false

      this.validation.linkValid.isValid = this.validURL(link)
    },

    validatePrice(price) {
      this.validation.priceValid.isValid = Number(price) > 0
      this.validation.priceValid.isShown = false
    },

    setForm() {
      this.addProduct(
        this.form.link,
        this.form.name,
        this.form.description,
        this.form.price
      )
      this.form.link = ''
      this.form.name = ''
      this.form.description = ''
      this.form.price = ''
      this.validation.nameValid.isValid = false
      this.validation.linkValid.isValid = false
      this.validation.priceValid.isValid = false
    }
  }
}
</script>

<style scoped lang='scss'>
.form {
  position: sticky;
  left: 0;
  top: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  //max-width: 332px;
  height: fit-content;

  background-color: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 29px 24px 24px;

  @media screen and (max-width: 820px) {
    max-width: none;
  }

  @media screen and (max-width: 580px) {
    position: static;
    padding: 16px;
  }

  &__inputWrapper {
    margin-bottom: 10px;
    position: relative;

    label {
      display: flex;
      width: 100%;
      margin: 0 0 4px;

      span {
        font-weight: 400;
        font-size: 10px;
        line-height: 1.3;
        letter-spacing: -0.02em;
        color: #49485e;
        position: relative;
      }
    }

    textarea {
      font-family: inherit;
      width: 100%;
      height: 108px;
      resize: none;
      border: 0;
      outline: none;
      background: #fffefb;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding: 10px 16px;
      box-sizing: border-box;
      font-weight: 400;
      font-size: 12px;
      color: #3f3f3f;

      &::placeholder {
        color: #b4b4b4;
      }
    }

    &--required {
      margin-bottom: 16px;
    }

    &--required:first-child {
      margin-top: -5px;
    }
  }

  &__input {
    font-family: inherit;
    width: 100%;
    padding: 9px 15px;
    box-sizing: border-box;

    font-weight: 400;
    font-size: 12px;
    color: #3f3f3f;
    border: 1px solid transparent;
    outline: none;
    background: #fffefb;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &.form__input--active {
      border: 1px solid #ff8484;
    }

    &::placeholder {
      color: #b4b4b4;
    }
  }

  &__inputError {
    position: absolute;
    content: '';
    width: 100%;
    height: auto;
    left: 0;
    bottom: -4px;

    font-weight: 400;
    font-size: 8px;
    letter-spacing: -0.02em;
    color: #ff8484;
    transform: translateY(100%);
  }

  &__inputWrapper[data-valid='false'] {
    border-color: #ff8484;
  }

  &__inputWrapper[data-valid='false'] .form__inputError {
    display: flex;
    opacity: 1;
  }

  &__inputWrapper--required label span::after {
    content: '';
    position: absolute;
    right: -5px;
    top: -1px;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: #ff8484;
  }

  &__button {
    width: 100%;
    margin-top: 8px;

    input {
      width: 100%;
      padding: 12px 10px 11px;
      box-sizing: border-box;
      border: none;
      background: #7bae73;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      font-family: Inter, sans-serif;
      font-weight: 600;
      font-size: 12px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      transition: color 200ms ease, background-color 200ms ease,
      border 200ms ease;

      &[disabled] {
        box-shadow: none;
        background-color: #eee;
        color: #b4b4b4;
        cursor: default;
        pointer-events: none;
      }

      &:hover {
        background: #fff;
        color: #7bae73;
      }
    }
  }
}
</style>
