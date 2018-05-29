<template>
  <div class="container">
    <div style="background-color: #f8f8f8">
      <mt-header class="top-header">
        <div @click="routerBack" slot="left">
          <mt-button icon="back">返回</mt-button>
        </div>
        <div v-if="myAlbum" slot="right">
          <p @click="toUpload" class="iconfont" style="color: crimson;font-size: 18px;margin-right: 10px;display: inline-block;">&#xe6b9;</p>
          <mt-button @click="deletAlbum" size="small" type="danger">删除画板</mt-button>
        </div>
        <div v-else slot="right">
            <mt-button @click="toggleAtt" v-if="hasAttention" size="small" type="danger">+ 关注</mt-button>
            <mt-button @click="toggleAtt" v-else size="small" type="danger">取消关注</mt-button>
          </div>
      </mt-header>
      <div class="album-det">
        <p class="album-title">{{album.name}}</p>
        <div class="album-des">{{album.des}}</div>
        <div class="moreAlbumDetail">
          <span @click="toZone(album.author)">
            <img :src="album.authorUrl" class="authorHeader">
            {{album.author}}
          </span>
          <span>
            {{album.hasPic.length}} 张收藏
          </span>
        </div>
      </div>
    </div>
    <div class="no-list" v-if="!album.hasPic.length">暂无图片</div>
    <water style="padding: 5px;" v-else :dataSource="album.hasPic"></water>
  </div>
</template>
<script>
  import water from './components/water.vue'
  import { Header,Button } from 'mint-ui';
  import userInfo from './components/userInfo.vue'
  export default{
    name: "album",
    components: {
      water,Header,Button
    },
    async mounted(){
      document.documentElement.scrollTop = 0;
      let id = this.$route.params.id;
      await this.getAlbum(id);
    },
    data(){
      return{
        album:{
        }
      }
    },
    computed:{
      myAlbum(){
        if(this.album.author === userInfo.userId){
          return 'true';
        }
          return 'false';
        },
    },
    methods:{
      toggleAtt(){
        return this.hasAttention = !this.hasAttention;
      },
      routerBack(){
        this.$router.go(-1);
      },
      deletAlbum(){
        
      },
      getAlbum(value){
        this.$http.get('/api/album',{params:{id: value}}).then((res)=>{
        if(res.data.code === 200){
          console.log(res.data.data)
          this.album = res.data.data;
        }
        }).catch((e)=>{

        })
      },
      toUpload(){
        this.$router.push({name: 'upload',params:{id: this.album.id}})
      }
    }
  }
</script>
<style>
  .album-det{
    padding: 0 10px;
  }
  .album-title{
    font-size: 18px;
    font-weight: bold;
    line-height: 2.5rem;
  }
  .album-des{
    height: 2rem;
    border-bottom: 1px solid #cecece;
    margin-bottom: 10px;
  }
  .moreAlbumDetail{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }
  .authorHeader{
    width: 30px;
    height: 30px;
    border-radius: 99px;
  }
</style>