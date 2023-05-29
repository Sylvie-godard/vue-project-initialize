<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SimpleBanner'
})
</script>

<template>
<div class="SimpleBanner">
  <p class="SimpleBanner__title">COOK</p>
</div>
</template>

<style lang="scss">
.SimpleBanner {
  background-color: #F1F1F1;
  padding: 8rem;
  
  &__title {
    font-size: 72px;
    text-align: center;
  }
}
</style>