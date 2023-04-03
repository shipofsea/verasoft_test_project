export const summary_request = () => {
	return { type: 'summary_request' }
}

export const summary_success = (payload: { summary: ISummary }) => {
	return { type: 'summary_success', payload }
}