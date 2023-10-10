<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LogoHomePage'
})
</script>

<template>
    <div class="logo-homepage">
        <img src="https://storage.googleapis.com/bucket-itep/itep_clan-logo.png" alt="">
    </div>
</template>

<style scoped>
.logo-homepage {
    height: 400px;
    width: 100%;
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: center;
}
</style>