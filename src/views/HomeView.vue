<script lang="ts" setup>
import bannerVideo from '@/assets/videos/itep-banner.mp4'
import MenuApp from '@/components/Common/MenuApp/MenuApp.vue';
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

onMounted(() => {
  window.addEventListener('scroll', function() {
    const selector = document.querySelector('.itep-HomeView__sleep-video') as HTMLElement;
    const element = document.getElementById('monCarre') as HTMLElement;

    if (isElementInViewport(element)) {
      selector.style.height = '100%'
    } else {
      selector.style.height = '0%'
    }
  });
})
</script>

<template>
    <div class="itep-HomeView">
      <MenuApp />
      <div class="itep-HomeView__sleep-video" id="myBanner">
        <video
            class="itep-HomeView__banner-video"
            ref="video"
            :src="bannerVideo"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
        ></video>
      </div>
      <div class="monCarré" id="monCarre"/>

      <div class="itep-HomeView__container">
        <div class="itep-HomeView__about">
          <div class="itep-HomeView__about-block info">
            <h2>À propos de nous</h2>
            <p>Atelier de développement mental et pratique Freestyle Hip Hop</p>
            <p>Deux dimanches par mois</p>
            <p>1 créneau libre en semaine</p>
            <p>Accès cours intervenants gratuit</p>
            <p>Niveau intermédiaire/avancés</p>
            <p>Sérieux et motivés only</p>
            <p>Intéressé ?</p>
          </div>
          <div class="itep-HomeView__about-block" />
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.monCarré {
  background-color: pink;
  height: 100vh;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: -2;
}
.itep-HomeView {
  background-color: black;

  &__about {
    display: flex;
    justify-content: space-around;

    p {

    }

    h2 {
      font-size: 40px;
      font-weight: bolder;
      text-align: center;
    }

    .info {
      align-items: center;
      background-color: #dec7a0;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  &__about-block {
    height: 630px;
    width: 48%;
    background-color: pink;
  }
  
  &__sleep-video {
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: -1;
  }

  &__banner-video {
    width: 100%;
  }

  &__container {
    margin-top: 100vh;
    padding: 10rem 4rem;
  }
}

</style>

