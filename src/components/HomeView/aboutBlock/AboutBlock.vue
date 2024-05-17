<script lang="ts" setup>
import ItepGroup from '@/assets/images/itep-group.jpg';

const img: ImgParallax = {
  url: ItepGroup,
  height: '630px',
  width: '48%'
}

</script>

<template>
  <div class="AboutBlock">
    <div class="AboutBlock__info">
      <h2>À propos de nous</h2>
      <p>Atelier de développement mental et pratique Freestyle Hip Hop</p>
      <p>Deux dimanches par mois</p>
      <p>1 créneau libre en semaine</p>
      <p>Accès cours intervenants gratuit</p>
      <p>Niveau intermédiaire/avancés</p>
      <p>Sérieux et motivés only</p>
      <p>Intéressé ?</p>
      <RouterLink to="/contact">Contactez-nous</RouterLink>
      <a href=""></a>
    </div>
    <div class="AboutBlock__img-container">
      <img id="aboutBlockImg" class="AboutBlock__img" :src="img.url"/>
    </div>
  </div>
</template>

<style lang="scss">
.AboutBlock {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;

  a {
    color: black;
  }

  h2 {
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    text-align: center;
  }

  &__info {
    align-items: center;
    background-color: #dec7a0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 30px;
    min-width: 340px;
    padding: 2rem;

    @media (max-width: 765px) {
      width: 100%;
    }
  }

  &__img-container {
    height: 630px;
    min-width: 340px;
    overflow: hidden;
    width: 48%;

    @media (max-width: 765px) {
      width: 100%;
    }
  }

  &__img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}
</style>