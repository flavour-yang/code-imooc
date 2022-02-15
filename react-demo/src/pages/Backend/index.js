/*
 * @Author: Y
 * @Date: 2022-02-15 16:36:06
 * @Description:
 */

import React from 'react'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import routes from '@/routes'
const Backend = () => {
	const location = useLocation()
	const menus = routes.filter((route) => route.menu === 1)

	return (
		<div>
			{menus.map((route) => {
				if (location.pathname === route.path) {
					return (
						<Button type="link" key={route.path}>
							<Link to={route.path}> {route.name}</Link>
						</Button>
					)
				}
				return (
					<Button type="text" key={route.path}>
						<Link to={route.path}> {route.name}</Link>
					</Button>
				)
			})}
		</div>
	)
}
export default Backend
