interface ITabsProps {
	tab: string[]
	setTab: React.Dispatch<React.SetStateAction<string[]>>
	orders: []
	setTabIndex: React.Dispatch<React.SetStateAction<string>>
	setSubTabIndex: React.Dispatch<React.SetStateAction<number>>
	setSubTab: React.Dispatch<React.SetStateAction<string[]>>
}

const Tabs = ({ tab, setTab, orders, setTabIndex, setSubTabIndex, setSubTab }: ITabsProps) => {
	const handleTab = (key: number) => {
		const arr: any = Object.keys(orders).map((rs, idx) => {
			return {
				key: idx,
				val: rs,
				active: key === idx ? true : false
			}
		})

		setTab(arr)
		setTabIndex(arr[key].val)

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
		setSubTabIndex(0)
	}

	return (
		<div className="tabContent">
			{tab.map((rs: any) => {
				return <div className={rs.active ? `tabItem active` : `tabItem`} key={rs.key} onClick={() => handleTab(rs.key)}>{rs.val.replace('_', ' ')}</div>
			})}
		</div>
	)
}

export default Tabs