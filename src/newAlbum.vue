<template>
    <div class="container">
        <mt-header class="top-header">
          <router-link to="/zone" slot="left">
            <mt-button><i class="iconfont">&#xe69a;</i></mt-button>
          </router-link>
          <mt-button slot="right" @click="upload">创建</mt-button>
        </mt-header>
        <div class="new-album">
          <p>画板名称<i style="color: red;">*</i></p>
          <mt-field placeholder="给画板起个名字吧" v-model="albumName"></mt-field>
          <p>画板描述<i style="color: red;">*</i></p>
          <mt-field placeholder="介绍一下这个画板吧" type="textarea" rows="4" v-modal="albumDes"></mt-field>
          <p>画板分类<i style="color: red;">*</i></p>
          <mt-radio class="album-tag-radio"
            align="right"
            v-model="albumTag"
            :options="tags">
          </mt-radio>
        </div>
    </div>
  </template>
  <script>
    import { Radio } from 'mint-ui';
    import { Header } from 'mint-ui';
    export default{
      name: "newAlbum",
      components: {
        Header
      },
      data(){
        return{
          tags:["平面","动漫","穿搭","旅行","宠物","头像","生活","电影"]
        }
      },
      methods:{
        upload(){

        }
      }
    }
  </script>
  <style>
    .new-album p{
      font-size: 14px;
      line-height: 40px;
      text-align: left;
      padding-left: 10px;
    }
    .new-album .mint-field-core{
      font-size: 12px;
    }
    .new-album .mint-radio-label{
      text-align: left;
    }
    .new-album .album-tag-radio .mint-cell{
      display: inline-block;
      width: 50%;
      margin: 0;
      border-right: 1px dotted #cecece;
    }
  </style>
