<!--
 * @Author: Y
 * @Date: 2022-03-17 13:38:50
 * @Description: 
-->
<template>
	<a-layout id="components-layout-demo-top" class="layout">
		<a-layout-header>
			<div class="logo" />
			<a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
				<a-menu-item key="1"> nav 1 </a-menu-item>
				<a-menu-item key="2"> nav 2 </a-menu-item>
				<a-menu-item key="3"> nav 3 </a-menu-item>
			</a-menu>
		</a-layout-header>
		<a-layout-content style="padding: 0 50px">
			<a-breadcrumb style="margin: 16px 0">
				<a-breadcrumb-item>Home</a-breadcrumb-item>
				<a-breadcrumb-item>List</a-breadcrumb-item>
				<a-breadcrumb-item>App</a-breadcrumb-item>
			</a-breadcrumb>
			<div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
		</a-layout-content>
		<a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
	</a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { routes } from '@/router'

export default defineComponent({
	setup() {
		const data = reactive({})
		const menus = routes.map((route) => {})

		return {}
	}
})
</script>

<style lang="scss"></style>
