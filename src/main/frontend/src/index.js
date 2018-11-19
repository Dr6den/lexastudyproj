import React from 'react'
import { render } from 'react-dom'
import FormComponent from './components/FormComponent'
import Admin from './components/Admin'
import { HashRouter, Route, Switch} from 'react-router-dom'

window.React = React

render(
    <HashRouter>
	<div className="main">
	<Switch>
        	<Route exact path="/" component={FormComponent} />
        	<Route path="/admin" component={Admin} />
	</Switch>
	</div>
    </HashRouter>,
    document.getElementById("react-container")
)

