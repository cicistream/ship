<template>
  <div>
      <foot></foot>
      <div class="myPanel">
        <mt-header v-if="isMy" class="top-header">
          <div slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
          <div slot="right">
            <mt-button @click="toggleAtt" v-if="hasAttention" size="small" type="danger">+ 关注</mt-button>
            <mt-button @click="toggleAtt" v-else size="small" type="danger">取消关注</mt-button>
          </div>
        </mt-header>
        <nav v-else class="operation">
            <i class="iconfont">&#xe6ae;</i>
            <i class="iconfont" style="color: crimson">&#xe6b9;</i>
            <i class="iconfont">&#xe74e;</i>
        </nav>
        <div class="userPanel">
          <img class="portrait" v-lazy='portrait'>
          <p style="font-size: 20px;font-weight: bold">{{name}}</p>
          <p>{{fans}} 粉丝 ></p>
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
	export default{
		name:'zone',
		components:{
      foot,
      Lazyload,
      Header
    },
    data(){
      return{
        hasAttention: 'false',
        name: 'cicistream',
        fans: 0,
        portrait: require('./assets/look.jpeg'),
        like: 10,
        album: 1,
        idol: 3
      }
    },
    methods:{
      isMy(){
        return this.$route.params.id === this.id;
      },
      toggleAtt(){
        return this.hasAttention = !this.hasAttention;
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
    margin-top: 0.2rem;
    min-height: 70vh;
    background-color: rgb(236,236,236);
  }
</style>