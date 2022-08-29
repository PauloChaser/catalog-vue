<template>
  <select v-model="selected" class="select" name="type" @change="()=>changeHandler(selected)">
    <option v-for="(option,key) in options" :key="option" :value="key">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: [
    'options',
    'changeHandler'
  ],
  data() {
    return {
      selected: 'default',
    }
  }
}
</script>

<style scoped lang='scss'>
.select {
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 11px 30px 11px 16px;
  background-color: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.10);
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
</style>

