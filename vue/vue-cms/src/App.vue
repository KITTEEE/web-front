<template>
    <div class="app-container">
        <!-- 固定在顶部 -->
        <mt-header class="app-header" fixed title="VueDemo"></mt-header>
        <!-- 路由页面 -->
        <router-view></router-view>
        <!-- 底部 tab 栏 -->
       <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="search" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="shopcar" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.app-container {
    padding-top: 40px;
    padding-bottom: 50px;
}

</style>