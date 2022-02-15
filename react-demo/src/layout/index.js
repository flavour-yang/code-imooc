/*
 * @Author: Y
 * @Date: 2022-02-14 17:12:40
 * @Description:
 */
import { useEffect, useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom'
import routes from '../routes'
import style from './index.module.css'
const { Header, Content, Footer } = Layout
const Layouts = () => {
	const history = useNavigate()
	const location = useLocation()
	const [activeMenu, setActiveMenu] = useState('/')

	const pathSnippets = location.pathname.split('/').filter((i) => i)
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>{_}</Link>
			</Breadcrumb.Item>
		)
	})

	const breadcrumbItems = [
		<Breadcrumb.Item key="/">
			<Link to="/">main</Link>
		</Breadcrumb.Item>
	].concat(extraBreadcrumbItems)

	const menuClick = (params) => {
		const { key } = params
		history(key)
	}

	useEffect(() => {
		location.pathname.length < 2
			? setActiveMenu(location.pathname)
			: setActiveMenu(location.pathname.replace(/\//g, ''))
	}, [location])

	console.log({ activeMenu, location, breadcrumbItems })
	return (
		<Layout className="layout" theme="light">
			<Header theme="light" style={{ background: '#fff' }}>
				<div className="logo" />
				<Menu mode="horizontal" selectedKeys={[activeMenu]} onClick={(props) => menuClick(props)}>
					{routes
						.filter((route) => route.menu === 0)
						.map((route) => (
							<Menu.Item key={route.path}>{route.name}</Menu.Item>
						))}
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb>{breadcrumbItems}</Breadcrumb>
				<div className={style.content}>{<Outlet />}</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design 2022 Created by Ant UED</Footer>
		</Layout>
	)
}
export default Layouts
