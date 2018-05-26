<template>
  <div class="container">
    <foot></foot>
    <mt-header title="图片详情" style="background-color: #f8f8f8;color: black">
      <div @click="routerBack" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <router-link to="/" slot="right">
        <mt-button>
          <i v-if="hasCollect" class="iconfont" style="font-size: 18px; margin-right: 8px;">&#xe736;</i>
          <i v-else class="iconfont" style="font-size: 18px; margin-right: 8px;">&#xe735;</i>
        </mt-button>
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <div style="background-color: #f8f8f8;">
      <img class="imgShow" :src="detailImg.imgUrl"></img>
      <div v-if='detailImg.des' class="picInfo">
        <p class="picDesDetail">{{detailImg.des}}</p>
      </div>
      <div class="owner">
        <img @click="toZone(detailImg.name)" class="portrait" :src="detailImg.authorUrl">   <span>{{detailImg.name}}</span><br>
        <img @click="toAlbum(detailImg.album)" class="albumPic" :src="detailImg.albumUrl">   <span>{{detailImg.collect.length}}</span>
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
    async created() {
    //this.getPost(this.$route.params.id);
    await this.getPicDetail(this.$route.params.id);
    },
    // watch: {
    // '$route' (to, from) {
    //     if(to.name === 'detail'){
    //       this.getPicDetail(to.params.id);
    //     }
    //   }
    // },
    data(){
      return{
        detailImg: [],
        hasCollect: 'true',
        morePic:[]
			}
    },
    methods:{
      getPicDetail(id){
        var date=new Date();
        var timer=date.getTime().toString();
        this.$http.get('/api/detail',{
          params:{
            id: this.$route.params.id,
            time: timer
          }
        }).then((res) => {
            if(res.data.code === 200){
                this.detailImg = res.data.data;
            }
        });
      },
      routerBack(){
        this.$router.go(-1);
      },
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