<script lang="ts">
import { defineComponent } from 'vue'
import ItepGroup from '@/assets/images/itep-group.jpg'
import ImgParallax from '@/components/Common/ImgParallax/ImgParallax.vue';
export default defineComponent({
    name: 'ScheduleEventView',
    components: { ImgParallax },
    setup() {
        const img = {
            url: ItepGroup,
            width: 500,
            height: 500,
        }
        return {
            img
        }
    }

})
</script>

<template>
  <section class="py100 bg-white">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2>Regular section</h2>
          <h4>I had to add a white background to this section to mask the video. I'm trying to find a way where the video is bound to the ParallaxVideo class</h4>
        </div>
      </div>
    </div>
  </section>


  <!-- Parallax section 1 -->
  <section class="ParallaxVideo video1 py200">
    <video autoplay muted loop>
      <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
    </video>

    <div class="container h-100">
      <div class="row h-100">
        <div class="col text-center my-auto">
          <h2 class="xl white">Parallax Video section 1</h2>
          <p>some centered content here...</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Parallax section 1 -->

  <section class="py100 bg-white">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2>Regular section</h2>
          <h4></h4>
        </div>
      </div>
    </div>
  </section>


  <!-- Parallax section 2 -->
  <section class="ParallaxVideo video2 py200">
    <video autoplay muted loop>
      <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
    </video>

    <div class="container h-100">
      <div class="row h-100">
        <div class="col text-center my-auto">
          <h2 class="xl white">Parallax Video section 2</h2>
          <p>This section might have a different video so the video needs to be </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Parallax section 1 -->

  <section class="py100 bg-white">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2>Regular section</h2>
          <h4></h4>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
.ParallaxVideo{
  /*   height: 300px; */
  padding:200px 0px;
  overflow: hidden;
}
.ParallaxVideo video{
  min-width: 100%;
  /*
    position: fixed;
     top:0;
   */
  z-index: -9999;
}
.ParallaxVideo h3 {
  color: #fff;
  font-size: 76px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}



/* general styles */
.py100{
  padding:100px 0px;
}
.bg-white{
  background-color: rgba(255, 255, 255, 0.8) !important;
}
</style>