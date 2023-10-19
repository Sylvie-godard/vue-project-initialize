<script>

import { defineComponent } from 'vue';
import ButtonPrimary from '@/components/Common/Buttons/ButtonsPrimary/ButtonPrimary.vue';

export default defineComponent({
    components: { ButtonPrimary }
})
</script>

<template>
    <div class="BlockFounders">
        <div class="BlockFounders__founderBlock">
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
        <div class="BlockFounders__founderBlock BlockFounders__second-founder">
            <div class="photo">
                <img src="https://storage.googleapis.com/bucket-itep/Skinny.png" class="right-image" alt="Deuxième image">
                <h2 class="BlockFounders__founderBlock-title">Skinny</h2>

                <p class="BlockFounders__founderBlock-text">
                    Caramels tootsie roll halvah pudding powder liquorice pastry powder tart.
                    Bear claw caramels jujubes marzipan cheesecake sweet roll wafer toffee.
                    Pudding cookie donut soufflé dessert jelly chupa chups.
                </p>
            </div>
            <ButtonPrimary />
        </div>
    </div>
</template>

<style lang="scss">
.BlockFounders {
    align-items: flex-start;
    display: flex;
    justify-content: space-around;
    width: 100%;

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

    &__second-founder {
        margin-top: 10rem;
    }
}

.left-image {
    height: 30rem;
    object-fit: cover;
    width: 100%;
}

.right-image {
    height: 30rem;
    object-fit: cover;
    width: 100%;
}
</style>