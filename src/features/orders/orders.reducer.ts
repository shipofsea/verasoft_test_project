const initialState: IOrderState = {
	pending: false,
	orders: []
}

const ordersReducer = (state = initialState, action: ReduxActions) => {
	switch (action.type) {
		case 'orders_request':
			return {
				...state,
				pending: true
			}
		case 'orders_success':
			return {
				...state,
				pending: false,
				orders: action.payload.orders,
				error: action.payload.orders
			}
		default:
			return {
				...state
			}
	}
}

export default ordersReducer