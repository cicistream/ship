<template>
  <div>
      <mt-header title="设置" class="top-header">
        <router-link to="/zone" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" @click="postSet">保存</mt-button>
      </mt-header>
      <div style="padding: 20px 0;">
        <img :src="imgUrl" style=" width: 200px;height: 200px;border-radius: 99px;">
        <p class="list-head" style="padding: 20px 0;">账号信息<i style="color: red;">*</i></p>
        <mt-field disabled label="用户名" placeholder="username" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="password" type="password" v-model="password"></mt-field>
      </div>
  </div>
</template>
<script>
  import { Actionsheet } from 'mint-ui';
  import { Header } from 'mint-ui';
  import userInfo from './components/userInfo.vue'
  import { Field,Toast } from 'mint-ui';

  export default{
    name: "set",
    components: {
      Header,Actionsheet,Field,userInfo,Toast
    },
    data(){
      return{
        name: userInfo.userId,
        imgUrl: userInfo.data.imgUrl,
        password: userInfo.data.password
      }
    },
    computed:{
      username:{
        set(value){
          this.name = value;
        },
        get(){
          return this.name;
        }
      }
    },
    methods:{
      postSet(){
        if(this.username&&this.password&&this.imgUrl){
          userInfo.data.userId = this.username;
          userInfo.data.password = this.password;
          userInfo.data.imgUrl = this.imgUrl;
        }else {
          Toast("所有信息不得为空！");
        }
        this.$http.get('/api/user',{
          params:{
            name:this.username,
            pwd:this.password,
            imgUrl:this.imgUrl
          }
        }).then((res)=>{
          this.$router.push({name:'home'})
        })
      }
    }
  }
</script>
<style>
  .list-head{
    font-size: 16px;
    color: lightslategray;
  }
</style>