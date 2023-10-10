<script lang="ts">
import { defineComponent } from 'vue'
import BannerVideo from '@/components/HomeView/BannerVideo/BannerVideo.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        BannerVideo
    }
})

</script>

<template>
    <div>
        <BannerVideo/>
    </div>
</template>
