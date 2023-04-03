export const dateSent = (sent: any) => {
	let res: string = ''
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	const sentDate: string[] | undefined = sent?.sent_dt?.split('-')

	if (sentDate) {
		const sentDateDay = new Date(parseInt(sentDate[0], 10), parseInt(sentDate[1], 10) - 1, parseInt(sentDate[2], 10))
		const month = parseInt(sentDate[1], 10) - 1
		res = sentDateDay.toLocaleDateString('en-US', {
			weekday: 'short'
		}) + ', ' + months[month] + ' ' + parseInt(sentDate[2], 10)
	}

	return res
}

export const timeString12hr = (sent: any) => {
	const timeString: string | undefined = sent?.sent_tm

	return new Date('1970-01-01T' + timeString + 'Z').toLocaleTimeString('en-US',
		{ timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
	)
}