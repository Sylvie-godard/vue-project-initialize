<script lang="ts">
import { defineComponent } from 'vue';
import ItepGroup from '@/assets/images/itep-group.jpg'

export default defineComponent({
    name: 'DescriptionHomeBlock',
    setup() {
        return {
            ItepGroup
        }
    }
})
</script>

<template>
    <div class="DescriptionHomeBlock">
        <div class="DescriptionHomeBlock__text-wrapper">
            <p>LES INSCRIPTIONS SONT OUVERTES!</p>
            <p>ATELIER DE DÉVELOPPEMENT MENTAL ET PRATIQUE FREESTYLE HIP HOP</p>
            <p>DEUX DIMANCHES PAR MOIS</p>
            <p>CRÉNEAUX LIBRE EN SEMAINE</p>
            <p>NIVEAU INTERMEDIAIRE/AVANCÉS</p>
            <p>SERIEUX ET MOTIVÉ ONLY!</p>
            <p>INTERESSÉ?</p>
            <p>CONTACTEZ NOUS!</p>
        </div>
        <div class="DescriptionHomeBlock__image-wrapper">
            <img :src="ItepGroup" alt="itepGroup" class="DescriptionHomeBlock__image">
        </div>
    </div>
</template>


<style lang="scss">
.DescriptionHomeBlock {
    align-items: center;
    color: black;
    display: flex;
    height: 40rem;
    justify-content: space-around;
    text-align: center;
    margin-top: 10rem;

    @media (max-width: 767px) {
        width: 80%;
    }

    &__image-wrapper {
        height: 100%;
    }

    &__image {
        object-fit: cover;
        height: 100%;
    }

    &__text-wrapper {
        background-color: rgb(222,199,160);
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }
}
</style>