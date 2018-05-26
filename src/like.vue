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
    // data(){
    //   return{
    //     likeList:[]
    //   }
    // },
    // async mounted(){
    //   for(let i = 0; i <this.likes.length;i++){
    //     await this.getlike(this.likes[i]);
    //   }
    // },
    computed:{
      likeList(){
        return this.$route.params.data;
      }
    },
    methods:{
      // getlike(value){
      //     this.$http.get('/api/zone/like',{params:{name: value}}).then((res)=>{
      //       if(res.data.code === 200){
      //         console.log(res.data.data)
      //         this.likeList = this.likeList.concat(res.data.data);
      //       }
      //     }).catch((e)=>{

      //     })
      //   }
    }
  }
</script>
<style></style>