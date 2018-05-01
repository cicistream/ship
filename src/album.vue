<template>
  <div>
    <div class="zoneAlbums">
      <div v-for="item in albums" class="zoneAlbum">
          <img class="zoneAlbumShow" v-lazy='item.imgUrl'>
          <span style="font-weight: bold">{{item.des}}</span>
          <span>{{item.quantity}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { Lazyload } from 'mint-ui';
  export default{
    name: 'album',
    components: {
      Lazyload
    },
    data(){
      return{
        albums:[
          {
            imgUrl: require('./assets/he.jpg'),
            des: '关于他的故事',
            quantity: 20
          },
          {
            imgUrl: require('./assets/he.jpg'),
            des: '关于他的故事',
            quantity: 20
          }
        ]
      }
    }
  }
</script>
<style>
  .zoneAlbums{
    columns: 2;
    column-gap: 0.3rem;
    border-radius: 0.1rem;
  }
  .zoneAlbum{
    height: 6rem;
    background-color: #fff;
  }
  .zoneAlbumShow{
    
  }
</style>