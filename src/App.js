import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Payment from './pages/payment'
import ProductList from './pages/productList'

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={ProductList} />
					<Route path='/payment' component={Payment} />
				</Switch>
			</Router>
		</>
	)
}

export default App
