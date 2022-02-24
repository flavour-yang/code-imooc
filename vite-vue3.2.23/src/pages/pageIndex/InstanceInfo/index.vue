<!--
 * @Author: Y
 * @Date: 2022-01-13 14:14:44
 * @Description: 
-->
<template>
	<div class="input-blur">
		<div class="input-out"><a-input placeholder="input placeholder" v-model:value="form.title" /></div>
	</div>
	<a-form :layout="formLayout" :model="form" ref="formRef">
		<a-form-item
			label="标题"
			:label-col="formItemLayout.labelCol"
			:wrapper-col="formItemLayout.wrapperCol"
			name="title"
		>
			<a-input placeholder="input placeholder" v-model:value="form.title" />
		</a-form-item>
		<a-form-item
			label="版次印次"
			:label-col="formItemLayout.labelCol"
			:wrapper-col="formItemLayout.wrapperCol"
			name="version"
		>
			<a-input placeholder="input placeholder" v-model:value="form.version" />
		</a-form-item>
		<a-button type="primary" html-type="submit" @click="onSubmit"> Submit </a-button>
	</a-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
const formLayout = 'horizontal'
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 14 }
}

export default defineComponent({
	setup() {
		const formRef = ref()
		const data = reactive({})
		let formData = reactive({
			form: {
				username: '',
				password: ''
			}
		})
		const onValuesChange = () => {}
		const onSubmit = (values: any) => {
			formRef.value
				.validate()
				.then((res: object) => {
					//验证成功时跳转首页
					console.log({ res, formRef: formRef.value.title })
				})
				.catch((res: object) => {
					//验证失败提示错误信息
				})
			console.log({ values })
		}

		return { ...toRefs(formData), formRef, formLayout, formItemLayout, onValuesChange, onSubmit }
	}
})
</script>

<style lang="scss">
.input-blur {
	height: 300px;
	background: url('@/assets/pn.png') no-repeat center / cover;
	overflow: auto;
	.input-out {
		width: 200px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		margin-top: 100px;
		height: 30px;
		input {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: transparent;
			color: red;
			z-index: 2;
		}
		&::after{
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(255,255,255,.3);
			filter: blur(3px);
			z-index: 1;
		}
	}
}
</style>
