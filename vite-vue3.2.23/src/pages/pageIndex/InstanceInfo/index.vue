<!--
 * @Author: Y
 * @Date: 2022-01-13 14:14:44
 * @Description: 
-->
<template>
	<a-form :layout="formLayout" :model="form" ref="formRef">
		<a-row gutter="12">
			<a-col md="24" lg="24" xl="24" xxl="14">
				<a-form-item
					label="题名"
					name="title"
					class="formItem"
					:label-col="formItemLayout.labelCol"
					:wrapper-col="formItemLayout.wrapperCol"
				>
					<!-- :rules="noISBN ? [{ required: true, message: '请输入题名' }] : []" -->
					<a-input placeholder="input placeholder" :disabled="disabled" v-model:value="form.title" />
					<!-- :ref="(inputRef) => setCurrFoucs(inputRef)}" -->
				</a-form-item>
			</a-col>
			<a-col md="24" lg="12" xl="12" :xxl="{ span: 10 }">
				<a-form-item label="版次印次" className="{css.versionAndEdition}">
					<a-form-item name="version" className="{css.formItem}">
						<Input placeholder="版次" :disabled="disabled" v-model:value="form.version" />
					</a-form-item>
					<a-form-item name="edition" className="{css.formItem}">
						<Input
							:style="{ marginLeft: '6px' }"
							placeholder="印次"
							:disabled="disabled"
							v-model:value="form.edition"
						/>
					</a-form-item>
				</a-form-item>
			</a-col>
			<a-col lg="12" xl="16" :xxl="{ span: 8 }">
				<a-row className="{css.rowItem}">
					<!-- 	:normalize="normalizePrices" -->
					<a-form-item
						:rules="[{ max: 11, message: '整数位不能超过8位' }]"
						label="定价"
						name="retailPrice"
						class="priceFormItem"
					>
						<Input
							:disabled="
								disabled ||
								formRef.instance.priceType === 'NONE' ||
								formRef.instance.priceType === 'NONE_ITEM' ||
								formRef.instance.priceType === 'UNKNOWN'
							"
							:style="{ width: '100%' }"
							v-model:value="form.retailPrice"
						/>
						<!-- 	:onBlur="priceFormat"
							:onPressEnter="priceFormat" -->
					</a-form-item>
					<a-form-item label="" name="priceType" className="formItemBtn">
						<Select :disabled="disabled" :showArrow="false" :style="{ width: '100%' }"> </Select>
					</a-form-item>
					<!-- 	{{ currencyOptions }} -->
				</a-row>
			</a-col>
		</a-row>

		<a-form-item
			label="版次印次"
			:label-col="formItemLayout.labelCol"
			:wrapper-col="formItemLayout.wrapperCol"
			name="version"
		>
			<a-input placeholder="input placeholder" v-model:value="version" />
		</a-form-item>
		<a-button type="primary" html-type="submit" @click="onSubmit"> Submit </a-button>
	</a-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
const formLayout = 'horizontal'
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 14 }
}

export default defineComponent({
	setup() {
		const formRef = ref()
		const data = reactive({})
		const store = useStore()
		const instanceInfo = store.state.bookRegister.instanceInfo
		let formData = reactive({
			form: {}
		})
		watch(instanceInfo, () => {
			debugger
			formData.form = instanceInfo.instance
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

		const disabled =
			!instanceInfo ||
			(instanceInfo &&
				instanceInfo.instance &&
				instanceInfo.instance.own &&
				!instanceInfo.instance.own.toLocaleUpperCase().includes('BOXUP') &&
				!instanceInfo.instance.own.toLocaleUpperCase().includes('CHECKIN'))

		return { ...toRefs(formData), formRef, formLayout, formItemLayout, onValuesChange, onSubmit, disabled }
	}
})
</script>

<style lang="scss"></style>
