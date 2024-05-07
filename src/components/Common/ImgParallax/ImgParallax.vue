<script lang="ts">
import { defineComponent, PropType } from 'vue'
import bannerVideo from '@/assets/videos/itep-banner.mp4'
export default defineComponent({
    name: 'ImgParallax',
    props: {
        imageParallax: {
            type: Object as PropType<ImgParallax>,
            required: true,
        }
    },
  setup() {
      const videoStyle =  {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }
      return {
        bannerVideo,
        videoStyle
      }
  }
})
</script>


<template>
  <div :style="{
      width: `${imageParallax.width}px`,
      height: `${imageParallax.height}px`,
      }" class="parallax">
    <video autoplay loop muted :style="videoStyle">
      <source :src="bannerVideo" type="video/mp4">
    </video>
  </div>
</template>

<style scoped>
.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>