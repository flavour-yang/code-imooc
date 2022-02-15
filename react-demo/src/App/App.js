import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layouts from '../layout'
import routes from '../routes'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layouts />}>
					{routes.map((route) => {
						if (route.path === '/') {
							return <Route index element={route.component} key={route.path} />
						}
						return <Route path={route.path} element={route.component} key={route.path} />
					})}
				</Route>
			</Routes>
		</Router>
	)
}

export default App
