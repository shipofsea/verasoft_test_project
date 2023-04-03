import { useEffect, useState } from 'react'
import { useAppDispatch, useTypedSelector } from '../../features/store'
import { orders_request } from '../../features/orders/orders.action'
import Tabs from './Tabs'
import SubTabs from './SubTabs'
import Table from './Table'
import './_orders.scss'

const Orders = () => {
	const dispatch = useAppDispatch()
	const { pending, orders } = useTypedSelector(state => state.orders)

	const [tab, setTab] = useState<string[]>([])
	const [subTab, setSubTab] = useState<string[]>([])
	const [tabIndex, setTabIndex] = useState('')
	const [subTabIndex, setSubTabIndex] = useState(0)

	useEffect(() => {
		dispatch(orders_request())
	}, [])

	useEffect(() => {
		const arr: any = Object.keys(orders).map((rs, key) => {
			return {
				key,
				val: rs,
				active: key === 2 ? true : false
			}
		})

		setTab(arr)

		if (arr.length !== 0) {
			setTabIndex(arr[2].val)
		}

		let subArr: any = []
		for (let index = 0; index < 2; index++) {
			const val = {
				key: index,
				active: index === 0 ? true : false,
				value: index === 0 ? 'SENT' : 'ERRORS'
			}

			subArr.push(val)
		}

		setSubTab(subArr)
	}, [orders])

	return (
		<>
			<Tabs tab={tab} setTab={setTab} orders={orders} setTabIndex={setTabIndex} setSubTabIndex={setSubTabIndex} setSubTab={setSubTab} />
			<SubTabs subTab={subTab} setSubTab={setSubTab} setSubTabIndex={setSubTabIndex} />
			<Table pending={pending} order={orders[tabIndex]} subTabIndex={subTabIndex} />
		</>
	)
}

export default Orders