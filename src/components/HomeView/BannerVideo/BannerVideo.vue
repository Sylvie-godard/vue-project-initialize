<script lang="ts">
import {ref, defineComponent, onMounted} from 'vue';

export default defineComponent({
  name: 'BannerVideo',
  setup() {
    const videoRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      resizeVideo()
      window.addEventListener('resize', resizeVideo);
    })

    const resizeVideo = (): void => {
      if (videoRef.value) {
        const videoContainer = videoRef.value.parentElement;
        const viewportHeight = window.innerHeight;
        if (videoContainer) {
          videoContainer.style.height = `${viewportHeight}px`;
        }
      }
    }
  }
})
</script>

<template>
  <div class="video-banner">
    <video
        class="video-banner__video"
        ref="video"
        src="https://storage.googleapis.com/bucket-itep/itep_home_page_slider.mp4"
        muted
        loop
        autoplay
        playsinline
    ></video>
  </div>

</template>

<style lang="scss">
.video-banner {
    width: 100%;
    overflow: hidden;

  &__video {
    filter: grayscale(100%);
    width: 100%;
    height: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>