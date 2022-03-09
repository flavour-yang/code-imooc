/*
 * @Author: Y
 * @Date: 2022-03-09 14:09:05
 * @Description:
 */
import React, { useEffect } from 'react'
import { Modal } from 'antd'
const Login = () => {
	const [visible, setVisible] = useEffect(false)
	const handleOk = () => {
		setVisible(false)
	}
	const handleCancel = () => {}
	return (
		<Modal title="登录" visible={visible} onOk={handleOk} onCancel={handleCancel}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	)
}

export default Login
