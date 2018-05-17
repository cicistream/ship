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
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="likePicture">
            <mt-cell>
              <div>
                <div v-for="(item,index) in likePicture" :key="item.id">
                    <img class="re" v-lazy="item.imgUrl">
                </div>
              </div>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="albumPicture">
            <mt-cell>
                <div>
                  <div v-for="(item,index) in albumPicture" :key="item.id">
                      <img class="re" v-lazy="item.imgUrl">
                  </div>
                </div>
            </mt-cell>
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
  export default{
    name: "result",
    components: {
      foot,Header,Lazyload,TabContainer,TabContainerItem
    },
    data(){
      return {
        active: 'likePicture',
        resData: {
          tag: "人文艺术"
        },
        likePicture:[
          {
            id:6,
            imgUrl: require("./assets/alive.jpeg"),
            tag: ["人文艺术"]
          }
        ],
        albumPicture:[
          {
            id:6,
            imgUrl: require("./assets/cartoon.jpeg"),
            tag: ["人文艺术"]
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