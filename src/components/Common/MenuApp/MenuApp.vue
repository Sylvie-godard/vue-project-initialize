<script lang="ts">
import BurgerMenu from '@/components/Common/MenuApp/BurgerMenu/BurgerMenu.vue';
import { computed, defineComponent, ref } from 'vue/dist/vue';
import { useBrowserInfo } from '@/plugin/useBrowserInfo';
import isMobile from '@/plugin/BrowserInfo';
import HeaderMenu from '@/components/Common/MenuApp/HeaderMenu/HeaderMenu.vue';

export default defineComponent({
    name: 'MenuApp',
    computed: {
        isMobile() {
            return isMobile
        }
    },
    components: { HeaderMenu, BurgerMenu },
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
    <div class="Menu">
        <BurgerMenu v-if="getIsMobile" />
        <HeaderMenu v-else/>
    </div>
</template>
