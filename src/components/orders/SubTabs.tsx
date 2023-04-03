interface ISubTabsProps {
	subTab: string[]
	setSubTab: React.Dispatch<React.SetStateAction<string[]>>
	setSubTabIndex: React.Dispatch<React.SetStateAction<number>>
}

const SubTabs = ({ subTab, setSubTab, setSubTabIndex }: ISubTabsProps) => {
	const handleSubTabs = (key: number) => {
		let subArr: any = []

		for (let index = 0; index < 2; index++) {
			const val = {
				key: index,
				active: index === key ? true : false,
				value: index === 0 ? 'SENT' : 'ERRORS'
			}

			subArr.push(val)
		}

		setSubTab(subArr)
		setSubTabIndex(key)
	}

	return (
		<div className="subTabContent">
			{subTab.map((rs: any) => {
				return <div className={rs.active ? `subTab active` : `subTab`} key={rs.key} onClick={() => handleSubTabs(rs.key)}>{rs.value}</div>
			})}
			<div className="txtItem">
				<p className="txt">RECENT ORDERS</p>
			</div>
		</div>
	)
}

export default SubTabs