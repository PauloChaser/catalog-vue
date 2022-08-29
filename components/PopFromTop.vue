<template>
  <div class="popTop" :class="{ active: isHintShown }">Товар успешно добавлен</div>
</template>

<script>
export default {
  props: {
    isHintShown: Boolean,
  }

}
</script>

<style scoped>
.popTop {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  background: #27bce7;
  text-align: center;
  line-height: 2;
  overflow: hidden;
  -webkit-box-shadow: 0 0 5px black;
  -moz-box-shadow: 0 0 5px black;
  box-shadow: 0 0 5px black;
  transform: translateY(-100%);
  opacity: 0;

  transition: transform 400ms ease, opacity 400ms ease;
}

.active {
  transform: translateY(0);
  opacity: 1;
}


</style>
