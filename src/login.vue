<template>
  <div class="container">
    <p class="logoText">SHIP login</p>
    <mt-field label="用户名" placeholder="username" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="password" type="password" v-model="password"></mt-field>
    <div class="logBut">
      <mt-button @click="insertUser">注册</mt-button>
      <mt-button @click="checkUser">登录</mt-button>      
    </div>
  </div>
</template>
<script>
  import userInfo from './components/userInfo.vue'
  import { Field } from 'mint-ui';
  export default{
    name: "login",
    components:{
      Field
    },
    data(){
      return{
        username:"",
        password: ''
      }
    },
    methods:{
      checkUser(){
        if(this.username&&this.password){
          this.$http.get('/api/login',{params: { //请求参数  
          name : this.username ,
          pwd : this.password
          }}).then((res)=>{
          if(res.data.code == 200){
            userInfo.userId = this.username;
            userInfo.password = this.password;
            userInfo.log = 'true' ;
            this.$router.push({name:'home'});
          }
          else{
            alert(res.data.msg);
          }
        }).catch((e)=>{
         console.log(e)
      });
        }
        else{
          alert("请确认信息填写完成！");
        }
      },
      insertUser(){
        this.$http.get('/api/newUser',{
        params:{
            name: this.username,
            pwd: this.password
          }}).then((res)=>{
          if(res.data.code == 200){
            userInfo.userId = this.username;
            userInfo.password = this.password;
            userInfo.log = 'true' ;
            console.log(res.data.msg)
           // this.$router.push({name:'home'});
          }
        }).catch((e)=>{
         console.log(e)
      });
      }
    }
  }
</script>
<style>
  .logoText{
    line-height: 200px;
    font-size: 25px;
  }
  .logBut .mint-button--normal{
    padding: 0 40px;
    margin:40px 20px;
  }
</style>