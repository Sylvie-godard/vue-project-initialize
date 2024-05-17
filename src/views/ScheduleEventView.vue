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
    <div class="ScheduleEvent">
        <p>Dimanche 3 décembre</p>
        <p>14h00 - 18h00</p>
        <p>Skinny & Joe Longomo</p>
        <ImgParallax :imageParallax="img"/>
      <p>Dimanche 3 décembre</p>
      <p>14h00 - 18h00</p>
      <p>Skinny & Joe Longomo</p><p>Dimanche 3 décembre</p>
      <p>14h00 - 18h00</p>
      <p>Skinny & Joe Longomo</p><p>Dimanche 3 décembre</p>
      <p>14h00 - 18h00</p>
      <p>Skinny & Joe Longomo</p><p>Dimanche 3 décembre</p>
      <p>14h00 - 18h00</p>
      <p>Skinny & Joe Longomo</p><p>Dimanche 3 décembre</p>
      <p>14h00 - 18h00</p>
      <p>Skinny & Joe Longomo</p><p>Dimanche 3 décembre</p>
      <p>14h00 - 18h00</p>
      <p>Skinny & Joe Longomo</p>
    </div>
</template>

<style lang="scss">
.ScheduleEvent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
}
</style>