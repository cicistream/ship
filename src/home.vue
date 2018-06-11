<template>
	<div class="homePage" @click="init">
    <shipHead></shipHead>		
		<foot></foot>
		<div class="homeContent">
        <div class="stream" v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <div v-for="pic in homeSource" class="picItem">
          <img class="pic" v-lazy="pic.imgUrl" @click='toDetail(pic.id)'>
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
        <div v-if="!next" class="picItem" @click="next=true">
          <p style="line-height: 40px;padding-left: 20px;">next</p>
          <br>
        </div>
    </div>
		</div>
	</div>
</template>
<script>
	import shipHead from './components/shipHead';
  import foot from './components/foot';
  import { Lazyload } from 'mint-ui';
  import water from './components/water.vue'
  import userInfo from "./components/userInfo.vue";
  import { InfiniteScroll,Toast } from 'mint-ui';
	export default{
		name:'home',
		components:{
			shipHead,
      foot,
      Lazyload,
      water,
      userInfo,
      InfiniteScroll,Toast
    },
    async mounted(){
      document.documentElement.scrollTop = 0;
      await this.getHome(this.page);
    },
    watch:{
      // homeSource:{
      //   handler(){
      //     if(this.homeSource.length>=30){
      //     this.homeSource = [];
      //     document.documentElement.scrollTop = 0;
      //     }
      //   }
      // }
    },
		data(){
			return{
        page: 0,
        homeSource: [],
        collection: 0,
        next:true,
      }
    },
    methods: {
      getHome: function(value){
        this.$http.get('/api/home',{
          params:{
            page: value
          }
        }).then((res)=>{
          if(res.data){
            if(res.data.data.length == 0 ){ Toast("已无更多图片！"); return }
            console.log(res.data.data)
            for(let i =0;i<res.data.data.length;i++){
              res.data.data[i].imgUrl = res.data.data[i].imgUrl+"-shipHome";
            }
            this.homeSource = this.homeSource.concat(res.data.data);
            if(this.homeSource.length%20==0){
              this.next = false;
            }
          }
        }).catch((e)=>{
         console.log(e)
      })
      }, 
      init(){
        if(!userInfo.log){
          this.$router.push({name: 'login'})
        }
      },
      async loadMore() {
        if(this.next){
          this.loading = true;
          this.page++;
          await this.getHome(this.page);
          this.loading = false;
        }
      }
    }
	}
</script>
<style>
  .homePage{
    background-color: #ececec;
    width: 100vw;
  }
  image[lazy=loading] {
   width: 100%;
   height: 300px;
  }
  .homeContent{
    padding: 0 5px;
  }
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