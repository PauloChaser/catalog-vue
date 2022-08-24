<template>
  <div class="item">
    <div class="item__img">
      <img
        src="/item-img.jpg"
        srcset="item-img.jpg 1x, item-img-retina.jpg 2x"
        alt="Product photo"
      />
    </div>
    <div class="item__info">
      <h3 class="item__name">Наименование товара</h3>
      <p class="item__description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <span class="item__price">10 000 руб.</span>
    </div>
    <div class="item__remove"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.item {
  background: #fffefb;
  box-shadow: 0 20px 30px rgb(0 0 0 / 4%), 0 6px 10px rgb(0 0 0 / 2%);
  border-radius: 4px;
  cursor: url('/cursor.png'), pointer;

  /* width: calc(33% - 10px); */
  position: relative;
}

.item__img {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.item__img img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 200ms ease;
}

.item:hover .item__img img {
  transform: scale(1.1);
}

.item__info {
  padding: 16px 16px 24px;
}

.item__name {
  margin: 0 0 16px;
  padding: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #3f3f3f;
}

.item__description {
  margin: 0 0 32px;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  color: #3f3f3f;
}

.item__price {
  font-weight: 600;
  font-size: 24px;
  color: #3f3f3f;
}

.item__remove {
  position: absolute;
  content: '';
  width: 32px;
  height: 32px;
  right: -8px;
  top: -8px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzRfMzQ5KSI+CjxwYXRoIGQ9Ik0xMC4yMDcgNS43OTY4OEM5Ljk5OTk4IDUuNzk2ODggOS44MzIyNCA1Ljk2NDYyIDkuODMyMjQgNi4xNzE1OFYxMy4yNTM1QzkuODMyMjQgMTMuNDYwNCA5Ljk5OTk4IDEzLjYyODMgMTAuMjA3IDEzLjYyODNDMTAuNDEzOSAxMy42MjgzIDEwLjU4MTcgMTMuNDYwNCAxMC41ODE3IDEzLjI1MzVWNi4xNzE1OEMxMC41ODE3IDUuOTY0NjIgMTAuNDEzOSA1Ljc5Njg4IDEwLjIwNyA1Ljc5Njg4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUuNzg1NDQgNS43OTY4OEM1LjU3ODQ4IDUuNzk2ODggNS40MTA3NCA1Ljk2NDYyIDUuNDEwNzQgNi4xNzE1OFYxMy4yNTM1QzUuNDEwNzQgMTMuNDYwNCA1LjU3ODQ4IDEzLjYyODMgNS43ODU0NCAxMy42MjgzQzUuOTkyNDEgMTMuNjI4MyA2LjE2MDE1IDEzLjQ2MDQgNi4xNjAxNSAxMy4yNTM1VjYuMTcxNThDNi4xNjAxNSA1Ljk2NDYyIDUuOTkyNDEgNS43OTY4OCA1Ljc4NTQ0IDUuNzk2ODhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMi41NjI5NCA0Ljc2MzM1VjEzLjk5NTNDMi41NjI5NCAxNC41NDEgMi43NjMwMyAxNS4wNTM0IDMuMTEyNTYgMTUuNDIxMUMzLjQ2MDQ4IDE1Ljc4OTggMy45NDQ2NyAxNS45OTkxIDQuNDUxNCAxNkgxMS41NDFDMTIuMDQ3OCAxNS45OTkxIDEyLjUzMiAxNS43ODk4IDEyLjg3OTggMTUuNDIxMUMxMy4yMjkzIDE1LjA1MzQgMTMuNDI5NCAxNC41NDEgMTMuNDI5NCAxMy45OTUzVjQuNzYzMzVDMTQuMTI0MiA0LjU3ODkzIDE0LjU3NDUgMy45MDc2OCAxNC40ODE1IDMuMTk0NzFDMTQuMzg4NCAyLjQ4MTg5IDEzLjc4MTEgMS45NDg2NyAxMy4wNjIyIDEuOTQ4NTJIMTEuMTQzN1YxLjQ4MDE0QzExLjE0NTkgMS4wODYyNiAxMC45OTAyIDAuNzA4MDM5IDEwLjcxMTMgMC40Mjk3OUMxMC40MzI1IDAuMTUxNjg4IDEwLjA1MzcgLTAuMDAzMTcwOSA5LjY1OTgyIDQuOTIzMzNlLTA1SDYuMzMyNTVDNS45Mzg2NyAtMC4wMDMxNzA5IDUuNTU5ODYgMC4xNTE2ODggNS4yODEwMyAwLjQyOTc5QzUuMDAyMTkgMC43MDgwMzkgNC44NDY0NiAxLjA4NjI2IDQuODQ4NjUgMS40ODAxNFYxLjk0ODUySDIuOTMwMTlDMi4yMTEyMiAxLjk0ODY3IDEuNjAzOTMgMi40ODE4OSAxLjUxMDg0IDMuMTk0NzFDMS40MTc5IDMuOTA3NjggMS44NjgxMyA0LjU3ODkzIDIuNTYyOTQgNC43NjMzNVpNMTEuNTQxIDE1LjI1MDZINC40NTE0QzMuODEwNzUgMTUuMjUwNiAzLjMxMjM2IDE0LjcwMDIgMy4zMTIzNiAxMy45OTUzVjQuNzk2MjlIMTIuNjhWMTMuOTk1M0MxMi42OCAxNC43MDAyIDEyLjE4MTYgMTUuMjUwNiAxMS41NDEgMTUuMjUwNlpNNS41OTgwNiAxLjQ4MDE0QzUuNTk1NTggMS4yODUwMyA1LjY3MjI3IDEuMDk3MjQgNS44MTA3NCAwLjk1OTUwMkM1Ljk0OTA2IDAuODIxNzY4IDYuMTM3MjkgMC43NDYwOTUgNi4zMzI1NSAwLjc0OTQ2MUg5LjY1OTgyQzkuODU1MDggMC43NDYwOTUgMTAuMDQzMyAwLjgyMTc2OCAxMC4xODE2IDAuOTU5NTAyQzEwLjMyMDEgMS4wOTcwOSAxMC4zOTY4IDEuMjg1MDMgMTAuMzk0MyAxLjQ4MDE0VjEuOTQ4NTJINS41OTgwNlYxLjQ4MDE0Wk0yLjkzMDE5IDIuNjk3OTNIMTMuMDYyMkMxMy40MzQ3IDIuNjk3OTMgMTMuNzM2NyAyLjk5OTg5IDEzLjczNjcgMy4zNzI0QzEzLjczNjcgMy43NDQ5MSAxMy40MzQ3IDQuMDQ2ODggMTMuMDYyMiA0LjA0Njg4SDIuOTMwMTlDMi41NTc2OCA0LjA0Njg4IDIuMjU1NzEgMy43NDQ5MSAyLjI1NTcxIDMuMzcyNEMyLjI1NTcxIDIuOTk5ODkgMi41NTc2OCAyLjY5NzkzIDIuOTMwMTkgMi42OTc5M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03Ljk5NjIgNS43OTY4OEM3Ljc4OTIzIDUuNzk2ODggNy42MjE0OSA1Ljk2NDYyIDcuNjIxNDkgNi4xNzE1OFYxMy4yNTM1QzcuNjIxNDkgMTMuNDYwNCA3Ljc4OTIzIDEzLjYyODMgNy45OTYyIDEzLjYyODNDOC4yMDMxNyAxMy42MjgzIDguMzcwOTEgMTMuNDYwNCA4LjM3MDkxIDEzLjI1MzVWNi4xNzE1OEM4LjM3MDkxIDUuOTY0NjIgOC4yMDMxNyA1Ljc5Njg4IDcuOTk2MiA1Ljc5Njg4WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80XzM0OSI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K');
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ff8484;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  border-radius: 10px;
  opacity: 0;
  transform: translate(-50%, 50%);
  transition: transform 200ms ease, opacity 400ms ease;
}

.item:hover .item__remove {
  opacity: 1;
  transform: translate(0, 0);
}


@media screen and (max-width: 1023px) {
  .item__info {
    padding: 16px 16px 24px;
  }

  .item__name {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .item__description {
    margin-bottom: 20px;
    font-size: 14px;
  }

  .item__price {
    font-size: 18px;
  }
}


@media screen and (max-width: 820px) {

}

@media screen and (max-width: 580px) {

}
</style>
