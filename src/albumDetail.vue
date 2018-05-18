<template>
  <div class="container">
    <div style="background-color: #f8f8f8">
      <mt-header class="top-header">
        <div @click="goBack" slot="left">
          <mt-button icon="back">返回</mt-button>
        </div>
        <div slot="right">
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
            {{hasPictureList.length}} 张收藏
          </span>
        </div>
      </div>
    </div>
    <div class="no-list" v-if="!hasPictureList.length">暂无图片</div>
    <water v-else :dataSource="hasPictureList"></water>
  </div>
</template>
<script>
  import water from './components/water.vue'
  import { Header,Button } from 'mint-ui';
  export default{
    name: "album",
    components: {
      water,Header,Button
    },
    data(){
      return{
        album:{
          name: "相逢于海",
          des: "这是一首简单的小情歌，讲述两个鲸鱼相逢与茫茫海洋",
          author: "cici",
          authorUrl: require("./assets/me.jpg"),
        },
        hasPictureList: [
        {   
						id: "cicistream",
            name: "hua",
            des: '我想试试',
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/road.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "coco",
            name: "nian",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/us.jpg"),
						portrait: require("../src/assets/he.jpg")
					},
					{   
						id: "Kira",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/me.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/feng.jpeg"),
						portrait: require("../src/assets/pic.jpeg")
					},
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/hair.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/we.jpg"),
						portrait: require("../src/assets/logo.png")
					}
        ],
        hasAttention: 'true',
      }
    },
    methods:{
      toggleAtt(){
        return this.hasAttention = !this.hasAttention;
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