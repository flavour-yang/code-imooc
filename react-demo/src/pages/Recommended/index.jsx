/*
 * @Author: Y
 * @Date: 2022-02-15 16:37:26
 * @Description: 综合
 */
import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import routes from '@/routes'
import { connect } from 'react-redux'
import { appActions, getInstance } from '@/store/reducer/app'
import { useRef } from 'react'
import CountDown from 'react-hooks-count-down'
// const CountDown = require('react-hooks-count-down/dist/umd')
// import { useEffect, useState } from 'react'

const Timer = (props) => {
	const MILLISECOND = 1000
	const SECOND = 1 * MILLISECOND
	const MINUTE = SECOND * 60
	const HOUR = MINUTE * 60
	const DAY = HOUR * 24

	const parseTime = (time) => {
		const days = Math.floor(time / DAY)
		const hours = Math.floor((time % DAY) / HOUR)
		const minutes = Math.floor((time % HOUR) / MINUTE)
		const seconds = Math.floor((time % MINUTE) / SECOND)
		const milliseconds = Math.floor(time % SECOND)

		return {
			total: time,
			days,
			hours,
			minutes,
			seconds,
			milliseconds
		}
	}
	const formatTime = (format, currentTime) => {
		const { days, hours, minutes, seconds, milliseconds } = currentTime
		if (format.includes('DD')) {
			format = format.replace('DD', padZero(days.toString()))
		}
		if (format.includes('hh')) {
			format = format.replace('hh', padZero(hours.toString()))
		}
		if (format.includes('mm')) {
			format = format.replace('mm', padZero(minutes.toString()))
		}
		if (format.includes('ss')) {
			format = format.replace('ss', padZero(seconds.toString()))
		}
		if (format.includes('ms')) {
			const strMilliseconds = milliseconds.toString().slice(0, 2)
			format = format.replace('ms', padZero(strMilliseconds))
		}
		return format
	}
	const padZero = (num, targetLength = 2) => {
		let str = num + ''

		while (str.length < targetLength) {
			str = '0' + str
		}

		return str
	}

	// eslint-disable-next-line react/prop-types
	const { countDown = HOUR, getTime, renderContent, format, actionRender } = props
	// 暂停时间
	const countRef = useRef(countDown)
	// 获取每次 render 的 time
	const timeRender = useRef(0)
	// 是否暂停
	const refRun = useRef(true)
	// 记录 requestAnimation id
	const refId = useRef(null)

	const [renderTime, setRenderTime] = useState({
		hour: '0',
		minute: '0',
		secound: '0',
		millisecond: '0'
	})
	const dateTime = Date.now()
	const time = () => {
		const endTime = dateTime + countRef.current
		const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)
		const parse = parseTime(getCurrentRemain())

		timeRender.current = getCurrentRemain()

		setRenderTime({
			hour: padZero(parse.hours),
			minute: padZero(parse.minutes),
			secound: padZero(parse.seconds),
			millisecond: padZero(parse.milliseconds, 3)
		})

		const requestAnimationId = requestAnimationFrame(time)
		refId.current = requestAnimationId
		if (!refRun.current) {
			countRef.current = getCurrentRemain()
			cancelAnimationFrame(refId.current)
			return
		}
	}

	const stop = () => {
		refRun.current = false
	}

	const start = () => {
		if (refRun.current) {
			return
		}
		refRun.current = true
		requestAnimationFrame(time)
	}

	const getRenderTime = () => {
		return parseTime(timeRender.current)
	}

	useEffect(() => {
		requestAnimationFrame(time)
		return () => {
			cancelAnimationFrame(refId.current)
		}
	}, [])

	getTime && getTime(getRenderTime())

	if (renderContent) {
		return renderContent({ time: getRenderTime(), stop, start })
	}

	return (
		<span>
			{format ? (
				formatTime(format, parseTime(timeRender.current))
			) : (
				<span>
					{renderTime.hour}:{renderTime.minute}:{renderTime.secound}:{renderTime.millisecond}
				</span>
			)}
			{actionRender ? (
				actionRender({ start, stop, run: refRun.current })
			) : (
				<React.Fragment>
					<button onClick={stop}>stop</button>
					<button onClick={start}>start</button>
				</React.Fragment>
			)}
		</span>
	)
}

const Recommended = (props) => {
	const [form] = Form.useForm()
	// const [now, setNow] = useState(+new Date())
	const timer = useRef(0)
	const [timer1, setTimer1] = useState(0)
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
	// const getNow = () => {
	// 	return +new Date()
	// }
	const time = () => {
		const dateTime = +new Date()
		const millisecond = +dateTime.toString().slice(-4)
		timer.current = millisecond
		if (timer.current < 100000) {
			// console.log(timer.current)
			setTimer1(millisecond)
			requestAnimationFrame(time)
		} else {
			cancelAnimationFrame(time)
			return
		}
	}

	useEffect(() => {
		requestAnimationFrame(time)
		// setNow(+new Date())
	}, [])

	const submit = (value) => {
		console.log(value)
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
			{/* <Button>{timer.current}</Button> */}
			<Button>{timer1}</Button>
			<div>
				<Timer></Timer>
			</div>
			<div>
				<Timer countDown={20 * 1000}></Timer>
			</div>
			<div>
				<Timer
					countDown={3 * 24 * 60 * 60 * 1000}
					renderContent={({ time }) => (
						<span>
							{time.days}天 {time.hours}时 {time.minutes}分 {time.seconds}秒 {(time.milliseconds + '').slice(0, 2)}ms
						</span>
					)}
				></Timer>
			</div>
			<div>
				<Timer countDown={60 * 60 * 1000} format={'DD天 hh:mm:ss:ms'}></Timer>
			</div>
			<div>
				<Timer
					actionRender={({ start, stop, run }) => (
						<React.Fragment>
							<Button onClick={() => (run ? stop() : start())}>{run ? 'stop' : 'start'}</Button>
							{/* <Button onClick={stop}>stop</Button> */}
						</React.Fragment>
					)}
				></Timer>
			</div>
			<div>
				<CountDown time={1000 * 20}></CountDown>
			</div>
			<form onSubmit={submit}>
				<input type="text" name="username" />
				<input type="password" name="password" />
				<button type="submit">提交</button>
			</form>
			<Form onFinish={submit} form={form}>
				<Form.Item name="username">
					<Input name="" />
				</Form.Item>
				<Form.Item name="password">
					<Input type="password" />
				</Form.Item>

				<Button htmlType="submit">提交</Button>
			</Form>
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
