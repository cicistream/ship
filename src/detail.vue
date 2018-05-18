<template>
  <div>
    <foot></foot>
    <mt-header title="图片详情" style="background-color: #f8f8f8;color: black">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button>
          <i v-if="hasCollect" class="iconfont" style="font-size: 18px; margin-right: 8px;">&#xe736;</i>
          <i v-else class="iconfont" style="font-size: 18px; margin-right: 8px;">&#xe735;</i>
        </mt-button>
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <img class="imgShow" v-lazy='detailImg.imgUrl'></img>
      <div v-if='detailImg.des' class="picInfo">
        <p class="picDesDetail">{{detailImg.des}}</p>
        <!-- <i class="iconfont">&#xe736;</i>
        <span>20</span>
        <i class="iconfont">&#xe83b;</i>
        <span>3</span> -->
      </div>
      <div class="owner">
        <img @click="toHisZone(detailImg.author)" class="portrait" v-lazy="detailImg.portrait">   <span>{{detailImg.id}}</span><br>
        <img @click="toAlbum(detailImg.album)" class="albumPic" v-lazy="detailImg.portrait">   <span>{{detailImg.name}}</span>
      </div>
    </div>
    <div class="morePic">
      <p class="moreLike">推荐喜欢</p>
      <water :dataSource="morePic"></water>
    </div>
  </div>
</template>
<script>
  import { Header } from 'mint-ui';
  import { Lazyload } from 'mint-ui';
  import foot from './components/foot';
  import water from './components/water';
  export default{
    name: 'detail',
    components: {
      Header,
      foot,
      Lazyload,
      water
    },
    mounted() {
    this.getPost(this.$route.params.id);
    },
    watch: {
    '$route' (to, from) {
        if(to.name === 'detail'){
          this.getPicDetail(to.params.id);
        }
      }
    },
    data(){
      return{
        detailImg: {},
        hasCollect: 'true',
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
    methods:{
      getPicDetail(id){
        this.$http.get(`detail/${id}`).then((response) => {
            if(response.data.code === 0){
                this.detailImg = response.data.pic;
            }
        });
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