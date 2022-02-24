/*
 * @Author: Y
 * @Date: 2022-02-15 16:36:02
 * @Description:
 */
import React, { useEffect } from 'react'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import routes from '@/routes'
const Frontend = () => {
	const location = useLocation()
	const menus = routes.filter((route) => route.menu === 1)

	useEffect(() => {
		fetch('/api/jtlsp/system/dictionary/getInstanceType', {
			headers: {
				'x-okapi-tenant': 'diku',
				'x-okapi-token':
					'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYW5ncnVpMDAxIiwidXNlcl9pZCI6ImM3OTkyNWMxLWI4YjQtNDRjOS1iODZiLTBjOWU3YTVjOGJmYiIsImlhdCI6MTY0NTY4NTY2OSwidGVuYW50IjoiZGlrdSJ9.fs5u0jq_J_uO2dtGZtP_fuxW03yNwmZHb7S_sUjxkTE'
			},
			method: 'GET'
		})
	}, [])

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
export default Frontend
