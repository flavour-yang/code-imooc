import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Provider as MobxProvider } from 'mobx-react';
import store from './store';
import * as mobxStore from './mobxStore';
// import 'antd/dist/antd.css';
// ReactDOM.render(
// 	<React.StrictMode>
// 		<MobxProvider store={mobxStore}>
// 			<Provider store={store}>
// 				<App />
// 			</Provider>
// 		</MobxProvider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function render(props) {
	const { container } = props;
	ReactDOM.render(
		<React.StrictMode>
			<MobxProvider store={mobxStore}>
				<Provider store={store}>
					<App />
				</Provider>
			</MobxProvider>
		</React.StrictMode>,
		container ? container.querySelector('#root') : document.querySelector('#root')
	);
}

if (!window.__POWERED_BY_QIANKUN__) {
	render({});
}

export async function bootstrap() {
	console.log('[react16] react app bootstraped');
}

export async function mount(props) {
	console.log('[react16] props from main framework', props);
	render(props);
}

export async function unmount(props) {
	const { container } = props;
	ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
	console.log('update props', props);
}

reportWebVitals();
