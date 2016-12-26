import {AppContainer} from './containers/AppContainer'
import SetIndex from "./containers/SetIndex";
import Chat from "./containers/Chat";
import ShowMore from "./containers/ShowMore";
import IndexPc from "./containers/IndexPc";
import Basics from "./containers/Basics";
import Experience from "./containers/Experience";


import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'
const routes = <ReduxRouter>
	<Route path="/">
	<IndexRoute component={AppContainer(SetIndex)}></IndexRoute>
    <Route path="setIndex" component={AppContainer(SetIndex)}></Route>
    <Route path="chat" component={AppContainer(Chat)}></Route>
    <Route path="showMore" component={AppContainer(ShowMore)}></Route>
    <Route path="indexPc" component={AppContainer(IndexPc)}></Route>
    <Route path="basics" component={AppContainer(Basics)}></Route>
    <Route path="experience" component={AppContainer(Experience)}></Route>
    
	</Route>
</ReduxRouter>

export default routes
