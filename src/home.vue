<template>
	<div class="homePage">
		<shipHead></shipHead>		
		<foot></foot>
		<div class="homeContent">
			<div class="stream">
				<div v-for="pic in album">
					<div class="picItem">
						<img class="pic" :src="pic.imgUrl">
						<div class="picInfo">
							<i class="iconfont">&#xe736;</i>
							<p>20</p>
							<i class="iconfont">&#xe83b;</i>
							<p>3</p>
						</div>
						<div class="owner">
							<img class="portrait" :src="pic.portrait">
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
  import foot from './components/foot'
	export default{
		name:'home',
		components:{
			shipHead,
			foot
		},
		data(){
			return{
				album:[
					{   
						id: "cicistream",
						name: "hua",
						imgUrl: require("../src/assets/road.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "coco",
						name: "nian",
						imgUrl: require("../src/assets/us.jpg"),
						portrait: require("../src/assets/he.jpg")
					},
					{   
						id: "Kira",
						name: "hua",
						imgUrl: require("../src/assets/me.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "cicistream",
						name: "hua",
						imgUrl: require("../src/assets/feng.jpeg"),
						portrait: require("../src/assets/pic.jpeg")
					},
					{   
						id: "cicistream",
						name: "hua",
						imgUrl: require("../src/assets/hair.jpg"),
						portrait: require("../src/assets/logo.png")
					},
					{   
						id: "cicistream",
						name: "hua",
						imgUrl: require("../src/assets/we.jpg"),
						portrait: require("../src/assets/logo.png")
					}
				   ]
			}
		}
	}
</script>
<style>
  .homePage{
    background-color: #ececec;
    width: 100vw;
  }

</style>