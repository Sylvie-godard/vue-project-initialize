<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import BurgerMenu from '@/components/HomeView/BurgerMenu/BurgerMenu.vue';
import HeaderHome from '@/components/HomeView/HeaderHome/HeaderHome.vue';
import isMobile from '@/plugin/BrowserInfo';
import { useBrowserInfo } from '@/plugin/useBrowserInfo';

export default defineComponent({
    name: 'BannerVideo',
    computed: {
        isMobile() {
            return isMobile
        }
    },
    components: { BurgerMenu, HeaderHome },
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
            src="https://storage.googleapis.com/bucket-itep/itep_home_page_slider.mp4"
            muted
            loop
            autoplay
            playsinline
        ></video>
        <BurgerMenu v-if="getIsMobile" />
        <HeaderHome v-else class="BannerVideo__HeaderHome"/>

    </div>

</template>

<style lang="scss">
.BannerVideo {
    overflow: hidden;
    width: 100%;

    &__HeaderHome {
        @media (max-width: 767px) {
            display: none;
        }
    }

    &__video {
        filter: grayscale(100%);
        height: auto;
        width: 100%;
    }
}
</style>