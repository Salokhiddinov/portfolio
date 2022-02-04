<template>
  <canvas class="canvas"></canvas>
</template>

<script>
export default {
  mounted() {
    var canvas = document.querySelector(".canvas"),
      ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.onresize = resize;

    function generate_noise(ctx) {
      var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        buffer_len = buffer32.length,
        i = 0;

      for (; i < buffer_len; i++)
        buffer32[i] = ((255 * Math.random()) | 0) << 24;

      ctx.putImageData(idata, 0, 0);
    }

    var toggle = true;
    (function loop() {
      toggle = !toggle;
      if (toggle) {
        requestAnimationFrame(loop);
        return;
      }
      generate_noise(ctx);
      requestAnimationFrame(loop);
    })();
  },
};
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
</style>
