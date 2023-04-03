import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import summaryReducer from './summary/summary.reducer'
import ordersReducer from './orders/orders.reducer'
import { rootSaga } from './rootSagas'
import { history, http } from '../utils'

const rootReducer = combineReducers({
	summary: summaryReducer,
	orders: ordersReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: { extraArgument: { http, history } },
			serializableCheck: false
		}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()