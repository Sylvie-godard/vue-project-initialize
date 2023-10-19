<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import isMobile from '@/plugin/BrowserInfo';
import { useBrowserInfo } from '@/plugin/useBrowserInfo';
import MenuApp from '@/components/Common/MenuApp/MenuApp.vue';

export default defineComponent({
    name: 'BannerVideo',
    computed: {
        isMobile() {
            return isMobile
        }
    },
    components: { MenuApp },
    setup() {
        const isMobile = ref(useBrowserInfo())

        const getIsMobile = computed(() => {
            return isMobile.value;
        })

        return {
            getIsMobile
        }
    }
})
</script>

<template>
    <div class="BannerVideo">
        <video
            class="BannerVideo__video"
            ref="video"
            src="https://storage.googleapis.com/bucket-itep/itep_home_page_slider-2.mp4"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
            @contextmenu.prevent
        ></video>
        <MenuApp />
    </div>

</template>

<style lang="scss">
.BannerVideo {
    overflow: hidden;
    width: 100%;

    &__video {
        filter: grayscale(100%);
        height: auto;
        width: 100%;
    }
}
</style>