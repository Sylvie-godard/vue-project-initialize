<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
    name: 'ImgParallax',
    props: {
        imageParallax: {
            type: Object as PropType<ImgParallax>,
            required: true,
        }
    },
})
</script>


<template>
    <div :style="{
        backgroundImage: `url(${imageParallax.url})`,
        width: `${imageParallax.width}px`,
        height: `${imageParallax.height}px`,
    }" class="parallax"></div>
</template>

<style scoped>
.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>