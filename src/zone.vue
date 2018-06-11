<template>
  <div>
      <foot v-if="isMy()"></foot>
      <div class="myPanel">
        <nav v-if="isMy()" class="operation">
            <mt-button @click="logout">logout</mt-button>
            <i @click="toNewAlbum" class="iconfont" style="color: crimson">&#xe6b9;</i>
            <router-link to="/set" replace class="iconfont">&#xe6ae;</router-link>
            <!-- <i class="iconfont">&#xe74e;</i> -->
        </nav>
        <mt-header v-else class="top-header">
          <div slot="left">
            <mt-button icon="back" @click="routerBack">返回</mt-button>
          </div>
          <div slot="right">
            <mt-button @click="toggleAtt" v-if="hasAttention" size="small" type="danger">+ 关注</mt-button>
            <mt-button @click="toggleAtt" v-else size="small" type="danger">取消关注</mt-button>
          </div>
        </mt-header>
        <div class="userPanel">
          <img class="my-portrait" :src='user.imgUrl'>
          <p style="font-size: 20px;font-weight: bold">{{zoneHost}}</p>
          <p @click="toFans()">{{user.fans.length}} 粉丝 ></p>
        </div>
        <div class="infoPanel">
          <router-link :to="{name: 'myAlbum', params: { data: user.albums}}" class="info">{{user.albums.length}}<br>画集</router-link>
          <router-link :to="{name: 'like', params: { data: user.likes}}" class="info">{{user.likes.length}}<br>喜欢</router-link>
          <router-link :to="{name: 'idol', params: { data: user.idols}}" class="info">{{user.idols.length}}<br>关注</router-link>
        </div>
        <router-view class="infoShow"></router-view>
      </div>
      <div class="showPanel"></div>
  </div>	
</template>
<script>
  import foot from './components/foot';
  import { Lazyload,Header,Button,Toast } from 'mint-ui';
  import layout from './components/layout.vue';
  import userInfo from './components/userInfo.vue';
	export default{
		name:'zone',
		components:{
      foot,
      Lazyload,
      Header,
      userInfo,
      Button,
      Toast
    },
    created(){
      if(userInfo.userId == ''){
        this.$router.push({name: "login"})
      }else{
        this.getZoneData(this.zoneHost);
      }
      // if(this.user.imgUrl==null){this.$router.push({name:"login"})}
    },
    data(){
      return{
        user: {},
        albumList:[],
        hasAttention: this.getAtt(),
        att: this.getattData()
      }
    },
    watch: {
      zoneHost: function(val){
        this.getZoneData(val);
        document.documentElement.scrollTop = 0;
      },
      hasAttention: function(){
        userInfo.data = res.data;
        this.getZoneData(this.zoneHost);
      }
    },
    computed:{
      zoneHost(){
        if(this.$route.params.name){
          userInfo.hisId = userInfo.userId
        }
        return userInfo.hisId;
      },
      
    },
    methods:{
      isMy(){
        return this.zoneHost === userInfo.userId;
      },
      getZoneData(value){
        this.$http.get('/api/zone',{params:{name: value}}).then((res)=>{
          if(res.data.code === 200){
            this.user = res.data.data;
          }
        }).catch((e)=>{

        })
      },
      toggleAtt(){
        this.hasAttention = !this.hasAttention;
        this.getattData();
        this.$http.get('/api/zone/att',{params:{name: userInfo.data.name,idol: this.zoneHost,att: this.att}}).then((res)=>{
          if(res.data.code == 200){
            Toast("操作成功!");
            this.$nextTick(function () {
              
            })
          }
        })
      },
      getAtt(){
        if(userInfo.data.idols.indexOf(this.zoneHost) != -1){
          return true;
        } else {
          return false;
        }
      },
      getattData(){
        if(this.hasAttention == true){
          this.att = 1;
        }else{
          this.att = 0;
        }
      },
      routerBack(){
        this.$router.push({name: "home"});
      },
      toFans(){
        this.$router.replace({name:'fans',params:{data: this.user.fans}});
      },
      toNewAlbum(){
        this.$router.replace({name:'newAlbum',params:{id: this.zoneHost}});
      },
      logout(){
        userInfo.log = 'false' ;
        this.$router.push({name:"login"});
      }
    }
	}
</script>
<style>
  .myPanel{
    font-size: 14px;
  }
  .myPanel .operation{
    text-align: right;
    padding: 0.2rem 0.3rem;
    word-spacing: 0.4rem;
  }
  .myPanel .userPanel{
    text-align: left;
    padding: 0.2rem 0.4rem;
    line-height: 1.2rem;
  }
  .userPanel p{
    padding-left: 2.3rem;
  }
  .myPanel .my-portrait{
    border-radius: 999px;
    width: 2.1rem;
    height: 2.1rem;
    position: absolute;
  }
  .myPanel .infoPanel{
    display: flex;
    justify-content: space-around;
  }
  .myPanel .infoPanel router-link-active{
    color: aliceblue;
    background-color: #f8f8f8;

  }
  .myPanel .info{
    color: black;
    text-decoration: none;
    padding: 0.1rem 1.2rem;
    border-radius: 0.1rem;
  }
  .myPanel .router-link-active{
    background-color: #f8f8f8;
  }
  .myPanel .infoShow{
    padding: 5px 7px;
    margin-top: 0.2rem;
    min-height: 70vh;
    background-color: rgb(236,236,236);
  }
</style>