<script lang="ts">
import { defineComponent } from 'vue';
import FounderBlock from '@/components/HomeView/FounderBlock/FounderBlock.vue';

export default defineComponent({
    components: { FounderBlock },
    setup() {
        const founders = [
            {
                className: '',
                name: '4everLongomo',
                src: 'https://storage.googleapis.com/bucket-itep/JoeLongomo.png',
                text: 'Caramels tootsie roll halvah pudding powder liquorice pastry powder tart. Bear claw caramels jujubes marzipan cheesecake sweet roll wafer toffee. Pudding cookie donut soufflé dessert jelly chupa chups.',
            },
            {
                className: 'BlockFounders__gap-top',
                name: 'Skinny',
                src: 'https://storage.googleapis.com/bucket-itep/Skinny.png',
                text: 'Caramels tootsie roll halvah pudding powder liquorice pastry powder tart. Bear claw caramels jujubes marzipan cheesecake sweet roll wafer toffee. Pudding cookie donut soufflé dessert jelly chupa chups.',
            },
        ];

        return {
            founders,
        }
    }
})
</script>

<template>
    <div class="BlockFounders">
        <FounderBlock
            v-for="founder in founders"
            :key="founder.name"
            :class="founder.className"
            :src="founder.src"
            :name="founder.name"
            :text="founder.text"
        />
    </div>
</template>

<style lang="scss">
.BlockFounders {
    align-items: flex-start;
    display: flex;
    justify-content: space-around;
    width: 100%;

    &__gap-top {
        margin-top: 10rem;
    }


}
</style>