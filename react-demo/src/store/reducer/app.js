/*
 * @Author: Y
 * @Date: 2022-03-07 16:24:10
 * @Description:
 */

const SET_APP = 'SET_APP'

const initState = {
	sidebarCollapsed: false,
	settingPanelVisible: false,
	count: 1
}

export const appActions = (value) => {
	return { type: SET_APP, value }
}
// export const appActions = (value) => {
// 	return {
// 		type: SET_APP,
// 		value
// 	}
// }

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
