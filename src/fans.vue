<template>
    <div class="container">
        <mt-header title="粉丝" class="top-header">
          <router-link to="/zone" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <div class="no-list" v-if="!fansList.length">暂无粉丝</div>
        <people style="padding-top: 10px;" v-else :dataSource="fansList"></people>
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
          fansList:[
          {
             id: "cicistream",
             des: "hhh",
             imgUrl: require("./assets/me.jpg")
           },
           {
             id: "cicistream",
             des: "hhh",
             imgUrl: require("./assets/me.jpg")
           },
           {
             id: "cicistream",
             des: "hhh",
             imgUrl: require("./assets/me.jpg")
           }
          ]
        }
      },
      methods:{
  
      }
    }
  </script>
  <style></style>
