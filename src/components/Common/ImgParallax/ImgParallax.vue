<script lang="ts" setup>
defineProps<{
  imageParallax: ImgParallax
}>()
</script>


<template>
  <div :style="{
        backgroundImage: `url(${imageParallax.url})`,
        width: `${imageParallax.width}`,
        height: `${imageParallax.height}`,
    }" class="parallax"></div>
</template>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
}
</style>