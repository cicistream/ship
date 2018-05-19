<template>
	<footer>
		<ul class="footnav">
			<router-link to="/home" class="foot1">
				<i class="iconfont">&#xe74f;</i>
				<p></p>
			</router-link>
			<router-link to="/category" class="foot2">
				<i class="iconfont">&#xe696;</i>
				<p></p>
			</router-link>
			<router-link to="/zone" class="foot3">
				<i class="iconfont">&#xe6af;</i>
				<p></p>
			</router-link>
		</ul>
	</footer>
</template>
<script>
  import userInfo from './userInfo.vue'
	export default{
    name: 'foot',
    data(){
      return{
        id : userInfo.userId
      }
    }
  }
</script>
<style>
	footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		height: 1.2rem;
		z-index: 3;
		background-color: #fff;
	}
	.footnav{
		display: flex;
    justify-content: space-around;
    line-height: 1.2rem;
		color: #a1a1a1;
	}
</style>