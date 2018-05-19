<template>
	<div class="homePage">
		<shipHead></shipHead>		
		<foot></foot>
		<div class="homeContent">
			<water :dataSource="homeSource"></water>
		</div>
	</div>
</template>
<script>
	import shipHead from './components/shipHead';
  import foot from './components/foot';
  import { Lazyload } from 'mint-ui';
  import water from './components/water.vue'
	export default{
		name:'home',
		components:{
			shipHead,
      foot,
      Lazyload,
      water
		},
		data(){
			return{
				homeSource:[
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
      // toPicDetail: function(value){
      //   this.toDetail(value);
      // } 
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
  .homeContent{
    padding: 0 5px;
  }
</style>