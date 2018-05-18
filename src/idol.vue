<template>
    <div>
      <div class="no-list" v-if="!idolList.length">暂无关注</div>
      <layout v-else :dataSource="idolList"></layout>
    </div>
  </template>
  <script>
    import layout from './components/layout.vue'
    export default{
      name: "idol",
      components:{
        layout,
      },
      data(){
        return{
          idolList:[]
        }
      }
    }
  </script>
  <style></style>