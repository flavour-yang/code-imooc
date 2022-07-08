import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '@/App/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { Provider as MobxProvider } from 'mobx-react'
import store from './store'
import * as mobxStore from './mobxStore'
// import 'antd/dist/antd.css';
ReactDOM.render(
	<React.StrictMode>
		<MobxProvider store={mobxStore}>
			<Provider store={store}>
				<App />
			</Provider>
		</MobxProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
