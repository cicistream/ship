<template>
  <div>
    <div class="zoneAlbums">
      <div v-for="item in albums" class="zoneAlbum">
          <img class="zoneAlbumShow" v-lazy='item.imgUrl'>
          <div class="zoneAlbumDes">
            <span style="font-weight: bold">{{item.des}}</span>
            <span>{{item.quantity}}</span>
          </div>
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
    position: relative;
    overflow: hidden;
  }
  .zoneAlbumShow{
    max-width: 100%;
    z-index: -1;
  }
  .zoneAlbumDes{
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
</style>