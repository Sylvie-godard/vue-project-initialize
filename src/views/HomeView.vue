<script lang="ts" setup>
import MenuApp from '@/components/Common/MenuApp/MenuApp.vue';
import BannerVideo from '@/components/HomeView/BannerVideo/BannerVideo.vue'
import AboutBlock from '@/components/HomeView/aboutBlock/AboutBlock.vue';
</script>

<template>
    <div class="itep-HomeView">
      <MenuApp />
      <BannerVideo />

      <div class="itep-HomeView__container">
        <AboutBlock />
      </div>
    </div>
</template>

<style lang="scss">
.itep-HomeView {
  background-color: black;

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

