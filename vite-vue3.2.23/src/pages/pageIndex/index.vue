<template>
	<div class="page-index">
		<div class="page-index-content">
			<div class="page-index-left">
				<Top />
				<Tables />
			</div>
			<div class="page-index-right">
				<InstanceInfo />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getInstanceType } from '@/service/book/register'
import { defineComponent, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import Top from './Top/index.vue'
import Tables from './Tables/index.vue'
import InstanceInfo from './InstanceInfo/index.vue'

export default defineComponent({
	components: { Top, Tables, InstanceInfo },
	setup() {
		const store = useStore()
		const formData = reactive({ type: 'isbn', text: '' })

		onMounted(() => {
			getInstanceType().then((res) => {
				const currentType = res?.find((item: any) => item.code === 'book').id
				store.commit('bookRegister/SAVE_DATAS', { instanceData: res, currentType })
			})
		})

		return { formData }
	}
})
</script>

<style lang="scss">
@import '@/styles/variable';
.page-container {
	min-height: calc(100vh - 140px);
	position: relative;
	/* overflow: auto; */

	/* display: flex; */
}
.page-index {
	position: relative;
	color: $color-text-d;
	&-content {
		display: flex;
	}
	&-left {
		flex: 1;
		margin-right: 30px;
	}
	&-right {
		flex: 1;
	}
	&__nav--search {
		display: inline-block;
		position: relative;
		&--select {
			position: absolute;
			left: 28px;
			top: 1px;
			/* background: #000; */
			width: 100px;
			overflow: hidden;
			border-radius: $radius-30;
			input {
				border: none;
				height: 34px;
				line-height: 34px;
			}
			.el-input__inner {
				padding-right: 20px;
			}
			.el-input__icon {
				width: 16px;
				line-height: 34px;
			}
			.el-icon-arrow-up:before {
				content: '\e78f';
			}
		}
	}
	&__nav--input {
		width: 427px;
		background: $color-white;
		border-radius: $radius-30;
		/* border: 1px solid $color-line; */
		margin-left: 24px;

		input {
			background-color: transparent;
			border-radius: $radius-30;
			height: 36px;
			outline: none;
			border-color: $color-line;
			padding: 0 105px 0 105px !important;

			&:hover {
				border-color: $color-ui;
			}
		}
	}
	&__nav--btn {
		height: 36px;
		padding: 6px 20px;
		width: 80px;
		border-radius: $radius-25;
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: $font-size-title-l;
	}
}
</style>
