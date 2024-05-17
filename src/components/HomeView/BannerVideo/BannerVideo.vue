<script lang="ts" setup>
import bannerVideo from '@/assets/videos/itep-banner.mp4'
import { onMounted } from 'vue';

const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}
const handleBannerVideo = () => {
  const selector = document.querySelector('.BannerVideo__sleep-video') as HTMLElement;
  const element = document.getElementById('bannerVideoIndication') as HTMLElement;

  if (isElementInViewport(element)) {
    selector.style.height = '100%'
  } else {
    selector.style.height = '0%'
  }
}


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

onMounted(() => {
  window.addEventListener('scroll', function() {
    handleBannerVideo();
  });
})
</script>

<template>
    <div class="BannerVideo">
      <div class="BannerVideo__sleep-video" id="myBanner">
        <video
            class="BannerVideo__banner-video"
            ref="video"
            :src="bannerVideo"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
        ></video>
      </div>
      <div class="bannerVideoIndication" id="bannerVideoIndication"/>
    </div>

</template>

<style lang="scss">
.bannerVideoIndication {
  height: 100vh;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: -2;
}

.BannerVideo {
  &__sleep-video {
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: -1;
  }

  &__banner-video {
    object-fit: cover;
    width: 100%;

    @media (max-width: 765px) {
      height: 100%;
    }
  }
}
</style>