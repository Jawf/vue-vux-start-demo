<template>
	<div>
		<!-- <transition name="router-fade" mode="out-in"> -->
			<router-view v-wechat-title="$route.meta.title"></router-view>
		<!-- </transition> -->
    </div>
</template>

<script>

	export default {
		created() {
			if(process.env.NODE_ENV !== 'production') {
				let VConsole = require('vconsole');
				let vConsole = new VConsole();
			}
		}
	}

</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
  	@import './assets/css/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
