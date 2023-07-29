<script lang="ts">
import HeaderHome from '@/components/Common/HeaderHome/HeaderHome.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderHome,
  }
})

</script>

<template>
  <div>
    <HeaderHome />
  </div>
</template>
