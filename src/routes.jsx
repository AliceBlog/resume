import {AppContainer} from './containers/AppContainer'
import SetIndex from "./containers/SetIndex";


import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'
const routes = <ReduxRouter>
	<Route path="/">
	<IndexRoute component={AppContainer(SetIndex)}></IndexRoute>
    <Route path="setIndex" component={AppContainer(SetIndex)}></Route>

	</Route>
</ReduxRouter>

export default routes
