import { all, call, put, takeLatest } from 'redux-saga/effects'
import { http } from '../../utils'
import { summary_success } from './summary.action'

const getSummary = async () => {
	const res = await http.get('https://evoteam-verasoft.github.io/data/summary.json')
	return res.data
}

function* getSummarySaga() {
	try {
		const response: ISummary = yield call(getSummary)

		yield put(
			summary_success({
				summary: response
			})
		)
	} catch (error) {
		console.error(error)
	}
}

function* summarySaga() {
	yield all([takeLatest('summary_request', getSummarySaga)])
}

export default summarySaga