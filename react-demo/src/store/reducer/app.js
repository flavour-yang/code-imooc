/*
 * @Author: Y
 * @Date: 2022-03-07 16:24:10
 * @Description: redux app
 */
import { fetchInstance } from '@/services'

const SET_APP = 'SET_APP'

const initState = {
	sidebarCollapsed: false,
	settingPanelVisible: false,
	count: 1,
	instanceList: []
}

export const appActions = (value) => {
	return { type: SET_APP, value }
}

export const getInstance = (params) => (dispatch, getState) => {
	return new Promise((resolve, reject) => {
		fetchInstance(params)
			.then((response) => {
				// response.json().then((res) => {
				const { data, code } = response
				if (code === 'COMMON_200') {
					console.log({ instanceList: getState().app.instanceList })
					dispatch(appActions({ instanceList: data }))
					appActions(appActions({ instanceList: data }))
					console.log({ instanceList: getState().app.instanceList })
					resolve(data)
				} else {
					const msg = data.msg
					reject(msg)
				}
				// })
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default function app(state = initState, actions) {
	switch (actions.type) {
		case SET_APP:
			return {
				...state,
				...actions.value
			}
		default:
			return {
				...state
			}
	}
}
