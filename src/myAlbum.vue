<template>
  <div>
    <div class="zoneAlbums">
      <div class="no-list" v-if="!albumList.length">暂无收藏</div>
      <div v-else v-for="item in albumList" class="zoneAlbum" @click="toAlbum(item.id)">
          <img class="zoneAlbumShow" :src='item.authorUrl'>
          <div class="zoneAlbumDes">
            <p style="font-weight: bold;text-align: left;">{{item.name}}</p>
            <p style="text-align: left;">"{{item.des}}"</p>
            <span class="Anumber"><i class="iconfont">&#xe7ce;</i> {{item.hasPic.length}} </span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Lazyload,Indicator } from 'mint-ui';
  export default{
    name: 'myAlbum',
    components: {
      Lazyload,
      Indicator
    },
    mounted(){
      for(let i = 0; i <this.albums.length;i++){
      this.getAlbum(this.albums[i]);
      }
    },
    data(){
      return{
        albumList: []
      }
    },
    computed:{
      albums(){
        return this.$route.params.data;
      }
    },
    methods:{
      getAlbum(value){
        this.$http.get('/api/album',{params:{id: value}}).then((res)=>{
            console.log(res.data.data)
            this.albumList = this.albumList.concat(res.data.data);
          
        }).catch((e)=>{

        })
      },
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
    overflow: auto;
  }
  .zoneAlbumShow{
    max-width: 100%;
    z-index: -1;
  }
  .zoneAlbumDes{
    width: 100%;
    height: 1.8rem;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    padding: 5px;
  }
  .Anumber{
    position: absolute;
    bottom: 5px;
    right: 15px;
  }
  .Anumber .iconfont{
    color: red;
    font-size: 12px;
  }
</style>