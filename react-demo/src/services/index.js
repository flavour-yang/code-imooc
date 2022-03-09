/*
 * @Author: Y
 * @Date: 2022-03-08 16:26:48
 * @Description: api
 */
import instance from './axios'

export const fetchInstance = (data) => {
	return instance('/api/jtlsp/capub/item/searchItemInstance', {
		data: data,
		method: 'POST',
		headers: {
			'x-okapi-tenant': 'diku',
			'x-okapi-token':
				'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYW5ncnVpMDAxIiwidXNlcl9pZCI6ImM3OTkyNWMxLWI4YjQtNDRjOS1iODZiLTBjOWU3YTVjOGJmYiIsImlhdCI6MTY0NjI3MTEwNCwidGVuYW50IjoiZGlrdSJ9.pKd160bwwqGE2kvb4glMQ_gGlQyZQOL52iN3yG764nY'
		}
	})
	// return postData('http://dev.jiatu.info:9216/api/jtlsp/capub/item/searchItemInstance', data)
}

// async function postData(url = '', data = {}) {
// 	// Default options are marked with *
// 	return fetch(url, {
// 		method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 		mode: 'cors', // no-cors, *cors, same-origin
// 		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: 'same-origin', // include, *same-origin, omit
// 		headers: {
// 			accept: '*/*',
// 			'accept-language': 'zh-CN,zh;q=0.9',
// 			'content-type': 'application/json',
// 			'x-okapi-tenant': 'diku',
// 			'x-okapi-token':
// 				'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYW5ncnVpMDAxIiwidXNlcl9pZCI6ImM3OTkyNWMxLWI4YjQtNDRjOS1iODZiLTBjOWU3YTVjOGJmYiIsImlhdCI6MTY0NjI3MTEwNCwidGVuYW50IjoiZGlrdSJ9.pKd160bwwqGE2kvb4glMQ_gGlQyZQOL52iN3yG764nY'
// 		},
// 		redirect: 'follow', // manual, *follow, error
// 		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 		body: JSON.stringify(data) // body data type must match "Content-Type" header
// 	})
// 	// return response.json() // parses JSON response into native JavaScript objects
// }
