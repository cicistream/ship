<template>
  <div class="result-container">
    <foot></foot>
    <div>
        <mt-header style="background-color: #f8f8f8;color: black">
          <router-link to="/category" slot="left">
            <mt-button icon="back">{{rtag}}</mt-button>
          </router-link>
        </mt-header>
        <div class="tab-nav">
            <p @click="active='likePicture'">图片</p>
            <p @click="active='albumPicture'">画集</p>
        </div>
        <mt-tab-container v-model="active" style="background-color: #ececec; min-height: 80vh;">
          <mt-tab-container-item id="likePicture">
            <div class="no-list" v-if="!likePicture.length">暂无结果</div>
            <water v-else :dataSource="likePicture"></water>
          </mt-tab-container-item>
          <mt-tab-container-item id="albumPicture">
            <div class="no-list" v-if="!albumPicture.length">暂无结果</div>
            <layout v-else :dataSource="albumPicture"></layout>
          </mt-tab-container-item>
        </mt-tab-container>          
    </div>
  </div>
</template>
<script>
  import foot from './components/foot';
  import { Header } from 'mint-ui';
  import { Lazyload } from 'mint-ui';
  import { TabContainer, TabContainerItem } from 'mint-ui';
  import water from './components/water.vue';
  import layout from './components/layout.vue';


  export default{
    name: "result",
    components: {
      foot,Header,Lazyload,TabContainer,TabContainerItem,water,layout
    },
    data(){
      return {
        active: 'likePicture',
        resData: {
          tag: "人文艺术"
        },
        likePicture:[
        {   
						id: "cicistream",
            name: "hua",
            des: '关于图片的描述',
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/road.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "coco",
            name: "nian",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/us.jpg"),
						portrait: require("../src/assets/he.jpg")
					},
					{   
						id: "Kira",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/me.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/hair.jpg"),
						portrait: require("../src/assets/logo.png")
					}
        ],
        albumPicture:[
        {   
						id: "cicistream",
            name: "hua",
            des: '关于图片的描述',
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/road.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "coco",
            name: "nian",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/us.jpg"),
						portrait: require("../src/assets/he.jpg")
					},
					{   
						id: "Kira",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/me.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/hair.jpg"),
						portrait: require("../src/assets/logo.png")
					}
        ]
      }
    },
    computed: {
      rtag(){
        return this.$route.params.tag;
      }
    }
  }
</script>
<style>
  .tab-nav{
    display: flex;
    justify-content: left;
  }
  .tab-nav p{
    width: 80px;
    height: 30px;
    line-height: 30px;
  }
  .mint-cell-wrapper{
    font-size: 14px;
  }
</style>