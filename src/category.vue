<template>
    <div>
    	<foot></foot>
		<div class="categoryContent">
      <header>
        <!-- <mt-search
          v-model="searchValue"
          cancel-text="取消"
          placeholder="搜索" class="mt-search" @click="toResult(searchValue)">
        </mt-search> -->
      </header>       
			<div class="cate">
				<ul class="cateList">
					<li v-for="item in categoryList" @click="toResult(item.tag)">
						<img :src="item.imgUrl" alt="category" class="cateItem">
						<p class="cateDescribe">{{item.tag}}</p>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>
<script>
  import foot from './components/foot'
  import { Search } from 'mint-ui';
	export default{
		name:'category',
		components:{
			foot
		},
		data(){
			return{
        searchValue:'',
				categoryList:[
				{
					imgUrl:require("../src/assets/plane.jpeg"),
					tag:"平面"
				},
				{
					imgUrl:require("../src/assets/cartoon.jpeg"),
					tag:"动漫"
        },
        {
					imgUrl:require("../src/assets/look.jpeg"),
					tag:"穿搭"
        },
        {
					imgUrl:require("../src/assets/travel.png"),
					tag:"旅行"
        },
        {
					imgUrl:require("../src/assets/pet.jpeg"),
					tag:"宠物"
        },
        {
					imgUrl:require("../src/assets/portrait.jpeg"),
					tag:"头像"
        },
        {
					imgUrl:require("../src/assets/alive.jpeg"),
					tag:"生活"
        },
        {
					imgUrl:require("../src/assets/dog.jpeg"),
					tag:"动漫"
        },
        {
					imgUrl:require("../src/assets/leaf.jpg"),
					tag:"动漫"
        },
        {
					imgUrl:require("../src/assets/plane.jpeg"),
					tag:"动漫"
				}
			]
			}
		}
	}
</script>
<style>
  header{
    overflow: auto;
  }
  header .mt-search{
    height: auto;
  }
	.cateList{
    font-size: 0.4rem;
    line-height: 0.8rem;
		/* display: flex;
    justify-content: space-around; */
    columns: 2;
    column-gap: 0.4rem;
    padding:0.3rem;
    margin-bottom: 1rem;
		overflow: hidden;
  }
  .cateList li{
    height: 3.5rem;
    overflow: hidden;
    background-color: #f8f8f8;
    margin-bottom: 0.4rem;
    border-radius: 0.2rem;
  }
	.cateItem{
    height: 2.2rem;
    /* width: 3rem; */
    min-width: 80%;
    /* max-height: 100%; */
    border-radius: 0.2rem 0.2rem 0 0; 
  }
  .cateDescribe{
    font-size: 14px;
    line-height: 30px;
  }
</style>