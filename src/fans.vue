<template>
    <div class="container">
        <mt-header title="粉丝" class="top-header">
          <router-link to="/zone" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <div class="no-list" v-if="!FansList.length">暂无粉丝</div>
        <people style="padding-top: 10px;" v-else :dataSource="FansList"></people>
    </div>
  </template>
  <script>
    import people from './components/people.vue'
    import { Header } from 'mint-ui';
    export default{
      name: "fans",
      components: {
        people,Header
      },
      data(){
        return{
          FansList:[]
        }
      },
      async mounted(){
        for(let i = 0; i <this.Fans.length;i++){
          await this.getFans(this.Fans[i]);
        }
      },
      computed:{
        Fans(){
          return this.$route.params.data;
        }
      },
      methods:{
        getFans(value){
            this.$http.get('/api/zone/idol',{params:{name: value}}).then((res)=>{
              if(res.data.code === 200){
                console.log(res.data.data.name)
                this.FansList = this.FansList.concat(res.data.data);
              }
            }).catch((e)=>{

            })
          }
        }
      
    }
  </script>
  <style></style>
