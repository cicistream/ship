<template>
  <div>
      <foot v-if="isMy()"></foot>
      <div class="myPanel">
        <nav v-if="isMy()" class="operation">
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
          <img class="portrait" v-lazy='portrait'>
          <p style="font-size: 20px;font-weight: bold">{{zoneHost}}</p>
          <p @click="toFans">{{fans}} 粉丝 ></p>
        </div>
        <div class="infoPanel">
          <router-link to='/zone/myAlbum' class="info">{{album}}<br>画集</router-link>
          <router-link to='/zone/like' class="info">{{like}}<br>喜欢</router-link>
          <router-link to='/zone/idol' class="info">{{idol}}<br>关注</router-link>
        </div>
        <router-view class="infoShow"></router-view>
      </div>
      <div class="showPanel"></div>
  </div>	
</template>
<script>
  import foot from './components/foot';
  import { Lazyload,Header } from 'mint-ui';
  import layout from './components/layout.vue';
  import userInfo from './components/userInfo.vue';
	export default{
		name:'zone',
		components:{
      foot,
      Lazyload,
      Header,
      userInfo
    },
    data(){
      return{
        hasAttention: 'false',
        fans: 0,
        portrait: require('./assets/look.jpeg'),
        like: 10,
        album: 1,
        idol: 3
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
      toggleAtt(){
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