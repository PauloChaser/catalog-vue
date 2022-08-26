<template>
  <section class="container addProduct">
    <div class="container__row">
      <div class="addProduct__content">
        <div class="addProduct__leftSide">
          <h2 class="addProduct__title">Добавление товара</h2>
          <AddForm class="addProduct__form" :addproduct="addProduct"/>
        </div>
        <div class="container__catalog catalog">
          <div class="catalog__filter">
            <select class="select" name="type" v-model="selected">
              <option value="default">По умолчанию</option>
              <option value="name">По наименованию</option>
              <option value="asc">По возрастанию цены</option>
              <option value="desc">По убыванию цены</option>
            </select>
          </div>
          <div v-if="isLoading" class="catalog__loader">
            <SpinnerLoader />
          </div>
          <div v-else class="catalog__items">
            <CatalogItem
              v-for="item in sortedItems"
              :key="item.id"
              :product="item"
              :removeproduct="removeProduct"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 2,
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 2',
          description:
            'Довольно-таки интересное описание товара в несколько строк.\n' +
            '                                Довольно-таки интересное описание товара в несколько строк',
          price: 11000,
        },
        {
          id: 1,
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 1',
          description:
            'Довольно-таки интересное описание товара в несколько строк.\n' +
            '                                Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
        },
        {
          id: 3,
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 3',
          description:
            'Довольно-таки интересное описание товара в несколько строк.\n' +
            '                                Довольно-таки интересное описание товара в несколько строк',
          price: 14000,
        },
        {
          id: 4,
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 4',
          description:
            'Довольно-таки интересное описание товара в несколько строк.\n' +
            '                                Довольно-таки интересное описание товара в несколько строк',
          price: 16000,
        },
        {
          id: 5,
          image: '/item-img-retina.jpg',
          name: 'Наименование товара 5',
          description:
            'Довольно-таки интересное описание товара в несколько строк.\n' +
            '                                Довольно-таки интересное описание товара в несколько строк',
          price: 19000,
        },
      ],
      selected: 'default',
      isLoading: true,
    }
  },

  beforeMount() {
    if (localStorage.getItem('items')) {
      try {
        this.items = JSON.parse(localStorage.getItem('items'));
      } catch(e) {
        localStorage.removeItem('items');
      }
    }
    this.isLoading = false
  },

  methods: {
    addProduct(link, name, description, price) {
      const id = Math.random().toString(36).slice(2)
      this.items.push({id, image: link, name, description, price})
      this.setLocalItems()
    },
    removeProduct(id) {
      this.items = this.items.filter((item) => item.id !== id)
      this.setLocalItems()
    },
    setLocalItems() {
      localStorage.setItem('items', JSON.stringify(this.items))
    }
  },

  computed: {
    sortedItems() {
      switch (this.selected) {
        case 'asc':
          return [...this.items].sort((a, b) => a.price - b.price);
        case 'desc':
          return [...this.items].sort((a, b) => b.price - a.price);
        case 'name':
          return [...this.items].sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        default:
          return this.items
      }
    },
  }
}
</script>

<style>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 32px;
}

.container__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 100%;
  max-width: 1376px;
}

.addProduct__leftSide {
  /*flex-basis: 25%;*/
  /*width: 100%;*/
}

.addProduct__title {
  font-weight: 600;
  font-size: 28px;
  margin: 0 auto 16px 0;
  padding: 0;
}

.addProduct__content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 16px;
  width: 100%;
}

.select {
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 11px 30px 11px 16px;
  background-color: #fffefb;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  border-radius: 4px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy40ODUzMiAxLjI0MjY0TDQuMjQyNjggNC40ODUyOEwxLjAwMDAzIDEuMjQyNjQiIHN0cm9rZT0iI0I0QjRCNCIvPgo8L3N2Zz4K');
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: 90% 50%;
  appearance: none;

  font-weight: 400;
  font-size: 12px;
  color: #b4b4b4;
}

.addProduct__form {
  box-sizing: border-box;
  width: 100%;
}

.catalog {
  flex-basis: ;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.catalog__filter {
  width: fit-content;
  align-self: flex-end;
  margin-bottom: 16px;
}

.catalog__loader {
  flex-basis: 75%;
  width: 100%;
}

.catalog__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  flex-basis: 75%;
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .container {
    padding: 20px;
  }

  .addProduct__title {
    font-size: 26px;
  }

  .addProduct__content {
    grid-template-columns: 1fr 2fr;
  }

  .catalog__items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 820px) {
  .addProduct__content {
    grid-template-columns: 1fr 1fr;
  }

  .catalog__items {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 580px) {
  .container {
    padding: 15px;
  }

  .addProduct__content {
    display: flex;
    flex-direction: column;
  }

  .addProduct__form {
    margin-bottom: 16px;
  }
}
</style>
