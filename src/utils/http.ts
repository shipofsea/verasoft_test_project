import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export const http = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL
})

const requestHandler = async (request: AxiosRequestConfig) => {
	const token = sessionStorage.getItem('token')

	if (token) {
		request.headers = {
			Authorization: token
		}
	}

	return request
}

const successHandler = (response: AxiosResponse) => {
	return response
}

interface CustomAxiosError extends AxiosError {
	config: AxiosRequestConfig & { isCustomErrorMessage?: boolean },
	code?: string
	request?: any
	response?: AxiosResponse
}

const errorHandler = (error: CustomAxiosError) => {
	if (!error.config.isCustomErrorMessage) {
		if (error.response) {
			console.error(error.response)
			if (error.response.data.errors) {
				console.error(error.response.data.errors[0])
			} else {
				console.error('Something went wrong')
			}
		} else {
			console.error(error)
			console.error(error.message)
		}
	}

	return Promise.reject(error.response ? error.response : error)
}

http.interceptors.request.use((request) => requestHandler(request))

http.interceptors.response.use(
	(response) => successHandler(response),
	(error) => errorHandler(error)
)
