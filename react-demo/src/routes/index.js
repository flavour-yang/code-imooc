/*
 * @Author: Y
 * @Date: 2022-02-14 17:35:47
 * @Description:
 */
import Main from '@/pages/Main'
import Course from '@/pages/Course'
import Recommended from '@/pages/Recommended'
import Backend from '@/pages/Backend'
import Frontend from '@/pages/Frontend'
const routes = [
	{
		name: '首页',
		path: '/',
		menu: 0,
		component: <Main />
	},
	{
		name: '课程',
		path: '/course',
		menu: 0,
		component: <Course />
	},
	{
		name: '综合',
		path: '/recommended',
		menu: 1,
		component: <Recommended />
	},
	{
		name: '后端',
		path: '/backend',
		menu: 1,
		component: <Backend />
	},
	{
		name: '前端',
		path: '/frontend',
		menu: 1,
		component: <Frontend />
	}
]
export default routes
