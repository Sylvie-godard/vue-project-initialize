<script lang="ts">
import { defineComponent } from 'vue'
import DescriptionHomeBlock from '@/components/HomeView/DescriptionHomeBlock.vue';
import BlockFounders from '@/components/HomeView/BlockFounders/BlockFounders.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        BlockFounders,
        DescriptionHomeBlock,
    }
})

</script>

<template>
    <div>
        <DescriptionHomeBlock />
        <BlockFounders />
    </div>
</template>

