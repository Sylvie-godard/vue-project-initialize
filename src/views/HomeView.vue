<script lang="ts">
import TitleHome from '@/components/HomeView/TitleHome/TitleHome.vue';
import SimpleBanner from '@/components/HomeView/SimpleBanner/SimpleBanner.vue';
import HeaderHome from '@/components/Common/HeaderHome/HeaderHome.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderHome,
    TitleHome,
    SimpleBanner,
  }
})

</script>

<template>
  <div>
    <HeaderHome />
    <TitleHome />
    <SimpleBanner />
  </div>
</template>
