import { computed, action, makeAutoObservable, observable } from 'mobx'

/*
 * @Author: Y
 * @Date: 2022-07-07
 * @Description: mobx
 */
class RecommendedStore {
	@observable version = []

	constructor() {
		makeAutoObservable(this)
	}

	@computed
	get getListItems() {
		return this.version
	}

	@action
	setVersion(data) {
		this.version = data
	}
}

export default new RecommendedStore()
