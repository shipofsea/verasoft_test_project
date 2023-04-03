const initialState: ISummaryState = {
	pending: false,
	summary: []
}

const summaryReducer = (state = initialState, action: ReduxActions) => {
	switch (action.type) {
		case 'summary_request':
			return {
				...state,
				pending: true
			}
		case 'summary_success':
			return {
				...state,
				pending: false,
				summary: action.payload.summary,
				error: null
			}
		default:
			return {
				...state
			}
	}
}

export default summaryReducer