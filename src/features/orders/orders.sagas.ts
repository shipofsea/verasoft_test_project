import { all, call, put, takeLatest } from 'redux-saga/effects'
import { http } from '../../utils'
import { orders_success } from './orders.action'

const getOrder = async () => {
	const res = await http.get('https://evoteam-verasoft.github.io/data/orders.json')
	return res.data
}

function* getOrderSaga() {
	try {
		const response: [] = yield call(getOrder)

		yield put(
			orders_success({
				orders: response
			})
		)
	} catch (e) {

	}
}

function* orderSaga() {
	yield all([takeLatest('orders_request', getOrderSaga)])
}

export default orderSaga