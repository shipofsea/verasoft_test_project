import { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaAt } from 'react-icons/fa'

interface IContentProps {
	id: string
	gender: string
	birth_date: string
	mobile_phone: string
	work_phone: string
	home_phone: string
	email: string
	activity: any
	carrier_status: any
}

const Content = ({ id, gender, birth_date, mobile_phone, work_phone, home_phone, email, activity, carrier_status }: IContentProps) => {
	const [age, setAge] = useState('')
	const [date, setDate] = useState('')

	useEffect(() => {
		const timeDiff = Math.abs(Date.now() - new Date(birth_date).getTime())
		const age = Math.floor((timeDiff / (1000 * 3600 * 24) / 365.25))
		setAge(age.toString())

		if (carrier_status) {
			const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
			const splitTime = carrier_status?.since.split('T')
			const sinceDate: string[] = splitTime[0].split('-')
			const month = parseInt(sinceDate[2])
			const dateText = 'SINCE ' + months[month] + ' ' + month + ', ' + sinceDate[0]
			setDate(dateText)
		}
	}, [birth_date, carrier_status])

	return (
		<div className="summaryContent">
			<div className="firstItem">
				<FaRegUser className="userAvata" />
				<p className="txt">{gender} - {age}</p>
			</div>
			<div className="secondItem">
				<div className="item">
					<FaRegUser className="icon user" />
					<p className="txt">#{id}</p>
				</div>
				<div className="item">
					<FaMobileAlt className="icon phone" />
					<p className="txt">{mobile_phone}</p>
				</div>
				<div className="item">
					<FaRegBuilding className="icon address" />
					<p className="txt">{work_phone}</p>
				</div>
				<div className="item">
					<FaHome className="icon home" />
					<p className="txt">{home_phone}</p>
				</div>
				<div className="item">
					<FaAt className="icon email" />
					<p className="txt">{email}</p>
				</div>
			</div>
			<div className="thirdItem">
				<div className="activeTxt">90-DAY COMMUNICATION ACTIVITY</div>
				<div className="stats">
					<div className="statsItem">
						<div className="total">{activity?.sms}</div>
						<div className="statsIndex">SMS</div>
					</div>
					<div className="statsItem">
						<div className="total">{activity?.email}</div>
						<div className="statsIndex">EMAIL</div>
					</div>
					<div className="statsItem">
						<div className="total">{activity?.orders}</div>
						<div className="statsIndex">ORDERS</div>
					</div>
				</div>
			</div>
			<div className="fourthItem">
				<div className="status">
					<p className="txt1">SMS CARRIER STATUS</p>
					<p className="txt2">{carrier_status?.status}</p>
				</div>
				<div className="date">{date}</div>
			</div>
		</div>
	)
}

export default Content