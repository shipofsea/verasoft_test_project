import { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '../../features/store'
import { summary_request } from '../../features/summary/summary.action'
import Header from "./Header"
import Content from './Content'

interface ISummaryProps {
	overlay: boolean
	setOverLay: React.Dispatch<React.SetStateAction<boolean>>
}

const Summary = ({ overlay, setOverLay }: ISummaryProps) => {
	const dispatch = useAppDispatch()
	const { summary } = useTypedSelector(state => state.summary)

	useEffect(() => {
		dispatch(summary_request())
	}, [])

	return (
		<>
			<Header
				firstName={summary['first_name']}
				lastName={summary['last_name']}
				overlay={overlay}
				setOverLay={setOverLay}
			/>
			<Content
				id={summary['id']}
				gender={summary['gender']}
				birth_date={summary['birth_date']}
				mobile_phone={summary['mobile_phone']}
				work_phone={summary['work_phone']}
				home_phone={summary['home_phone']}
				email={summary['email']}
				activity={summary['activity']}
				carrier_status={summary['carrier_status']}
			/>
		</>
	)
}

export default Summary