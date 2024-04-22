<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import isMobile from '@/plugin/BrowserInfo';
import { useBrowserInfo } from '@/plugin/useBrowserInfo';
import MenuApp from '@/components/Common/MenuApp/MenuApp.vue';
import bannerVideo from '@/assets/videos/itep-banner.mp4'
export default defineComponent({
    name: 'BannerVideo',
    computed: {
        isMobile() {
            return isMobile
        }
    },
    components: { MenuApp },
    setup() {
        const video = ref<HTMLVideoElement | null>(null);

        const isMobile = ref(useBrowserInfo())

        const getIsMobile = computed(() => {
            return isMobile.value;
        })

        return {
            bannerVideo,
            getIsMobile,
            video
        }
    }
})
</script>

<template>
    <div class="BannerVideo">
        <video
            class="BannerVideo__video"
            ref="video"
            :src="bannerVideo"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
        ></video>
            <div class="BannerVideo__hook">
                <p>Ici tout est possible</p>
                <p>Itep</p>
                <div class="BannerVideo__line-itep"></div>
            </div>
        <MenuApp />
    </div>

</template>

<style lang="scss">
.BannerVideo {
    height: 100vh;
    overflow: hidden;
    width: 100%;

    @keyframes slideIn {
        from {
            margin-right: 100%;
            width: 0;
        }

        to {
            margin-left: 0;
            width: 120%;
        }
    }

    &__line-itep {
        animation: 3s none alternate slideIn;
        border-bottom: solid 2px white;
        margin-top: 1rem;
        width: 120%;
    }

    &__hook {
        align-items: center;
        color: white;
        display: flex;
        flex-direction: column;
        font-size: 30px;
        position: absolute;
        right: 40vw;
        top: 50vh;
    }

    &__video {
        height: 100%;
        object-fit: cover; /* Ajuste la vidéo pour remplir tout l'espace sans déformation */
        width: 100%;
    }
}
</style>