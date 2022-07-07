/*
 * @Author: Y
 * @Date: 2022-03-08 17:23:03
 * @Description: axios
 */
import axios from 'axios'

const instance = axios.create({
	timeout: 60000,
	headers: {}
})

const requestCallback = (config) => {
	console.log({ requestConfig: config })
	return config
}
const responseCallback = (response) => {
	console.log({ response: response })
	if (response.data) {
		return response.data
	}
	return response
}

instance.interceptors.request.use((config) => requestCallback(config))
instance.interceptors.response.use((response) => responseCallback(response))

export default instance
