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
	
</script>
<style>
	footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		height: 1.6rem;
		width: 100%;
		z-index: 3;
		background-color: #fff;
	}
	.footnav{
		width: 100%;
		display: flex;
		justify-content: space-around;
		color: #a1a1a1;
	}
</style>