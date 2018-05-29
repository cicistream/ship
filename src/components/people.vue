<template>
    <div class="static-container">
      <div class="people" v-for="(people,index) in dataSource" @click="toZone(people.name)">
        <div class="idol-header">
            <img :src="people.imgUrl">
        </div>
        <div class="layout-des">
            <p>{{people.name}}</p>
            <p>{{people.des}}</p>
        </div>
      </div>
    </div>
  </template>
  <script>
    import { Button,LazyLoad } from 'mint-ui';
    export default{
      name: "people",
      components:{
        Button,LazyLoad
      },
      props:{
        dataSource: Array,
      },
      data(){
        return {
        }
      },
      methods:{
      }
    }
  </script>
  <style>
  .static-container{
    columns: 2;
    column-gap: 0.3rem;
    font-size: 14px;
    margin-bottom: 1rem;
    color: #88878a;
    text-align: left;
  }
  .people{
    height: 4.3rem;
    overflow: hidden;
    -webkit-column-break-inside:avoid;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    border: 3px solid #fff;
  }
  .layout-des{
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    padding: 5px 10px;
  }
  .idol-header{
    width: 100px;
    height: 100px;
    margin: 3px auto;
  }
  .idol-header img{
    width: 100%;
    height: 100%;
    border-radius: 99px;
    
  }
  </style>