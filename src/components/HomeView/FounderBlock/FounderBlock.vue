<script lang="ts">
import ButtonPrimary from '@/components/Common/Buttons/ButtonsPrimary/ButtonPrimary.vue';
import { defineComponent, type PropType } from 'vue';
import type { IFounder } from '@/components/HomeView/types/homeView-types';

export default defineComponent({
    name: 'FounderBlock',
    components: {
        ButtonPrimary,
    },
    props: {
        founder: {
            type: Object as PropType<IFounder>,
            required: true,
        },
    },
});

</script>
<template>
    <div class="FounderBlock">
        <div class="FounderBlock__photo">
            <video
                muted
                loop
                autoplay
                playsinline
                preload="metadata"
                :src="founder.src"
                class="FounderBlock__image"
            />
            <h2 class="FounderBlock__title">{{ founder.name }}</h2>

            <p class="FounderBlock__text">
                {{ founder.text }}
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
