<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useBrowserInfo } from '@/plugin/useBrowserInfo';


export default defineComponent({
    name: 'BurgerMenu',
    setup() {
        const burgerMenuRef = ref<HTMLElement | null>(null);
        const isMobileTest = ref(useBrowserInfo());

        const test = computed(() => {
            return isMobileTest.value;
        });
        const handleBurgerClick = () => {
            if(!burgerMenuRef.value) {
                return;
            }

            burgerMenuRef.value.classList.toggle('active');
        }


        return {
            handleBurgerClick,
            burgerMenuRef,
            test
        }
    }
})
</script>

<template>
    <div class="BurgerMenu">
        <div ref="burgerMenuRef" class="BurgerMenu__burger" @click="handleBurgerClick">
            <span></span>
        </div>
        <div class="BurgerMenu__menu">

        </div>
    </div>
</template>

<style lang="scss">
.BurgerMenu {
    &__burger {
        height: 24px;
        margin-left: 5px;
        margin-top: 5px;
        position: absolute;
        top: 0;
        width: 32px;

        span {
            background-color: white;
            display: block;
            height: 4px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            transition: all 0.3s ease-in-out;

            &::before, &::after {
                background-color: white;
                content: '';
                height: 4px;
                position: absolute;
                width: 100%;
                transition: all 0.3s ease-in-out;
            }

            &::before {
                transform: translateY(-10px);
            }
            &::after {
                transform: translateY(10px);
            }
        }


    }

    &__burger.active {
        span {
            background-color: transparent;
            &::before, &::after {
                background-color: white;
            }

            &::before {
                transform: translateY(0) rotate(45deg);
            }

            &::after {
                transform: translateY(0) rotate(-45deg);
            }
        }
    }

    &__menu {
        background-color: white;
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        transition: all 0.3s ease-in-out;
        width: 100vw;
        z-index: 1;
    }
}
</style>