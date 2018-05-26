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
          <img class="portrait" v-lazy='user.imgUrl'>
          <p style="font-size: 20px;font-weight: bold">{{zoneHost}}</p>
          <p @click="toFans">{{user.fans.length}} 粉丝 ></p>
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
  import { Lazyload,Header,Button } from 'mint-ui';
  import layout from './components/layout.vue';
  import userInfo from './components/userInfo.vue';
	export default{
		name:'zone',
		components:{
      foot,
      Lazyload,
      Header,
      userInfo,
      Button
    },
    async mounted(){
      await this.getZoneData("cicistream");
    },
    data(){
      return{
        hasAttention: 'false',
        user: {}
      }
    },
    computed:{
      zoneHost(){
        if(!userInfo.hisId){userInfo.hisId = userInfo.userId}
        return userInfo.hisId;
      }
    },
    methods:{
      isMy(){
        return this.zoneHost === userInfo.userId;
      },
      getZoneData(value){
        this.$http.get('/api/zone',{params:{name: value}}).then((res)=>{
          if(res.data.code === 200){
            var idols = res.data.data.idols;
            for(let i = 0;i<idols.length;i++){
              if(idols[i]==this.zoneHost){
                this.hasAttention = 'true';
              }
            }
            this.user = res.data.data;
          }
        }).catch((e)=>{

        })
      },
      toggleAtt(){
        this.checkIn();
        return this.hasAttention = !this.hasAttention;
      },
      routerBack(){
        this.$router.go(-1);
      },
      toFans(){
        this.$router.replace({name:'fans',params:{id: this.zoneHost}});
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
  .myPanel .portrait{
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