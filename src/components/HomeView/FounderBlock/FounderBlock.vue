<script setup lang="ts">
</script>
<template>
    <div class="FounderBlock">
        <div class="photo">
            <img src="https://storage.googleapis.com/bucket-itep/JoeLongomo.png" class="left-image" alt="Première image">
            <h2 class="BlockFounders__founderBlock-title">4everLongomo</h2>
            <p class="BlockFounders__founderBlock-text">
                Caramels tootsie roll halvah pudding powder liquorice pastry powder tart.
                Bear claw caramels jujubes marzipan cheesecake sweet roll wafer toffee.
                Pudding cookie donut soufflé dessert jelly chupa chups.
            </p>
        </div>
        <button class="button-style">En savoir plus</button>
    </div>
</template>

<style lang="scss">
&__founderBlock {
    background-color: #eeae6e;
    box-shadow: 10px 5px 5px grey;
    height: 50rem;
    width: 35%;

    @media (max-width: 767px) {
        width: 45%;
    }
}

&__founderBlock-text {
    padding: 1rem;
}

&__founderBlock-title {
    padding: 1rem;
    margin-bottom: 2rem;
}
</style>
