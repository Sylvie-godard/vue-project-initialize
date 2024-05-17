<script lang="ts" setup>
import { ref } from 'vue'
const burgerMenuRef = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);

const handleBurgerClick = () => {
    if(!burgerMenuRef.value) {
        return;
    }

    isMenuOpen.value = !isMenuOpen.value;
    burgerMenuRef.value.classList.toggle('active');
}
</script>

<template>
    <div class="BurgerMenu">
        <div ref="burgerMenuRef" class="BurgerMenu__burger" @click="handleBurgerClick">
            <span></span>
        </div>
        <Transition name="BurgerMenu__menu-transition">
        <div v-if="isMenuOpen" class="BurgerMenu__menu">
            <a href="">Accueil</a>
            <a href="">Qui sommes nous</a>
            <a href="">Planning</a>
            <a href="">Nous contacter</a>
        </div>
        </Transition>
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
        z-index: 99;

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
                background-color: black;
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
        align-items: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        transition: all 0.3s ease-in-out;
        width: 100vw;
        z-index: 1;

        a {
            border-top: solid 1px black;
            color: black;
            text-align: center;
            text-decoration: none;
            width: 100%;
            padding: 15px 0;
        }
    }

    &__volume-transition-enter-from,
    &__menu-transition-enter-active,
    &__volume-transition-leave-to {
        transform: translateY(-100%);
    }

    &__menu-transition-leave-active {
        opacity: 0;
        transform: translateY(-100%);
    }
}
</style>