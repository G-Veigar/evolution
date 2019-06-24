<template>
  <div class="sign">
    <canvas class="write-canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
// doc: https://github.com/szimek/signature_pad
import SignaturePad from 'signature_pad'

export default {
  methods: {
    autoSetCanvasSize (canvas) {
      canvas.setAttribute('width', canvas.clientWidth)
      canvas.setAttribute('height', canvas.clientHeight)
    }
  },
  mounted () {
    this.canvas = this.$refs.canvas
    this.autoSetCanvasSize(this.canvas)
    this.signaturePad = new SignaturePad(this.canvas)
  }
}
</script>

<style lang="postcss" scoped>
.sign {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
.write-canvas {
  background: #ccc;
  flex: auto;
  align-items: stretch;
}
</style>
