import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from './pages/productList'
import ProductPayment from './pages/productPayment'

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={ProductList} />
					<Route path='/payment' component={ProductPayment} />
				</Switch>
			</Router>
		</>
	)
}

export default App
