/*
 * @Author: Y
 * @Date: 2022-02-15 16:36:06
 * @Description:
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import routes from '@/routes'
import { observer } from 'mobx-react'
import store from '../../mobxStore'
const Backend = () => {
	const location = useLocation()
	const menus = routes.filter((route) => route.menu === 1)
	const version = store.recommendedStore.version
	console.log(version)
	const add = () => {
		store.recommendedStore.setVersion([...version, ...[Math.random()]])
	}
	const remove = () => {
		const list = version.slice(1, version.length)
		store.recommendedStore.setVersion(list)
	}
	remove
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
			<div>
				{version.map((item) => (
					<span key={item}>{item}</span>
				))}
			</div>
			<Button onClick={add}>add</Button>
			<Button onClick={remove}>remove</Button>
		</div>
	)
}
export default observer(Backend)

Backend.propTypes = {
	recommendedStore: PropTypes.obj
}
