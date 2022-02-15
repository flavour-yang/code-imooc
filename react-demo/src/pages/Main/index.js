/*
 * @Author: Y
 * @Date: 2022-02-11 16:13:01
 * @Description:
 */
import React from 'react'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import routes from '@/routes'
const Main = () => {
	const location = useLocation()
	return (
		<div>
			{routes
				.filter((route) => route.menu === 1)
				.map((route) => {
					if (location.pathname === route.path) {
						return (
							<Button type="link" key={route.path}>
								<Link to={route.path} replace={true}>
									{route.name}
								</Link>
							</Button>
						)
					}
					return (
						<Button type="link" key={route.path}>
							<Link to={route.path} replace={true}>
								{route.name}
							</Link>
						</Button>
					)
				})}
		</div>
	)
}
export default Main

// import * as React from "react";

// function AboutPage() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// export default AboutPage;
