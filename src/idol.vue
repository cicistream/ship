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
          idolList:[]
        }
      },
      async mounted(){
        for(let i = 0; i <this.idols.length;i++){
          await this.getidol(this.idols[i]);
        }
      },
      computed:{
        idols(){
          return this.$route.params.data;
        }
      },
      methods:{
        getidol(value){
            this.$http.get('/api/zone/idol',{params:{name: value}}).then((res)=>{
              if(res.data.code === 200){
                this.idolList = this.idolList.concat(res.data.data);
              }
            }).catch((e)=>{

            })
          }
    }
    }
  </script>
  <style></style>