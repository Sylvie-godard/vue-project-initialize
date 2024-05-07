<script lang="ts">
import { defineComponent } from 'vue'
import DescriptionHomeBlock from '@/components/HomeView/DescriptionHomeBlock.vue';
import BannerVideo from '@/components/HomeView/BannerVideo/BannerVideo.vue';
import bannerVideo from '@/assets/videos/itep-banner.mp4'
import MenuApp from '@/components/Common/MenuApp/MenuApp.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
      MenuApp,
        BannerVideo,
        DescriptionHomeBlock,
    },
    setup() {
      return {
        bannerVideo,
      }
    }
})

</script>

<template>
    <div class="container-page">
      <MenuApp />
      <div class="sleep-video">
        <video
            class="BannerVideo__video"
            ref="video"
            :src="bannerVideo"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
        ></video>
      </div>

      <div class="container">
        Soufflé oat cake candy bonbon bonbon sugar plum tart muffin. Jelly beans pie soufflé oat cake candy canes sweet tiramisu. Candy canes tootsie roll bear claw candy canes lollipop donut chupa chups sesame snaps. Sesame snaps jujubes jelly chupa chups soufflé. Cupcake muffin muffin chocolate cake tiramisu. Jelly gummies chupa chups muffin apple pie. Marzipan tiramisu jelly beans powder topping jelly-o tiramisu donut marshmallow. Powder toffee shortbread gummi bears macaroon tart brownie candy. Carrot cake pudding danish dessert tart chupa chups gingerbread caramels. Pastry bonbon cupcake candy canes chocolate bar. Cake sweet pudding apple pie caramels. Jelly beans sweet candy canes caramels pudding. Chocolate bar cake dessert marshmallow chupa chups muffin wafer jelly.
        Halvah candy topping shortbread brownie shortbread. Chocolate candy sesame snaps oat cake apple pie croissant marzipan cookie cotton candy. Gummi bears brownie dessert topping brownie dragée candy canes macaroon. Powder cake gingerbread sesame snaps icing ice cream chocolate bar gingerbread. Tiramisu lemon drops cake danish wafer carrot cake. Topping sugar plum soufflé pastry cake ice cream brownie. Oat cake cake pudding powder gummi bears. Ice cream macaroon sweet roll donut lollipop pudding. Cake carrot cake fruitcake cupcake dessert lollipop cookie apple pie. Cake marzipan chocolate bar jelly beans lollipop pastry apple pie. Lemon drops dragée soufflé jujubes biscuit topping soufflé carrot cake lemon drops. Sweet halvah caramels gummies gingerbread. Jelly beans cake caramels candy canes sweet icing shortbread.
        Powder chocolate cake cake bear claw pie shortbread ice cream powder chupa chups. Shortbread jujubes cupcake tart gummi bears oat cake dessert. Sweet roll sugar plum sweet pastry jelly beans. Halvah tiramisu liquorice sweet roll marzipan halvah marzipan toffee. Caramels tootsie roll ice cream danish icing halvah halvah. Sweet roll toffee fruitcake chocolate cake liquorice marshmallow shortbread. Chocolate cake donut biscuit candy powder powder. Tiramisu caramels jujubes candy sweet roll pastry icing. Jelly pudding cake chocolate bar fruitcake. Cupcake chocolate cake donut tiramisu biscuit soufflé. Cake dragée candy jujubes croissant gummi bears. Tootsie roll chocolate pudding pastry muffin pie. Fruitcake chocolate candy canes pastry jelly fruitcake donut fruitcake.
        Oat cake tart muffin jelly-o marzipan icing cake gummies. Cookie bear claw marshmallow danish halvah chocolate cake. Candy canes chupa chups sesame snaps jelly halvah lemon drops biscuit apple pie. Tart danish jelly-o brownie cake sweet gingerbread. Sesame snaps halvah shortbread pie ice cream jelly. Marshmallow liquorice sweet jelly cake gummies cotton candy chocolate bar wafer. Donut pie tiramisu cheesecake chocolate bar. Caramels powder lemon drops powder donut chocolate. Lollipop apple pie soufflé sweet roll tart. Lemon drops cake biscuit cupcake pudding lollipop. Sesame snaps bonbon shortbread pie sesame snaps pie sweet. Liquorice cotton candy lemon drops powder topping sugar plum sweet.
        Jelly beans shortbread icing jelly beans dragée chupa chups fruitcake. Jelly beans jujubes candy canes fruitcake cookie biscuit jelly. Tiramisu jelly beans pie tootsie roll tiramisu shortbread pastry. Pie sweet ice cream pastry icing soufflé cake donut cupcake. Halvah powder chocolate bear claw sugar plum. Donut powder croissant shortbread carrot cake cheesecake macaroon cheesecake. Cake tart topping halvah candy canes oat cake. Cotton candy powder cupcake lollipop biscuit chocolate bar marzipan. Caramels chocolate donut bonbon cheesecake dessert icing shortbread. Danish brownie soufflé macaroon pie. Marzipan jujubes pastry pie macaroon lollipop tootsie roll. Dragée donut cupcake dragée oat cake cookie sweet halvah apple pie. Icing tiramisu jelly-o marzipan soufflé croissant jelly cake. Toffee candy sweet brownie danish.
      </div>
    </div>
</template>

<style>
.container-page {
  background-color: #eeae6e;
}

.container {
  margin-top: 100vh;
  background-color: pink;
}
.section {
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: relative;
  background-color: white;
  z-index: 2;
}

.section.one,
.section.three {
  background-color: blue;
}

.section.two {
  background: blue;
}

.sleep-video {
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: -20;
}

</style>

