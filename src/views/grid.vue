<template>
  <div class="grid">
    <div class="gird-wrapper">
      <div class="grid-item item1">1</div>
      <div class="grid-item item2">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
      <div class="grid-item">10</div>
      <div class="grid-item">11</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.gird-wrapper {
  border: 1px solid #999;
  padding: 5px;
  width: 100%;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 20px;
  grid-template-areas:
    'a a a'
    'b b b'
    'c c c';
  /* grid-auto-flow: column; */
  /* align-items: stretch;
  justify-items: stretch; */
  /* place-items: stretch; */
  /* justify-content: center; */
  /* align-content: end; */
  grid-auto-rows: 50px;
}

.grid-item {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 80px; */
  /* height: 80px; */
  text-align: center;
  background-color: #cccccc;
  border: 1px solid #af8;
  box-sizing: border-box;
}
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
</style>
