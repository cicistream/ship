<template>
    <div>
    	<foot></foot>
		<div class="categoryContent">
      <header>
        <mt-search
          v-model="searchValue"
          cancel-text="取消"
          placeholder="搜索" class="mt-search">
        </mt-search>
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
					des:"平面"
				},
				{
					imgUrl:require("../src/assets/cartoon.jpeg"),
					des:"动漫"
        },
        {
					imgUrl:require("../src/assets/look.jpeg"),
					des:"穿搭"
        },
        {
					imgUrl:require("../src/assets/travel.png"),
					des:"旅行"
        },
        {
					imgUrl:require("../src/assets/pet.jpeg"),
					des:"宠物"
        },
        {
					imgUrl:require("../src/assets/portrait.jpeg"),
					des:"头像"
        },
        {
					imgUrl:require("../src/assets/alive.jpeg"),
					des:"生活"
        },
        {
					imgUrl:require("../src/assets/dog.jpeg"),
					des:"动漫"
        },
        {
					imgUrl:require("../src/assets/leaf.jpg"),
					des:"动漫"
        },
        {
					imgUrl:require("../src/assets/plane.jpeg"),
					des:"动漫"
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
    background-color: #f8f8f8;
    margin-bottom: 0.4rem;
    border-radius: 0.2rem;
  }
	.cateItem{
    height: 3rem;
    /* width: 3rem; */
    min-width: 100%;
    /* max-height: 100%; */
    border-radius: 0.2rem 0.2rem 0 0; 
	}
</style>