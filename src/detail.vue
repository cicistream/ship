<template>
  <div>
    <foot></foot>
    <mt-header title="图片详情" style="background-color: #f8f8f8;color: black">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="container">
      <img class="imgShow" :src='picUrl'></img>
      <div class="picInfo">
        <p v-if='picDes' class="picDesDetail">{{picDes}}</p>
        <i class="iconfont">&#xe736;</i>
        <span>20</span>
        <i class="iconfont">&#xe83b;</i>
        <span>3</span>
      </div>
      <div class="owner">
        <img class="portrait" v-lazy="picPortrait">   <span>{{picAuthor}}</span><br>
        <img class="albumPic" v-lazy="albumPic">   <span>{{picAlbum}}</span>
      </div>
    </div>
    <div class="morePic">
      <p class="moreLike">推荐喜欢</p>
      <div class="stream">
          <div v-for="pic in morePic">
              <div class="picItem" @click='toDetail(pic.id)'>
                <img class="pic" v-lazy="pic.imgUrl">
                <p v-if='pic.des' class="picDes">{{pic.des}}</p>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Header } from 'mint-ui';
  import { Lazyload } from 'mint-ui';
  import foot from './components/foot';
  export default{
    name: 'detail',
    components: {
      Header,
      foot,
      Lazyload
    },
    data(){
      return{
        detailImg: '',
        picDes: '尝试',
        picAuthor: 'cicistream',
        picAlbum: '萌宠',
        picUrl: require('./assets/pet.jpeg'),
        albumPic: require('./assets/pet.jpeg'),
        picPortrait: require('./assets/me.jpg'),
        morePic:[
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
				   ]
			}
    },
    computed: {
      detailValue: function(value){
        this.detailImg=this.$router.params.picId;
        return this.detailImg;
      }
    }
  }
</script>
<style scoped>
  .picInfo,.owner{
    padding: 0.2rem 0.4rem;
    text-align: left;
    word-spacing: 0.15rem;
  }
  .picDesDetail{
    line-height: 1rem;
  }
  .imgShow{
    max-width: 100%;
  }
  .owner{
    font-size: 14px;
    line-height: 1.2rem;
  }
  .portrait,.albumPic{
    width: 1rem;
    height: 1rem;
    border-radius: 999px;
    vertical-align: middle;
  }
  .albumPic{
    border-radius: 0.1rem;
  }
  .morePic{
    background-color: #f8f8f8;
  }
  .moreLike{
    text-align: left;
    padding: 0.2rem 0.4rem;
  }
</style>