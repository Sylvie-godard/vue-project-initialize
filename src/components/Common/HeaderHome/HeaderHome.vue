<script>
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default defineComponent({
  name: 'HeaderHome',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const slides = [
        'itep-eva.png', 'joe-longomo.png', 'skinny.png'
    ]
    return {
      slides
    }
  }
})
</script>

<template>
<div class="HeaderHome">
  <img src="/src/assets/itep_clan.png" alt="" class="HeaderHome__img">

  <carousel :items-to-show="1.5">
    <slide v-for="slide in 3" :key="slide" :autoplay="2000"
           :wrap-around="true">
      {slide}    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>


  <p class="HeaderHome__title">COOK</p>
  <p class="HeaderHome__navigation">
    <router-link to="/foo">Accueil</router-link>
    <router-link to="/bar">Page Vierge</router-link>
  </p>
</div>
</template>

<style lang="scss">
.HeaderHome {
  &__img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
  }
  &__title {
    border-bottom: solid 1px black;
    display: flex;
    font-family: raleway, Arial, serif;
    font-size: 40px;
    justify-content: center;
    margin: auto;
    padding: 3rem;
    width: 70%;
  }

  &__navigation {
    display: flex;
    gap: 3rem;
    justify-content: center;
    padding-top: 1rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>