<!--
 * @Author: Y
 * @Date: 2022-01-12 14:14:58
 * @Description: 版本列表
-->

<template>
	<a-table :columns="columns" :data-source="versionData" :rowKey="(record) => record.instance.id" :pagination="false">
	</a-table>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash'
import moment from 'moment'
import { defineComponent, reactive, computed, h, watch } from 'vue'
import { useStore } from 'vuex'
interface Render {
	column: any
	index: number
	record: any
	text: string | undefined
}
export default defineComponent({
	setup() {
		const stroe = useStore()
		const data = reactive({})
		const versionData = computed(() => stroe.state.bookRegister.versionData)
		const searchTitle = computed(() => {
			const { type } = stroe.state.bookRegister.searchValues
			switch (type) {
				case 'usbn':
					return 'USBN'
				default:
					return 'ISBN'
			}
		})
		const columns = computed(() => {
			return [
				{
					title: searchTitle.value,
					dataIndex: 'isbn',
					width: '15%',
					customRender: ({ index, record }: Render) => {
						if (searchTitle.value === 'USBN' && record?.instance?.cn && record?.instance?.cn.indexOf(';') !== -1) {
							const cnArr = record.instance.cn.split(';')
							const cnELe: any[] = []
							cnArr.map((isbn: any) => {
								cnELe.push(isbn)
							})
							return h('div', {
								children: cnELe.map((item) => {
									return h('div', item)
								})
							})
						}
						if (record?.instance?.isbn && record?.instance?.isbn.indexOf(';') !== -1) {
							const isbnArr = record.instance.isbn.split(';')
							const isbnELe: any[] = []
							isbnArr.map((isbn: any, index: number) => {
								isbnELe.push(isbn)
							})
							return h(
								'div',
								isbnELe.map((item) => {
									return h('div', item)
								})
							)
						}
						return h('div', {}, record?.instance?.isbn)
					}
				},
				{
					title: 'CIP',
					dataIndex: 'cip',
					width: '15%',
					customRender: ({ index, record }: Render) => {
						return record && record.instance && record.instance.cip ? record.instance.cip : ''
					}
				},
				{
					title: '题名',
					dataIndex: 'title',
					width: '15%',
					customRender: ({ index, record }: Render) => {
						return record && record.instance && record.instance.title ? record.instance.title : ''
					}
				},
				{
					title: '出版者',
					dataIndex: 'publisher',
					width: '15%',
					customRender: ({ index, record }: Render) => {
						return record && record.instance && record.instance.publisher ? record.instance.publisher : ''
					}
				},
				{
					title: '版次印次',
					dataIndex: 'version',
					width: '10%',
					customRender: ({ index, record }: Render) => {
						let str = ''
						if (record.instance && record.instance.version) {
							if (+`${record.instance.version}`) {
								str += `${record.instance.version}版`
							} else {
								str += record.instance.version
							}
						}
						if (record.instance && record.instance.edition) {
							if (+`${record.instance.edition}`) {
								str += `${record.instance.edition}次印`
							} else {
								str += record.instance.edition
							}
						}
						return str
					}
				},
				{
					title: '出版时间',
					dataIndex: 'publishingYear',
					width: '10%',
					customRender: ({ index, record }: Render) => {
						if (record.instance && record.instance.publicationYear) {
							return record.instance.publicationYear
						}
						if (!record?.instance?.publishingYear && !record?.instance?.publishingMonth) {
							return null
						}
						return `${record.instance && record.instance.publishingYear ? record.instance.publishingYear : ''}.${
							record.instance && record.instance.publishingMonth ? record.instance.publishingMonth : ''
						}`
					}
				},
				{
					title: '编目',
					dataIndex: 'id',
					editable: false,
					width: '10%',
					customRender: ({ index, record }: Render) => {
						if (!record.instance || !record.instance.own) {
							return '否'
						}
						if (record.instance.own && record.instance.own.toLocaleUpperCase().includes('BOXUP')) {
							return '否'
						}
						if (record.instance.own && record.instance.own.toLocaleUpperCase().includes('CHECKIN')) {
							return '否'
						}
						return '是'
					}
				},
				// {
				// 	title: '缺失',
				// 	dataIndex: '',
				// 	editable: false,
				// 	width: '10%',
				// 	shouldCellUpdate: false, // 保持初次渲染
				// 	customRender: (id: string, record: any) => {
				// 		const locList = cloneDeep(resources)
				// 		// 快速生成从 1 到 locList.length 的连续数组 [1,2,3,4,5], 每一位是loc的index
				// 		const res = Array.from({ length: 5 }, (v, k) => k + 1)
				// 		locList &&
				// 			locList.map((location, index) => {
				// 				// 这条数据每个复本应该有几个
				// 				const currentFilledCopyData = [] // 满足情况的当前去向的复本数据
				// 				record &&
				// 					record.items &&
				// 					record.items.map((item) => {
				// 						if (
				// 							item &&
				// 							item.itemVO &&
				// 							item.itemVO.assetCode &&
				// 							item.itemVO.locationId &&
				// 							location.id === item.itemVO.locationId &&
				// 							item.itemVO.assetCode !== ''
				// 						) {
				// 							currentFilledCopyData.push(item)
				// 						}
				// 					})
				// 				if (currentFilledCopyData.length >= 1) {
				// 					const resIndex = res.findIndex((r) => r === index + 1)
				// 					resIndex > -1 && res.splice(resIndex, 1)
				// 				}
				// 			})
				// 		return res.join(',')
				// 	}
				// },
				{
					title: '登到时间',
					dataIndex: 'itemVO',
					width: '10%',
					customRender: ({ index, record }: Render) => {
						const time = record?.items?.[0]?.itemVO?.createdTime
						if (time) {
							return moment(time).format('YYYY-MM-DD  HH:mm:ss')
						}
						return ''
					}
				}
			]
		})

		return { columns, versionData }
	}
})
</script>

<style lang="scss"></style>
