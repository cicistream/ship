<template>
  <div class="static-container">
    <div class="album" v-for="(album,index) in dataSource" @click="toAlbum(album.id)">
      <img :src="album.hasPic[0].imgUrl" style="position:absolute;width: 100%;height: auto; min-height: 60%;">
      <div class="layout-des">
          <p>{{album.name}}</p>
          <p>{{album.des}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { Button,LazyLoad } from 'mint-ui';
  export default{
    name: "layout",
    components:{
      Button,LazyLoad
    },
    props:{
      dataSource: Array,
      radius: String
    },
    data(){
      return {
      }
    },
    methods:{
    }
  }
</script>
<style>
.static-container{
  columns: 2;
  column-gap: 0.3rem;
  font-size: 14px;
  margin-bottom: 1rem;
  color: #88878a;
  text-align: left;
}
.album{
  height: 5rem;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
}
.layout-des{
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  padding: 5px 10px;
}
</style>