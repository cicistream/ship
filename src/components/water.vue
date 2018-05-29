<template>
    <div class="stream">
        <div v-for="pic in dataSource" class="picItem">
          <img class="pic" :src="pic.imgUrl" @click='toDetail(pic.id)'>
          <p v-if='pic.des' class="picDes">{{pic.des}}</p>
          <div class="picInfo">
            <i class="iconfont">&#xe736;</i>
            <p>{{pic.like}}</p>
            <i class="iconfont">&#xe83b;</i>
            <p>1</p>
          </div>
          <div class="owner">
            <img class="portrait" v-lazy="pic.authorUrl" @click="toZone(pic.name)">
            <div class="picName">
              <p class="picOwner">{{pic.name}}</p>
            </div>
          </div>
          <br>
        </div>
    </div>
</template>
<script>
  export default{
    name: "water",
    components:{
     
    },
    props:{
      dataSource: Array
    },
    data(){
      return{

      }
    },
    methods:{
      
    }
  }
</script>
<style>
  .stream{
    columns: 2;
    column-gap: 0.3rem;
    font-size: 14px;
    margin-bottom: 1rem;
    color: #88878a;
    text-align: left;
  }
  .stream p{
    display: inline-block;
  }
  .stream .pic{
    width: 100%;
    height: auto;
  }
  .stream .portrait{
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 999px;
  }
  .picItem{
    height:100%;
    overflow: auto;
    background-color: #fff;
    border-radius: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .picDes{
    color: #202020;
    font-size: 12px;
    padding-left: 0.3rem;
    height: 0.5rem;
  }
  .picInfo{
    padding-left: 0.32rem;
  }
  .picInfo .iconfont{
    font-size: 12px;
  }
  .picInfo p{
    margin-right: 0.2rem;
  }
  .owner{
    padding-left: 0.2rem;
  }
  .owner .picName{
    display: inline-block;
    line-height: 0.5rem;
  }
  .picName p{
    display: block;
  }
  .picAlbum{
    color: #454545;
  }
</style>