<template>
  <div>
    <div class="no-list" v-if="!likeList.length">暂无收藏</div>
    <water v-else :dataSource="likeList"></water>
  </div>
</template>
<script>
  import water from './components/water.vue'
  export default{
    name: "like",
    components: {
      water,
    },
    mounted(){
      getLikeList();
    },
    data(){
      return{
        likeList:[
          {
            
          }
        ]
      }
    },
    methods:{
      getLikeList(){
        this.$http.get('/zone/like',function(req,res){

        })
      }
    }
  }
</script>
<style></style>