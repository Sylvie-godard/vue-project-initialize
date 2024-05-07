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
    display: flex;
    height: 400px;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
    width: 100%;
}
</style>