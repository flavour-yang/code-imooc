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
	return config
}
const responseCallback = (response) => {
	return response
}

instance.interceptors.request((config) => requestCallback(config))
instance.interceptors.response((response) => responseCallback(response))

export default instance
