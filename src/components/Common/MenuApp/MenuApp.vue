<script lang="ts" setup>
import BurgerMenu from '@/components/Common/MenuApp/BurgerMenu/BurgerMenu.vue';
import { computed, ref } from 'vue';
import { useBrowserInfo } from '@/plugin/useBrowserInfo';
import HeaderMenu from '@/components/Common/MenuApp/HeaderMenu/HeaderMenu.vue';

const isMobile = ref(useBrowserInfo())

const getIsMobile = computed(() => {
  return isMobile.value;
})

</script>

<template>
    <div class="MenuApp">
        <BurgerMenu v-if="getIsMobile" />
        <HeaderMenu v-else/>
    </div>
</template>
