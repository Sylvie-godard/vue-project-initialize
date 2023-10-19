<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DescriptionHomeBlock',
    setup() {
        return {}
    }
})
</script>

<template>
    <div class="DescriptionHomeBlock">
        <p>LES INSCRIPTIONS SONT OUVERTES!</p>
        <p>ATELIER DE DÉVELOPPEMENT MENTAL ET PRATIQUE FREESTYLE HIP HOP</p>
        <p>DEUX DIMANCHES PAR MOIS</p>
        <p>CRÉNEAUX LIBRE EN SEMAINE</p>
        <p>NIVEAU INTERMEDIAIRE/AVANCÉS</p>
        <p>SERIEUX ET MOTIVÉ ONLY!</p>
        <p>INTERESSÉ?</p>
        <p>CONTACTEZ NOUS!</p>
    </div>
</template>


<style lang="scss">
.DescriptionHomeBlock {
    align-items: center;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    width: 50%;
    @media (max-width: 767px) {
        width: 80%;
    }
}
</style>