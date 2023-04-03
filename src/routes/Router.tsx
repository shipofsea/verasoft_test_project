import React, { lazy } from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { history } from "../utils"

const Home = lazy(() => import('../layouts/Home'))

export default () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Router>
	)
}