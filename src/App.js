import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPizzas } from './redux/actions/pizzas'
import { Route } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart } from './pages'



function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		// Перенести в Redux  подключить Redux-thunk
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzas(data))
		})
	}, [])

	return (
		<div className='wrapper'>
			<Route path='/'>
				<Header />
			</Route>
			<div className='content'>
				<Route path='/' component={Home} exact />
				<Route path='/cart' component={Cart} exact />
			</div>
		</div>
	)
}

export default App
