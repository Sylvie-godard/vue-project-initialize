<script lang="ts">
import { defineComponent } from 'vue'
import BannerVideo from '@/components/HomeView/BannerVideo/BannerVideo.vue';
import DescriptionHomeBlock from '@/components/HomeView/DescriptionHomeBlock.vue';
import BlockFounders from '@/components/HomeView/BlockFounders/BlockFounders.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        BlockFounders,
        DescriptionHomeBlock,
        BannerVideo
    }
})

</script>

<template>
    <div>
        <BannerVideo/>
        <DescriptionHomeBlock />
        <BlockFounders />
    </div>
</template>

