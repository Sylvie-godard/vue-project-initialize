<script setup lang="ts">
</script>

<template>
  <div class="homePage">
    <p class="homePage__title">COOK</p>
    <p class="homePage__navigation">
      <router-link to="/foo">Accueil</router-link>
      <router-link to="/bar">Page Vierge</router-link>
    </p>
  </div>
</template>

<style lang="scss">
.homePage {
  &__title {
    border-bottom: solid 1px black;
    display: flex;
    font-family: raleway, Arial, serif;
    font-size: 40px;
    justify-content: center;
    margin: auto;
    padding: 3rem;
    width: 70%;
   }

  &__navigation {
    display: flex;
    gap: 3rem;
    justify-content: center;
    padding-top: 1rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
