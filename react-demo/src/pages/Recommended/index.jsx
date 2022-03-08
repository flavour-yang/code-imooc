/*
 * @Author: Y
 * @Date: 2022-02-15 16:37:26
 * @Description:
 */
import React from 'react'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import routes from '@/routes'
import { connect } from 'react-redux'
import { appActions, getInstance } from '@/store/reducer/app'
const Recommended = (props) => {
	const location = useLocation()
	const menus = routes.filter((route) => route.menu === 1)
	const changeRedux = () => {
		const { count, sidebarCollapsed } = props
		console.log({ appActions, props })
		console.log(props.count)
		// appActions({ type: 'SET_APP', value: { count: count + 1 } })
		props.appActions({ count: count + 1, sidebarCollapsed: !sidebarCollapsed })
		props
			.getInstance({ isbn: '9876543211111', type: '2d49ee6a-16e2-466e-88d3-1482c31d18b5', source: 'SUBMISSION' })
			.then((res) => console.log({ res }))
		// app()
	}
	return (
		<div>
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
			<Button onClick={changeRedux}>redux</Button>
		</div>
	)
}
export default connect((state) => state.app, { appActions, getInstance })(Recommended)

Recommended.propTypes = {
	count: PropTypes.number,
	sidebarCollapsed: PropTypes.bool,
	appActions: PropTypes.func,
	getInstance: PropTypes.func
}
