<script lang="ts">
import { defineComponent } from 'vue'
import DescriptionHomeBlock from '@/components/HomeView/DescriptionHomeBlock.vue';
import BannerVideo from '@/components/HomeView/BannerVideo/BannerVideo.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        BannerVideo,
        DescriptionHomeBlock,
    }
})

</script>

<template>
    <div>
        <BannerVideo />
        <DescriptionHomeBlock />
    </div>
</template>

