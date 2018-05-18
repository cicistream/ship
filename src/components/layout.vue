<template>
  <div class="static-container">
    <div class="album" v-for="(album,index) in dataSource">
      <img :src="album.imgUrl" style="position:absolute;width: 100%;height: auto; min-height: 60%;">
      <div class="layout-des">
          <p>{{album.id}}</p>
          <p>{{album.des}}</p>
          <mt-button class="album-des" type="default" size="small">+ 关注</mt-button>
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
    }
  }
</script>
<style>
.static-container{
  columns: 2;
  column-gap: 0.3rem;
  padding:0.2rem;
  font-size: 14px;
  margin-bottom: 1rem;
  color: #88878a;
  text-align: left;
}
.album{
  height: 5.3rem;
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
  height: 40%;
  padding: 5px 10px;
}
.album-des{
  position: absolute;
  bottom: 10px;
  right: 30px;
}
</style>