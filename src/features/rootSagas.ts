import { all, fork } from 'redux-saga/effects'
import summarySaga from './summary/summary.sagas'
import orderSaga from './orders/orders.sagas'

export function* rootSaga() {
	yield all([
		fork(summarySaga),
		fork(orderSaga)
	])
}