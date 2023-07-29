<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleHome'
})
</script>

<template>
  <div class="TitleHome">
      <p class="TitleHome__title">Titre</p>
      <p class="TitleHome__text">Ceci est votre section Texte. C’est l'endroit idéal pour ajouter une description de
        votre activité, de votre site ou entreprise. Utilisez cet espace pour ajouter des informations pour vos
        utilisateurs, décrivez votre vision ou votre parcours et ce qui vous définit. Pensez à ajouter une image
        pour rendre la présentation plus vivante.</p>
  </div>
</template>

<style lang="scss">
.TitleHome {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 15rem;

  &__text {
    line-height: 2rem;
    text-align: center;
  }

  &__title {
    font-size: 72px;
    margin-bottom: 2rem;
  }
}
</style>