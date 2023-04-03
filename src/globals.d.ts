declare global {
	interface ISummary {
		id: number
		first_name: string
		last_name: string
		photo_url: string
		gender: string
		birth_date: string
		home_phone: string
		mobile_phone: string
		work_phone: string
		email: string
		activity: {
			sms: number,
			email: number,
			orders: number
		}
		carrier_status: {
			since: string,
			status: string
		}
	}

	interface ISummaryState {
		pending: boolean
		summary: ISummary[]
	}

	interface IOrder {
		id: number
		order_id: number
		sent_dt: string
		sent_tm: string
		subject: {
			title: string,
			email: string
		}
		type: string
	}

	type IOrders = {
		id: number,
		key: string,
		sent: IOrder[]
	}[]

	interface IOrderState {
		pending: boolean
		orders: IOrder[]
	}

	interface ISummaryRequest {
		type: 'summary_request'
	}

	interface IOrdersRequest {
		type: 'orders_request'
	}

	type SummarySuccess = {
		type: 'summary_success',
		payload: {
			summary: ISummary
		}
	}

	type OrdersSuccess = {
		type: 'orders_success',
		payload: {
			orders: IOrders
		}
	}

	type ReduxActions =
		| ISummaryRequest
		| IOrdersRequest
		| SummarySuccess
		| OrdersSuccess
}

export { }
