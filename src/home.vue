<template>
	<div class="homePage">
		<shipHead></shipHead>		
		<foot></foot>
		<div class="homeContent">
			<div class="stream">
				<div v-for="pic in album">
					<div class="picItem" @click='toDetail(pic.id)'>
            <img class="pic" v-lazy="pic.imgUrl">
            <p v-if='pic.des' class="picDes">{{pic.des}}</p>
						<div class="picInfo">
							<i class="iconfont">&#xe736;</i>
							<p>{{pic.like}}</p>
							<i class="iconfont">&#xe83b;</i>
							<p>{{pic.collect}}</p>
						</div>
						<div class="owner">
							<img class="portrait" v-lazy="pic.portrait">
							<div class="picName">
								<p class="picOwner">{{pic.id}}</p>
								<p class="picAlbum">{{pic.name}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import shipHead from './components/shipHead';
  import foot from './components/foot';
  import { Lazyload } from 'mint-ui';
	export default{
		name:'home',
		components:{
			shipHead,
      foot,
      Lazyload
		},
		data(){
			return{
				album:[
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
						imgUrl: require("../src/assets/feng.jpeg"),
						portrait: require("../src/assets/pic.jpeg")
					},
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/hair.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "cicistream",
            name: "hua",
            like: 20,
            collect: 3,
						imgUrl: require("../src/assets/we.jpg"),
						portrait: require("../src/assets/logo.png")
					}
				   ]
			}
    },
    methods: {
      toDetail(id){
        this.$router.push({ name: 'detail', params: { picId: id }});
      }
    }
	}
</script>
<style>
  .homePage{
    background-color: #ececec;
    width: 100vw;
  }
  image[lazy=loading] {
   width: 40px;
   height: 300px;
   margin: auto;
  }
</style>