export const orders_request = () => {
	return { type: 'orders_request' }
}

export const orders_success = (payload: { orders: IOrders }) => {
	return { type: 'orders_success', payload }
}