<script lang="ts" setup>
import bannerVideo from '@/assets/videos/itep-banner.mp4'
import MenuApp from '@/components/Common/MenuApp/MenuApp.vue';
import { onMounted } from 'vue';
import ImgParallax from '@/components/Common/ImgParallax/ImgParallax.vue';
import ItepGroup from '@/assets/images/itep-group.jpg';

const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

const img: ImgParallax = {
  url: ItepGroup,
  height: '630px',
  width: '48%'
}

const handleBannerVideo = () => {
  const selector = document.querySelector('.itep-HomeView__sleep-video') as HTMLElement;
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
    const currentScroll = window.scrollY;
    handleBannerVideo();
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
      <div class="bannerVideoIndication" id="bannerVideoIndication"/>

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
            <RouterLink to="/contact">Contactez-nous</RouterLink>
            <a href=""></a>
          </div>
          <div class="itep-HomeView__about-block">
            <img id="aboutBlockImg" class="itep-HomeView__about-block-img" :src="img.url"/>
          </div>
        </div>
      </div>
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
.itep-HomeView {
  background-color: black;

  &__about {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;

    a {
      color: black;
    }

    h2 {
      font-size: 40px;
      font-weight: bolder;
      margin-bottom: 2rem;
      text-align: center;
    }

    p {
      text-align: center;
    }

    .info {
      align-items: center;
      background-color: #dec7a0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 30px;
      min-width: 340px;
      padding: 2rem;

      @media (max-width: 765px) {
        width: 100%;
      }
    }
  }

  &__about-block {
    height: 630px;
    min-width: 340px;
    overflow: hidden;
    width: 48%;

    @media (max-width: 765px) {
      width: 100%;
    }
  }

  &__about-block-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

  &__container {
    margin-top: 100vh;
    padding: 10rem 4rem;

    @media (max-width: 765px) {
      height: 100%;
      padding: 10rem 0;
    }
  }
}

</style>

