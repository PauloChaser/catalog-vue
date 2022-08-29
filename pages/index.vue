<template>
  <section class='addProduct'>
    <div class='addProduct__row'>
      <div class='addProduct__content'>
        <div class='addProduct__leftSide'>
          <h2 class='addProduct__title'>Добавление товара</h2>
          <AddForm class='addProduct__form' :addProduct='addProduct' />
        </div>
        <div class='addProduct__catalog'>
          <div class='addProduct__catalogFilter'>
            <InputSelect
              :options="{
                default: 'По умолчанию',
                name: 'По наименованию',
                asc: 'По возрастанию цены',
                desc: 'По убыванию цены'
              }"
              :changeHandler='setSelectedValue'
            />
          </div>
          <div v-if='isLoading' class='addProduct__catalogLoader'>
            <SpinnerLoader />
          </div>
          <div v-else class='addProduct__catalogItems'>
            <CatalogItem
              v-for='item in sortedItems'
              :key='item.id'
              :product='item'
              :removeProduct='removeProduct'
            />
          </div>
        </div>
      </div>
    </div>
    <PopFromTop :isHintShown='isHintShown' />
  </section>
</template>

<script>
import PopFromTop from '~/components/PopFromTop'
import SpinnerLoader from '~/components/SpinnerLoader'
import AddForm from '~/components/AddForm'
import CatalogItem from '~/components/CatalogItem'
import InputSelect from '~/components/InputSelect'

export default {
  name: 'IndexPage',
  components: {
    PopFromTop,
    SpinnerLoader,
    AddForm,
    CatalogItem,
    InputSelect
  },

  data() {
    return {
      items: [
        {
          id: '46d97y3u2ke',
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 2',
          description:
            `Довольно-таки интересное описание товара в несколько строк.\n Довольно-таки интересное описание товара в несколько строк`,
          price: 11000
        },
        {
          id: 'cd2bngivte4',
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 1',
          description:
            `Довольно-таки интересное описание товара в несколько строк.\n Довольно-таки интересное описание товара в несколько строк`,
          price: 10000
        },
        {
          id: 'oouju1x1h4r',
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 3',
          description:
            `Довольно-таки интересное описание товара в несколько строк.\n Довольно-таки интересное описание товара в несколько строк`,
          price: 14000
        },
        {
          id: 'h7mjmkizym',
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 4',
          description:
            `Довольно-таки интересное описание товара в несколько строк.\n Довольно-таки интересное описание товара в несколько строк`,
          price: 16000
        },
        {
          id: 'pvpkskig4jh',
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 5',
          description:
            `Довольно-таки интересное описание товара в несколько строк.\n Довольно-таки интересное описание товара в несколько строк`,
          price: 19000
        }
      ],
      selected: 'default',
      isLoading: true,
      isHintShown: false
    }
  },

  mounted() {
    if (localStorage.getItem('items')) {
      try {
        this.items = JSON.parse(localStorage.getItem('items'))
      } catch (e) {
        localStorage.removeItem('items')
      }
    }
    this.isLoading = false
  },

  methods: {
    addProduct(link, name, description, price) {
      const id = Math.random().toString(36).slice(2)
      this.items.push({ id, image: link, name, description, price })
      this.setLocalItems()
      this.isHintShown = true
      setTimeout(() => {
        this.isHintShown = false
      }, 2000)
    },
    removeProduct(id) {
      this.items = this.items.filter((item) => item.id !== id)
      this.setLocalItems()
    },
    setLocalItems() {
      localStorage.setItem('items', JSON.stringify(this.items))
    },
    setSelectedValue(value) {
      this.selected = value
    }
  },

  computed: {
    sortedItems() {
      switch (this.selected) {
        case 'asc':
          return [...this.items].sort((a, b) => a.price - b.price)
        case 'desc':
          return [...this.items].sort((a, b) => b.price - a.price)
        case 'name':
          return [...this.items].sort(function(a, b) {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          })
        default:
          return this.items
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.addProduct {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 32px;

  @media screen and (max-width: 1023px) {
    padding: 20px;
  }

  @media screen and (max-width: 580px) {
    padding: 15px;
  }

  &__row {
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    width: 100%;
    max-width: 1376px;

    @media screen and (max-width: 1023px) {
      max-width: 1023px;
    }

    @media screen and (max-width: 820px) {
      max-width: 820px;
    }

    @media screen and (max-width: 580px) {
      max-width: 580px;
    }
  }

  &__leftSide {
    /*flex-basis: 25%;*/
    /*width: 100%;*/
  }

  &__title {
    font-weight: 600;
    font-size: 28px;
    margin: 0 auto 16px 0;
    padding: 0;

    @media screen and (max-width: 1066px) {
      font-size: 26px;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 16px;
    width: 100%;

    @media screen and (max-width: 1066px) {
      grid-template-columns: 1fr 2fr;
    }

    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 580px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__form {
    box-sizing: border-box;
    width: 100%;

    @media screen and (max-width: 580px) {
      margin-bottom: 16px;
    }
  }

  &__catalog {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__catalogFilter {
    width: fit-content;
    align-self: flex-end;
    margin-bottom: 16px;
  }

  &__catalogLoader {
    flex-basis: 75%;
    width: 100%;
  }

  &__catalogItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    flex-basis: 75%;
    width: 100%;

    @media screen and (max-width: 1066px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 1066px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
