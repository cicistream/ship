<template>
    <div class="container">
      <div class="no-list" v-if="!idolList.length">暂无关注</div>
      <people v-else :dataSource="idolList"></people>
    </div>
  </template>
  <script>
    import people from './components/people.vue'
    export default{
      name: "idol",
      components:{
        people,
      },
      data(){
        return{
         idolList:[
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
      }
    }
  </script>
  <style></style>