<template>
    <div>
    	<foot></foot>
		<div class="categoryContent">
			<header>
				<div class="search">
					<i class="iconfont">&#xe6ac;</i>
					<p>搜索ship</p>
				</div>
			</header>
			<div class="cate">
				<ul class="cateList">
					<li v-for="item in categoryList">
						<img :src="item.imgUrl" alt="category" class="cateItem">
						<p class="cateDescribe">{{item.des}}</p>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>
<script>
	import foot from './components/foot'
	export default{
		name:'category',
		components:{
			foot
		},
		data(){
			return{
				categoryList:[
				{
					imgUrl:require("../src/assets/pingmian.jpg"),
					des:"平面"
				},
				{
					imgUrl:require("../src/assets/pic.jpeg"),
					des:"动漫"
				}
			]
			}
		}
	}
</script>
<style>
	.search{
		width: 91%;
		position: fixed;
		top: 0;
		text-align: left;
		font-size: 0.45rem;
		line-height: 1.25rem;
		padding-left: 0.5rem;
		margin:0.2rem;
		border-radius: 0.3rem;
		background-color: #ececec;
		color: #404040;
	}
	.search .iconfont{
		font-size: 0.5rem;
	}
	.search p{
		display: inline-block;
		margin-left: 0.2rem;
		color: #a0a0a0;
	}
	.cateList{
		font-size: 0.5rem;
		display: flex;
		justify-content: space-around;
		overflow: hidden;
	}
	.cateItem{
		height: 3rem;
	}
</style>