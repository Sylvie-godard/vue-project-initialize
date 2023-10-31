<script lang="ts">
import ButtonPrimary from '@/components/Common/Buttons/ButtonsPrimary/ButtonPrimary.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FounderBlock',
    components: {
        ButtonPrimary,
    },
    props: {
        src: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
});

</script>
<template>
    <div class="FounderBlock">
        <div class="FounderBlock__photo">
            <img :src="src" class="FounderBlock__image" :alt="src">
            <h2 class="FounderBlock__title">{{ name }}</h2>

            <p class="FounderBlock__text">
                {{ text }}
            </p>

            <div class="FounderBlock__button">
                <ButtonPrimary />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.FounderBlock {
    box-shadow: 10px 5px 5px grey;
    padding-bottom: 5rem;
    width: 35%;
    
    @media (max-width: 767px) {
        width: 45%;
    }

    &__button {
        display: flex;
        align-items: center;
    }

    &__image {
        height: 30rem;
        object-fit: cover;
        width: 100%;
    }

    &__text {
        padding: 1rem;
    }

    &__title {
        padding: 1rem;
        margin-bottom: 2rem;
    }

    &__photo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}
</style>
