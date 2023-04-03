import { useEffect, useState } from 'react'
import Spinner from "../utils/Spinner"
import { dateSent, timeString12hr } from "../../utils"

interface ITableProps {
	pending: boolean
	order: any
	subTabIndex: number
}

interface ISortProps {
	field: string
	order: number
}

const Table = ({ pending, order, subTabIndex }: ITableProps) => {
	const [loading, setLoading] = useState(false)
	const [sort, setSort] = useState<ISortProps>({ field: '', order: 1 })

	useEffect(() => {
		if (subTabIndex === 1) {
			setLoading(true)

			setTimeout(() => {
				setLoading(false)
			}, 2000)
		} else {
			setLoading(false)
		}
	}, [subTabIndex])

	const sortedOrders = order?.sent?.slice().sort((a: any, b: any) => {
		const { field, order } = sort

		switch (field) {
			case 'date':
				return (a.sent_dt + a.sent_tm) > (b.sent_dt + b.sent_tm) ? order : -order
			case 'subject':
				return a.subject.title > b.subject.title ? order : -order
			case 'communication':
				return a.type > b.type ? order : -order
			case 'order':
				return a.order_id > b.order_id ? order : -order
			default:
				return 0
		}
	})

	const sortTable = (field: string) => {
		if (sort.field !== field) {
			setSort({ field, order: 1 })
		} else {
			setSort({ field, order: -sort.order })
		};
	}

	return (
		<div className="table">
			{pending ? (
				<Spinner loading={pending} color={`#36d7b7`} size={15} isTxt={false} type={`table`} />
			) : (
				<>
					{order?.length !== 0 && subTabIndex === 0 ? (
						<>
							<div className="header">
								<p className="txt" style={{ width: '13%' }} onClick={() => sortTable('date')}>DATE & TIME</p>
								<p className="txt" style={{ width: '40%' }} onClick={() => sortTable('subject')}>SUBJECT</p>
								<p className="txt" style={{ width: '22%' }} onClick={() => sortTable('communication')}>COMMUNICATION TYPE</p>
								<p className="txt" style={{ width: '10%' }} onClick={() => sortTable('order')}>ORDER#</p>
								<p className="txt" style={{ width: '15%' }}></p>
							</div>
							<div className="content">
								{sortedOrders?.map((rs: IOrder, key: number) => {
									return (
										<div className="item" key={key}>
											<div style={{ width: '13%' }}>
												<p className="txt1">{dateSent(rs)}</p>
												<p className="txt2">{timeString12hr(rs)}</p>
											</div>
											<div style={{ width: '40%' }}>
												<p className="txt1">{rs.subject.title}</p>
												<p className="txt2">{rs.subject.email}</p>
											</div>
											<div style={{ width: '22%' }}>
												<p className="txt2">{rs.type}</p>
											</div>
											<div style={{ width: '15%' }}>
												<p className="txt2">{rs.order_id}</p>
											</div>
											<div style={{ width: '10%' }}>
												<div className="btn">RESEND</div>
											</div>
										</div>
									)
								})}
							</div>
						</>
					) : (
						<>
							{loading ? (
								<Spinner loading={loading} color={`#36d7b7`} size={15} isTxt={false} type={`table`} />
							) : (
								<div className="empty">No Items</div>
							)}
						</>
					)}
				</>
			)
			}
		</div >
	)
}

export default Table