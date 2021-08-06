import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {Categories, SortPopup, PizzaBlock, LoadingBlock} from '../components'

import {addPizzaToCart} from '../redux/actions/cart'
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'

const categoryName = ['Комбо', 'Бургеры', 'Роллы', 'Курица', 'Креветки']
const sortItem = [
	{name: 'популярности', type: 'popular', order: 'desc'},
	{name: 'цене', type: 'price', order: 'desc'},
	{name: 'названию', type: 'name', order: 'asc'},
]

function Home() {
	const dispatch = useDispatch()
	const items = useSelector(({pizzas}) => pizzas.items)
	const cartItems = useSelector(({cart}) => cart.items)
	const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
	const {category, sortBy} = useSelector(({filters}) => filters)

	React.useEffect(() => {
		dispatch(fetchPizzas(sortBy, category))
	}, [category, sortBy, dispatch])

	const onSelectCategory = React.useCallback(
		(index) => {
			dispatch(setCategory(index))
		},
		[dispatch],
	)
	const onSelectSortType = React.useCallback(
		(type) => {
			dispatch(setSortBy(type))
		},
		[dispatch],
	)
	const handleAddPizzaToCart = (obj) => {
		dispatch(addPizzaToCart(obj))
	}

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryName}
				/>
				<SortPopup
					activeSortType={sortBy.type}
					onClickSortType={onSelectSortType}
					items={sortItem}
				/>
			</div>
			<h2 className='content__title'>Все товары</h2>
			<div className='content__items'>
				{isLoaded
					? items.map((obj) => (
							<PizzaBlock
								onClickAddPizza={handleAddPizzaToCart}
								addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
								key={obj.id}
								{...obj}
							/>
					  ))
					: Array(16)
							.fill(0)
							.map((_, index) => <LoadingBlock key={index} />)}
			</div>
		</div>
	)
}

export default Home
