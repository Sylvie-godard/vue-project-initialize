<script lang="ts" setup>
import Logo from '@/assets/images/itep_clan-logo.png'
</script>

<template>
    <header class="HeaderMenu">
        <nav class="HeaderMenu__nav">
            <router-link class="HeaderMenu__link" to="/">Accueil</router-link>
            <router-link class="HeaderMenu__link" to="/about">Qui sommes nous</router-link>
            <router-link class="HeaderMenu__link" to="/">
                <img :src="Logo" alt="Logo" class="HeaderMenu__logo" />
            </router-link>
            <router-link class="HeaderMenu__link" to="/schedule-event">Planning</router-link>
            <router-link class="HeaderMenu__link" to="/contact">Nous contacter</router-link>
        </nav>
    </header>
</template>

<style lang="scss">
.HeaderMenu {
    border-bottom: solid 1px #fff;
    color: #fff;
    position: absolute;
    width: 100%;
    top: 0;

    &__link {
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 18px;
        transition: color 0.3s ease;

        &:hover {
            color: #eeae6e;
        }
    }
    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }

    &__logo {
        border-radius: 100px;
        background-color: white;
        max-width: 100px;
    }
}
</style>