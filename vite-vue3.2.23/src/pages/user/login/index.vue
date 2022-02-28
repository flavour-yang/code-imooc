<!-- /* * @Author: Y * @Date: 2021-11-26 16:24:36 * @Description: 登录 */ -->
<template>
	<a-form :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
		<a-form-item label="用户名">
			<a-input v-model:value="formData.username" />
		</a-form-item>
		<a-form-item label="密码">
			<a-input v-model:value="formData.password" @keyup.enter="onSubmit" type="textarea" />
		</a-form-item>
		<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
			<a-button type="primary" @click="onSubmit">Create</a-button>
			<a-button style="margin-left: 10px">Cancel</a-button>
		</a-form-item>
	</a-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { fakeAccountLogin, getUserAuthInfo } from '@/service/login'
import { message } from 'ant-design-vue'
import router from '@/router'

export default defineComponent({
	setup() {
		const formData = reactive({ username: '', password: '' })
		const labelCol = { span: 4 }
		const wrapperCol = { span: 14 }
		const onSubmit = () => {
			fakeAccountLogin(formData).then((login) => {
				if (login) {
					getUserAuthInfo(login?.user?.id).then((res) => {
						message.success('登录成功')
						console.log({ 登录成功: res })
						router.push('/index')
					})
				}
			})
		}

		return { formData, labelCol, wrapperCol, onSubmit }
	}
})
</script>
<style lang=""></style>
