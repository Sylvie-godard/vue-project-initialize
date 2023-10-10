<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HeaderHome',
})
</script>

<template>
    <header class="HeaderHome">
        <nav class="HeaderHome__nav">
            <router-link class="HeaderHome__link" to="/">Accueil</router-link>
            <router-link class="HeaderHome__link" to="/about">Qui sommes nous</router-link>
            <img src="https://storage.googleapis.com/bucket-itep/itep_clan-logo.png" alt="Logo" class="HeaderHome__logo" />
            <router-link class="HeaderHome__link" to="/planning">Planning</router-link>
            <router-link class="HeaderHome__link" to="/contact">Nous contacter</router-link>
        </nav>
    </header>
</template>

<style lang="scss">
.HeaderHome {
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